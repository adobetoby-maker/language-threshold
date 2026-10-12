import { APP_URL, displayFont, sansFont } from '../constants'

type Context = 'general' | 'construction' | 'medical'

const copy = {
  general: {
    eyebrow: 'English for Spanish-speaking teams',
    title: 'Help your team learn the English your work needs.',
    detail: 'Choose English as the learning language and Spanish as the native language. Employees can focus on the profession they work in, from roofing and construction to patient care and hospitality.',
  },
  construction: {
    eyebrow: 'English for Spanish-speaking crews',
    title: 'Help your crew learn the English your business needs.',
    detail: 'Give Spanish-speaking employees jobsite English for materials, safety conversations, daily plans, and crew handoffs. Start with their trade, including Roofing Foreman and Construction Safety.',
  },
  medical: {
    eyebrow: 'English for Spanish-speaking healthcare teams',
    title: 'Help your staff learn the English their work needs.',
    detail: 'Build practical English for patient conversations, handoffs, scheduling, and clinical roles. Spanish is the learner’s starting language; the selected specialty shapes their practice.',
  },
} satisfies Record<Context, { eyebrow: string; title: string; detail: string }>

export default function EnglishForTeams({ context = 'general' }: { context?: Context }) {
  const content = copy[context]

  return (
    <section className="relative py-16 px-6" aria-labelledby={`english-for-teams-${context}`}>
      <div className="max-w-6xl mx-auto rounded-3xl border border-[#C9A84C]/30 bg-[#10191f]/95 p-7 sm:p-10 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
        <p className="text-xs uppercase tracking-[0.22em] mb-3" style={{ ...sansFont, color: '#C9A84C' }}>
          {content.eyebrow}
        </p>
        <h2 id={`english-for-teams-${context}`} className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ ...displayFont, color: '#F7F3EC' }}>
          {content.title}
        </h2>
        <p className="max-w-3xl mt-5 text-base leading-relaxed" style={{ ...sansFont, color: '#B8B2A9' }}>
          {content.detail}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={`${APP_URL}/team`} className="rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-85" style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}>
            Set up English training for your team →
          </a>
          <a href={`${APP_URL}/pricing`} className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/60 hover:text-white" style={sansFont}>
            Explore individual plans
          </a>
        </div>
        <p className="mt-4 text-xs" style={{ ...sansFont, color: '#928B82' }}>
          Team plans include module assignments, practice progress, and the full module library.
        </p>
      </div>
    </section>
  )
}
