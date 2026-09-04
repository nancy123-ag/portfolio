import { Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { nav, profile } from '@/data/site'
import { useTheme } from '@/hooks/theme'

export function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/70 backdrop-blur-xl dark:bg-slate-950/55">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-medium">
          <span className="grid size-8 place-items-center rounded-xl bg-indigo-600 text-xs text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="grid size-10 place-items-center rounded-full border border-line"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white sm:inline-flex"
          >
            Let’s talk
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-4">
              {nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
