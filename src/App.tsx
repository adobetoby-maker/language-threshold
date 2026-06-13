import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { MetaPixel } from './components/MetaPixel'
import { sansFont } from './constants'
import { warmWordCache } from './data/wordCache'

warmWordCache()

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Founder = lazy(() => import('./pages/Founder'))
const ContractorSpanish = lazy(() => import('./pages/ContractorSpanish'))
const ClimbingSpanish = lazy(() => import('./pages/ClimbingSpanish'))
const MedicalSpanish = lazy(() => import('./pages/MedicalSpanish'))
const MissionarySpanish = lazy(() => import('./pages/MissionarySpanish'))
const MissionaryPortal = lazy(() => import('./pages/MissionaryPortal'))
const MedicalPortuguese = lazy(() => import('./pages/MedicalPortuguese'))
const MedicalFrench   = lazy(() => import('./pages/MedicalFrench'))
const MedicalGerman   = lazy(() => import('./pages/MedicalGerman'))
const MedicalItalian  = lazy(() => import('./pages/MedicalItalian'))
const MedicalJapanese = lazy(() => import('./pages/MedicalJapanese'))
const MedicalKorean   = lazy(() => import('./pages/MedicalKorean'))
const ContractorPortuguese = lazy(() => import('./pages/ContractorPortuguese'))
const ClimbingPortuguese = lazy(() => import('./pages/ClimbingPortuguese'))
const MissionaryPortuguese = lazy(() => import('./pages/MissionaryPortuguese'))
const ContractorFrench   = lazy(() => import('./pages/ContractorFrench'))
const ContractorGerman   = lazy(() => import('./pages/ContractorGerman'))
const ContractorItalian  = lazy(() => import('./pages/ContractorItalian'))
const ContractorJapanese = lazy(() => import('./pages/ContractorJapanese'))
const ContractorKorean   = lazy(() => import('./pages/ContractorKorean'))
const MissionaryFrench   = lazy(() => import('./pages/MissionaryFrench'))
const MissionaryGerman   = lazy(() => import('./pages/MissionaryGerman'))
const MissionaryItalian  = lazy(() => import('./pages/MissionaryItalian'))
const MissionaryJapanese = lazy(() => import('./pages/MissionaryJapanese'))
const MissionaryKorean   = lazy(() => import('./pages/MissionaryKorean'))
const ClimbingFrench     = lazy(() => import('./pages/ClimbingFrench'))
const ClimbingGerman     = lazy(() => import('./pages/ClimbingGerman'))
const ClimbingItalian    = lazy(() => import('./pages/ClimbingItalian'))
const ClimbingJapanese   = lazy(() => import('./pages/ClimbingJapanese'))
const ClimbingKorean     = lazy(() => import('./pages/ClimbingKorean'))
const MedicalTerminology = lazy(() => import('./pages/MedicalTerminology'))
const LanguageLens = lazy(() => import('./pages/LanguageLens'))
const AppHome = lazy(() => import('./pages/AppHome'))
const ModuleStarter = lazy(() => import('./pages/ModuleStarter'))
const FishingModule = lazy(() => import('./pages/FishingModule'))
const PrintMedical = lazy(() => import('./pages/PrintBook').then(m => ({ default: () => m.default({ specialty: 'medical' }) })))
const PrintConstruction = lazy(() => import('./pages/PrintBook').then(m => ({ default: () => m.default({ specialty: 'construction' }) })))
const TrifoldMedical = lazy(() => import('./pages/TrifoldPrint').then(m => ({ default: () => m.default({ specialty: 'medical' }) })))
const TrifoldConstruction = lazy(() => import('./pages/TrifoldPrint').then(m => ({ default: () => m.default({ specialty: 'construction' }) })))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0D0D0D' }}>
      <span style={{ width: 24, height: 24, border: '2px solid rgba(201,168,76,0.2)', borderTopColor: '#C9A84C', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
    </div>
  )
}

const FULLSCREEN_PREFIXES = ['/app', '/print/']

