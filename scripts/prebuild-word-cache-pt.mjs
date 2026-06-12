/**
 * Prebuilds Portuguese (pt-BR) entries in public/word-cache.json.
 * Extracts all pt: fields from the 4 module data files, generates
 * WordCardData via Claude Haiku, and appends to the existing cache
 * (which already contains Spanish/Swahili entries).
 *
 * Run: node scripts/prebuild-word-cache-pt.mjs
 * Resumes from checkpoint if interrupted.
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

// ── Module files with pt: fields ───────────────────────────────────────────
const MODULE_FILES = [
  join(ROOT, 'src/data/constructionModules.ts'),
  join(ROOT, 'src/data/medicalModules.ts'),
  join(ROOT, 'src/data/missionaryModules.ts'),
  join(ROOT, 'src/data/climbingModules.ts'),
]

// ── Extract pt vocab pairs ─────────────────────────────────────────────────
function extractPtPairs() {
  const seen = new Set()
  const pairs = []

  function add(en, pt) {
    // Key format: same as WordCard.tsx — "word|sentence"
    // word = first meaningful token (stop at space, slash, comma, em-dash)
    const word = pt.split(/[\s/,—–]/)[0].trim()
    const sentence = `${en}: ${pt}`
    const key = `${word}|${sentence}`
    if (!seen.has(key) && word.length > 1) {
      seen.add(key)
      pairs.push({ en, pt, word, sentence, key })
    }
  }

  // Pattern: en: '...', es: '...', sw: '...', pt: '...'
  // Capture en and pt fields from the full VocabPair objects
  const reVocabPair = /en:\s*'([^']+)'[^}]*?pt:\s*'([^']+)'/gs
  for (const f of MODULE_FILES) {
    if (!existsSync(f)) continue
    const src = readFileSync(f, 'utf8')
    let m
    while ((m = reVocabPair.exec(src)) !== null) add(m[1], m[2])
    reVocabPair.lastIndex = 0
  }

  // Also capture samplePhrase pt fields: samplePhrase: { ... pt: '...' }
  const reSample = /samplePhrase\s*:\s*\{[^}]*?pt:\s*'([^']+)'/gs
  for (const f of MODULE_FILES) {
    if (!existsSync(f)) continue
    const src = readFileSync(f, 'utf8')
    let m
    while ((m = reSample.exec(src)) !== null) {
      const pt = m[1]
      const word = pt.split(/[\s/,—–]/)[0].trim()
      const key = `${word}|${pt}`
      if (!seen.has(key) && word.length > 1) {
        seen.add(key)
        pairs.push({ en: pt, pt, word, sentence: pt, key })
      }
    }
    reSample.lastIndex = 0
  }

  return pairs
}

// ── Anthropic tool schema ──────────────────────────────────────────────────
const TOOL = {
  name: 'return_word_card',
  description: 'Return a Brazilian Portuguese word card for a working professional, including morphological breakdown.',
  input_schema: {
    type: 'object',
    properties: {
      headword:           { type: 'string', description: 'The base/infinitive form of the word' },
      wordEmoji:          { type: 'string', description: 'One emoji that best pictures this word' },
      partOfSpeech:       { type: 'string', description: 'noun, verb, adjective, adverb, etc.' },
      phonetic:           { type: 'string', description: 'Brazilian Portuguese pronunciation in English phonetics, e.g. "kwAY-sha"' },
      baseDefinition:     { type: 'string', description: 'Simple English meaning in 8 words or less' },
      exampleSentence:    { type: 'string', description: 'A natural Brazilian Portuguese sentence using the word in a work context' },
      exampleTranslation: { type: 'string', description: 'English translation of the example sentence' },
      morphStem:          { type: 'string' },
      morphEnding:        { type: 'string' },
      morphConjugations:  {
        type: 'array',
        items: { type: 'object', properties: { ending: { type: 'string' }, full: { type: 'string' } }, required: ['ending', 'full'] },
      },
      commonPhrases: { type: 'array', items: { type: 'string' } },
    },
    required: ['headword', 'wordEmoji', 'partOfSpeech', 'phonetic', 'baseDefinition', 'exampleSentence', 'exampleTranslation'],
  },
}

const SYSTEM = `You are a bilingual Brazilian Portuguese dictionary for working professionals. Keep definitions concise. Always populate morphStem, morphEnding, morphConjugations, and commonPhrases to show how words change on the job. Use Brazilian Portuguese spelling and vocabulary (not European Portuguese). Phonetics should be English approximations of Brazilian Portuguese pronunciation.

Here are gold-standard examples of the output quality expected:

Example 1 — verb:
Word: trabalhar | Context: Temos que trabalhar rápido hoje.
Card: headword="trabalhar" wordEmoji="💼" partOfSpeech="verb (infinitive)" phonetic="/tra-ba-LYAR/" baseDefinition="To work; to carry out a task or job." morphStem="trabalh-" morphEnding="-ar" conjugations=[trabalho,trabalhas,trabalha,trabalhamos,trabalham] phrases=["trabalhar duro — to work hard","trabalhar em equipe — to work as a team","trabalhar em tempo integral — to work full-time"]

Example 2 — noun (masculine):
Word: andaime | Context: Sobe no andaime com cuidado.
Card: headword="andaime" wordEmoji="🏗️" partOfSpeech="noun (masculine)" phonetic="/an-DAI-mee/" baseDefinition="Scaffold; temporary platform for construction access." morphStem="andaim-" morphEnding="-e" variants=[andaime (singular),andaimes (plural)] phrases=["montar um andaime — to set up scaffolding","andaime suspenso — suspended scaffold"]

Example 3 — noun (-ção suffix):
Word: fratura | Context: O paciente tem uma fratura no braço.
Card: headword="fratura" wordEmoji="🦴" partOfSpeech="noun (feminine)" phonetic="/fra-TOO-ra/" baseDefinition="Fracture; broken bone." morphStem="fratur-" morphEnding="-a" variants=[fratura (singular),fraturas (plural)] phrases=["fratura exposta — open fracture","fratura por estresse — stress fracture","imobilizar a fratura — to immobilize the fracture"]`

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
        messages: [{ role: 'user', content: `Brazilian Portuguese word: "${word}"\nContext: "${sentence}"` }],
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
const CHECKPOINT_PATH = join(ROOT, 'scripts/.word-cache-pt-checkpoint.json')

const pairs = extractPtPairs()
console.log(`\n📚 ${pairs.length} Portuguese vocab pairs found across ${MODULE_FILES.length} source files\n`)

// Load existing cache (Spanish/Swahili entries preserved)
let cache = {}
if (existsSync(CACHE_PATH)) {
  cache = JSON.parse(readFileSync(CACHE_PATH, 'utf8'))
  console.log(`✅ Loaded ${Object.keys(cache).length} existing entries from word-cache.json`)
} else if (existsSync(CHECKPOINT_PATH)) {
  cache = JSON.parse(readFileSync(CHECKPOINT_PATH, 'utf8'))
  console.log(`♻️  Resumed from checkpoint: ${Object.keys(cache).length} entries`)
}

const todo = pairs.filter(p => !cache[p.key])
console.log(`🇧🇷 ${todo.length} Portuguese cards to generate (${pairs.length - todo.length} already cached)\n`)

if (todo.length === 0) {
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2))
  console.log('✅ All Portuguese cards already cached. word-cache.json is up to date.')
  process.exit(0)
}

let done = 0
let errors = 0

await withConcurrency(todo, 3, async (pair) => {
  try {
    const card = await fetchCard(pair.word, pair.sentence)
    cache[pair.key] = card
    done++
    process.stdout.write(`\r  ${done + errors}/${todo.length} — ✓ ${pair.word.padEnd(30)}`)

    // Checkpoint every 10
    if (done % 10 === 0) {
      writeFileSync(CHECKPOINT_PATH, JSON.stringify(cache, null, 2))
    }

    // 500ms between completions per worker — 3 workers ≈ 6 req/s
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
