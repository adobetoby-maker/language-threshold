import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { CLIMBING_MODULES, GEAR_PHOTOS, type ClimbingModule, type LangKey } from '../data/climbingModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const LANG_COLOR = '#F43F5E'
const LANG: LangKey = 'ja'
const CLIMBING_APP_URL = `${APP_URL}?module=gear&lang=ja`

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
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(244,63,94,0.12)`,
        boxShadow: open ? `0 0 32px -8px ${mod.color}22` : 'none',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-3xl">{mod.emoji}</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ ...sansFont, backgroundColor: `${mod.color}18`, color: mod.color }}>
            {open ? '閉じる ↑' : '展開する ↓'}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>{localTitle}</h3>
        <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>{localTagline}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span key={v.en} className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, backgroundColor: 'rgba(244,63,94,0.08)', color: LANG_COLOR, border: '1px solid rgba(244,63,94,0.2)' }}>
              {v.en}
            </span>
          ))}
          {!open && <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>+{mod.vocab.length - 4} もっと</span>}
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(244,63,94,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>完全な語彙</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {mod.vocab.map(v => (
              <div key={v.en} className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{v.en}</span>
                <button
                  onClick={e => {
                    const rect = (e.target as HTMLElement).getBoundingClientRect()
                    setTapped({ word: v.ja.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.ja}`, x: rect.left + rect.width / 2, y: rect.bottom })
                  }}
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: mod.color, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.ja}
                </button>
              </div>
            ))}
          </div>
          {tapped && <WordCard {...tapped} lang="ja" color={mod.color} onClose={() => setTapped(null)} />}
          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(244,63,94,0.06)', border: '1px solid rgba(244,63,94,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: LANG_COLOR }}>例文</p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>"{mod.samplePhrase.en}"</p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>"{mod.samplePhrase.ja}"</p>
          </div>
          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>練習シナリオ: {mod.scenario}</p>
          <a href={CLIMBING_APP_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}>
            日本語で{localTitle}を練習する →
          </a>
        </div>
      )}
    </div>
  )
}

export default function ClimbingJapanese() {
  usePageMeta({ title: 'Climbing Japanese — クライミングの日本語', lang: 'ja', canonical: 'https://languagethreshold.com/climbing-japanese' })
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>クライミング日本語</span>
              <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
              <span className="text-xs uppercase tracking-[0.25em]" style={{ ...sansFont, color: '#A89F94' }}>Language Threshold</span>
            </div>
            <h1 className="leading-[1.1] mb-6" style={{ ...displayFont, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#F7F3EC' }}>
              クライマーが岩壁で<br />
              <em style={{ color: LANG_COLOR }}>話す日本語。</em>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              ギア、コマンド、ルート、ボルダリング、安全 — 日本語を話すクライマーのための
              10つの専門語彙モジュール。教室ではなく、岩壁で必要な言葉。
            </p>
            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              「クライミングはクライマーと岩の静かな対話です。
              正しい語彙があれば、この対話は誰にでも開かれます。」
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#0D0D0D' }}>
                無料で学習開始 →
              </a>
              <a href="#modules" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80" style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}>
                モジュールを見る ↓
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>必須ギア</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {GEAR_PHOTOS.map(g => (
                <div key={g.name} className="text-center">
                  <div className="rounded-xl overflow-hidden mb-2 aspect-square" style={{ backgroundColor: '#1a1a1a' }}>
                    <img src={g.photo} alt={g.ja} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <p className="text-xs font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{g.ja}</p>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>10のクライミングモジュール</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              それぞれのスタイルに。<br />
              <em style={{ color: '#C9A84C' }}>専用の語彙を。</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              モジュールをクリックして語彙を確認し、例文を読み、AIとの練習セッションを開始しましょう。
              教科書ではなく、本物のクライミング語彙。
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>岩壁があなたを待っている</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              チームは日本語で登る。<br />
              <em style={{ color: LANG_COLOR }}>今日からあなたも。</em>
            </h2>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#0D0D0D' }}>
              無料で学習開始 →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>登録不要。クレジットカード不要。スタイルを選んで始めましょう。</p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
