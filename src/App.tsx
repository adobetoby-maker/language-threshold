import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Founder from './pages/Founder'
import ContractorSpanish from './pages/ContractorSpanish'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { sansFont } from './constants'

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0D0D0D', color: '#F7F3EC' }}>
      {/* Skip to main content — visible on keyboard focus only */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D', fontWeight: 600 }}
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/contractor-spanish" element={<ContractorSpanish />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
