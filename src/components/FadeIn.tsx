import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
}

export default function FadeIn({ children, className = '' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  )
}
