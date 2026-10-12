import { APP_URL, displayFont, sansFont } from '../constants'

export default function ProfessionalPlans({ accentColor }: { accentColor: string }) {
  return (
    <section className="py-16" aria-labelledby="professional-plans-title">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ ...sansFont, color: accentColor }}>
          One library, clear plans
        </p>
        <h2 id="professional-plans-title" className="text-3xl md:text-4xl font-bold mb-3" style={{ ...displayFont, color: '#F7F3EC' }}>
          Start with your specialty. Explore every module.
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed mb-8" style={{ ...sansFont, color: '#A89F94' }}>
          Pro and Team include every published Language Threshold app module. Your chosen specialty
          sets a starting focus; it does not limit the rest of the library. Printable PDF guides
          shown on this page are separate optional products.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl p-6" style={{ backgroundColor: '#161616', border: '1px solid #ffffff20' }}>
            <h3 className="font-bold mb-2" style={{ ...displayFont, color: '#F7F3EC' }}>Pro</h3>
            <p className="text-xl font-bold" style={{ ...sansFont, color: accentColor }}>$19/month</p>
            <p className="text-sm mt-1" style={{ ...sansFont, color: '#A89F94' }}>or $149/year · one learner</p>
          </div>
          <div className="rounded-2xl p-6" style={{ backgroundColor: '#161616', border: '1px solid #ffffff20' }}>
            <h3 className="font-bold mb-2" style={{ ...displayFont, color: '#F7F3EC' }}>Family</h3>
            <p className="text-xl font-bold" style={{ ...sansFont, color: accentColor }}>$249/year</p>
            <p className="text-sm mt-1" style={{ ...sansFont, color: '#A89F94' }}>Up to six family profiles · includes Junior Linguist</p>
          </div>
          <div className="rounded-2xl p-6" style={{ backgroundColor: '#161616', border: `1px solid ${accentColor}55` }}>
            <h3 className="font-bold mb-2" style={{ ...displayFont, color: '#F7F3EC' }}>Team</h3>
            <p className="text-xl font-bold" style={{ ...sansFont, color: accentColor }}>$99/month</p>
            <p className="text-sm mt-1" style={{ ...sansFont, color: '#A89F94' }}>
              Five seats included. Seats 6–10 add $12/month each; seats 11 and up add $10/month
              each. Ten seats are $159/month. Fifteen seats are $209/month, $627 for three months,
              or $2,090/year. Admin assignments and progress reporting included. Employees can
              learn English from Spanish in their selected specialty.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 mt-6 text-sm" style={{ ...sansFont }}>
          <a href={`${APP_URL}/pricing`} className="underline" style={{ color: accentColor }}>See Pro and Family plans →</a>
          <a href={`${APP_URL}/team`} className="underline" style={{ color: accentColor }}>Set up a team →</a>
          <span style={{ color: '#A89F94' }}>Need a new specialty? A $20 request covers review and a content brief.</span>
        </div>
      </div>
    </section>
  )
}
