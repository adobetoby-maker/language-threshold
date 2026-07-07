import { useRef, lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { APP_URL, isBetaFree } from '../constants'

const EarthGlobe = lazy(() => import('../components/EarthGlobe').then(m => ({ default: m.EarthGlobe })))

const GOLD = '#C9A84C'

// ── Category data ────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    emoji: '🏥', name: 'Medical', count: 13,
    color: 'from-emerald-950/90 to-[#02040f]',
    border: 'border-emerald-800/40', hover: 'hover:border-emerald-600/50',
    modules: ['Emergency Medicine', 'Nursing & Patient Care', 'Orthopedics', '+ 10 more'],
    languages: 'Spanish · Swahili · Portuguese · French · German · Italian · Japanese · Korean',
    href: '/module/medical',
  },
  {
    emoji: '🔧', name: 'Construction', count: 9,
    color: 'from-orange-950/90 to-[#02040f]',
    border: 'border-orange-800/40', hover: 'hover:border-orange-600/50',
    modules: ['Framing', 'Electrical', 'Plumbing', '+ 6 more'],
    languages: 'Spanish · Swahili · Portuguese',
    href: '/module/construction',
  },
  {
    emoji: '🙏', name: 'Missionary', count: 2,
    color: 'from-sky-950/90 to-[#02040f]',
    border: 'border-sky-800/40', hover: 'hover:border-sky-600/50',
    modules: ['LDS Missionary', 'Missionary Swahili'],
    languages: 'Spanish · Swahili · Portuguese',
    href: '/module/missionary',
  },
  {
    emoji: '⚽', name: 'Sports', count: 9,
    color: 'from-blue-950/90 to-[#02040f]',
    border: 'border-blue-800/40', hover: 'hover:border-blue-600/50',
    modules: ['Soccer', 'Hockey', 'Baseball', '+ 6 more'],
    languages: 'Spanish · French · German · More',
    href: '/module/sports',
  },
  {
    emoji: '🌾', name: 'Agriculture', count: 3,
    color: 'from-yellow-950/90 to-[#02040f]',
    border: 'border-yellow-800/40', hover: 'hover:border-yellow-600/50',
    modules: ['Dairy Farmer', 'Ranch Cowboy', 'Meatpacking'],
    languages: 'Spanish · Portuguese',
    href: '/module/agriculture',
  },
  {
    emoji: '📚', name: 'Education', count: 2,
    color: 'from-violet-950/90 to-[#02040f]',
    border: 'border-violet-800/40', hover: 'hover:border-violet-600/50',
    modules: ['K-12 Teacher', 'Legal Immigration'],
    languages: 'Spanish · French',
    href: '/module/education',
  },
  {
    emoji: '🍽️', name: 'Hospitality', count: 1,
    color: 'from-rose-950/90 to-[#02040f]',
    border: 'border-rose-800/40', hover: 'hover:border-rose-600/50',
    modules: ['Restaurant & Hospitality'],
    languages: 'Spanish · French · Portuguese',
    href: '/module/hospitality',
  },
  {
    emoji: '🧒', name: 'Kids', count: 3,
    color: 'from-pink-950/90 to-[#02040f]',
    border: 'border-pink-800/40', hover: 'hover:border-pink-600/50',
    modules: ['Junior Linguist — ages 4-12'],
    languages: 'Spanish · French · More',
    href: '/module/kids',
  },
]

const FEATURES = [
  { icon: '📖', label: 'Parallel Reader',  desc: 'Read real professional texts side-by-side with instant word lookup and pronunciation. Medical charts, safety briefings, field reports.' },
  { icon: '🎓', label: 'Grammar Studio',   desc: 'CEFR-structured lessons with morphology tables and pattern drills. Conjugation trainer and sentence builder built in.' },
  { icon: '🎙', label: 'Speak & Learn',    desc: 'Tap the mic. Speak naturally. Get real-time pronunciation and fluency feedback from AI — no waiting for a tutor.' },
  { icon: '🤖', label: 'AI Discussions',   desc: 'Practice with an AI partner who responds in your specialty. ER triage, job-site instructions, missionary discussions.' },
]

const LANGUAGES = [
  { flag: '🇪🇸', name: 'Spanish'    },
  { flag: '🇫🇷', name: 'French'     },
  { flag: '🇩🇪', name: 'German'     },
  { flag: '🇮🇹', name: 'Italian'    },
  { flag: '🇯🇵', name: 'Japanese'   },
  { flag: '🇰🇷', name: 'Korean'     },
  { flag: '🇧🇷', name: 'Português'  },
  { flag: '🇰🇪', name: 'Kiswahili'  },
  { flag: '🇦🇫', name: 'پښتو Pashto' },
]

