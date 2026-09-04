import { useEffect, useMemo, useState } from 'react'

import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Profiles } from '@/components/profiles'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Timeline } from '@/components/timeline'
import { ThemeContext, type Theme } from '@/hooks/theme'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    return (localStorage.getItem('theme') as Theme) || 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggle: () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
    }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={value}>
      <div className="min-h-svh overflow-x-hidden text-ink">
        <Header />
        <main>
          <Hero />
          <Timeline />
          <Projects />
          <Skills />
          <Profiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
