import { CONSTRUCTION_MODULES } from '../../../data/constructionModules'
import { MISSIONARY_MODULES } from '../../../data/missionaryModules'
import type {
  CanonicalLanguageUnitManifestEntry,
  ContentOccurrence,
  ContentOccurrenceId,
  LanguageUnitId,
  ResolvedLanguageUnit,
  Specialty,
} from './types'

export const LANGUAGE_UNIT_MANIFEST = [
  { id: 'lu_es_0001', conceptId: 'concept_ppe', lemma: 'equipo de protección personal', partOfSpeech: 'phrase', senseKey: 'construction-safety-equipment', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'safety', sourceTerm: 'PPE' } },
  { id: 'lu_es_0002', conceptId: 'concept_harness', lemma: 'arnés', partOfSpeech: 'noun', senseKey: 'fall-protection-harness', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'safety', sourceTerm: 'harness' } },
  { id: 'lu_es_0003', conceptId: 'concept_fall_protection', lemma: 'protección contra caídas', partOfSpeech: 'phrase', senseKey: 'construction-fall-protection', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'safety', sourceTerm: 'fall protection' } },
  { id: 'lu_es_0004', conceptId: 'concept_hazard', lemma: 'peligro', partOfSpeech: 'noun', senseKey: 'construction-danger', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'safety', sourceTerm: 'hazard' } },
  { id: 'lu_es_0005', conceptId: 'concept_incident_report', lemma: 'reporte de incidente', partOfSpeech: 'phrase', senseKey: 'construction-incident-document', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'safety', sourceTerm: 'incident report' } },
  { id: 'lu_es_0006', conceptId: 'concept_emergency', lemma: 'emergencia', partOfSpeech: 'noun', senseKey: 'urgent-event', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'safety', sourceTerm: 'emergency' } },
  { id: 'lu_es_0007', conceptId: 'concept_first_aid', lemma: 'primeros auxilios', partOfSpeech: 'phrase', senseKey: 'emergency-first-aid', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'safety', sourceTerm: 'first aid' } },
  { id: 'lu_es_0008', conceptId: 'concept_hard_hat', lemma: 'casco de seguridad', partOfSpeech: 'phrase', senseKey: 'construction-head-protection', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'foreman', sourceTerm: 'hard hat' } },
  { id: 'lu_es_0009', conceptId: 'concept_rebar', lemma: 'varilla de acero', partOfSpeech: 'phrase', senseKey: 'construction-reinforcement', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'foreman', sourceTerm: 'rebar' } },
  { id: 'lu_es_0010', conceptId: 'concept_deadline', lemma: 'fecha límite', partOfSpeech: 'phrase', senseKey: 'project-deadline', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'foreman', sourceTerm: 'deadline' } },
  { id: 'lu_es_0011', conceptId: 'concept_stud', lemma: 'poste', partOfSpeech: 'noun', senseKey: 'framing-vertical-member', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'framer', sourceTerm: 'stud' } },
  { id: 'lu_es_0012', conceptId: 'concept_blueprint', lemma: 'plano de construcción', partOfSpeech: 'phrase', senseKey: 'construction-drawing', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'framer', sourceTerm: 'blueprint' } },
  { id: 'lu_es_0013', conceptId: 'concept_layout', lemma: 'trazo', partOfSpeech: 'noun', senseKey: 'construction-layout', source: { specialty: 'construction', kind: 'module-vocabulary', moduleId: 'framer', sourceTerm: 'layout' } },
  { id: 'lu_es_0014', conceptId: 'concept_restoration', lemma: 'restauración', partOfSpeech: 'noun', senseKey: 'religious-restoration', source: { specialty: 'missionary', kind: 'module-vocabulary', moduleId: 'restoration', sourceTerm: 'restoration' } },
  { id: 'lu_es_0015', conceptId: 'concept_prophet', lemma: 'profeta', partOfSpeech: 'noun', senseKey: 'religious-prophet', source: { specialty: 'missionary', kind: 'module-vocabulary', moduleId: 'restoration', sourceTerm: 'prophet' } },
  { id: 'lu_es_0016', conceptId: 'concept_revelation', lemma: 'revelación', partOfSpeech: 'noun', senseKey: 'religious-revelation', source: { specialty: 'missionary', kind: 'module-vocabulary', moduleId: 'restoration', sourceTerm: 'revelation' } },
  { id: 'lu_es_0017', conceptId: 'concept_church', lemma: 'iglesia', partOfSpeech: 'noun', senseKey: 'religious-church', source: { specialty: 'missionary', kind: 'module-vocabulary', moduleId: 'restoration', sourceTerm: 'church' } },
  { id: 'lu_es_0018', conceptId: 'concept_truth', lemma: 'verdad', partOfSpeech: 'noun', senseKey: 'religious-truth', source: { specialty: 'missionary', kind: 'module-vocabulary', moduleId: 'restoration', sourceTerm: 'truth' } },
  { id: 'lu_es_0019', conceptId: 'concept_sacrament_meeting', lemma: 'Reunión Sacramental', partOfSpeech: 'proper-noun', senseKey: 'church-meeting', source: { specialty: 'missionary', kind: 'module-vocabulary', moduleId: 'church-service', sourceTerm: 'Sacrament Meeting' } },
  { id: 'lu_es_0020', conceptId: 'concept_ride_to_church', lemma: 'aventón a la iglesia', partOfSpeech: 'phrase', senseKey: 'transport-to-church', source: { specialty: 'missionary', kind: 'module-vocabulary', moduleId: 'church-service', sourceTerm: 'ride to church' } },
] satisfies Array<Omit<CanonicalLanguageUnitManifestEntry, 'language' | 'locale' | 'kind'> & Pick<CanonicalLanguageUnitManifestEntry, 'id' | 'conceptId' | 'lemma' | 'partOfSpeech' | 'senseKey' | 'source'>>

