import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import type { FeedbackLanguage, SpeakingScenarioVersion } from '../domain/types'
import { Linear16StreamPlayer } from '../audio/playback'
import { PcmMicrophoneCapture } from '../audio/microphone'
import { DeepgramSttUploadAdapter, DeepgramTtsAdapter } from '../providers/deepgram'
import { requestDialogueTurn, startSpeakingSession } from '../providers/session'
import { requestSpeakingToken } from '../providers/token'
import type { DialogueHistoryEntry, DialogueTurnResult, SpeakingProviderCapabilities, SpeakingSessionLease } from '../providers/contracts'
import { createAttemptId, createInitialSessionState, speakingSessionReducer } from '../session/machine'

interface TurnTiming {
  captureMs: number
  sttFinalizeMs: number
  dialogueMs: number
  ttsFirstAudioMs: number | null
  totalMs: number
}

export function useSpeakingTurnLoop(scenario: SpeakingScenarioVersion, capabilities: SpeakingProviderCapabilities | null, feedbackLanguage: FeedbackLanguage) {
  const [state, dispatch] = useReducer(speakingSessionReducer, scenario, createInitialSessionState)
  const [session, setSession] = useState<SpeakingSessionLease | null>(null)
  const [history, setHistory] = useState<DialogueHistoryEntry[]>([])
  const [latestResult, setLatestResult] = useState<DialogueTurnResult | null>(null)
  const [latestTiming, setLatestTiming] = useState<TurnTiming | null>(null)
  const controllerRef = useRef<AbortController | null>(null)
  const microphoneRef = useRef<PcmMicrophoneCapture | null>(null)
  const sttRef = useRef<DeepgramSttUploadAdapter | null>(null)
  const ttsRef = useRef<DeepgramTtsAdapter | null>(null)
  const playerRef = useRef<Linear16StreamPlayer | null>(null)
  const captureStartedAtRef = useRef(0)
  const captureTimeoutRef = useRef(0)

  const cancel = useCallback(async () => {
    controllerRef.current?.abort()
    controllerRef.current = null
    clearTimeout(captureTimeoutRef.current)
    captureTimeoutRef.current = 0
    await microphoneRef.current?.stop()
    microphoneRef.current = null
    await sttRef.current?.cancel()
    sttRef.current = null
    ttsRef.current?.cancel()
    ttsRef.current = null
    await playerRef.current?.cancel()
    playerRef.current = null
  }, [])

  const start = useCallback(async (ageConfirmed: boolean) => {
    if (!capabilities?.enabled) throw new Error('The provider turn loop is not configured.')
    const activeCapabilities = capabilities
    await cancel()
    const controller = new AbortController()
    controllerRef.current = controller
    dispatch({ type: 'START', attemptId: createAttemptId() })
    try {
      const microphone = new PcmMicrophoneCapture()
      microphoneRef.current = microphone
      await microphone.prepare(controller.signal)
      const nextSession = await startSpeakingSession(scenario.id, ageConfirmed, controller.signal)
      setSession(nextSession)
      const grant = await requestSpeakingToken(scenario.id, ageConfirmed, nextSession.lease, 'stt', controller.signal)
      const stt = new DeepgramSttUploadAdapter(activeCapabilities, grant)
      await stt.connect(controller.signal)
      await microphone.start(chunk => stt.sendAudio(chunk), controller.signal)
      sttRef.current = stt
      microphoneRef.current = microphone
      captureStartedAtRef.current = performance.now()
      captureTimeoutRef.current = window.setTimeout(() => {
        dispatch({ type: 'FAIL', message: 'This learner turn reached the 60-second development limit.' })
        void cancel()
      }, 60_000)
      dispatch({ type: 'MIC_READY' })
    } catch (error) {
      if (!controller.signal.aborted) {
        dispatch({ type: 'FAIL', message: error instanceof Error ? error.message : 'The speaking turn could not start.' })
        await cancel()
      }
      throw error
    }
  }, [cancel, capabilities, scenario.id])

  const stopAndRespond = useCallback(async (ageConfirmed: boolean) => {
    const controller = controllerRef.current
    const activeSession = session
    const microphone = microphoneRef.current
    const stt = sttRef.current
    const activeCapabilities = capabilities
    if (!controller || !activeSession || !microphone || !stt || !activeCapabilities) return
    dispatch({ type: 'END_LEARNER_TURN' })
    clearTimeout(captureTimeoutRef.current)
    captureTimeoutRef.current = 0
    const turnStartedAt = captureStartedAtRef.current
    const captureEndedAt = performance.now()
    try {
      const player = new Linear16StreamPlayer()
      playerRef.current = player
      await player.arm()
      const reportedAudioSeconds = await microphone.finishTurn()
      const transcriptResult = await stt.waitForEndOfTurn(controller.signal)
      const transcriptAt = performance.now()
      await stt.cancel()
      sttRef.current = null

      const dialogueStartedAt = performance.now()
      const dialogue = await requestDialogueTurn({
        lease: activeSession.lease,
        scenarioVersionId: scenario.id,
        turnSequence: state.turnCount + 1,
        transcript: transcriptResult.transcript,
        feedbackLanguage,
        history: history.slice(-8),
        reportedAudioSeconds,
      }, controller.signal)
      const dialogueAt = performance.now()
      dispatch({ type: 'RESPONSE_STARTED' })
      setLatestResult(dialogue)
      setHistory(current => [...current,
        { role: 'learner' as const, text: transcriptResult.transcript },
        { role: 'assistant' as const, text: dialogue.assistantText },
      ].slice(-8))

      const ttsGrant = await requestSpeakingToken(scenario.id, ageConfirmed, activeSession.lease, 'tts', controller.signal)
      const tts = new DeepgramTtsAdapter()
      ttsRef.current = tts
      let firstAudioAt: number | null = null
      const audioTasks: Array<Promise<void>> = []
      await tts.speak(ttsGrant, dialogue.assistantText, chunk => {
        if (firstAudioAt === null) firstAudioAt = performance.now()
        audioTasks.push(player.append(chunk))
      }, controller.signal)
      await Promise.all(audioTasks)
      await player.waitUntilFinished(controller.signal)
      await player.cancel()
      ttsRef.current = null
      playerRef.current = null
      const completedAt = performance.now()
      setLatestTiming({
        captureMs: Math.round(captureEndedAt - turnStartedAt),
        sttFinalizeMs: Math.round(transcriptAt - captureEndedAt),
        dialogueMs: Math.round(dialogueAt - dialogueStartedAt),
        ttsFirstAudioMs: firstAudioAt === null ? null : Math.round(firstAudioAt - dialogueAt),
        totalMs: Math.round(completedAt - turnStartedAt),
      })
      dispatch({ type: 'RESPONSE_FINISHED' })

      if (dialogue.turnSequence >= activeSession.maxTurns) {
        await microphone.stop()
        microphoneRef.current = null
        dispatch({ type: 'PAUSE' })
        return
      }

      const nextGrant = await requestSpeakingToken(scenario.id, ageConfirmed, activeSession.lease, 'stt', controller.signal)
      const nextStt = new DeepgramSttUploadAdapter(activeCapabilities, nextGrant)
      await nextStt.connect(controller.signal)
      await microphone.prepare(controller.signal)
      await microphone.start(chunk => nextStt.sendAudio(chunk), controller.signal)
      sttRef.current = nextStt
      microphoneRef.current = microphone
      captureStartedAtRef.current = performance.now()
      captureTimeoutRef.current = window.setTimeout(() => {
        dispatch({ type: 'FAIL', message: 'This learner turn reached the 60-second development limit.' })
        void cancel()
      }, 60_000)
    } catch (error) {
      if (!controller.signal.aborted) {
        dispatch({ type: 'FAIL', message: error instanceof Error ? error.message : 'The speaking turn failed.' })
        await cancel()
      }
      throw error
    }
  }, [cancel, capabilities, feedbackLanguage, history, scenario.id, session, state.turnCount])

  const reset = useCallback(async () => {
    await cancel()
    setSession(null)
    setHistory([])
    setLatestResult(null)
    setLatestTiming(null)
    dispatch({ type: 'RESET' })
  }, [cancel])

  useEffect(() => () => { void cancel() }, [cancel])

  useEffect(() => {
    const stopForBackground = () => {
      if (document.visibilityState === 'hidden' && state.phase !== 'idle') void reset()
    }
    document.addEventListener('visibilitychange', stopForBackground)
    return () => document.removeEventListener('visibilitychange', stopForBackground)
  }, [reset, state.phase])

  useEffect(() => {
    if (!session) return
    const remaining = Date.parse(session.expiresAt) - Date.now()
    const timeout = window.setTimeout(() => {
      dispatch({ type: 'FAIL', message: 'The controlled speaking session reached its 18-minute limit.' })
      void cancel()
    }, Math.max(0, remaining))
    return () => clearTimeout(timeout)
  }, [cancel, session])

  return { state, session, history, latestResult, latestTiming, start, stopAndRespond, cancel, reset }
}
