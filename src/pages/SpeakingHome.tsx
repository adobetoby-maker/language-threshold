import { Link } from 'react-router-dom'
import { displayFont, sansFont } from '../constants'
import { resolveLanguageUnits } from '../features/speaking/domain/catalog'
import { SPEAKING_SCENARIOS } from '../features/speaking/domain/scenarios'

const SPECIALTY = {
  construction: { label: 'Construction', color: '#FF7A4A', icon: '🏗️' },
  missionary: { label: 'Missionary', color: '#C9A84C', icon: '📖' },
} as const

export default function SpeakingHome() {
  return (
    <main style={{ background: '#0D0D0D', color: '#F7F3EC', minHeight: '100vh', maxWidth: 620, margin: '0 auto', padding: 'max(env(safe-area-inset-top), 20px) 18px 48px' }}>
      <header style={{ marginBottom: 28 }}>
        <Link to="/app" style={{ ...sansFont, color: '#A89F94', textDecoration: 'none', fontSize: 14 }}>← Back to learning</Link>
        <div style={{ ...sansFont, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 11, fontWeight: 800, marginTop: 28 }}>
          Speaking Engine · Foundation preview
        </div>
        <h1 style={{ ...displayFont, fontSize: 'clamp(30px, 8vw, 46px)', lineHeight: 1.05, margin: '10px 0 12px' }}>Handle the situation.</h1>
        <p style={{ ...sansFont, color: '#A89F94', lineHeight: 1.6, margin: 0, maxWidth: 520 }}>
          Six versioned Spanish missions now share canonical vocabulary with the existing curriculum. Choose one to inspect its objectives and run a private microphone check.
        </p>
      </header>

      <section aria-label="Spanish speaking missions" style={{ display: 'grid', gap: 14 }}>
        {SPEAKING_SCENARIOS.map(scenario => {
          const specialty = SPECIALTY[scenario.specialty]
          const vocabulary = resolveLanguageUnits(scenario.vocabularyUnitIds)
          return (
            <article key={scenario.id} style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span style={{ ...sansFont, color: specialty.color, fontSize: 12, fontWeight: 800 }}>{specialty.icon} {specialty.label}</span>
                <span style={{ ...sansFont, color: '#71717A', fontSize: 11 }}>{scenario.level} · {scenario.quickMinutes}–{scenario.targetMinutes} min</span>
              </div>
              <h2 style={{ ...displayFont, fontSize: 22, margin: '12px 0 7px' }}>{scenario.title}</h2>
              <p style={{ ...sansFont, color: '#A89F94', lineHeight: 1.55, fontSize: 14, margin: '0 0 14px' }}>{scenario.summary}</p>
              <div aria-label="Linked vocabulary" style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {vocabulary.slice(0, 4).map(unit => (
                  <span key={unit.id} style={{ ...sansFont, fontSize: 11, color: '#D7D0C5', background: 'rgba(255,255,255,0.05)', borderRadius: 999, padding: '5px 8px' }}>
                    {unit.displayForm}
                  </span>
                ))}
              </div>
              <Link
                to={`/app/speak/${scenario.scenarioId}`}
                style={{ ...sansFont, display: 'inline-flex', color: '#0D0D0D', background: specialty.color, borderRadius: 10, padding: '10px 14px', fontWeight: 800, fontSize: 13, textDecoration: 'none' }}
              >
                View mission →
              </Link>
            </article>
          )
        })}
      </section>
    </main>
  )
}
