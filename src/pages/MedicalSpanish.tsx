import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MEDICAL_SUBSECTIONS, type MedicalSubsection } from '../data/medicalLessons'
import { MEDICAL_MODULES } from '../data/medicalModules'
import FadeIn from '../components/FadeIn'
import LessonGrid from '../components/LessonGrid'
import EmailSignupBanner from '../components/EmailSignupBanner'
import VocabReader from '../components/VocabReader'
import PDFGuideSection from '../components/PDFGuideSection'
import BookRecommendation from '../components/BookRecommendation'

function SubsectionCard({ sub }: { sub: MedicalSubsection }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        backgroundColor: '#161616',
        border: `1px solid ${open ? sub.color + '40' : 'rgba(74,158,255,0.12)'}`,
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
          {open ? 'Close ↑' : 'See lessons ↓'}
        </span>
      </button>

      {open && (
        <div style={{ padding: '0 16px 20px', borderTop: `1px solid ${sub.color}18` }}>
          <div style={{ paddingTop: 16 }}>
            <LessonGrid lessons={sub.lessons} color={sub.color} />
          </div>
        </div>
      )}
    </div>
  )
}

export default function MedicalSpanish() {
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <path d="M50 700V300C50 148 148 50 350 50C552 50 650 148 650 300V700" stroke="#4A9EFF" strokeWidth="1.5" />
            <line x1="350" y1="200" x2="350" y2="500" stroke="#4A9EFF" strokeWidth="1.5" />
            <line x1="200" y1="350" x2="500" y2="350" stroke="#4A9EFF" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#4A9EFF' }}>
                Medical Spanish
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
              The Spanish your<br />
              <em style={{ color: '#4A9EFF' }}>patients already speak.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              ER, nursing, orthopedics, OB/GYN, surgery, cardiology — thirteen AI-powered modules built
              for the specific language of each role. Not phrase books. The vocabulary you actually need
              in the exam room, the OR, and at the bedside.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "I spent years in medicine wishing I could speak directly to my patients — not through
              a phone interpreter, not through a family member. Just me and them, in their language."
              — Toby Anderton, MD
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#4A9EFF', color: '#0D0D0D' }}
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
                  stat: '62M+',
                  label: 'Spanish speakers in the US — the fastest-growing patient population in American healthcare',
                  source: 'US Census Bureau',
                },
                {
                  stat: '3×',
                  label: 'higher rate of adverse outcomes when patients have limited English proficiency and no interpreter',
                  source: 'Journal of General Internal Medicine',
                },
                {
                  stat: 'Weeks',
                  label: 'not years — to reach working clinical fluency with role-specific vocabulary and AI practice',
                  source: 'Language Threshold method',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: '#4A9EFF' }}>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#4A9EFF' }}>
                Thirteen specialties · 30 lessons each
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Every specialty.<br />
              <em style={{ color: '#C9A84C' }}>Its own language.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              390 lessons built from the actual vocabulary of each clinical role. Pick a specialty, pick
              any lesson — work through them in order or jump to what you need before tomorrow's shift.
              Track your progress as you go.
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#4A9EFF' }}>
              Why a surgeon built a language app
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              The exam room<br />
              <em style={{ color: '#C9A84C' }}>interpreter problem</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                In orthopedic surgery, the most important conversation happens before the operation —
                informed consent. You explain the risks, the recovery, what they'll feel in the days
                after. That conversation requires nuance, trust, and the ability to answer questions
                in the moment.
              </p>
              <p>
                Through a phone interpreter, that conversation takes three times as long, the patient
                can't read your body language, and half the emotional reassurance is lost in translation.
                Through a family member, you're never sure what's actually being said.
              </p>
              <p>
                I studied linguistics at BYU before medical school. I knew what role-specific language
                acquisition looked like, and I knew the tools to do it right had never been applied to
                clinical medicine at scale.
              </p>
              <p style={{ color: '#F7F3EC' }}>
                Language Threshold is what I wish had existed when I started practicing. The vocabulary
                is real clinical vocabulary. The scenarios are real clinical scenarios. The AI partner
                speaks the way patients actually speak — not textbook Spanish.
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
              How Medical Spanish works
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pick your specialty', body: 'Choose from ER, nursing, orthopedics, OB/GYN, surgery, cardiology, physical therapy, pain management, medical receptionist, social work, and more. Each specialty has 30 scenario-based lessons built from real clinical vocabulary.' },
              { step: '02', title: 'Practice with AI', body: 'Your AI partner plays a Spanish-speaking patient, family member, or colleague. Sessions simulate real clinical encounters — pain assessment, informed consent, discharge teaching, triage.' },
              { step: '03', title: 'Speak at the bedside', body: 'Weeks of daily practice, not years of classroom study. Language Threshold is built for clinicians who need to use Spanish on Monday, not next semester.' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(74,158,255,0.3)' }}>
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
                Medical Spanish — quick reference
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                The phrases that matter most in the clinic
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'Where does it hurt?', es: '¿Dónde le duele?' },
                { en: 'How long have you had this pain?', es: '¿Cuánto tiempo lleva con este dolor?' },
                { en: 'Are you allergic to any medications?', es: '¿Es alérgico a algún medicamento?' },
                { en: 'Take this medication twice a day with food.', es: 'Tome este medicamento dos veces al día con comida.' },
                { en: 'Do not eat or drink before your surgery.', es: 'No coma ni beba nada antes de su cirugía.' },
                { en: 'Your test results came back normal.', es: 'Los resultados de sus pruebas salieron normales.' },
                { en: 'I need to examine your abdomen.', es: 'Necesito examinarle el abdomen.' },
                { en: 'Do you have health insurance?', es: '¿Tiene seguro médico?' },
                { en: 'Please sign this consent form.', es: 'Por favor firme este formulario de consentimiento.' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>{phrase.es}</p>
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

      {/* Email signup — 10% off for 6 months */}
      <FadeIn>
        <section id="email-signup" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <EmailSignupBanner accentColor="#4A9EFF" specialty="medical" />
          </div>
        </section>
      </FadeIn>

      {/* Rotating vocabulary reader */}
      <FadeIn>
        <section className="py-16" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <VocabReader modules={MEDICAL_MODULES} accentColor="#4A9EFF" specialty="medical" />
          </div>
        </section>
      </FadeIn>

      {/* PDF Study Guides */}
      <FadeIn>
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <PDFGuideSection
              specialty="medical"
              accentColor="#4A9EFF"
              modules={MEDICAL_MODULES.map(m => ({ id: m.id, emoji: m.emoji, title: m.title, tagline: m.tagline, color: m.color }))}
            />
          </div>
        </section>
      </FadeIn>

      {/* Book recommendation */}
      <FadeIn>
        <section className="py-12" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <BookRecommendation specialty="medical" />
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
            <div className="grid sm:grid-cols-3 gap-5">
              <a
                href="https://constructionspanish.app"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(255,122,74,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🔨</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Contractor Spanish
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Spanish for framers, plumbers, electricians, drywall crews, and foremen.
                </p>
              </a>
              <a
                href="/medical-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇧🇷</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Medical Portuguese
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  The same thirteen modules — for Brazilian Portuguese-speaking patients.
                </p>
              </a>
              <a
                href="https://tobyandertonmd.com"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(201,168,76,0.12)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">👨‍⚕️</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Toby Anderton, MD
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Orthopedic surgeon, linguist, and founder of Language Threshold.
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
              <path d="M50 600V260C50 130 130 50 300 50C470 50 550 130 550 260V600" stroke="#4A9EFF" strokeWidth="1.5" />
              <line x1="300" y1="150" x2="300" y2="450" stroke="#4A9EFF" strokeWidth="1.5" />
              <line x1="150" y1="300" x2="450" y2="300" stroke="#4A9EFF" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#4A9EFF' }}>
              The exam room is waiting
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Your patients speak Spanish.<br />
              <em style={{ color: '#4A9EFF' }}>Now you can too.</em>
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
              style={{ ...sansFont, backgroundColor: '#4A9EFF', color: '#0D0D0D' }}
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
