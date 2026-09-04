import { ArrowDownRight, Download, Mail } from 'lucide-react'
import { motion } from 'motion/react'

import { profile, socials, stats } from '@/data/site'
import { useTypewriter } from '@/hooks/use-typewriter'

export function Hero() {
  const typed = useTypewriter(profile.typing)

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-muted dark:bg-slate-900/60">
            {profile.location}
          </p>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            Hi, I’m {profile.name}.
            <span className="mt-3 block min-h-[1.3em] text-indigo-600 dark:text-indigo-300">
              {profile.headline}{' '}
              <span className="underline decoration-cyan-400 decoration-4 underline-offset-8">
                {typed}
              </span>
              <span className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-1 animate-pulse bg-indigo-500" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-sm text-muted sm:text-base">
            B.Tech IT at Banasthali Vidyapith · 9.36 CGPA · interned at MITS, shipping AI products and
            web interfaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-slate-950"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-medium dark:bg-slate-900/70"
            >
              <Mail size={16} /> Contact me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted"
            >
              See work <ArrowDownRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="glass grid gap-4 rounded-[28px] p-5 sm:p-6"
        >
          <div className="flex items-center gap-3">
            <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-lg font-semibold text-white">
              {profile.initials}
            </div>
            <div>
              <p className="text-sm text-muted">Now</p>
              <p className="font-medium">{profile.role}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-line bg-white/50 p-3 dark:bg-slate-950/40">
                <p className="font-display text-xl">{item.value}</p>
                <p className="text-xs text-muted">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-3 py-1.5 text-xs hover:border-indigo-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
