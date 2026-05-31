import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { displayFont, sansFont } from '../constants'

const GOLD = '#C9A84C'
const SKY = '#60A5FA'
const SKY_DARK = '#0EA5E9'

const PROGRESS_KEY = 'lt-lesson-progress'
const PROFILE_KEY = 'lt-missionary-profile'

interface Profile {
  name: string
  email: string
  missionField: string
  savedAt: number
}

// Discussions for the progress dashboard
const DISCUSSIONS = [
  { id: 'discussion-1', label: 'Discussion 1', title: 'The Restoration', lang: 'es' },
  { id: 'discussion-2', label: 'Discussion 2', title: 'Plan of Salvation', lang: 'es' },
  { id: 'discussion-3', label: 'Discussion 3', title: 'Gospel of Jesus Christ', lang: 'es' },
  { id: 'discussion-4', label: 'Discussion 4', title: 'The Commandments', lang: 'es' },
  { id: 'discussion-5', label: 'Discussion 5', title: 'Laws & Ordinances', lang: 'es' },
  { id: 'discussion-6', label: 'Discussion 6', title: 'Door Approaches', lang: 'es' },
  { id: 'missionary-swahili-1', label: 'Swahili 1', title: 'Intro & Greetings', lang: 'sw' },
  { id: 'missionary-swahili-2', label: 'Swahili 2', title: 'Core Gospel', lang: 'sw' },
]

function loadProfile(): Profile | null {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY) ?? 'null') } catch { return null }
}

function saveProfile(p: Profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(p))
}

function loadProgress(): Record<string, boolean> {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? '{}') } catch { return {} }
}

function encodeState(profile: Profile, progress: Record<string, boolean>): string {
  return btoa(JSON.stringify({ profile, progress }))
}

function decodeState(encoded: string): { profile: Profile; progress: Record<string, boolean> } | null {
  try { return JSON.parse(atob(encoded)) } catch { return null }
}

function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) return navigator.clipboard.writeText(text)
  const el = document.createElement('textarea')
  el.value = text
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  return Promise.resolve()
}

// ── Profile setup form ────────────────────────────────────────────────────────

function ProfileForm({ onSave }: { onSave: (p: Profile) => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [missionField, setMissionField] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    onSave({ name: name.trim(), email: email.trim(), missionField: missionField.trim(), savedAt: Date.now() })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      className="max-w-md mx-auto"
    >
      <div
        className="rounded-3xl border p-8"
        style={{ borderColor: `${SKY}33`, background: 'rgba(14,30,60,0.9)' }}
      >
        <div className="text-center mb-8">
          <span className="text-4xl block mb-3">🕊️</span>
          <h1 className="font-serif text-2xl font-bold text-white mb-2" style={displayFont}>
            Create Your Missionary Account
          </h1>
          <p className="text-sm text-white/45" style={sansFont}>
            Free forever. Your progress is saved on this device and can be restored on any device with your progress link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Elder Smith / Sister Johnson"
              required
              className="w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
              style={{ borderColor: `${SKY}30`, fontFamily: sansFont.fontFamily }}
              onFocus={e => { e.currentTarget.style.borderColor = `${SKY}60` }}
              onBlur={e => { e.currentTarget.style.borderColor = `${SKY}30` }}
            />
          </div>

          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">
              Email (optional — for your progress link)
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="elder.smith@missionary.org"
              className="w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
              style={{ borderColor: `${SKY}30`, fontFamily: sansFont.fontFamily }}
              onFocus={e => { e.currentTarget.style.borderColor = `${SKY}60` }}
              onBlur={e => { e.currentTarget.style.borderColor = `${SKY}30` }}
            />
          </div>

          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">
              Mission Field (optional)
            </label>
            <input
              type="text"
              value={missionField}
              onChange={e => setMissionField(e.target.value)}
              placeholder="Mexico City, East Africa, Madrid..."
              className="w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
              style={{ borderColor: `${SKY}30`, fontFamily: sansFont.fontFamily }}
              onFocus={e => { e.currentTarget.style.borderColor = `${SKY}60` }}
              onBlur={e => { e.currentTarget.style.borderColor = `${SKY}30` }}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-90 mt-2"
            style={{ background: `linear-gradient(135deg, #7DD3FC 0%, ${SKY} 100%)` }}
          >
            Create Free Account →
          </button>
        </form>

        <p className="text-center text-xs text-white/25 mt-5" style={sansFont}>
          No password. No credit card. Progress lives on your device.
        </p>
      </div>
    </motion.div>
  )
}

