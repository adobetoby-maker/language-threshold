import { useState } from 'react'
import { MISSIONARY_APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MISSIONARY_MODULES, type MissionaryModule, type LangKey } from '../data/missionaryModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const LANG_COLOR = '#22C55E'
const LANG: LangKey = 'it'
const APP_URL_LANG = `${MISSIONARY_APP_URL}&lang=it`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: MissionaryModule }) {
  const localTitle = mod.titles?.[LANG] ?? mod.title
  const localTagline = mod.taglines?.[LANG] ?? mod.tagline
  const [open, setOpen] = useState(false)
  const [tapped, setTapped] = useState<TappedWord | null>(null)
  return (
    <div
      className="rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#161616',
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(34,197,94,0.12)`,
        boxShadow: open ? `0 0 32px -8px ${mod.color}22` : 'none',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-3xl">{mod.emoji}</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ ...sansFont, backgroundColor: `${mod.color}18`, color: mod.color }}>
            {open ? 'Chiudi ↑' : 'Espandi ↓'}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>{localTitle}</h3>
        <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>{localTagline}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span key={v.en} className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, backgroundColor: `rgba(34,197,94,0.08)`, color: LANG_COLOR, border: `1px solid rgba(34,197,94,0.2)` }}>
              {v.en}
            </span>
          ))}
          {!open && <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>+{mod.vocab.length - 4} di più</span>}
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: `rgba(34,197,94,0.08)` }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>Vocabolario completo</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {mod.vocab.map(v => (
              <div key={v.en} className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{v.en}</span>
                <button
                  onClick={e => {
                    const rect = (e.target as HTMLElement).getBoundingClientRect()
                    setTapped({ word: v.it.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.it}`, x: rect.left + rect.width / 2, y: rect.bottom })
                  }}
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: mod.color, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.it}
                </button>
              </div>
            ))}
          </div>
          {tapped && <WordCard {...tapped} lang="it" color={mod.color} onClose={() => setTapped(null)} />}
          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: `rgba(34,197,94,0.06)`, border: `1px solid rgba(34,197,94,0.15)` }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: LANG_COLOR }}>Frase d'esempio</p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>"{mod.samplePhrase.en}"</p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>"{mod.samplePhrase.it}"</p>
          </div>
          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>Scenari di pratica: {mod.scenario}</p>
          <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: mod.color, color: '#F7F3EC' }}>
            Pratica {localTitle} in Italiano →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MissionaryItalian() {
  usePageMeta({ title: "Missionary Italian — Italiano Missionario", lang: 'it', canonical: 'https://languagethreshold.com/missionary-italian' })
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <circle cx="350" cy="350" r="280" stroke={LANG_COLOR} strokeWidth="1.5" />
            <ellipse cx="350" cy="350" rx="140" ry="280" stroke={LANG_COLOR} strokeWidth="1.5" />
            <ellipse cx="350" cy="350" rx="280" ry="110" stroke={LANG_COLOR} strokeWidth="1.5" />
            <line x1="70" y1="350" x2="630" y2="350" stroke={LANG_COLOR} strokeWidth="1" />
            <line x1="350" y1="70" x2="350" y2="630" stroke={LANG_COLOR} strokeWidth="1" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>Italiano Missionario</span>
              <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
              <span className="text-xs uppercase tracking-[0.25em]" style={{ ...sansFont, color: '#A89F94' }}>Language Threshold</span>
            </div>
            <h1 className="leading-[1.1] mb-6" style={{ ...displayFont, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#F7F3EC' }}>
              Il vostro campo di missione<br />
              <em style={{ color: LANG_COLOR }}>parla italiano.</em>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Nove moduli basati sull'IA che coprono la Restaurazione, il Piano della Salvezza, la ricerca, l'impegno battesimale e la vita quotidiana della missione — il linguaggio specifico del lavoro missionario della Chiesa nelle aree italofone.
            </p>
            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "Mio padre e io siamo andati in missione di servizio. Abbiamo lavorato accanto a persone che avevano tutto ciò di cui avevamo bisogno — tranne una lingua comune. Il messaggio evangelico merita di più di una barriera linguistica." — Toby Anderton, MD
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#F7F3EC' }}>
                Inizia ad imparare — Gratis →
              </a>
              <a href="#modules" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80" style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}>
                Vedi i moduli ↓
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: '85M+', label: "parlanti italofoni nel mondo — dall'Italia alla Svizzera e oltre", source: 'Istituto Italiano' },
                { stat: '5+', label: 'missioni attive della Chiesa nei paesi italofoni e regioni limitrofe', source: 'La Chiesa di Gesù Cristo dei Santi degli Ultimi Giorni' },
                { stat: 'Settimane', label: "non anni — il tempo per raggiungere la fluidità nelle discussioni evangeliche", source: 'Metodo Language Threshold' },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: LANG_COLOR }}>{item.stat}</div>
                  <p className="text-sm leading-relaxed mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{item.label}</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>{item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>Frasi essenziali per la missione</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ ...displayFont, color: '#F7F3EC' }}>
              Nove frasi che ogni missionario deve conoscere.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div key={0} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Siamo missionari della Chiesa di Gesù Cristo.</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>We are missionaries of The Church of Jesus Christ.</p>
                </div>
                <div key={1} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Possiamo condividere un messaggio con voi?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Can we share a message with you?</p>
                </div>
                <div key={2} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Dio vi ama e ha un piano per voi.</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>God loves you and has a plan for you.</p>
                </div>
                <div key={3} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Avete mai letto nel Libro di Mormon?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Have you read from the Book of Mormon?</p>
                </div>
                <div key={4} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Vi invitiamo a pregare per sapere se è vero.</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>We invite you to pray to know if it is true.</p>
                </div>
                <div key={5} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Quando possiamo tornare per continuare?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>When can we come back to continue?</p>
                </div>
                <div key={6} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Vorreste venire in chiesa con noi?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Would you like to come to church with us?</p>
                </div>
                <div key={7} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Avete pensato al battesimo?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Have you thought about baptism?</p>
                </div>
                <div key={8} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Avete domande su ciò che insegniamo?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Do you have any questions about what we teach?</p>
                </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <section id="modules" className="py-28" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>Nove moduli di missione</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Dalla prima porta<br />
              <em style={{ color: '#C9A84C' }}>al fonte battesimale.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Ogni modulo si concentra su un momento specifico del ciclo missionario — trovare, insegnare, impegnare e mantenere. Partner di pratica IA simulano vere conversazioni evangeliche.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MISSIONARY_MODULES.map(mod => (
              <FadeIn key={mod.id}><ModuleCard mod={mod} /></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="text-4xl mb-6">🌍</div>
            <h2 className="text-3xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Il messaggio evangelico merita<br />
              <em style={{ color: LANG_COLOR }}>più di una barriera linguistica.</em>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94' }}>
              "Seguirete l'esempio di Gesù Cristo e vi batterete?" non è solo una frase. È l'invito che cambia le vite.
            </p>
            <p className="text-sm" style={{ ...serifFont, color: '#A89F94' }}>
              I partner di pratica IA di Language Threshold simulano vere discussioni evangeliche affinché i missionari arrivino sul campo pronti.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>Also on Language Threshold</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href="/missionary-french"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇫🇷</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Missionary French</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>The same nine modules — for French-speaking missions worldwide.</p>
              </a>
              <a
                href="/medical-italian"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Medical Italian</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>Thirteen clinical modules for Italian-speaking patients.</p>
              </a>
              <a
                href="/missionary-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(124,58,237,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Missionary Spanish</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>The same nine modules — for Spanish-speaking missions worldwide.</p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-28 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>La vostra missione vi aspetta</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              I vostri investigatori parlano italiano.<br />
              <em style={{ color: LANG_COLOR }}>Ora anche voi.</em>
            </h2>
            <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#F7F3EC' }}>
              Inizia ad imparare — Gratis →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Senza registrazione. Senza carta di credito.</p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
