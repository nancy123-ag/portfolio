import { Hero } from '@/components/hero'
import { About, Contact, Expertise, SiteFooter, Work } from '@/components/sections'
import { SiteHeader } from '@/components/site-header'

export default function App() {
  return (
    <div className="relative min-h-svh overflow-x-hidden">
      <div className="grain" />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
