import { APP_URL, displayFont, sansFont, serifFont } from '../constants'
import FadeIn from '../components/FadeIn'

const TEAL = '#00D4B8'
const TEAL_DIM = 'rgba(0,212,184,0.12)'
const TEAL_BORDER = 'rgba(0,212,184,0.2)'

const ROLES = [
  {
    emoji: '🇯🇵',
    title: 'Japanese Learners',
    desc: 'JLPT N5–N1 progression, kanji, kana, and grammar AI tutor for real conversational fluency.',
  },
  {
    emoji: '🇰🇷',
    title: 'Korean Learners',
    desc: 'Hangul mastery, TOPIK vocabulary, and K-drama comprehension — script to speech.',
  },
  {
    emoji: '🏥',
    title: 'Healthcare Workers',
    desc: 'Medical Spanish built into the app. Role-specific vocab for nurses, doctors, and EMTs.',
  },
  {
    emoji: '🔨',
    title: 'Trades Workers',
    desc: 'Construction Spanish for foremen and crews — site safety, instructions, materials.',
  },
  {
    emoji: '🌍',
    title: 'Heritage Speakers',
    desc: 'Reconnect with family languages. Grammar, literacy, and confident speaking in your ancestral tongue.',
  },
  {
    emoji: '✈️',
    title: 'Travelers & Expats',
    desc: 'Fast-track to functional fluency before your move or trip — conversation-first, grammar second.',
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Pick your language and goal',
    body: 'Japanese, Korean, Spanish, and more — with role-specific tracks for healthcare, construction, and JLPT/TOPIK exam prep. The app adapts to what you actually need.',
  },
  {
    n: '02',
    title: 'Practice with an AI tutor',
    body: 'Flashcards, parallel reading, kana pad, grammar exercises, speaking practice. An AI conversation partner corrects your grammar and gives instant feedback — no embarrassment.',
  },
  {
    n: '03',
    title: 'Reach the threshold',
    body: 'The threshold is the moment your second language stops feeling like a performance and starts feeling like thinking. We build toward that — daily, in 10-minute sessions.',
  },
]

const FEATURES = [
  { icon: '📖', label: 'Parallel Reader', desc: 'Read native content with instant word lookups and furigana/romaja toggle.' },
  { icon: '✍️', label: 'Kana Pad', desc: 'Romaji → hiragana → katakana → kanji converter, AI-powered kanji breakdown.' },
  { icon: '🎙️', label: 'Speak Mode', desc: 'AI conversation partner listens, corrects pronunciation, and keeps you talking.' },
  { icon: '🃏', label: 'Flashcards', desc: 'CEFR and JLPT-leveled cards with spaced repetition and XP progression.' },
  { icon: '🏆', label: 'Leaderboard', desc: 'Streak tracking, XP tiers from Beginner to Maestro, live global rankings.' },
  { icon: '🤝', label: 'Match Mode', desc: 'Real-time vocabulary matching against other learners — Bronze to Champion.' },
]

