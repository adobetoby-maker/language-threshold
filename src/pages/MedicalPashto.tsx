// Built by ATLAS — 2026-07-06
import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MEDICAL_MODULES, type MedicalModule, type LangKey } from '../data/medicalModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const PASHTO_COLOR = '#10B981'
const MEDICAL_APP_URL = `${APP_URL}?module=emergency&lang=ps`

interface TappedWord { word: string; sentence: string; x: number; y: number }

const LANG: LangKey = 'ps'
function ModuleCard({ mod }: { mod: MedicalModule }) {
  const localTitle = mod.titles?.[LANG] ?? mod.title
  const localTagline = mod.taglines?.[LANG] ?? mod.tagline
  const [open, setOpen] = useState(false)
  const [tapped, setTapped] = useState<TappedWord | null>(null)
  return (
    <div
      className="rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#161616',
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(16,185,129,0.12)`,
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
            {open ? 'بندول ↑' : 'پرانیستل ↓'}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1" dir="rtl" style={{ ...displayFont, color: '#F7F3EC', textAlign: 'left' }}>
          {localTitle}
        </h3>
        <p className="text-sm leading-relaxed" dir="rtl" style={{ ...sansFont, color: '#A89F94', textAlign: 'left' }}>
          {localTagline}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span
              key={v.en}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ ...sansFont, backgroundColor: 'rgba(16,185,129,0.08)', color: PASHTO_COLOR, border: '1px solid rgba(16,185,129,0.2)' }}
            >
              {v.en}
            </span>
          ))}
          {!open && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>
              +{mod.vocab.length - 4} نور
            </span>
          )}
        </div>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(16,185,129,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>
            ټول لغتونه
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {mod.vocab.map(v => (
              <div key={v.en} className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{v.en}</span>
                <button
                  onClick={e => {
                    const rect = (e.target as HTMLElement).getBoundingClientRect()
                    setTapped({ word: v.ps.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.ps}`, x: rect.left + rect.width / 2, y: rect.bottom })
                  }}
                  dir="rtl"
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: mod.color, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.ps}
                </button>
              </div>
            ))}
          </div>
          {tapped && <WordCard {...tapped} lang="ps" color={mod.color} onClose={() => setTapped(null)} />}

          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: PASHTO_COLOR }}>
              بېلګه جمله
            </p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>
              "{mod.samplePhrase.en}"
            </p>
            <p className="text-sm leading-relaxed" dir="rtl" style={{ ...serifFont, color: '#A89F94', textAlign: 'left' }}>
              «{mod.samplePhrase.ps}»
            </p>
          </div>

          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>
            د تمرین سناریو: {mod.scenario}
          </p>

          <a
            href={MEDICAL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}
          >
            {localTitle} — په پښتو یې تمرین کړئ ←
          </a>
        </div>
      )}
    </div>
  )
}

