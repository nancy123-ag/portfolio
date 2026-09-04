import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin, ViteDevServer } from 'vite'

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function sendJson(res: ServerResponse, status: number, data: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}

function storePath() {
  const dir = path.resolve(process.cwd(), 'data')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  return path.join(dir, 'messages.json')
}

function saveMessage(payload: ContactPayload) {
  const file = storePath()
  let rows: Array<ContactPayload & { id: string; createdAt: string }> = []
  if (existsSync(file)) {
    try {
      rows = JSON.parse(readFileSync(file, 'utf8')) as typeof rows
    } catch {
      rows = []
    }
  }
  const record = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  }
  rows.unshift(record)
  writeFileSync(file, JSON.stringify(rows, null, 2), 'utf8')
  return record
}

async function notifyEmail(
  payload: ContactPayload,
  env: Record<string, string>,
) {
  const web3Key = env.WEB3FORMS_ACCESS_KEY || env.VITE_WEB3FORMS_ACCESS_KEY
  if (web3Key) {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3Key,
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
      }),
    })
    return { provider: 'web3forms', ok: response.ok }
  }

  const inbox = env.CONTACT_INBOX || 'nancyagarwal9023@gmail.com'
  const response = await fetch(`https://formsubmit.co/ajax/${inbox}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      _captcha: false,
      _template: 'table',
    }),
  })
  return { provider: 'formsubmit', ok: response.ok }
}

async function saveSupabase(
  payload: ContactPayload,
  env: Record<string, string>,
) {
  const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL
  const key = env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY
  if (!url || !key) return { skipped: true as const }

  const response = await fetch(`${url}/rest/v1/contact_messages`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
    }),
  })
  return { skipped: false as const, ok: response.ok }
}

export function contactApiPlugin(env: Record<string, string>): Plugin {
  const handler = async (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'OPTIONS') {
      res.statusCode = 204
      res.end()
      return
    }
    if (req.method !== 'POST') {
      sendJson(res, 405, { ok: false, error: 'Method not allowed' })
      return
    }

    try {
      const body = JSON.parse(await readBody(req)) as Partial<ContactPayload>
      const name = body.name?.trim() ?? ''
      const email = body.email?.trim() ?? ''
      const subject = body.subject?.trim() ?? ''
      const message = body.message?.trim() ?? ''

      if (!name || !email || !subject || !message) {
        sendJson(res, 400, { ok: false, error: 'All fields are required.' })
        return
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        sendJson(res, 400, { ok: false, error: 'Enter a valid email.' })
        return
      }

      const payload = { name, email, subject, message }
      const saved = saveMessage(payload)
      const [emailResult, supabaseResult] = await Promise.all([
        notifyEmail(payload, env).catch(() => ({ provider: 'none', ok: false })),
        saveSupabase(payload, env).catch(() => ({ skipped: false, ok: false })),
      ])

      sendJson(res, 200, {
        ok: true,
        id: saved.id,
        email: emailResult,
        supabase: supabaseResult,
      })
    } catch {
      sendJson(res, 500, { ok: false, error: 'Could not send the message.' })
    }
  }

  return {
    name: 'contact-api',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/api/contact', (req, res) => {
        void handler(req, res)
      })
    },
  }
}