const STATS = [
  { n: '9',    label: 'Languages',                   icon: '🌐' },
  { n: '26+',  label: 'Modules',                     icon: '📦' },
  { n: '660+', label: 'Pro Lessons',                 icon: '📚' },
  { n: 'MD',   label: 'Surgeon-Built', icon: '🩺' },
]

// ── Language ticker ───────────────────────────────────────────────────────────
function LanguageTicker() {
  const items = [...LANGUAGES, ...LANGUAGES, ...LANGUAGES]
  return (
    <div className="overflow-hidden w-full py-3 border-y border-white/[0.06]">
      <style>{`
        @keyframes lt-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .lt-ticker-inner {
          animation: lt-ticker 28s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="lt-ticker-inner flex gap-10 whitespace-nowrap">
        {items.map((l, i) => (
          <span key={i} className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            <span className="text-base">{l.flag}</span>{l.name}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const heroY       = useTransform(scrollY, [0, 400], [0, -80])
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0])

  return (
    <>
      {/* Fixed globe — lives outside page flow, always visible */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,_#0d1b3e_0%,_#02040f_70%)]" />
        <div className="absolute inset-0 opacity-35"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Suspense fallback={null}>
            <EarthGlobe size={1000} />
          </Suspense>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[900px] h-[900px] rounded-full blur-[140px]"
            style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)' }} />
        </div>
      </div>

      {/* Page content — scrolls over the fixed globe */}
      <div ref={containerRef} className="relative z-10 text-white overflow-x-hidden">

        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 55%, rgba(2,4,15,0.72) 0%, transparent 100%)' }} />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 text-center px-6 max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em]"
              style={{ color: GOLD }}
            >
              Professional Language Learning
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
              aria-label="The language your patients and crew actually speak."
            >
              The language your patients{' '}
              <span className="bg-gradient-to-r from-[#C9A84C] to-amber-300 bg-clip-text text-transparent" aria-hidden="true">
                and crew actually speak.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto"
            >
              Not tourist phrases. Not flashcards. 660+ professional lessons for medical workers
              and tradespeople — with AI speaking feedback built in. 9 languages.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={APP_URL}
                className="group relative overflow-hidden rounded-full px-8 py-4 font-mono text-[12px] uppercase tracking-[0.22em] text-black font-semibold hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-300"
                style={{ backgroundColor: GOLD }}
              >
                <span className="relative z-10">Start Learning Free →</span>
                <span className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#categories"
                className="rounded-full border border-white/20 px-8 py-4 font-mono text-[12px] uppercase tracking-[0.22em] text-white/70 hover:border-white/40 hover:text-white transition-all duration-300"
              >
                Explore 26 Modules ↓
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
              <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Language ticker */}
        <LanguageTicker />

        {/* Features */}
        <section className="relative py-24 px-6 sm:px-10 bg-gradient-to-b from-transparent via-[#02040f]/92 to-transparent">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>How It Works</p>
              <h2 className="font-serif text-4xl font-bold">One app. Every mode you need.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-sm hover:border-white/[0.14] transition-colors"
                >
                  <div className="mb-4 text-3xl">{f.icon}</div>
                  <h3 className="font-mono text-sm uppercase tracking-widest text-white mb-2">{f.label}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Missionary hero callout */}
        <section className="relative py-24 px-6 sm:px-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,_rgba(14,30,60,0.95)_0%,_rgba(2,4,15,0.90)_75%)] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
              className="rounded-3xl border border-sky-500/20 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(14,30,60,0.98) 0%, rgba(2,10,30,0.98) 100%)' }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

              <div className="p-8 sm:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">

                  {/* Left — copy */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-sky-400/80">For LDS Missionaries</span>
                      <span className="rounded-full bg-sky-500/15 border border-sky-500/25 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-sky-300">Always Free</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-white mb-4">
                      The words the MTC<br />
                      <span className="text-sky-300">never taught you.</span>
                    </h2>

                    <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-md">
                      All six missionary discussions — word for word. Door approaches, testimony vocabulary, tracting openers. Built for missionaries headed to Spanish and Swahili missions. Free forever.
                    </p>

                    <ul className="space-y-2 mb-8">
                      {[
                        'All 6 discussions — Restoration through Commandments',
                        'Door approaches and tracting vocabulary',
                        'Testimony language at every fluency level',
                        'Swahili missions fully covered',
                      ].map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                          <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <circle cx="7" cy="7" r="6.5" stroke="rgba(96,165,250,0.4)" />
                            <path d="M4.5 7l2 2 3-3" stroke="#60a5fa" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/module/missionary"
                        className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-90"
                        style={{ background: 'linear-gradient(135deg, #7DD3FC 0%, #60A5FA 100%)' }}
                      >
                        Start Free — No Account Needed
                      </a>
                      <a
                        href="/missionary-portal"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-500/30 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-sky-300 transition-all hover:border-sky-400/50 hover:bg-sky-500/05"
                      >
                        Log In to Save Progress →
                      </a>
                    </div>
                  </div>

                  {/* Right — discussion list */}
                  <div className="w-full lg:w-64 shrink-0">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-400/60 mb-4">The Six Discussions</p>
                    <div className="space-y-2">
                      {[
                        { num: 1, title: 'The Restoration' },
                        { num: 2, title: 'The Plan of Salvation' },
                        { num: 3, title: 'The Gospel of Jesus Christ' },
                        { num: 4, title: 'The Commandments' },
                        { num: 5, title: 'Laws & Ordinances' },
                        { num: 6, title: 'Door Approaches & Tracting' },
                      ].map(d => (
                        <div
                          key={d.num}
                          className="flex items-center gap-3 rounded-xl border border-sky-500/10 bg-sky-900/10 px-4 py-2.5"
                        >
                          <span className="font-mono text-[10px] text-sky-400/60 shrink-0 w-4">{d.num}</span>
                          <span className="text-sm text-white/60 leading-snug">{d.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Demo cards */}
        <section className="relative py-24 px-6 sm:px-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,_rgba(8,15,34,0.92)_0%,_rgba(2,4,15,0.82)_80%)] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>See It in Action</p>
              <h2 className="font-serif text-4xl font-bold">Three ways to learn. All in one place.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Parallel Reader */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl border border-sky-500/20 bg-[#060c1e] shadow-[0_20px_60px_rgba(56,189,248,0.08)] overflow-hidden"
                style={{ transformOrigin: 'bottom center' }}
              >
                <div className="px-4 py-3 border-b border-white/[0.06] flex items-center gap-2">
                  <span className="text-base">📖</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Parallel Reader</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-3">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-sky-400/70 mb-2">Medical — Patient Assessment</div>
                    <p className="text-sm text-white/80 leading-relaxed">El paciente presenta dolor agudo en el abdomen inferior derecho con rebote positivo.</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-3">
                    <div className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: `${GOLD}b3` }}>Translation</div>
                    <p className="text-sm text-white/55 leading-relaxed">The patient presents with acute pain in the lower right abdomen with positive rebound tenderness.</p>
                  </div>
                  <div className="rounded-lg border border-sky-500/20 bg-sky-900/10 px-3 py-2">
                    <div className="font-mono text-[9px] text-sky-300/80">rebote · noun · rebound — as in rebound tenderness</div>
                  </div>
                </div>
              </motion.div>

              {/* Grammar Studio */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="rounded-2xl border border-[#C9A84C]/20 bg-[#080a14] shadow-[0_20px_60px_rgba(201,168,76,0.06)] overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-white/[0.06] flex items-center gap-2">
                  <span className="text-base">🎓</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Grammar Studio</span>
                </div>
                <div className="p-4">
                  <div className="font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: `${GOLD}99` }}>Verb Conjugation · necesitar</div>
                  <table className="w-full text-xs">
                    <tbody className="divide-y divide-white/[0.04]">
                      {[['yo','necesito','I need'],['tú','necesitas','you need'],['él/ella','necesita','he/she needs'],['nosotros','necesitamos','we need'],['ellos','necesitan','they need']].map(([pro, conj, en]) => (
                        <tr key={pro} className="hover:bg-white/[0.02]">
                          <td className="py-1.5 pr-3 font-mono text-white/35 text-[10px]">{pro}</td>
                          <td className="py-1.5 pr-3 font-semibold" style={{ color: GOLD }}>{conj}</td>
                          <td className="py-1.5 text-white/35 text-[10px]">{en}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-3 rounded-lg px-3 py-2" style={{ backgroundColor: `${GOLD}0d`, border: `1px solid ${GOLD}26` }}>
                    <div className="font-mono text-[9px]" style={{ color: `${GOLD}b3` }}>Medical context</div>
                    <div className="text-[10px] text-white/45 mt-0.5">"Necesito saber dónde le duele" — I need to know where it hurts.</div>
                  </div>
                </div>
              </motion.div>

              {/* Speak & Learn */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="rounded-2xl border border-emerald-500/20 bg-[#060d10] shadow-[0_20px_60px_rgba(52,211,153,0.06)] overflow-hidden"
                style={{ transformOrigin: 'bottom center' }}
              >
                <div className="px-4 py-3 border-b border-white/[0.06] flex items-center gap-2">
                  <span className="text-base">🎙</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Speak & Learn</span>
                </div>
                <div className="p-4 space-y-2.5">
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] px-3 py-2.5 text-sm text-white/70">AI: ¿Puede describirme el dolor? ¿Dónde le duele?</div>
                  <div className="rounded-xl bg-emerald-900/20 border border-emerald-500/20 px-3 py-2.5 text-sm text-white/80 text-right">You: Me duele aquí, en la rodilla derecha.</div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] px-3 py-2.5 text-sm text-white/70">AI: Entiendo. ¿El dolor es constante o viene y va?</div>
                  <div className="mt-3 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full border-2 border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center">
                      <span className="text-xl">🎤</span>
                    </div>
                  </div>
                  <div className="text-center font-mono text-[9px] uppercase tracking-widest text-emerald-400/60">Tap to speak</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-center"
            >
              <a
                href={APP_URL}
                className="group relative overflow-hidden inline-block rounded-full px-8 py-4 font-mono text-[12px] uppercase tracking-[0.22em] text-black font-semibold hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-300"
                style={{ backgroundColor: GOLD }}
              >
                <span className="relative z-10">Try All Three Modes Free →</span>
                <span className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Category showcase */}
        <section id="categories" className="relative py-24 px-6 sm:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,22,40,0.94)_0%,_rgba(2,4,15,0.88)_70%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>26 Modules · 8 Categories</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
                Learn the language<br />
                <span className="text-white/40">your purpose demands.</span>
              </h2>
              <p className="mt-5 text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
                Every module is a complete curriculum — vocabulary, grammar in context, AI conversation partner, spoken challenges — all tailored to a real-world role.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CATEGORIES.map((cat, i) => (
                <motion.a
                  key={cat.name}
                  href={cat.href}
                  initial={{ opacity: 0, y: 40, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.18 } }}
                  className={`group relative rounded-2xl border ${cat.border} ${cat.hover} bg-gradient-to-br ${cat.color} p-5 transition-all duration-200 cursor-pointer overflow-hidden`}
                >
                  <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/[0.02] blur-2xl group-hover:bg-white/[0.05] transition-colors duration-500" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{cat.emoji}</span>
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white/50">
                        {cat.count} {cat.count === 1 ? 'module' : 'modules'}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold mb-2">{cat.name}</h3>
                    <ul className="space-y-0.5 mb-3">
                      {cat.modules.map((m) => (
                        <li key={m} className="font-mono text-[10px] text-white/45 tracking-wide">
                          {m.startsWith('+') ? <span className="text-white/25 italic">{m}</span> : `· ${m}`}
                        </li>
                      ))}
                    </ul>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-white/25">{cat.languages}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                    <span>Explore</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Free missionary callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 rounded-2xl border p-6 text-center backdrop-blur-sm"
              style={{ borderColor: `${GOLD}33`, backgroundColor: `${GOLD}0a` }}
            >
              <span className="text-3xl">✦</span>
              <h3 className="mt-2 font-serif text-xl font-semibold" style={{ color: GOLD }}>Missionary Spanish — Always Free</h3>
              <p className="mt-1 text-sm text-white/50 max-w-lg mx-auto">
                All six missionary discussions, door approach phrases, testimony vocabulary — free forever, no account required.
              </p>
              <a
                href={APP_URL}
                className="mt-4 inline-block rounded-full border px-6 py-2 font-mono text-[11px] uppercase tracking-widest hover:opacity-80 transition-colors"
                style={{ borderColor: `${GOLD}66`, color: GOLD }}
              >
                Start Missionary Spanish Free →
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="border-y border-white/[0.06] py-12 px-6 bg-[#02040f]/80">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: GOLD }}>{s.n}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/60 mt-1 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Who is this for */}
        <section className="relative py-24 px-6 sm:px-10 bg-gradient-to-b from-transparent via-[#02040f]/90 to-transparent">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>Built for Real People</p>
              <h2 className="font-serif text-4xl font-bold">Not another general-purpose app.</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { who: 'The Missionary', emoji: '🕊️', story: "He lands in São Paulo on Tuesday. The MTC gave him grammar drills. Language Threshold gave him the words he actually needed.", bullets: ['All six missionary discussions — word for word', 'Tracting openers, door approaches, and follow-up phrases', 'Testimony vocabulary at every level of fluency'] },
                { who: 'The Nurse', emoji: '🏥', story: "Her patient speaks only Spanish. She knows anatomy. She doesn't know how to ask where it hurts. Until now.", bullets: ['Bedside manner — pain assessment, calming, discharge instructions', 'SBAR handoff phrases for shift changes', '13 medical specialties: ER, OB, OR, Family, and more'] },
                { who: 'The Crew Lead', emoji: '🔧', story: "Half his crew speaks Spanish. He's been pointing and hoping for two years. Now he runs the tightest bilingual jobsite in the county.", bullets: ['Safety briefings, PPE instructions, and hazard calls', 'Blueprint reading and measurements — in both languages', '9 trades modules: framing, electrical, plumbing, and more'] },
                { who: 'The Sports Coach', emoji: '⚽', story: "His new striker doesn't speak English. His best defender plays in a French league. Game day is a babel — but it doesn't have to be.", bullets: ['On-field communication: positions, plays, corrections', '9 sports modules — soccer, hockey, baseball, football, and more', 'Coaching language: halftime talks, drills, and game-day calls'] },
              ].map((p, i) => (
                <motion.div
                  key={p.who}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{p.emoji}</div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{p.who}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-4 italic">&ldquo;{p.story}&rdquo;</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-white/60">
                        <span className="shrink-0 mt-0.5" style={{ color: GOLD }}>·</span>{b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="relative py-24 px-6 sm:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,18,34,0.94)_0%,_rgba(2,4,15,0.88)_70%)] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>
                {isBetaFree() ? 'Open Beta' : 'Simple Pricing'}
              </p>
              <h2 className="font-serif text-4xl font-bold">
                {isBetaFree() ? 'Free through August 1, 2026 — all modules unlocked.' : 'Free for 7 days. Then less than a missed shift.'}
              </h2>
              {isBetaFree() && (
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                  We're in open beta. No account, no card, no limit — explore everything.
                </p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Free */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-7"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Free</div>
                <div className="font-serif text-5xl font-bold text-white mb-1">$0</div>
                <p className="text-sm text-white/45 mb-5">Missionary Spanish — always free.</p>
                <ul className="space-y-2 mb-7">
                  {['Full Missionary Spanish module', 'No account required', 'All 6 discussions + vocabulary'].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="shrink-0 text-emerald-400 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href={APP_URL} className="block w-full text-center rounded-full border border-white/20 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 hover:border-white/40 hover:text-white transition-all duration-300">
                  Start Free →
                </a>
              </motion.div>

              {/* Pro */}
              <motion.div
                initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
                className="relative rounded-2xl border border-[#C9A84C]/30 bg-gradient-to-br from-[#0f0d04] to-[#02040f] p-7 shadow-[0_0_60px_rgba(201,168,76,0.08)]"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: GOLD }}>Pro Annual</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-serif text-5xl font-bold text-white">$149</span>
                  <span className="text-white/50 mb-1">/year</span>
                </div>
                <p className="text-sm text-white/45 mb-5">{isBetaFree() ? 'Free through Aug 1 · then $12.42/mo' : '$12.42/mo · 7-day free trial'}</p>
                <ul className="space-y-2 mb-7">
                  {['660+ professional lessons', '13 medical specialties', '9 construction trades', 'AI speaking feedback', 'Grammar studio + conjugation', 'Daily challenges + leaderboard'].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                      <span className="shrink-0 mt-0.5" style={{ color: GOLD }}>✦</span>{f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${APP_URL}/pricing`}
                  className="group relative overflow-hidden block w-full text-center rounded-full bg-gradient-to-r from-[#E5C158] via-[#C9A84C] to-[#E5C158] py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-black font-semibold hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:scale-[1.01] transition-all duration-300"
                >
                  {isBetaFree() ? 'Access Everything Free →' : 'Start 7-Day Free Trial →'}
                </a>
                <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-widest text-white/25">
                  {isBetaFree() ? 'Free beta · all modules · no card needed' : 'Cancel anytime · No charge until day 8'}
                </p>
              </motion.div>

              {/* Family */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                className="rounded-2xl border border-violet-500/30 bg-white/[0.03] p-7"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-400 mb-2">Family</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-serif text-5xl font-bold text-white">$249</span>
                  <span className="text-white/50 mb-1">/year</span>
                </div>
                <p className="text-sm text-white/45 mb-5">Pro + Junior Linguist · 6 seats</p>
                <ul className="space-y-2 mb-7">
                  {['Everything in Pro', 'Junior Linguist (ages 4-12)', 'Kids vocab, stories & games', '6 family profiles'].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="shrink-0 text-violet-400 mt-0.5">✦</span>{f}
                    </li>
                  ))}
                </ul>
                <a href={`${APP_URL}/pricing`} className="block w-full text-center rounded-full border border-violet-500/40 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-violet-300 hover:bg-violet-500/10 transition-all duration-300">
                  See Family Plan →
                </a>
              </motion.div>

              {/* Team — highlighted/recommended */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
                className="relative rounded-2xl p-7"
                style={{
                  border: '1px solid rgba(0,201,177,0.35)',
                  background: 'linear-gradient(135deg, #06181a 0%, #02040f 100%)',
                  boxShadow: '0 0 70px rgba(0,201,177,0.10)',
                }}
              >
                {/* Recommended badge */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-mono text-[9px] uppercase tracking-widest"
                  style={{ backgroundColor: '#00C9B1', color: '#02040f' }}
                >
                  Recommended
                </div>

                <div
                  className="font-mono text-[10px] uppercase tracking-[0.3em] mb-2"
                  style={{ color: '#00C9B1' }}
                >
                  Team
                </div>

                <div className="flex items-end gap-1 mb-1">
                  <span className="font-serif text-5xl font-bold text-white">$99</span>
                  <span className="text-white/50 mb-1">/mo</span>
                </div>
                <p className="text-sm text-white/45 mb-5">5 seats included · Admin dashboard</p>

                <ul className="space-y-2 mb-7">
                  {[
                    'Everything in Family',
                    'Team dashboard + member management',
                    'Usage analytics per seat',
                    'Shared progress tracking',
                    'Priority support',
                  ].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                      <span className="shrink-0 mt-0.5" style={{ color: '#00C9B1' }}>✦</span>{f}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:hello@languagethreshold.com?subject=Team%20Plan%20Inquiry"
                  className="block w-full text-center rounded-full py-3 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #00C9B1, #00a896, #00C9B1)',
                    color: '#02040f',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(0,201,177,0.40)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.01)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
                  }}
                >
                  Contact for Team Plan →
                </a>
                <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-widest text-white/25">hello@languagethreshold.com</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(13,27,62,0.88)_0%,_rgba(2,4,15,0.80)_65%)] pointer-events-none" />
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none blur-[80px]"
            style={{ backgroundColor: `${GOLD}0a` }} />

          <div className="relative max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }}
            >
              <div className="mb-6 text-5xl">✦</div>
              <h2 className="font-serif text-5xl font-bold leading-tight mb-6">
                Ready to learn the language<br />
                <span style={{ color: GOLD }}>your purpose demands?</span>
              </h2>
              <p className="text-white/50 mb-10 text-base leading-relaxed">
                Pick your module. Choose your language. Start speaking with purpose — today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={APP_URL}
                  className="group relative overflow-hidden rounded-full px-10 py-5 font-mono text-[12px] uppercase tracking-[0.22em] text-black font-semibold shadow-[0_0_60px_rgba(201,168,76,0.3)] hover:shadow-[0_0_80px_rgba(201,168,76,0.5)] transition-all duration-300"
                  style={{ backgroundColor: GOLD }}
                >
                  <span className="relative z-10">Begin Learning Free →</span>
                  <span className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-white/25">
                7-day free trial · No credit card required
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] py-8 px-6 bg-[#02040f]/88 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="flex items-center gap-2 font-serif text-sm text-white/40">
            <span style={{ color: GOLD }}>✦</span> Language Threshold
          </span>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">
            Professional language learning · 26 modules · 9 languages
          </p>
          <a href={APP_URL} className="font-mono text-[10px] uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors">
            Open App →
          </a>
        </footer>
      </div>
    </>
  )
}
