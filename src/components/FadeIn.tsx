import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
}

// Content renders visible (no class) until JS mounts — bots/screenshots see full content.
// After mount the fade-in class is added and IntersectionObserver drives the reveal.
export default function FadeIn({ children, className = '' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    obs.observe(el)
    return () => { cancelAnimationFrame(frame); obs.disconnect() }
  }, [])

  return (
    <div ref={ref} className={`${mounted ? 'fade-in' : ''} ${className}`}>
      {children}
    </div>
  )
}
