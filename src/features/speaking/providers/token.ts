import type { ScenarioVersionId } from '../domain/types'
import type { SpeakingTokenGrant } from './contracts'

export async function requestSpeakingToken(
  scenarioVersionId: ScenarioVersionId,
  ageConfirmed: boolean,
  lease: string,
  purpose: 'stt' | 'tts',
  signal?: AbortSignal,
): Promise<SpeakingTokenGrant<'deepgram'>> {
  const response = await fetch('/api/speaking/token', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ scenarioVersionId, ageConfirmed, lease, purpose }),
    signal,
  })
  const payload = await response.json() as SpeakingTokenGrant<'deepgram'> | { message?: string }
  if (!response.ok) {
    throw new Error('message' in payload && payload.message ? payload.message : 'The provider connection could not be authorized.')
  }
  if (!('accessToken' in payload) || payload.provider !== 'deepgram' || payload.expiresIn !== 30 || !payload.endpoints?.[purpose]) {
    throw new Error('The provider returned an invalid temporary credential.')
  }
  return payload
}
