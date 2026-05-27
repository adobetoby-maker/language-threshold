/**
 * Generates 30 lessons × 9 construction subsections via Haiku.
 * Each lesson: title, scenario, 10 vocab pairs (en/es), sample phrase (en/es).
 * Output: src/data/constructionLessons.ts
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
  { id: 'framer',       title: 'Framer',               context: 'wood framing, stud layout, blueprint reading, wall assembly, floor/roof systems' },
  { id: 'foreman',      title: 'Construction Foreman',  context: 'crew management, inspections, scheduling, subcontractors, safety compliance, progress reporting' },
  { id: 'safety',       title: 'Safety Officer',        context: 'PPE, fall protection, lockout/tagout, hazard identification, OSHA compliance, emergency procedures' },
  { id: 'plumber',      title: 'Plumber',               context: 'pipe installation, fixtures, drains, pressure testing, rough-in, code compliance' },
  { id: 'drywall',      title: 'Drywall Installer',     context: 'hanging, taping, mudding, sanding, corner bead, texturing, finish coats' },
  { id: 'electrician',  title: 'Electrician',           context: 'wiring, panels, conduit, outlets, switches, grounding, code compliance, service calls' },
  { id: 'truck-driver', title: 'Truck Driver',          context: 'material delivery, manifests, loading/unloading, route logistics, DOT compliance, warehouse coordination' },
  { id: 'landscaper',   title: 'Landscaper',            context: 'lawn care, planting, irrigation, hardscape, fertilizing, mowing, drainage, client communication' },
  { id: 'auto-mechanic',title: 'Auto Mechanic',         context: 'diagnostics, oil/brake/transmission service, engine repair, customer estimates, parts ordering' },
]

const CHECKPOINT = join(ROOT, 'scripts/.lessons-checkpoint.json')
const OUT = join(ROOT, 'src/data/constructionLessons.ts')

let checkpoint = existsSync(CHECKPOINT) ? JSON.parse(readFileSync(CHECKPOINT, 'utf8')) : {}

async function generateSubsection(sub) {
  if (checkpoint[sub.id]) {
    console.log(`  ♻️  ${sub.title}: loaded from checkpoint`)
    return checkpoint[sub.id]
  }

  // Generate in two batches of 15 to stay under token limits
  const allLessons = []
  for (const batch of [[1, 15], [16, 30]]) {
    const [from, to] = batch
    const prompt = `You are generating a bilingual Spanish vocabulary curriculum for ${sub.title} — construction workers learning Spanish on the job.

Generate lessons ${from} through ${to} (${to - from + 1} lessons) for the domain: ${sub.context}

Rules:
- Lessons ${from <= 15 ? '1-15' : '16-30'}: ${from <= 15 ? 'foundational to intermediate scenarios' : 'intermediate to advanced/specialized scenarios'}
- Each lesson: one specific, concrete jobsite scenario
- Each lesson has exactly 10 vocab pairs (en/es) — short, practical terms
- Sample phrase: one natural Spanish sentence a worker would say

Respond with ONLY valid JSON — no markdown, no explanation:
{"lessons":[{"lessonNumber":${from},"title":"Short Title","scenario":"One sentence describing the jobsite situation.","vocab":[{"en":"term","es":"término"}],"samplePhrase":{"en":"English sentence.","es":"Spanish sentence."}}]}`

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

console.log('\n🏗️  Generating 30 lessons × 9 subsections...\n')

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
  await new Promise(r => setTimeout(r, 500))
}

// Write TypeScript file
const lines = [
  `export interface ConstructionLesson {`,
  `  id: string`,
  `  lessonNumber: number`,
  `  title: string`,
  `  scenario: string`,
  `  vocab: Array<{ en: string; es: string }>`,
  `  samplePhrase: { en: string; es: string }`,
  `}`,
  ``,
  `export interface ConstructionSubsection {`,
  `  id: string`,
  `  emoji: string`,
  `  title: string`,
  `  tagline: string`,
  `  color: string`,
  `  lessons: ConstructionLesson[]`,
  `}`,
  ``,
]

const META = {
  framer:       { emoji: '🔨', color: '#FF7A4A', tagline: 'Wall layout, blueprint reading, crew communication on the deck.' },
  foreman:      { emoji: '🏗️', color: '#FF7A4A', tagline: 'Lead bilingual crews, run inspections, coordinate subcontractors.' },
  safety:       { emoji: '🦺', color: '#FF7A4A', tagline: 'PPE briefings, hazard identification, and OSHA compliance.' },
  plumber:      { emoji: '🔧', color: '#FF7A4A', tagline: 'Pipe installation, fixtures, and pressure testing.' },
  drywall:      { emoji: '🪣', color: '#FF7A4A', tagline: 'Hang, tape, mud, and finish to professional standards.' },
  electrician:  { emoji: '⚡', color: '#FF7A4A', tagline: 'Wiring, panels, conduit, and code compliance.' },
  'truck-driver': { emoji: '🚛', color: '#FF7A4A', tagline: 'Material delivery, manifests, and jobsite logistics.' },
  landscaper:   { emoji: '🌿', color: '#FF7A4A', tagline: 'Lawn care, planting, irrigation, and client communication.' },
  'auto-mechanic': { emoji: '🔩', color: '#FF7A4A', tagline: 'Diagnostics, service, repair, and customer estimates.' },
}

const TITLES = {
  framer: 'Framer', foreman: 'Construction Foreman', safety: 'Safety Officer',
  plumber: 'Plumber', drywall: 'Drywall Installer', electrician: 'Electrician',
  'truck-driver': 'Truck Driver', landscaper: 'Landscaper', 'auto-mechanic': 'Auto Mechanic',
}

lines.push(`export const CONSTRUCTION_SUBSECTIONS: ConstructionSubsection[] = [`)
for (const sub of SUBSECTIONS) {
  const meta = META[sub.id]
  const lessons = results[sub.id]
  lines.push(`  {`)
  lines.push(`    id: ${JSON.stringify(sub.id)},`)
  lines.push(`    emoji: ${JSON.stringify(meta.emoji)},`)
  lines.push(`    title: ${JSON.stringify(TITLES[sub.id])},`)
  lines.push(`    tagline: ${JSON.stringify(meta.tagline)},`)
  lines.push(`    color: ${JSON.stringify(meta.color)},`)
  lines.push(`    lessons: [`)
  for (const lesson of lessons) {
    lines.push(`      {`)
    lines.push(`        id: ${JSON.stringify(sub.id + '-' + lesson.lessonNumber)},`)
    lines.push(`        lessonNumber: ${lesson.lessonNumber},`)
    lines.push(`        title: ${JSON.stringify(lesson.title)},`)
    lines.push(`        scenario: ${JSON.stringify(lesson.scenario)},`)
    lines.push(`        vocab: ${JSON.stringify(lesson.vocab)},`)
    lines.push(`        samplePhrase: ${JSON.stringify(lesson.samplePhrase)},`)
    lines.push(`      },`)
  }
  lines.push(`    ],`)
  lines.push(`  },`)
}
lines.push(`]`)

writeFileSync(OUT, lines.join('\n'))
console.log(`\n✅ Written → src/data/constructionLessons.ts`)
console.log(`   ${SUBSECTIONS.length} subsections × 30 lessons = ${SUBSECTIONS.length * 30} total lessons`)
console.log(`   ${SUBSECTIONS.length * 30 * 10} vocab pairs total\n`)
