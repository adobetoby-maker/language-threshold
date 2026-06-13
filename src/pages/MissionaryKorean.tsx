import { useState } from 'react'
import { MISSIONARY_APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MISSIONARY_MODULES, type MissionaryModule, type LangKey } from '../data/missionaryModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const LANG_COLOR = '#A855F7'
const LANG: LangKey = 'ko'
const APP_URL_LANG = `${MISSIONARY_APP_URL}&lang=ko`

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
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(168,85,247,0.12)`,
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
            <span key={v.en} className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, backgroundColor: `rgba(168,85,247,0.08)`, color: LANG_COLOR, border: `1px solid rgba(168,85,247,0.2)` }}>
              {v.en}
            </span>
          ))}
          {!open && <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>+{mod.vocab.length - 4} 더보기</span>}
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: `rgba(168,85,247,0.08)` }} onClick={e => e.stopPropagation()}>
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
          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: `rgba(168,85,247,0.06)`, border: `1px solid rgba(168,85,247,0.15)` }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: LANG_COLOR }}>예시 문장</p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>"{mod.samplePhrase.en}"</p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>"{mod.samplePhrase.ko}"</p>
          </div>
          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>연습 상황: {mod.scenario}</p>
          <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: mod.color, color: '#F7F3EC' }}>
            한국어로 {localTitle} 연습하기 →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MissionaryKorean() {
  usePageMeta({ title: 'Missionary Korean — 선교사 한국어', lang: 'ko', canonical: 'https://languagethreshold.com/missionary-korean' })
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>선교사 한국어</span>
              <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
              <span className="text-xs uppercase tracking-[0.25em]" style={{ ...sansFont, color: '#A89F94' }}>Language Threshold</span>
            </div>
            <h1 className="leading-[1.1] mb-6" style={{ ...displayFont, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#F7F3EC' }}>
              당신의 선교지가<br />
              <em style={{ color: LANG_COLOR }}>한국어로 말합니다.</em>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              회복, 구원 계획, 전도, 침례 헌신, 일상적인 선교 생활을 다루는 9개의 AI 기반 모듈 — 한국어권 지역에서의 후기 성도 선교 활동을 위한 특화 언어.
            </p>
            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "아버지와 저는 봉사 선교에 갔습니다. 우리는 우리에게 필요한 모든 것을 가진 사람들과 함께 일했습니다 — 공통 언어를 제외하고는. 복음 메시지는 언어 장벽 그 이상의 가치가 있습니다." — 토비 앤더튼, MD
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#F7F3EC' }}>
                무료로 학습 시작하기 →
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
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: '8000만+', label: '전 세계 한국어 화자 — 한국뿐 아니라 해외 한인 커뮤니티에서도 활약', source: '국립국어원' },
                { stat: '5+', label: '한국어권 국가 및 인근 지역의 활성 교회 선교부', source: '예수 그리스도 후기 성도 교회' },
                { stat: '몇 주', label: '수년이 아닌 — AI 기반 역할별 연습으로 복음 대화 유창성 달성', source: 'Language Threshold 방법론' },
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>필수 선교 문구</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ ...displayFont, color: '#F7F3EC' }}>
              모든 선교사가 알아야 할 아홉 가지 문구.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div key={0} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>저희는 예수 그리스도 교회의 선교사입니다.</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>We are missionaries of The Church of Jesus Christ.</p>
                </div>
                <div key={1} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>메시지를 나눠도 될까요?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Can we share a message with you?</p>
                </div>
                <div key={2} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>하나님은 당신을 사랑하시고 당신을 위한 계획을 가지고 계십니다.</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>God loves you and has a plan for you.</p>
                </div>
                <div key={3} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>몰몬경을 읽어보신 적 있으신가요?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Have you read from the Book of Mormon?</p>
                </div>
                <div key={4} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>이것이 진실인지 알기 위해 기도해 보시기를 권합니다.</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>We invite you to pray to know if it is true.</p>
                </div>
                <div key={5} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>계속 이야기하러 언제 다시 올 수 있을까요?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>When can we come back to continue?</p>
                </div>
                <div key={6} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>저희와 함께 교회에 오시겠어요?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Would you like to come to church with us?</p>
                </div>
                <div key={7} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>침례에 대해 생각해 보신 적 있으신가요?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Have you thought about baptism?</p>
                </div>
                <div key={8} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>저희가 가르치는 것에 대해 질문이 있으신가요?</p>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>아홉 가지 선교 모듈</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              첫 번째 문에서<br />
              <em style={{ color: '#C9A84C' }}>침례반까지.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              각 모듈은 선교 주기의 특정 순간을 목표로 합니다 — 찾기, 가르치기, 헌신, 유지. AI 연습 파트너가 실제 복음 대화를 시뮬레이션합니다.
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
              복음 메시지는<br />
              <em style={{ color: LANG_COLOR }}>언어 장벽 그 이상의 가치가 있습니다.</em>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94' }}>
              "예수 그리스도의 모범을 따라 침례를 받으시겠습니까?" 는 단순한 문장이 아닙니다. 그것은 삶을 바꾸는 초대입니다.
            </p>
            <p className="text-sm" style={{ ...serifFont, color: '#A89F94' }}>
              Language Threshold의 AI 연습 파트너는 실제 복음 토론을 시뮬레이션하여 선교사들이 현지에 도착할 때 준비된 상태가 되도록 합니다.
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
                href="/missionary-japanese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(244,63,94,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇯🇵</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Missionary Japanese</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>The same nine modules — for Japanese-speaking missions in Asia.</p>
              </a>
              <a
                href="/medical-korean"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(168,85,247,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Medical Korean</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>Thirteen clinical modules for Korean-speaking patients.</p>
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>선교지가 당신을 기다립니다</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              조사 대상자들이 한국어로 말합니다.<br />
              <em style={{ color: LANG_COLOR }}>이제 당신도 함께.</em>
            </h2>
            <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#F7F3EC' }}>
              무료로 학습 시작하기 →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>회원가입 불필요. 신용카드 불필요.</p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