export default function LanguageLens() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: '#0A1628', paddingTop: 100, paddingBottom: 80 }}
      >
        {/* Anatomical SVG background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg
            className="absolute w-full h-full"
            style={{ opacity: 0.045 }}
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="160" cy="160" r="130" fill="none" stroke={TEAL} strokeWidth="1" />
            <circle cx="160" cy="160" r="86" fill="none" stroke={TEAL} strokeWidth="0.5" />
            <circle cx="160" cy="160" r="42" fill="none" stroke={TEAL} strokeWidth="0.5" />
            <circle cx="1040" cy="640" r="148" fill="none" stroke={TEAL} strokeWidth="1" />
            <circle cx="1040" cy="640" r="92" fill="none" stroke={TEAL} strokeWidth="0.5" />
            <circle cx="1040" cy="640" r="48" fill="none" stroke={TEAL} strokeWidth="0.5" />
            <circle cx="960" cy="130" r="84" fill="none" stroke={TEAL} strokeWidth="0.75" />
            <circle cx="960" cy="130" r="48" fill="none" stroke={TEAL} strokeWidth="0.5" />
            <circle cx="260" cy="690" r="108" fill="none" stroke={TEAL} strokeWidth="0.75" />
            <circle cx="260" cy="690" r="64" fill="none" stroke={TEAL} strokeWidth="0.5" />
            {/* Cross-hairs */}
            <line x1="160" y1="90" x2="160" y2="230" stroke={TEAL} strokeWidth="0.5" />
            <line x1="90" y1="160" x2="230" y2="160" stroke={TEAL} strokeWidth="0.5" />
            <line x1="1040" y1="560" x2="1040" y2="720" stroke={TEAL} strokeWidth="0.5" />
            <line x1="960" y1="640" x2="1120" y2="640" stroke={TEAL} strokeWidth="0.5" />
            {/* Dashed grid */}
            <line x1="0" y1="200" x2="1200" y2="200" stroke={TEAL} strokeWidth="0.3" strokeDasharray="4 8" />
            <line x1="0" y1="600" x2="1200" y2="600" stroke={TEAL} strokeWidth="0.3" strokeDasharray="4 8" />
            <line x1="320" y1="0" x2="320" y2="800" stroke={TEAL} strokeWidth="0.3" strokeDasharray="4 8" />
            <line x1="880" y1="0" x2="880" y2="800" stroke={TEAL} strokeWidth="0.3" strokeDasharray="4 8" />
            <circle cx="600" cy="400" r="3" fill={TEAL} />
            <circle cx="600" cy="120" r="2" fill={TEAL} />
            <circle cx="600" cy="680" r="2" fill={TEAL} />
            <circle cx="120" cy="400" r="2" fill={TEAL} />
            <circle cx="1080" cy="400" r="2" fill={TEAL} />
          </svg>
        </div>

        {/* ECG waveform */}
        <div className="absolute bottom-24 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg
            className="w-full heartbeat"
            viewBox="0 0 1200 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,40 100,40 150,40 170,15 190,65 210,10 230,70 250,40 300,40 350,40 400,40 450,40 470,15 490,65 510,10 530,70 550,40 600,40 650,40 700,40 720,15 740,65 760,10 780,70 800,40 850,40 900,40 950,40 970,15 990,65 1010,10 1030,70 1050,40 1100,40 1200,40"
              fill="none"
              stroke={TEAL}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.35"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
            style={{ backgroundColor: TEAL_DIM, border: `1px solid ${TEAL_BORDER}` }}
          >
            <span className="text-sm font-medium" style={{ ...sansFont, color: TEAL }}>
              Language Learning — Language Threshold
            </span>
          </div>

          <h1
            className="leading-[1.06] mb-6"
            style={{ ...displayFont, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#F7F3EC' }}
          >
            The second language<br />
            <em style={{ color: TEAL }}>you actually use.</em>
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed mb-4"
            style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
          >
            AI-powered language training for Japanese, Korean, Medical Spanish, and more — built around
            the vocabulary and scenarios your specific role or goal actually requires.
          </p>

          <p
            className="max-w-xl mx-auto text-base leading-relaxed mb-10 italic"
            style={{ ...serifFont, color: '#A89F94' }}
          >
            "Most language apps teach you to order coffee. Language Threshold teaches you to
            actually think in your second language." — Toby Anderton, MD · Linguist
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
              style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
            >
              Start Learning — It's Free →
            </a>
            <a
              href="#how"
              className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
              style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
            >
              See How It Works ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────── */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: '376+', label: 'CEFR-leveled vocabulary cards across all languages, organized from A1 to C2', note: 'Language Lens library' },
                { stat: '6+', label: 'interactive learning modes — flashcards, reading, speaking, kana, grammar, and match', note: 'Language Lens features' },
                { stat: '10 min', label: 'daily sessions built for real life — designed around busy schedules, not study blocks', note: 'Language Threshold method' },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: TEAL }}>
                    {item.stat}
                  </div>
                  <p className="text-sm leading-relaxed mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{item.label}</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Who it's for ─────────────────────── */}
      <section className="py-24" style={{ backgroundColor: '#0A1628' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ ...sansFont, color: TEAL }}>Who It's For</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ ...displayFont, color: '#F7F3EC' }}>
              Built for every kind of learner
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {ROLES.map(role => (
              <FadeIn key={role.title}>
                <div
                  className="rounded-xl p-5 h-full transition-colors duration-200"
                  style={{
                    backgroundColor: '#0D0D1A',
                    border: `1px solid ${TEAL_BORDER}`,
                  }}
                >
                  <div className="text-3xl mb-3">{role.emoji}</div>
                  <h3 className="font-semibold text-base mb-2" style={{ ...sansFont, color: '#F7F3EC' }}>{role.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>{role.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────── */}
      <section id="how" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ ...sansFont, color: TEAL }}>Process</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ ...displayFont, color: '#F7F3EC' }}>How Language Lens works</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map(step => (
              <FadeIn key={step.n}>
                <div
                  className="rounded-xl p-6 h-full transition-colors duration-200"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="font-bold text-3xl mb-4 leading-none" style={{ ...displayFont, color: `${TEAL}60` }}>{step.n}</div>
                  <h3 className="font-semibold text-lg mb-3" style={{ ...sansFont, color: '#F7F3EC' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────── */}
      <FadeIn>
        <section className="py-24" style={{ backgroundColor: '#0A1628' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ ...sansFont, color: TEAL }}>Everything in the app</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
                Six modes.<br />
                <em style={{ color: TEAL }}>One goal: fluency.</em>
              </h2>
              <p className="max-w-xl text-base leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>
                Language Lens combines every proven acquisition technique — reading, listening, speaking,
                writing, and retrieval practice — in one app, personalized to your level and language.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map(f => (
                <div
                  key={f.label}
                  className="p-5 rounded-xl"
                  style={{ backgroundColor: '#0D0D1A', border: `1px solid ${TEAL_BORDER}` }}
                >
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold text-base mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{f.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Cross-links ───────────────────────── */}
      <FadeIn>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Also on Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href="/medical-spanish"
                className="block p-6 rounded-2xl transition-all no-underline"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.15)' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Medical Spanish</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Thirteen specialty modules — ER, nursing, orthopedics, OB/GYN, and more.
                </p>
              </a>
              <a
                href="/medical-swahili"
                className="block p-6 rounded-2xl transition-all no-underline"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,191,165,0.15)' }}
              >
                <div className="text-2xl mb-2">🩺</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Medical Swahili</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Kiswahili for East African clinical settings — ER, nursing, OB/GYN, and surgery.
                </p>
              </a>
              <a
                href="/contractor-spanish"
                className="block p-6 rounded-2xl transition-all no-underline"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(255,122,74,0.15)' }}
              >
                <div className="text-2xl mb-2">🔨</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Contractor Spanish</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Spanish for framers, plumbers, electricians, drywall crews, and foremen.
                </p>
              </a>
              <a
                href="/contractor-swahili"
                className="block p-6 rounded-2xl transition-all no-underline"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,191,165,0.12)' }}
              >
                <div className="text-2xl mb-2">🏗️</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Contractor Swahili</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Kiswahili for construction sites — framing, plumbing, electrical, safety, and foreman.
                </p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Final CTA ─────────────────────────── */}
      <FadeIn>
        <section
          className="py-28 text-center relative overflow-hidden"
          style={{ background: '#0A1628' }}
        >
          {/* Anatomical mark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none" style={{ opacity: 0.04 }}>
              <circle cx="300" cy="300" r="240" stroke={TEAL} strokeWidth="1" />
              <circle cx="300" cy="300" r="160" stroke={TEAL} strokeWidth="0.5" />
              <circle cx="300" cy="300" r="80" stroke={TEAL} strokeWidth="0.5" />
              <line x1="300" y1="60" x2="300" y2="540" stroke={TEAL} strokeWidth="0.5" />
              <line x1="60" y1="300" x2="540" y2="300" stroke={TEAL} strokeWidth="0.5" />
            </svg>
          </div>

          <div className="max-w-2xl mx-auto px-6 relative">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ ...sansFont, color: TEAL }}>
              The threshold is waiting
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ ...displayFont, color: '#F7F3EC' }}
            >
              Your second language starts today.<br />
              <em style={{ color: TEAL }}>Not someday.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              Don't wait for the perfect moment. Pick your language, pick your goal, and start building
              the fluency that changes what you can do and who you can reach.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
            >
              Open Language Lens — Free →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              No signup required to explore. Pick your language and start.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
