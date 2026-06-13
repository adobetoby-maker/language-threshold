import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MEDICAL_MODULES, type MedicalModule, type LangKey } from '../data/medicalModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const JAPANESE_COLOR = '#F43F5E'
const MEDICAL_APP_URL = `${APP_URL}?module=emergency&lang=ja`

interface TappedWord { word: string; sentence: string; x: number; y: number }

const LANG: LangKey = 'ja'
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
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(244,63,94,0.12)`,
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
            {open ? '閉じる ↑' : '開く ↓'}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
          {localTitle}
        </h3>
        <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>
          {localTagline}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span
              key={v.en}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ ...sansFont, backgroundColor: 'rgba(244,63,94,0.08)', color: JAPANESE_COLOR, border: '1px solid rgba(244,63,94,0.2)' }}
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

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(244,63,94,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>
            全語彙
          </p>
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
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: JAPANESE_COLOR }}>
              例文
            </p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>
              "{mod.samplePhrase.en}"
            </p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              "{mod.samplePhrase.ja}"
            </p>
          </div>

          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>
            練習シナリオ: {mod.scenario}
          </p>

          <a
            href={MEDICAL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}
          >
            {localTitle}を日本語で練習する →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MedicalJapanese() {
  usePageMeta({ title: 'Medical Japanese', lang: 'ja', canonical: 'https://languagethreshold.com/medical-japanese' })
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <path d="M50 700V300C50 148 148 50 350 50C552 50 650 148 650 300V700" stroke={JAPANESE_COLOR} strokeWidth="1.5" />
            <line x1="350" y1="200" x2="350" y2="500" stroke={JAPANESE_COLOR} strokeWidth="1.5" />
            <line x1="200" y1="350" x2="500" y2="350" stroke={JAPANESE_COLOR} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: JAPANESE_COLOR }}>
                医療日本語
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
              あなたの患者が<br />
              <em style={{ color: JAPANESE_COLOR }}>日常的に話す日本語。</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              救急、看護、整形外科、産科、外科、循環器科 — 各専門領域の語彙に特化した13のAIモジュール。フレーズ集ではありません。診察室、手術室、ベッドサイドで本当に必要な言葉を、日本語で学びます。
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "最も重要な臨床上の会話には、ニュアンス、自信、そしてその場で質問に答える能力が求められます — 通訳を介さずに。すべては患者が毎日使う言語を学ぶことから始まります。"
              — Toby Anderton, MD
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: JAPANESE_COLOR, color: '#0D0D0D' }}
              >
                無料で学習を始める →
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                すべての専門分野を見る ↓
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
                  stat: '125M+',
                  label: '日本語話者 — 精密な文法と敬語表現を持つ世界有数の言語',
                  source: '国立国語研究所',
                },
                {
                  stat: '3',
                  label: '文字体系 — ひらがな、カタカナ、漢字 — 医療現場での読み書きに不可欠',
                  source: '文部科学省',
                },
                {
                  stat: '数週間',
                  label: '数年ではなく — 職能別語彙とAI練習パートナーで実用的な臨床会話力を習得',
                  source: 'Language Threshold メソッド',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: JAPANESE_COLOR }}>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: JAPANESE_COLOR }}>
                13の専門モジュール
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              各専門分野に<br />
              <em style={{ color: '#C9A84C' }}>固有の言語がある。</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              専門分野をクリックして語彙を確認し、例文を読み、AIとの練習セッションを開始しましょう。医療スペイン語モジュールと同じ臨床的深度を、日本語で完全に提供します。
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: JAPANESE_COLOR }}>
              なぜ医療日本語なのか
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              通訳という問題<br />
              <em style={{ color: '#C9A84C' }}>診察室の中で</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                日本語は独自の敬語体系と高度に文脈依存したコミュニケーションスタイルを持つ言語です。日本の病院や在外日本人コミュニティで働く臨床医にとって、言語の習得は不可欠です。
              </p>
              <p>
                最も重要な臨床上の会話にはニュアンスが求められます。インフォームドコンセント、疼痛評価、退院指導、出産前教育 — これらのやり取りには、患者の言語でその場で質問に答える能力が必要です。
              </p>
              <p>
                Language Thresholdは、医療スペイン語で実証された職能別方法論を日本語に適用しています。各モジュールは実際の臨床語彙で構築されています。各シナリオは実際の臨床診察を反映しています — 教科書の練習問題ではありません。
              </p>
              <p style={{ color: '#F7F3EC' }}>
                東京、大阪で診療する場合でも、海外で日本人患者を診る場合でも — 患者が毎日使う言語こそ、最初に学ぶべき言語です。
              </p>
            </div>
            <div className="mt-6 text-sm" style={{ ...sansFont, color: '#A89F94' }}>
              — Toby Anderton, MD · B.A. 言語学, BYU · 整形外科医 · Language Threshold 創設者
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              医療日本語の学び方
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '専門分野を選ぶ', body: '救急、看護、整形外科、産科、外科、循環器科、理学療法、疼痛管理、医療受付、ソーシャルワークなどから選択できます。各モジュールは実際の臨床語彙で構築されています — 日本語で。' },
              { step: '02', title: 'AIと練習する', body: 'AIパートナーが日本語を話す患者、家族、または同僚を演じます。セッションは実際の臨床診察をシミュレートします — 疼痛評価、インフォームドコンセント、退院指導、救急トリアージ。' },
              { step: '03', title: 'ベッドサイドで話す', body: '教室での数年の勉強ではなく、毎日の練習数週間で。Language Thresholdは来学期ではなく、月曜日から日本語を使う必要がある臨床医のために作られています。' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(244,63,94,0.3)' }}>
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
                医療日本語 — クイックリファレンス
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                臨床現場で最も重要なフレーズ
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'How long have you had this pain?', ja: 'この痛みはいつから続いていますか？' },
                { en: 'Are you allergic to any medications?', ja: '薬にアレルギーはありますか？' },
                { en: 'Take this medication twice a day with food.', ja: 'この薬を食後に1日2回服用してください。' },
                { en: 'Do not eat or drink before your surgery.', ja: '手術前は飲食しないでください。' },
                { en: 'Your test results came back normal.', ja: '検査結果は正常でした。' },
                { en: 'I need to examine your abdomen.', ja: '腹部を診察させていただきます。' },
                { en: 'Do you have health insurance?', ja: '健康保険はお持ちですか？' },
                { en: 'Please sign this consent form.', ja: 'この同意書にご署名ください。' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>{phrase.ja}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ ...sansFont, color: '#A89F94' }}>
                これらは入門フレーズです。アプリではAIによる発音・文法フィードバック付きで、臨床場面に即したさらに多くのフレーズを学べます。
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
              >
                アプリですべて練習する →
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
              Language Thresholdの他のコース
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <a
                href="/medical-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  医療スペイン語
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  同じ13モジュール — 米国のヒスパニック系患者向け。
                </p>
              </a>
              <a
                href="/medical-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇧🇷</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  医療ポルトガル語
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  同じ13モジュール — ブラジル人・ポルトガル語圏の患者向け。
                </p>
              </a>
              <a
                href="/medical-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,191,165,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  医療スワヒリ語
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  同じ13モジュール — 東アフリカの患者向け。
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
              <path d="M50 600V260C50 130 130 50 300 50C470 50 550 130 550 260V600" stroke={JAPANESE_COLOR} strokeWidth="1.5" />
              <line x1="300" y1="150" x2="300" y2="450" stroke={JAPANESE_COLOR} strokeWidth="1.5" />
              <line x1="150" y1="300" x2="450" y2="300" stroke={JAPANESE_COLOR} strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: JAPANESE_COLOR }}>
              診察室があなたを待っています
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              患者は日本語を話します。<br />
              <em style={{ color: JAPANESE_COLOR }}>あなたも話せるようになる。</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              ベッドサイドで言葉に詰まってから後悔しないでください。あなたの専門分野から始めて、そこから積み上げていきましょう。
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: JAPANESE_COLOR, color: '#0D0D0D' }}
            >
              無料で学習を始める →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              登録不要。クレジットカード不要。専門分野を選んですぐに始められます。
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
