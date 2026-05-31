import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { APP_URL } from '../constants'

const GOLD = '#C9A84C'
const SKY = '#60A5FA'

const MODULES = [
  { slug: 'medical',      label: 'Medical',      color: '#34d399' },
  { slug: 'construction', label: 'Construction',  color: '#fb923c' },
  { slug: 'missionary',   label: 'Missionary',    color: '#60a5fa' },
  { slug: 'sports',       label: 'Sports',        color: '#818cf8' },
  { slug: 'agriculture',  label: 'Agriculture',   color: '#facc15' },
  { slug: 'education',    label: 'Education',     color: '#c084fc' },
  { slug: 'hospitality',  label: 'Hospitality',   color: '#fb7185' },
  { slug: 'kids',         label: 'Kids',          color: '#f472b6' },
  { slug: 'fishing',      label: 'Fishing',       color: '#0ea5e9' },
  { slug: 'climbing',     label: 'Climbing',      color: '#a3e635' },
  { slug: 'hunting',      label: 'Hunting',       color: '#d97706' },
  { slug: 'business',     label: 'Business',      color: '#e2e8f0' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const active = scrolled || menuOpen

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: active ? 'rgba(2,4,15,0.96)' : 'transparent',
        backdropFilter: active ? 'blur(14px)' : 'none',
        borderBottom: active ? '1px solid rgba(201,168,76,0.07)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline shrink-0">
          <span style={{ color: GOLD, fontSize: '0.9rem' }}>✦</span>
          <span className="font-serif text-[15px] font-semibold tracking-tight text-white/90">
            Language Threshold
          </span>
        </Link>

        {/* Module links — desktop */}
        <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">
          {MODULES.map(m => {
            const isActive = pathname === `/module/${m.slug}`
            return (
              <Link
                key={m.slug}
                to={`/module/${m.slug}`}
                className="font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-200"
                style={{ color: isActive ? m.color : 'rgba(255,255,255,0.32)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = m.color }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isActive ? m.color : 'rgba(255,255,255,0.32)' }}
              >
                {m.label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/about"
            className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: pathname === '/about' ? GOLD : 'rgba(255,255,255,0.32)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = pathname === '/about' ? GOLD : 'rgba(255,255,255,0.32)' }}
          >
            About
          </Link>
          <Link
            to="/founder"
            className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: pathname === '/founder' ? GOLD : 'rgba(255,255,255,0.32)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = pathname === '/founder' ? GOLD : 'rgba(255,255,255,0.32)' }}
          >
            Founder
          </Link>
          <Link
            to="/missionary-portal"
            className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: pathname === '/missionary-portal' ? SKY : 'rgba(255,255,255,0.35)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = SKY }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = pathname === '/missionary-portal' ? SKY : 'rgba(255,255,255,0.35)' }}
          >
            Missionary Log In
          </Link>
          <a
            href={APP_URL}
            className="rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-black hover:opacity-90 transition-opacity"
            style={{ backgroundColor: GOLD }}
          >
            Start Free
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden ml-2 flex flex-col justify-center items-center gap-1.5 w-9 h-9"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span style={{ width: 20, height: 2, background: '#F7F3EC', display: 'block', borderRadius: 2, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(2px,5px)' : 'none' }} />
            <span style={{ width: 20, height: 2, background: '#F7F3EC', display: 'block', borderRadius: 2, transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 20, height: 2, background: '#F7F3EC', display: 'block', borderRadius: 2, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(2px,-5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 grid grid-cols-2 gap-2"
          style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }}
        >
          {MODULES.map(m => (
            <Link
              key={m.slug}
              to={`/module/${m.slug}`}
              className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors"
              style={{ color: 'rgba(255,255,255,0.45)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = m.color }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)' }}
            >
              {m.label}
            </Link>
          ))}
          <Link
            to="/about"
            className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            About
          </Link>
          <Link
            to="/founder"
            className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Founder
          </Link>
          <Link
            to="/missionary-portal"
            className="col-span-2 flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors"
            style={{ borderColor: `${SKY}35`, color: SKY, backgroundColor: 'rgba(96,165,250,0.05)' }}
          >
            🕊️ Missionary Log In — Save Progress
          </Link>
          <a
            href={APP_URL}
            className="col-span-2 mt-1 text-center rounded-full py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-black"
            style={{ backgroundColor: GOLD }}
          >
            Start Learning Free →
          </a>
        </div>
      )}
    </nav>
  )
}
