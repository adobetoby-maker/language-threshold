import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { CONSTRUCTION_MODULES, type ConstructionModule } from '../data/constructionModules'
import { CONSTRUCTION_SUBSECTIONS, type ConstructionSubsection } from '../data/constructionLessons'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import LessonGrid from '../components/LessonGrid'

const SWAHILI_COLOR = '#00BFA5'
const CONTRACTOR_APP_URL = `${APP_URL}?module=framer&lang=sw`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: ConstructionModule }) {
  const [open, setOpen] = useState(false)
  const [tapped, setTapped] = useState<TappedWord | null>(null)
  return (
    <div
      className="rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#161616',
        border: open ? `1px solid ${mod.color}40` : 'rgba(0,191,165,0.12)',
        boxShadow: open ? `0 0 32px -8px ${mod.color}22` : 'none',
        borderStyle: 'solid',
        borderWidth: 1,
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
              style={{ ...sansFont, backgroundColor: 'rgba(0,191,165,0.08)', color: SWAHILI_COLOR, border: '1px solid rgba(0,191,165,0.2)' }}
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
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(0,191,165,0.08)' }} onClick={e => e.stopPropagation()}>
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
                    setTapped({ word: v.sw.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.sw}`, x: rect.left + rect.width / 2, y: rect.bottom })
                  }}
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: mod.color, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.sw}
                </button>
              </div>
            ))}
          </div>
          {tapped && <WordCard {...tapped} color={mod.color} onClose={() => setTapped(null)} />}

          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(0,191,165,0.06)', border: '1px solid rgba(0,191,165,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: SWAHILI_COLOR }}>
              Sample phrase
            </p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>
              "{mod.samplePhrase.en}"
            </p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              "{mod.samplePhrase.sw}"
            </p>
          </div>

          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>
            Practice scenarios: {mod.scenario}
          </p>

          <a
            href={CONTRACTOR_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}
          >
            Practice {mod.title} Swahili →
          </a>
        </div>
      )}
    </div>
  )
}

function SubsectionCard({ sub }: { sub: ConstructionSubsection }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        backgroundColor: '#161616',
        border: `1px solid ${open ? sub.color + '40' : 'rgba(0,191,165,0.12)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '20px 20px 16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 28 }}>{sub.emoji}</span>
          <span style={{
            ...sansFont, fontSize: 10, fontWeight: 700, color: sub.color,
            backgroundColor: sub.color + '18', borderRadius: 20, padding: '3px 10px',
            textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap',
          }}>
            {sub.lessons.length} lessons
          </span>
        </div>
        <h3 style={{ ...displayFont, fontSize: 17, fontWeight: 700, color: '#F7F3EC', margin: '0 0 4px' }}>
          {sub.title}
        </h3>
        <p style={{ ...sansFont, fontSize: 12, color: '#A89F94', margin: '0 0 10px', lineHeight: 1.5 }}>
          {sub.tagline}
        </p>
        <span style={{
          ...sansFont, fontSize: 11, fontWeight: 600,
          color: open ? sub.color : '#71717A',
        }}>
          {open ? 'Close ↑' : 'See lessons in Kiswahili ↓'}
        </span>
      </button>

      {open && (
        <div style={{ padding: '0 16px 20px', borderTop: `1px solid ${sub.color}18` }}>
          <div style={{ paddingTop: 16 }}>
            <LessonGrid lessons={sub.lessons} color={sub.color} lang="sw" />
          </div>
        </div>
      )}
    </div>
  )
}

