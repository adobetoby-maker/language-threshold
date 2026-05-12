import FadeIn from '../components/FadeIn'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'

// ─── Hero decorative arch ─────────────────────────────────────────────────────
function HeroArch() {
  return (
    <svg
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      width="600"
      height="700"
      viewBox="0 0 600 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M60 700V300C60 134.315 166.863 0 300 0C433.137 0 540 134.315 540 300V700" stroke="#C9A84C" strokeWidth="1" opacity="0.06" />
      <path d="M100 700V310C100 155.228 190.294 30 300 30C409.706 30 500 155.228 500 310V700" stroke="#C9A84C" strokeWidth="0.5" opacity="0.04" />
      <line x1="300" y1="300" x2="300" y2="700" stroke="#C9A84C" strokeWidth="0.75" opacity="0.05" strokeDasharray="4 6" />
    </svg>
  )
}

// ─── Section 1: Hero ──────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ paddingTop: '80px' }}
    >
      <HeroArch />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-6" style={{ ...sansFont, color: '#C9A84C', letterSpacing: '0.15em' }}>
          For professionals in the field
        </p>

        <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
          Cross the threshold.
          <br />
          <em className="italic" style={{ color: '#C9A84C' }}>Speak the language.</em>
        </h1>

        <p className="text-xl mx-auto mb-10 leading-relaxed" style={{ ...sansFont, color: '#A89F94', maxWidth: '40rem' }}>
          AI-powered Spanish training for nurses, construction crews, coaches, missionaries,
          and ranch workers — plus English training for Spanish-speaking professionals
          entering the US workforce.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
            style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
          >
            Start Learning →
          </a>
          <a
            href="#areas"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-80"
            style={{ ...sansFont, border: '1px solid rgba(201,168,76,0.4)', color: '#F7F3EC', backgroundColor: 'transparent' }}
          >
            See All Areas
          </a>
        </div>

        {/* Founder credit */}
        <div className="mb-10 inline-flex items-center gap-3 px-5 py-3 rounded-full" style={{ backgroundColor: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.18)' }}>
          <div className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold" style={{ ...sansFont, backgroundColor: 'rgba(201,168,76,0.15)', color: '#C9A84C' }}>
            TA
          </div>
          <p className="text-sm" style={{ ...sansFont }}>
            <a
              href="https://tobyandertonmd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#C9A84C' }}
            >
              Toby Anderton, MD
            </a>
            <span style={{ color: 'rgba(168,159,148,0.5)' }}> · B.A. Linguistics · Missionary in Japan · </span>
            <a
              href="/founder"
              className="transition-opacity hover:opacity-80 underline underline-offset-2"
              style={{ color: 'rgba(201,168,76,0.7)' }}
            >
              Read the story →
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { icon: '🏥', label: 'Medical' },
            { icon: '🔨', label: 'Construction' },
            { icon: '⚽', label: 'Sports' },
            { icon: '🌾', label: 'Agriculture' },
            { icon: '✝️', label: 'Missions' },
            { icon: '🗣️', label: 'English for Work' },
          ].map(({ icon, label }) => (
            <span
              key={label}
              className="px-4 py-2 rounded-full text-sm"
              style={{ ...sansFont, backgroundColor: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: '#A89F94' }}
            >
              {icon} {label}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ ...sansFont, color: 'rgba(168,159,148,0.4)' }}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
          <path d="M8 0v20M1 13l7 7 7-7" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}

