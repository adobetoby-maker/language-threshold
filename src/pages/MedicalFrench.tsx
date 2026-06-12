import { useState } from 'react'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'
import { MEDICAL_MODULES, type MedicalModule } from '../data/medicalModules'
import FadeIn from '../components/FadeIn'
import WordCard from '../components/WordCard'
import { usePageMeta } from '../hooks/usePageMeta'

const FRENCH_COLOR = '#3B82F6'
const MEDICAL_APP_URL = `${APP_URL}?module=emergency&lang=fr`

interface TappedWord { word: string; sentence: string; x: number; y: number }

function ModuleCard({ mod }: { mod: MedicalModule }) {
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
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ ...sansFont, backgroundColor: `${mod.color}18`, color: mod.color }}
          >
            {open ? 'Fermer ↑' : 'Développer ↓'}
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
              style={{ ...sansFont, backgroundColor: 'rgba(59,130,246,0.08)', color: FRENCH_COLOR, border: '1px solid rgba(59,130,246,0.2)' }}
            >
              {v.en}
            </span>
          ))}
          {!open && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ ...sansFont, color: '#A89F94' }}>
              +{mod.vocab.length - 4} de plus
            </span>
          )}
        </div>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(59,130,246,0.08)' }} onClick={e => e.stopPropagation()}>
          <p className="text-xs uppercase tracking-widest mt-5 mb-3" style={{ ...sansFont, color: '#A89F94' }}>
            Vocabulaire complet
          </p>
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

          <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)' }}>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ ...sansFont, color: FRENCH_COLOR }}>
              Phrase d'exemple
            </p>
            <p className="text-sm italic leading-relaxed mb-2" style={{ ...serifFont, color: '#F7F3EC' }}>
              "{mod.samplePhrase.en}"
            </p>
            <p className="text-sm leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              "{mod.samplePhrase.fr}"
            </p>
          </div>

          <p className="text-xs mb-4" style={{ ...sansFont, color: '#A89F94' }}>
            Scénarios de pratique : {mod.scenario}
          </p>

          <a
            href={MEDICAL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ ...sansFont, backgroundColor: mod.color, color: '#0D0D0D' }}
          >
            Pratiquer {mod.title} en Français →
          </a>
        </div>
      )}
    </div>
  )
}

