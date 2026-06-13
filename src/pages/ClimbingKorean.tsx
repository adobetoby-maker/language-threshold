import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { CLIMBING_MODULES, GEAR_PHOTOS, type ClimbingModule, type LangKey } from '../data/climbingModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const LANG_COLOR = '#6366F1'
const LANG: LangKey = 'ko'
const CLIMBING_APP_URL = `${APP_URL}?module=gear&lang=ko`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: ClimbingModule }) {
  const localTitle = mod.titles?.[LANG] ?? mod.title
  const localTagline = mod.taglines?.[LANG] ?? mod.tagline
  const [open, setOpen] = useState(false)
  const [tapped, setTapped] = useState<TappedWord | null>(null)
  return (
    <div
      className="rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#161616',
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(99,102,241,0.12)`,
        boxShadow: open ? `0 0 32px -8px ${mod.color}22` : 'none',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-3xl">{mod.emoji}</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ ...sansFont, backgroundColor: `${mod.color}18`, color: mod.color }}>
            {open ? '닫기 ↑' : '펼치기 ↓'}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>{localTitle}</h3>
        <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>{localTagline}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span key={v.en} className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, backgroundColor: 'rgba(99,102,241,0.08)', color: LANG_COLOR, border: '1px solid rgba(99,102,241,0.2)' }}>
              {v.en}
            </span>
          ))}
          {!open && <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>+{mod.vocab.length - 4} 더</span>}
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(99,102,241,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>전체 어휘</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {mod.vocab.map(v => (
              <div key={v.en} className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{v.en}</span>
                <button
                  onClick={e => {
                    const rect = (e.target as HTMLElement).getBoundingClientRect()
                    setTapped({ word: v.ko.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.ko}`, x: rect.left + rect.width / 2, y: rect.bottom })
                  }}
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: mod.color, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.ko}
                </button>
              </div>
            ))}
          </div>
          {tapped && <WordCard {...tapped} lang="ko" color={mod.color} onClose={() => setTapped(null)} />}
          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: LANG_COLOR }}>예문</p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>"{mod.samplePhrase.en}"</p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>"{mod.samplePhrase.ko}"</p>
          </div>
          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>연습 시나리오: {mod.scenario}</p>
          <a href={CLIMBING_APP_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}>
            한국어로 {localTitle} 연습하기 →
          </a>
        </div>
      )}
    </div>
  )
}

export default function ClimbingKorean() {
  usePageMeta({ title: 'Climbing Korean — 클라이밍 한국어', lang: 'ko', canonical: 'https://languagethreshold.com/climbing-korean' })
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <polyline points="100,600 250,300 400,450 550,150 650,400" stroke={LANG_COLOR} strokeWidth="1.5" fill="none" />
            <circle cx="250" cy="300" r="8" stroke={LANG_COLOR} strokeWidth="1.5" fill="none" />
            <circle cx="550" cy="150" r="8" stroke={LANG_COLOR} strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>클라이밍 한국어</span>
              <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
              <span className="text-xs uppercase tracking-[0.25em]" style={{ ...sansFont, color: '#A89F94' }}>Language Threshold</span>
            </div>
            <h1 className="leading-[1.1] mb-6" style={{ ...displayFont, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#F7F3EC' }}>
              클라이머들이 암벽에서<br />
              <em style={{ color: LANG_COLOR }}>사용하는 한국어.</em>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              장비, 구령, 루트, 볼더링, 안전 — 한국어를 사용하는 클라이머를 위한
              10가지 전문 어휘 모듈. 교실이 아닌 암벽에서 필요한 언어.
            </p>
            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "클라이밍은 클라이머와 암석 사이의 조용한 대화입니다.
              올바른 어휘가 있으면 이 대화는 모든 사람에게 열립니다."
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#0D0D0D' }}>
                무료로 학습 시작 →
              </a>
              <a href="#modules" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80" style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}>
                모듈 보기 ↓
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>필수 장비</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {GEAR_PHOTOS.map(g => (
                <div key={g.name} className="text-center">
                  <div className="rounded-xl overflow-hidden mb-2 aspect-square" style={{ backgroundColor: '#1a1a1a' }}>
                    <img src={g.photo} alt={g.ko} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <p className="text-xs font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{g.ko}</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>{g.name}</p>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>10가지 클라이밍 모듈</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              모든 스타일에.<br />
              <em style={{ color: '#C9A84C' }}>전용 어휘를.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              모듈을 클릭하여 어휘를 확인하고, 예문을 읽고, AI와의 연습 세션을 시작하세요.
              교과서가 아닌 실제 클라이밍 어휘.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLIMBING_MODULES.map(mod => (
              <FadeIn key={mod.id}><ModuleCard mod={mod} /></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-28 text-center relative overflow-hidden" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>암벽이 당신을 기다립니다</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              팀은 한국어로 오릅니다.<br />
              <em style={{ color: LANG_COLOR }}>오늘부터 당신도.</em>
            </h2>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#0D0D0D' }}>
              무료로 학습 시작 →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>등록 불필요. 신용카드 불필요. 스타일을 선택하고 시작하세요.</p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
