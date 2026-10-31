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
const PRIMARY_MODULES = MODULES.slice(0, 3)
const MORE_MODULES = MODULES.slice(3)

export default function Nav() {
  const [hasBlog, setHasBlog] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/blog?mode=nav', { signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (data?.hasArticles) setHasBlog(true) })
      .catch(() => {})
    return () => controller.abort()
  }, [])
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // eslint-disable-next-line react-hooks/set-state-in-effect
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
        <Link to="/" className="flex items-center gap-2 no-underline shrink-0 whitespace-nowrap">
          <span style={{ color: GOLD, fontSize: '0.9rem' }}>✦</span>
          <span className="font-serif text-[15px] font-semibold tracking-tight text-white/90">
            Language Threshold
          </span>
        </Link>

        {/* Module links — desktop */}
        <div className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-4">
          {PRIMARY_MODULES.map(m => {
            const isActive = pathname === `/module/${m.slug}`
            return (
              <Link
                key={m.slug}
                to={`/module/${m.slug}`}
                className="shrink-0 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-200"
                style={{ color: isActive ? m.color : 'rgba(255,255,255,0.32)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = m.color }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isActive ? m.color : 'rgba(255,255,255,0.32)' }}
              >
                {m.label}
              </Link>
            )
          })}
          <details key={pathname} className="relative shrink-0 group">
            <summary
              className="cursor-pointer list-none whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-white/80"
              aria-label="More learning categories"
            >
              More <span aria-hidden="true">▾</span>
            </summary>
            <div className="absolute left-1/2 top-full mt-4 grid w-72 -translate-x-1/2 grid-cols-2 gap-1 rounded-xl border border-white/10 bg-[#02040f] p-3 shadow-2xl">
              {MORE_MODULES.map(m => (
                <Link
                  key={m.slug}
                  to={`/module/${m.slug}`}
                  className="rounded-lg px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors hover:bg-white/10"
                  style={{ color: pathname === `/module/${m.slug}` ? m.color : 'rgba(255,255,255,0.7)' }}
                >
                  {m.label}
                </Link>
              ))}
            </div>
          </details>
        </div>

        {/* Blog uses a full navigation to its server-rendered page. */}
        {hasBlog && <a href="/blog" className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: GOLD }}>Blog</a>}

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/about"
            className="hidden xl:block font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: pathname === '/about' ? GOLD : 'rgba(255,255,255,0.32)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = pathname === '/about' ? GOLD : 'rgba(255,255,255,0.32)' }}
          >
            About
          </Link>
          <Link
            to="/founder"
            className="hidden xl:block font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: pathname === '/founder' ? GOLD : 'rgba(255,255,255,0.32)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = pathname === '/founder' ? GOLD : 'rgba(255,255,255,0.32)' }}
          >
            Founder
          </Link>
          <Link
            to="/missionary-portal"
            className="hidden xl:block font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
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
          {hasBlog && <a href="/blog" className="rounded-xl border border-white/10 px-4 py-3 text-sm" style={{ color: GOLD }}>Blog</a>}
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
          <Link to="/why-learn-with-us/" className="flex min-h-11 items-center rounded-xl border border-white/10 px-4 py-3 text-sm text-white">Why learn with us</Link>
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
