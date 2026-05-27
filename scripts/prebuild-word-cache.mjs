/**
 * Prebuilds public/word-cache.json with all 340 vocab cards from the 4 module files.
 * Run once before deploy: node scripts/prebuild-word-cache.mjs
 * Cards are keyed by "word|sentence" — matches WordCard.tsx lookup pattern exactly.
 * Falls back to live API for any key not in the cache.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dir = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dir, '..')

// ── Load ANTHROPIC_API_KEY ──────────────────────────────────────────────────
function loadEnv() {
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
const ANTHROPIC_KEY = loadEnv()
if (!ANTHROPIC_KEY) { console.error('ANTHROPIC_API_KEY not found'); process.exit(1) }

// ── Extract vocab pairs from TS source files ────────────────────────────────
// Legacy module files: single-quote format with sw: field
const MODULE_FILES = [
  join(ROOT, 'src/data/constructionModules.ts'),
  join(ROOT, 'src/data/medicalModules.ts'),
  join(ROOT, 'src/data/missionaryModules.ts'),
  join(ROOT, 'src/data/climbingModules.ts'),
]

// Lesson files: JSON-format vocab arrays (generated, no sw: field)
const LESSON_FILES = [
  join(ROOT, 'src/data/constructionLessons.ts'),
  join(ROOT, 'src/data/medicalLessons.ts'),
]

function extractPairs() {
  const seen = new Set()
  const pairs = []

  function add(en, es) {
    const word = es.split(/[\s/,]/)[0]
    const sentence = `${en}: ${es}`
    const key = `${word}|${sentence}`
    if (!seen.has(key)) {
      seen.add(key)
      pairs.push({ en, es, word, sentence, key })
    }
  }

  // Legacy format: { en: '...', es: '...', sw: ... }
  const reLegacy = /\{\s*en:\s*'([^']+)'\s*,\s*es:\s*'([^']+)'\s*,\s*sw:/g
  for (const f of MODULE_FILES) {
    if (!existsSync(f)) continue
    const src = readFileSync(f, 'utf8')
    let m
    while ((m = reLegacy.exec(src)) !== null) add(m[1], m[2])
    reLegacy.lastIndex = 0
  }

  // Lesson format: {"en":"...","es":"..."}
  const reLesson = /\{"en":"([^"]+)","es":"([^"]+)"\}/g
  for (const f of LESSON_FILES) {
    if (!existsSync(f)) continue
    const src = readFileSync(f, 'utf8')
    let m
    while ((m = reLesson.exec(src)) !== null) add(m[1], m[2])
    reLesson.lastIndex = 0
  }

  return pairs
}

// ── Anthropic tool schema (matches word-lookup.ts) ─────────────────────────
const TOOL = {
  name: 'return_word_card',
  description: 'Return a Spanish word card for a professional learner, including morphological breakdown.',
  input_schema: {
    type: 'object',
    properties: {
      headword:          { type: 'string', description: 'The base/infinitive form of the word' },
      wordEmoji:         { type: 'string', description: 'One emoji that best pictures this word' },
      partOfSpeech:      { type: 'string', description: 'noun, verb, adjective, adverb, etc.' },
      phonetic:          { type: 'string', description: 'Pronunciation in English phonetics, e.g. "mah-REE-poh-sah"' },
      baseDefinition:    { type: 'string', description: 'Simple English meaning in 8 words or less' },
      exampleSentence:   { type: 'string', description: 'A natural Spanish sentence using the word in a work context' },
      exampleTranslation:{ type: 'string', description: 'English translation of the example sentence' },
      morphStem:         { type: 'string' },
      morphEnding:       { type: 'string' },
      morphConjugations: {
        type: 'array',
        items: { type: 'object', properties: { ending: { type: 'string' }, full: { type: 'string' } }, required: ['ending', 'full'] },
      },
      commonPhrases: { type: 'array', items: { type: 'string' } },
    },
    required: ['headword', 'wordEmoji', 'partOfSpeech', 'phonetic', 'baseDefinition', 'exampleSentence', 'exampleTranslation'],
  },
}

const SYSTEM = `You are a bilingual Spanish dictionary for working professionals. Keep definitions concise. Always populate morphStem, morphEnding, morphConjugations, and commonPhrases to show how words change on the job.

Here are gold-standard examples of the output quality expected:

Example 1 — verb:
Word: trabajar | Context: Hay que trabajar rápido hoy.
Card: headword="trabajar" wordEmoji="💼" partOfSpeech="verb (infinitive)" phonetic="/tra.ba.ˈxar/" baseDefinition="To work; to carry out a task or job." morphStem="trabaj-" morphEnding="-ar" conjugations=[trabajo,trabajas,trabaja,trabajamos,trabajáis,trabajan] phrases=["trabajar duro — to work hard","trabajar en equipo — to work as a team","trabajar a tiempo completo — to work full-time"]

Example 2 — noun (masculine):
Word: andamio | Context: Sube al andamio con cuidado.
Card: headword="andamio" wordEmoji="🏗️" partOfSpeech="noun (masculine)" phonetic="/an-ˈda-mjo/" baseDefinition="Scaffold; temporary platform for construction access." morphStem="andami-" morphEnding="-o" variants=[andamio (singular),andamios (plural)] phrases=["montar un andamio — to set up scaffolding","andamio colgante — suspended scaffold"]

Example 3 — noun (masculine, invariant stem):
Word: nivel | Context: Verifica que esté al nivel antes de seguir.
Card: headword="nivel" wordEmoji="📏" partOfSpeech="masculine noun" phonetic="/ni.ˈbel/" baseDefinition="Level; flat surface or degree of quality." morphStem="nivel" morphEnding="-es (plural)" variants=[el nivel,los niveles] phrases=["al nivel — at level","nivel del mar — sea level","nivel de calidad — quality standard"]`

// ── Single word-card fetch with retry on 429 ───────────────────────────────
async function fetchCard(word, sentence, retries = 4) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 700,
        system: SYSTEM,
        tools: [TOOL],
        tool_choice: { type: 'tool', name: 'return_word_card' },
        messages: [{ role: 'user', content: `Spanish word: "${word}"\nContext: "${sentence}"` }],
      }),
    })
    if (resp.status === 429) {
      const wait = Math.pow(2, attempt) * 2000 + Math.random() * 1000
      await new Promise(r => setTimeout(r, wait))
      continue
    }
    if (!resp.ok) {
      const text = await resp.text()
      throw new Error(`Anthropic ${resp.status}: ${text.slice(0, 200)}`)
    }
    const data = await resp.json()
    const toolUse = data.content?.find(b => b.type === 'tool_use')
    if (!toolUse?.input) throw new Error('No tool_use block in response')
    return toolUse.input
  }
  throw new Error(`Rate limited after ${retries} retries`)
}

// ── Concurrency limiter ────────────────────────────────────────────────────
async function withConcurrency(tasks, limit, fn) {
  const results = new Array(tasks.length)
  let i = 0
  async function worker() {
    while (i < tasks.length) {
      const idx = i++
      results[idx] = await fn(tasks[idx], idx)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, tasks.length) }, worker))
  return results
}

// ── Main ───────────────────────────────────────────────────────────────────
const CACHE_PATH = join(ROOT, 'public/word-cache.json')
const CHECKPOINT_PATH = join(ROOT, 'scripts/.word-cache-checkpoint.json')

const pairs = extractPairs()
console.log(`\n📚 ${pairs.length} vocab pairs found across ${MODULE_FILES.length + LESSON_FILES.length} source files\n`)

// Load existing cache or checkpoint to allow resume
let cache = {}
if (existsSync(CACHE_PATH)) {
  cache = JSON.parse(readFileSync(CACHE_PATH, 'utf8'))
  console.log(`✅ Loaded ${Object.keys(cache).length} existing entries from word-cache.json`)
} else if (existsSync(CHECKPOINT_PATH)) {
  cache = JSON.parse(readFileSync(CHECKPOINT_PATH, 'utf8'))
  console.log(`♻️  Resumed from checkpoint: ${Object.keys(cache).length} entries`)
}

const todo = pairs.filter(p => !cache[p.key])
console.log(`🔄 ${todo.length} cards to generate (${pairs.length - todo.length} already cached)\n`)

if (todo.length === 0) {
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2))
  console.log('✅ All cards already cached. word-cache.json is up to date.')
  process.exit(0)
}

let done = 0
let errors = 0

await withConcurrency(todo, 3, async (pair, _idx) => {
  try {
    const card = await fetchCard(pair.word, pair.sentence)
    cache[pair.key] = card
    done++
    process.stdout.write(`\r  ${done + errors}/${todo.length} — ✓ ${pair.word.padEnd(20)}`)

    // Checkpoint every 10
    if (done % 10 === 0) {
      writeFileSync(CHECKPOINT_PATH, JSON.stringify(cache, null, 2))
    }

    // 500ms between completions per worker — 3 workers = ~6 req/s ≈ 2520 tokens/min
    await new Promise(r => setTimeout(r, 500))
  } catch (err) {
    errors++
    console.error(`\n  ✗ ${pair.word}: ${err.message}`)
  }
})

console.log(`\n\n✅ Done — ${done} generated, ${errors} errors, ${Object.keys(cache).length} total in cache`)

writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2))
console.log(`📦 Saved → public/word-cache.json (${Math.round(JSON.stringify(cache).length / 1024)}KB)`)

if (errors > 0) {
  console.log(`⚠️  ${errors} words failed — re-run script to retry (checkpoint preserved)`)
  process.exit(1)
}