export default function MedicalFrench() {
  usePageMeta({ title: 'Medical French', lang: 'fr', canonical: 'https://languagethreshold.com/medical-french' })
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
            <path d="M50 700V300C50 148 148 50 350 50C552 50 650 148 650 300V700" stroke={FRENCH_COLOR} strokeWidth="1.5" />
            <line x1="350" y1="200" x2="350" y2="500" stroke={FRENCH_COLOR} strokeWidth="1.5" />
            <line x1="200" y1="350" x2="500" y2="350" stroke={FRENCH_COLOR} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: FRENCH_COLOR }}>
                Français Médical
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
              Le français que vos<br />
              <em style={{ color: FRENCH_COLOR }}>patients parlent déjà.</em>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-4" style={{ ...sansFont, color: '#A89F94', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Urgences, soins infirmiers, orthopédie, obstétrique, chirurgie, cardiologie — treize modules
              enrichis par l'IA, conçus pour le vocabulaire propre à chaque spécialité. Ce ne sont pas des
              guides de conversation. Ce sont les mots dont vous avez vraiment besoin en salle d'examen,
              au bloc opératoire et au chevet du patient — en français.
            </p>

            <p className="max-w-xl text-base leading-relaxed mb-10 italic" style={{ ...serifFont, color: '#A89F94' }}>
              "Les échanges cliniques les plus importants exigent de la nuance, de la confiance et la
              capacité de répondre aux questions sur le moment — sans interprète. Tout commence par
              l'apprentissage de la langue que vos patients utilisent chaque jour."
              — Toby Anderton, MD
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: FRENCH_COLOR, color: '#0D0D0D' }}
              >
                Commencer à apprendre — Gratuit →
              </a>
              <a
                href="#modules"
                className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
                style={{ ...sansFont, color: '#F7F3EC', border: '1px solid rgba(247,243,236,0.2)' }}
              >
                Voir toutes les spécialités ↓
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
                  stat: '320M+',
                  label: 'locuteurs francophones dans le monde — langue officielle sur cinq continents',
                  source: 'Organisation Internationale de la Francophonie',
                },
                {
                  stat: '29',
                  label: 'pays où le français est langue officielle, dont la France, la Belgique, la Suisse, le Canada, et de nombreux pays africains',
                  source: 'Organisation Internationale de la Francophonie',
                },
                {
                  stat: 'Semaines',
                  label: 'pas des années — pour atteindre une aisance clinique fonctionnelle grâce à un vocabulaire spécialisé et des partenaires de pratique IA',
                  source: 'Méthode Language Threshold',
                },
              ].map(item => (
                <div key={item.stat} className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ ...displayFont, color: FRENCH_COLOR }}>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: FRENCH_COLOR }}>
                Treize modules de spécialité
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...displayFont, color: '#F7F3EC' }}>
              Chaque spécialité.<br />
              <em style={{ color: '#C9A84C' }}>Son propre langage.</em>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ ...sansFont, color: '#A89F94' }}>
              Cliquez sur une spécialité pour voir le vocabulaire, lire des phrases d'exemple et démarrer
              une session de pratique avec l'IA. La même profondeur clinique que nos modules d'espagnol
              — entièrement adaptée au français médical.
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: FRENCH_COLOR }}>
              Pourquoi le Français Médical
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8" style={{ ...displayFont, color: '#F7F3EC' }}>
              Le problème de l'interprète<br />
              <em style={{ color: '#C9A84C' }}>en salle d'examen</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ ...serifFont, color: '#A89F94' }}>
              <p>
                Avec plus de 320 millions de locuteurs, le français est la cinquième langue la plus parlée
                dans le monde. Pour les cliniciens exerçant en France, en Belgique, en Suisse, au Canada,
                ou dans les communautés francophones d'Afrique subsaharienne, la maîtrise de la langue
                est indispensable.
              </p>
              <p>
                Les échanges cliniques les plus importants exigent de la nuance. Consentement éclairé,
                évaluation de la douleur, instructions de sortie, éducation prénatale — ces interactions
                nécessitent la capacité de répondre aux questions sur le moment, dans la langue du patient.
              </p>
              <p>
                Language Threshold applique la même méthodologie spécialisée utilisée pour l'Espagnol
                Médical au français. Chaque module est construit avec un vrai vocabulaire clinique. Chaque
                scénario reflète de vraies consultations — pas des exercices de manuel.
              </p>
              <p style={{ color: '#F7F3EC' }}>
                Que vous exerciez à Paris, à Montréal, à Dakar, ou auprès de patients francophones en
                diaspora — la langue que vos patients utilisent chaque jour est celle que vous devez
                apprendre en premier.
              </p>
            </div>
            <div className="mt-6 text-sm" style={{ ...sansFont, color: '#A89F94' }}>
              — Toby Anderton, MD · B.A. Linguistique, BYU · Chirurgien Orthopédique · Fondateur, Language Threshold
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ ...displayFont, color: '#F7F3EC' }}>
              Comment fonctionne le Français Médical
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choisissez votre spécialité', body: 'Sélectionnez parmi les urgences, les soins infirmiers, l\'orthopédie, l\'obstétrique, la chirurgie, la cardiologie, la kinésithérapie, la gestion de la douleur, l\'accueil médical, le travail social et bien plus encore. Chaque module est construit avec un vrai vocabulaire clinique — en français.' },
              { step: '02', title: 'Pratiquez avec l\'IA', body: 'Votre partenaire IA joue le rôle d\'un patient, d\'un proche ou d\'un collègue francophone. Les sessions simulent de vraies consultations cliniques — évaluation de la douleur, consentement éclairé, instructions de sortie, triage aux urgences.' },
              { step: '03', title: 'Parlez au chevet du patient', body: 'Des semaines de pratique quotidienne, pas des années d\'études en classe. Language Threshold est conçu pour les cliniciens qui ont besoin du français dès lundi, pas le semestre prochain.' },
            ].map(item => (
              <FadeIn key={item.step}>
                <div>
                  <div className="text-5xl font-bold mb-3" style={{ ...displayFont, color: 'rgba(59,130,246,0.3)' }}>
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
                Français Médical — référence rapide
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3" style={{ ...displayFont, color: '#F7F3EC' }}>
                Les phrases les plus importantes en clinique
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'Where does it hurt?', fr: 'Où avez-vous mal ?' },
                { en: 'How long have you had this pain?', fr: 'Depuis combien de temps avez-vous cette douleur ?' },
                { en: 'Are you allergic to any medications?', fr: 'Êtes-vous allergique à des médicaments ?' },
                { en: 'Take this medication twice a day with food.', fr: 'Prenez ce médicament deux fois par jour au cours des repas.' },
                { en: 'Do not eat or drink before your surgery.', fr: 'Ne mangez ni ne buvez rien avant votre opération.' },
                { en: 'Your test results came back normal.', fr: 'Les résultats de vos examens sont normaux.' },
                { en: 'I need to examine your abdomen.', fr: 'Je dois examiner votre abdomen.' },
                { en: 'Do you have health insurance?', fr: 'Avez-vous une assurance maladie / une mutuelle ?' },
                { en: 'Please sign this consent form.', fr: 'Veuillez signer ce formulaire de consentement éclairé.' },
              ].map(phrase => (
                <div
                  key={phrase.en}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#161616', border: '1px solid rgba(59,130,246,0.1)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ ...sansFont, color: '#F7F3EC' }}>{phrase.en}</p>
                  <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>{phrase.fr}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ ...sansFont, color: '#A89F94' }}>
                Ce sont des phrases de départ. L'application en enseigne des centaines d'autres, en contexte clinique, avec des retours de l'IA sur votre prononciation et votre grammaire.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
              >
                Pratiquez-les toutes dans l'app →
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
              Aussi sur Language Threshold
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <a
                href="/medical-spanish"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(74,158,255,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Espagnol Médical
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Les mêmes treize modules — pour les patients hispanophones.
                </p>
              </a>
              <a
                href="/medical-portuguese"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(0,199,119,0.15)', textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Portugais Médical
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Les mêmes treize modules — pour les patients lusophones.
                </p>
              </a>
              <a
                href="/medical-swahili"
                className="group block p-6 rounded-2xl transition-all"
                style={{ backgroundColor: '#161616', border: `1px solid rgba(0,191,165,0.15)`, textDecoration: 'none' }}
              >
                <div className="text-2xl mb-2">🌐</div>
                <div className="text-lg font-bold mb-1" style={{ ...displayFont, color: '#F7F3EC' }}>
                  Swahili Médical
                </div>
                <p className="text-sm" style={{ ...sansFont, color: '#A89F94' }}>
                  Les mêmes treize modules — pour les patients d'Afrique de l'Est.
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
              <path d="M50 600V260C50 130 130 50 300 50C470 50 550 130 550 260V600" stroke={FRENCH_COLOR} strokeWidth="1.5" />
              <line x1="300" y1="150" x2="300" y2="450" stroke={FRENCH_COLOR} strokeWidth="1.5" />
              <line x1="150" y1="300" x2="450" y2="300" stroke={FRENCH_COLOR} strokeWidth="1.5" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto px-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ ...sansFont, color: FRENCH_COLOR }}>
              La salle d'examen vous attend
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ ...displayFont, color: '#F7F3EC' }}>
              Vos patients parlent français.<br />
              <em style={{ color: FRENCH_COLOR }}>Vous aussi, maintenant.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ ...sansFont, color: '#A89F94' }}>
              N'attendez pas d'être au chevet d'un patient en regrettant de ne pas avoir appris la langue.
              Commencez par votre spécialité. Construisez à partir de là.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 mb-4"
              style={{ ...sansFont, backgroundColor: FRENCH_COLOR, color: '#0D0D0D' }}
            >
              Commencer à apprendre — Gratuit →
            </a>
            <p className="text-xs" style={{ ...sansFont, color: '#A89F94' }}>
              Sans inscription. Sans carte bancaire. Choisissez votre spécialité et commencez.
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
