import { useEffect } from 'react'
import { MEDICAL_BOOK_CHAPTERS, CONSTRUCTION_BOOK_CHAPTERS } from '../data/bookData'
import type { BookChapter } from '../data/bookData'
import { MEDICAL_TRIFOLDS, CONSTRUCTION_TRIFOLDS } from '../data/trifoldData'
import type { TrifoldDialogue } from '../data/trifoldData'
import { MEDICAL_MODULES } from '../data/medicalModules'
import { CONSTRUCTION_MODULES } from '../data/constructionModules'

interface Props {
  specialty: 'medical' | 'construction'
}

const ACCENT: Record<'medical' | 'construction', string> = {
  medical: '#4A9EFF',
  construction: '#FF7A4A',
}

// ─── Panel components ────────────────────────────────────────────────────────

function CoverPanel({ chapter, specialty }: { chapter: BookChapter; specialty: 'medical' | 'construction' }) {
  const accent = chapter.color
  const label = specialty === 'medical' ? 'Medical Spanish' : 'Construction Spanish'

  // Pick the 3 most essential phrases (first 3)
  const topPhrases = chapter.phrases.slice(0, 3)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0D0D0D', color: '#F7F3EC' }}>
      {/* Color bar */}
      <div style={{ height: 8, background: accent, flexShrink: 0 }} />

      {/* Header */}
      <div style={{ padding: '14px 14px 10px', flexShrink: 0 }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent, marginBottom: 6 }}>
          {label} · Quick Reference
        </div>
        <div style={{ fontSize: 32, lineHeight: 1 }}>{chapter.emoji}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#F7F3EC', marginTop: 6, lineHeight: 1.2, fontFamily: 'serif' }}>
          {chapter.title}
        </div>
      </div>

      <div style={{ width: 32, height: 2, background: accent, marginLeft: 14, flexShrink: 0 }} />

      {/* Top phrases */}
      <div style={{ padding: '10px 14px', flex: 1, overflow: 'hidden' }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent, marginBottom: 8 }}>
          Essential phrases
        </div>
        {topPhrases.map((p, i) => (
          <div key={i} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: i < topPhrases.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontSize: 9.5, color: '#A89F94', lineHeight: 1.4, marginBottom: 2 }}>{p.en}</div>
            <div style={{ fontSize: 10.5, color: '#F7F3EC', fontWeight: 700, lineHeight: 1.4 }}>{p.es}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ padding: '10px 14px 12px', borderTop: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}>
        <div style={{ fontSize: 8, color: '#71717A' }}>languagethreshold.com</div>
        <div style={{ fontSize: 8, color: '#71717A', marginTop: 2 }}>
          {specialty === 'medical' ? 'medicalspanish.app' : 'constructionspanish.app'}
        </div>
      </div>
    </div>
  )
}

