import { useEffect } from 'react'
import { MEDICAL_BOOK_CHAPTERS, CONSTRUCTION_BOOK_CHAPTERS } from '../data/bookData'
import type { BookChapter } from '../data/bookData'
import { MEDICAL_MODULES } from '../data/medicalModules'
import { CONSTRUCTION_MODULES } from '../data/constructionModules'

interface Props {
  specialty: 'medical' | 'construction'
}

const GRAMMAR_SECTIONS = {
  medical: [
    {
      title: 'Present Tense — Regular Verbs',
      explanation: 'Spanish present tense regular -ar/-er/-ir verbs follow consistent patterns. In medical contexts, you\'ll use these constantly: hablar (to speak), tener (to have), sentir (to feel).',
      examples: [
        { en: 'The patient speaks Spanish.', es: 'El paciente habla español.' },
        { en: 'Do you have any allergies?', es: '¿Tiene alergias?' },
        { en: 'Where do you feel pain?', es: '¿Dónde siente dolor?' },
      ],
    },
    {
      title: 'Ser vs. Estar — Medical Distinctions',
      explanation: 'Both mean "to be," but ser describes permanent traits while estar describes states/conditions. Critical in medicine: pain, symptoms, and diagnoses use estar.',
      examples: [
        { en: 'The patient is diabetic. (permanent condition)', es: 'El paciente es diabético.' },
        { en: 'The patient is in pain. (current state)', es: 'El paciente está con dolor.' },
        { en: 'Are you pregnant? (current state)', es: '¿Está embarazada?' },
      ],
    },
    {
      title: 'Imperative (Commands) — Patient Instructions',
      explanation: 'Medical instructions require the imperative. Use usted commands for respectful, formal clinical communication.',
      examples: [
        { en: 'Open your mouth.', es: 'Abra la boca.' },
        { en: 'Breathe deeply.', es: 'Respire profundo.' },
        { en: 'Don\'t move.', es: 'No se mueva.' },
      ],
    },
    {
      title: 'Numbers, Dates, and Measurements',
      explanation: 'Numbers are critical for vitals, doses, and pain scales. Spanish numbers follow the same sequence but gender agreement matters with nouns.',
      examples: [
        { en: 'Blood pressure: one-twenty over eighty.', es: 'Presión arterial: ciento veinte sobre ochenta.' },
        { en: 'Take two tablets every eight hours.', es: 'Tome dos tabletas cada ocho horas.' },
        { en: 'Pain scale one to ten.', es: 'Escala del dolor del uno al diez.' },
      ],
    },
  ],
  construction: [
    {
      title: 'Imperative Commands — Giving Orders on the Jobsite',
      explanation: 'Construction Spanish is direct and action-oriented. Tú commands (informal) work for close crews; usted commands (formal) for safety-critical situations.',
      examples: [
        { en: 'Bring the tools here.', es: 'Trae las herramientas aquí. (tú) / Traiga las herramientas aquí. (usted)' },
        { en: 'Wear your hard hat.', es: 'Usa tu casco. (tú) / Use su casco. (usted)' },
        { en: 'Stop! Don\'t touch that.', es: '¡Para! No toques eso.' },
      ],
    },
    {
      title: 'Reflexive Verbs — Safety and Self-Care',
      explanation: 'Safety language often uses reflexives: ponerse (put on), quitarse (take off), cuidarse (take care of oneself). These are non-negotiable on the jobsite.',
      examples: [
        { en: 'Put on your gloves before you start.', es: 'Ponte los guantes antes de empezar.' },
        { en: 'Take off your boots before entering.', es: 'Quítate las botas antes de entrar.' },
        { en: 'Be careful with the saw.', es: 'Cuídate con la sierra.' },
      ],
    },
    {
      title: 'Prepositions — Describing Location and Movement',
      explanation: 'Location and direction are constant in construction. Master para, por, en, sobre, debajo de, encima de, al lado de.',
      examples: [
        { en: 'The beam goes above the window.', es: 'La viga va encima de la ventana.' },
        { en: 'Cut along the line.', es: 'Corta a lo largo de la línea.' },
        { en: 'Meet me at the entrance at seven.', es: 'Encuéntrame en la entrada a las siete.' },
      ],
    },
    {
      title: 'Future Tense — Planning and Scheduling',
      explanation: 'Construction planning uses ir + a + infinitive (near future) or the full future tense for schedule coordination.',
      examples: [
        { en: 'We\'re going to pour the foundation tomorrow.', es: 'Vamos a vaciar la base mañana.' },
        { en: 'The inspector will come Friday.', es: 'El inspector vendrá el viernes.' },
        { en: 'We\'ll finish by three o\'clock.', es: 'Terminaremos a las tres.' },
      ],
    },
  ],
}

