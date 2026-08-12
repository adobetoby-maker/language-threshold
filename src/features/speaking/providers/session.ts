import type { ScenarioVersionId } from '../domain/types'
import type { DialogueHistoryEntry, DialogueTurnResult, SpeakingSessionLease } from './contracts'

async function responsePayload<T>(response: Response): Promise<T> {
  const payload = await response.json() as T | { message?: string }
  if (!response.ok) {
    throw new Error('message' in (payload as object) && (payload as { message?: string }).message
      ? (payload as { message: string }).message
      : 'The controlled speaking session request failed.')
  }
  return payload as T
}

export async function startSpeakingSession(scenarioVersionId: ScenarioVersionId, ageConfirmed: boolean, signal?: AbortSignal) {
  const response = await fetch('/api/speaking/session', {
    method: 'POST', credentials: 'same-origin', signal,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ scenarioVersionId, ageConfirmed }),
  })
  return responsePayload<SpeakingSessionLease>(response)
}

export async function requestDialogueTurn(input: {
  lease: string
  scenarioVersionId: ScenarioVersionId
  turnSequence: number
  transcript: string
  feedbackLanguage: 'english' | 'target' | 'adaptive'
  history: DialogueHistoryEntry[]
  reportedAudioSeconds: number
}, signal?: AbortSignal) {
  const response = await fetch('/api/speaking/dialogue', {
    method: 'POST', credentials: 'same-origin', signal,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(input),
  })
  return responsePayload<DialogueTurnResult>(response)
}
