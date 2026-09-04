import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

import { MagneticButton } from '@/components/magnetic-button'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'
import { Particles } from '@/components/ui/particles'
import { TextAnimate } from '@/components/ui/text-animate'
import { profile, stats } from '@/data/site'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 md:pt-36">
      <Particles
        className="absolute inset-0"
        quantity={90}
        ease={70}
        color="#d4b483"
        size={0.45}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,rgba(212,180,131,0.12),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pb-24">
        <div>
          <BlurFade delay={0.05} inView>
            <p className="mb-6 text-[11px] uppercase tracking-[0.34em] text-accent">
              {profile.role} · {profile.location}
            </p>
          </BlurFade>

          <h1 className="font-serif text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.95] tracking-tight text-foreground">
            <TextAnimate animation="blurInUp" by="word" as="span" once>
              {profile.headlineLead}
            </TextAnimate>
            <span className="mt-2 block italic text-accent">
              <TextAnimate animation="blurInUp" by="word" delay={0.25} as="span" once>
                {profile.headlineEmphasis}
              </TextAnimate>
            </span>
          </h1>

          <BlurFade delay={0.35} inView>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.summary}
            </p>
          </BlurFade>

          <BlurFade delay={0.45} inView>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#work"
                className="bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
              >
                Explore my work
                <ArrowUpRight size={16} />
              </MagneticButton>
              <MagneticButton
                href={profile.github}
                className="border border-border bg-transparent text-foreground hover:border-accent"
              >
                GitHub
                <ArrowUpRight size={16} />
              </MagneticButton>
            </div>
          </BlurFade>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative self-end overflow-hidden rounded-[28px] border border-border bg-card/80 p-6 backdrop-blur-md"
        >
          <div className="mb-6 flex items-center gap-4">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="size-16 rounded-2xl object-cover ring-1 ring-border"
            />
            <div>
              <p className="text-sm text-muted-foreground">Currently building</p>
              <p className="font-medium">AI products with a product-design lens</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-background/50 p-3">
                <p className="font-serif text-2xl text-foreground">
                  {item.value === '15+' ? (
                    <>
                      <NumberTicker value={15} />+
                    </>
                  ) : item.value === '6' ? (
                    <NumberTicker value={6} />
                  ) : (
                    item.value
                  )}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Architecture · Craft · Impact
          </p>
        </motion.aside>
      </div>
    </section>
  )
}
