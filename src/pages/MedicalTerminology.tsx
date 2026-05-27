import { useState, useMemo, useCallback } from 'react'
import { MED_TERMS, MED_TERM_CATEGORIES, type MedTerm } from '../data/medTermsData'
import { sansFont, serifFont } from '../constants'

type Mode = 'browse' | 'flashcard' | 'quiz'
type CategoryId = MedTerm['category'] | 'all'

const GOLD = '#C9A84C'
const BG = '#0D0D0D'
const SURFACE = '#1A1A1A'
const BORDER = 'rgba(201,168,76,0.15)'

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

// ── Flashcard component ──────────────────────────────────────────────────────
function Flashcard({ card, onNext, onPrev, index, total }: {
  card: MedTerm; onNext: () => void; onPrev: () => void; index: number; total: number
}) {
  const [flipped, setFlipped] = useState(false)
  const cat = MED_TERM_CATEGORIES.find(c => c.id === card.category)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <p style={{ ...sansFont, color: 'rgba(247,243,236,0.4)', fontSize: 13 }}>
        {index + 1} / {total} · {cat?.emoji} {cat?.label}
      </p>

      {/* Card */}
      <div
        onClick={() => setFlipped(f => !f)}
        style={{
          width: '100%', maxWidth: 560, minHeight: 280, cursor: 'pointer',
          backgroundColor: SURFACE, border: `1px solid ${BORDER}`,
          borderRadius: 16, padding: '40px 36px', display: 'flex',
          flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          gap: 16, transition: 'border-color 0.2s',
          borderColor: flipped ? GOLD : BORDER,
          textAlign: 'center',
        }}
      >
        {!flipped ? (
          <>
            <p style={{ ...serifFont, fontSize: 32, color: '#F7F3EC', fontWeight: 700, lineHeight: 1.2 }}>
              {card.term}
            </p>
            <p style={{ ...sansFont, fontSize: 12, color: 'rgba(247,243,236,0.35)', letterSpacing: 1, textTransform: 'uppercase' }}>
              tap to reveal definition
            </p>
          </>
        ) : (
          <>
            <p style={{ ...serifFont, fontSize: 24, color: GOLD, fontWeight: 700 }}>
              {card.definition}
            </p>
            {card.etymology && (
              <p style={{ ...sansFont, fontSize: 13, color: 'rgba(247,243,236,0.5)', fontStyle: 'italic' }}>
                {card.etymology}
              </p>
            )}
            {card.example && (
              <p style={{ ...sansFont, fontSize: 13, color: 'rgba(247,243,236,0.65)', lineHeight: 1.6, marginTop: 4 }}>
                {card.example}
              </p>
            )}
          </>
        )}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={() => { setFlipped(false); onPrev() }} style={btnStyle('ghost')}>← Prev</button>
        <button onClick={() => { setFlipped(false); onNext() }} style={btnStyle('primary')}>Next →</button>
      </div>
    </div>
  )
}

