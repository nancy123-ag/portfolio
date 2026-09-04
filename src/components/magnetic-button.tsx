import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function MagneticButton({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18 })
  const springY = useSpring(y, { stiffness: 220, damping: 18 })

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const node = ref.current
        if (!node) return
        const rect = node.getBoundingClientRect()
        x.set((event.clientX - rect.left - rect.width / 2) * 0.28)
        y.set((event.clientY - rect.top - rect.height / 2) * 0.28)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors',
        className,
      )}
    >
      {children}
    </motion.a>
  )
}
