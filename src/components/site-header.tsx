import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { nav, profile } from '@/data/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-border bg-[#07080c]/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full border border-border bg-card text-[11px] tracking-[0.18em] text-accent">
            {profile.initials}
          </span>
          <span className="text-sm font-medium">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-border px-4 py-2 text-sm text-foreground/90 transition hover:border-accent hover:text-accent md:inline-flex"
          >
            GitHub ↗
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-[#07080c] md:hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-6 text-lg">
              {nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
