import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'

function AboutHero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
      <svg
        className="absolute right-0 top-0 pointer-events-none select-none opacity-20"
        width="500" height="600" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      >
        <path d="M100 600V260C100 116.406 191.634 20 300 20C408.366 20 500 116.406 500 260V600" stroke="#C9A84C" strokeWidth="1" />
        <path d="M160 600V275C160 143.9 222.386 52 300 52C377.614 52 440 143.9 440 275V600" stroke="#C9A84C" strokeWidth="0.5" />
        <line x1="300" y1="260" x2="300" y2="600" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="3 5" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-6" style={{ ...sansFont, color: '#C9A84C', letterSpacing: '0.15em' }}>
          About Language Threshold
        </p>
        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ ...displayFont, color: '#F7F3EC' }}>
          The Threshold Principle
        </h1>
        <p className="text-xl leading-relaxed" style={{ ...sansFont, color: '#A89F94', maxWidth: '36rem' }}>
          Every professional has a moment where language stops being academic
          and starts being essential. We build for that moment.
        </p>
      </div>
    </section>
  )
}

function FullStorySection() {
  return (
    <section className="py-20 px-6">
      <FadeIn>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10" style={{ ...displayFont, color: '#F7F3EC' }}>
            Where it started
          </h2>

          <div className="space-y-8">
            <blockquote className="pl-6 py-1" style={{ borderLeft: '2px solid #C9A84C' }}>
              <p className="text-lg leading-relaxed" style={{ ...serifFont, color: '#D9D4CC' }}>
                In college, I lived in the Foreign Language Student Residence — the FLSR.
                The rule was simple: cross the threshold of the door, speak the language of the apartment.
                No English. No exceptions.
              </p>
            </blockquote>

            <blockquote className="pl-6 py-1" style={{ borderLeft: '2px solid #C9A84C' }}>
              <p className="text-lg leading-relaxed" style={{ ...serifFont, color: '#D9D4CC' }}>
                I learned more Spanish in one semester than in years of classroom study.
                Because the threshold made it real. The language had stakes. When you cross that
                door, stumbling through a sentence isn't embarrassing — it's the point.
                You're there to be bad at it until you're good at it.
              </p>
            </blockquote>

            <p className="text-lg leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              The insight stuck. Language learning isn't really about memorizing vocabulary lists
              or conjugation tables. It's about having a reason to use the words — a threshold
              you have to cross, where the language suddenly means something.
            </p>

            <p className="text-lg leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              Years later, watching nurses and construction foremen and missionaries struggle to
              communicate with the people they serve, I kept thinking: they need a threshold.
              Not a classroom. A doorway with stakes.
            </p>

            <p className="text-lg leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              Language Threshold is that doorway — role-specific, AI-powered, and built for
              the professional who doesn't have years to study but needs to communicate
              before Monday.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

function MissionSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#161616' }}>
      <FadeIn>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ ...sansFont, color: '#C9A84C', letterSpacing: '0.15em' }}>
            Mission
          </p>

          <h2 className="text-4xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
            Language that works when it matters.
          </h2>

          <p className="text-lg leading-relaxed mb-6" style={{ ...serifFont, color: '#D9D4CC' }}>
            Our mission is simple: put the right language in the hands of the right professional
            before they need it. Not after the first shift where they couldn't communicate.
            Not after the jobsite injury where nobody understood the safety briefing.
            Before.
          </p>

          <p className="text-lg leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
            We do this with AI that understands your role, your context, and the specific
            vocabulary that governs life in your field. Generic language apps teach you
            how to order coffee. We teach you how to take a patient history, run a
            safety huddle, or introduce yourself to a village elder.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}

function AreasWeServeSection() {
  const areas = [
    { emoji: '🏥', title: 'Medical Spanish', link: 'https://medicalspanish.app', linkLabel: 'medicalspanish.app' },
    { emoji: '🔨', title: 'Construction Spanish', link: 'https://constructionspanish.app', linkLabel: 'constructionspanish.app' },
    { emoji: '🧭', title: 'Faith & Missions', link: APP_URL, linkLabel: 'Start Learning' },
    { emoji: '⚽', title: 'Sports Coaching', link: APP_URL, linkLabel: 'Start Learning' },
    { emoji: '🌾', title: 'Agriculture', link: APP_URL, linkLabel: 'Start Learning' },
    { emoji: '🍽️', title: 'Hospitality & Service', link: APP_URL, linkLabel: 'Start Learning' },
    { emoji: '⚖️', title: 'Legal & Immigration', link: APP_URL, linkLabel: 'Start Learning' },
    { emoji: '🎓', title: 'K–12 Education', link: APP_URL, linkLabel: 'Start Learning' },
    { emoji: '🗣️', title: 'English for Work', link: APP_URL, linkLabel: 'Start Learning' },
  ]

  return (
    <section className="py-20 px-6">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ ...sansFont, color: '#C9A84C', letterSpacing: '0.15em' }}>
            The Fields We Cover
          </p>

          <h2 className="text-4xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
            Built around real thresholds.
          </h2>
          <p className="text-base mb-12" style={{ ...sansFont, color: '#A89F94' }}>
            Nine professional domains. Each one built from the ground up with domain-specific vocabulary,
            real-world phrases, and AI that adapts to your role.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((area) => (
              <a
                key={area.title}
                href={area.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl p-4 transition-all no-underline"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(201,168,76,0.12)' }}
                onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'rgba(201,168,76,0.35)' }}
                onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'rgba(201,168,76,0.12)' }}
                onFocus={(e) => { (e.currentTarget).style.borderColor = 'rgba(201,168,76,0.5)' }}
                onBlur={(e) => { (e.currentTarget).style.borderColor = 'rgba(201,168,76,0.12)' }}
              >
                <span className="text-2xl">{area.emoji}</span>
                <div>
                  <div className="text-sm font-semibold" style={{ ...serifFont, color: '#F7F3EC' }}>{area.title}</div>
                  <div className="text-xs mt-0.5 transition-colors" style={{ ...sansFont, color: '#C9A84C' }}>
                    {area.linkLabel} →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

function AboutCTA() {
  return (
    <section
      className="py-24 px-6 text-center"
      style={{ backgroundColor: '#161616', borderTop: '1px solid rgba(201,168,76,0.1)' }}
    >
      <FadeIn>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
            Ready to cross your threshold?
          </h2>

          <p className="text-lg mb-10" style={{ ...sansFont, color: '#A89F94' }}>
            The language you need for the field you're in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
              style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
            >
              Start Learning →
            </a>
            <Link
              to="/"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-80"
              style={{ ...sansFont, border: '1px solid rgba(201,168,76,0.4)', color: '#F7F3EC', backgroundColor: 'transparent' }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default function About() {
  return (
    <>
      <title>About Language Threshold — The Threshold Principle</title>
      <meta name="description" content="The story behind Language Threshold — role-specific AI Spanish training built for the moment language stops being academic and starts being essential." />
      <link rel="canonical" href="https://languagethreshold.com/about" />
      <AboutHero />
      <FullStorySection />
      <MissionSection />
      <AreasWeServeSection />
      <AboutCTA />
    </>
  )
}
