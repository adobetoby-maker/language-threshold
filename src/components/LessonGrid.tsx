import { useState, useEffect } from 'react'
import { sansFont, displayFont } from '../constants'
import WordCard from './WordCard'

interface Lesson {
  id: string
  lessonNumber: number
  title: string
  scenario: string
  vocab: Array<{ en: string; es: string }>
  samplePhrase: { en: string; es: string }
}

interface Props {
  subsectionId: string
  lessons: Lesson[]
  color: string
}

const STORAGE_KEY = 'lt-lesson-progress'
const LEGACY_KEY = 'lt-construction-progress'

function loadProgress(): Record<string, boolean> {
  try {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) ?? '{}')
    if (Object.keys(legacy).length > 0) {
      const merged = { ...legacy, ...current }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
      localStorage.removeItem(LEGACY_KEY)
      return merged
    }
    return current
  } catch { return {} }
}

function saveProgress(p: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
}

interface TappedWord { word: string; sentence: string; x: number; y: number }

function LessonDetail({ lesson, color, onClose }: { lesson: Lesson; color: string; onClose: () => void }) {
  const [tapped, setTapped] = useState<TappedWord | null>(null)
  const [practiced, setPracticed] = useState(() => loadProgress()[lesson.id] ?? false)

  function markPracticed() {
    const p = loadProgress()
    p[lesson.id] = true
    saveProgress(p)
    setPracticed(true)
  }

  return (
    <div style={{ backgroundColor: '#161616', border: `1px solid ${color}30`, borderRadius: 16, padding: '24px 20px', marginTop: 12 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <span style={{ ...sansFont, fontSize: 11, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Lesson {lesson.lessonNumber}
          </span>
          <h3 style={{ ...displayFont, fontSize: 22, color: '#F7F3EC', margin: '4px 0 6px' }}>{lesson.title}</h3>
          <p style={{ ...sansFont, fontSize: 13, color: '#A89F94', margin: 0, lineHeight: 1.5 }}>{lesson.scenario}</p>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#71717A', fontSize: 22, cursor: 'pointer', padding: '0 0 0 12px', lineHeight: 1, flexShrink: 0 }}>×</button>
      </div>

      <div style={{ height: 1, backgroundColor: `${color}18`, margin: '16px 0' }} />

      {/* Vocab grid */}
      <p style={{ ...sansFont, fontSize: 10, fontWeight: 700, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px' }}>
        Vocabulary — tap to look up
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: 20 }}>
        {lesson.vocab.map(v => (
          <div key={v.en} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 6 }}>
            <span style={{ ...sansFont, fontSize: 13, fontWeight: 600, color: '#F7F3EC' }}>{v.en}</span>
            <button
              onClick={e => {
                const rect = (e.target as HTMLElement).getBoundingClientRect()
                setTapped({ word: v.es.split(/[\s/,]/)[0], sentence: `${v.en}: ${v.es}`, x: rect.left + rect.width / 2, y: rect.bottom })
              }}
              style={{ ...sansFont, background: 'none', border: 'none', padding: 0, cursor: 'pointer', color, fontSize: 13, textDecoration: 'underline dotted', textUnderlineOffset: 3, textAlign: 'right' }}
            >
              {v.es}
            </button>
          </div>
        ))}
      </div>

      {/* Sample phrase */}
      <div style={{ backgroundColor: `${color}08`, border: `1px solid ${color}20`, borderRadius: 10, padding: '12px 14px', marginBottom: 16 }}>
        <p style={{ ...sansFont, fontSize: 10, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px' }}>Sample phrase</p>
        <p style={{ ...sansFont, fontSize: 14, fontWeight: 600, color: '#F7F3EC', margin: '0 0 4px', lineHeight: 1.5 }}>"{lesson.samplePhrase.es}"</p>
        <p style={{ ...sansFont, fontSize: 12, color: '#71717A', margin: 0, lineHeight: 1.4 }}>"{lesson.samplePhrase.en}"</p>
      </div>

      {/* Mark practiced */}
      {practiced ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', backgroundColor: `${color}12`, border: `1px solid ${color}30`, borderRadius: 10 }}>
          <span style={{ fontSize: 16 }}>✓</span>
          <span style={{ ...sansFont, fontSize: 13, fontWeight: 600, color }}>Practiced</span>
        </div>
      ) : (
        <button
          onClick={markPracticed}
          style={{ width: '100%', padding: '11px 16px', backgroundColor: color, border: 'none', borderRadius: 10, ...sansFont, fontSize: 14, fontWeight: 700, color: '#0D0D0D', cursor: 'pointer' }}
        >
          Mark as Practiced ✓
        </button>
      )}

      {tapped && <WordCard {...tapped} color={color} onClose={() => setTapped(null)} />}
    </div>
  )
}

export default function LessonGrid({ lessons, color }: Omit<Props, 'subsectionId'> & { subsectionId?: string }) {
  const [progress, setProgress] = useState<Record<string, boolean>>(loadProgress)
  const [openLesson, setOpenLesson] = useState<string | null>(null)

  // Refresh progress after marking a lesson practiced
  useEffect(() => {
    function onStorage() { setProgress(loadProgress()) }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const practicedCount = lessons.filter(l => progress[l.id]).length

  // Find first unpracticed lesson for "recommended next" badge
  const nextLesson = lessons.find(l => !progress[l.id])

  return (
    <div>
      {/* Progress bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ ...sansFont, fontSize: 12, color: '#A89F94' }}>Progress</span>
          <span style={{ ...sansFont, fontSize: 12, fontWeight: 700, color }}>{practicedCount}/{lessons.length} lessons</span>
        </div>
        <div style={{ height: 4, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(practicedCount / lessons.length) * 100}%`, backgroundColor: color, borderRadius: 2, transition: 'width 0.4s ease' }} />
        </div>
      </div>

      {/* Lesson grid — 3 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {lessons.map(lesson => {
          const done = progress[lesson.id]
          const isNext = lesson.id === nextLesson?.id
          const isOpen = openLesson === lesson.id

          return (
            <div key={lesson.id} style={{ gridColumn: isOpen ? '1 / -1' : undefined }}>
              {/* Lesson card */}
              <button
                onClick={() => setOpenLesson(isOpen ? null : lesson.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 12px',
                  backgroundColor: done ? `${color}10` : isOpen ? `${color}15` : '#1A1A1A',
                  border: `1px solid ${isOpen || isNext ? color + '50' : done ? color + '30' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 10,
                  cursor: 'pointer',
                  transition: 'border-color 0.15s, background-color 0.15s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ ...sansFont, fontSize: 11, fontWeight: 700, color: done ? color : '#71717A' }}>
                    {String(lesson.lessonNumber).padStart(2, '0')}
                    {done && ' ✓'}
                  </span>
                  {isNext && !done && (
                    <span style={{ ...sansFont, fontSize: 9, fontWeight: 700, color: '#0D0D0D', backgroundColor: color, borderRadius: 4, padding: '1px 5px' }}>NEXT</span>
                  )}
                </div>
                <p style={{ ...sansFont, fontSize: 12, fontWeight: 600, color: '#F7F3EC', margin: '0 0 3px', lineHeight: 1.3 }}>{lesson.title}</p>
                <p style={{ ...sansFont, fontSize: 10, color: '#71717A', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lesson.scenario}</p>
              </button>

              {/* Lesson detail — spans full width when open */}
              {isOpen && (
                <LessonDetail
                  lesson={lesson}
                  color={color}
                  onClose={() => {
                    setOpenLesson(null)
                    setProgress(loadProgress())
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
