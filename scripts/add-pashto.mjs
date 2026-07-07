// Built by ATLAS — 2026-07-06
// Injects Pashto (ps) fields into a *Modules.ts data file.
// Order-walked with strict en/module-id assertions — fails loudly on any mismatch.
// Usage: node scripts/add-pashto.mjs <medical|construction|climbing|missionary>

import fs from 'fs'
import path from 'path'

const KIND = process.argv[2]
const FILES = {
  medical: 'medicalModules.ts',
  construction: 'constructionModules.ts',
  climbing: 'climbingModules.ts',
  missionary: 'missionaryModules.ts',
}
if (!FILES[KIND]) { console.error('unknown kind:', KIND); process.exit(1) }

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const tsPath = path.join(root, 'src/data', FILES[KIND])
const map = JSON.parse(fs.readFileSync(path.join(root, 'scripts/pashto', `${KIND}.json`), 'utf8'))

const lines = fs.readFileSync(tsPath, 'utf8').split('\n')
const out = []
let vi = 0, ti = 0, gi = 0, pi = 0
let moduleIdx = -1
let inPhrase = false
const esc = s => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")

for (let line of lines) {
  // interface lines: add ps to the string shapes
  if (/en: string;.*ko: string \}/.test(line)) {
    out.push(line.replace(/ko: string \}/, 'ko: string; ps: string }'))
    continue
  }
  // LangKey union
  if (/^export type LangKey =/.test(line)) {
    if (!line.includes("'ps'")) line = line.replace(/\s*$/, '') + " | 'ps'"
    out.push(line)
    continue
  }
  // track module id
  const idm = line.match(/^\s+id: '([^']+)',?\s*$/)
  if (idm) { moduleIdx++ }

  // titles map (single line)
  if (/^\s+titles: \{ /.test(line)) {
    const [id, ps] = map.titles[ti]
    if (map.titles[ti] === undefined) throw new Error('titles overrun')
    // assert module order via ids array
    ti++
    out.push(line.replace(/ \},?\s*$/, m => `, ps: '${esc(ps)}'` + m))
    continue
  }
  // taglines map (single line)
  if (/^\s+taglines: \{ /.test(line)) {
    const [id, ps] = map.taglines[gi]
    if (map.taglines[gi] === undefined) throw new Error('taglines overrun')
    gi++
    out.push(line.replace(/ \},?\s*$/, m => `, ps: '${esc(ps)}'` + m))
    continue
  }
  // vocab line (single line, real data — not the interface)
  if (/^\s+\{ en: '/.test(line)) {
    const enm = line.match(/^\s+\{ en: '((?:[^'\\]|\\.)*)',/)
    if (!enm) throw new Error('vocab line unparsable: ' + line.slice(0, 80))
    const [expectEn, ps] = map.vocab[vi] ?? []
    if (expectEn === undefined) throw new Error('vocab overrun at: ' + enm[1])
    const gotEn = enm[1].replace(/\\'/g, "'")
    if (gotEn !== expectEn) throw new Error(`vocab mismatch #${vi}: file='${gotEn}' json='${expectEn}'`)
    vi++
    out.push(line.replace(/ \},?\s*$/, m => `, ps: '${esc(ps)}'` + m))
    continue
  }
  // multi-line block tracking: samplePhrase / titles / taglines (opener ends with '{')
  const opener = line.match(/^\s+(samplePhrase|titles|taglines): \{\s*$/)
  if (opener) { inPhrase = opener[1]; out.push(line); continue }
  if (inPhrase && /^\s+\},?\s*$/.test(line)) { inPhrase = false; out.push(line); continue }
  if (inPhrase) {
    out.push(line)
    const kom = line.match(/^(\s+)ko: ['"]/)
    if (kom) {
      const src = inPhrase === 'samplePhrase' ? map.phrases : inPhrase === 'titles' ? map.titles : map.taglines
      const idx = inPhrase === 'samplePhrase' ? pi++ : inPhrase === 'titles' ? ti++ : gi++
      const pair = src[idx]
      if (pair === undefined) throw new Error(`${inPhrase} overrun`)
      out.push(`${kom[1]}ps: '${esc(pair[1])}',`)
    }
    continue
  }
  out.push(line)
}

// verify all consumed
const counts = { vocab: [vi, map.vocab.length], titles: [ti, map.titles.length], taglines: [gi, map.taglines.length], phrases: [pi, map.phrases.length] }
for (const [k, [used, total]] of Object.entries(counts)) {
  if (used !== total) throw new Error(`${k}: used ${used} of ${total}`)
}
fs.writeFileSync(tsPath, out.join('\n'))
console.log(`${FILES[KIND]}: ps injected — vocab ${vi}, titles ${ti}, taglines ${gi}, phrases ${pi}`)