function modulesFor(specialty: Specialty) {
  return specialty === 'construction' ? CONSTRUCTION_MODULES : MISSIONARY_MODULES
}

function occurrenceId(unitId: LanguageUnitId): ContentOccurrenceId {
  return `occ_${unitId.slice(3)}_module_v1`
}

export function resolveLanguageUnit(id: LanguageUnitId): ResolvedLanguageUnit {
  const entry = LANGUAGE_UNIT_MANIFEST.find(candidate => candidate.id === id)
  if (!entry) throw new Error(`Unknown canonical language unit: ${id}`)

  const mod = modulesFor(entry.source.specialty).find(candidate => candidate.id === entry.source.moduleId)
  if (!mod) throw new Error(`Missing source module ${entry.source.specialty}/${entry.source.moduleId} for ${id}`)

  const matches = mod.vocab.filter(candidate => candidate.en === entry.source.sourceTerm)
  if (matches.length !== 1) {
    throw new Error(`Expected one source term "${entry.source.sourceTerm}" in ${entry.source.moduleId}; found ${matches.length}`)
  }

  const occurrence: ContentOccurrence = {
    id: occurrenceId(entry.id),
    languageUnitId: entry.id,
    source: entry.source,
    surfaceForm: matches[0].es,
    contentVersion: 1,
  }

  return {
    ...entry,
    language: 'es',
    locale: 'es-419',
    kind: entry.partOfSpeech === 'phrase' ? 'phrase' : 'word',
    displayForm: matches[0].es,
    occurrence,
  }
}

export function resolveLanguageUnits(ids: LanguageUnitId[]) {
  return ids.map(resolveLanguageUnit)
}

export function validateLanguageUnitManifest(): string[] {
  const issues: string[] = []
  const ids = new Set<string>()
  const sourceKeys = new Set<string>()

  for (const entry of LANGUAGE_UNIT_MANIFEST) {
    if (ids.has(entry.id)) issues.push(`Duplicate language unit id: ${entry.id}`)
    ids.add(entry.id)

    const sourceKey = `${entry.source.specialty}:${entry.source.moduleId}:${entry.source.sourceTerm}`
    if (sourceKeys.has(sourceKey)) issues.push(`Duplicate source occurrence: ${sourceKey}`)
    sourceKeys.add(sourceKey)

    try {
      resolveLanguageUnit(entry.id)
    } catch (error) {
      issues.push(error instanceof Error ? error.message : String(error))
    }
  }

  return issues
}
