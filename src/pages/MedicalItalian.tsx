import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MEDICAL_MODULES, type MedicalModule } from '../data/medicalModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const ITALIAN_COLOR = '#22C55E'
const MEDICAL_APP_URL = `${APP_URL}?module=emergency&lang=it`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: MedicalModule }) {
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
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ ...sansFont, backgroundColor: `${mod.color}18`, color: mod.color }}
          >
            {open ? 'Chiudi ↑' : 'Espandi ↓'}
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
              style={{ ...sansFont, backgroundColor: 'rgba(34,197,94,0.08)', color: ITALIAN_COLOR, border: '1px solid rgba(34,197,94,0.2)' }}
            >
              {v.en}
            </span>
          ))}
          {!open && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>
              +{mod.vocab.length - 4} altri
            </span>
          )}
        </div>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(34,197,94,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>
            Vocabolario completo
          </p>
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

          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: ITALIAN_COLOR }}>
              Frase di esempio
            </p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>
              "{mod.samplePhrase.en}"
            </p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              "{mod.samplePhrase.it}"
            </p>
          </div>

          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>
            Scenari di pratica: {mod.scenario}
          </p>

          <a
            href={MEDICAL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}
          >
            Pratica {mod.title} in Italiano →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MedicalItalian() {
  usePageMeta({ title: 'Medical Italian', lang: 'it', canonical: 'https://languagethreshold.com/medical-italian' })
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <path d="M50 700V300C50 148 148 50 350 50C552 50 650 148 650 300V700" stroke={ITALIAN_COLOR} strokeWidth="1.5" />
            <line x1="350" y1="200" x2="350" y2="500" stroke={ITALIAN_COLOR} strokeWidth="1.5" />
            <line x1="200" y1="350" x2="500" y2="350" stroke={ITALIAN_COLOR} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: ITALIAN_COLOR }}>
                Italiano Medico
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
              L'italiano che i vostri<br />
              <em style={{ color: ITALIAN_COLOR }}>pazienti già parlano.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Pronto soccorso, infermieristica, ortopedia, ostetricia, chirurgia, cardiologia — tredici moduli
              con IA sviluppati per il vocabolario specifico di ogni specialità. Non sono guide di
              frasi. Sono le parole di cui avete davvero bisogno in sala visita, in sala operatoria
              e al capezzale del paziente — in italiano.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "Le conversazioni cliniche più importanti richiedono sfumatura, fiducia e la capacità di rispondere
              alle domande sul momento — non attraverso interpreti. Tutto inizia imparando la lingua che
              i vostri pazienti usano ogni giorno."
              — Toby Anderton, MD
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: ITALIAN_COLOR, color: '#0D0D0D' }}
              >
                Inizia ad Imparare — È Gratuito →
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                Vedi Tutte le Specialità ↓
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why it matters */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: '85M+',
                  label: 'parlanti di italiano nel mondo — una lingua con una ricca tradizione medica e scientifica',
                  source: 'Istituto Nazionale di Statistica',
                },
                {
                  stat: '4',
                  label: 'paesi dove l\'italiano è lingua ufficiale, tra cui Italia, Svizzera, San Marino e Città del Vaticano',
                  source: 'Unione Europea',
                },
                {
                  stat: 'Settimane',
                  label: 'non anni — per raggiungere la fluenza clinica funzionale con vocabolario specifico per funzione e partner di pratica con IA',
                  source: 'Metodo Language Threshold',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: ITALIAN_COLOR }}>
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

      {/* Module magazine */}
      <section id="modules" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: ITALIAN_COLOR }}>
                Tredici moduli di specialità
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Ogni specialità.<br />
              <em style={{ color: '#C9A84C' }}>Il suo linguaggio.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Clicca su qualsiasi specialità per vedere il vocabolario, leggere frasi di esempio e avviare
              una sessione di pratica con IA. La stessa profondità clinica dei nostri moduli di spagnolo
              — completamente tradotta in italiano.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MEDICAL_MODULES.map(mod => (
              <FadeIn key={mod.id}>
                <ModuleCard mod={mod} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Origin story */}
      <FadeIn>
        <section className="py-24" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: ITALIAN_COLOR }}>
              Perché l'Italiano Medico
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Il problema dell'interprete<br />
              <em style={{ color: '#C9A84C' }}>in sala visita</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                Con oltre 85 milioni di parlanti nel mondo, l'italiano porta con sé una ricca tradizione
                medica e scientifica. Per i clinici che lavorano con comunità italofone, in contesti di
                assistenza sanitaria globale, o con pazienti che preferiscono comunicare nella loro
                lingua madre, la padronanza della lingua è essenziale.
              </p>
              <p>
                Le conversazioni cliniche più importanti richiedono sfumatura. Il consenso informato,
                la valutazione del dolore, le istruzioni alla dimissione, l'educazione prenatale — queste
                interazioni richiedono la capacità di rispondere alle domande sul momento, nella lingua
                del paziente.
              </p>
              <p>
                Language Threshold applica la stessa metodologia specifica per funzione usata nello
                Spagnolo Medico all'italiano. Ogni modulo è costruito con vocabolario clinico reale.
                Ogni scenario riflette vere consultazioni cliniche — non esercizi da manuale.
              </p>
              <p style={{ color: '#F7F3EC' }}>
                Che tu stia praticando a Milano, Roma, o servendo pazienti italofoni all'estero —
                la lingua che i tuoi pazienti usano ogni giorno è la lingua che devi imparare per prima.
              </p>
            </div>
            <div className="mt-6 text-sm" style={{ ...sansFont, color: '#A89F94' }}>
              — Toby Anderton, MD · B.A. Linguistica, BYU · Chirurgo Ortopedico · Fondatore, Language Threshold
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              Come funziona l'Italiano Medico
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Scegli la tua specialità', body: 'Seleziona tra pronto soccorso, infermieristica, ortopedia, ostetricia, chirurgia, cardiologia, fisioterapia, gestione del dolore, reception medica, servizio sociale e molto altro. Ogni modulo è costruito con vocabolario clinico reale — ora in italiano.' },
              { step: '02', title: 'Pratica con l\'IA', body: 'Il tuo partner IA interpreta un paziente, un familiare o un collega di lingua italiana. Le sessioni simulano vere consultazioni cliniche — valutazione del dolore, consenso informato, istruzioni alla dimissione, triage al pronto soccorso.' },
              { step: '03', title: 'Parla al capezzale', body: 'Settimane di pratica quotidiana, non anni di studio in aula. Language Threshold è sviluppato per clinici che hanno bisogno di usare l\'italiano lunedì, non il prossimo semestre.' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(34,197,94,0.3)' }}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-reference phrases */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#C9A84C' }}>
                Italiano Medico — riferimento rapido
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                Le frasi più importanti in clinica
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'How long have you had this pain?', it: 'Da quanto tempo ha questo dolore?' },
                { en: 'Are you allergic to any medications?', it: 'È allergico/a a qualche farmaco?' },
                { en: 'Take this medication twice a day with food.', it: 'Prenda questo farmaco due volte al giorno durante i pasti.' },
                { en: 'Do not eat or drink before your surgery.', it: 'Non mangi né beva nulla prima dell\'intervento chirurgico.' },
                { en: 'Your test results came back normal.', it: 'I risultati dei suoi esami sono nella norma.' },
                { en: 'I need to examine your abdomen.', it: 'Devo esaminare il suo addome.' },
                { en: 'Do you have health insurance?', it: 'Ha un\'assicurazione sanitaria?' },
                { en: 'Please sign this consent form.', it: 'Per favore, firmi questo modulo di consenso informato.' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(34,197,94,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>{phrase.it}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ ...sansFont, color: '#A89F94' }}>
                Queste sono frasi iniziali. L'app insegna centinaia di altre, in contesto clinico, con feedback dell'IA sulla tua pronuncia e grammatica.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
              >
                Pratica tutto nell'app →
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Cross-links */}
      <FadeIn>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Anche su Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <a
                href="/medical-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Spagnolo Medico
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Gli stessi tredici moduli — per pazienti ispanofoni.
                </p>
              </a>
              <a
                href="/medical-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌎</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Portoghese Medico
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Gli stessi tredici moduli — per pazienti di lingua portoghese.
                </p>
              </a>
              <a
                href="/medical-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,191,165,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Swahili Medico
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Gli stessi tredici moduli — per pazienti dell'Africa orientale.
                </p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <section
          className="py-28 text-center relative overflow-hidden"
          style={{ backgroundColor: '#111111' }}
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none" aria-hidden="true">
              <path d="M50 600V260C50 130 130 50 300 50C470 50 550 130 550 260V600" stroke={ITALIAN_COLOR} strokeWidth="1.5" />
              <line x1="300" y1="150" x2="300" y2="450" stroke={ITALIAN_COLOR} strokeWidth="1.5" />
              <line x1="150" y1="300" x2="450" y2="300" stroke={ITALIAN_COLOR} strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: ITALIAN_COLOR }}>
              La sala visita sta aspettando
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              I tuoi pazienti parlano italiano.<br />
              <em style={{ color: ITALIAN_COLOR }}>Ora puoi farlo anche tu.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              Non aspettare di essere al capezzale desiderando di aver imparato la lingua.
              Inizia dalla tua specialità. Costruisci da lì.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: ITALIAN_COLOR, color: '#0D0D0D' }}
            >
              Inizia ad Imparare — È Gratuito →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              Senza registrazione. Senza carta di credito. Scegli la tua specialità e inizia.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
