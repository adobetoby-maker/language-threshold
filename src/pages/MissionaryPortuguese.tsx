import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MISSIONARY_MODULES, type MissionaryModule } from '../data/missionaryModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const PORTUGUESE_COLOR = '#00C777'
const MISSIONARY_APP_URL = `${APP_URL}?module=restoration&lang=pt`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: MissionaryModule }) {
  const [open, setOpen] = useState(false)
  const [tapped, setTapped] = useState<TappedWord | null>(null)
  return (
    <div
      className="rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#161616',
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(0,199,119,0.12)`,
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
            {open ? 'Fechar ↑' : 'Expandir ↓'}
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
              style={{ ...sansFont, backgroundColor: 'rgba(0,199,119,0.08)', color: PORTUGUESE_COLOR, border: '1px solid rgba(0,199,119,0.2)' }}
            >
              {v.en}
            </span>
          ))}
          {!open && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>
              +{mod.vocab.length - 4} mais
            </span>
          )}
        </div>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(0,199,119,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>
            Vocabulário completo
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {mod.vocab.map(v => (
              <div key={v.en} className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{v.en}</span>
                <button
                  onClick={e => {
                    const rect = (e.target as HTMLElement).getBoundingClientRect()
                    setTapped({ word: v.pt.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.pt}`, x: rect.left + rect.width / 2, y: rect.bottom })
                  }}
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: mod.color, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.pt}
                </button>
              </div>
            ))}
          </div>
          {tapped && <WordCard {...tapped} lang="pt" color={mod.color} onClose={() => setTapped(null)} />}

          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(0,199,119,0.06)', border: '1px solid rgba(0,199,119,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
              Frase de exemplo
            </p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>
              "{mod.samplePhrase.en}"
            </p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              "{mod.samplePhrase.pt}"
            </p>
          </div>

          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>
            Cenários práticos: {mod.scenario}
          </p>

          <a
            href={MISSIONARY_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}
          >
            Praticar {mod.title} em Português →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MissionaryPortuguese() {
  usePageMeta({ title: 'Missionary Portuguese', lang: 'pt-BR', canonical: 'https://languagethreshold.com/missionary-portuguese' })
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <circle cx="350" cy="350" r="280" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <ellipse cx="350" cy="350" rx="140" ry="280" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <ellipse cx="350" cy="350" rx="280" ry="110" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <line x1="70" y1="350" x2="630" y2="350" stroke={PORTUGUESE_COLOR} strokeWidth="1" />
            <line x1="350" y1="70" x2="350" y2="630" stroke={PORTUGUESE_COLOR} strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
                Missionário em Português
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
              O Brasil está esperando.<br />
              <em style={{ color: PORTUGUESE_COLOR }}>Fale o idioma deles.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Nove módulos com IA cobrindo a Restauração, o Plano de Salvação, contato, compromisso
              batismal e a vida missionária diária — o vocabulário específico do trabalho missionário
              SUD em português brasileiro. Construído para as missões do Brasil, Portugal e Angola.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "A mensagem do evangelho merece mais do que uma barreira linguística. Quando você
              pode compartilhá-la no idioma do investigador, a conversa deixa de ser entre um
              estrangeiro e um local — ela se torna entre duas pessoas." — Language Threshold
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: PORTUGUESE_COLOR, color: '#0D0D0D' }}
              >
                Começar a Aprender — É Gratuito →
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                Ver Todos os Módulos ↓
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: '1M+',
                  label: 'membros SUD no Brasil — o maior campo de missão fora dos EUA e um dos países com maior crescimento da Igreja',
                  source: 'A Igreja de Jesus Cristo dos Santos dos Últimos Dias',
                },
                {
                  stat: '35+',
                  label: 'missões ativas no Brasil e países lusófonos — Portugal, Angola, Moçambique, Cabo Verde',
                  source: 'A Igreja de Jesus Cristo dos Santos dos Últimos Dias',
                },
                {
                  stat: 'Semanas',
                  label: 'não anos — para alcançar fluência em discussões do evangelho com prática em português específica para missões, com IA',
                  source: 'Método Language Threshold',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: PORTUGUESE_COLOR }}>
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

      {/* Quick-reference phrases */}
      <FadeIn>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
                Frases essenciais da missão
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ ...displayFont, color: '#F7F3EC' }}>
              Nove frases que todo missionário precisa<br />
              <em style={{ color: PORTUGUESE_COLOR }}>em português.</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { pt: 'Somos missionários da Igreja de Jesus Cristo dos Santos dos Últimos Dias.', en: 'We are missionaries of The Church of Jesus Christ of Latter-day Saints.' },
                { pt: 'Podemos compartilhar uma mensagem com você?', en: 'Can we share a message with you?' },
                { pt: 'Deus te ama e tem um plano para a sua vida.', en: 'God loves you and has a plan for your life.' },
                { pt: 'Você já leu no Livro de Mórmon?', en: 'Have you read from the Book of Mormon?' },
                { pt: 'Nós te convidamos a orar para saber se é verdade.', en: 'We invite you to pray to know if it is true.' },
                { pt: 'Quando podemos voltar para continuar?', en: 'When can we come back to continue?' },
                { pt: 'Você gostaria de vir à igreja conosco?', en: 'Would you like to come to church with us?' },
                { pt: 'Você já pensou sobre o batismo?', en: 'Have you thought about baptism?' },
                { pt: 'Você tem alguma pergunta sobre o que estamos ensinando?', en: 'Do you have any questions about what we are teaching?' },
              ].map((phrase, i) => (
                <div key={i} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>{phrase.pt}</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>{phrase.en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Modules */}
      <section id="modules" className="py-28" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
                Nove módulos de missão
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Da primeira porta<br />
              <em style={{ color: '#C9A84C' }}>à pia batismal.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Cada módulo foca em um momento específico do ciclo missionário — contato, ensino,
              compromisso e retenção. Parceiros de prática com IA simulam conversas reais sobre o
              evangelho em português para que você esteja pronto antes de tocar a campainha.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MISSIONARY_MODULES.map(mod => (
              <FadeIn key={mod.id}>
                <ModuleCard mod={mod} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <FadeIn>
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="text-4xl mb-6">🌎</div>
            <h2 className="text-3xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              A conversa do evangelho muda<br />
              <em style={{ color: PORTUGUESE_COLOR }}>quando é no idioma deles.</em>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94' }}>
              "Você seguirá o exemplo de Jesus Cristo e será batizado?" não é apenas uma frase.
              É o convite que muda vidas. Quando os missionários podem fazê-lo com clareza e
              carinho — em português, no idioma do coração do investigador — a conversa muda por
              completo. O Brasil tem mais de 35 missões ativas. Language Threshold foi construído
              para que você chegue pronto.
            </p>
            <p className="text-sm" style={{ ...serifFont, color: '#A89F94' }}>
              Os parceiros de prática com IA do Language Threshold simulam discussões reais do evangelho
              em português para que os missionários cheguem ao Brasil preparados — não ainda aprendendo
              com seus investigadores.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Cross-links */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Também no Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href="/missionary-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(124,58,237,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌎</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Missionário Espanhol
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Os mesmos nove módulos — para missões na América Latina e EUA em espanhol.
                </p>
              </a>
              <a
                href="/missionary-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: `1px solid rgba(0,199,119,0.12)`, textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Missionário Suaíli
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Os mesmos nove módulos — para missões na África Oriental em suaíli.
                </p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <section className="py-28 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
              Sua missão está esperando
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Seus investigadores falam português.<br />
              <em style={{ color: PORTUGUESE_COLOR }}>Agora você também pode.</em>
            </h2>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: PORTUGUESE_COLOR, color: '#0D0D0D' }}
            >
              Começar a Aprender — É Gratuito →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              Sem cadastro. Sem cartão de crédito.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
