import { displayFont, sansFont } from '../constants'
import PlanPricing from './PlanPricing'

export default function ProfessionalPlans({ accentColor }: { accentColor: string }) {
  return (
    <>
      <section className="pt-16" aria-labelledby="professional-plans-title">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ ...sansFont, color: accentColor }}>
            One library, clear plans
          </p>
          <h2 id="professional-plans-title" className="text-3xl md:text-4xl font-bold mb-3" style={{ ...displayFont, color: '#F7F3EC' }}>
            Start with your specialty. Explore every module.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed" style={{ ...sansFont, color: '#D0D9E4' }}>
            Individual, Family, and Team plans include every published Language Threshold app module.
            Your chosen specialty sets a starting focus; it does not limit the rest of the library.
            Printable PDF guides shown on this page are separate optional products.
          </p>
        </div>
      </section>
      <PlanPricing includeTeam />
    </>
  )
}
