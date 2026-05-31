import { BETA_FREE_LABEL, isBetaFree } from '../constants'

const GOLD = '#C9A84C'

export function MiniGlobeButton({ href, size = 160 }: { href: string; size?: number }) {
  const spinDuration = Math.round(size / 8)

  return (
    <>
      <style>{`
        @keyframes mini-globe-spin {
          from { background-position: 0 center; }
          to   { background-position: -${size * 2}px center; }
        }
      `}</style>
      <a
        href={href}
        className="group flex flex-col items-center gap-4"
        style={{ textDecoration: 'none' }}
      >
        {/* Globe disc */}
        <div className="relative flex items-center justify-center" style={{ width: size + 20, height: size + 20 }}>
          {/* Outer pulse ring */}
          <div
            className="absolute inset-0 rounded-full animate-pulse pointer-events-none"
            style={{ border: `1px solid ${GOLD}30`, boxShadow: `0 0 40px ${GOLD}12` }}
          />
          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: `0 0 60px ${GOLD}45` }}
          />
          {/* Spinning earth texture */}
          <div
            className="rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500"
            style={{
              width: size,
              height: size,
              backgroundImage: 'url(//unpkg.com/three-globe/example/img/earth-blue-marble.jpg)',
              backgroundSize: `${size * 2}px ${size}px`,
              backgroundRepeat: 'repeat-x',
              backgroundPositionY: 'center',
              animation: `mini-globe-spin ${spinDuration}s linear infinite`,
              border: `1px solid ${GOLD}22`,
            }}
          >
            {/* Specular shading overlay */}
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 36% 32%, rgba(255,255,255,0.11) 0%, rgba(10,20,60,0.28) 55%, rgba(0,0,20,0.55) 100%)',
                boxShadow: `inset -6px -6px 20px rgba(0,0,20,0.55)`,
              }}
            />
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <div
            className="font-mono text-[11px] uppercase tracking-[0.28em] group-hover:tracking-[0.34em] transition-all duration-500"
            style={{ color: GOLD }}
          >
            Start Learning Free
          </div>
          <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
            {isBetaFree() ? BETA_FREE_LABEL : '7-day trial · no card needed'}
          </div>
        </div>
      </a>
    </>
  )
}
