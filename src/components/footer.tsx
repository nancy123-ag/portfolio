import { profile } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8 text-sm text-muted sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Local preview · React · Motion · Tailwind</p>
      </div>
    </footer>
  )
}
