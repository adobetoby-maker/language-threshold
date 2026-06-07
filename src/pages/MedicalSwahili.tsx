import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MEDICAL_MODULES, type MedicalModule } from '../data/medicalModules'
import { MEDICAL_SUBSECTIONS, type MedicalSubsection } from '../data/medicalLessons'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import LessonGrid from '../components/LessonGrid'

const SWAHILI_COLOR = '#00BFA5'
const MEDICAL_APP_URL = `${APP_URL}?module=emergency&lang=sw`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: MedicalModule }) {
  const [open, setOpen] = useState(false)
  const [tapped, setTapped] = useState<TappedWord | null>(null)
  return (
    <div
      className="rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#161616',
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(0,191,165,0.12)`,
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
            href={MEDICAL_APP_URL}
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

function SubsectionCard({ sub }: { sub: MedicalSubsection }) {
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
            30 lessons
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

export default function MedicalSwahili() {
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <path d="M50 700V300C50 148 148 50 350 50C552 50 650 148 650 300V700" stroke={SWAHILI_COLOR} strokeWidth="1.5" />
            <line x1="350" y1="200" x2="350" y2="500" stroke={SWAHILI_COLOR} strokeWidth="1.5" />
            <line x1="200" y1="350" x2="500" y2="350" stroke={SWAHILI_COLOR} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SWAHILI_COLOR }}>
                Medical Swahili
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
              <em style={{ color: SWAHILI_COLOR }}>patients already speak.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              ER, nursing, orthopedics, OB/GYN, surgery, cardiology — thirteen AI-powered modules built
              for the specific language of each role. Not phrase books. The vocabulary you actually need
              in the exam room, the OR, and at the bedside — in Kiswahili.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "The most important clinical conversations require nuance, trust, and the ability to answer
              questions in the moment — not through an interpreter. That starts with learning the language
              your patients use every day."
              — Toby Anderton, MD
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
                See All Specialties ↓
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
                  stat: '200M+',
                  label: 'Swahili speakers across East and Central Africa — one of the most widely spoken languages on the continent',
                  source: 'African Union',
                },
                {
                  stat: '5',
                  label: 'countries where Swahili is an official or national language: Kenya, Tanzania, Uganda, Rwanda, DRC',
                  source: 'African Union',
                },
                {
                  stat: 'Weeks',
                  label: 'not years — to reach working clinical fluency with role-specific vocabulary and AI practice partners',
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

      {/* Module magazine */}
      <section id="modules" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SWAHILI_COLOR }}>
                Thirteen specialty modules
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Every specialty.<br />
              <em style={{ color: '#C9A84C' }}>Its own language.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Click any specialty to see the vocabulary, read sample phrases, and jump into an AI practice
              session. The same clinical depth as our Spanish modules — fully translated into Kiswahili.
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

      {/* Lesson curriculum — 13 specialties × 30 lessons in Swahili */}
      <section id="lessons" className="py-28" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SWAHILI_COLOR }}>
                Thirteen specialties · 30 lessons each · Kiswahili
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Full lesson curriculum<br />
              <em style={{ color: '#C9A84C' }}>in Kiswahili.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              390 lessons built from the actual vocabulary of each clinical role — now fully translated
              into Kiswahili. Click any specialty to expand the lessons and see the Swahili translations
              side by side with English.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MEDICAL_SUBSECTIONS.map(sub => (
              <FadeIn key={sub.id}>
                <SubsectionCard sub={sub} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Origin story */}
      <FadeIn>
        <section className="py-24" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SWAHILI_COLOR }}>
              Why Medical Swahili
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              The exam room<br />
              <em style={{ color: '#C9A84C' }}>interpreter problem</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                Swahili is the lingua franca of East Africa — spoken across Kenya, Tanzania, Uganda,
                Rwanda, and the Democratic Republic of Congo. For clinicians working in East African
                hospitals, diaspora communities, or global health settings, Kiswahili is the language
                of the bedside.
              </p>
              <p>
                The most important clinical conversations require nuance. Informed consent, pain
                assessment, discharge instructions, prenatal education — these require the ability
                to answer questions in the moment, in the patient's own language.
              </p>
              <p>
                Language Threshold applies the same role-specific methodology used in Medical Spanish
                to Kiswahili. Every module is built from real clinical vocabulary. Every scenario
                reflects real clinical encounters — not textbook exercises.
              </p>
              <p style={{ color: '#F7F3EC' }}>
                Whether you're practicing in Nairobi, Dar es Salaam, or caring for East African
                patients in the diaspora — the language your patients use every day is the language
                you should learn first.
              </p>
            </div>
            <div className="mt-6 text-sm" style={{ ...sansFont, color: '#A89F94' }}>
              — Toby Anderton, MD · B.A. Linguistics, BYU · Orthopedic Surgeon · Founder, Language Threshold
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              How Medical Swahili works
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pick your specialty', body: 'Choose from ER, nursing, orthopedics, OB/GYN, surgery, cardiology, physical therapy, pain management, medical receptionist, social work, and more. Each module is built from real clinical vocabulary — now in Kiswahili.' },
              { step: '02', title: 'Practice with AI', body: 'Your AI partner plays a Swahili-speaking patient, family member, or colleague. Sessions simulate real clinical encounters — pain assessment, informed consent, discharge teaching, triage.' },
              { step: '03', title: 'Speak at the bedside', body: 'Weeks of daily practice, not years of classroom study. Language Threshold is built for clinicians who need to use Swahili on Monday, not next semester.' },
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
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#C9A84C' }}>
                Medical Swahili — quick reference
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                The phrases that matter most in the clinic
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'Where does it hurt?', sw: 'Inakusumbua wapi?' },
                { en: 'How long have you had this pain?', sw: 'Maumivu haya yamekuwepo kwa muda gani?' },
                { en: 'Are you allergic to any medications?', sw: 'Una mzio wa dawa yoyote?' },
                { en: 'Take this medication twice a day with food.', sw: 'Tumia dawa hii mara mbili kwa siku na chakula.' },
                { en: 'Do not eat or drink before your surgery.', sw: 'Usile wala kunywe chochote kabla ya upasuaji wako.' },
                { en: 'Your test results came back normal.', sw: 'Matokeo ya vipimo vyako yamerudi kawaida.' },
                { en: 'I need to examine your abdomen.', sw: 'Ninahitaji kuchunguza tumbo lako.' },
                { en: 'Do you have health insurance?', sw: 'Je, una bima ya afya?' },
                { en: 'Please sign this consent form.', sw: 'Tafadhali saini fomu hii ya idhini.' },
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
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ ...sansFont, color: '#A89F94' }}>
                These are starter phrases. The app teaches hundreds more, in clinical context, with AI feedback on your pronunciation and grammar.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
              >
                Practice all of these in the app →
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
              Also on Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
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
                  The same thirteen modules — for Spanish-speaking patients in the US.
                </p>
              </a>
              <a
                href="/contractor-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: `1px solid rgba(0,191,165,0.12)`, textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🔨</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Contractor Swahili
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Swahili for construction trades — framing, plumbing, electrical, safety.
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
              <path d="M50 600V260C50 130 130 50 300 50C470 50 550 130 550 260V600" stroke={SWAHILI_COLOR} strokeWidth="1.5" />
              <line x1="300" y1="150" x2="300" y2="450" stroke={SWAHILI_COLOR} strokeWidth="1.5" />
              <line x1="150" y1="300" x2="450" y2="300" stroke={SWAHILI_COLOR} strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: SWAHILI_COLOR }}>
              The exam room is waiting
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Your patients speak Swahili.<br />
              <em style={{ color: SWAHILI_COLOR }}>Now you can too.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              Don't wait until you're standing at the bedside wishing you'd learned the language.
              Start with your specialty. Build from there.
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
              No signup. No credit card. Pick your specialty and start.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
