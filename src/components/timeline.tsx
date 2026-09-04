import { GraduationCap, Briefcase } from 'lucide-react'
import { motion } from 'motion/react'

import { education, experience } from '@/data/site'

const items = [...experience, ...education]

export function Timeline() {
  return (
    <section id="work" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-indigo-600">Path</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">Experience & education</h2>
        <div className="relative mt-10 space-y-6 before:absolute before:bottom-4 before:left-[27px] before:top-4 before:w-px before:bg-line sm:before:left-[31px]">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08 }}
              className="relative grid gap-4 rounded-[24px] sm:grid-cols-[64px_1fr]"
            >
              <div className="relative z-10 grid size-14 place-items-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-lg dark:bg-indigo-500">
                {item.logo}
              </div>
              <div className="glass rounded-[24px] p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
                    {item.kind === 'work' ? <Briefcase size={12} /> : <GraduationCap size={12} />}
                    {item.kind === 'work' ? 'Internship' : 'College'}
                  </span>
                  <span>{item.dates}</span>
                  <span>· {item.place}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-muted">
                  {item.title} · {item.meta}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