// ── Quiz component ────────────────────────────────────────────────────────────
function QuizMode({ cards }: { cards: MedTerm[] }) {
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const questions = useMemo(() => shuffle(cards).slice(0, Math.min(20, cards.length)).map(q => {
    const others = shuffle(cards.filter(c => c.id !== q.id)).slice(0, 3)
    const choices = shuffle([q, ...others])
    return { question: q, choices, correctIndex: choices.indexOf(q) }
  }), [cards])

  const current = questions[qIndex]

  function pick(i: number) {
    if (selected !== null) return
    setSelected(i)
    if (i === current.correctIndex) setScore(s => s + 1)
    setTimeout(() => {
      if (qIndex + 1 >= questions.length) { setDone(true) }
      else { setQIndex(q => q + 1); setSelected(null) }
    }, 1000)
  }

  if (done) return (
    <div style={{ textAlign: 'center', padding: '48px 24px' }}>
      <p style={{ ...serifFont, fontSize: 48, color: GOLD, fontWeight: 700 }}>{score}/{questions.length}</p>
      <p style={{ ...sansFont, fontSize: 18, color: '#F7F3EC', marginTop: 8 }}>
        {score >= questions.length * 0.8 ? 'Excellent — you know this set.' : score >= questions.length * 0.6 ? 'Good — a few more passes and you\'ll have it.' : 'Keep reviewing — try flashcard mode first.'}
      </p>
      <button onClick={() => { setQIndex(0); setSelected(null); setScore(0); setDone(false) }} style={{ ...btnStyle('primary'), marginTop: 24 }}>
        Retake Quiz
      </button>
    </div>
  )

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ ...sansFont, color: 'rgba(247,243,236,0.4)', fontSize: 13 }}>{qIndex + 1} / {questions.length}</p>
        <p style={{ ...sansFont, color: GOLD, fontSize: 13 }}>Score: {score}</p>
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, backgroundColor: 'rgba(201,168,76,0.15)', borderRadius: 2 }}>
        <div style={{ height: 3, backgroundColor: GOLD, borderRadius: 2, width: `${((qIndex) / questions.length) * 100}%`, transition: 'width 0.3s' }} />
      </div>

      <p style={{ ...sansFont, fontSize: 13, color: 'rgba(247,243,236,0.5)', textTransform: 'uppercase', letterSpacing: 1 }}>
        What does this term mean?
      </p>
      <p style={{ ...serifFont, fontSize: 28, color: '#F7F3EC', fontWeight: 700, lineHeight: 1.3 }}>
        {current.question.term}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
        {current.choices.map((choice, i) => {
          const isSelected = selected === i
          const isCorrect = i === current.correctIndex
          const showResult = selected !== null
          return (
            <button
              key={choice.id}
              onClick={() => pick(i)}
              style={{
                ...sansFont, padding: '14px 18px', borderRadius: 10, cursor: selected ? 'default' : 'pointer',
                border: '1px solid',
                textAlign: 'left', fontSize: 14, lineHeight: 1.4, transition: 'all 0.15s',
                backgroundColor: showResult && isCorrect ? 'rgba(34,197,94,0.15)' : showResult && isSelected && !isCorrect ? 'rgba(239,68,68,0.15)' : 'rgba(247,243,236,0.03)',
                borderColor: showResult && isCorrect ? '#22c55e' : showResult && isSelected && !isCorrect ? '#ef4444' : 'rgba(247,243,236,0.1)',
                color: showResult && isCorrect ? '#86efac' : showResult && isSelected && !isCorrect ? '#fca5a5' : '#F7F3EC',
              }}
            >
              <span style={{ color: GOLD, marginRight: 10, fontWeight: 700 }}>{String.fromCharCode(65 + i)}.</span>
              {choice.definition}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Browse component ──────────────────────────────────────────────────────────
function BrowseMode({ cards }: { cards: MedTerm[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
      {cards.map(card => (
        <div key={card.id} style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 12, padding: '16px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
            <p style={{ ...serifFont, fontSize: 17, color: GOLD, fontWeight: 700 }}>{card.term}</p>
            <span style={{ ...sansFont, fontSize: 10, color: 'rgba(247,243,236,0.3)', textTransform: 'uppercase', letterSpacing: 0.5, whiteSpace: 'nowrap' }}>
              {card.category.replace('-', ' ')}
            </span>
          </div>
          <p style={{ ...sansFont, fontSize: 13, color: '#F7F3EC', lineHeight: 1.5, marginBottom: card.example ? 6 : 0 }}>
            {card.definition}
          </p>
          {card.example && (
            <p style={{ ...sansFont, fontSize: 12, color: 'rgba(247,243,236,0.45)', lineHeight: 1.5, fontStyle: 'italic' }}>
              {card.example.split(';')[0]}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function btnStyle(variant: 'primary' | 'ghost'): React.CSSProperties {
  return {
    ...sansFont, padding: '10px 22px', borderRadius: 8, cursor: 'pointer', fontSize: 14, fontWeight: 600,
    border: '1px solid',
    ...(variant === 'primary'
      ? { backgroundColor: GOLD, color: BG, borderColor: GOLD }
      : { backgroundColor: 'transparent', color: 'rgba(247,243,236,0.6)', borderColor: 'rgba(247,243,236,0.15)' })
  }
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function MedicalTerminology() {
  const [activeCat, setActiveCat] = useState<CategoryId>('all')
  const [mode, setMode] = useState<Mode>('browse')
  const [cardIndex, setCardIndex] = useState(0)
  const [shuffled, setShuffled] = useState(false)

  const filtered = useMemo(() =>
    activeCat === 'all' ? MED_TERMS : MED_TERMS.filter(c => c.category === activeCat),
    [activeCat]
  )

  const deck = useMemo(() => shuffled ? shuffle(filtered) : filtered, [filtered, shuffled])

  const handleCatChange = useCallback((cat: CategoryId) => {
    setActiveCat(cat)
    setCardIndex(0)
  }, [])

  const handleModeChange = useCallback((m: Mode) => {
    setMode(m)
    setCardIndex(0)
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: BG, color: '#F7F3EC' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '64px 24px 40px', borderBottom: `1px solid ${BORDER}` }}>
        <p style={{ ...sansFont, fontSize: 12, color: GOLD, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
          Language Threshold · English First
        </p>
        <h1 style={{ ...serifFont, fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: '#F7F3EC', marginBottom: 12, lineHeight: 1.2 }}>
          Medical Terminology
        </h1>
        <p style={{ ...sansFont, fontSize: 16, color: 'rgba(247,243,236,0.55)', maxWidth: 520, margin: '0 auto 20px' }}>
          133 terms — prefixes, roots, suffixes, body systems, pharmacology, oncology, and more.
          Master the language of medicine before adding Spanish.
        </p>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ ...sansFont, fontSize: 12, color: 'rgba(247,243,236,0.4)', backgroundColor: 'rgba(247,243,236,0.06)', padding: '4px 10px', borderRadius: 20 }}>CMA Exam</span>
          <span style={{ ...sansFont, fontSize: 12, color: 'rgba(247,243,236,0.4)', backgroundColor: 'rgba(247,243,236,0.06)', padding: '4px 10px', borderRadius: 20 }}>CPC Exam</span>
          <span style={{ ...sansFont, fontSize: 12, color: 'rgba(247,243,236,0.4)', backgroundColor: 'rgba(247,243,236,0.06)', padding: '4px 10px', borderRadius: 20 }}>Medical Assistants</span>
          <span style={{ ...sansFont, fontSize: 12, color: 'rgba(247,243,236,0.4)', backgroundColor: 'rgba(247,243,236,0.06)', padding: '4px 10px', borderRadius: 20 }}>Medical Coders</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px' }}>

        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          <button
            onClick={() => handleCatChange('all')}
            style={{ ...sansFont, padding: '7px 14px', borderRadius: 20, fontSize: 13, cursor: 'pointer', fontWeight: activeCat === 'all' ? 700 : 400, border: '1px solid', backgroundColor: activeCat === 'all' ? GOLD : 'transparent', color: activeCat === 'all' ? BG : 'rgba(247,243,236,0.55)', borderColor: activeCat === 'all' ? GOLD : 'rgba(247,243,236,0.15)' }}
          >
            All ({MED_TERMS.length})
          </button>
          {MED_TERM_CATEGORIES.map(cat => {
            const count = MED_TERMS.filter(c => c.category === cat.id).length
            const active = activeCat === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => handleCatChange(cat.id as CategoryId)}
                style={{ ...sansFont, padding: '7px 14px', borderRadius: 20, fontSize: 13, cursor: 'pointer', fontWeight: active ? 700 : 400, border: '1px solid', backgroundColor: active ? GOLD : 'transparent', color: active ? BG : 'rgba(247,243,236,0.55)', borderColor: active ? GOLD : 'rgba(247,243,236,0.15)' }}
              >
                {cat.emoji} {cat.label} ({count})
              </button>
            )
          })}
        </div>

        {/* Mode tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 32, backgroundColor: 'rgba(247,243,236,0.04)', borderRadius: 10, padding: 4, width: 'fit-content' }}>
          {(['browse', 'flashcard', 'quiz'] as Mode[]).map(m => (
            <button
              key={m}
              onClick={() => handleModeChange(m)}
              style={{ ...sansFont, padding: '8px 18px', borderRadius: 7, fontSize: 13, cursor: 'pointer', fontWeight: mode === m ? 600 : 400, border: 'none', backgroundColor: mode === m ? GOLD : 'transparent', color: mode === m ? BG : 'rgba(247,243,236,0.5)', textTransform: 'capitalize' }}
            >
              {m === 'flashcard' ? '🃏 Flashcards' : m === 'quiz' ? '✏️ Quiz' : '📖 Browse'}
            </button>
          ))}
        </div>

        {/* Flashcard controls */}
        {mode === 'flashcard' && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <p style={{ ...sansFont, fontSize: 13, color: 'rgba(247,243,236,0.4)' }}>{deck.length} cards in deck</p>
            <button onClick={() => { setShuffled(s => !s); setCardIndex(0) }} style={btnStyle('ghost')}>
              {shuffled ? '↕ Shuffled' : '↕ Shuffle'}
            </button>
          </div>
        )}

        {/* Content */}
        {mode === 'browse' && <BrowseMode cards={filtered} />}
        {mode === 'flashcard' && deck.length > 0 && (
          <Flashcard
            card={deck[cardIndex]}
            index={cardIndex}
            total={deck.length}
            onNext={() => setCardIndex(i => (i + 1) % deck.length)}
            onPrev={() => setCardIndex(i => (i - 1 + deck.length) % deck.length)}
          />
        )}
        {mode === 'quiz' && <QuizMode cards={filtered} />}

        {/* Coming soon: Spanish layer */}
        <div style={{ marginTop: 56, padding: '24px 28px', backgroundColor: 'rgba(201,168,76,0.06)', border: `1px solid ${BORDER}`, borderRadius: 14, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ ...serifFont, fontSize: 17, fontWeight: 700, color: GOLD, marginBottom: 4 }}>Next: Spanish translations</p>
            <p style={{ ...sansFont, fontSize: 13, color: 'rgba(247,243,236,0.5)', lineHeight: 1.6 }}>
              Once you know the English terms, add the Spanish layer — learn how to say each term with a patient. Each card will include the Spanish equivalent and a sample clinical phrase.
            </p>
          </div>
          <a href="/medical-spanish" style={{ ...sansFont, padding: '10px 20px', borderRadius: 8, backgroundColor: GOLD, color: BG, fontWeight: 700, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Go to Medical Spanish →
          </a>
        </div>
      </div>
    </div>
  )
}
