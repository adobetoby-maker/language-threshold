import { Link } from 'react-router-dom'
import { APP_URL, sansFont } from '../constants'

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: 'rgba(201,168,76,0.1)', backgroundColor: '#0D0D0D' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-bold text-lg mb-1" style={{ fontFamily: '"Playfair Display", serif', color: '#F7F3EC' }}>
              Language Threshold
            </div>
            <p className="text-sm italic" style={{ ...sansFont, color: '#A89F94' }}>
              "Cross the threshold. Speak the language."
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm" style={{ ...sansFont }}>
            <Link to="/language-lens" className="transition-opacity hover:opacity-80" style={{ color: '#00D4B8' }}>
              Language Lens
            </Link>
            <a href="https://medicalspanish.app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#A89F94' }}>
              Medical Spanish
            </a>
            <a href="https://constructionspanish.app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#A89F94' }}>
              Construction Spanish
            </a>
            <Link to="/about" className="transition-opacity hover:opacity-80" style={{ color: '#A89F94' }}>
              About
            </Link>
            <Link to="/founder" className="transition-opacity hover:opacity-80" style={{ color: '#A89F94' }}>
              Founder
            </Link>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{ ...sansFont, color: '#C9A84C', fontWeight: 600 }}>
              Start Learning →
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t text-xs"
          style={{ borderColor: 'rgba(201,168,76,0.1)', ...sansFont, color: '#A89F94' }}
        >
          © {new Date().getFullYear()} Language Threshold. All rights reserved.
        </div>
      </div>
          <div className="text-center py-2 text-xs" style={{ opacity: 0.3 }}>
        <a
          href="https://worker-bee.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          Anderton &amp; Associates Web Services
        </a>
      </div>
</footer>
  )
}
