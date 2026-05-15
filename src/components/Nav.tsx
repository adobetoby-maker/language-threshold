import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { APP_URL, sansFont } from '../constants'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || mobileOpen ? 'rgba(13,13,13,0.97)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline" onClick={closeMobile}>
          <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M2 32V14C2 7.373 7.373 2 14 2C20.627 2 26 7.373 26 14V32" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
            <path d="M2 32H26" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="14" x2="14" y2="32" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="2 3" strokeLinecap="round" />
          </svg>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif', color: '#F7F3EC' }}
          >
            Language Threshold
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#areas" className="text-sm transition-opacity hover:opacity-100" style={{ ...sansFont, color: '#A89F94' }}>
            Areas
          </a>
          <a href="/#how-it-works" className="text-sm transition-opacity hover:opacity-100" style={{ ...sansFont, color: '#A89F94' }}>
            How It Works
          </a>
          <Link to="/medical-spanish" className="text-sm transition-opacity hover:opacity-100" style={{ ...sansFont, color: '#4A9EFF' }}>
            Medical Spanish
          </Link>
          <Link to="/contractor-spanish" className="text-sm transition-opacity hover:opacity-100" style={{ ...sansFont, color: '#FF7A4A' }}>
            Contractor Spanish
          </Link>
          <Link to="/about" className="text-sm transition-opacity hover:opacity-100" style={{ ...sansFont, color: '#A89F94' }}>
            About
          </Link>
          <Link to="/founder" className="text-sm transition-opacity hover:opacity-100" style={{ ...sansFont, color: '#A89F94' }}>
            Founder
          </Link>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
          >
            Start Learning →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span style={{ width: 22, height: 2, backgroundColor: '#F7F3EC', display: 'block', borderRadius: 2, transition: 'transform 0.2s', transform: mobileOpen ? 'rotate(45deg) translate(2px, 6px)' : 'none' }} />
          <span style={{ width: 22, height: 2, backgroundColor: '#F7F3EC', display: 'block', borderRadius: 2, transition: 'opacity 0.2s', opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ width: 22, height: 2, backgroundColor: '#F7F3EC', display: 'block', borderRadius: 2, transition: 'transform 0.2s', transform: mobileOpen ? 'rotate(-45deg) translate(2px, -6px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden flex flex-col gap-0 px-6 pb-6"
          style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}
        >
          <a href="/#areas" className="py-3.5 text-base" style={{ ...sansFont, color: '#A89F94', borderBottom: '1px solid rgba(255,255,255,0.05)' }} onClick={closeMobile}>
            Areas
          </a>
          <a href="/#how-it-works" className="py-3.5 text-base" style={{ ...sansFont, color: '#A89F94', borderBottom: '1px solid rgba(255,255,255,0.05)' }} onClick={closeMobile}>
            How It Works
          </a>
          <Link to="/medical-spanish" className="py-3.5 text-base" style={{ ...sansFont, color: '#4A9EFF', borderBottom: '1px solid rgba(255,255,255,0.05)' }} onClick={closeMobile}>
            Medical Spanish
          </Link>
          <Link to="/contractor-spanish" className="py-3.5 text-base" style={{ ...sansFont, color: '#FF7A4A', borderBottom: '1px solid rgba(255,255,255,0.05)' }} onClick={closeMobile}>
            Contractor Spanish
          </Link>
          <Link to="/about" className="py-3.5 text-base" style={{ ...sansFont, color: '#A89F94', borderBottom: '1px solid rgba(255,255,255,0.05)' }} onClick={closeMobile}>
            About
          </Link>
          <Link to="/founder" className="py-3.5 text-base" style={{ ...sansFont, color: '#A89F94', borderBottom: '1px solid rgba(255,255,255,0.05)' }} onClick={closeMobile}>
            Founder
          </Link>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 py-3.5 rounded-full font-semibold text-base text-center"
            style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
            onClick={closeMobile}
          >
            Start Learning →
          </a>
        </div>
      )}
    </nav>
  )
}