function AppShell() {
  const { pathname } = useLocation()
  const isFullscreen = FULLSCREEN_PREFIXES.some(p => pathname === p || pathname.startsWith(p))

  if (isFullscreen) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/app" element={<ErrorBoundary><AppHome /></ErrorBoundary>} />
          <Route path="/print/medical" element={<ErrorBoundary><PrintMedical /></ErrorBoundary>} />
          <Route path="/print/construction" element={<ErrorBoundary><PrintConstruction /></ErrorBoundary>} />
          <Route path="/print/trifold/medical" element={<ErrorBoundary><TrifoldMedical /></ErrorBoundary>} />
          <Route path="/print/trifold/construction" element={<ErrorBoundary><TrifoldConstruction /></ErrorBoundary>} />
        </Routes>
      </Suspense>
    )
  }

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
            <Route path="/climbing-spanish" element={<ErrorBoundary><ClimbingSpanish /></ErrorBoundary>} />
            <Route path="/medical-spanish" element={<ErrorBoundary><MedicalSpanish /></ErrorBoundary>} />
            <Route path="/missionary-spanish" element={<ErrorBoundary><MissionarySpanish /></ErrorBoundary>} />
            <Route path="/missionary-portal" element={<ErrorBoundary><MissionaryPortal /></ErrorBoundary>} />
            <Route path="/medical-portuguese" element={<ErrorBoundary><MedicalPortuguese /></ErrorBoundary>} />
            <Route path="/medical-french"   element={<ErrorBoundary><MedicalFrench /></ErrorBoundary>} />
            <Route path="/medical-german"   element={<ErrorBoundary><MedicalGerman /></ErrorBoundary>} />
            <Route path="/medical-italian"  element={<ErrorBoundary><MedicalItalian /></ErrorBoundary>} />
            <Route path="/medical-japanese" element={<ErrorBoundary><MedicalJapanese /></ErrorBoundary>} />
            <Route path="/medical-korean"   element={<ErrorBoundary><MedicalKorean /></ErrorBoundary>} />
            <Route path="/contractor-portuguese" element={<ErrorBoundary><ContractorPortuguese /></ErrorBoundary>} />
            <Route path="/climbing-portuguese" element={<ErrorBoundary><ClimbingPortuguese /></ErrorBoundary>} />
            <Route path="/missionary-portuguese" element={<ErrorBoundary><MissionaryPortuguese /></ErrorBoundary>} />
            <Route path="/contractor-french"   element={<ErrorBoundary><ContractorFrench /></ErrorBoundary>} />
            <Route path="/contractor-german"   element={<ErrorBoundary><ContractorGerman /></ErrorBoundary>} />
            <Route path="/contractor-italian"  element={<ErrorBoundary><ContractorItalian /></ErrorBoundary>} />
            <Route path="/contractor-japanese" element={<ErrorBoundary><ContractorJapanese /></ErrorBoundary>} />
            <Route path="/contractor-korean"   element={<ErrorBoundary><ContractorKorean /></ErrorBoundary>} />
            <Route path="/missionary-french"   element={<ErrorBoundary><MissionaryFrench /></ErrorBoundary>} />
            <Route path="/missionary-german"   element={<ErrorBoundary><MissionaryGerman /></ErrorBoundary>} />
            <Route path="/missionary-italian"  element={<ErrorBoundary><MissionaryItalian /></ErrorBoundary>} />
            <Route path="/missionary-japanese" element={<ErrorBoundary><MissionaryJapanese /></ErrorBoundary>} />
            <Route path="/missionary-korean"   element={<ErrorBoundary><MissionaryKorean /></ErrorBoundary>} />
            <Route path="/climbing-french"     element={<ErrorBoundary><ClimbingFrench /></ErrorBoundary>} />
            <Route path="/climbing-german"     element={<ErrorBoundary><ClimbingGerman /></ErrorBoundary>} />
            <Route path="/climbing-italian"    element={<ErrorBoundary><ClimbingItalian /></ErrorBoundary>} />
            <Route path="/climbing-japanese"   element={<ErrorBoundary><ClimbingJapanese /></ErrorBoundary>} />
            <Route path="/climbing-korean"     element={<ErrorBoundary><ClimbingKorean /></ErrorBoundary>} />
            <Route path="/language-lens" element={<ErrorBoundary><LanguageLens /></ErrorBoundary>} />
            <Route path="/medical-terminology" element={<ErrorBoundary><MedicalTerminology /></ErrorBoundary>} />
            <Route path="/module/fishing" element={<ErrorBoundary><FishingModule /></ErrorBoundary>} />
            <Route path="/module/:slug" element={<ErrorBoundary><ModuleStarter /></ErrorBoundary>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <GoogleAnalytics />
      <MetaPixel />
      <AppShell />
    </>
  )
}
