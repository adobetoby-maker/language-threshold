import { useState } from 'react'
import { MISSIONARY_APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MISSIONARY_MODULES, type MissionaryModule, type LangKey } from '../data/missionaryModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const LANG_COLOR = '#3B82F6'
const LANG: LangKey = 'fr'
const APP_URL_LANG = `${MISSIONARY_APP_URL}&lang=fr`

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
        border: open ? `1px solid ${mod.color}40` : `1px solid rgba(59,130,246,0.12)`,
        boxShadow: open ? `0 0 32px -8px ${mod.color}22` : 'none',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-3xl">{mod.emoji}</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ ...sansFont, backgroundColor: `${mod.color}18`, color: mod.color }}>
            {open ? 'Fermer ↑' : 'Développer ↓'}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>{localTitle}</h3>
        <p className="text-sm leading-relaxed" style={{ ...sansFont, color: '#A89F94' }}>{localTagline}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {mod.vocab.slice(0, 4).map(v => (
            <span key={v.en} className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, backgroundColor: `rgba(59,130,246,0.08)`, color: LANG_COLOR, border: `1px solid rgba(59,130,246,0.2)` }}>
              {v.en}
            </span>
          ))}
          {!open && <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>+{mod.vocab.length - 4} de plus</span>}
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: `rgba(59,130,246,0.08)` }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>Vocabulaire complet</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {mod.vocab.map(v => (
              <div key={v.en} className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold" style={{ ...sansFont, color: '#F7F3EC' }}>{v.en}</span>
                <button
                  onClick={e => {
                    const rect = (e.target as HTMLElement).getBoundingClientRect()
                    setTapped({ word: v.fr.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.fr}`, x: rect.left + rect.width / 2, y: rect.bottom })
                  }}
                  style={{ ...sansFont, background: 'none', border: 'none', padding: '0 4px 0 0', cursor: 'pointer', color: mod.color, fontSize: 14, textAlign: 'right', textDecoration: 'underline dotted', textUnderlineOffset: 3 }}
                >
                  {v.fr}
                </button>
              </div>
            ))}
          </div>
          {tapped && <WordCard {...tapped} lang="fr" color={mod.color} onClose={() => setTapped(null)} />}
          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: `rgba(59,130,246,0.06)`, border: `1px solid rgba(59,130,246,0.15)` }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: LANG_COLOR }}>Phrase d'exemple</p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>"{mod.samplePhrase.en}"</p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>"{mod.samplePhrase.fr}"</p>
          </div>
          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>Scénarios de pratique: {mod.scenario}</p>
          <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: mod.color, color: '#F7F3EC' }}>
            Pratiquer {localTitle} en Français →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MissionaryFrench() {
  usePageMeta({ title: "Missionary French — Français Missionnaire", lang: 'fr', canonical: 'https://languagethreshold.com/missionary-french' })
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>Français Missionnaire</span>
              <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
              <span className="text-xs uppercase tracking-[0.25em]" style={{ ...sansFont, color: '#A89F94' }}>Language Threshold</span>
            </div>
            <h1 className="leading-[1.1] mb-6" style={{ ...displayFont, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#F7F3EC' }}>
              Votre champ de mission<br />
              <em style={{ color: LANG_COLOR }}>parle français.</em>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Neuf modules alimentés par l'IA couvrant la Restauration, le Plan du Salut, la recherche, l'engagement baptismal et la vie quotidienne de mission — le langage spécifique du travail missionnaire de l'Église en régions francophones.
            </p>
            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "Mon père et moi sommes allés en mission de service. Nous avons travaillé aux côtés de personnes qui avaient tout ce dont nous avions besoin — sauf une langue commune. Le message de l'Évangile mérite mieux qu'une barrière linguistique." — Toby Anderton, MD
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#F7F3EC' }}>
                Commencer à apprendre — Gratuit →
              </a>
              <a href="#modules" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80" style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}>
                Voir les modules ↓
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
                { stat: '320M+', label: "locuteurs francophones dans le monde — du Canada à l'Afrique de l'Ouest", source: 'Organisation Internationale de la Francophonie' },
                { stat: '15+', label: "missions actives dans les pays francophones — Afrique, Europe et Amériques", source: "L'Église de Jésus-Christ des Saints des Derniers Jours" },
                { stat: 'Semaines', label: "pas des années — le temps d'atteindre l'aisance dans les discussions évangéliques", source: 'Méthode Language Threshold' },
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>Phrases essentielles de mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ ...displayFont, color: '#F7F3EC' }}>
              Neuf phrases que chaque missionnaire doit connaître.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div key={0} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Nous sommes missionnaires de L'Église de Jésus-Christ.</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>We are missionaries of The Church of Jesus Christ.</p>
                </div>
                <div key={1} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Pouvons-nous partager un message avec vous?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Can we share a message with you?</p>
                </div>
                <div key={2} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Dieu vous aime et a un plan pour vous.</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>God loves you and has a plan for you.</p>
                </div>
                <div key={3} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Avez-vous lu dans le Livre de Mormon?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Have you read from the Book of Mormon?</p>
                </div>
                <div key={4} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Nous vous invitons à prier pour savoir si c'est vrai.</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>We invite you to pray to know if it is true.</p>
                </div>
                <div key={5} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Quand pouvons-nous revenir pour continuer?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>When can we come back to continue?</p>
                </div>
                <div key={6} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Souhaiteriez-vous venir à l'église avec nous?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Would you like to come to church with us?</p>
                </div>
                <div key={7} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Avez-vous pensé au baptême?</p>
                  <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Have you thought about baptism?</p>
                </div>
                <div key={8} className="rounded-xl p-4" style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: LANG_COLOR }}>Avez-vous des questions sur ce que nous enseignons?</p>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>Neuf modules de mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              De la première porte<br />
              <em style={{ color: '#C9A84C' }}>aux fonts baptismaux.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Chaque module cible un moment spécifique du cycle missionnaire — trouver, enseigner, engager et retenir. Les partenaires de pratique IA simulent de vraies conversations évangéliques.
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
              Le message de l'Évangile mérite<br />
              <em style={{ color: LANG_COLOR }}>plus qu'une barrière linguistique.</em>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94' }}>
              "Suivrez-vous l'exemple de Jésus-Christ et vous ferez-vous baptiser?" n'est pas qu'une phrase. C'est l'invitation qui change des vies.
            </p>
            <p className="text-sm" style={{ ...serifFont, color: '#A89F94' }}>
              Les partenaires de pratique IA de Language Threshold simulent de vraies discussions évangéliques pour que les missionnaires arrivent sur le terrain prêts.
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
                href="/missionary-german"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(239,68,68,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🇩🇪</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Missionary German</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>The same nine modules — for German-speaking missions in Europe.</p>
              </a>
              <a
                href="/medical-french"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>Medical French</div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>Thirteen clinical modules for French-speaking patients.</p>
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: LANG_COLOR }}>Votre mission vous attend</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Vos investigateurs parlent français.<br />
              <em style={{ color: LANG_COLOR }}>Maintenant vous aussi.</em>
            </h2>
            <a href={APP_URL_LANG} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4" style={{ ...sansFont, backgroundColor: LANG_COLOR, color: '#F7F3EC' }}>
              Commencer à apprendre — Gratuit →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>Sans inscription. Sans carte bancaire.</p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
