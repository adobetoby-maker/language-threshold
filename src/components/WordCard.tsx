import { useState, useEffect, useRef } from 'react'
import { sansFont } from '../constants'

interface WordCardData {
  headword: string
  wordEmoji: string
  partOfSpeech: string
  phonetic: string
  baseDefinition: string
  exampleSentence: string
  exampleTranslation: string
  morphStem?: string
  morphEnding?: string
  morphConjugations?: Array<{ ending: string; full: string }>
  commonPhrases?: string[]
}

interface Props {
  word: string
  sentence: string
  x: number
  y: number
  color: string
  onClose: () => void
}

export default function WordCard({ word, sentence, x, y, color, onClose }: Props) {
  const [card, setCard] = useState<WordCardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const cardW = 300
  const cardH = 460
  let left = x - cardW / 2
  let top = y + 14
  if (typeof window !== 'undefined') {
    left = Math.max(8, Math.min(left, window.innerWidth - cardW - 8))
    if (top + cardH > window.innerHeight - 8) top = Math.max(8, y - cardH - 14)
  }

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    setCard(null)

    fetch('/api/word-lookup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word, sentence }),
    })
      .then(r => r.json())
      .then(data => {
        if (cancelled) return
        if (data.error === 'rateLimit') { setError('Rate limit reached. Try again shortly.'); return }
        if (data.card) setCard(data.card)
        else setError("Couldn't look that up.")
      })
      .catch(() => { if (!cancelled) setError("Couldn't look that up.") })
      .finally(() => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true }
  }, [word, sentence])

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onClose])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', top, left, width: cardW, zIndex: 200,
        backgroundColor: '#1A1A1A',
        border: `2px solid ${color}40`,
        borderRadius: 16,
        boxShadow: `0 8px 40px ${color}20, 0 2px 12px rgba(0,0,0,0.5)`,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ backgroundColor: `${color}22`, borderBottom: `1px solid ${color}30`, padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {card?.wordEmoji && (
            <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: `${color}18`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
              {card.wordEmoji}
            </div>
          )}
          {!card?.wordEmoji && loading && (
            <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: `${color}10`, flexShrink: 0 }} />
          )}
          <div>
            <p style={{ color, fontFamily: '"Source Sans 3", sans-serif', fontSize: 18, fontWeight: 700, margin: 0 }}>{word}</p>
            {card && (
              <p style={{ color: '#A89F94', fontFamily: '"Source Sans 3", sans-serif', fontSize: 11, margin: 0 }}>
                {card.partOfSpeech}{card.phonetic ? ` · ${card.phonetic}` : ''}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#A89F94', fontSize: 18, cursor: 'pointer', padding: '0 0 0 8px', lineHeight: 1 }}
        >×</button>
      </div>

      <div style={{ padding: '12px 14px' }}>
        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, margin: '12px 0' }}>
            <span style={{ width: 13, height: 13, border: `2px solid ${color}30`, borderTopColor: color, borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
            <p style={{ ...sansFont, color: '#71717A', fontSize: 12, margin: 0 }}>Looking it up…</p>
          </div>
        )}
        {error && (
          <p style={{ ...sansFont, color: '#EF4444', fontSize: 12, textAlign: 'center', margin: '10px 0' }}>{error}</p>
        )}
        {card && (
          <>
            <p style={{ ...sansFont, fontSize: 16, fontWeight: 700, color: '#F7F3EC', margin: '0 0 10px' }}>
              {card.baseDefinition}
            </p>

            {/* Morphology breakdown */}
            {card.morphStem && card.morphEnding && (
              <div style={{ marginBottom: 10 }}>
                <p style={{ ...sansFont, fontSize: 10, fontWeight: 700, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 5px' }}>
                  How it changes
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 7 }}>
                  <span style={{ ...sansFont, fontSize: 20, fontWeight: 800, color: '#F7F3EC' }}>{card.morphStem}</span>
                  <span style={{ ...sansFont, fontSize: 20, fontWeight: 800, color }}>·{card.morphEnding}</span>
                </div>
                {card.morphConjugations && card.morphConjugations.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 8 }}>
                    {card.morphConjugations.map(({ ending, full }) => {
                      const stem = full.slice(0, full.length - ending.length)
                      return (
                        <span key={full} style={{ backgroundColor: `${color}10`, border: `1px solid ${color}25`, borderRadius: 7, padding: '2px 7px', ...sansFont, fontSize: 13, fontWeight: 700 }}>
                          <span style={{ color: '#F7F3EC' }}>{stem}</span>
                          <span style={{ color }}>·{ending}</span>
                        </span>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Common phrases */}
            {card.commonPhrases && card.commonPhrases.length > 0 && (
              <div style={{ marginBottom: 10 }}>
                <p style={{ ...sansFont, fontSize: 10, fontWeight: 700, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 5px' }}>
                  On the job
                </p>
                {card.commonPhrases.map((phrase, i) => (
                  <p key={i} style={{ ...sansFont, fontSize: 12, color: '#A89F94', margin: '0 0 2px' }}>{phrase}</p>
                ))}
              </div>
            )}

            {/* Example */}
            <div style={{ backgroundColor: `${color}0c`, borderRadius: 9, padding: '9px 11px', border: `1px solid ${color}20` }}>
              <p style={{ ...sansFont, fontSize: 12, fontWeight: 600, color: '#F7F3EC', margin: '0 0 2px' }}>
                "{card.exampleSentence}"
              </p>
              <p style={{ ...sansFont, fontSize: 11, color: '#71717A', margin: 0 }}>
                "{card.exampleTranslation}"
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
