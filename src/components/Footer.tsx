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

          <div className="flex flex-wrap gap-6 text-sm" style={{ ...sansFont }}>
            <a href="https://medicalspanish.app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#A89F94' }}>
              Medical Spanish
            </a>
            <a href="https://constructionspanish.app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#A89F94' }}>
              Construction Spanish
            </a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#A89F94' }}>
              Start Learning
            </a>
            <Link to="/about" className="transition-opacity hover:opacity-80" style={{ color: '#A89F94' }}>
              About
            </Link>
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t text-xs"
          style={{ borderColor: 'rgba(201,168,76,0.1)', ...sansFont, color: '#A89F94' }}
        >
          © {new Date().getFullYear()} Language Threshold. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
