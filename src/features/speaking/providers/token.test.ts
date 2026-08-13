import { afterEach, describe, expect, it, vi } from 'vitest'
import { requestSpeakingToken } from './token'

describe('temporary speaking token client', () => {
  afterEach(() => vi.restoreAllMocks())

  it('requests a same-origin, age-gated, scenario-scoped credential', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({
      provider: 'deepgram',
      accessToken: 'temporary',
      expiresIn: 30,
      endpoints: {
        stt: 'wss://api.deepgram.com/v2/listen',
        tts: 'wss://api.deepgram.com/v1/speak',
      },
    }), { status: 200, headers: { 'Content-Type': 'application/json' } }))

    await expect(requestSpeakingToken('scenario_version_construction_safety_briefing_es_v1', true, 'signed-lease', 'stt')).resolves.toMatchObject({ accessToken: 'temporary' })
    expect(fetchMock).toHaveBeenCalledWith('/api/speaking/token', expect.objectContaining({ method: 'POST', credentials: 'same-origin' }))
    expect(JSON.parse(String(fetchMock.mock.calls[0][1]?.body))).toEqual({
      scenarioVersionId: 'scenario_version_construction_safety_briefing_es_v1',
      ageConfirmed: true,
      lease: 'signed-lease',
      purpose: 'stt',
    })
  })

  it('does not accept a malformed provider grant', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ provider: 'deepgram', expiresIn: 30 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }))
    await expect(requestSpeakingToken('scenario_version_construction_safety_briefing_es_v1', true, 'signed-lease', 'stt')).rejects.toThrow('invalid temporary credential')
  })

  it('accepts a purpose-specific TTS grant', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({
      provider: 'deepgram', accessToken: 'temporary', expiresIn: 30,
      endpoints: { tts: 'wss://api.deepgram.com/v1/speak' },
    }), { status: 200, headers: { 'Content-Type': 'application/json' } }))
    await expect(requestSpeakingToken('scenario_version_construction_safety_briefing_es_v1', true, 'signed-lease', 'tts')).resolves.toMatchObject({ accessToken: 'temporary' })
  })
})
