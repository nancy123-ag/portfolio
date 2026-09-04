import { ArrowUpRight } from 'lucide-react'

import { MagneticButton } from '@/components/magnetic-button'
import { BlurFade } from '@/components/ui/blur-fade'
import { Marquee } from '@/components/ui/marquee'
import { expertise, profile, projects, skills } from '@/data/site'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p className="text-[11px] uppercase tracking-[0.34em] text-accent">About</p>
      <div className="mt-4 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          Engineering clarity into products that have a lot going on.
        </h2>
        <div className="space-y-5 text-muted-foreground md:pt-2">
          <p>
            I work at the intersection of frontend architecture, product thinking, and interaction
            design. The goal is always the same: make complicated workflows feel understandable —
            without giving up performance or maintainability.
          </p>
          <p>
            Across{' '}
            <a className="text-foreground underline decoration-accent/50" href={profile.github}>
              @{profile.githubHandle}
            </a>
            , that has meant public-safety platforms, psychiatric support GUIs, market watchlists,
            and vision pipelines. I like shaping the system as much as the screen: APIs, state
            boundaries, and the collaboration around them.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Expertise() {
  return (
    <section id="expertise" className="border-y border-border bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] uppercase tracking-[0.34em] text-accent">Expertise</p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl md:text-5xl">What I bring to the table.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {expertise.map((item, index) => (
            <BlurFade key={item.index} delay={0.08 * index} inView>
              <article className="h-full rounded-[24px] border border-border bg-background/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                <p className="text-xs tracking-[0.2em] text-accent">{item.index}</p>
                <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <Marquee pauseOnHover className="[--duration:28s]">
          {skills.map((skill) => (
            <span
              key={skill}
              className="mx-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p className="text-[11px] uppercase tracking-[0.34em] text-accent">Selected work</p>
      <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
        A career shaped around ambitious interfaces.
      </h2>
      <div className="mt-12 divide-y divide-border border-y border-border">
        {projects.map((project, index) => (
          <BlurFade key={project.name} delay={0.05 * index} inView>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-4 py-8 md:grid-cols-[140px_1fr_auto] md:items-start"
            >
              <p className="text-sm text-muted-foreground">{project.year}</p>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent">{project.org}</p>
                <h3 className="mt-1 font-serif text-2xl group-hover:text-accent">{project.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-2.5 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-accent">
                0{index + 1}
                <ArrowUpRight size={16} />
              </span>
            </a>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] uppercase tracking-[0.34em] text-accent">Contact</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
          Have a difficult frontend — or AI product — problem?
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground">
          That is usually the interesting kind. Let us discuss the product, the constraints, and
          what a strong solution could look like.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticButton
            href={profile.github}
            className="bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
          >
            Open GitHub
            <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton
            href={`${profile.github}?tab=repositories`}
            className="border border-border hover:border-accent"
          >
            Browse repositories
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Designed for clarity. Built with React, Tailwind, Motion & Magic UI.</p>
      </div>
    </footer>
  )
}