function ExamPanel({ chapter, specialty }: { chapter: BookChapter; specialty: 'medical' | 'construction' }) {
  const accent = chapter.color
  const label = specialty === 'medical' ? 'Exam questions' : 'Essential instructions'
  const sublabel = specialty === 'medical' ? 'Ask your patient →' : 'Tell your crew →'
  const phrases = chapter.phrases.slice(0, 8)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', color: '#111' }}>
      <div style={{ height: 8, background: accent, flexShrink: 0 }} />
      <div style={{ padding: '12px 14px 8px', flexShrink: 0 }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>{sublabel}</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginTop: 3, fontFamily: 'serif' }}>{label}</div>
      </div>
      <div style={{ flex: 1, padding: '0 14px 12px', overflow: 'hidden' }}>
        {phrases.map((p, i) => (
          <div key={i} style={{ marginBottom: 8, paddingBottom: 8, borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: 9, color: '#888', lineHeight: 1.3, marginBottom: 1 }}>{p.en}</div>
            <div style={{ fontSize: 10.5, color: '#111', fontWeight: 700, lineHeight: 1.4 }}>{p.es}</div>
            {p.context && <div style={{ fontSize: 8, color: '#aaa', fontStyle: 'italic', marginTop: 1 }}>{p.context}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

function DialoguePanel({ chapter, dialogues, specialty }: { chapter: BookChapter; dialogues: TrifoldDialogue[]; specialty: 'medical' | 'construction' }) {
  const accent = chapter.color
  const theyLabel = specialty === 'medical' ? 'Patient says' : 'Worker asks'
  const youLabel = specialty === 'medical' ? 'You say' : 'You respond'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', color: '#111' }}>
      <div style={{ height: 8, background: accent, flexShrink: 0 }} />
      <div style={{ padding: '12px 14px 8px', flexShrink: 0 }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>
          Common dialogue
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginTop: 3, fontFamily: 'serif' }}>
          {theyLabel} → {youLabel}
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 14px 12px', overflow: 'hidden' }}>
        {dialogues.slice(0, 8).map((d, i) => (
          <div key={i} style={{ marginBottom: 8, paddingBottom: 8, borderBottom: '1px solid #f0f0f0' }}>
            {/* They say */}
            <div style={{ display: 'flex', gap: 5, marginBottom: 3 }}>
              <span style={{ fontSize: 8, fontWeight: 700, color: '#888', flexShrink: 0, paddingTop: 1 }}>THEY:</span>
              <div>
                <div style={{ fontSize: 9, color: '#555', lineHeight: 1.3 }}>{d.they_en}</div>
                <div style={{ fontSize: 10, color: '#333', fontWeight: 600, lineHeight: 1.3 }}>{d.they_es}</div>
              </div>
            </div>
            {/* You say */}
            <div style={{ display: 'flex', gap: 5 }}>
              <span style={{ fontSize: 8, fontWeight: 700, color: accent, flexShrink: 0, paddingTop: 1 }}>YOU:</span>
              <div>
                <div style={{ fontSize: 9, color: '#555', lineHeight: 1.3 }}>{d.you_en}</div>
                <div style={{ fontSize: 10.5, color: '#111', fontWeight: 700, lineHeight: 1.3 }}>{d.you_es}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function VocabPanel({ chapter }: { chapter: BookChapter }) {
  const accent = chapter.color
  const vocab = chapter.extendedVocab.slice(0, 18)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', color: '#111' }}>
      <div style={{ height: 8, background: accent, flexShrink: 0 }} />
      <div style={{ padding: '12px 14px 8px', flexShrink: 0 }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>Reference</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginTop: 3, fontFamily: 'serif' }}>Key vocabulary</div>
      </div>
      <div style={{ flex: 1, padding: '0 10px 12px', overflow: 'hidden' }}>
        {vocab.map((v, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, padding: '3.5px 4px', background: i % 2 === 0 ? '#f8f8f8' : '#fff', borderBottom: '1px solid #efefef', fontSize: 9 }}>
            <span style={{ color: '#666' }}>{v.en}</span>
            <span style={{ color: '#111', fontWeight: 700 }}>{v.es}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhrasesBackPanel({ chapter, specialty }: { chapter: BookChapter; specialty: 'medical' | 'construction' }) {
  const accent = chapter.color
  // Second half of phrases — the ones not on the front
  const backPhrases = chapter.phrases.slice(4, 12)
  const label = specialty === 'medical' ? 'Clinical commands' : 'Jobsite commands'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', color: '#111' }}>
      <div style={{ height: 8, background: accent, flexShrink: 0 }} />
      <div style={{ padding: '12px 14px 8px', flexShrink: 0 }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>
          {label}
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginTop: 3, fontFamily: 'serif' }}>More phrases</div>
      </div>
      <div style={{ flex: 1, padding: '0 14px 12px', overflow: 'hidden' }}>
        {backPhrases.map((p, i) => (
          <div key={i} style={{ marginBottom: 8, paddingBottom: 8, borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: 9, color: '#888', lineHeight: 1.3, marginBottom: 1 }}>{p.en}</div>
            <div style={{ fontSize: 10.5, color: '#111', fontWeight: 700, lineHeight: 1.4 }}>{p.es}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GrammarCulturePanel({ chapter }: { chapter: BookChapter }) {
  const accent = chapter.color

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0D0D0D', color: '#F7F3EC' }}>
      <div style={{ height: 8, background: accent, flexShrink: 0 }} />

      {/* Grammar */}
      <div style={{ padding: '12px 14px 10px', flex: 1, overflow: 'hidden' }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent, marginBottom: 4 }}>
          Grammar focus
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#F7F3EC', marginBottom: 4, lineHeight: 1.3 }}>
          {chapter.grammarFocus.title}
        </div>
        {chapter.grammarFocus.explanation && (
          <div style={{ fontSize: 8.5, color: '#A89F94', lineHeight: 1.5, marginBottom: 8 }}>
            {chapter.grammarFocus.explanation.slice(0, 200)}
          </div>
        )}
        {chapter.grammarFocus.examples.slice(0, 3).map((ex, i) => (
          <div key={i} style={{ marginBottom: 6, paddingBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: 8.5, color: '#71717A' }}>{ex.en}</div>
            <div style={{ fontSize: 9.5, color: '#F7F3EC', fontWeight: 600 }}>{ex.es}</div>
          </div>
        ))}
      </div>

      {/* Cultural note */}
      {chapter.culturalNote && (
        <div style={{ padding: '10px 14px 14px', borderTop: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}>
          <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 4 }}>
            Cultural note
          </div>
          <div style={{ fontSize: 8.5, color: '#A89F94', lineHeight: 1.5 }}>
            {chapter.culturalNote.slice(0, 200)}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── One complete trifold (2 print pages) ────────────────────────────────────

const PANEL_STYLE: React.CSSProperties = {
  overflow: 'hidden',
  position: 'relative',
}

const FOLD_LINE: React.CSSProperties = {
  borderLeft: '1px dashed #ccc',
}

function TrifoldModule({ chapter, specialty }: { chapter: BookChapter; specialty: 'medical' | 'construction' }) {
  const trifolds = specialty === 'medical' ? MEDICAL_TRIFOLDS : CONSTRUCTION_TRIFOLDS
  const dialogueData = trifolds[chapter.id]
  const dialogues = dialogueData?.dialogues ?? []

  const pageStyle: React.CSSProperties = {
    width: '10.5in',
    height: '8in',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    pageBreakAfter: 'always' as const,
    boxSizing: 'border-box',
  }

  return (
    <>
      {/* FRONT: [Patient Q&A | Exam Questions | Cover] */}
      <div style={pageStyle} className="trifold-page">
        <div style={{ ...PANEL_STYLE, ...FOLD_LINE }}>
          <DialoguePanel chapter={chapter} dialogues={dialogues} specialty={specialty} />
        </div>
        <div style={{ ...PANEL_STYLE, ...FOLD_LINE }}>
          <ExamPanel chapter={chapter} specialty={specialty} />
        </div>
        <div style={{ ...PANEL_STYLE }}>
          <CoverPanel chapter={chapter} specialty={specialty} />
        </div>
      </div>

      {/* BACK (flip horizontally): [Grammar/Culture | More Phrases | Vocabulary] */}
      <div style={pageStyle} className="trifold-page">
        <div style={{ ...PANEL_STYLE }}>
          <GrammarCulturePanel chapter={chapter} />
        </div>
        <div style={{ ...PANEL_STYLE, ...FOLD_LINE }}>
          <PhrasesBackPanel chapter={chapter} specialty={specialty} />
        </div>
        <div style={{ ...PANEL_STYLE, ...FOLD_LINE }}>
          <VocabPanel chapter={chapter} />
        </div>
      </div>
    </>
  )
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function TrifoldPrint({ specialty }: Props) {
  const chapters = specialty === 'medical' ? MEDICAL_BOOK_CHAPTERS : CONSTRUCTION_BOOK_CHAPTERS
  const baseModules = specialty === 'medical' ? MEDICAL_MODULES : CONSTRUCTION_MODULES
  const title = specialty === 'medical' ? 'Medical Spanish' : 'Construction Spanish'
  const accent = ACCENT[specialty]

  // Get modules that have a matching book chapter
  const modulesWithChapters = baseModules.filter(m => chapters.find(c => c.id === m.id))

  useEffect(() => {
    document.title = `${title} Trifold Cards — Language Threshold`
  }, [title])

  return (
    <div style={{ background: '#e8e8e8', minHeight: '100vh' }}>
      <style>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          body { background: white !important; margin: 0; padding: 0; }
          .trifold-page { page-break-after: always; margin: 0; }
          @page { size: letter landscape; margin: 0.25in; }
        }
        .trifold-page { font-family: 'Source Sans 3', Arial, sans-serif; }
      `}</style>

      {/* Controls — hidden when printing */}
      <div className="no-print" style={{ position: 'fixed', top: 16, right: 16, zIndex: 100, display: 'flex', gap: 10, flexDirection: 'column', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => window.print()}
            style={{ background: accent, color: '#fff', border: 'none', borderRadius: 8, padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
          >
            Print All {chapters.length} Cards
          </button>
          <button
            onClick={() => history.back()}
            style={{ background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 14, cursor: 'pointer' }}
          >
            ← Back
          </button>
        </div>
        <div style={{ fontSize: 12, color: '#555', background: 'white', padding: '8px 12px', borderRadius: 6 }}>
          Each card = 2 pages (print double-sided, landscape, flip on short edge)
        </div>
      </div>

      {/* Module selector */}
      <div className="no-print" style={{ padding: '80px 40px 20px', display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 900 }}>
        {modulesWithChapters.map(m => (
          <a
            key={m.id}
            href={`#${m.id}`}
            style={{ fontSize: 12, background: '#fff', border: '1px solid #ddd', borderRadius: 6, padding: '4px 10px', textDecoration: 'none', color: '#333', fontFamily: 'sans-serif' }}
          >
            {m.emoji} {m.title}
          </a>
        ))}
      </div>

      {/* Trifolds */}
      <div style={{ padding: '20px 40px 60px' }}>
        {chapters.map(chapter => (
          <div key={chapter.id} id={chapter.id} style={{ marginBottom: 48 }}>
            {/* On-screen label */}
            <div className="no-print" style={{ fontFamily: 'sans-serif', fontSize: 13, fontWeight: 700, color: '#444', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>{chapter.emoji}</span>
              {chapter.title}
              <span style={{ fontSize: 11, color: '#999', fontWeight: 400 }}>— Front + Back</span>
            </div>

            {/* Trifold scaled for screen preview */}
            <div style={{ transform: 'scale(0.72)', transformOrigin: 'top left', width: '10.5in', marginBottom: '-2.2in' }}>
              <TrifoldModule chapter={chapter} specialty={specialty} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
