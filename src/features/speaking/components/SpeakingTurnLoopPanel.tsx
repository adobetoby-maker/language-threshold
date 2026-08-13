import { useEffect, useState } from 'react'
import type { FeedbackLanguage, SpeakingScenarioVersion } from '../domain/types'
import type { SpeakingProviderCapabilities } from '../providers/contracts'
import { useSpeakingTurnLoop } from '../hooks/useSpeakingTurnLoop'
import { sansFont } from '../../../constants'

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

      {actionError || loop.state.errorMessage ? <p role="alert" style={{ color: '#FF8A80', fontSize: 12 }}>{actionError ?? loop.state.errorMessage}</p> : null}
    </section>
  )
}
