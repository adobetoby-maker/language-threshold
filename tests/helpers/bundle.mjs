import { build } from 'esbuild'
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const outRoot = path.join(repoRoot, 'node_modules', '.cache', 'booklet-demo-tests')

export async function loadModule(entry) {
  mkdirSync(outRoot, { recursive: true })
  const outfile = path.join(outRoot, `${path.basename(entry).replace(/\W/g, '_')}.mjs`)
  await build({
    entryPoints: [path.join(repoRoot, entry)],
    outfile,
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node22',
    logLevel: 'silent',
  })
  return import(`${outfile}?t=${Date.now()}`)
}
