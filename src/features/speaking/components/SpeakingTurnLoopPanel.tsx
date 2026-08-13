import { useEffect, useState } from 'react'
import type { FeedbackLanguage, SpeakingScenarioVersion } from '../domain/types'
import type { SpeakingProviderCapabilities } from '../providers/contracts'
import { useSpeakingTurnLoop } from '../hooks/useSpeakingTurnLoop'
import { sansFont } from '../../../constants'
import { buildSpeakingEvidenceBundle, evidenceFilename, serializeSpeakingEvidence } from '../evidence/evidence'
import type { SpeakingEvidenceRunContext } from '../evidence/types'

interface Props {
  scenario: SpeakingScenarioVersion
  capabilities: SpeakingProviderCapabilities
  ageConfirmed: boolean
  feedbackLanguage: FeedbackLanguage
  accent: string
}

export function SpeakingTurnLoopPanel({ scenario, capabilities, ageConfirmed, feedbackLanguage, accent }: Props) {
  const loop = useSpeakingTurnLoop(scenario, capabilities, feedbackLanguage)
  const [actionError, setActionError] = useState<string | null>(null)
  const [evidenceContext, setEvidenceContext] = useState<SpeakingEvidenceRunContext>({
    testerAlias: '', deviceModel: '', osVersion: '', browserVersion: '', network: 'unknown', audioRoute: 'unknown', matrixCase: '',
  })
  const resetLoop = loop.reset
  const loopPhase = loop.state.phase

  useEffect(() => {
    if (!ageConfirmed && loopPhase !== 'idle') void resetLoop()
  }, [ageConfirmed, loopPhase, resetLoop])

  const act = (task: () => Promise<unknown>) => {
    setActionError(null)
    void task().catch(error => {
      if (error instanceof DOMException && error.name === 'AbortError') return
      setActionError(error instanceof Error ? error.message : 'The speaking action failed.')
    })
  }

  const evidenceReady = Boolean(loop.session && loop.sessionStartedAt && (loop.evidenceTurns.length || loop.evidenceEvents.length)
    && evidenceContext.testerAlias.trim() && evidenceContext.deviceModel.trim() && evidenceContext.osVersion.trim()
    && evidenceContext.browserVersion.trim() && evidenceContext.matrixCase.trim())

  const downloadEvidence = () => {
    if (!loop.session || !loop.sessionStartedAt || !evidenceReady) return
    const bundle = buildSpeakingEvidenceBundle({
      session: loop.session,
      sessionStartedAt: loop.sessionStartedAt,
      scenario,
      capabilities,
      context: evidenceContext,
      turns: loop.evidenceTurns,
      events: loop.evidenceEvents,
      viewport: { width: window.innerWidth, height: window.innerHeight, devicePixelRatio: window.devicePixelRatio || 1 },
    })
    const url = URL.createObjectURL(new Blob([serializeSpeakingEvidence(bundle)], { type: 'application/json' }))
    const link = document.createElement('a')
    link.href = url
    link.download = evidenceFilename(scenario.id, loop.session.sessionId)
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section style={{ ...sansFont, marginTop: 18, border: `1px solid ${accent}55`, background: '#161616', borderRadius: 16, padding: 18 }}>
      <h2 style={{ fontSize: 19, margin: '0 0 8px' }}>Live turn-loop spike</h2>
      <p style={{ color: '#A89F94', fontSize: 12, lineHeight: 1.55, marginTop: 0 }}>
        Preview/development only. Microphone audio goes directly to Deepgram and is not retained by Language Threshold. The transcript and recent browser-supplied history go to Anthropic; generated partner text goes to Deepgram for speech. The response and usage record are cached by Language Threshold for at most 19 minutes, and Reset does not delete that server cache early. Provider retention terms are not production-approved. Each learner turn is capped at 60 seconds in this client.
      </p>

      {loop.state.phase === 'idle' ? (
        <button type="button" disabled={!ageConfirmed} onClick={() => act(() => loop.start(ageConfirmed))} style={{ width: '100%', border: 0, borderRadius: 10, padding: '12px 14px', fontWeight: 800, background: ageConfirmed ? accent : '#343434', color: ageConfirmed ? '#0D0D0D' : '#777' }}>
          Start controlled speaking session
        </button>
      ) : loop.state.phase === 'arming' ? (
        <p aria-live="polite">Opening a controlled session and microphone…</p>
      ) : loop.state.phase === 'listening' ? (
        <button type="button" onClick={() => act(() => loop.stopAndRespond(ageConfirmed))} style={{ width: '100%', border: `2px solid ${accent}`, borderRadius: 10, padding: '12px 14px', fontWeight: 800, background: '#0D0D0D', color: accent }}>
          Stop this turn and respond
        </button>
      ) : loop.state.phase === 'thinking' ? (
        <p aria-live="polite">Finalizing your transcript and preparing the response…</p>
      ) : loop.state.phase === 'speaking' ? (
        <p aria-live="polite">Playing the partner response or preparing the next turn…</p>
      ) : (
        <button type="button" onClick={() => act(loop.reset)} style={{ width: '100%', border: 0, borderRadius: 10, padding: '12px 14px', fontWeight: 800 }}>Reset controlled session</button>
      )}

      {loop.state.phase !== 'idle' ? (
        <button type="button" onClick={() => act(loop.reset)} style={{ marginTop: 10, width: '100%', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 10, padding: '10px 14px', background: 'transparent', color: '#D7D0C5' }}>
          Cancel and discard this browser session
        </button>
      ) : null}

      {loop.history.length ? (
        <ol aria-label="Visible speaking transcript" style={{ paddingLeft: 20, color: '#D7D0C5', fontSize: 13, lineHeight: 1.5 }}>
          {loop.history.map((entry, index) => <li key={`${entry.role}-${index}`}><strong>{entry.role === 'learner' ? 'You' : 'Partner'}:</strong> {entry.text}</li>)}
        </ol>
      ) : null}

      {loop.latestResult?.deferredFeedback.length ? (
        <div style={{ color: '#A89F94', fontSize: 12 }}>
          <strong>Deferred coaching</strong>
          <ul>{loop.latestResult.deferredFeedback.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
      ) : null}

      {loop.latestResult?.provisionalObjectiveIds.length ? (
        <div style={{ color: '#A89F94', fontSize: 12 }}>
          <strong>Provisional evidence (does not change mastery)</strong>
          <ul>{loop.latestResult.provisionalObjectiveIds.map(id => (
            <li key={id}>{scenario.objectives.find(objective => objective.id === id)?.description ?? id}</li>
          ))}</ul>
        </div>
      ) : null}

      {loop.latestTiming ? (
        <details style={{ color: '#A89F94', fontSize: 11 }}>
          <summary>Turn timing (development telemetry)</summary>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(loop.latestTiming, null, 2)}</pre>
        </details>
      ) : null}

      {loop.session ? (
        <details style={{ marginTop: 14, color: '#D7D0C5', fontSize: 12 }}>
          <summary style={{ cursor: 'pointer', fontWeight: 800 }}>Named-tester evidence export</summary>
          <p style={{ color: '#A89F94', lineHeight: 1.5 }}>
            This JSON stays on this device unless you attach it. It contains timing, usage, provider request IDs, a session ID, and the test context below. It excludes transcripts, partner text, coaching, raw audio, and the signed session lease. Use an alias—not a full name—and do not enter addresses or sensitive information.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}>
            {([
              ['testerAlias', 'Tester alias', 'tester-01'],
              ['deviceModel', 'Device model', 'iPhone model'],
              ['osVersion', 'OS version', 'iOS version'],
              ['browserVersion', 'Browser version', 'Safari version'],
              ['matrixCase', 'Matrix case', 'Wi-Fi normal turn'],
            ] as const).map(([field, label, placeholder]) => (
              <label key={field} style={{ display: 'grid', gap: 4 }}>
                <span>{label}</span>
                <input value={evidenceContext[field]} placeholder={placeholder} maxLength={120} onChange={event => setEvidenceContext(current => ({ ...current, [field]: event.target.value }))} style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: 8, background: '#0D0D0D', color: '#F4F0E8' }} />
              </label>
            ))}
            <label style={{ display: 'grid', gap: 4 }}>
              <span>Network</span>
              <select value={evidenceContext.network} onChange={event => setEvidenceContext(current => ({ ...current, network: event.target.value as SpeakingEvidenceRunContext['network'] }))} style={{ borderRadius: 8, padding: 8, background: '#0D0D0D', color: '#F4F0E8' }}>
                <option value="unknown">Unknown</option><option value="wifi">Wi-Fi</option><option value="cellular">Cellular</option><option value="wired">Wired</option>
              </select>
            </label>
            <label style={{ display: 'grid', gap: 4 }}>
              <span>Audio route</span>
              <select value={evidenceContext.audioRoute} onChange={event => setEvidenceContext(current => ({ ...current, audioRoute: event.target.value as SpeakingEvidenceRunContext['audioRoute'] }))} style={{ borderRadius: 8, padding: 8, background: '#0D0D0D', color: '#F4F0E8' }}>
                <option value="unknown">Unknown</option><option value="speaker">Speaker</option><option value="wired-headset">Wired headset</option><option value="bluetooth">Bluetooth</option>
              </select>
            </label>
          </div>
          <p style={{ color: '#A89F94' }}>{loop.evidenceTurns.length} completed turn(s); {loop.evidenceEvents.length} lifecycle event(s).</p>
          <button type="button" disabled={!evidenceReady} onClick={downloadEvidence} style={{ width: '100%', border: 0, borderRadius: 10, padding: '10px 14px', fontWeight: 800, background: evidenceReady ? accent : '#343434', color: evidenceReady ? '#0D0D0D' : '#777' }}>
            Download privacy-minimized evidence JSON
          </button>
        </details>
      ) : null}

      {actionError || loop.state.errorMessage ? <p role="alert" style={{ color: '#FF8A80', fontSize: 12 }}>{actionError ?? loop.state.errorMessage}</p> : null}
    </section>
  )
}
