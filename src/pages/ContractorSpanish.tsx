import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { CONSTRUCTION_SUBSECTIONS, type ConstructionSubsection } from '../data/constructionLessons'
import { CONSTRUCTION_MODULES } from '../data/constructionModules'
import FadeIn from '../components/FadeIn'
import LessonGrid from '../components/LessonGrid'
import EmailSignupBanner from '../components/EmailSignupBanner'
import VocabReader from '../components/VocabReader'
import PDFGuideSection from '../components/PDFGuideSection'
import BookRecommendation from '../components/BookRecommendation'

function SubsectionCard({ sub }: { sub: ConstructionSubsection }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        backgroundColor: '#161616',
        border: `1px solid ${open ? sub.color + '40' : 'rgba(201,168,76,0.12)'}`,
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

export default function ContractorSpanish() {
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        {/* Background arch */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <path d="M50 700V300C50 148 148 50 350 50C552 50 650 148 650 300V700" stroke="#FF7A4A" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#FF7A4A' }}>
                Contractor Spanish
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
              <em style={{ color: '#FF7A4A' }}>crew already speaks.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Framing, plumbing, electrical, drywall, safety, logistics — nine AI-powered modules
              built for the specific language of each trade. Not generic phrases. The words you
              actually need on the jobsite.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "Twenty workers made 750 adobe bricks by hand. Two workers with the right press made 1,000.
              The tool existed — they just didn't have it." — Toby Anderton, MD, Ciudad Obregón, 2006
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#FF7A4A', color: '#0D0D0D' }}
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

      {/* Why it matters */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: '68%',
                  label: 'of construction workers in the US speak Spanish as their primary language',
                  source: 'Bureau of Labor Statistics',
                },
                {
                  stat: '4×',
                  label: 'higher injury rate when safety instructions are not communicated in the worker\'s language',
                  source: 'OSHA research',
                },
                {
                  stat: 'Weeks',
                  label: 'not years — the time it takes to reach working fluency in a trade with role-specific training',
                  source: 'Language Threshold method',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: '#FF7A4A' }}>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#FF7A4A' }}>
                Nine trades · 30 lessons each
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Every trade.<br />
              <em style={{ color: '#C9A84C' }}>Its own language.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              270 lessons built from the actual vocabulary of each trade. Pick a trade, pick any
              lesson — work through them in order or jump to whatever you need for tomorrow's shift.
              Track your progress as you go.
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

      {/* Origin story */}
      <FadeIn>
        <section className="py-24" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#FF7A4A' }}>
              Where this started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Ciudad Obregón,<br />
              <em style={{ color: '#C9A84C' }}>2006</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                My father and I traveled to Ciudad Obregón on a service mission to help a native tribe
                outside the city build homes — making adobe bricks by hand in the desert heat.
              </p>
              <p>
                Two years earlier, back in the US, we had finished building an adobe brick press.
                With that press, two people could make 1,000 bricks in a day. In Ciudad Obregón,
                twenty people worked until their backs gave out and made 750.
              </p>
              <p>
                The whole time I was there, I kept doing the math. How many more homes could we have
                built? The tool existed. They just didn't have it. So they struggled — not because
                they weren't working hard enough, but because no one had brought them the right tool.
              </p>
              <p style={{ color: '#F7F3EC' }}>
                That's what most contractors are doing when they try to communicate with Spanish-speaking
                crews. Working hard. Making 750 bricks by hand. Not because they're doing it wrong —
                because no one has handed them the press.
              </p>
            </div>
            <div className="mt-6 text-sm" style={{ ...sansFont, color: '#A89F94' }}>
              — Toby Anderton, MD · B.A. Linguistics, BYU · Founder, Language Threshold
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              How Contractor Spanish works
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pick your trade', body: 'Choose from framer, foreman, plumber, electrician, drywall, safety, truck driver, landscaper, or mechanic. Each trade has 30 scenario-based lessons built from its actual vocabulary.' },
              { step: '02', title: 'Practice with AI', body: 'Your AI partner plays the role of a bilingual crew member, supervisor, or inspector. Every session is a real scenario — not a vocabulary list.' },
              { step: '03', title: 'Use it Monday', body: 'Weeks of daily practice, not years of classroom study. Language Threshold is built for working professionals who need results before the next shift.' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(255,122,74,0.3)' }}>
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

      {/* SEO content — trade-specific phrases */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#C9A84C' }}>
                Spanish for contractors — quick reference
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                The phrases that matter most on a jobsite
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'Watch your step — wet concrete.', es: 'Cuidado al pisar — concreto fresco.' },
                { en: 'Get your hard hat before you go up.', es: 'Ponte el casco antes de subir.' },
                { en: 'The inspector passes at two o\'clock.', es: 'El inspector pasa a las dos.' },
                { en: 'Measure twice, cut once.', es: 'Mide dos veces, corta una.' },
                { en: 'Is that wall plumb?', es: '¿Está esa pared a plomo?' },
                { en: 'We\'re behind. We need to push today.', es: 'Estamos atrasados. Hay que empujarle hoy.' },
                { en: 'Where is the shutoff valve?', es: '¿Dónde está la llave de paso?' },
                { en: 'The circuit is live — don\'t touch it.', es: 'El circuito tiene corriente — no lo toques.' },
                { en: 'That load is overweight for the dock.', es: 'Esa carga pesa demasiado para el muelle.' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(201,168,76,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>{phrase.es}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ ...sansFont, color: '#A89F94' }}>
                These are starter phrases. The app teaches hundreds more, in context, with AI feedback.
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
            <EmailSignupBanner accentColor="#FF7A4A" specialty="construction" />
          </div>
        </section>
      </FadeIn>

      {/* Rotating vocabulary reader */}
      <FadeIn>
        <section className="py-16" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <VocabReader modules={CONSTRUCTION_MODULES} accentColor="#FF7A4A" specialty="construction" />
          </div>
        </section>
      </FadeIn>

      {/* PDF Study Guides */}
      <FadeIn>
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <PDFGuideSection
              specialty="construction"
              accentColor="#FF7A4A"
              modules={CONSTRUCTION_MODULES.map(m => ({ id: m.id, emoji: m.emoji, title: m.title, tagline: m.tagline, color: m.color }))}
            />
          </div>
        </section>
      </FadeIn>

      {/* Book recommendation */}
      <FadeIn>
        <section className="py-12" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <BookRecommendation specialty="construction" />
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
                href="https://medicalspanish.app"
                className="group block p-6 rounded-2xl transition-all hover:border-opacity-40"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🩺</div>
                <div className="text-lg font-bold mb-1 group-hover:text-white transition-colors" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Medical Spanish
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Spanish for nurses, surgeons, ER staff, and medical receptionists.
                </p>
              </a>
              <a
                href="/contractor-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇧🇷</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Contractor Portuguese
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  The same nine trade modules — for Brazilian Portuguese-speaking crews.
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
              <path d="M50 600V260C50 130 130 50 300 50C470 50 550 130 550 260V600" stroke="#FF7A4A" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: '#FF7A4A' }}>
              The jobsite is waiting
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Your crew speaks Spanish.<br />
              <em style={{ color: '#FF7A4A' }}>Now you can too.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              Don't wait until you're standing on a jobsite wishing you'd learned the language.
              Start with your trade. Build from there.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: '#FF7A4A', color: '#0D0D0D' }}
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
