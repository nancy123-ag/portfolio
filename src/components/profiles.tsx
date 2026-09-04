import { motion } from 'motion/react'

import { BrandIcon } from '@/components/brand-icon'
import { socials } from '@/data/site'

export function Profiles() {
  return (
    <section id="profiles" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-indigo-600">Practice</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">Coding profiles & skill badges</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          DSA and development profiles with live links.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 320, damping: 22 }}
              className="glass flex items-center gap-4 rounded-[24px] p-5"
            >
              <span
                className={`grid size-12 shrink-0 place-items-center rounded-2xl text-white shadow-sm ${item.tint}`}
              >
                <BrandIcon id={item.id} />
              </span>
              <span className="min-w-0">
                <span className="block font-medium">{item.label}</span>
                <span className="block truncate text-sm text-muted">{item.handle}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
