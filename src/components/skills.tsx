import { motion } from 'motion/react'

import { certifications, highlights, skillGroups } from '@/data/site'

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-indigo-600">Stack</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">Skills, certs, highlights</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-[24px] p-5"
            >
              <p className="text-sm font-medium">{group.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {certifications.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-4 text-sm hover:-translate-y-0.5 hover:border-indigo-300"
            >
              <p className="text-xs text-indigo-600">{item.date}</p>
              <p className="mt-1 font-medium">{item.title}</p>
              <p className="text-xs text-muted">{item.org}</p>
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white/50 p-4 dark:bg-slate-900/50">
              <p className="text-xs text-muted">{item.date}</p>
              <p className="mt-1 font-medium">{item.title}</p>
              <p className="text-xs text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
