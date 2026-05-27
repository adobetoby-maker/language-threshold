import { useState } from 'react'
import { APP_URL, sansFont, displayFont } from '../constants'
import { MEDICAL_BOOK_CHAPTERS, CONSTRUCTION_BOOK_CHAPTERS } from '../data/bookData'

interface Module {
  id: string
  emoji: string
  title: string
  tagline: string
  color: string
  vocab: Array<{ en: string; es: string }>
  samplePhrase: { en: string; es: string }
}

interface Props {
  modules: Module[]
  accentColor: string
  specialty?: 'medical' | 'construction'
}

// 14-day epoch index — changes every 14 days, deterministic
function getFeaturedIndex(total: number): number {
  const epochMs = 14 * 24 * 60 * 60 * 1000
  return Math.floor(Date.now() / epochMs) % total
}

export default function VocabReader({ modules, accentColor, specialty }: Props) {
  const idx = getFeaturedIndex(modules.length)
  const featured = modules[idx]
  const [flipped, setFlipped] = useState<Set<number>>(new Set())

  // Merge base vocab (10) with book chapter extendedVocab to get 20 unique pairs
  const allChapters = specialty === 'construction' ? CONSTRUCTION_BOOK_CHAPTERS : MEDICAL_BOOK_CHAPTERS
  const matchingChapter = allChapters.find(c => c.id === featured?.id)
  const baseVocab = featured?.vocab ?? []
  const baseEnSet = new Set(baseVocab.map(v => v.en.toLowerCase()))
  const extraVocab = (matchingChapter?.extendedVocab ?? [])
    .filter(v => !baseEnSet.has(v.en.toLowerCase()))
    .slice(0, 10)
  const fullVocab = [...baseVocab, ...extraVocab]

  function toggleFlip(i: number) {
    setFlipped(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  if (!featured) return null

  const color = featured.color ?? accentColor

  return (
    <section style={{ padding: '0 0 8px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div
              style={{
                ...sansFont, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color,
                background: color + '15', borderRadius: 20, padding: '3px 11px',
              }}
            >
              Featured vocabulary
            </div>
            <div style={{ ...sansFont, fontSize: 11, color: '#71717A' }}>
              rotates every 14 days
            </div>
          </div>
          <h2 style={{ ...displayFont, fontSize: 24, color: '#F7F3EC', margin: 0 }}>
            {featured.emoji} {featured.title}
          </h2>
          <p style={{ ...sansFont, fontSize: 13, color: '#A89F94', marginTop: 4 }}>
            {featured.tagline}
          </p>
        </div>
      </div>

      {/* Vocab grid — tap card to flip to Spanish */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 10,
          marginBottom: 20,
        }}
      >
        {fullVocab.map((pair, i) => {
          const isFlipped = flipped.has(i)
          return (
            <button
              key={i}
              onClick={() => toggleFlip(i)}
              title={isFlipped ? pair.en : pair.es}
              style={{
                background: isFlipped ? color + '18' : '#161616',
                border: `1px solid ${isFlipped ? color + '50' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 12,
                padding: '14px 16px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.18s, border-color 0.18s',
                minHeight: 72,
                position: 'relative',
              }}
            >
              {/* Label: top-left when EN, bottom-right when ES */}
              <div style={{
                ...sansFont,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: isFlipped ? color : '#71717A',
                position: 'absolute',
                ...(isFlipped
                  ? { bottom: 12, right: 14 }
                  : { top: 12, left: 14 }),
                transition: 'color 0.18s',
              }}>
                {isFlipped ? 'ES' : 'EN'}
              </div>

              {/* Word: bottom-right when EN, top-left when ES */}
              <div style={{
                ...sansFont,
                fontSize: 14,
                color: '#F7F3EC',
                lineHeight: 1.4,
                fontWeight: isFlipped ? 600 : 400,
                position: 'absolute',
                maxWidth: 'calc(100% - 28px)',
                ...(isFlipped
                  ? { top: 12, left: 14 }
                  : { bottom: 12, right: 14, textAlign: 'right' }),
              }}>
                {isFlipped ? pair.es : pair.en}
              </div>
            </button>
          )
        })}
      </div>

      {/* Sample phrase */}
      <div
        style={{
          background: '#111111',
          border: `1px solid ${color}20`,
          borderRadius: 14,
          padding: '18px 20px',
          marginBottom: 20,
        }}
      >
        <div style={{ ...sansFont, fontSize: 10, fontWeight: 700, color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
          Sample phrase
        </div>
        <p style={{ ...sansFont, fontSize: 15, color: '#F7F3EC', margin: '0 0 6px', lineHeight: 1.5 }}>
          {featured.samplePhrase.en}
        </p>
        <p style={{ ...sansFont, fontSize: 15, color, margin: 0, lineHeight: 1.5, fontStyle: 'italic' }}>
          {featured.samplePhrase.es}
        </p>
      </div>

      <div style={{ ...sansFont, fontSize: 12, color: '#71717A', marginBottom: 16 }}>
        Tap any card to reveal the Spanish translation.
      </div>

      <a
        href={APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...sansFont,
          display: 'inline-block',
          background: color + '15',
          border: `1px solid ${color}40`,
          borderRadius: 24,
          color,
          fontWeight: 700,
          fontSize: 13,
          padding: '10px 22px',
          textDecoration: 'none',
          transition: 'background 0.15s',
        }}
      >
        Practice all {featured.title} vocabulary in the app →
      </a>
    </section>
  )
}
