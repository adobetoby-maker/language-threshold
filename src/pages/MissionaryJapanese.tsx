import { useState } from 'react'
import { MISSIONARY_APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MISSIONARY_MODULES, type MissionaryModule, type LangKey } from '../data/missionaryModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const LANG_COLOR = '#F43F5E'
const LANG: LangKey = 'ja'
const APP_URL_LANG = `${MISSIONARY_APP_URL}&lang=ja`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: MissionaryModule }) {
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
            <span key={v.en} className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, backgroundColor: `rgba(244,63,94,0.08)`, color: LANG_COLOR, border: `1px solid rgba(244,63,94,0.2)` }}>
              {v.en}
            </span>
          ))}
          {!open && <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>+{mod.vocab.length - 4} もっと</span>}
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: `rgba(244,63,94,0.08)` }} onClick={e => e.stopPropagation()}>
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
          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: `rgba(244,63,94,0.06)`, border: `1px solid rgba(244,63,94,0.15)` }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: LANG_COLOR }}>例文</p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>"{mod.samplePhrase.en}"</p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>"{mod.samplePhrase.ja}"</p>
          </div>
          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>練習シナリオ: {mod.scenario}</p>
          <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: mod.color, color: '#F7F3EC' }}>
            日本語で{localTitle}を練習する →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MissionaryJapanese() {
  usePageMeta({ title: 'Missionary Japanese — 宣教師の日本語', lang: 'ja', canonical: 'https://languagethreshold.com/missionary-japanese' })
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <circle cx="350" cy="350" r="280" stroke={LANG_COLOR} strokeWidth="1.5" />
            <ellipse cx="350" cy="350" rx="140" ry="280" stroke={LANG_COLOR} strokeWidth="1.5" />
            <ellipse cx="350" cy="350" rx="280" ry="110" stroke={LANG_COLOR} strokeWidth="1.5" />
            <line x1="70" y1="350" x2="630" y2="350" stroke={LANG_COLOR} strokeWidth="1" />
            <line x1="350" y1="70" x2="350" y2="630" stroke={LANG_COLOR} strokeWidth="1" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>宣教師の日本語</span>
              <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
              <span className="text-xs uppercase tracking-[0.25em]" style={{ ...sansFont, color: '#A89F94' }}>Language Threshold</span>
            </div>
            <h1 className="leading-[1.1] mb-6" style={{ ...displayFont, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#F7F3EC' }}>
              あなたの伝道地が<br />
              <em style={{ color: LANG_COLOR }}>日本語を話しています。</em>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              回復、救いの計画、見つけること、침례の約束、そして日常の伝道生活を網羅した9つのAI搭載モジュール — 日本語圏でのLDS伝道活動に特化した言語。
            </p>
            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "父と私はシウダード・オブレゴンへの奉仕伝道に行きました。私たちは必要なものをすべて持っていた人々と肩を並べて働きました — 共通言語を除いて。福音のメッセージは言語の壁以上のものに値します。" — トビー・アンダートン, MD
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#F7F3EC' }}>
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
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: '1.3億', label: '日本語話者 — 日本国内だけでなく世界の日系コミュニティでも活躍', source: '文化庁' },
                { stat: '5+', label: '日本語圏でのLDS伝道部 — アジア太平洋地域', source: '末日聖徒イエス・キリスト教会' },
                { stat: '数週間', label: '年単位ではなく — AIによる役割特化型練習で福音会話の流暢さに到達', source: 'Language Thresholdメソッド' },
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

      <FadeIn>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>伝道に欠かせないフレーズ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ ...displayFont, color: '#F7F3EC' }}>
              すべての宣教師が必要とする9つのフレーズ。
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div key={0} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>私たちはイエス・キリスト教会の宣教師です。</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>We are missionaries of The Church of Jesus Christ.</p>
                </div>
                <div key={1} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>メッセージをお伝えしてもよろしいでしょうか？</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Can we share a message with you?</p>
                </div>
                <div key={2} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>神はあなたを愛し、あなたへの計画を持っています。</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>God loves you and has a plan for you.</p>
                </div>
                <div key={3} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>モルモン書を読んだことはありますか？</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Have you read from the Book of Mormon?</p>
                </div>
                <div key={4} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>それが真実かどうか、祈って確かめてみてください。</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>We invite you to pray to know if it is true.</p>
                </div>
                <div key={5} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>また来て続きをお話しできますか？</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>When can we come back to continue?</p>
                </div>
                <div key={6} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>一緒に教会に来てみませんか？</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Would you like to come to church with us?</p>
                </div>
                <div key={7} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>침례について考えたことはありますか？</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Have you thought about baptism?</p>
                </div>
                <div key={8} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>私たちが教えていることについて質問はありますか？</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Do you have any questions about what we teach?</p>
                </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <section id="modules" className="py-28" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>9つの伝道モジュール</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              最初のドアから<br />
              <em style={{ color: '#C9A84C' }}>침례へ。</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              各モジュールは伝道サイクルの特定の瞬間を対象としています — 見つけること、教えること、約束すること、保持すること。AIパートナーが本物の福音会話をシミュレートします。
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MISSIONARY_MODULES.map(mod => (
              <FadeIn key={mod.id}><ModuleCard mod={mod} /></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="text-4xl mb-6">🌍</div>
            <h2 className="text-3xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              福音のメッセージは<br />
              <em style={{ color: LANG_COLOR }}>言語の壁以上のものに値します。</em>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94' }}>
              「イエス・キリストの模範に倣い、침례を受けますか？」は単なる一文ではありません。それは人生を変える招待です。
            </p>
            <p className="text-sm" style={{ ...serifFont, color: '#A89F94' }}>
              Language ThresholdのAIパートナーは本物の福音の議論をシミュレートし、宣教師が現地で準備万端で到着できるようにします。
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>Also on Language Threshold</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href="/missionary-korean"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇰🇷</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Missionary Korean</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>The same nine modules — for Korean-speaking missions in Asia.</p>
              </a>
              <a
                href="/medical-japanese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Medical Japanese</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>Thirteen clinical modules for Japanese-speaking patients.</p>
              </a>
              <a
                href="/missionary-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(124,58,237,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Missionary Spanish</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>The same nine modules — for Spanish-speaking missions worldwide.</p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-28 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>伝道地があなたを待っています</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              あなたの調査対象者は日本語を話します。<br />
              <em style={{ color: LANG_COLOR }}>今日からあなたも。</em>
            </h2>
            <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#F7F3EC' }}>
              無料で学習開始 →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>登録不要。クレジットカード不要。</p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
