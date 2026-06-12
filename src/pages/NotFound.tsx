import { Link } from 'react-router-dom'
import { displayFont, sansFont } from '../constants'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="text-center max-w-lg">
        <p className="text-8xl font-black mb-4" style={{ ...displayFont, color: '#C9A84C', opacity: 0.25 }}>
          404
        </p>
        <h1 className="text-3xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
          Page not found
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ ...sansFont, color: '#A89F94' }}>
          That URL doesn't exist. Check the address or head back to explore available language modules.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3.5 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
          style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
        >
          Back to Language Threshold
        </Link>
      </div>
    </div>
  )
}