// ─── Section 2: The Story ─────────────────────────────────────────────────────
function StorySection() {
  return (
    <section id="story" className="py-28 px-6">
      <FadeIn>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] mb-5" style={{ ...sansFont, color: '#C9A84C' }}>
            Where the name comes from
          </p>
          <h2 className="text-4xl font-bold mb-12 leading-snug" style={{ ...displayFont, color: '#F7F3EC' }}>
            The threshold is where language becomes real.
          </h2>

          <div className="space-y-7">
            <blockquote className="pl-6 py-1" style={{ borderLeft: '2px solid #C9A84C' }}>
              <p className="text-xl leading-relaxed" style={{ ...serifFont, color: '#E8E0D4' }}>
                "In college I lived in the Foreign Language Student Residence at BYU.
                The rule was simple: cross the threshold of the apartment door,
                speak the language of the floor. No English. No exceptions."
              </p>
            </blockquote>

            <p className="text-base leading-relaxed" style={{ ...sansFont, color: '#A89F94', lineHeight: 1.85 }}>
              After two years in Japan on a language mission, I moved into the Japanese apartment
              — then got the bug for another language and crossed into the Spanish apartment for a year.
              We cooked together four nights a week. Went to church in Spanish. I had to teach
              Sunday school lessons with three weeks of vocabulary under my belt.
            </p>

            <p className="text-base leading-relaxed" style={{ ...sansFont, color: '#A89F94', lineHeight: 1.85 }}>
              Within weeks — not months — Spanish arrived. Not because I was gifted. Because
              the words I was learning had a home. Kitchen vocabulary existed to cook.
              Church vocabulary existed because I had to teach. The language wasn't studied.
              It was <em style={{ color: '#D9D4CC' }}>needed.</em>
            </p>

            <blockquote className="pl-6 py-1" style={{ borderLeft: '2px solid #C9A84C' }}>
              <p className="text-lg leading-relaxed" style={{ ...serifFont, color: '#D9D4CC' }}>
                Standing in that apartment, I started dreaming of a way to give this to someone
                who couldn't move into the FLSR — a nurse, a foreman, a missionary going to
                El Salvador. What if the threshold could go with you?
              </p>
            </blockquote>

            <p className="text-base pt-2" style={{ ...sansFont, color: '#6A6258' }}>
              The founder is an orthopedic surgeon, linguist, and returned missionary.{' '}
              <a href="/founder" style={{ color: '#C9A84C' }} className="underline underline-offset-2 hover:opacity-80 transition-opacity">
                Read the full story →
              </a>
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Section 3: Areas of Interest ────────────────────────────────────────────

interface AreaSnapshot {
  emoji: string
  title: string
  tagline: string
  vocab: string[]
  phrase: string
  link: string
  linkLabel: string
  featured?: boolean
  accentColor?: string
  reversed?: boolean
}

const AREAS: AreaSnapshot[] = [
  {
    emoji: '🏥',
    title: 'Medical Spanish',
    tagline: 'The language of patient care — built for the bedside.',
    vocab: ['dolor', 'alergia', 'presión arterial', 'signos vitales'],
    phrase: '¿Tiene alguna alergia a medicamentos?',
    link: 'https://medicalspanish.app',
    linkLabel: 'medicalspanish.app',
    featured: true,
    accentColor: '#4A9EFF',
  },
  {
    emoji: '🔨',
    title: 'Construction Spanish',
    tagline: 'Jobsite Spanish for foremen who need their crew to hear them.',
    vocab: ['andamio', 'plomería', 'encofrado', 'seguridad'],
    phrase: 'Necesito que revisen la tubería antes de tapar.',
    link: 'https://constructionspanish.app',
    linkLabel: 'constructionspanish.app',
    featured: true,
    accentColor: '#FF7A4A',
  },
  {
    emoji: '🧭',
    title: 'Faith & Missions',
    tagline: 'Language for the field before you cross the border.',
    vocab: ['oración', 'comunidad', 'servicio', 'testimonio'],
    phrase: 'Estamos aquí para servir a su comunidad.',
    link: APP_URL,
    linkLabel: 'Start Learning',
    accentColor: '#A78BFA',
  },
  {
    emoji: '⚽',
    title: 'Sports Coaching',
    tagline: 'Coach your team in their language. On and off the field.',
    vocab: ['portero', 'fuera de juego', 'jonrón', 'tiempo muerto'],
    phrase: '¡Mantén la posición y cubre el flanco izquierdo!',
    link: APP_URL,
    linkLabel: 'Start Learning',
    accentColor: '#34D399',
  },
  {
    emoji: '🌾',
    title: 'Agriculture',
    tagline: 'Ranch, dairy, and field operations — every season.',
    vocab: ['ordeño', 'cosecha', 'cerca', 'temporada'],
    phrase: '¿Cuándo llega el equipo para el ordeño de madrugada?',
    link: APP_URL,
    linkLabel: 'Start Learning',
    accentColor: '#FBBF24',
  },
  {
    emoji: '🍽️',
    title: 'Hospitality & Service',
    tagline: 'Front-of-house to back-of-house and every shift in between.',
    vocab: ['reservación', 'turno', 'pedido', 'propina'],
    phrase: 'La reservación está a nombre de García, para cuatro.',
    link: APP_URL,
    linkLabel: 'Start Learning',
    accentColor: '#F472B6',
  },
  {
    emoji: '⚖️',
    title: 'Legal & Immigration',
    tagline: 'Rights, paperwork, and process — explained clearly.',
    vocab: ['formulario', 'audiencia', 'permiso', 'abogado'],
    phrase: 'Tiene derecho a un intérprete en la corte.',
    link: APP_URL,
    linkLabel: 'Start Learning',
    accentColor: '#60A5FA',
  },
  {
    emoji: '🎓',
    title: 'K–12 Education',
    tagline: 'Communicate with students and families in every language.',
    vocab: ['tarea', 'calificación', 'reunión', 'comportamiento'],
    phrase: 'Su hijo está haciendo un gran progreso este semestre.',
    link: APP_URL,
    linkLabel: 'Start Learning',
    accentColor: '#2DD4BF',
  },
  {
    emoji: '🗣️',
    title: 'English for Work',
    tagline: 'For Spanish-speaking professionals succeeding in US workplaces.',
    vocab: ['shift', 'overtime', 'hazard', 'supervisor'],
    phrase: 'I need to report a workplace incident to my supervisor.',
    link: APP_URL,
    linkLabel: 'Start Learning',
    reversed: true,
    accentColor: '#818CF8',
  },
]

function AreaCard({ area }: { area: AreaSnapshot }) {
  const accent = area.accentColor ?? '#C9A84C'
  const isFeatured = area.featured

  return (
    <a
      href={area.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 no-underline"
      style={{
        backgroundColor: '#161616',
        border: `1px solid ${isFeatured ? accent + '44' : 'rgba(201,168,76,0.15)'}`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = accent + '66'
        el.style.boxShadow = `0 4px 24px ${accent}18`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = isFeatured ? accent + '44' : 'rgba(201,168,76,0.15)'
        el.style.boxShadow = 'none'
      }}
      onFocus={(e) => {
        const el = e.currentTarget
        el.style.borderColor = accent + '88'
        el.style.boxShadow = `0 0 0 2px ${accent}44`
      }}
      onBlur={(e) => {
        const el = e.currentTarget
        el.style.borderColor = isFeatured ? accent + '44' : 'rgba(201,168,76,0.15)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <span className="text-3xl leading-none">{area.emoji}</span>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-bold leading-snug" style={{ ...serifFont, color: '#F7F3EC' }}>
              {area.title}
            </h3>
            {isFeatured && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ ...sansFont, backgroundColor: accent + '18', border: `1px solid ${accent}44`, color: accent }}
              >
                Dedicated site
              </span>
            )}
            {area.reversed && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ ...sansFont, backgroundColor: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.3)', color: '#818CF8' }}
              >
                For Spanish speakers
              </span>
            )}
          </div>
          <p className="text-xs mt-1 leading-snug" style={{ ...sansFont, color: '#8A8278' }}>
            {area.tagline}
          </p>
        </div>
      </div>

      {/* Vocab chips */}
      <div className="flex flex-wrap gap-1.5">
        {area.vocab.map((word) => (
          <span
            key={word}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{ ...sansFont, backgroundColor: accent + '10', border: `1px solid ${accent}25`, color: accent }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Sample phrase */}
      <p
        className="text-sm leading-relaxed italic border-l pl-3"
        style={{ ...serifFont, color: '#A89F94', borderColor: accent + '30' }}
      >
        "{area.phrase}"
      </p>

      {/* CTA */}
      <div
        className="mt-auto text-sm font-semibold flex items-center gap-1 transition-opacity group-hover:opacity-80"
        style={{ ...sansFont, color: isFeatured ? accent : '#C9A84C' }}
      >
        {area.linkLabel}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  )
}

function AreasSection() {
  const featured = AREAS.filter((a) => a.featured)
  const rest = AREAS.filter((a) => !a.featured)

  return (
    <section id="areas" className="py-28 px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ ...sansFont, color: '#C9A84C', letterSpacing: '0.15em' }}>
              Areas of Interest
            </p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ ...displayFont, color: '#F7F3EC' }}>
              Every field has its language.
              <br />
              <em className="italic text-3xl md:text-4xl" style={{ color: '#A89F94' }}>We're building them all.</em>
            </h2>
            <p className="text-base mt-6 mx-auto max-w-xl" style={{ ...sansFont, color: '#8A8278' }}>
              From the ICU to the ranch to the soccer sideline — professional Spanish vocabulary and
              real conversation practice, tuned for your role.
            </p>
          </div>

          {/* Featured pair */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {featured.map((area) => (
              <AreaCard key={area.title} area={area} />
            ))}
          </div>

          {/* All other areas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((area) => (
              <AreaCard key={area.title} area={area} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
              style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
            >
              Explore All Modules →
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Section 4: How It Works ──────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose your role',
      description: 'Select the professional context that matches your field — medical, construction, sports, agriculture, and more.',
    },
    {
      number: '02',
      title: 'Learn what matters',
      description: 'The AI drills you on vocabulary and phrases specific to your domain — then adapts to the gaps it finds in your responses.',
    },
    {
      number: '03',
      title: 'Cross the threshold',
      description: 'Step into the field ready. The language you need, when you need it.',
    },
  ]

  return (
    <section id="how-it-works" className="py-28 px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ ...sansFont, color: '#C9A84C', letterSpacing: '0.15em' }}>
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ ...displayFont, color: '#F7F3EC' }}>
              Three steps to the threshold.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 relative">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-start px-8 py-6">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px" style={{ backgroundColor: 'rgba(201,168,76,0.15)' }} />
                )}
                <div className="text-8xl font-black leading-none mb-6 select-none" style={{ ...displayFont, color: 'rgba(201,168,76,0.12)' }}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ ...serifFont, color: '#F7F3EC' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Section 5: Differentiators ───────────────────────────────────────────────
function DifferentiatorsSection() {
  const comparisons = [
    { positive: 'Role-Specific', negative: 'Generic vocabulary', description: "Every lesson is built around your profession's real terminology." },
    { positive: 'Field-Ready', negative: 'Classroom theory', description: 'Phrases that work in an ER, on a jobsite, or across a border.' },
    { positive: 'AI-Adaptive', negative: 'One-size-fits-all', description: "The AI learns your gaps and fills them — not someone else's." },
    { positive: 'Weeks, Not Years', negative: 'Years of study', description: 'Functional domain fluency built for a professional timeline.' },
  ]

  return (
    <section className="py-28 px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ ...displayFont, color: '#F7F3EC' }}>
              Why Language Threshold?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comparisons.map((item) => (
              <div key={item.positive} className="rounded-2xl p-6" style={{ backgroundColor: '#161616', border: '1px solid rgba(201,168,76,0.15)' }}>
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)' }}
                  >
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                      <path d="M1 5l3.5 3.5L11 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-bold" style={{ ...serifFont, color: '#F7F3EC' }}>{item.positive}</span>
                    <span className="text-sm ml-2" style={{ ...sansFont, color: '#A89F94' }}>vs {item.negative}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed pl-10" style={{ ...sansFont, color: '#A89F94' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Section 6: Final CTA ─────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none select-none" width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M100 500V220C100 98.497 239.543 0 400 0C560.457 0 700 98.497 700 220V500" stroke="#C9A84C" strokeWidth="1" opacity="0.08" />
        <path d="M200 500V240C200 136.406 291.634 53 400 53C508.366 53 600 136.406 600 240V500" stroke="#C9A84C" strokeWidth="0.5" opacity="0.05" />
      </svg>

      <FadeIn>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ ...sansFont, color: '#C9A84C', letterSpacing: '0.15em' }}>
            The field is waiting
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ ...displayFont, color: '#F7F3EC' }}>
            Your field is waiting.
            <br />
            <em className="italic" style={{ color: '#C9A84C' }}>Your language should be ready.</em>
          </h2>

          <p className="text-lg mb-10" style={{ ...sansFont, color: '#A89F94' }}>
            Don't wait until you're standing in front of a patient, a crew, or a community
            to wish you'd learned the language. Start now.
          </p>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
            style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
          >
            Start Learning Now →
          </a>
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <title>Language Threshold — AI Spanish Training for Professionals in the Field</title>
      <meta name="description" content="Cross the threshold. Learn the Spanish of your profession before you need it. Role-specific AI training for nurses, construction crews, missionaries, and more." />
      <HeroSection />
      <StorySection />
      <AreasSection />
      <HowItWorksSection />
      <DifferentiatorsSection />
      <FinalCTASection />
    </>
  )
}
