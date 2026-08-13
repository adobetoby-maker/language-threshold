import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import type { FeedbackLanguage, SpeakingScenarioVersion } from '../domain/types'
import { Linear16StreamPlayer } from '../audio/playback'
import { PcmMicrophoneCapture } from '../audio/microphone'
import { DeepgramSttUploadAdapter, DeepgramTtsAdapter } from '../providers/deepgram'
import { requestDialogueTurn, startSpeakingSession } from '../providers/session'
import { requestSpeakingToken } from '../providers/token'
import type { DialogueHistoryEntry, DialogueTurnResult, SpeakingProviderCapabilities, SpeakingSessionLease } from '../providers/contracts'
import { createAttemptId, createInitialSessionState, speakingSessionReducer } from '../session/machine'
import { createEvidenceEvent } from '../evidence/evidence'
import type { SpeakingEvidenceEvent, SpeakingEvidenceStage, SpeakingTurnEvidence, SpeakingTurnTimingEvidence } from '../evidence/types'

type TurnTiming = SpeakingTurnTimingEvidence

export function useSpeakingTurnLoop(scenario: SpeakingScenarioVersion, capabilities: SpeakingProviderCapabilities | null, feedbackLanguage: FeedbackLanguage) {
  const [state, dispatch] = useReducer(speakingSessionReducer, scenario, createInitialSessionState)
  const [session, setSession] = useState<SpeakingSessionLease | null>(null)
  const [history, setHistory] = useState<DialogueHistoryEntry[]>([])
  const [latestResult, setLatestResult] = useState<DialogueTurnResult | null>(null)
  const [latestTiming, setLatestTiming] = useState<TurnTiming | null>(null)
  const [sessionStartedAt, setSessionStartedAt] = useState<string | null>(null)
  const [evidenceTurns, setEvidenceTurns] = useState<SpeakingTurnEvidence[]>([])
  const [evidenceEvents, setEvidenceEvents] = useState<SpeakingEvidenceEvent[]>([])
  const controllerRef = useRef<AbortController | null>(null)
  const microphoneRef = useRef<PcmMicrophoneCapture | null>(null)
  const sttRef = useRef<DeepgramSttUploadAdapter | null>(null)
  const ttsRef = useRef<DeepgramTtsAdapter | null>(null)
  const playerRef = useRef<Linear16StreamPlayer | null>(null)
  const captureStartedAtRef = useRef(0)
  const captureTimeoutRef = useRef(0)
  const operationInFlightRef = useRef(false)
  const turnStartedAtIsoRef = useRef('')
  const stageRef = useRef<SpeakingEvidenceStage>('session')
  const evidenceTurnSequenceRef = useRef(1)
  const recordedEventKeysRef = useRef(new Set<string>())

  const recordEvidenceEvent = useCallback((stage: SpeakingEvidenceStage, turnSequence: number | null, error: unknown) => {
    const event = createEvidenceEvent(stage, turnSequence, error)
    const key = `${turnSequence ?? 'session'}:${stage}:${event.code}`
    if (recordedEventKeysRef.current.has(key)) return
    recordedEventKeysRef.current.add(key)
    setEvidenceEvents(current => [...current, event])
  }, [])

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
    operationInFlightRef.current = false
  }, [])

  const watchMicrophone = useCallback((microphone: PcmMicrophoneCapture, controller: AbortController, turnSequence: number) => {
    const fail = (error: Error) => {
      if (controllerRef.current !== controller || controller.signal.aborted || microphoneRef.current !== microphone) return
      recordEvidenceEvent('capture', turnSequence, error)
      dispatch({ type: 'FAIL', message: error.message })
      void cancel()
    }
    microphone.onUnexpectedEnd(fail)
  }, [cancel, recordEvidenceEvent])

  const watchStt = useCallback((stt: DeepgramSttUploadAdapter, controller: AbortController, turnSequence: number) => {
    stt.onUnexpectedTermination(error => {
      if (controllerRef.current !== controller || controller.signal.aborted || sttRef.current !== stt) return
      recordEvidenceEvent('stt', turnSequence, error)
      dispatch({ type: 'FAIL', message: error.message })
      void cancel()
    })
  }, [cancel, recordEvidenceEvent])

  const start = useCallback(async (ageConfirmed: boolean) => {
    if (!capabilities?.enabled) throw new Error('The provider turn loop is not configured.')
    if (operationInFlightRef.current) return
    if (controllerRef.current) throw new Error('Reset the active speaking session before starting another one.')
    const activeCapabilities = capabilities
    operationInFlightRef.current = true
    stageRef.current = 'session'
    evidenceTurnSequenceRef.current = 1
    const controller = new AbortController()
    controllerRef.current = controller
    dispatch({ type: 'START', attemptId: createAttemptId() })
    const microphone = new PcmMicrophoneCapture()
    microphoneRef.current = microphone
    watchMicrophone(microphone, controller, 1)
    const microphoneArm = microphone.arm()
    try {
      await microphoneArm
      await microphone.prepare(controller.signal)
      const nextSession = await startSpeakingSession(scenario.id, ageConfirmed, controller.signal)
      setSession(nextSession)
      setSessionStartedAt(new Date().toISOString())
      const grant = await requestSpeakingToken(scenario.id, ageConfirmed, nextSession.lease, 'stt', controller.signal)
      const stt = new DeepgramSttUploadAdapter(activeCapabilities, grant)
      sttRef.current = stt
      watchStt(stt, controller, 1)
      await stt.connect(controller.signal)
      await microphone.start(chunk => stt.sendAudio(chunk), controller.signal)
      microphoneRef.current = microphone
      captureStartedAtRef.current = performance.now()
      turnStartedAtIsoRef.current = new Date().toISOString()
      stageRef.current = 'capture'
      captureTimeoutRef.current = window.setTimeout(() => {
        const error = new Error('This learner turn reached the 60-second development limit.')
        recordEvidenceEvent('capture', 1, error)
        dispatch({ type: 'FAIL', message: error.message })
        void cancel()
      }, 60_000)
      dispatch({ type: 'MIC_READY' })
      operationInFlightRef.current = false
    } catch (error) {
      operationInFlightRef.current = false
      if (!controller.signal.aborted) {
        recordEvidenceEvent(stageRef.current, evidenceTurnSequenceRef.current, error)
        dispatch({ type: 'FAIL', message: error instanceof Error ? error.message : 'The speaking turn could not start.' })
        await cancel()
      }
      throw error
    }
  }, [cancel, capabilities, recordEvidenceEvent, scenario.id, watchMicrophone, watchStt])

  const stopAndRespond = useCallback(async (ageConfirmed: boolean) => {
    if (operationInFlightRef.current) return
    const controller = controllerRef.current
    const activeSession = session
    const microphone = microphoneRef.current
    const stt = sttRef.current
    const activeCapabilities = capabilities
    if (!controller || !activeSession || !microphone || !stt || !activeCapabilities) {
      throw new Error('The speaking turn is not ready. Reset the session and try again.')
    }
    operationInFlightRef.current = true
    dispatch({ type: 'END_LEARNER_TURN' })
    clearTimeout(captureTimeoutRef.current)
    captureTimeoutRef.current = 0
    const turnStartedAt = captureStartedAtRef.current
    const turnStartedAtIso = turnStartedAtIsoRef.current || new Date().toISOString()
    const captureEndedAt = performance.now()
    const turnSequence = evidenceTurnSequenceRef.current
    try {
      const player = new Linear16StreamPlayer()
      playerRef.current = player
      await player.arm()
      const reportedAudioSeconds = await microphone.finishTurn()
      stageRef.current = 'stt'
      const transcriptResult = await stt.finishLearnerTurn(controller.signal)
      const transcriptAt = performance.now()
      await stt.cancel()
      sttRef.current = null

      stageRef.current = 'dialogue'
      const dialogueStartedAt = performance.now()
      const dialogue = await requestDialogueTurn({
        lease: activeSession.lease,
        scenarioVersionId: scenario.id,
        turnSequence,
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
      const ttsStartedAt = performance.now()
      stageRef.current = 'tts'
      await tts.speak(ttsGrant, dialogue.assistantText, chunk => {
        if (firstAudioAt === null) firstAudioAt = performance.now()
        audioTasks.push(player.append(chunk))
      }, controller.signal)
      const ttsCompletedAt = performance.now()
      await Promise.all(audioTasks)
      stageRef.current = 'playback'
      const playbackStartedAt = performance.now()
      await player.waitUntilFinished(controller.signal)
      await player.cancel()
      ttsRef.current = null
      playerRef.current = null
      const completedAt = performance.now()
      const timing: TurnTiming = {
        captureMs: Math.round(captureEndedAt - turnStartedAt),
        sttFinalizeMs: Math.round(transcriptAt - captureEndedAt),
        dialogueMs: Math.round(dialogueAt - dialogueStartedAt),
        ttsFirstAudioMs: firstAudioAt === null ? null : Math.round(firstAudioAt - dialogueAt),
        ttsCompletionMs: Math.round(ttsCompletedAt - ttsStartedAt),
        playbackMs: Math.round(completedAt - playbackStartedAt),
        totalMs: Math.round(completedAt - turnStartedAt),
      }
      setLatestTiming(timing)
      setEvidenceTurns(current => [...current, {
        turnSequence: dialogue.turnSequence,
        startedAt: turnStartedAtIso,
        completedAt: new Date().toISOString(),
        timings: timing,
        sttProviderRequestId: transcriptResult.providerRequestId,
        usage: { ...dialogue.usage },
        sessionUsage: dialogue.sessionUsage ? { ...dialogue.sessionUsage } : null,
      }])
      if (dialogue.turnSequence >= activeSession.maxTurns) {
        await microphone.stop()
        microphoneRef.current = null
        dispatch({ type: 'PAUSE' })
        operationInFlightRef.current = false
        return
      }

      const nextTurnSequence = dialogue.turnSequence + 1
      evidenceTurnSequenceRef.current = nextTurnSequence
      stageRef.current = 'stt'
      const nextGrant = await requestSpeakingToken(scenario.id, ageConfirmed, activeSession.lease, 'stt', controller.signal)
      const nextStt = new DeepgramSttUploadAdapter(activeCapabilities, nextGrant)
      sttRef.current = nextStt
      watchStt(nextStt, controller, nextTurnSequence)
      await nextStt.connect(controller.signal)
      watchMicrophone(microphone, controller, nextTurnSequence)
      await microphone.prepare(controller.signal)
      await microphone.start(chunk => nextStt.sendAudio(chunk), controller.signal)
      microphoneRef.current = microphone
      captureStartedAtRef.current = performance.now()
      turnStartedAtIsoRef.current = new Date().toISOString()
      stageRef.current = 'capture'
      captureTimeoutRef.current = window.setTimeout(() => {
        const error = new Error('This learner turn reached the 60-second development limit.')
        recordEvidenceEvent('capture', nextTurnSequence, error)
        dispatch({ type: 'FAIL', message: error.message })
        void cancel()
      }, 60_000)
      dispatch({ type: 'RESPONSE_FINISHED' })
      operationInFlightRef.current = false
    } catch (error) {
      operationInFlightRef.current = false
      if (!controller.signal.aborted) {
        recordEvidenceEvent(stageRef.current, turnSequence, error)
        dispatch({ type: 'FAIL', message: error instanceof Error ? error.message : 'The speaking turn failed.' })
        await cancel()
      }
      throw error
    }
  }, [cancel, capabilities, feedbackLanguage, history, recordEvidenceEvent, scenario.id, session, watchMicrophone, watchStt])

  const reset = useCallback(async () => {
    await cancel()
    setSession(null)
    setHistory([])
    setLatestResult(null)
    setLatestTiming(null)
    setSessionStartedAt(null)
    setEvidenceTurns([])
    setEvidenceEvents([])
    recordedEventKeysRef.current.clear()
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
      const error = new Error('The controlled speaking session reached its 18-minute limit.')
      recordEvidenceEvent('session', null, error)
      dispatch({ type: 'FAIL', message: error.message })
      void cancel()
    }, Math.max(0, remaining))
    return () => clearTimeout(timeout)
  }, [cancel, recordEvidenceEvent, session])

  return { state, session, sessionStartedAt, history, latestResult, latestTiming, evidenceTurns, evidenceEvents, start, stopAndRespond, cancel, reset }
}
