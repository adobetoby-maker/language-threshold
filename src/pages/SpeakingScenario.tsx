import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { displayFont, sansFont } from '../constants'
import { resolveAvailableLanguageUnits } from '../features/speaking/domain/catalog'
import { findScenario } from '../features/speaking/domain/scenarios'
import type { FeedbackLanguage } from '../features/speaking/domain/types'
import { useMicrophoneCheck } from '../features/speaking/hooks/useMicrophoneCheck'
import { useSpeakingCapabilities } from '../features/speaking/hooks/useSpeakingCapabilities'

const FEEDBACK_OPTIONS: Array<{ value: FeedbackLanguage; label: string }> = [
  { value: 'english', label: 'English coaching' },
  { value: 'target', label: 'Spanish coaching' },
  { value: 'adaptive', label: 'Adaptive coaching' },
]

export default function SpeakingScenario() {
  const { scenarioId = '' } = useParams()
  const scenario = findScenario(scenarioId)
  const [feedbackLanguage, setFeedbackLanguage] = useState<FeedbackLanguage>('adaptive')
  const [ageConfirmed, setAgeConfirmed] = useState(false)
  const microphone = useMicrophoneCheck()
  const capabilities = useSpeakingCapabilities()
  const resetMicrophone = microphone.reset

  useEffect(() => {
    if (!ageConfirmed) resetMicrophone()
  }, [ageConfirmed, resetMicrophone])

  if (!scenario) {
    return (
      <main style={{ ...sansFont, background: '#0D0D0D', color: '#F7F3EC', minHeight: '100vh', padding: 24 }}>
        <h1>Speaking mission not found</h1>
        <Link to="/app/speak" style={{ color: '#C9A84C' }}>Return to speaking missions</Link>
      </main>
    )
  }

  const vocabulary = resolveAvailableLanguageUnits(scenario.vocabularyUnitIds)
  const accent = scenario.specialty === 'construction' ? '#FF7A4A' : '#C9A84C'
  const canRequestMicrophone = ageConfirmed && microphone.state !== 'requesting' && microphone.state !== 'recording'

  return (
    <main style={{ background: '#0D0D0D', color: '#F7F3EC', minHeight: '100vh', maxWidth: 620, margin: '0 auto', padding: 'max(env(safe-area-inset-top), 20px) 18px 56px' }}>
      <Link to="/app/speak" style={{ ...sansFont, color: '#A89F94', textDecoration: 'none', fontSize: 14 }}>← All missions</Link>
      <header style={{ marginTop: 24 }}>
        <span style={{ ...sansFont, color: accent, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
          Spanish · {scenario.level} · Version {scenario.version}
        </span>
        <h1 style={{ ...displayFont, fontSize: 'clamp(30px, 8vw, 44px)', lineHeight: 1.08, margin: '10px 0' }}>{scenario.title}</h1>
        <p style={{ ...sansFont, color: '#A89F94', lineHeight: 1.6, margin: 0 }}>{scenario.summary}</p>
      </header>

      <section style={{ marginTop: 26, background: '#161616', borderRadius: 16, padding: 18, border: '1px solid rgba(255,255,255,0.08)' }}>
        <h2 style={{ ...displayFont, fontSize: 20, margin: '0 0 12px' }}>Mission objectives</h2>
        <ol style={{ ...sansFont, color: '#D7D0C5', lineHeight: 1.5, paddingLeft: 22, margin: 0 }}>
          {scenario.objectives.map(objective => <li key={objective.id} style={{ marginBottom: 8 }}>{objective.description}{objective.critical ? ' *' : ''}</li>)}
        </ol>
        <p style={{ ...sansFont, color: '#A89F94', fontSize: 11, margin: '10px 0 0' }}>* Required for Bronze or higher. Pronunciation never independently gates mastery.</p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2 style={{ ...displayFont, fontSize: 20, margin: '0 0 10px' }}>Linked curriculum</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          {vocabulary.map(({ id, unit }) => (
            <div key={id} style={{ ...sansFont, display: 'flex', justifyContent: 'space-between', gap: 14, background: '#161616', borderRadius: 10, padding: '10px 12px' }}>
              <span style={{ color: '#A89F94', fontSize: 12 }}>{unit?.source.sourceTerm ?? 'Curriculum link unavailable'}</span>
              <span style={{ color: unit ? '#F7F3EC' : '#FFB4A9', fontSize: 13, fontWeight: 700, textAlign: 'right' }}>{unit?.displayForm ?? id}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 24, background: `${accent}12`, border: `1px solid ${accent}40`, borderRadius: 16, padding: 18 }}>
        <h2 style={{ ...displayFont, fontSize: 20, margin: '0 0 8px' }}>Private microphone check</h2>
        <p style={{ ...sansFont, color: '#A89F94', lineHeight: 1.5, fontSize: 13, marginTop: 0 }}>
          This foundation check records only into a temporary browser memory buffer. It is not uploaded, saved to disk, scored, or sent to an AI provider.
        </p>

        <label style={{ ...sansFont, display: 'flex', alignItems: 'flex-start', gap: 10, color: '#D7D0C5', fontSize: 13, margin: '16px 0' }}>
          <input type="checkbox" checked={ageConfirmed} onChange={event => setAgeConfirmed(event.target.checked)} style={{ marginTop: 2 }} />
          <span>I confirm I am 13 or older. Speaking is not yet available for children under 13.</span>
        </label>

        <label style={{ ...sansFont, display: 'grid', gap: 6, color: '#A89F94', fontSize: 12, marginBottom: 16 }}>
          Feedback language for the future guided session
          <select value={feedbackLanguage} onChange={event => setFeedbackLanguage(event.target.value as FeedbackLanguage)} style={{ ...sansFont, background: '#0D0D0D', color: '#F7F3EC', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 9, padding: '10px 12px', fontSize: 14 }}>
            {FEEDBACK_OPTIONS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>

        {microphone.state === 'ready' ? (
          <button type="button" onClick={microphone.startRecording} style={{ ...sansFont, width: '100%', border: 0, borderRadius: 10, background: accent, color: '#0D0D0D', padding: '12px 14px', fontWeight: 800, cursor: 'pointer' }}>
            Tap to record a short test
          </button>
        ) : microphone.state === 'recording' ? (
          <button type="button" onClick={microphone.stopRecording} style={{ ...sansFont, width: '100%', border: `2px solid ${accent}`, borderRadius: 10, background: '#0D0D0D', color: accent, padding: '12px 14px', fontWeight: 800, cursor: 'pointer' }}>
            Stop recording
          </button>
        ) : (
          <button type="button" disabled={!canRequestMicrophone} onClick={microphone.requestPermission} style={{ ...sansFont, width: '100%', border: 0, borderRadius: 10, background: canRequestMicrophone ? accent : '#343434', color: canRequestMicrophone ? '#0D0D0D' : '#777', padding: '12px 14px', fontWeight: 800, cursor: canRequestMicrophone ? 'pointer' : 'not-allowed' }}>
            {microphone.state === 'requesting' ? 'Requesting microphone…' : microphone.state === 'recorded' ? 'Enable another microphone check' : 'Enable microphone check'}
          </button>
        )}

        <p aria-live="polite" style={{ ...sansFont, color: '#A89F94', fontSize: 12, minHeight: 18, marginBottom: 0 }}>
          {microphone.state === 'requesting' ? 'Waiting for browser permission.' : microphone.state === 'ready' ? 'Microphone ready. Tap record when you are ready.' : microphone.state === 'recording' ? 'Recording. Tap stop when finished.' : microphone.state === 'recorded' ? 'Recording complete. Use the player below to check it.' : ''}
        </p>
        {microphone.error ? <p role="alert" style={{ ...sansFont, color: '#FF8A80', fontSize: 13, lineHeight: 1.5 }}>{microphone.error}</p> : null}
        {microphone.audioUrl ? (
          <div style={{ marginTop: 16 }}>
            <audio controls src={microphone.audioUrl} style={{ width: '100%' }} aria-label="Temporary microphone test playback" />
            <p style={{ ...sansFont, color: '#A89F94', fontSize: 11, marginBottom: 0 }}>Leaving this page destroys the temporary recording URL.</p>
          </div>
        ) : null}
      </section>

      <aside style={{ ...sansFont, color: '#A89F94', fontSize: 12, lineHeight: 1.55, marginTop: 18 }}>
        {capabilities.status === 'loading'
          ? 'Checking the provider spike configuration…'
          : capabilities.status === 'error'
            ? `${capabilities.error} The local microphone check remains available.`
            : capabilities.data.enabled
              ? `Provider spike configured for ${capabilities.data.providers.stt.model} STT and ${capabilities.data.mode}. It is still not production-ready; the launch gates remain in force.`
              : 'Guided STT → dialogue → TTS remains disabled until the guarded provider spike is configured. This page does not simulate an AI conversation.'}
      </aside>
    </main>
  )
}
