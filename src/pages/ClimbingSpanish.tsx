import { useState } from 'react'
import { APP_URL, displayFont, sansFont } from '../constants'
import { CLIMBING_MODULES, GEAR_PHOTOS, CLIMBING_COLOR, type ClimbingModule } from '../data/climbingModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'

const CLIMBING_APP_URL = `${APP_URL}?module=climbing`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function GearGrid() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ ...sansFont, color: CLIMBING_COLOR, letterSpacing: '0.15em' }}>
            Essential gear
          </p>
          <h2 className="text-3xl font-bold mb-2" style={{ ...displayFont, color: '#F7F3EC' }}>
            Know the equipment
          </h2>
          <p className="text-base mb-10" style={{ ...sansFont, color: '#A89F94', maxWidth: '40rem' }}>
            Every piece of gear has a name in Spanish. Learn them before you tie in.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GEAR_PHOTOS.map(item => (
            <FadeIn key={item.name}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(201,168,76,0.1)' }}
              >
                {/* Photo */}
                <div className="relative" style={{ height: 200, backgroundColor: '#111' }}>
                  {failedImages.has(item.name) ? (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: `${CLIMBING_COLOR}12` }}>
                      <span style={{ fontSize: 56 }}>🧗</span>
                    </div>
                  ) : (
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={() => setFailedImages(prev => new Set(prev).add(item.name))}
                    />
                  )}
                  {/* Overlay label */}
                  <div className="absolute bottom-0 inset-x-0 px-4 py-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ ...sansFont, color: 'rgba(255,255,255,0.6)' }}>
                      {item.name}
                    </p>
                    <p className="text-xl font-bold" style={{ ...displayFont, color: CLIMBING_COLOR }}>
                      {item.es}
                    </p>
                  </div>
                </div>

                {/* Tip */}
                <div className="px-4 py-3">
                  <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>
                    {item.tip}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function ModuleCard({ mod }: { mod: ClimbingModule }) {
  const [open, setOpen] = useState(false)
  const [tapped, setTapped] = useState<TappedWord | null>(null)

  return (
    <div
      className="rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#161616',
        border: open ? `1px solid ${mod.color}40` : '1px solid rgba(201,168,76,0.12)',
        boxShadow: open ? `0 0 32px -8px ${mod.color}22` : 'none',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-3xl">{mod.emoji}</span>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ ...sansFont, backgroundColor: `${mod.color}18`, color: mod.color }}
          >
            {open ? 'Close ↑' : 'Expand ↓'}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
          {mod.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>
          {mod.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span
              key={v.en}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ ...sansFont, backgroundColor: `${CLIMBING_COLOR}12`, color: CLIMBING_COLOR, border: `1px solid ${CLIMBING_COLOR}30` }}
            >
              {v.en}
            </span>
          ))}
          {!open && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>
              +{mod.vocab.length - 4} more
            </span>
          )}
        </div>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: `${CLIMBING_COLOR}14` }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>
            Full vocabulary
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {mod.vocab.map(v => (
              <div key={v.en} className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{v.en}</span>
                <button
                  onClick={e => {
                    const rect = (e.target as HTMLElement).getBoundingClientRect()
                    setTapped({ word: v.es.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.es}`, x: rect.left + rect.width / 2, y: rect.bottom })
                  }}
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: CLIMBING_COLOR, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.es}
                </button>
              </div>
            ))}
          </div>

          {/* Sample phrase */}
          <div className="rounded-xl p-4 mt-2" style={{ backgroundColor: `${CLIMBING_COLOR}0A`, border: `1px solid ${CLIMBING_COLOR}20` }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: CLIMBING_COLOR }}>
              Sample phrase
            </p>
            <p className="text-sm mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{mod.samplePhrase.en}</p>
            <p className="text-sm italic" style={{ ...sansFont, color: CLIMBING_COLOR }}>{mod.samplePhrase.es}</p>
          </div>

          <p className="text-xs mt-3" style={{ ...sansFont, color: '#6B6460' }}>
            Context: {mod.scenario}
          </p>
        </div>
      )}

      {tapped && (
        <WordCard
          word={tapped.word}
          sentence={tapped.sentence}
          x={tapped.x}
          y={tapped.y}
          color={CLIMBING_COLOR}
          onClose={() => setTapped(null)}
        />
      )}
    </div>
  )
}

export default function ClimbingSpanish() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: `radial-gradient(circle, ${CLIMBING_COLOR}0A 0%, transparent 70%)` }} />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ ...sansFont, color: CLIMBING_COLOR, letterSpacing: '0.15em' }}>
              Climbing Spanish
            </p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-5" style={{ ...displayFont, color: '#F7F3EC' }}>
              Gear up.<br />
              <em className="italic" style={{ color: CLIMBING_COLOR }}>Speak the language.</em>
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ ...sansFont, color: '#A89F94', maxWidth: '38rem' }}>
              Essential Spanish for climbing gyms, outdoor crags, and bilingual crews —
              gear names, safety commands, and route-reading vocabulary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CLIMBING_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full font-semibold text-base transition-all hover:opacity-90 text-center"
                style={{ ...sansFont, backgroundColor: CLIMBING_COLOR, color: '#0D0D0D' }}
              >
                Practice Climbing Spanish →
              </a>
            </div>
          </FadeIn>

          {/* Quick-stat chips */}
          <div className="flex flex-wrap gap-3 mt-10">
            {['30+ gear terms', '10 safety commands', '3 topic modules', 'Real-world phrases'].map(label => (
              <span key={label} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ ...sansFont, backgroundColor: `${CLIMBING_COLOR}14`, color: CLIMBING_COLOR, border: `1px solid ${CLIMBING_COLOR}30` }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gear photo grid */}
      <GearGrid />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ height: 1, backgroundColor: 'rgba(201,168,76,0.08)' }} />
      </div>

      {/* Vocabulary modules */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-widest uppercase mb-3" style={{ ...sansFont, color: CLIMBING_COLOR, letterSpacing: '0.15em' }}>
              Vocabulary modules
            </p>
            <h2 className="text-3xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Three modules. Every scenario.
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {CLIMBING_MODULES.map(mod => (
              <FadeIn key={mod.id}>
                <ModuleCard mod={mod} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <FadeIn>
          <p className="text-4xl mb-4" aria-hidden="true">🧗</p>
          <h2 className="text-3xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
            Ready to climb in any language?
          </h2>
          <p className="text-base mb-8" style={{ ...sansFont, color: '#A89F94' }}>
            Practice flashcards, listen to pronunciation, and quiz yourself on every term.
          </p>
          <a
            href={CLIMBING_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
            style={{ ...sansFont, backgroundColor: CLIMBING_COLOR, color: '#0D0D0D' }}
          >
            Start Climbing Spanish →
          </a>
        </FadeIn>
      </section>
    </div>
  )
}
