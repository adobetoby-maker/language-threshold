import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MEDICAL_MODULES, type MedicalModule } from '../data/medicalModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const KOREAN_COLOR = '#6366F1'
const MEDICAL_APP_URL = `${APP_URL}?module=emergency&lang=ko`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: MedicalModule }) {
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
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ ...sansFont, backgroundColor: `${mod.color}18`, color: mod.color }}
          >
            {open ? '닫기 ↑' : '펼치기 ↓'}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
          {mod.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>
          {mod.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span
              key={v.en}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ ...sansFont, backgroundColor: 'rgba(99,102,241,0.08)', color: KOREAN_COLOR, border: '1px solid rgba(99,102,241,0.2)' }}
            >
              {v.en}
            </span>
          ))}
          {!open && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>
              +{mod.vocab.length - 4} 더보기
            </span>
          )}
        </div>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(99,102,241,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>
            전체 어휘
          </p>
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
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: KOREAN_COLOR }}>
              예문
            </p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>
              "{mod.samplePhrase.en}"
            </p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              "{mod.samplePhrase.ko}"
            </p>
          </div>

          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>
            연습 시나리오: {mod.scenario}
          </p>

          <a
            href={MEDICAL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}
          >
            {mod.title} 한국어로 연습하기 →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MedicalKorean() {
  usePageMeta({ title: 'Medical Korean', lang: 'ko', canonical: 'https://languagethreshold.com/medical-korean' })
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <path d="M50 700V300C50 148 148 50 350 50C552 50 650 148 650 300V700" stroke={KOREAN_COLOR} strokeWidth="1.5" />
            <line x1="350" y1="200" x2="350" y2="500" stroke={KOREAN_COLOR} strokeWidth="1.5" />
            <line x1="200" y1="350" x2="500" y2="350" stroke={KOREAN_COLOR} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: KOREAN_COLOR }}>
                의료 한국어
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
              환자들이 이미 사용하는<br />
              <em style={{ color: KOREAN_COLOR }}>한국어를 배우세요.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              응급실, 간호, 정형외과, 산부인과, 외과, 심장내과 — AI로 개발된 13개 모듈이 각 진료과의 전문 어휘를 다룹니다. 단순한 회화 가이드가 아닙니다. 진찰실, 수술실, 병상 곁에서 실제로 필요한 단어들을 한국어로 배웁니다.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "가장 중요한 임상 대화에는 섬세함, 자신감, 그리고 통역사 없이 즉각적으로 답할 수 있는 능력이 필요합니다. 모든 것은 환자들이 매일 사용하는 언어를 배우는 것에서 시작됩니다."
              — Toby Anderton, MD
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: KOREAN_COLOR, color: '#0D0D0D' }}
              >
                무료로 학습 시작하기 →
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                모든 전문 분야 보기 ↓
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
                  stat: '80M+',
                  label: '한국어 사용자 — 한국, 미국, 캐나다, 호주 등 전 세계에 거주하는 한국어 사용 인구',
                  source: '국립국어원 · 재외동포청',
                },
                {
                  stat: '1위',
                  label: '미국 내 아시아계 이민자 집단 중 의료 서비스 이용 시 언어 장벽을 가장 많이 보고하는 그룹 중 하나',
                  source: '미국 보건복지부 소수 민족 건강 사무국',
                },
                {
                  stat: '몇 주',
                  label: '몇 년이 아닌 — 기능별 맞춤 어휘와 AI 연습 파트너로 임상 한국어 유창성 달성 가능',
                  source: 'Language Threshold 방법론',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: KOREAN_COLOR }}>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: KOREAN_COLOR }}>
                13개 전문 모듈
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              각 전문 분야마다.<br />
              <em style={{ color: '#C9A84C' }}>고유한 언어가 있습니다.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              전문 분야를 클릭하면 어휘를 확인하고, 예문을 읽고, AI 연습 세션을 시작할 수 있습니다. 의료 스페인어 모듈과 동일한 임상적 깊이를 한국어로 완벽하게 제공합니다.
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: KOREAN_COLOR }}>
              왜 의료 한국어인가
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              진찰실에서의<br />
              <em style={{ color: '#C9A84C' }}>통역사 문제</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                미국에는 수백만 명의 한국어 사용 환자가 있으며, 특히 캘리포니아, 뉴욕, 뉴저지, 텍사스, 버지니아의 한인 커뮤니티에 집중되어 있습니다. 한국어로 진료하는 의사들은 환자 만족도와 치료 결과 모두에서 현저한 차이를 경험합니다.
              </p>
              <p>
                가장 중요한 임상 대화에는 섬세함이 필요합니다. 동의서 설명, 통증 평가, 퇴원 지시, 산전 교육 — 이러한 상호작용은 환자의 언어로 즉각적으로 질문에 답할 수 있는 능력을 요구합니다.
              </p>
              <p>
                Language Threshold는 의료 스페인어에서 사용된 것과 동일한 기능별 맞춤 방법론을 한국어에 적용합니다. 각 모듈은 실제 임상 어휘로 구성되어 있습니다. 각 시나리오는 교과서 연습이 아닌 실제 임상 진료 상황을 반영합니다.
              </p>
              <p style={{ color: '#F7F3EC' }}>
                서울에서 진료하든, 로스앤젤레스의 한인 커뮤니티에서 환자를 돌보든 — 환자들이 매일 사용하는 언어가 바로 먼저 배워야 할 언어입니다.
              </p>
            </div>
            <div className="mt-6 text-sm" style={{ ...sansFont, color: '#A89F94' }}>
              — Toby Anderton, MD · 언어학 학사, BYU · 정형외과 전문의 · Language Threshold 설립자
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              의료 한국어의 작동 방식
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '전문 분야를 선택하세요', body: '응급실, 간호, 정형외과, 산부인과, 외과, 심장내과, 물리치료, 통증 관리, 원무과, 사회복지 등 다양한 분야 중에서 선택하세요. 각 모듈은 실제 임상 어휘로 구성되어 있으며, 이제 한국어로 제공됩니다.' },
              { step: '02', title: 'AI와 함께 연습하세요', body: 'AI 파트너가 한국어를 사용하는 환자, 보호자 또는 동료 역할을 합니다. 세션은 통증 평가, 동의서 설명, 퇴원 지시, 응급실 초진 등 실제 임상 상황을 시뮬레이션합니다.' },
              { step: '03', title: '병상 곁에서 말하세요', body: '수업 연도가 아닌 몇 주간의 일일 연습으로 충분합니다. Language Threshold는 다음 학기가 아닌 다음 주 월요일에 한국어가 필요한 임상의들을 위해 설계되었습니다.' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(99,102,241,0.3)' }}>
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
                의료 한국어 — 빠른 참조
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                임상에서 가장 중요한 표현들
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'How long have you had this pain?', ko: '이 통증이 생긴 지 얼마나 되셨나요?' },
                { en: 'Are you allergic to any medications?', ko: '약물에 알레르기가 있으신가요?' },
                { en: 'Take this medication twice a day with food.', ko: '이 약은 하루에 두 번 식사와 함께 복용하십시오.' },
                { en: 'Do not eat or drink before your surgery.', ko: '수술 전에는 아무것도 드시거나 마시면 안 됩니다.' },
                { en: 'Your test results came back normal.', ko: '검사 결과가 정상으로 나왔습니다.' },
                { en: 'I need to examine your abdomen.', ko: '복부를 진찰해야 합니다.' },
                { en: 'Do you have health insurance?', ko: '건강 보험이 있으신가요?' },
                { en: 'Please sign this consent form.', ko: '이 동의서에 서명해 주십시오.' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(99,102,241,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>{phrase.ko}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ ...sansFont, color: '#A89F94' }}>
                이것은 시작 표현들입니다. 앱에서는 수백 개의 표현을 임상 맥락 속에서, AI의 발음 및 문법 피드백과 함께 배울 수 있습니다.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
              >
                앱에서 모두 연습하기 →
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
              Language Threshold에서 더 보기
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <a
                href="/medical-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  의료 스페인어
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  동일한 13개 모듈 — 미국 내 히스패닉 환자를 위한.
                </p>
              </a>
              <a
                href="/medical-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇧🇷</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  의료 포르투갈어
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  동일한 13개 모듈 — 브라질 및 포르투갈어권 환자를 위한.
                </p>
              </a>
              <a
                href="/medical-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,191,165,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  의료 스와힐리어
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  동일한 13개 모듈 — 동아프리카 환자를 위한.
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
              <path d="M50 600V260C50 130 130 50 300 50C470 50 550 130 550 260V600" stroke={KOREAN_COLOR} strokeWidth="1.5" />
              <line x1="300" y1="150" x2="300" y2="450" stroke={KOREAN_COLOR} strokeWidth="1.5" />
              <line x1="150" y1="300" x2="450" y2="300" stroke={KOREAN_COLOR} strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: KOREAN_COLOR }}>
              진찰실이 기다리고 있습니다
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              환자들은 한국어로 말합니다.<br />
              <em style={{ color: KOREAN_COLOR }}>이제 당신도 할 수 있습니다.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              병상 곁에서 언어를 배웠으면 하고 후회할 때까지 기다리지 마세요.
              당신의 전문 분야부터 시작하세요. 거기서 쌓아가세요.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: KOREAN_COLOR, color: '#0D0D0D' }}
            >
              무료로 학습 시작하기 →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              회원가입 불필요. 신용카드 불필요. 전문 분야를 선택하고 시작하세요.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
