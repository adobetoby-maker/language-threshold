// Built by ATLAS — 2026-07-06
import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { CONSTRUCTION_MODULES, type ConstructionModule, type LangKey } from '../data/constructionModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const LANG_COLOR = '#10B981'
const LANG: LangKey = 'ps'
const CONTRACTOR_APP_URL = `${APP_URL}?module=framer&lang=ps`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: ConstructionModule }) {
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
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ ...sansFont, backgroundColor: `${mod.color}18`, color: mod.color }}>
            {open ? 'بندول ↑' : 'پرانیستل ↓'}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1" dir="rtl" style={{ ...displayFont, color: '#F7F3EC', textAlign: 'left' }}>{localTitle}</h3>
        <p className="text-sm leading-relaxed" dir="rtl" style={{ ...sansFont, color: '#A89F94', textAlign: 'left' }}>{localTagline}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span key={v.en} className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, backgroundColor: 'rgba(16,185,129,0.08)', color: LANG_COLOR, border: '1px solid rgba(16,185,129,0.2)' }}>
              {v.en}
            </span>
          ))}
          {!open && <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>+{mod.vocab.length - 4} نور</span>}
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(16,185,129,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>ټول لغتونه</p>
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
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: LANG_COLOR }}>بېلګه جمله</p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>"{mod.samplePhrase.en}"</p>
            <p className="text-sm leading-relaxed" dir="rtl" style={{ ...serifFont, color: '#A89F94', textAlign: 'left' }}>«{mod.samplePhrase.ps}»</p>
          </div>
          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>د تمرین سناریو: {mod.scenario}</p>
          <a href={CONTRACTOR_APP_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}>
            {localTitle} — په پښتو یې تمرین کړئ ←
          </a>
        </div>
      )}
    </div>
  )
}

export default function ContractorPashto() {
  usePageMeta({ title: 'Construction Pashto — د ساختمان پښتو', lang: 'ps', canonical: 'https://languagethreshold.com/contractor-pashto' })
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <rect x="100" y="200" width="500" height="400" stroke={LANG_COLOR} strokeWidth="1.5" />
            <line x1="100" y1="300" x2="600" y2="300" stroke={LANG_COLOR} strokeWidth="1.5" />
            <line x1="350" y1="200" x2="350" y2="600" stroke={LANG_COLOR} strokeWidth="1.5" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>Construction Pashto — د ساختمان پښتو</span>
              <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
              <span className="text-xs uppercase tracking-[0.25em]" style={{ ...sansFont, color: '#A89F94' }}>Language Threshold</span>
            </div>
            <h1 className="leading-[1.15] mb-6" dir="rtl" style={{ ...displayFont, fontSize: 'clamp(2.6rem, 5.5vw, 5rem)', color: '#F7F3EC', textAlign: 'left' }}>
              هغه پښتو زده کړئ چې{' '}
              <em style={{ color: LANG_COLOR }}>ستاسو ډله یې پر سایټ وايي.</em>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Framers, foremen, plumbers, electricians — nine trade-specific vocabulary modules for crews that work with Pashto speakers. The language you need on the deck, not in a classroom.
            </p>
            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "A communication gap on a job site costs time, money, and sometimes lives. Language is the most important tool you can carry."
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#0D0D0D' }}>
                وړیا زده کړه پیل کړئ ←
              </a>
              <a href="#modules" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80" style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}>
                ماډلونه وګورئ ↓
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: '50M+', label: 'Pashto speakers worldwide — and a fast-growing skilled-trades workforce in US and Gulf construction markets', source: 'Ethnologue' },
                { stat: '9', label: 'Trade modules — covering the full build from foundation to finish', source: 'Language Threshold' },
                { stat: 'Weeks', label: 'To functional job-site Pashto — not years of coursework', source: 'Language Threshold methodology' },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: LANG_COLOR }}>{item.stat}</div>
                  <p className="text-sm leading-relaxed mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{item.label}</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>{item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <section id="modules" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>9 مسلکي ماډلونه</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Every trade.<br />
              <em style={{ color: '#C9A84C' }}>Its own vocabulary.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Click a module to see its vocabulary, read a sample phrase, and start an AI practice session. Real job-site language — not a textbook.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONSTRUCTION_MODULES.map(mod => (
              <FadeIn key={mod.id}><ModuleCard mod={mod} /></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-28 text-center relative overflow-hidden" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>The job site is waiting</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Your crew speaks Pashto.<br />
              <em style={{ color: LANG_COLOR }}>Now you can too.</em>
            </h2>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#0D0D0D' }}>
              وړیا زده کړه پیل کړئ ←
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>No signup required. No credit card. Pick your trade and start.</p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
