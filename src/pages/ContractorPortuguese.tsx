import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { CONSTRUCTION_MODULES, type ConstructionModule } from '../data/constructionModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const PORTUGUESE_COLOR = '#00C777'
const CONTRACTOR_APP_URL = `${APP_URL}?module=framer&lang=pt`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: ConstructionModule }) {
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
            Cenários de prática: {mod.scenario}
          </p>

          <a
            href={CONTRACTOR_APP_URL}
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

export default function ContractorPortuguese() {
  usePageMeta({ title: 'Contractor Portuguese', lang: 'pt-BR', canonical: 'https://languagethreshold.com/contractor-portuguese' })
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <rect x="100" y="300" width="500" height="300" rx="8" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <path d="M100 300L350 100L600 300" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <line x1="280" y1="450" x2="280" y2="600" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            <line x1="420" y1="450" x2="420" y2="600" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
                Português para Obras
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
              O português que mantém<br />
              <em style={{ color: PORTUGUESE_COLOR }}>a obra funcionando.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Estrutura, segurança, encanamento, drywall, elétrica — nove módulos com IA desenvolvidos
              para o vocabulário específico de cada função. Não são guias de frases. São as palavras
              que você realmente precisa no canteiro de obras, na reunião de segurança e na inspeção
              — em português brasileiro.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "Na construção civil, uma instrução mal compreendida não é apenas ineficiente — é
              perigosa. O idioma correto salva tempo, previne acidentes e constrói respeito mútuo."
              — Toby Anderton, MD · Fundador, Language Threshold
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: PORTUGUESE_COLOR, color: '#0D0D0D' }}
              >
                Comece a Aprender — É Gratuito →
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                Ver Todas as Funções ↓
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
                  stat: '1.4M+',
                  label: 'trabalhadores brasileiros na construção civil nos EUA — a maior comunidade de construtores lusófonos fora do Brasil',
                  source: 'American Immigration Council',
                },
                {
                  stat: 'NR-35',
                  label: 'norma brasileira para trabalho em altura — equivalente à OSHA, exige comunicação clara para cumprimento obrigatório',
                  source: 'Ministério do Trabalho e Emprego',
                },
                {
                  stat: 'Semanas',
                  label: 'não anos — para alcançar fluência funcional no canteiro com vocabulário específico por função e parceiros de prática com IA',
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

      {/* Module magazine */}
      <section id="modules" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
                Nove módulos por função
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Cada função.<br />
              <em style={{ color: '#C9A84C' }}>Sua própria linguagem.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Clique em qualquer função para ver o vocabulário, ler frases de exemplo e iniciar
              uma sessão de prática com IA. Desenvolvido para encarregados, trabalhadores de campo
              e gerentes que precisam se comunicar claramente no canteiro de obras.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONSTRUCTION_MODULES.map(mod => (
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
              Por que Português para Obras
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              O problema da comunicação<br />
              <em style={{ color: '#C9A84C' }}>no canteiro de obras</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                A indústria da construção civil dos Estados Unidos emprega mais de 1,4 milhão de
                trabalhadores brasileiros. Do leste de Massachusetts às obras de Miami e Dallas,
                o português é a língua dos canteiros — e a comunicação clara é a diferença entre
                segurança e acidente, entre eficiência e retrabalho.
              </p>
              <p>
                Encarregados, mestres de obras e inspetores que falam português fluente constroem
                relações mais sólidas com suas equipes, reduzem incidentes de segurança e cumprem
                os cronogramas com mais consistência. O idioma correto no momento certo evita erros
                caros — e pode salvar vidas.
              </p>
              <p>
                O Language Threshold aplica a mesma metodologia específica por função usada no
                Espanhol para Obras ao português brasileiro. Cada módulo é construído com o
                vocabulário real dos ofícios da construção civil. Cada cenário reflete situações
                reais de obra — não exercícios de livro.
              </p>
              <p style={{ color: '#F7F3EC' }}>
                Seja você gerenciando equipes brasileiras em Boston, servindo comunidades lusófonas
                nos EUA, ou trabalhando em projetos de construção no Brasil — o idioma que sua
                equipe usa todo dia é o idioma que você deve aprender primeiro.
              </p>
            </div>
            <div className="mt-6 text-sm" style={{ ...sansFont, color: '#A89F94' }}>
              — Toby Anderton, MD · B.A. Linguística, BYU · Fundador, Language Threshold
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              Como funciona o Português para Obras
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Escolha sua função', body: 'Selecione entre estrutura, segurança, encanamento, drywall, elétrica, motorista, paisagismo, mecânica automotiva e muito mais. Cada módulo é construído com o vocabulário real de cada ofício — agora em português brasileiro.' },
              { step: '02', title: 'Pratique com IA', body: 'Seu parceiro de IA interpreta um trabalhador, empreiteiro ou inspetor que fala português. As sessões simulam situações reais de obra — briefings de segurança, leitura de plantas, instruções de campo, reporte de incidentes.' },
              { step: '03', title: 'Fale no canteiro', body: 'Semanas de prática diária, não anos de estudo em sala de aula. O Language Threshold é desenvolvido para profissionais que precisam usar o português na segunda-feira, não no próximo semestre.' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(0,199,119,0.3)' }}>
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
                Português para obras — referência rápida
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                As frases mais importantes no canteiro
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'Put on your hard hat before entering.', pt: 'Coloque o capacete antes de entrar.' },
                { en: 'Where is the shutoff valve?', pt: 'Onde fica o registro de fechamento?' },
                { en: 'The blueprint shows a load-bearing wall here.', pt: 'A planta mostra uma parede estrutural aqui.' },
                { en: 'We need to pour the concrete today.', pt: 'Precisamos concretar hoje.' },
                { en: 'Check the plumb on that wall.', pt: 'Verifique o prumo dessa parede.' },
                { en: 'Turn off the main breaker before we start.', pt: 'Desligue o disjuntor principal antes de começar.' },
                { en: 'The inspector needs to sign off on this.', pt: 'O fiscal precisa liberar isso.' },
                { en: 'We are behind schedule — work overtime tonight.', pt: 'Estamos atrasados — precisamos fazer hora extra hoje à noite.' },
                { en: 'No one goes above six feet without a harness.', pt: 'Ninguém sobe acima de dois metros sem cinto de segurança.' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>{phrase.pt}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ ...sansFont, color: '#A89F94' }}>
                Estas são frases iniciais. O app ensina centenas mais, em contexto de obra, com feedback de IA sobre sua pronúncia e gramática.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
              >
                Pratique todas no app →
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
              Também no Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <a
                href="/contractor-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🔨</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Espanhol para Obras
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Os mesmos nove módulos — para equipes de construção hispânicas.
                </p>
              </a>
              <a
                href="/contractor-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,191,165,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Suaíli para Obras
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Os mesmos nove módulos — para equipes da África Oriental.
                </p>
              </a>
              <a
                href="/medical-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: `1px solid rgba(0,199,119,0.15)`, textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Português Médico
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Treze especialidades clínicas — para profissionais de saúde que atendem pacientes lusófonos.
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
              <rect x="80" y="250" width="440" height="270" rx="8" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
              <path d="M80 250L300 80L520 250" stroke={PORTUGUESE_COLOR} strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: PORTUGUESE_COLOR }}>
              O canteiro está esperando
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Sua equipe fala português.<br />
              <em style={{ color: PORTUGUESE_COLOR }}>Agora você também pode.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              Não espere até estar no canteiro desejando ter aprendido o idioma.
              Comece pela sua função. Construa a partir daí.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: PORTUGUESE_COLOR, color: '#0D0D0D' }}
            >
              Comece a Aprender — É Gratuito →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              Sem cadastro. Sem cartão de crédito. Escolha sua função e comece.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
