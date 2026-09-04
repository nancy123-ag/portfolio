import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

import { profile } from '@/data/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      })
      const json = (await response.json()) as { ok: boolean; error?: string }
      if (!response.ok || !json.ok) {
        throw new Error(json.error || 'Failed')
      }
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-indigo-600">Inbox</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Let’s build something</h2>
          <div className="mt-6 space-y-3 text-sm">
            <a href={profile.phoneHref} className="glass flex items-center gap-3 rounded-2xl p-4">
              <Phone size={16} /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="glass flex items-center gap-3 rounded-2xl p-4">
              <Mail size={16} /> {profile.email}
            </a>
            <p className="glass flex items-center gap-3 rounded-2xl p-4">
              <MapPin size={16} /> {profile.location}
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass grid gap-3 rounded-[28px] p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-xs text-muted">
              Name
              <input
                required
                name="name"
                className="rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none ring-indigo-400 focus:ring-2 dark:bg-slate-950/60"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-1 text-xs text-muted">
              Email
              <input
                required
                type="email"
                name="email"
                className="rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none ring-indigo-400 focus:ring-2 dark:bg-slate-950/60"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <label className="grid gap-1 text-xs text-muted">
            Subject
            <input
              required
              name="subject"
              className="rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none ring-indigo-400 focus:ring-2 dark:bg-slate-950/60"
              placeholder="Internship / project / hello"
            />
          </label>
          <label className="grid gap-1 text-xs text-muted">
            Message
            <textarea
              required
              name="message"
              rows={5}
              className="resize-none rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none ring-indigo-400 focus:ring-2 dark:bg-slate-950/60"
              placeholder="What should we talk about?"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
          >
            <Send size={16} />
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'sent' ? (
            <p className="text-sm text-emerald-600">Saved locally and emailed. Thanks!</p>
          ) : null}
          {status === 'error' ? <p className="text-sm text-rose-600">{error}</p> : null}
        </form>
      </div>
    </section>
  )
}
