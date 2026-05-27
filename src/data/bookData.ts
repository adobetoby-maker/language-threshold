// Normalized shape used throughout the app
export interface BookChapter {
  id: string
  title: string
  emoji: string
  color: string
  chapterIntro: string
  grammarFocus: {
    title: string
    explanation: string
    examples: Array<{ en: string; es: string }>
  }
  extendedVocab: Array<{ en: string; es: string; notes: string }>
  phrases: Array<{ en: string; es: string; context: string }>
  exercises: Array<{
    type: 'fill-in-blank' | 'translate'
    title: string
    instructions: string
    wordBank?: string[]
    items: Array<{ prompt?: string; answer?: string; en?: string; es?: string }>
  }>
  culturalNote: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function str(v: any): string {
  if (typeof v === 'string') return v
  if (Array.isArray(v)) return v.map(str).join(' ')
  if (v && typeof v === 'object') return Object.values(v).map(str).join('. ')
  return ''
}

// Extract an en/es pair from whatever shape the example has
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractPair(item: any): { en: string; es: string } {
  if (!item || typeof item !== 'object') return { en: '', es: '' }
  const en = str(item.en || item.english || item.English || item.pattern || item.prompt || '')
  const es = str(item.es || item.spanish || item.Spanish || item.translation || item.respuesta || '')
  return { en, es }
}

// Normalize raw JSON from any agent into BookChapter
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalize(raw: any): BookChapter {
  const gf = raw.grammarFocus || {}
  const isGfList = Array.isArray(gf)

  const gfTitle = isGfList ? (gf[0]?.title || '') : (gf.title || gf.topic || gf.concept || '')
  const gfExplain = isGfList ? '' : str(gf.explanation || gf.description || gf.register || gf.rule || '')

  // Find examples list under various keys
  const gfExamplesRaw: unknown[] = isGfList
    ? gf
    : (gf.examples || gf.patterns || gf.structure || gf.rules || gf.tasks || gf.keyPoints || gf.englishFormula || [])
  const gfExamples = Array.isArray(gfExamplesRaw)
    ? gfExamplesRaw.map(extractPair).filter(p => p.en || p.es)
    : []

  // Extended vocab — handles `notes`, `context`, `pronunciation`, `definition` as notes field
  const rawVocab: unknown[] = Array.isArray(raw.extendedVocab) ? raw.extendedVocab : []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extendedVocab = rawVocab.map((v: any) => ({
    en: str(v.en || v.english || v.term || ''),
    es: str(v.es || v.spanish || v.translation || ''),
    notes: str(v.notes || v.context || v.pronunciation || v.definition || v.usage || ''),
  })).filter(v => v.en || v.es)

  // Phrases
  const rawPhrases: unknown[] = Array.isArray(raw.phrases) ? raw.phrases : []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const phrases = rawPhrases.map((p: any) => ({
    en: str(p.en || p.english || p.English || ''),
    es: str(p.es || p.spanish || p.Spanish || ''),
    context: str(p.context || p.situation || p.note || p.use || ''),
  })).filter(p => p.en || p.es)

  // Exercises — normalize to a list even if raw is a single object
  const rawEx = raw.exercises
  const exercisesArr: unknown[] = Array.isArray(rawEx)
    ? rawEx
    : rawEx && typeof rawEx === 'object'
      ? Object.values(rawEx)
      : []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exercises = exercisesArr.map((ex: any) => ({
    type: (ex.type === 'translate' ? 'translate' : 'fill-in-blank') as 'fill-in-blank' | 'translate',
    title: str(ex.title || ex.name || ''),
    instructions: str(ex.instructions || ex.direction || ex.prompt || ''),
    wordBank: Array.isArray(ex.wordBank) ? ex.wordBank : undefined,
    items: Array.isArray(ex.items)
      ? ex.items.map(extractPair).filter((p: { en: string; es: string }) => p.en || p.es)
      : [],
  })).filter(ex => ex.title || ex.items.length > 0)

  return {
    id: str(raw.id || raw.moduleId || ''),
    title: str(raw.title || ''),
    emoji: str(raw.emoji || '📚'),
    color: str(raw.color || '#C9A84C'),
    chapterIntro: str(raw.chapterIntro || raw.intro || raw.introduction || ''),
    grammarFocus: {
      title: str(gfTitle),
      explanation: gfExplain,
      examples: gfExamples,
    },
    extendedVocab,
    phrases,
    exercises,
    culturalNote: str(raw.culturalNote || raw.cultural_note || raw.culture || ''),
  }
}

// Static imports — bundled so they work offline via service worker
import emergencyRaw from './book/medical/emergency.json'
import nursingRaw from './book/medical/nursing.json'
import orthopedicsRaw from './book/medical/orthopedics.json'
import familyMedicineRaw from './book/medical/family-medicine.json'
import obgynRaw from './book/medical/obgyn.json'
import surgeryRaw from './book/medical/surgery.json'
import cardiologyRaw from './book/medical/cardiology.json'
import physicalTherapyRaw from './book/medical/physical-therapy.json'
import painManagementRaw from './book/medical/pain-management.json'
import medicalReceptionistRaw from './book/medical/medical-receptionist.json'
import socialWorkRaw from './book/medical/social-work.json'
import orEvsRaw from './book/medical/or-evs.json'
import fmgRaw from './book/medical/fmg.json'

import framerRaw from './book/construction/framer.json'
import foremanRaw from './book/construction/foreman.json'
import safetyRaw from './book/construction/safety.json'
import drywallRaw from './book/construction/drywall.json'
import plumberRaw from './book/construction/plumber.json'
import electricianRaw from './book/construction/electrician.json'
import truckDriverRaw from './book/construction/truck-driver.json'
import landscaperRaw from './book/construction/landscaper.json'
import autoMechanicRaw from './book/construction/auto-mechanic.json'

export const MEDICAL_BOOK_CHAPTERS: BookChapter[] = [
  emergencyRaw, nursingRaw, orthopedicsRaw, familyMedicineRaw, obgynRaw,
  surgeryRaw, cardiologyRaw, physicalTherapyRaw, painManagementRaw,
  medicalReceptionistRaw, socialWorkRaw, orEvsRaw, fmgRaw,
].map(normalize)

export const CONSTRUCTION_BOOK_CHAPTERS: BookChapter[] = [
  framerRaw, foremanRaw, safetyRaw, drywallRaw, plumberRaw,
  electricianRaw, truckDriverRaw, landscaperRaw, autoMechanicRaw,
].map(normalize)
