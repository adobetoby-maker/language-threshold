import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { CLIMBING_MODULES, type ClimbingModule, GEAR_PHOTOS } from '../data/climbingModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const PORTUGUESE_COLOR = '#00C777'
const CLIMBING_APP_URL = `${APP_URL}?module=gear&lang=pt`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: ClimbingModule }) {
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
            href={CLIMBING_APP_URL}
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

export default function ClimbingPortuguese() {
  usePageMeta({ title: 'Climbing Portuguese', lang: 'pt-BR', canonical: 'https://languagethreshold.com/climbing-portuguese' })
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <polyline points="100,600 250,300 400,450 550,150 650,350" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="600" r="8" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <circle cx="250" cy="300" r="8" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <circle cx="400" cy="450" r="8" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <circle cx="550" cy="150" r="8" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <circle cx="650" cy="350" r="8" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
                Escalada em Português
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
              Escale com qualquer pessoa.<br />
              <em style={{ color: PORTUGUESE_COLOR }}>Fale o idioma deles.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Equipamentos, comandos de segurança, leitura de vias — quatro módulos que cobrem tudo o que
              um guia, instrutor de ginásio ou parceiro de escalada precisa para se comunicar com segurança
              em português brasileiro. As palavras que mantêm seu parceiro seguro, no idioma de 230 milhões de falantes.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "Os comandos de segurança na escalada são vocabulário vital. Quando guia e escalador não
              compartilham um idioma, a checagem de segurança vira suposição. Language Threshold
              existe para resolver isso."
              — Language Threshold
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

      {/* Gear photo grid */}
      <FadeIn>
        <section className="py-16" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-8" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
              Equipamentos que você vai nomear em cada sessão
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {GEAR_PHOTOS.map(g => (
                <div key={g.name} className="group relative rounded-xl overflow-hidden aspect-square">
                  <img
                    src={g.photo}
                    alt={g.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-3"
                    style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 60%)' }}
                  >
                    <p className="text-xs font-bold" style={{ ...sansFont, color: '#F7F3EC' }}>{g.name}</p>
                    <p className="text-xs" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>{g.pt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Modules */}
      <section id="modules" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
                Quatro módulos essenciais
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Equipamento. Segurança. Técnica.<br />
              <em style={{ color: '#C9A84C' }}>Em Português.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Tudo que um guia, instrutor de ginásio ou parceiro de escalada precisa para se comunicar
              de forma clara e segura — a mesma profundidade dos módulos de escalada em espanhol, agora em português.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLIMBING_MODULES.map(mod => (
              <FadeIn key={mod.id}>
                <ModuleCard mod={mod} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Safety callout */}
      <FadeIn>
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="text-4xl mb-6">🧗</div>
            <h2 className="text-3xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Os comandos de segurança são<br />
              <em style={{ color: PORTUGUESE_COLOR }}>vocabulário vital.</em>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94' }}>
              "Escalando!" e "Prende!" não são apenas palavras de vocabulário. São a camada de comunicação
              entre um escalador e seu segurador. Aprendê-las em português significa que você pode
              fazer parceria com qualquer escalador de língua portuguesa, guiar um cliente com segurança,
              ou avisar sobre riscos em uma via no Brasil — da Pedra da Gávea à Serra do Cipó.
            </p>
            <p className="text-sm" style={{ ...serifFont, color: '#A89F94' }}>
              O módulo de Comandos de Segurança do Language Threshold cobre todos os comandos padrão de
              segurança — com simulações de cenários reais de escalada praticados com parceiro de IA.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Cross-links */}
      <FadeIn>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Também no Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href="/climbing-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(76,175,125,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🗺️</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Escalada em Espanhol
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Os mesmos módulos — para parceiros de escalada hispânicos.
                </p>
              </a>
              <a
                href="/climbing-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(76,175,125,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Escalada em Suaíli
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Escalada em suaíli — para parceiros da África Oriental.
                </p>
              </a>
              <a
                href="/medical-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: `1px solid rgba(0,199,119,0.12)`, textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Português Médico
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Treze módulos de especialidade clínica em português brasileiro.
                </p>
              </a>
              <a
                href="/contractor-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: `1px solid rgba(0,199,119,0.12)`, textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🔧</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Construção em Português
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Vocabulário de obra e segurança para equipes lusófonas.
                </p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <section className="py-28 text-center" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-2xl mx-auto px-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
              A parede está esperando
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Seu parceiro fala português.<br />
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
