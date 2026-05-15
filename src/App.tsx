import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { sansFont } from './constants'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Founder = lazy(() => import('./pages/Founder'))
const ContractorSpanish = lazy(() => import('./pages/ContractorSpanish'))
const MedicalSpanish = lazy(() => import('./pages/MedicalSpanish'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0D0D0D' }}>
      <span style={{ width: 24, height: 24, border: '2px solid rgba(201,168,76,0.2)', borderTopColor: '#C9A84C', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0D0D0D', color: '#F7F3EC' }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D', fontWeight: 600 }}
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
            <Route path="/about" element={<ErrorBoundary><About /></ErrorBoundary>} />
            <Route path="/founder" element={<ErrorBoundary><Founder /></ErrorBoundary>} />
            <Route path="/contractor-spanish" element={<ErrorBoundary><ContractorSpanish /></ErrorBoundary>} />
            <Route path="/medical-spanish" element={<ErrorBoundary><MedicalSpanish /></ErrorBoundary>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
