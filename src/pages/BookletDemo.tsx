import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HELLO_LITTLE_ONE,
  type PublicBookletSentence,
} from '../data/booklets'
import { usePageMeta } from '../hooks/usePageMeta'

const GOLD = '#C9A84C'
const WORD_PATTERN = /\p{L}+(?:['’]\p{L}+)*/gu
const QUESTIONS = [
  { id: 'meaning', label: 'What does this word mean here?' },
  { id: 'sentence', label: 'How does it fit the sentence?' },
  { id: 'simple', label: 'Explain it simply' },
] as const

interface Selection {
  displayLanguage: 'source' | 'target'
  displayedSentence: string
  occurrenceIndex: number
  sentence: PublicBookletSentence
  tappedWord: string
}

type HelpState =
  | { kind: 'static' }
  | { kind: 'loading' }
  | { kind: 'answer'; explanation: string }
  | { kind: 'unavailable'; message: string }

function InteractiveSentence({
  sentence,
  side,
  onSelect,
}: {
  sentence: PublicBookletSentence
  side: 'source' | 'target'
  onSelect: (selection: Selection, trigger: HTMLButtonElement) => void
}) {
  const displayedSentence = sentence[side]
  const matches = [...displayedSentence.matchAll(WORD_PATTERN)]
  const counts = new Map<string, number>()
  const parts: Array<string | { word: string; occurrenceIndex: number }> = []
  let cursor = 0

  for (const match of matches) {
    const word = match[0]
    const index = match.index ?? 0
    if (index > cursor) parts.push(displayedSentence.slice(cursor, index))
    const key = word.normalize('NFC').toLocaleLowerCase('und')
    const occurrenceIndex = counts.get(key) ?? 0
    counts.set(key, occurrenceIndex + 1)
    parts.push({ word, occurrenceIndex })
    cursor = index + word.length
  }
  if (cursor < displayedSentence.length) parts.push(displayedSentence.slice(cursor))

  return (
    <p
      lang={side === 'source' ? 'en' : 'es'}
      data-sentence-id={sentence.sentenceId}
      className={side === 'source' ? 'font-serif text-xl leading-relaxed' : 'font-serif text-2xl leading-relaxed'}
    >
      {parts.map((part, index) =>
        typeof part === 'string' ? (
          <span key={`${index}:${part}`}>{part}</span>
        ) : (
          <button
            key={`${index}:${part.word}`}
            type="button"
            data-sentence-id={sentence.sentenceId}
            data-occurrence-index={part.occurrenceIndex}
            className="inline-flex min-h-11 items-center rounded px-0.5 underline decoration-amber-300/40 decoration-dotted underline-offset-4 hover:bg-amber-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            aria-label={`Get bounded word help for ${part.word}, occurrence ${part.occurrenceIndex + 1}`}
            onClick={(event) =>
              onSelect(
                {
                  displayLanguage: side,
                  displayedSentence,
                  occurrenceIndex: part.occurrenceIndex,
                  sentence,
                  tappedWord: part.word,
                },
                event.currentTarget,
              )
            }
          >
            {part.word}
          </button>
        ),
      )}
    </p>
  )
}

export default function BookletDemo() {
  const [pageIndex, setPageIndex] = useState(0)
  const [imageFailed, setImageFailed] = useState(false)
  const [selection, setSelection] = useState<Selection | null>(null)
  const [helpState, setHelpState] = useState<HelpState>({ kind: 'static' })
  const helpHeadingRef = useRef<HTMLHeadingElement>(null)
  const selectedTriggerRef = useRef<HTMLButtonElement | null>(null)
  const requestVersionRef = useRef(0)
  const page = HELLO_LITTLE_ONE.pages[pageIndex]
  const isLast = pageIndex === HELLO_LITTLE_ONE.pages.length - 1

  usePageMeta({
    title: 'Hello, Little One — English and Spanish Reader',
    canonical: 'https://languagethreshold.com/readers/hello-little-one',
    description:
      'Preview Hello, Little One with paired English and Spanish text and safe, bounded word help.',
  })

  const staticFallback = useMemo(() => {
    if (!selection) return null
    const side = selection.displayLanguage
    const normalized = selection.tappedWord.normalize('NFC').toLocaleLowerCase('und')
    const vocabulary = HELLO_LITTLE_ONE.vocabulary.find(
      (entry) => entry.term[side].normalize('NFC').toLocaleLowerCase('und') === normalized,
    )
    return vocabulary
      ? `${vocabulary.term.source} / ${vocabulary.term.target}: ${vocabulary.gloss.source}`
      : `${selection.sentence.source} / ${selection.sentence.target}`
  }, [selection])

  const goTo = useCallback((next: number) => {
    requestVersionRef.current += 1
    setPageIndex(Math.max(0, Math.min(next, HELLO_LITTLE_ONE.pages.length - 1)))
    setImageFailed(false)
    setSelection(null)
    selectedTriggerRef.current = null
    setHelpState({ kind: 'static' })
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goTo(pageIndex - 1)
      if (event.key === 'ArrowRight') goTo(pageIndex + 1)
      if (event.key === 'Home') goTo(0)
      if (event.key === 'End') goTo(HELLO_LITTLE_ONE.pages.length - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goTo, pageIndex])

  async function ask(questionId: (typeof QUESTIONS)[number]['id']) {
    if (!selection) return
    const requestVersion = ++requestVersionRef.current
    setHelpState({ kind: 'loading' })
    try {
      const response = await fetch('/api/booklet-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audienceMode: 'caregiver-guided',
          bookId: HELLO_LITTLE_ONE.bookId,
          displayLanguage: selection.displayLanguage,
          displayedSentence: selection.displayedSentence,
          editionId: HELLO_LITTLE_ONE.editionId,
          occurrenceIndex: selection.occurrenceIndex,
          pageId: page.pageId,
          questionId,
          sentenceId: selection.sentence.sentenceId,
          tappedWord: selection.tappedWord,
        }),
      })
      const payload = (await response.json()) as {
        state?: string
        explanation?: string
        message?: string
      }
      if (requestVersion !== requestVersionRef.current) return
      if (!response.ok || payload.state !== 'answer' || !payload.explanation) {
        setHelpState({
          kind: 'unavailable',
          message:
            payload.message ??
            'Word help is resting. You can keep reading the English and Spanish story together.',
        })
      } else {
        setHelpState({ kind: 'answer', explanation: payload.explanation })
      }
    } catch {
      if (requestVersion !== requestVersionRef.current) return
      setHelpState({
        kind: 'unavailable',
        message: 'Word help is resting. You can keep reading the paired story together.',
      })
    }
  }

  return (
    <div
      className="min-h-screen bg-[#070A12] px-4 pb-20 pt-28 text-white sm:px-8"
      data-book-id={HELLO_LITTLE_ONE.bookId}
      data-edition-id={HELLO_LITTLE_ONE.editionId}
      data-page-id={page.pageId}
    >
      <header className="mx-auto mb-7 flex max-w-6xl flex-wrap items-end justify-between gap-4">
        <div>
          <Link to="/readers" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 hover:text-white">
            ← All readers
          </Link>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            Caregiver-guided · English / Español
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">{HELLO_LITTLE_ONE.title.source}</h1>
          <p lang="es" className="mt-1 text-white/55">{HELLO_LITTLE_ONE.title.target}</p>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-white/45">
          Tap one word, then choose one fixed question. There is no open chatbot or text entry.
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-amber-300/20 bg-white/[0.035] lg:grid-cols-[1.05fr_.95fr]">
        <figure className="relative min-h-80 bg-white/[0.03] lg:min-h-[38rem]">
          {!imageFailed ? (
            <img
              src={page.image.url}
              alt={page.image.altText.source}
              data-asset-id={page.image.assetId}
              data-sha256={page.image.sha256}
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div role="img" aria-label={page.image.altText.source} className="flex h-full min-h-80 items-center justify-center p-8 text-center text-white/45">
              Illustration unavailable. The paired story is still ready to read.
            </div>
          )}
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
            {page.sourceLabel}
          </span>
        </figure>

        <div className="flex min-h-[34rem] flex-col p-6 sm:p-9">
          <div className="flex-1 space-y-7">
            <section aria-labelledby="public-demo-english">
              <h2 id="public-demo-english" className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">English</h2>
              <div className="space-y-2">
                {page.sentences.map((sentence) => (
                  <InteractiveSentence
                    key={`en:${sentence.sentenceId}`}
                    sentence={sentence}
                    side="source"
                    onSelect={(next, trigger) => {
                      selectedTriggerRef.current = trigger
                      requestVersionRef.current += 1
                      setSelection(next)
                      setHelpState({ kind: 'static' })
                      requestAnimationFrame(() => helpHeadingRef.current?.focus())
                    }}
                  />
                ))}
              </div>
            </section>
            <section aria-labelledby="public-demo-spanish">
              <h2 id="public-demo-spanish" className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-amber-300">Español</h2>
              <div className="space-y-2">
                {page.sentences.map((sentence) => (
                  <InteractiveSentence
                    key={`es:${sentence.sentenceId}`}
                    sentence={sentence}
                    side="target"
                    onSelect={(next, trigger) => {
                      selectedTriggerRef.current = trigger
                      requestVersionRef.current += 1
                      setSelection(next)
                      setHelpState({ kind: 'static' })
                      requestAnimationFrame(() => helpHeadingRef.current?.focus())
                    }}
                  />
                ))}
              </div>
            </section>
            {page.sentences.length === 0 && <p className="font-serif text-xl italic text-white/45">A quiet beginning. Turn the page.</p>}

            <aside
              aria-live="polite"
              data-demo-state={helpState.kind}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <h2 ref={helpHeadingRef} tabIndex={-1} className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">
                {selection ? `Word help · ${selection.tappedWord}` : 'Word help · choose a word'}
              </h2>
              {!selection ? (
                <p className="mt-2 text-sm text-white/50">Paired text always works, even when AI help is unavailable.</p>
              ) : (
                <>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{staticFallback}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {QUESTIONS.map((question) => (
                      <button
                        key={question.id}
                        type="button"
                        disabled={helpState.kind === 'loading'}
                        onClick={() => void ask(question.id)}
                        className="min-h-11 rounded-full border border-amber-300/25 px-3 text-left text-xs text-amber-200 hover:bg-amber-300/10 disabled:opacity-45"
                      >
                        {question.label}
                      </button>
                    ))}
                  </div>
                  {helpState.kind === 'loading' && <p className="mt-3 text-sm text-white/45">Getting one short answer…</p>}
                  {helpState.kind === 'answer' && <p className="mt-3 text-sm leading-relaxed text-white">{helpState.explanation}</p>}
                  {helpState.kind === 'unavailable' && <p className="mt-3 text-sm leading-relaxed text-white/55">{helpState.message}</p>}
                  <button
                    type="button"
                    onClick={() => {
                      const trigger = selectedTriggerRef.current
                      requestVersionRef.current += 1
                      setSelection(null)
                      setHelpState({ kind: 'static' })
                      requestAnimationFrame(() => trigger?.focus())
                    }}
                    className="mt-3 min-h-11 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45 hover:text-white"
                  >
                    Close word help
                  </button>
                </>
              )}
            </aside>
          </div>

          <nav aria-label="Booklet pages" className="mt-7 flex items-center justify-between gap-3">
            <button type="button" disabled={pageIndex === 0} onClick={() => goTo(pageIndex - 1)} className="min-h-11 rounded-full border border-white/15 px-4 text-sm disabled:opacity-30">
              ← Previous
            </button>
            <span aria-live="polite" className="font-mono text-xs text-white/45">{pageIndex + 1} / {HELLO_LITTLE_ONE.pages.length}</span>
            <button type="button" disabled={isLast} onClick={() => goTo(pageIndex + 1)} className="min-h-11 rounded-full border border-amber-300/30 px-4 text-sm text-amber-200 disabled:opacity-30">
              Next →
            </button>
          </nav>
          {isLast && <p role="status" className="mt-4 text-center text-sm text-emerald-300">You reached the end of the preview.</p>}
        </div>
      </div>

      <p className="mx-auto mt-4 max-w-6xl text-xs text-white/35">
        Pilot content is still pending native Spanish and asset-rights review. No account is required.
      </p>
    </div>
  )
}
