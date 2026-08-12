import { useCallback, useEffect, useRef, useState } from 'react'

type MicrophoneCheckState = 'idle' | 'requesting' | 'ready' | 'recording' | 'recorded' | 'error'

function preferredMimeType() {
  const candidates = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm']
  return candidates.find(candidate => MediaRecorder.isTypeSupported(candidate))
}

export function useMicrophoneCheck() {
  const streamRef = useRef<MediaStream | null>(null)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const audioUrlRef = useRef<string | null>(null)
  const [state, setState] = useState<MicrophoneCheckState>('idle')
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const replaceAudioUrl = useCallback((next: string | null) => {
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current)
    audioUrlRef.current = next
    setAudioUrl(next)
  }, [])

  const release = useCallback(() => {
    const recorder = recorderRef.current
    if (recorder?.state === 'recording') recorder.stop()
    recorderRef.current = null
    streamRef.current?.getTracks().forEach(track => track.stop())
    streamRef.current = null
  }, [])

  const requestPermission = useCallback(async () => {
    setError(null)
    setState('requesting')
    try {
      if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
        throw new Error('This browser does not provide the required microphone recording APIs.')
      }
      release()
      streamRef.current = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      })
      setState('ready')
    } catch (cause) {
      const message = cause instanceof DOMException && cause.name === 'NotAllowedError'
        ? 'Microphone access was denied. Update the site permission in Safari settings and try again.'
        : cause instanceof Error ? cause.message : 'Microphone access failed.'
      setError(message)
      setState('error')
    }
  }, [release])

  const startRecording = useCallback(() => {
    if (!streamRef.current) return
    replaceAudioUrl(null)
    chunksRef.current = []
    const mimeType = preferredMimeType()
    const recorder = new MediaRecorder(streamRef.current, mimeType ? { mimeType } : undefined)
    recorder.ondataavailable = event => {
      if (event.data.size > 0) chunksRef.current.push(event.data)
    }
    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' })
      replaceAudioUrl(URL.createObjectURL(blob))
      setState('recorded')
    }
    recorderRef.current = recorder
    recorder.start(250)
    setState('recording')
  }, [replaceAudioUrl])

  const stopRecording = useCallback(() => {
    if (recorderRef.current?.state === 'recording') recorderRef.current.stop()
  }, [])

  useEffect(() => {
    const pauseForBackground = () => {
      if (document.visibilityState === 'hidden' && recorderRef.current?.state === 'recording') {
        recorderRef.current.stop()
      }
    }
    document.addEventListener('visibilitychange', pauseForBackground)
    return () => {
      document.removeEventListener('visibilitychange', pauseForBackground)
      release()
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current)
    }
  }, [release])

  return { state, audioUrl, error, requestPermission, startRecording, stopRecording }
}