// ── Progress dashboard ────────────────────────────────────────────────────────

function ProgressDashboard({ profile, onSignOut }: { profile: Profile; onSignOut: () => void }) {
  const [progress, setProgress] = useState<Record<string, boolean>>(loadProgress)
  const [copied, setCopied] = useState(false)
  const [restoreInput, setRestoreInput] = useState('')
  const [restoreError, setRestoreError] = useState('')
  const [showRestore, setShowRestore] = useState(false)

  // Refresh progress when tab gains focus
  useEffect(() => {
    const refresh = () => setProgress(loadProgress())
    window.addEventListener('focus', refresh)
    return () => window.removeEventListener('focus', refresh)
  }, [])

  const progressLink = `${window.location.origin}/missionary-portal#restore=${encodeState(profile, progress)}`

  async function handleCopyLink() {
    await copyToClipboard(progressLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  function handleRestore() {
    setRestoreError('')
    const hash = restoreInput.includes('#restore=')
      ? restoreInput.split('#restore=')[1]
      : restoreInput.trim()
    const decoded = decodeState(hash)
    if (!decoded) { setRestoreError('Invalid progress link — double-check and try again.'); return }
    saveProfile({ ...decoded.profile, savedAt: Date.now() })
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(decoded.progress))
    setProgress(decoded.progress)
    setRestoreInput('')
    setShowRestore(false)
  }

  const completedCount = DISCUSSIONS.filter(d => {
    const keys = Object.keys(progress).filter(k => k.includes(d.id) || k.startsWith(d.id))
    return keys.some(k => progress[k])
  }).length

  const pct = Math.round((completedCount / DISCUSSIONS.length) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Profile card */}
      <div
        className="rounded-3xl border p-6"
        style={{ borderColor: `${SKY}33`, background: 'rgba(14,30,60,0.9)' }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-400/60 mb-1">Missionary Account</p>
            <h2 className="font-serif text-xl font-bold text-white" style={displayFont}>{profile.name}</h2>
            {profile.missionField && (
              <p className="text-sm text-white/40 mt-0.5" style={sansFont}>{profile.missionField} Mission</p>
            )}
            {profile.email && (
              <p className="text-xs text-white/25 mt-0.5" style={sansFont}>{profile.email}</p>
            )}
          </div>
          <button
            onClick={onSignOut}
            className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-white/50 transition-colors"
          >
            Sign Out
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">Overall Progress</span>
            <span className="font-mono text-[11px]" style={{ color: SKY }}>{completedCount} / {DISCUSSIONS.length} sections</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              initial={{ width: 0 }} animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${SKY_DARK}, ${SKY})` }}
            />
          </div>
        </div>
      </div>

      {/* Discussions grid */}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-4">Your Discussions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DISCUSSIONS.map(d => {
            const keys = Object.keys(progress).filter(k => k.includes(d.id) || k.startsWith(d.id))
            const started = keys.some(k => progress[k])
            const href = d.lang === 'sw' ? '/missionary-swahili' : '/missionary-spanish'

            return (
              <Link
                key={d.id}
                to={href}
                className="flex items-center gap-4 rounded-2xl border p-4 transition-all"
                style={{
                  borderColor: started ? `${SKY}40` : 'rgba(255,255,255,0.06)',
                  background: started ? 'rgba(96,165,250,0.06)' : 'rgba(255,255,255,0.02)',
                }}
              >
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-mono font-bold"
                  style={{
                    background: started ? `${SKY}22` : 'rgba(255,255,255,0.05)',
                    color: started ? SKY : 'rgba(255,255,255,0.25)',
                    border: `1px solid ${started ? `${SKY}40` : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  {started ? '✓' : d.id.split('-').pop()}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">{d.label}</p>
                  <p className="text-sm text-white/70 leading-snug" style={sansFont}>{d.title}</p>
                </div>
                <span className="ml-auto text-white/20 text-sm">→</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Save progress link */}
      <div
        className="rounded-2xl border p-6 space-y-4"
        style={{ borderColor: `${GOLD}25`, background: `${GOLD}07` }}
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-1" style={{ color: GOLD }}>Save Your Progress Link</p>
          <p className="text-xs text-white/35" style={sansFont}>
            Bookmark this link or save it to your email. Open it on any device to restore all your progress.
          </p>
        </div>

        <div className="flex gap-2">
          <input
            readOnly
            value={progressLink}
            className="flex-1 min-w-0 rounded-xl border bg-white/[0.03] px-3 py-2 text-xs text-white/40 outline-none truncate"
            style={{ borderColor: `${GOLD}20`, fontFamily: 'monospace' }}
            onClick={e => (e.target as HTMLInputElement).select()}
          />
          <button
            onClick={handleCopyLink}
            className="shrink-0 rounded-xl px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] transition-all"
            style={{
              background: copied ? 'rgba(52,211,153,0.15)' : `${GOLD}18`,
              border: `1px solid ${copied ? 'rgba(52,211,153,0.4)' : `${GOLD}40`}`,
              color: copied ? '#34d399' : GOLD,
            }}
          >
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>

        <button
          onClick={() => setShowRestore(s => !s)}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors"
        >
          {showRestore ? '↑ Hide restore' : '↓ Restore from another device'}
        </button>

        <AnimatePresence>
          {showRestore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={restoreInput}
                  onChange={e => { setRestoreInput(e.target.value); setRestoreError('') }}
                  placeholder="Paste your progress link here…"
                  className="flex-1 min-w-0 rounded-xl border bg-white/[0.04] px-3 py-2 text-xs text-white placeholder-white/20 outline-none"
                  style={{ borderColor: `${SKY}30`, fontFamily: sansFont.fontFamily }}
                />
                <button
                  onClick={handleRestore}
                  className="shrink-0 rounded-xl px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-black"
                  style={{ background: `linear-gradient(135deg, #7DD3FC, ${SKY})` }}
                >
                  Restore
                </button>
              </div>
              {restoreError && (
                <p className="text-xs text-red-400 mt-2" style={sansFont}>{restoreError}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick links */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/missionary-spanish"
          className="flex-1 text-center rounded-full border border-sky-500/25 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300 hover:border-sky-400/50 transition-colors"
        >
          Missionary Spanish →
        </Link>
        <Link
          to="/missionary-swahili"
          className="flex-1 text-center rounded-full border border-sky-500/25 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300 hover:border-sky-400/50 transition-colors"
        >
          Missionary Swahili →
        </Link>
      </div>
    </motion.div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function MissionaryPortal() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [checked, setChecked] = useState(false)

  // Check for restore hash in URL on mount
  useEffect(() => {
    const hash = window.location.hash
    if (hash.startsWith('#restore=')) {
      const encoded = hash.slice('#restore='.length)
      const decoded = decodeState(encoded)
      if (decoded) {
        saveProfile({ ...decoded.profile, savedAt: Date.now() })
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(decoded.progress))
        setProfile(decoded.profile)
        // Clean up hash
        window.history.replaceState(null, '', window.location.pathname)
        setChecked(true)
        return
      }
    }
    setProfile(loadProfile())
    setChecked(true)
  }, [])

  function handleSave(p: Profile) {
    saveProfile(p)
    setProfile(p)
  }

  function handleSignOut() {
    localStorage.removeItem(PROFILE_KEY)
    setProfile(null)
  }

  if (!checked) return null

  return (
    <div className="min-h-screen px-6 py-20 sm:py-28">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,_rgba(14,30,60,0.95)_0%,_rgba(2,4,15,0.98)_80%)] pointer-events-none" />

      <FadeIn>
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors mb-8">
            ← Language Threshold
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: SKY }}>Missionary Portal</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3" style={displayFont}>
            {profile ? `Welcome back, ${profile.name.split(' ')[0]}` : 'Save Your Progress'}
          </h1>
          <p className="text-sm text-white/40" style={sansFont}>
            {profile
              ? 'Pick up where you left off.'
              : 'Create your free account — track progress across all six discussions.'}
          </p>
        </div>

        {profile ? (
          <ProgressDashboard profile={profile} onSignOut={handleSignOut} />
        ) : (
          <ProfileForm onSave={handleSave} />
        )}
      </FadeIn>
    </div>
  )
}
