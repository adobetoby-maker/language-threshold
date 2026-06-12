import { useState } from 'react'
import { MISSIONARY_APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MISSIONARY_MODULES, type MissionaryModule } from '../data/missionaryModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'

const SPANISH_COLOR = '#7C3AED'
const MISSIONARY_APP_URL_ES = `${MISSIONARY_APP_URL}&lang=es`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: MissionaryModule }) {
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
              style={{ ...sansFont, backgroundColor: 'rgba(124,58,237,0.08)', color: SPANISH_COLOR, border: '1px solid rgba(124,58,237,0.2)' }}
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
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(124,58,237,0.08)' }} onClick={e => e.stopPropagation()}>
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
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: mod.color, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.es}
                </button>
              </div>
            ))}
          </div>
          {tapped && <WordCard {...tapped} color={mod.color} onClose={() => setTapped(null)} />}

          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: SPANISH_COLOR }}>
              Sample phrase
            </p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>
              "{mod.samplePhrase.en}"
            </p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              "{mod.samplePhrase.es}"
            </p>
          </div>

          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>
            Practice scenarios: {mod.scenario}
          </p>

          <a
            href={MISSIONARY_APP_URL_ES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#F7F3EC' }}
          >
            Practice {mod.title} Spanish →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MissionarySpanish() {
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <circle cx="350" cy="350" r="280" stroke={SPANISH_COLOR} strokeWidth="1.5" />
            <ellipse cx="350" cy="350" rx="140" ry="280" stroke={SPANISH_COLOR} strokeWidth="1.5" />
            <ellipse cx="350" cy="350" rx="280" ry="110" stroke={SPANISH_COLOR} strokeWidth="1.5" />
            <line x1="70" y1="350" x2="630" y2="350" stroke={SPANISH_COLOR} strokeWidth="1" />
            <line x1="350" y1="70" x2="350" y2="630" stroke={SPANISH_COLOR} strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SPANISH_COLOR }}>
                Missionary Spanish
              </span>
              <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
              <span className="text-xs uppercase tracking-[0.25em]" style={{ ...sansFont, color: '#A89F94' }}>
                Language Threshold
              </span>
            </div>

            <h1
              className="leading-[1.1] mb-6"
              style={{ ...displayFont, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#F7F3EC' }}
            >
              Your mission field<br />
              <em style={{ color: SPANISH_COLOR }}>speaks Spanish.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Nine AI-powered modules covering the Restoration, Plan of Salvation, finding, baptismal
              commitment, and daily mission life — the specific language of LDS missionary work in
              Spanish-speaking areas, not generic travel phrases.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "My father and I went to Ciudad Obregón on a service mission. We worked alongside people
              who had everything we needed — except a shared language. The gospel message deserves
              better than a language barrier." — Toby Anderton, MD
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={MISSIONARY_APP_URL_ES}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: SPANISH_COLOR, color: '#F7F3EC' }}
              >
                Start Learning — It's Free →
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                See All Modules ↓
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: '500M+',
                  label: 'Spanish speakers across Latin America, the US, and Spain — the world\'s largest mission field by language',
                  source: 'Instituto Cervantes',
                },
                {
                  stat: '50+',
                  label: 'active LDS missions in Spanish-speaking countries — more than any other single language',
                  source: 'The Church of Jesus Christ of Latter-day Saints',
                },
                {
                  stat: 'Weeks',
                  label: 'not years — the time to reach gospel-discussion fluency with role-specific, AI-powered practice',
                  source: 'Language Threshold method',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: SPANISH_COLOR }}>
                    {item.stat}
                  </div>
                  <p className="text-sm leading-relaxed mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{item.label}</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>{item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Quick-reference phrases */}
      <FadeIn>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SPANISH_COLOR }}>
                Mission-critical phrases
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ ...displayFont, color: '#F7F3EC' }}>
              Nine phrases every missionary needs.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { es: 'Somos misioneros de La Iglesia de Jesucristo.', en: 'We are missionaries of The Church of Jesus Christ.' },
                { es: '¿Podemos compartir un mensaje con usted?', en: 'Can we share a message with you?' },
                { es: 'Dios le ama y tiene un plan para usted.', en: 'God loves you and has a plan for you.' },
                { es: '¿Ha leído en el Libro de Mormón?', en: 'Have you read from the Book of Mormon?' },
                { es: 'Le invitamos a orar para saber si es verdad.', en: 'We invite you to pray to know if it is true.' },
                { es: '¿Cuándo podemos volver para continuar?', en: 'When can we come back to continue?' },
                { es: '¿Le gustaría venir a la iglesia con nosotros?', en: 'Would you like to come to church with us?' },
                { es: '¿Ha pensado en el bautismo?', en: 'Have you thought about baptism?' },
                { es: '¿Tiene alguna pregunta sobre lo que enseñamos?', en: 'Do you have any questions about what we teach?' },
              ].map((phrase, i) => (
                <div key={i} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(124,58,237,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: SPANISH_COLOR }}>{phrase.es}</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>{phrase.en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Modules */}
      <section id="modules" className="py-28" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SPANISH_COLOR }}>
                Nine mission modules
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              From first door<br />
              <em style={{ color: '#C9A84C' }}>to baptismal font.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Every module targets a specific moment in the missionary cycle — finding, teaching,
              committing, and retaining. AI practice partners simulate real gospel conversations
              so you're ready before the door opens.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MISSIONARY_MODULES.map(mod => (
              <FadeIn key={mod.id}>
                <ModuleCard mod={mod} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <FadeIn>
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="text-4xl mb-6">🌍</div>
            <h2 className="text-3xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              The gospel message deserves<br />
              <em style={{ color: SPANISH_COLOR }}>more than a language barrier.</em>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94' }}>
              "¿Seguirá el ejemplo de Jesucristo y se bautizará?" is not just a sentence. It is the
              invitation that changes lives. When missionaries can ask it with clarity and warmth —
              not halting uncertainty — the conversation changes entirely.
            </p>
            <p className="text-sm" style={{ ...serifFont, color: '#A89F94' }}>
              Language Threshold's AI practice partners simulate real gospel discussions so missionaries
              arrive in the field ready — not still learning from their investigators.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Cross-links */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Also on Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href="/missionary-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,191,165,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Missionary Swahili
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  The same nine modules — for East Africa missions in Kiswahili.
                </p>
              </a>
              <a
                href="/medical-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Medical Spanish
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Thirteen clinical modules for Spanish-speaking patients.
                </p>
              </a>
              <a
                href="/missionary-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇧🇷</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Missionary Portuguese
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  The same four modules — for Brazil and Portuguese-speaking missions.
                </p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <section className="py-28 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SPANISH_COLOR }}>
              Your mission awaits
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Your investigators speak Spanish.<br />
              <em style={{ color: SPANISH_COLOR }}>Now you can too.</em>
            </h2>
            <a
              href={MISSIONARY_APP_URL_ES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: SPANISH_COLOR, color: '#F7F3EC' }}
            >
              Start Learning — It's Free →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              No signup. No credit card.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
