import { lazy, Suspense } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { APP_URL } from '../constants'

const EarthGlobe = lazy(() => import('../components/EarthGlobe').then(m => ({ default: m.EarthGlobe })))

const GOLD = '#C9A84C'

interface StarterData {
  emoji: string
  title: string
  tagline: string
  persona: string
  roles: string[]
  color: string
  borderColor: string
  tint: string
  modules: string[]
  languages: string[]
  bullets: string[]
  steps: { label: string; detail: string }[]
}

const STARTERS: Record<string, StarterData> = {
  medical: {
    emoji: '🏥',
    title: 'Medical Language',
    tagline: 'Speak the language your patients need — when every word matters.',
    persona: 'For nurses, ER docs, surgical techs, and clinic staff whose patients speak Spanish, Swahili, or French.',
    roles: ['ER Nurses', 'Surgeons', 'Clinic Staff', 'Paramedics', 'Surgical Techs'],
    color: '#34d399',
    borderColor: 'rgba(52,211,153,0.25)',
    tint: 'rgba(52,211,153,0.05)',
    modules: ['Emergency Medicine', 'Nursing & Patient Care', 'Orthopedics', 'Pediatrics', 'OB / GYN', 'ICU / Critical Care', 'Surgery & Pre-Op', 'Radiology', 'Pharmacy', 'Behavioral Health', 'Dental', 'Lab & Pathology', 'Home Health'],
    languages: ['Spanish', 'Swahili', 'French', 'Portuguese'],
    bullets: ['13 specialties — ER, OR, OB, ICU, and more', 'Bedside manner: pain scales, consent, discharge', 'SBAR handoff and charting abbreviations', 'AI partner trained on real clinical dialogue'],
    steps: [
      { label: 'Choose your specialty', detail: 'Start in your unit — ER, OR, OB, ICU, or outpatient. Each module maps to real clinical workflows.' },
      { label: 'Learn in clinical context', detail: 'Every phrase is presented in the situation it belongs to: triage, consent, discharge, handoff.' },
      { label: 'Practice with the AI', detail: 'The AI speaking partner plays the patient. You give history, get feedback, repeat until fluent.' },
      { label: 'Use it at the bedside', detail: 'Compact phrase cards for your pocket. Quick-reference by situation. Pull it up mid-shift.' },
    ],
  },
  construction: {
    emoji: '🔧',
    title: 'Construction Language',
    tagline: 'Run the tightest bilingual jobsite in the county.',
    persona: 'For crew leads, foremen, and site supervisors working with Spanish-speaking crews.',
    roles: ['Foremen', 'Crew Leads', 'Site Supervisors', 'Safety Officers', 'Project Managers'],
    color: '#fb923c',
    borderColor: 'rgba(251,146,60,0.25)',
    tint: 'rgba(251,146,60,0.05)',
    modules: ['Framing & Carpentry', 'Electrical', 'Plumbing', 'Concrete & Masonry', 'HVAC', 'Roofing', 'Drywall & Finishing', 'Landscaping', 'Safety & OSHA Compliance'],
    languages: ['Spanish', 'Swahili', 'Portuguese'],
    bullets: ['9 trades — framing, electrical, plumbing, and more', 'Safety briefings, PPE instructions, hazard calls', 'Blueprint reading and measurements — all languages', 'OSHA-compliant vocabulary built in'],
    steps: [
      { label: 'Pick your trade', detail: 'Framing, electrical, plumbing — start where your crew works. Each module mirrors your actual workflow.' },
      { label: 'Learn the safety calls first', detail: 'OSHA vocabulary, hazard alerts, and PPE instructions are front-loaded. Safety before productivity.' },
      { label: 'Run drills with the AI', detail: 'Give directions, read blueprints, call corrections — the AI responds like a crew member.' },
      { label: 'Brief your crew with confidence', detail: 'Morning huddle phrases, shift instructions, and end-of-day walkthroughs — all bilingual.' },
    ],
  },
  missionary: {
    emoji: '🙏',
    title: 'Missionary Language',
    tagline: 'The words the MTC never taught you.',
    persona: 'For LDS missionaries and faith-based volunteers — free, forever.',
    roles: ['LDS Missionaries', 'Faith Volunteers', 'Church Staff', 'Youth Leaders'],
    color: '#60a5fa',
    borderColor: 'rgba(96,165,250,0.25)',
    tint: 'rgba(96,165,250,0.05)',
    modules: ['LDS Missionary Spanish — all 6 discussions', 'LDS Missionary Swahili', 'LDS Missionary French', 'Faith Volunteer Foundations'],
    languages: ['Spanish', 'Swahili', 'French', 'Portuguese'],
    bullets: ['All six missionary discussions — word for word', 'Tracting openers, door approaches, follow-ups', 'Testimony vocabulary at every fluency level', 'Missionary Spanish is always free — no account required'],
    steps: [
      { label: 'Start with discussion one', detail: 'The Restoration — every phrase, every question, every testimony expression. In order.' },
      { label: 'Practice door approaches', detail: 'Tracting vocabulary, opening questions, and soft transitions into the discussions.' },
      { label: 'Build your testimony', detail: 'Personal testimony vocabulary from beginner to fluent. For every level of the field.' },
      { label: 'Never hit a wall mid-door', detail: 'Inline phrase lookup while you study. Builds recall before you need it.' },
    ],
  },
  sports: {
    emoji: '⚽',
    title: 'Sports Language',
    tagline: 'Coach without a language barrier.',
    persona: 'For coaches, athletic trainers, and team staff managing multilingual rosters.',
    roles: ['Head Coaches', 'Assistants', 'Athletic Trainers', 'Team Managers', 'Strength Staff'],
    color: '#818cf8',
    borderColor: 'rgba(129,140,248,0.25)',
    tint: 'rgba(129,140,248,0.05)',
    modules: ['Soccer / Football', 'Baseball', 'Hockey', 'Basketball', 'Wrestling', 'Track & Field', 'Swimming', 'American Football', 'Volleyball'],
    languages: ['Spanish', 'French', 'Portuguese', 'German'],
    bullets: ['9 sports — soccer, hockey, baseball, and more', 'On-field communication: positions, plays, corrections', 'Halftime talks, drill instructions, game-day calls', 'Athletic training and injury vocabulary'],
    steps: [
      { label: 'Pick your sport', detail: 'Sport-specific vocabulary from day one — positions, plays, set pieces, and drills in context.' },
      { label: 'Learn game-day language', detail: 'Pre-game, halftime, post-game communication. The exact phrases coaches use under pressure.' },
      { label: 'Practice corrections', detail: 'Give real-time corrections and drill adjustments. The AI plays the athlete, you coach.' },
      { label: 'Handle injuries and off-field', detail: 'Athletic training vocab, equipment checks, travel logistics — beyond the field.' },
    ],
  },
  agriculture: {
    emoji: '🌾',
    title: 'Agriculture Language',
    tagline: 'Lead your crew from field to finish.',
    persona: 'For dairy farmers, ranch managers, and meatpacking supervisors.',
    roles: ['Dairy Managers', 'Ranch Foremen', 'Meatpacking Supervisors', 'Field Crew Leads'],
    color: '#facc15',
    borderColor: 'rgba(250,204,21,0.25)',
    tint: 'rgba(250,204,21,0.05)',
    modules: ['Dairy & Cattle', 'Ranch & Cowboy', 'Meatpacking & Processing', 'Crop & Field Operations', 'Irrigation & Equipment'],
    languages: ['Spanish', 'Swahili', 'Portuguese'],
    bullets: ['5 modules — dairy, ranch, meatpacking, crops, and irrigation', 'Equipment operation and maintenance vocabulary', 'Safety and hazard communication in all languages', 'Daily scheduling, shift coordination, and task instructions'],
    steps: [
      { label: 'Choose your operation', detail: 'Dairy, ranch, or meatpacking — each module is built around the specific environment and workflow.' },
      { label: 'Equipment and safety first', detail: 'Operating machinery, hazard alerts, and safety protocols in both languages before anything else.' },
      { label: 'Daily coordination', detail: 'Shift assignments, task instructions, and scheduling communication for every part of the day.' },
      { label: 'Full-crew confidence', detail: 'From morning lineup to end-of-shift wrap — every interaction covered.' },
    ],
  },
  education: {
    emoji: '📚',
    title: 'Education Language',
    tagline: 'Meet your students where they are.',
    persona: 'For K–12 teachers and school staff serving Spanish-speaking families.',
    roles: ['K–12 Teachers', 'School Counselors', 'Administrators', 'Para-Educators', 'Support Staff'],
    color: '#c084fc',
    borderColor: 'rgba(192,132,252,0.25)',
    tint: 'rgba(192,132,252,0.05)',
    modules: ['K–12 Teacher', 'Legal Immigration'],
    languages: ['Spanish', 'French'],
    bullets: ['Classroom instructions and behavior management', 'Parent communication — IEP, report cards, phone calls', 'School enrollment and legal immigration vocabulary', 'Emergency and safety communication'],
    steps: [
      { label: 'Start with the classroom', detail: 'Directions, behavior management, and daily routines — the phrases you use every period.' },
      { label: 'Parent communication', detail: 'IEP meetings, report cards, phone calls, and enrollment — every interaction that crosses the language gap.' },
      { label: 'Legal and enrollment', detail: 'Immigration documentation vocabulary, enrollment forms, and rights-based language for families.' },
      { label: 'Emergency situations', detail: 'Evacuation, lockdown, medical, and crisis communication — clear and calm under pressure.' },
    ],
  },
  hospitality: {
    emoji: '🍽️',
    title: 'Hospitality Language',
    tagline: 'Every guest deserves to be understood.',
    persona: 'For restaurant managers, hotel staff, and hospitality workers.',
    roles: ['Restaurant Managers', 'Front Desk', 'Housekeeping Leads', 'Kitchen Supervisors', 'Concierge'],
    color: '#fb7185',
    borderColor: 'rgba(251,113,133,0.25)',
    tint: 'rgba(251,113,133,0.05)',
    modules: ['Restaurant & Hospitality'],
    languages: ['Spanish', 'French', 'Portuguese'],
    bullets: ['Front-of-house: menus, allergens, special requests', 'Back-of-house: kitchen communication and safety', 'Hotel check-in, housekeeping, guest services', 'Complaint handling and service recovery'],
    steps: [
      { label: 'Front-of-house first', detail: 'Menus, allergens, specials, and special requests — the vocabulary guests actually need from you.' },
      { label: 'Back-of-house coordination', detail: 'Kitchen calls, prep instructions, safety, and timing — communication that keeps service running.' },
      { label: 'Hotel and guest services', detail: 'Check-in, housekeeping requests, concierge, and amenities — for hotel and resort staff.' },
      { label: 'Complaints and recovery', detail: 'De-escalate, apologize, and resolve. The hardest conversations, practiced before they happen.' },
    ],
  },
  fishing: {
    emoji: '🎣',
    title: 'Baja Fishing Spanish',
    tagline: 'Talk to your panguero, name the fish, land the charter.',
    persona: 'For sport fishermen, charter captains, and tournament anglers fishing the waters of Baja California.',
    roles: ['Sport Anglers', 'Charter Captains', 'Tournament Fishermen', 'Fishing Guides', 'Panga Crews'],
    color: '#0ea5e9',
    borderColor: 'rgba(14,165,233,0.25)',
    tint: 'rgba(14,165,233,0.05)',
    modules: ['Deep Sea & Big Game', 'Offshore & Panga Fishing', 'Shore & Surf Fishing'],
    languages: ['Spanish'],
    bullets: [
      '100+ fish species in Spanish — marlin, dorado, tuna, roosterfish',
      'Charter & panga communication — directions, timing, gear',
      'Weather, tides, and navigation phrases',
      'Tackle, bait, and rigging vocabulary',
      'Fish handling, regulations, and catch-and-release',
      'Tournaments, weigh-ins, and sportfishing culture',
    ],
    steps: [
      { label: 'Start with the species', detail: 'Every fish you\'ll encounter in Baja — marlin, dorado, yellowfin, wahoo, roosterfish — with pronunciation and local nicknames.' },
      { label: 'Learn charter communication', detail: 'Talk to your panguero: where to go, how deep, change direction, come back in. The 30 phrases that run every trip.' },
      { label: 'Navigate conditions', detail: 'Weather windows, swells, tide schedules, and hot-spot directions. Coordinate with local captains before you even leave the dock.' },
      { label: 'Handle the catch', detail: 'Regulations, measurements, live release, weigh-in procedures — and the tournament vocab for competitive anglers.' },
    ],
  },
  kids: {
    emoji: '🧒',
    title: 'Junior Linguist',
    tagline: 'Language learning built for kids — ages 4 to 12.',
    persona: 'For families raising bilingual children.',
    roles: ['Ages 4–7', 'Ages 8–12', 'Family Plan', 'Homeschool Families'],
    color: '#f472b6',
    borderColor: 'rgba(244,114,182,0.25)',
    tint: 'rgba(244,114,182,0.05)',
    modules: ['Junior Linguist — Ages 4–7', 'Junior Linguist — Ages 8–12', 'Family Language Play'],
    languages: ['Spanish', 'French', 'Japanese', 'More'],
    bullets: ['Vocabulary games, songs, and animated stories', 'CEFR-structured progression for kids', 'Parent dashboard to track progress', 'Included in Family Plan — all 6 profiles'],
    steps: [
      { label: 'Pick the right age path', detail: 'Two distinct tracks: 4–7 builds sound recognition and simple phrases. 8–12 moves into grammar and conversation.' },
      { label: 'Games and songs first', detail: 'Every vocabulary set arrives as a game or song before a drill. Kids remember what feels like play.' },
      { label: 'Parent dashboard', detail: 'Track streaks, vocabulary mastered, and time spent. Know exactly where your child is in the curriculum.' },
      { label: 'Family play sessions', detail: 'Cooperative games the whole family plays together — reinforces vocabulary outside of screen time.' },
    ],
  },
}

