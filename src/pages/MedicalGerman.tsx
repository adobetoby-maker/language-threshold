import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MEDICAL_MODULES, type MedicalModule } from '../data/medicalModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const GERMAN_COLOR = '#EF4444'
const MEDICAL_APP_URL = `${APP_URL}?module=emergency&lang=de`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: MedicalModule }) {
  const [open, setOpen] = useState(false)
  const [tapped, setTapped] = useState<TappedWord | null>(null)
  return (
    <div
      className="rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#161616',
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(239,68,68,0.12)`,
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
            {open ? 'Schließen ↑' : 'Erweitern ↓'}
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
              style={{ ...sansFont, backgroundColor: 'rgba(239,68,68,0.08)', color: GERMAN_COLOR, border: '1px solid rgba(239,68,68,0.2)' }}
            >
              {v.en}
            </span>
          ))}
          {!open && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>
              +{mod.vocab.length - 4} mehr
            </span>
          )}
        </div>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(239,68,68,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>
            Vollständiger Wortschatz
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {mod.vocab.map(v => (
              <div key={v.en} className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{v.en}</span>
                <button
                  onClick={e => {
                    const rect = (e.target as HTMLElement).getBoundingClientRect()
                    setTapped({ word: v.de.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.de}`, x: rect.left + rect.width / 2, y: rect.bottom })
                  }}
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: mod.color, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.de}
                </button>
              </div>
            ))}
          </div>
          {tapped && <WordCard {...tapped} lang="de" color={mod.color} onClose={() => setTapped(null)} />}

          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: GERMAN_COLOR }}>
              Beispielsatz
            </p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>
              "{mod.samplePhrase.en}"
            </p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              "{mod.samplePhrase.de}"
            </p>
          </div>

          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>
            Übungsszenarien: {mod.scenario}
          </p>

          <a
            href={MEDICAL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}
          >
            {mod.title} auf Deutsch üben →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MedicalGerman() {
  usePageMeta({ title: 'Medical German', lang: 'de', canonical: 'https://languagethreshold.com/medical-german' })
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <path d="M50 700V300C50 148 148 50 350 50C552 50 650 148 650 300V700" stroke={GERMAN_COLOR} strokeWidth="1.5" />
            <line x1="350" y1="200" x2="350" y2="500" stroke={GERMAN_COLOR} strokeWidth="1.5" />
            <line x1="200" y1="350" x2="500" y2="350" stroke={GERMAN_COLOR} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: GERMAN_COLOR }}>
                Medizinisches Deutsch
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
              Das Deutsch, das Ihre<br />
              <em style={{ color: GERMAN_COLOR }}>Patienten bereits sprechen.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Notaufnahme, Pflege, Orthopädie, Geburtshilfe, Chirurgie, Kardiologie — dreizehn
              KI-gestützte Module, entwickelt für den spezifischen Wortschatz jeder Fachrichtung.
              Keine Sprachführer. Sondern die Wörter, die Sie wirklich im Untersuchungsraum, im
              Operationssaal und am Krankenbett brauchen — auf Deutsch.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "Die wichtigsten klinischen Gespräche erfordern Nuance, Vertrauen und die Fähigkeit,
              Fragen im Moment zu beantworten — nicht über Dolmetscher. Alles beginnt damit, die
              Sprache zu lernen, die Ihre Patienten jeden Tag sprechen."
              — Toby Anderton, MD
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: GERMAN_COLOR, color: '#0D0D0D' }}
              >
                Jetzt kostenlos lernen →
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                Alle Fachgebiete ansehen ↓
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
                  stat: '130M+',
                  label: 'Deutschsprachige weltweit — eine der meistgesprochenen Sprachen Europas mit starker globaler Präsenz',
                  source: 'Goethe-Institut',
                },
                {
                  stat: '5',
                  label: 'Länder, in denen Deutsch Amtssprache ist: Deutschland, Österreich, Schweiz, Liechtenstein und Luxemburg',
                  source: 'Europäische Union',
                },
                {
                  stat: 'Wochen',
                  label: 'nicht Jahre — für funktionale klinische Sprachkompetenz mit funktionsspezifischem Wortschatz und KI-Übungspartnern',
                  source: 'Language Threshold Methode',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: GERMAN_COLOR }}>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: GERMAN_COLOR }}>
                Dreizehn Fachmodule
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Jede Fachrichtung.<br />
              <em style={{ color: '#C9A84C' }}>Ihre eigene Sprache.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Klicken Sie auf eine Fachrichtung, um den Wortschatz zu sehen, Beispielsätze zu lesen
              und eine KI-Übungssession zu starten. Dieselbe klinische Tiefe wie unsere
              Spanisch-Module — vollständig ins Deutsche übertragen.
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: GERMAN_COLOR }}>
              Warum Medizinisches Deutsch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Das Dolmetscher-Problem<br />
              <em style={{ color: '#C9A84C' }}>im Untersuchungsraum</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                Mit über 130 Millionen Muttersprachlern ist Deutsch eine der meistgesprochenen
                Sprachen Europas. Für Kliniker, die in deutschsprachigen Krankenhäusern arbeiten,
                in deutschsprachigen Gemeinschaften oder in globalen Gesundheitsumgebungen tätig
                sind, ist Sprachkompetenz unerlässlich.
              </p>
              <p>
                Die wichtigsten klinischen Gespräche erfordern Nuance. Informierte Einwilligung,
                Schmerzeinschätzung, Entlassungsanweisungen, pränatale Aufklärung — diese
                Interaktionen erfordern die Fähigkeit, Fragen im Moment, in der Sprache des
                Patienten zu beantworten.
              </p>
              <p>
                Language Threshold wendet dieselbe funktionsspezifische Methodik, die im
                Medizinischen Spanisch verwendet wird, auf das Deutsche an. Jedes Modul wird
                mit echtem klinischen Vokabular aufgebaut. Jedes Szenario spiegelt echte
                klinische Konsultationen wider — keine Lehrbuchübungen.
              </p>
              <p style={{ color: '#F7F3EC' }}>
                Ob Sie in Berlin, Wien oder Zürich praktizieren oder deutschsprachige Patienten
                in der Diaspora betreuen — die Sprache, die Ihre Patienten täglich verwenden,
                ist die Sprache, die Sie zuerst lernen sollten.
              </p>
            </div>
            <div className="mt-6 text-sm" style={{ ...sansFont, color: '#A89F94' }}>
              — Toby Anderton, MD · B.A. Linguistik, BYU · Orthopädischer Chirurg · Gründer, Language Threshold
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              Wie Medizinisches Deutsch funktioniert
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Wählen Sie Ihr Fachgebiet', body: 'Wählen Sie aus Notaufnahme, Pflege, Orthopädie, Geburtshilfe, Chirurgie, Kardiologie, Physiotherapie, Schmerzmanagement, medizinischer Rezeption, Sozialarbeit und mehr. Jedes Modul wird mit echtem klinischen Vokabular aufgebaut — jetzt auf Deutsch.' },
              { step: '02', title: 'Üben Sie mit KI', body: 'Ihr KI-Partner spielt einen deutschsprachigen Patienten, Angehörigen oder Kollegen. Die Sitzungen simulieren echte klinische Konsultationen — Schmerzeinschätzung, informierte Einwilligung, Entlassungsanweisungen, Notaufnahme-Triage.' },
              { step: '03', title: 'Sprechen Sie am Krankenbett', body: 'Wochen täglicher Übung, nicht Jahre im Klassenzimmer. Language Threshold wurde für Kliniker entwickelt, die Deutsch am Montag brauchen — nicht im nächsten Semester.' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(239,68,68,0.3)' }}>
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
                Medizinisches Deutsch — Schnellreferenz
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                Die wichtigsten Phrasen in der Klinik
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'How long have you had this pain?', de: 'Seit wann haben Sie diese Schmerzen?' },
                { en: 'Are you allergic to any medications?', de: 'Sind Sie gegen irgendwelche Medikamente allergisch?' },
                { en: 'Take this medication twice a day with food.', de: 'Nehmen Sie dieses Medikament zweimal täglich zu den Mahlzeiten ein.' },
                { en: 'Do not eat or drink before your surgery.', de: 'Essen und trinken Sie nichts vor Ihrer Operation.' },
                { en: 'Your test results came back normal.', de: 'Ihre Testergebnisse sind unauffällig.' },
                { en: 'I need to examine your abdomen.', de: 'Ich muss Ihren Bauch untersuchen.' },
                { en: 'Do you have health insurance?', de: 'Sind Sie krankenversichert?' },
                { en: 'Please sign this consent form.', de: 'Bitte unterschreiben Sie diese Einwilligungserklärung.' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(239,68,68,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>{phrase.de}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ ...sansFont, color: '#A89F94' }}>
                Dies sind Einstiegsphrasen. Die App lehrt Hunderte weitere, im klinischen Kontext, mit KI-Feedback zu Ihrer Aussprache und Grammatik.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
              >
                Alle Phrasen in der App üben →
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
              Auch bei Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <a
                href="/medical-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Medizinisches Spanisch
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Dieselben dreizehn Module — für hispanische Patienten in den USA.
                </p>
              </a>
              <a
                href="/medical-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇧🇷</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Medizinisches Portugiesisch
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Dieselben dreizehn Module — für brasilianische und lusophone Patienten.
                </p>
              </a>
              <a
                href="/medical-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,191,165,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Medizinisches Suaheli
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Dieselben dreizehn Module — für Patienten aus Ostafrika.
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
              <path d="M50 600V260C50 130 130 50 300 50C470 50 550 130 550 260V600" stroke={GERMAN_COLOR} strokeWidth="1.5" />
              <line x1="300" y1="150" x2="300" y2="450" stroke={GERMAN_COLOR} strokeWidth="1.5" />
              <line x1="150" y1="300" x2="450" y2="300" stroke={GERMAN_COLOR} strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: GERMAN_COLOR }}>
              Der Untersuchungsraum wartet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Ihre Patienten sprechen Deutsch.<br />
              <em style={{ color: GERMAN_COLOR }}>Jetzt können Sie es auch.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              Warten Sie nicht, bis Sie am Krankenbett stehen und sich wünschen, die Sprache gelernt
              zu haben. Beginnen Sie mit Ihrem Fachgebiet. Bauen Sie von dort aus auf.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: GERMAN_COLOR, color: '#0D0D0D' }}
            >
              Jetzt kostenlos lernen →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              Keine Anmeldung. Keine Kreditkarte. Wählen Sie Ihr Fachgebiet und legen Sie los.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
