import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { CONSTRUCTION_MODULES, type ConstructionModule } from '../data/constructionModules'
import FadeIn from '../components/FadeIn'

const CONTRACTOR_APP_URL = `${APP_URL}?module=framer`

function ModuleCard({ mod }: { mod: ConstructionModule }) {
  const [open, setOpen] = useState(false)
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
      {/* Card header */}
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

        {/* Vocab preview — always visible */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span
              key={v.en}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ ...sansFont, backgroundColor: 'rgba(201,168,76,0.08)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.2)' }}
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

      {/* Expanded content */}
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(201,168,76,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>
            Full vocabulary
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {mod.vocab.map(v => (
              <div key={v.en} className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{v.en}</span>
                <span className="text-sm text-right" style={{ ...sansFont, color: '#A89F94' }}>{v.es}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: '#C9A84C' }}>
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
            href={CONTRACTOR_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}
          >
            Practice {mod.title} Spanish →
          </a>
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
                Nine trade modules
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Every trade.<br />
              <em style={{ color: '#C9A84C' }}>Its own language.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Click any trade to see the vocabulary, hear sample phrases, and jump straight into an
              AI-powered practice session. No generic "construction Spanish" — just the words your
              specific role needs on a real jobsite.
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
              { step: '01', title: 'Pick your trade', body: 'Choose from framer, foreman, plumber, electrician, drywall, safety, truck driver, landscaper, or mechanic. Each module is built from the actual vocabulary of that role.' },
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

      {/* Cross-links */}
      <FadeIn>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Also on Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
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