function SlideButton({ href, label, size = 'lg' }: { href: string; label: string; size?: 'sm' | 'lg' }) {
  const base = size === 'lg'
    ? 'group relative overflow-hidden rounded-full px-8 py-4 font-mono text-[12px] uppercase tracking-[0.22em] text-black font-semibold hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-300'
    : 'group relative overflow-hidden rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-black font-semibold hover:shadow-[0_0_30px_rgba(201,168,76,0.35)] transition-all duration-300'
  return (
    <a href={href} className={base} style={{ backgroundColor: GOLD }}>
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </a>
  )
}

export default function ModuleStarter() {
  const { slug = 'medical' } = useParams<{ slug: string }>()
  const d = STARTERS[slug] ?? STARTERS.medical

  const freeLabel = slug === 'missionary' ? 'Free — Always' : '7-Day Trial'
  const freeCta   = slug === 'missionary' ? 'Start Free →'  : 'Start Trial →'
  const freeItems = slug === 'missionary'
    ? ['Full Missionary Spanish', 'All 6 discussions', 'No account required']
    : ['All modules unlocked', 'AI speaking feedback', 'Cancel anytime']

  return (
    <>
      {/* Fixed globe background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: slug === 'kids'
              ? 'radial-gradient(ellipse 80% 80% at 50% 40%, #1a0d1e 0%, #02040f 70%)'
              : 'radial-gradient(ellipse 80% 80% at 50% 40%, #0d1b3e 0%, #02040f 70%)'
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.12) 1px,transparent 1px)', backgroundSize: '80px 80px' }}
        />
        <div className={`absolute inset-0 flex items-center justify-center ${slug === 'kids' ? 'opacity-15' : 'opacity-40'}`}>
          <Suspense fallback={null}>
            <EarthGlobe size={800} />
          </Suspense>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: slug === 'kids'
              ? 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(244,114,182,0.20) 0%, transparent 70%)'
              : `radial-gradient(ellipse 70% 50% at 50% 30%, ${d.tint} 0%, transparent 70%)`
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen text-white">

        {/* Back link */}
        <div className="pt-24 px-6 sm:px-10 max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors"
          >
            ← All Modules
          </Link>
        </div>

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="px-6 sm:px-10 pt-10 pb-14 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-7xl mb-5">{d.emoji}</div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: d.color }}>
              {d.languages.join(' · ')}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold leading-tight mb-5">{d.title}</h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-xl mx-auto mb-3">{d.tagline}</p>
          </motion.div>

          {/* Role chips */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mt-6 mb-8"
          >
            {d.roles.map(r => (
              <span
                key={r}
                className="rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45"
                style={{ borderColor: `${d.color}30`, background: `${d.color}08` }}
              >
                {r}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <SlideButton href={APP_URL} label={slug === 'missionary' ? 'Start Learning Free →' : 'Start 7-Day Free Trial →'} />
            <a
              href="#how-it-works"
              className="rounded-full border border-white/[0.15] px-8 py-4 font-mono text-[12px] uppercase tracking-[0.22em] text-white/55 hover:border-white/30 hover:text-white/80 transition-all duration-300"
            >
              See How It Works ↓
            </a>
          </motion.div>
          <p className="mt-4 font-mono text-[9px] uppercase tracking-widest text-white/25">
            {slug === 'missionary'
              ? 'Missionary Spanish is always free — no trial, no card, no expiration'
              : 'No credit card required · Cancel anytime'}
          </p>
        </section>

        {/* ─── HOW IT WORKS ────────────────────────────────── */}
        <section id="how-it-works" className="px-6 sm:px-10 py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: d.color }}>The Path</p>
            <h2 className="font-serif text-3xl font-bold">Four steps to fluency in your field.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {d.steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-6 flex gap-5 backdrop-blur-sm"
              >
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold"
                  style={{ background: `${d.color}18`, color: d.color, border: `1px solid ${d.color}30` }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: d.color }}>{step.label}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── MODULES / CURRICULUM ───────────────────────── */}
        <section className="px-6 sm:px-10 py-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-2xl border p-8 backdrop-blur-sm"
            style={{ borderColor: d.borderColor, background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: d.color }}>
                {d.modules.length} {d.modules.length === 1 ? 'Module' : 'Modules'} Included
              </h2>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">All included in Pro</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {d.modules.map((m, i) => (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5"
                >
                  <span className="shrink-0 font-mono text-[9px] w-5 text-center" style={{ color: `${d.color}70` }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="w-px h-4 shrink-0" style={{ background: `${d.color}25` }} />
                  <span className="text-sm text-white/70">{m}</span>
                </motion.div>
              ))}
            </div>

            {/* Bullets */}
            <div className="pt-6 border-t" style={{ borderColor: `${d.color}15` }}>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] mb-4" style={{ color: `${d.color}80` }}>What's covered</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {d.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/45">
                    <span className="shrink-0 mt-0.5" style={{ color: d.color }}>✦</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* ─── PRICING ──────────────────────────────────────── */}
        <section id="pricing" className="px-6 sm:px-10 py-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>Simple Pricing</p>
            <h2 className="font-serif text-3xl font-bold">Less than a missed shift.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Free / Trial card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">{freeLabel}</div>
              <div className="font-serif text-4xl font-bold text-white mb-1">$0</div>
              <p className="text-sm text-white/45 mb-5">
                {slug === 'missionary' ? 'Missionary Spanish — always free.' : 'Full access. No credit card.'}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {freeItems.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="shrink-0 text-emerald-400 mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className="block w-full text-center rounded-full border border-white/[0.15] py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 hover:border-white/30 hover:text-white/85 transition-all duration-300"
              >
                {freeCta}
              </a>
            </motion.div>

            {/* Pro card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
              className="relative rounded-2xl border p-7 flex flex-col"
              style={{ borderColor: `${GOLD}4d`, background: 'linear-gradient(135deg, #0f0d04, #02040f)', boxShadow: `0 0 60px rgba(201,168,76,0.08)` }}
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-mono text-[9px] uppercase tracking-widest text-black"
                style={{ backgroundColor: GOLD }}
              >
                Best Value
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: GOLD }}>Pro Annual</div>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-serif text-4xl font-bold text-white">$149</span>
                <span className="text-white/50 mb-1">/year</span>
              </div>
              <p className="text-sm text-white/45 mb-5">$12.42/mo · 7-day free trial</p>
              <ul className="space-y-2 mb-6 flex-1">
                {['All 26 modules, 7 languages', 'AI speaking partner', 'Grammar studio + conjugation', 'Daily challenges + leaderboard'].map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                    <span className="shrink-0 mt-0.5" style={{ color: GOLD }}>✦</span>{f}
                  </li>
                ))}
              </ul>
              <SlideButton href={`${APP_URL}/pricing`} label="Start 7-Day Free Trial →" size="sm" />
              <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-widest text-white/25">
                Cancel anytime · No charge until day 8
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── BOTTOM CTA ───────────────────────────────────── */}
        <section className="px-6 sm:px-10 py-20 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: d.color }}>
              Start Today
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              The language gap closes<br />when you start.
            </h2>
            <p className="text-white/45 text-base mb-8 max-w-md mx-auto">
              7-day trial. Every module unlocked. No credit card until you decide it's worth it.
            </p>
            <SlideButton href={APP_URL} label="Start Free Trial →" />
          </motion.div>
        </section>

        {/* Bottom nav */}
        <div className="pb-16 text-center px-6">
          <Link
            to="/"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors"
          >
            ← Back to All Modules
          </Link>
        </div>

      </div>
    </>
  )
}
