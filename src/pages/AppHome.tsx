import { useState, useEffect } from 'react'
import { sansFont, displayFont, isBetaFree, BETA_FREE_LABEL } from '../constants'
import { MEDICAL_MODULES } from '../data/medicalModules'
import type { MedicalModule } from '../data/medicalModules'
import { CONSTRUCTION_MODULES } from '../data/constructionModules'
import type { ConstructionModule } from '../data/constructionModules'
import { MEDICAL_BOOK_CHAPTERS, CONSTRUCTION_BOOK_CHAPTERS } from '../data/bookData'
import type { BookChapter } from '../data/bookData'

type Specialty = 'medical' | 'construction'
type Tab = 'learn' | 'vocab' | 'book' | 'settings'

type AnyModule = MedicalModule | ConstructionModule

const SPECIALTY_COLORS: Record<Specialty, string> = {
  medical: '#4A9EFF',
  construction: '#FF7A4A',
}

// 14-day featured module rotation — same as main site
function getFeaturedIndex(total: number) {
  return Math.floor(Date.now() / (14 * 24 * 60 * 60 * 1000)) % total
}

function FlipCard({ en, es, color }: { en: string; es: string; color: string }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <button
      onClick={() => setFlipped(f => !f)}
      style={{
        ...sansFont,
        background: flipped ? color + '20' : '#1a1a1a',
        border: `1.5px solid ${flipped ? color : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 12,
        padding: '14px 16px',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.2s',
        minHeight: 64,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      <div style={{ fontSize: 14, color: flipped ? color : '#F7F3EC', fontWeight: 600 }}>
        {flipped ? es : en}
      </div>
      <div style={{ fontSize: 11, color: '#71717A' }}>
        {flipped ? 'Español ↑ tap for English' : 'tap to reveal Spanish'}
      </div>
    </button>
  )
}

function LearnTab({ specialty, module: mod }: { specialty: Specialty; module: AnyModule }) {
  const [phraseFlipped, setPhraseFlipped] = useState(false)
  const color = SPECIALTY_COLORS[specialty]

  // Merge base vocab (10) with book chapter extendedVocab for 20 total
  const allChapters = specialty === 'construction' ? CONSTRUCTION_BOOK_CHAPTERS : MEDICAL_BOOK_CHAPTERS
  const chapter = allChapters.find(c => c.id === mod.id)
  const baseVocab = mod.vocab
  const baseEnSet = new Set(baseVocab.map((v: { en: string }) => v.en.toLowerCase()))
  const extraVocab = (chapter?.extendedVocab ?? [])
    .filter(v => !baseEnSet.has(v.en.toLowerCase()))
    .slice(0, 10)
  const fullVocab = [...baseVocab, ...extraVocab]

  return (
    <div style={{ padding: '0 16px 100px' }}>
      {/* Module header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '20px 0 16px' }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
          {mod.emoji}
        </div>
        <div>
          <div style={{ ...displayFont, fontSize: 18, fontWeight: 700, color: '#F7F3EC' }}>{mod.title}</div>
          <div style={{ ...sansFont, fontSize: 12, color: '#71717A', marginTop: 2 }}>{mod.tagline}</div>
        </div>
      </div>

      {/* Sample phrase card */}
      <button
        onClick={() => setPhraseFlipped(f => !f)}
        style={{
          width: '100%',
          background: `linear-gradient(135deg, ${color}18 0%, rgba(13,13,13,0) 100%)`,
          border: `1px solid ${color}25`,
          borderRadius: 16,
          padding: '18px 20px',
          textAlign: 'left',
          cursor: 'pointer',
          marginBottom: 20,
          transition: 'border-color 0.2s',
        }}
      >
        <div style={{ ...sansFont, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: color, marginBottom: 8 }}>
          {phraseFlipped ? 'Spanish' : 'English'} · tap to flip
        </div>
        <div style={{ ...sansFont, fontSize: 16, color: '#F7F3EC', lineHeight: 1.5 }}>
          {phraseFlipped ? mod.samplePhrase.es : mod.samplePhrase.en}
        </div>
      </button>

      {/* Scenario */}
      <div style={{ ...sansFont, fontSize: 13, color: '#A89F94', lineHeight: 1.6, background: '#161616', borderRadius: 12, padding: '14px 16px', marginBottom: 20 }}>
        <span style={{ color: color, fontWeight: 600 }}>Scenario: </span>
        {mod.scenario}
      </div>

      {/* Vocabulary cards */}
      <div style={{ ...sansFont, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#71717A', marginBottom: 10 }}>
        Vocabulary · tap to flip
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {fullVocab.map((v, i) => (
          <FlipCard key={i} en={v.en} es={v.es} color={color} />
        ))}
      </div>
    </div>
  )
}

function VocabTab({ specialty }: { specialty: Specialty }) {
  const modules = specialty === 'medical' ? MEDICAL_MODULES : CONSTRUCTION_MODULES
  const color = SPECIALTY_COLORS[specialty]
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<AnyModule | null>(null)

  const filtered = modules.filter(m =>
    search === '' ||
    m.title.toLowerCase().includes(search.toLowerCase()) ||
    m.vocab.some(v => v.en.toLowerCase().includes(search.toLowerCase()) || v.es.toLowerCase().includes(search.toLowerCase()))
  )

  if (selected) {
    return (
      <div style={{ padding: '0 16px 100px' }}>
        <button
          onClick={() => setSelected(null)}
          style={{ ...sansFont, background: 'none', border: 'none', color: color, fontSize: 14, fontWeight: 600, padding: '16px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
        >
          ← All Modules
        </button>
        <div style={{ ...displayFont, fontSize: 20, fontWeight: 700, color: '#F7F3EC', marginBottom: 16 }}>
          {selected.emoji} {selected.title}
        </div>
        {selected.vocab.map((v, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ ...sansFont, fontSize: 14, color: '#A89F94' }}>{v.en}</span>
            <span style={{ ...sansFont, fontSize: 14, color: '#F7F3EC', fontWeight: 600 }}>{v.es}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ padding: '0 16px 100px' }}>
      <div style={{ padding: '16px 0 12px' }}>
        <input
          type="search"
          placeholder="Search vocabulary…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            ...sansFont,
            width: '100%',
            background: '#1a1a1a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            padding: '12px 14px',
            color: '#F7F3EC',
            fontSize: 15,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map(mod => (
          <button
            key={mod.id}
            onClick={() => setSelected(mod)}
            style={{
              ...sansFont,
              background: '#161616',
              border: `1px solid rgba(255,255,255,0.06)`,
              borderRadius: 12,
              padding: '14px 16px',
              textAlign: 'left',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 24 }}>{mod.emoji}</span>
            <div>
              <div style={{ fontSize: 15, color: '#F7F3EC', fontWeight: 600 }}>{mod.title}</div>
              <div style={{ fontSize: 12, color: '#71717A', marginTop: 2 }}>{mod.vocab.length} terms</div>
            </div>
            <span style={{ marginLeft: 'auto', color: '#71717A', fontSize: 18 }}>›</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function BookTab({ specialty }: { specialty: Specialty }) {
  const chapters: BookChapter[] = specialty === 'medical' ? MEDICAL_BOOK_CHAPTERS : CONSTRUCTION_BOOK_CHAPTERS
  const color = SPECIALTY_COLORS[specialty]
  const [selected, setSelected] = useState<BookChapter | null>(null)
  const [vocabFlipped, setVocabFlipped] = useState<Set<number>>(new Set())

  if (selected) {
    const toggle = (i: number) => setVocabFlipped(prev => {
      const next = new Set(prev)
      if (next.has(i)) { next.delete(i) } else { next.add(i) }
      return next
    })

    return (
      <div style={{ padding: '0 16px 100px' }}>
        <button
          onClick={() => { setSelected(null); setVocabFlipped(new Set()) }}
          style={{ ...sansFont, background: 'none', border: 'none', color: color, fontSize: 14, fontWeight: 600, padding: '16px 0', cursor: 'pointer' }}
        >
          ← All Chapters
        </button>
        <div style={{ ...displayFont, fontSize: 22, fontWeight: 700, color: '#F7F3EC', marginBottom: 4 }}>
          {selected.emoji} {selected.title}
        </div>
        <p style={{ ...sansFont, fontSize: 13, color: '#A89F94', lineHeight: 1.6, marginBottom: 20 }}>
          {selected.chapterIntro}
        </p>

        {/* Grammar focus */}
        <div style={{ background: '#161616', border: `1px solid ${color}20`, borderRadius: 12, padding: '16px', marginBottom: 20 }}>
          <div style={{ ...sansFont, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: color, marginBottom: 6 }}>
            Grammar Focus
          </div>
          <div style={{ ...sansFont, fontSize: 14, fontWeight: 600, color: '#F7F3EC', marginBottom: 8 }}>
            {selected.grammarFocus.title}
          </div>
          <p style={{ ...sansFont, fontSize: 12, color: '#A89F94', lineHeight: 1.6, marginBottom: 10 }}>
            {selected.grammarFocus.explanation}
          </p>
          {selected.grammarFocus.examples.map((ex, i) => (
            <div key={i} style={{ padding: '6px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ ...sansFont, fontSize: 12, color: '#71717A' }}>{ex.en}</div>
              <div style={{ ...sansFont, fontSize: 13, color: '#F7F3EC', fontWeight: 600, marginTop: 2 }}>{ex.es}</div>
            </div>
          ))}
        </div>

        {/* Vocabulary */}
        <div style={{ ...sansFont, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#71717A', marginBottom: 10 }}>
          Extended Vocabulary · tap to flip
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
          {selected.extendedVocab.map((v, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              style={{
                ...sansFont,
                background: vocabFlipped.has(i) ? color + '15' : '#1a1a1a',
                border: `1px solid ${vocabFlipped.has(i) ? color : 'rgba(255,255,255,0.06)'}`,
                borderRadius: 10,
                padding: '10px 12px',
                textAlign: 'left',
                cursor: 'pointer',
                minHeight: 56,
              }}
            >
              <div style={{ fontSize: 12, color: vocabFlipped.has(i) ? color : '#F7F3EC', fontWeight: 600, lineHeight: 1.4 }}>
                {vocabFlipped.has(i) ? v.es : v.en}
              </div>
            </button>
          ))}
        </div>

        {/* Key phrases */}
        <div style={{ ...sansFont, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#71717A', marginBottom: 10 }}>
          Key Phrases
        </div>
        {selected.phrases.map((p, i) => (
          <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ ...sansFont, fontSize: 12, color: '#71717A', marginBottom: 4 }}>{p.en}</div>
            <div style={{ ...sansFont, fontSize: 14, color: '#F7F3EC', fontWeight: 600 }}>{p.es}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ padding: '0 16px 100px' }}>
      <div style={{ padding: '16px 0 8px' }}>
        <div style={{ ...displayFont, fontSize: 20, fontWeight: 700, color: '#F7F3EC' }}>
          Companion Guide
        </div>
        <div style={{ ...sansFont, fontSize: 13, color: '#71717A', marginTop: 4 }}>
          {chapters.length} chapters · tap to explore
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
        {chapters.map((ch, i) => (
          <button
            key={ch.id}
            onClick={() => setSelected(ch)}
            style={{
              ...sansFont,
              background: '#161616',
              border: `1px solid ${ch.color}15`,
              borderRadius: 12,
              padding: '14px 16px',
              textAlign: 'left',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 10, background: ch.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
              {ch.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, color: '#F7F3EC', fontWeight: 600 }}>Chapter {i + 1}: {ch.title}</div>
              <div style={{ fontSize: 11, color: '#71717A', marginTop: 2 }}>{ch.extendedVocab.length} vocab · {ch.phrases.length} phrases</div>
            </div>
            <span style={{ color: '#71717A', fontSize: 18 }}>›</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function SettingsTab({ specialty, onSwitch }: { specialty: Specialty; onSwitch: (s: Specialty) => void }) {
  return (
    <div style={{ padding: '16px 16px 100px' }}>
      <div style={{ ...displayFont, fontSize: 20, fontWeight: 700, color: '#F7F3EC', marginBottom: 20 }}>
        Settings
      </div>

      <div style={{ ...sansFont, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#71717A', marginBottom: 10 }}>
        Active Specialty
      </div>

      {(['medical', 'construction'] as Specialty[]).map(s => (
        <button
          key={s}
          onClick={() => onSwitch(s)}
          style={{
            ...sansFont,
            width: '100%',
            background: specialty === s ? SPECIALTY_COLORS[s] + '15' : '#161616',
            border: `1.5px solid ${specialty === s ? SPECIALTY_COLORS[s] : 'rgba(255,255,255,0.06)'}`,
            borderRadius: 12,
            padding: '14px 16px',
            textAlign: 'left',
            cursor: 'pointer',
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{ fontSize: 22 }}>{s === 'medical' ? '🏥' : '🏗️'}</span>
          <div>
            <div style={{ fontSize: 15, color: '#F7F3EC', fontWeight: 600 }}>
              {s === 'medical' ? 'Medical Spanish' : 'Construction Spanish'}
            </div>
            <div style={{ fontSize: 12, color: '#71717A', marginTop: 2 }}>
              {s === 'medical' ? 'For healthcare professionals' : 'For contractors and crew leaders'}
            </div>
          </div>
          {specialty === s && <span style={{ marginLeft: 'auto', color: SPECIALTY_COLORS[s], fontSize: 18 }}>✓</span>}
        </button>
      ))}

      <div style={{ marginTop: 32 }}>
        <div style={{ ...sansFont, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#71717A', marginBottom: 10 }}>
          Web Version
        </div>
        <a
          href={specialty === 'medical' ? 'https://medicalspanish.app' : 'https://constructionspanish.app'}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...sansFont,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: '#161616',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            padding: '14px 16px',
            textDecoration: 'none',
          }}
        >
          <span style={{ fontSize: 20 }}>🌐</span>
          <div>
            <div style={{ fontSize: 14, color: '#F7F3EC', fontWeight: 600 }}>
              {specialty === 'medical' ? 'medicalspanish.app' : 'constructionspanish.app'}
            </div>
            <div style={{ fontSize: 12, color: '#71717A', marginTop: 2 }}>Full web experience →</div>
          </div>
        </a>
      </div>

      <div style={{ marginTop: 32, ...sansFont, fontSize: 12, color: '#4a4a4a', textAlign: 'center' }}>
        Language Threshold · languagethreshold.com
      </div>
    </div>
  )
}

export default function AppHome() {
  const [specialty, setSpecialty] = useState<Specialty>(() => {
    const saved = localStorage.getItem('lt-specialty')
    return (saved === 'construction' ? 'construction' : 'medical') as Specialty
  })
  const [tab, setTab] = useState<Tab>('learn')

  const modules = specialty === 'medical' ? MEDICAL_MODULES : CONSTRUCTION_MODULES
  const beta = isBetaFree()
  // Beta: user picks any module. Non-beta: show rotating featured module only.
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null)
  const featuredModule = modules[getFeaturedIndex(modules.length)]
  const activeModule = beta
    ? (modules.find(m => m.id === selectedModuleId) ?? featuredModule)
    : featuredModule
  const color = SPECIALTY_COLORS[specialty]

  useEffect(() => {
    localStorage.setItem('lt-specialty', specialty)
  }, [specialty])

  const tabs: Array<{ id: Tab; label: string; icon: string }> = [
    { id: 'learn', label: 'Learn', icon: '📚' },
    { id: 'vocab', label: 'Vocab', icon: '🗂️' },
    { id: 'book', label: 'Guide', icon: '📖' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', maxWidth: 430, margin: '0 auto', position: 'relative' }}>
      {/* Status bar spacer for notch phones */}
      <div style={{ height: 'env(safe-area-inset-top, 16px)' }} />

      {/* Beta banner */}
      {beta && (
        <div style={{ ...sansFont, background: 'rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.25)', padding: '6px 16px', textAlign: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A84C' }}>
          🎁 {BETA_FREE_LABEL}
        </div>
      )}

      {/* App header */}
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <div style={{ ...displayFont, fontSize: 18, fontWeight: 700, color: '#F7F3EC' }}>
            {specialty === 'medical' ? '🏥' : '🏗️'} {specialty === 'medical' ? 'Medical' : 'Construction'} Spanish
          </div>
        </div>
        <div style={{ ...sansFont, fontSize: 11, color: color, background: color + '15', borderRadius: 20, padding: '3px 10px', fontWeight: 700 }}>
          {specialty === 'medical' ? 'Healthcare' : 'Jobsite'}
        </div>
      </div>

      {/* Beta module picker — only shown during free period */}
      {beta && tab === 'learn' && (
        <div style={{ padding: '10px 16px 0', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: 6, paddingBottom: 8 }}>
            {modules.map(m => (
              <button
                key={m.id}
                onClick={() => setSelectedModuleId(m.id)}
                style={{
                  ...sansFont,
                  flexShrink: 0,
                  background: activeModule.id === m.id ? color + '20' : '#1a1a1a',
                  border: `1px solid ${activeModule.id === m.id ? color + '60' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: 20,
                  padding: '5px 12px',
                  fontSize: 11,
                  fontWeight: 600,
                  color: activeModule.id === m.id ? color : '#71717A',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {m.emoji} {m.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab content */}
      <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 120px)' }}>
        {tab === 'learn' && <LearnTab specialty={specialty} module={activeModule} />}
        {tab === 'vocab' && <VocabTab specialty={specialty} />}
        {tab === 'book' && <BookTab specialty={specialty} />}
        {tab === 'settings' && <SettingsTab specialty={specialty} onSwitch={s => { setSpecialty(s); setTab('learn') }} />}
      </div>

      {/* Bottom tab bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 430,
        background: 'rgba(13,13,13,0.96)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              ...sansFont,
              flex: 1,
              background: 'none',
              border: 'none',
              padding: '10px 0 12px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              transition: 'opacity 0.15s',
              opacity: tab === t.id ? 1 : 0.45,
            }}
          >
            <span style={{ fontSize: 20 }}>{t.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: tab === t.id ? color : '#71717A', letterSpacing: '0.04em' }}>
              {t.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