export default function ContractorSwahili() {
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <rect x="100" y="100" width="500" height="500" stroke={SWAHILI_COLOR} strokeWidth="1.5" rx="8" />
            <line x1="350" y1="100" x2="350" y2="600" stroke={SWAHILI_COLOR} strokeWidth="1.5" />
            <line x1="100" y1="350" x2="600" y2="350" stroke={SWAHILI_COLOR} strokeWidth="1.5" />
            <line x1="200" y1="200" x2="500" y2="500" stroke={SWAHILI_COLOR} strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SWAHILI_COLOR }}>
                Contractor Swahili
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
              The Swahili your<br />
              <em style={{ color: SWAHILI_COLOR }}>crew already speaks.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Framing, plumbing, electrical, drywall, safety — nine AI-powered modules built for the
              specific language of each trade. Not phrase books. The vocabulary your crew uses on the
              job site, in Kiswahili.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "The most dangerous miscommunication on a job site happens when a foreman and a crew
              member don't share a language. Safety, quality, and productivity all depend on being
              understood." — Language Threshold
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: SWAHILI_COLOR, color: '#0D0D0D' }}
              >
                Start Learning — It's Free →
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                See All Trades ↓
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
                  stat: '200M+',
                  label: 'Swahili speakers in East and Central Africa — a workforce with deep construction and trade expertise',
                  source: 'African Union',
                },
                {
                  stat: '#1',
                  label: 'cause of job site injuries: miscommunication during safety briefings and task handoffs',
                  source: 'OSHA research',
                },
                {
                  stat: 'Weeks',
                  label: 'to reach working job-site fluency with role-specific trade vocabulary and AI practice',
                  source: 'Language Threshold method',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: SWAHILI_COLOR }}>
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

      {/* Module grid */}
      <section id="modules" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SWAHILI_COLOR }}>
                Nine trade modules
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Every trade.<br />
              <em style={{ color: '#C9A84C' }}>Its own language.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Click any trade to see the vocabulary, read sample phrases, and jump into an AI practice
              session. From morning crew briefs to OSHA safety talks — in Kiswahili.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONSTRUCTION_MODULES.map(mod => (
              <FadeIn key={mod.id}>
                <ModuleCard mod={mod} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson curriculum — trades × lessons in Swahili */}
      <section id="lessons" className="py-28" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SWAHILI_COLOR }}>
                Nine trades · full lesson curriculum · Kiswahili
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Full lesson curriculum<br />
              <em style={{ color: '#C9A84C' }}>in Kiswahili.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Every trade, every task — vocabulary your crew uses on the job site, now in Kiswahili.
              Click any trade to expand the lessons and see Swahili translations alongside English.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONSTRUCTION_SUBSECTIONS.map(sub => (
              <FadeIn key={sub.id}>
                <SubsectionCard sub={sub} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              How Contractor Swahili works
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pick your trade', body: 'Framing, plumbing, electrical, drywall, safety, truck driving, landscaping, and more. Each module is built from the vocabulary your specific trade actually uses on the job site — now in Kiswahili.' },
              { step: '02', title: 'Practice with AI', body: 'Your AI partner plays a Swahili-speaking crew member, subcontractor, or foreman. Sessions simulate real job-site conversations — tool requests, safety briefings, schedule handoffs.' },
              { step: '03', title: 'Lead your crew', body: 'Weeks of daily practice, not years of classroom study. Learn the language your crew speaks and run a safer, more productive job site.' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(0,191,165,0.3)' }}>
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
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#C9A84C' }}>
                Contractor Swahili — quick reference
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                The phrases that run a job site
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'Put on your hard hat before we start.', sw: 'Vaa kofia ngumu kabla hatujaanza.' },
                { en: 'The wall is not plumb — fix it before we sheathe.', sw: 'Ukuta hauko wima — rekebishe kabla hatujaifunika.' },
                { en: 'Check every fitting for leaks before we turn it on.', sw: 'Angalia kila kiunganisho kwa uvujaji kabla hatujalifungua.' },
                { en: 'Label every circuit before the inspector comes.', sw: 'Weka lebo kwa kila circuit kabla mkaguzi hajafika.' },
                { en: 'Sand the seams until they are smooth.', sw: 'Saga viungo hadi viwe laini.' },
                { en: 'The inspector is here — everyone stop work.', sw: 'Mkaguzi yuko hapa — kila mtu simama kazi.' },
                { en: 'Deliver this load to the dock by noon.', sw: 'Peleka mzigo huu gatini kabla ya adhuhuri.' },
                { en: 'Blow out the irrigation lines today.', sw: 'Weka bomba la umwagiliaji tupu leo.' },
                { en: 'Nobody climbs without a harness tied off.', sw: 'Hakuna anayepanda bila mkanda wa usalama uliofungwa.' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(0,191,165,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>{phrase.sw}</p>
                </div>
              ))}
            </div>
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
                href="/contractor-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(255,122,74,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🔨</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Contractor Spanish
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  The same nine trade modules — for Spanish-speaking crews.
                </p>
              </a>
              <a
                href="/medical-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: `1px solid rgba(0,191,165,0.12)`, textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Medical Swahili
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Thirteen clinical specialty modules in Kiswahili.
                </p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <section className="py-28 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SWAHILI_COLOR }}>
              The job site is waiting
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Your crew speaks Swahili.<br />
              <em style={{ color: SWAHILI_COLOR }}>Now you can too.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              Start with your trade. Build from there.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: SWAHILI_COLOR, color: '#0D0D0D' }}
            >
              Start Learning — It's Free →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              No signup. No credit card. Pick your trade and start.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
