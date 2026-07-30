import { Link } from 'react-router-dom'
import { HELLO_LITTLE_ONE } from '../data/booklets'
import { usePageMeta } from '../hooks/usePageMeta'

const GOLD = '#C9A84C'

export default function Readers() {
  const cover = HELLO_LITTLE_ONE.pages[0]
  usePageMeta({
    title: 'Bilingual Picture Book Readers',
    canonical: 'https://languagethreshold.com/readers',
    description:
      'Read a free English and Spanish picture-book preview with paired text and bounded word help.',
  })

  return (
    <div className="min-h-screen bg-[#070A12] px-5 pb-24 pt-32 text-white sm:px-8">
      <header className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>
          Bilingual picture books
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold sm:text-6xl">Read together, side by side.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          A small, caregiver-guided English and Spanish reading demo. No account, open chat, or
          Production access is required.
        </p>
      </header>

      <section aria-label="Picture book readers" className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        <Link
          to="/readers/hello-little-one"
          className="group overflow-hidden rounded-3xl border border-amber-300/25 bg-white/[0.04] transition hover:-translate-y-1 hover:border-amber-300/50"
        >
          <img
            src={cover.image.url}
            alt={cover.image.altText.source}
            data-asset-id={cover.image.assetId}
            data-sha256={cover.image.sha256}
            className="aspect-square w-full object-cover"
          />
          <div className="p-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-300">
              Available now · English / Español
            </span>
            <h2 className="mt-2 font-serif text-2xl font-semibold">{HELLO_LITTLE_ONE.title.source}</h2>
            <p lang="es" className="mt-1 text-white/55">{HELLO_LITTLE_ONE.title.target}</p>
            <span className="mt-5 inline-block font-mono text-xs uppercase tracking-[0.18em]" style={{ color: GOLD }}>
              Open reader →
            </span>
          </div>
        </Link>

        {['Good Morning', 'Animal Friends'].map((title) => (
          <article
            key={title}
            aria-disabled="true"
            className="flex min-h-80 flex-col justify-end rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Coming later · not yet migrated
            </span>
            <h2 className="mt-2 font-serif text-2xl text-white/55">{title}</h2>
          </article>
        ))}
      </section>
    </div>
  )
}