export default function MedicalPashto() {
  usePageMeta({ title: 'Medical Pashto', lang: 'ps', canonical: 'https://languagethreshold.com/medical-pashto' })
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <path d="M50 700V300C50 148 148 50 350 50C552 50 650 148 650 300V700" stroke={PASHTO_COLOR} strokeWidth="1.5" />
            <line x1="350" y1="200" x2="350" y2="500" stroke={PASHTO_COLOR} strokeWidth="1.5" />
            <line x1="200" y1="350" x2="500" y2="350" stroke={PASHTO_COLOR} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PASHTO_COLOR }}>
                Medical Pashto — طبي پښتو
              </span>
              <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
              <span className="text-xs uppercase tracking-[0.25em]" style={{ ...sansFont, color: '#A89F94' }}>
                Language Threshold
              </span>
            </div>

            <h1
              className="leading-[1.15] mb-6"
              dir="rtl"
              style={{ ...displayFont, fontSize: 'clamp(2.6rem, 5.5vw, 5rem)', color: '#F7F3EC', textAlign: 'left' }}
            >
              هغه پښتو زده کړئ چې{' '}
              <em style={{ color: PASHTO_COLOR }}>ناروغان یې وايي.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" dir="rtl" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)', textAlign: 'left' }}>
              عاجل، نرسنګ، ارتوپیدي، نسايي، جراحي، د زړه ناروغۍ — دیارلس ماډلونه چې هر یو د خپلې برخې مسلکي لغتونه رانغاړي. دا ساده د خبرو اترو لارښود نه دی: هغه کلمې چې په معاینه خونه، عملیات خونه او د ناروغ تر څنګ ورته اړتیا لرئ — په پښتو.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "The clinical conversations that matter most demand nuance, confidence, and the ability to answer instantly without an interpreter. It all starts with learning the language your patients use every day."
              — Toby Anderton, MD
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: PASHTO_COLOR, color: '#0D0D0D' }}
              >
                وړیا زده کړه پیل کړئ ←
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                ټولې برخې وګورئ ↓
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
                  stat: '50M+',
                  label: 'Pashto speakers worldwide — across Afghanistan, Pakistan, and diaspora communities in the US, Europe, and Australia',
                  source: 'Ethnologue',
                },
                {
                  stat: '190K+',
                  label: 'Afghan arrivals resettled in the US since 2021 — one of the fastest-growing patient populations with limited English proficiency',
                  source: 'US Department of Homeland Security · Operation Allies Welcome',
                },
                {
                  stat: 'Weeks',
                  label: 'Not years — role-specific vocabulary plus an AI practice partner gets you to functional clinical Pashto',
                  source: 'Language Threshold methodology',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: PASHTO_COLOR }}>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PASHTO_COLOR }}>
                13 مسلکي ماډلونه
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Every specialty.<br />
              <em style={{ color: '#C9A84C' }}>Its own language.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Click a specialty to see its vocabulary, read a sample phrase, and launch an AI practice session. The same clinical depth as Medical Spanish — now in Pashto.
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PASHTO_COLOR }}>
              Why Medical Pashto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              The interpreter problem,<br />
              <em style={{ color: '#C9A84C' }}>in the exam room</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                Since 2021, hundreds of thousands of Afghans have resettled across the United States — in Sacramento, Houston, Northern Virginia, San Diego, and beyond. Pashto is now one of the most-requested interpreter languages in American clinics and hospitals, and qualified medical interpreters are scarce.
              </p>
              <p>
                The clinical conversations that matter most demand nuance. Explaining a consent form. Assessing pain. Giving discharge instructions. Prenatal teaching. These interactions demand the ability to answer questions instantly, in the patient's own language.
              </p>
              <p>
                Language Threshold applies the same role-specific methodology used in Medical Spanish to Pashto. Every module is built from real clinical vocabulary. Every scenario mirrors actual clinical practice — not textbook exercises.
              </p>
              <p style={{ color: '#F7F3EC' }}>
                Whether you serve Afghan refugees in a resettlement clinic or deploy with an NGO in Central Asia — the language your patients use every day is the language to learn first.
              </p>
            </div>
            <div className="mt-6 text-sm" style={{ ...sansFont, color: '#A89F94' }}>
              — Toby Anderton, MD · BA Linguistics, BYU · Orthopedic Surgeon · Founder, Language Threshold
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              How Medical Pashto works
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pick your specialty', body: 'Emergency, nursing, orthopedics, OB/GYN, surgery, cardiology, physical therapy, pain management, front desk, social work, and more. Each module is built from real clinical vocabulary — now in Pashto.' },
              { step: '02', title: 'Practice with AI', body: 'An AI partner plays your Pashto-speaking patient, family member, or colleague. Sessions simulate real clinical situations: pain assessments, consent explanations, discharge instructions, ED intakes.' },
              { step: '03', title: 'Speak at the bedside', body: 'Weeks of daily practice — not years of coursework. Language Threshold is built for clinicians who need Pashto next Monday, not next semester.' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(16,185,129,0.3)' }}>
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
                Medical Pashto — Quick Reference
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                The phrases that matter most in the clinic
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'How long have you had this pain?', ps: 'دا درد له کومې مودې راهیسې لرئ؟' },
                { en: 'Are you allergic to any medications?', ps: 'ایا له کومو درملو سره حساسیت لرئ؟' },
                { en: 'Take this medication twice a day with food.', ps: 'دا درمل ورځ کې دوه ځله له خوړو سره وخورئ.' },
                { en: 'Do not eat or drink before your surgery.', ps: 'له عملیات مخکې هېڅ مه خورئ او مه څښئ.' },
                { en: 'Your test results came back normal.', ps: 'ستاسو د معایناتو پایلې نورمالې راغلې.' },
                { en: 'I need to examine your abdomen.', ps: 'اړتیا لرم ستاسو ګېډه معاینه کړم.' },
                { en: 'Do you have health insurance?', ps: 'ایا روغتیايي بیمه لرئ؟' },
                { en: 'Please sign this consent form.', ps: 'مهرباني وکړئ دا رضایتنامه لاسلیک کړئ.' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(16,185,129,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" dir="rtl" style={{ ...sansFont, color: '#A89F94', textAlign: 'left' }}>{phrase.ps}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ ...sansFont, color: '#A89F94' }}>
                These are starters. The app teaches hundreds of phrases in clinical context, with AI feedback on pronunciation and grammar.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
              >
                Practice them all in the app →
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
              More on Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <a
                href="/contractor-pashto"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(255,122,74,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🔨</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Contractor Pashto
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Pashto for job sites, crews, and trades — framing to finish.
                </p>
              </a>
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
                  The same thirteen modules — for Spanish-speaking patients.
                </p>
              </a>
              <a
                href="/missionary-pashto"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(201,168,76,0.12)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🕊️</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Missionary Pashto
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Teach, serve, and minister in Pashto with confidence.
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
              <path d="M50 600V260C50 130 130 50 300 50C470 50 550 130 550 260V600" stroke={PASHTO_COLOR} strokeWidth="1.5" />
              <line x1="300" y1="150" x2="300" y2="450" stroke={PASHTO_COLOR} strokeWidth="1.5" />
              <line x1="150" y1="300" x2="450" y2="300" stroke={PASHTO_COLOR} strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PASHTO_COLOR }}>
              The exam room is waiting
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Your patients speak Pashto.<br />
              <em style={{ color: PASHTO_COLOR }}>Now you can too.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              Don't wait until you wish you had learned it at the bedside.
              Start with your specialty. Build from there.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: PASHTO_COLOR, color: '#0D0D0D' }}
            >
              وړیا زده کړه پیل کړئ ←
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              No signup required. No credit card. Pick your specialty and start.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
