import { ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'

import { projects } from '@/data/site'

export function Projects() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-indigo-600">Build</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">Selected projects</h2>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="glass flex h-full flex-col overflow-hidden rounded-[28px]"
            >
              <div className={`h-28 shrink-0 bg-gradient-to-br ${project.accent} p-5 text-white`}>
                <p className="text-xs uppercase tracking-[0.2em] opacity-80">{project.kind}</p>
                <p className="mt-8 text-sm opacity-90">{project.dates}</p>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 min-h-[3.5rem] text-sm text-muted">{project.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/5 px-2.5 py-1 text-xs dark:bg-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-5 text-sm">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 font-medium text-white dark:bg-white dark:text-slate-950"
                    >
                      GitHub Repo
                    </a>
                  ) : null}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-dashed border-line px-4 py-2 text-xs text-muted">
                      Live Demo
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
