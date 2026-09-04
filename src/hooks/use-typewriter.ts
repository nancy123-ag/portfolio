import { useEffect, useState } from 'react'

export function useTypewriter(phrases: string[], typingMs = 48, holdMs = 1400) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[index] ?? ''
    if (!deleting && text === phrase) {
      const hold = window.setTimeout(() => setDeleting(true), holdMs)
      return () => window.clearTimeout(hold)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((value) => (value + 1) % phrases.length)
      return
    }

    const delay = deleting ? 28 : typingMs
    const tick = window.setTimeout(() => {
      setText((current) =>
        deleting ? current.slice(0, -1) : phrase.slice(0, current.length + 1),
      )
    }, delay)
    return () => window.clearTimeout(tick)
  }, [deleting, holdMs, index, phrases, text, typingMs])

  return text
}
