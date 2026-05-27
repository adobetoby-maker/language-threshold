/**
 * Generates 30 lessons × 13 medical subsections via Haiku.
 * Output: src/data/medicalLessons.ts
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dir = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dir, '..')

function loadKey() {
  for (const name of ['.env.local', '.env.local.tmp', '.env']) {
    const p = join(ROOT, name)
    if (!existsSync(p)) continue
    for (const line of readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^ANTHROPIC_API_KEY\s*=\s*(.+)$/)
      if (m) return m[1].trim()
    }
  }
  return process.env.ANTHROPIC_API_KEY
}
const KEY = loadKey()
if (!KEY) { console.error('ANTHROPIC_API_KEY not found'); process.exit(1) }

const SUBSECTIONS = [
  { id: 'emergency',           title: 'Emergency Medicine',      context: 'triage, trauma assessment, airway management, vital signs, rapid stabilization, ED procedures' },
  { id: 'nursing',             title: 'Nursing',                 context: 'patient assessment, medication administration, wound care, IV access, patient communication, documentation' },
  { id: 'orthopedics',         title: 'Orthopedics',             context: 'fractures, joint assessment, post-op care, mobility, casting, surgical planning, range of motion' },
  { id: 'family-medicine',     title: 'Family Medicine',         context: 'wellness visits, chronic disease management, prescriptions, referrals, preventive care, patient history' },
  { id: 'obgyn',               title: 'OB/GYN',                  context: 'prenatal care, labor and delivery, postpartum, gynecologic exams, family planning, ultrasound' },
  { id: 'surgery',             title: 'Surgery',                 context: 'pre-op prep, surgical consent, anesthesia, intraoperative communication, post-op recovery, complications' },
  { id: 'cardiology',          title: 'Cardiology',              context: 'chest pain assessment, EKG interpretation, cardiac medications, heart failure management, interventional procedures' },
  { id: 'physical-therapy',    title: 'Physical Therapy',        context: 'mobility exercises, pain assessment, rehabilitation goals, home exercise programs, functional assessment' },
  { id: 'pain-management',     title: 'Pain Management',         context: 'pain assessment, opioid management, nerve blocks, addiction screening, multimodal treatment, patient education' },
  { id: 'medical-receptionist',title: 'Medical Receptionist',    context: 'scheduling, insurance verification, copays, referrals, check-in/out, medical records, patient communication' },
  { id: 'social-work',         title: 'Medical Social Work',     context: 'SDOH assessment, discharge planning, community resources, insurance navigation, mental health support, crisis intervention' },
  { id: 'or-evs',              title: 'OR / EVS',                context: 'sterile field maintenance, instrument handling, room turnover, biohazard disposal, infection control, equipment cleaning' },
  { id: 'fmg',                 title: 'Foreign Medical Graduate', context: 'residency orientation, clinical documentation, medical terminology, team communication, rounds, US medical culture' },
]

const CHECKPOINT = join(ROOT, 'scripts/.medical-lessons-checkpoint.json')
const OUT = join(ROOT, 'src/data/medicalLessons.ts')

let checkpoint = existsSync(CHECKPOINT) ? JSON.parse(readFileSync(CHECKPOINT, 'utf8')) : {}

async function generateSubsection(sub) {
  if (checkpoint[sub.id]) {
    console.log(`  ♻️  ${sub.title}: loaded from checkpoint`)
    return checkpoint[sub.id]
  }

  const allLessons = []
  for (const [from, to] of [[1, 15], [16, 30]]) {
    const prompt = `Bilingual Spanish vocabulary curriculum for ${sub.title} — healthcare workers communicating with Spanish-speaking patients.

Generate lessons ${from} through ${to} for the domain: ${sub.context}

Lessons ${from <= 15 ? '1-15: foundational clinical scenarios' : '16-30: advanced/specialized scenarios'}
Each lesson: one specific clinical situation, 10 practical vocab pairs (en/es), 1 sample phrase a clinician would say.

Respond with ONLY valid JSON:
{"lessons":[{"lessonNumber":${from},"title":"Short Title","scenario":"One sentence clinical situation.","vocab":[{"en":"term","es":"término"}],"samplePhrase":{"en":"English phrase.","es":"Frase en español."}}]}`

    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 6000,
        messages: [{ role: 'user', content: prompt }],
      }),
    })
    if (!resp.ok) throw new Error(`${resp.status}: ${await resp.text().then(t => t.slice(0,200))}`)
    const data = await resp.json()
    const text = data.content[0].text.trim()
    const clean = text.startsWith('```') ? text.replace(/^```json?\n?/, '').replace(/\n?```$/, '') : text
    const json = JSON.parse(clean)
    allLessons.push(...json.lessons)
    await new Promise(r => setTimeout(r, 300))
  }

  checkpoint[sub.id] = allLessons
  writeFileSync(CHECKPOINT, JSON.stringify(checkpoint, null, 2))
  return allLessons
}

const META = {
  'emergency':           { emoji: '🚨', color: '#00D4B8' },
  'nursing':             { emoji: '💉', color: '#00D4B8' },
  'orthopedics':         { emoji: '🦴', color: '#00D4B8' },
  'family-medicine':     { emoji: '🩺', color: '#00D4B8' },
  'obgyn':               { emoji: '🤰', color: '#00D4B8' },
  'surgery':             { emoji: '🔪', color: '#00D4B8' },
  'cardiology':          { emoji: '❤️', color: '#00D4B8' },
  'physical-therapy':    { emoji: '🏃', color: '#00D4B8' },
  'pain-management':     { emoji: '💊', color: '#00D4B8' },
  'medical-receptionist':{ emoji: '📋', color: '#00D4B8' },
  'social-work':         { emoji: '🤝', color: '#00D4B8' },
  'or-evs':              { emoji: '🧤', color: '#00D4B8' },
  'fmg':                 { emoji: '🎓', color: '#00D4B8' },
}

const TAGLINES = {
  'emergency': 'Triage, trauma, and rapid stabilization in the ED.',
  'nursing': 'Patient assessment, medications, and bedside communication.',
  'orthopedics': 'Fractures, joints, post-op care, and mobility.',
  'family-medicine': 'Wellness visits, chronic disease, and preventive care.',
  'obgyn': 'Prenatal care, labor, delivery, and postpartum.',
  'surgery': 'Pre-op consent, intraoperative communication, and recovery.',
  'cardiology': 'Chest pain, EKG, medications, and interventional procedures.',
  'physical-therapy': 'Rehabilitation exercises, mobility, and home programs.',
  'pain-management': 'Pain assessment, opioids, nerve blocks, and patient education.',
  'medical-receptionist': 'Scheduling, insurance, check-in, and records.',
  'social-work': 'SDOH, discharge planning, resources, and crisis support.',
  'or-evs': 'Sterile field, room turnover, and infection control.',
  'fmg': 'Rounds, documentation, team communication, and US clinical culture.',
}

console.log('\n🏥  Generating 30 lessons × 13 medical subsections...\n')

const results = {}
for (const sub of SUBSECTIONS) {
  process.stdout.write(`  Generating ${sub.title}...`)
  try {
    results[sub.id] = await generateSubsection(sub)
    console.log(` ✓ (${results[sub.id].length} lessons)`)
  } catch (err) {
    console.error(` ✗ ${err.message}`)
    process.exit(1)
  }
  await new Promise(r => setTimeout(r, 400))
}

const lines = [
  `export interface MedicalLesson {`,
  `  id: string`,
  `  lessonNumber: number`,
  `  title: string`,
  `  scenario: string`,
  `  vocab: Array<{ en: string; es: string }>`,
  `  samplePhrase: { en: string; es: string }`,
  `}`,
  ``,
  `export interface MedicalSubsection {`,
  `  id: string`,
  `  emoji: string`,
  `  title: string`,
  `  tagline: string`,
  `  color: string`,
  `  lessons: MedicalLesson[]`,
  `}`,
  ``,
  `export const MEDICAL_SUBSECTIONS: MedicalSubsection[] = [`,
]

for (const sub of SUBSECTIONS) {
  const meta = META[sub.id]
  const lessons = results[sub.id]
  lines.push(`  {`)
  lines.push(`    id: ${JSON.stringify(sub.id)},`)
  lines.push(`    emoji: ${JSON.stringify(meta.emoji)},`)
  lines.push(`    title: ${JSON.stringify(sub.title)},`)
  lines.push(`    tagline: ${JSON.stringify(TAGLINES[sub.id])},`)
  lines.push(`    color: ${JSON.stringify(meta.color)},`)
  lines.push(`    lessons: [`)
  for (const lesson of lessons) {
    lines.push(`      { id: ${JSON.stringify(sub.id + '-' + lesson.lessonNumber)}, lessonNumber: ${lesson.lessonNumber}, title: ${JSON.stringify(lesson.title)}, scenario: ${JSON.stringify(lesson.scenario)}, vocab: ${JSON.stringify(lesson.vocab)}, samplePhrase: ${JSON.stringify(lesson.samplePhrase)} },`)
  }
  lines.push(`    ],`)
  lines.push(`  },`)
}
lines.push(`]`)

writeFileSync(OUT, lines.join('\n'))
console.log(`\n✅ Written → src/data/medicalLessons.ts`)
console.log(`   ${SUBSECTIONS.length} subsections × 30 lessons = ${SUBSECTIONS.length * 30} total lessons\n`)