function ChapterSection({ chapter, index }: { chapter: BookChapter; index: number }) {
  return (
    <div className="chapter-section" style={{ pageBreakBefore: index === 0 ? 'auto' : 'always', paddingTop: 40 }}>
      {/* Chapter header */}
      <div style={{ borderBottom: `3px solid ${chapter.color}`, paddingBottom: 12, marginBottom: 24 }}>
        <div style={{ fontSize: 13, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
          Chapter {index + 1}
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: '#111', fontFamily: '"Playfair Display", serif' }}>
          {chapter.emoji} {chapter.title}
        </h2>
      </div>

      {/* Intro */}
      <p style={{ fontSize: 14, lineHeight: 1.8, color: '#333', marginBottom: 28 }}>
        {chapter.chapterIntro}
      </p>

      {/* Grammar focus */}
      <div style={{ background: '#f8f8f8', border: '1px solid #e0e0e0', borderRadius: 8, padding: '20px 24px', marginBottom: 28 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: chapter.color, margin: '0 0 8px' }}>
          Grammar Focus
        </h3>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>
          {chapter.grammarFocus.title}
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#444', marginBottom: 12 }}>
          {chapter.grammarFocus.explanation}
        </p>
        <div style={{ display: 'grid', gap: 6 }}>
          {chapter.grammarFocus.examples.map((ex, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '6px 0', borderTop: '1px solid #e8e8e8' }}>
              <span style={{ fontSize: 13, color: '#555' }}>{ex.en}</span>
              <span style={{ fontSize: 13, color: '#111', fontWeight: 600 }}>{ex.es}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary table */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#333', margin: '0 0 12px', borderBottom: '2px solid #111', paddingBottom: 6 }}>
          Vocabulary — {chapter.extendedVocab.length} Terms
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', gap: 0, background: '#111', color: '#fff', padding: '6px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em' }}>
            <span>ENGLISH</span>
            <span>ESPAÑOL</span>
            <span>NOTES</span>
          </div>
          {chapter.extendedVocab.map((v, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', gap: 0, padding: '5px 10px', background: i % 2 === 0 ? '#fff' : '#f7f7f7', borderBottom: '1px solid #eee', fontSize: 12 }}>
              <span style={{ color: '#333' }}>{v.en}</span>
              <span style={{ color: '#111', fontWeight: 600 }}>{v.es}</span>
              <span style={{ color: '#666', fontSize: 11 }}>{v.notes}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Phrases */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#333', margin: '0 0 12px', borderBottom: '2px solid #111', paddingBottom: 6 }}>
          Key Phrases
        </h3>
        <div style={{ display: 'grid', gap: 0 }}>
          {chapter.phrases.map((p, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: '8px 10px', background: i % 2 === 0 ? '#fff' : '#f7f7f7', borderBottom: '1px solid #eee' }}>
              <div>
                <div style={{ fontSize: 12, color: '#444' }}>{p.en}</div>
                {p.context && <div style={{ fontSize: 10, color: '#999', marginTop: 2, fontStyle: 'italic' }}>{p.context}</div>}
              </div>
              <div style={{ fontSize: 12, color: '#111', fontWeight: 600 }}>{p.es}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Exercises */}
      {chapter.exercises.map((ex, ei) => (
        <div key={ei} style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#333', margin: '0 0 10px', borderBottom: '2px solid #111', paddingBottom: 6 }}>
            Exercise {ei + 1} — {ex.title}
          </h3>
          <p style={{ fontSize: 12, color: '#555', marginBottom: 10, fontStyle: 'italic' }}>{ex.instructions}</p>
          {ex.wordBank && (
            <div style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, marginBottom: 10, fontSize: 12, color: '#444' }}>
              Word bank: {ex.wordBank.join(' · ')}
            </div>
          )}
          <div style={{ display: 'grid', gap: 6 }}>
            {ex.items.map((item, ii) => (
              <div key={ii} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: '6px 10px', background: ii % 2 === 0 ? '#fff' : '#f7f7f7', borderBottom: '1px solid #eee', fontSize: 12 }}>
                <span style={{ color: '#333' }}>{item.prompt || item.en}</span>
                <span style={{ color: '#777', borderBottom: '1px dashed #bbb', minHeight: 18 }}>
                  {item.answer || item.es}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Cultural note */}
      <div style={{ background: '#fffbf0', border: '1px solid #e8d87a', borderRadius: 8, padding: '16px 20px', marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#a07800', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>
          Cultural Note
        </div>
        <p style={{ fontSize: 12, lineHeight: 1.7, color: '#444', margin: 0 }}>{chapter.culturalNote}</p>
      </div>

      {/* Notes section — blank lined area for the student */}
      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
          My Notes
        </div>
        <div style={{ display: 'grid', gap: 0 }}>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} style={{ borderBottom: '1px solid #ddd', height: 28 }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PrintBook({ specialty }: Props) {
  const chapters = specialty === 'medical' ? MEDICAL_BOOK_CHAPTERS : CONSTRUCTION_BOOK_CHAPTERS
  const baseModules = specialty === 'medical' ? MEDICAL_MODULES : CONSTRUCTION_MODULES
  const grammarSections = GRAMMAR_SECTIONS[specialty]
  const title = specialty === 'medical' ? 'Medical Spanish' : 'Construction Spanish'
  const accentColor = specialty === 'medical' ? '#4A9EFF' : '#FF7A4A'

  // Build master glossary from all chapters
  const glossary = chapters
    .flatMap(c => c.extendedVocab.map(v => ({ en: v.en, es: v.es, chapter: c.title })))
    .sort((a, b) => a.en.localeCompare(b.en))

  // Deduplicate by English term
  const dedupedGlossary = glossary.filter((item, idx, arr) =>
    arr.findIndex(x => x.en === item.en) === idx
  )

  useEffect(() => {
    document.title = `${title} Companion Guide — Language Threshold`
  }, [title])

  return (
    <div style={{ fontFamily: '"Source Sans 3", Arial, sans-serif', background: '#fff', color: '#111', minHeight: '100vh' }}>
      <style>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          body { background: #fff !important; }
          .chapter-section { page-break-before: always; }
          .chapter-section:first-child { page-break-before: auto; }
        }
        @page { margin: 0.75in; size: letter; }
      `}</style>

      {/* Print button — hidden when printing */}
      <div className="no-print" style={{ position: 'fixed', top: 16, right: 16, zIndex: 100, display: 'flex', gap: 10 }}>
        <button
          onClick={() => window.print()}
          style={{ background: accentColor, color: '#fff', border: 'none', borderRadius: 8, padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
        >
          Print / Save PDF
        </button>
        <button
          onClick={() => history.back()}
          style={{ background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 14, cursor: 'pointer' }}
        >
          ← Back
        </button>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 40px 80px' }}>

        {/* Cover page */}
        <div style={{ textAlign: 'center', pageBreakAfter: 'always', paddingBottom: 60, minHeight: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: 80, height: 80, background: accentColor, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, marginBottom: 32 }}>
            {specialty === 'medical' ? '🏥' : '🏗️'}
          </div>
          <h1 style={{ fontSize: 44, fontWeight: 700, fontFamily: '"Playfair Display", serif', color: '#111', marginBottom: 8, lineHeight: 1.2 }}>
            {title}
          </h1>
          <div style={{ fontSize: 22, color: '#555', fontFamily: '"Playfair Display", serif', marginBottom: 32 }}>
            Companion Guide
          </div>
          <div style={{ width: 60, height: 3, background: accentColor, marginBottom: 32 }} />
          <p style={{ fontSize: 15, color: '#666', maxWidth: 440, lineHeight: 1.7, marginBottom: 48 }}>
            A complete reference for real-world {specialty === 'medical' ? 'healthcare' : 'jobsite'} communication.
            {chapters.length} specialized modules · {dedupedGlossary.length} vocabulary terms · Grammar reference · Exercises
          </p>
          <div style={{ fontSize: 13, color: '#999' }}>
            Language Threshold · languagethreshold.com
          </div>
        </div>

        {/* Table of contents */}
        <div style={{ pageBreakAfter: 'always', paddingBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, fontFamily: '"Playfair Display", serif', marginBottom: 24, borderBottom: `3px solid ${accentColor}`, paddingBottom: 10 }}>
            Contents
          </h2>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
              Grammar Reference
            </div>
            {grammarSections.map((g, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #eee', fontSize: 13 }}>
                <span>{g.title}</span>
                <span style={{ color: '#bbb' }}>Gr-{i + 1}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
              Modules
            </div>
            {chapters.map((c, i) => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #eee', fontSize: 13 }}>
                <span>{c.emoji} {c.title}</span>
                <span style={{ color: '#bbb' }}>{i + 1}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #eee', fontSize: 13 }}>
              <span>Master Glossary ({dedupedGlossary.length} terms)</span>
              <span style={{ color: '#bbb' }}>G</span>
            </div>
          </div>
        </div>

        {/* Grammar reference section */}
        <div style={{ pageBreakAfter: 'always' }}>
          <div style={{ borderBottom: `3px solid ${accentColor}`, paddingBottom: 12, marginBottom: 28 }}>
            <div style={{ fontSize: 13, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
              Grammar Reference
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: '#111', fontFamily: '"Playfair Display", serif' }}>
              Essential Spanish Grammar
            </h2>
          </div>
          {grammarSections.map((g, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111', margin: '0 0 8px', borderLeft: `4px solid ${accentColor}`, paddingLeft: 10 }}>
                {g.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#444', marginBottom: 12 }}>{g.explanation}</p>
              <div style={{ display: 'grid', gap: 0 }}>
                {g.examples.map((ex, ei) => (
                  <div key={ei} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: '7px 10px', background: ei % 2 === 0 ? '#f8f8f8' : '#fff', borderBottom: '1px solid #eee', fontSize: 13 }}>
                    <span style={{ color: '#555' }}>{ex.en}</span>
                    <span style={{ color: '#111', fontWeight: 600 }}>{ex.es}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Core quick-reference cards from base vocab */}
          <div style={{ marginTop: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111', margin: '0 0 12px', borderLeft: `4px solid ${accentColor}`, paddingLeft: 10 }}>
              Essential Vocabulary Quick Reference
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {baseModules.slice(0, 6).map(mod => (
                <div key={mod.id} style={{ border: `1px solid ${mod.color}30`, borderRadius: 6, padding: '10px 14px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: mod.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                    {mod.emoji} {mod.title}
                  </div>
                  {mod.vocab.slice(0, 4).map((v, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, padding: '2px 0', borderBottom: '1px solid #f0f0f0' }}>
                      <span style={{ color: '#666' }}>{v.en}</span>
                      <span style={{ fontWeight: 600, color: '#333' }}>{v.es}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module chapters */}
        {chapters.map((chapter, i) => (
          <ChapterSection key={chapter.id} chapter={chapter} index={i} />
        ))}

        {/* Master glossary */}
        <div style={{ pageBreakBefore: 'always', paddingTop: 40 }}>
          <div style={{ borderBottom: `3px solid ${accentColor}`, paddingBottom: 12, marginBottom: 24 }}>
            <div style={{ fontSize: 13, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
              Master Reference
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: '#111', fontFamily: '"Playfair Display", serif' }}>
              Complete Glossary — {dedupedGlossary.length} Terms
            </h2>
          </div>
          <div style={{ columns: 2, columnGap: 32 }}>
            {dedupedGlossary.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: '1px solid #f0f0f0', fontSize: 11, breakInside: 'avoid' }}>
                <span style={{ color: '#555', paddingRight: 8 }}>{item.en}</span>
                <span style={{ fontWeight: 600, color: '#111', textAlign: 'right', flex: 'none', maxWidth: '55%' }}>{item.es}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
