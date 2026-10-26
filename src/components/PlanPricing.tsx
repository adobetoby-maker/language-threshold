import { APP_URL, MISSIONARY_APP_URL } from '../constants'
import './plan-pricing.css'

const PLANS = [
  {
    id: 'monthly', name: 'Individual monthly', price: '$19', period: '/month',
    audience: 'One learner. Billed monthly.',
    billing: '$19 charged each month. Renews monthly until canceled.',
    features: ['All published professional modules', 'Reading, listening and speaking practice', 'Your own learning progress'],
    cta: 'Choose $19/month',
  },
  {
    id: 'family', name: 'Family annual', price: '$249', period: '/year',
    audience: 'Up to 6 family profiles. One annual payment.',
    billing: '$249 charged once per year. Equivalent to $20.75/month, billed annually.',
    features: ['Pro access for up to 6 family members', 'Junior Linguist for kids ages 4–12', 'Separate family profiles and learning progress'],
    cta: 'Choose family · $249/year',
  },
  {
    id: 'annual', name: 'Individual annual', price: '$149', period: '/year',
    audience: 'One learner. One annual payment.',
    billing: '$149 charged once per year. About $12.42/month, billed annually.',
    features: ['Everything in Individual monthly', 'Save $79 versus 12 monthly payments', 'Your own learning progress'],
    cta: 'Choose $149/year',
  },
] as const

export default function PlanPricing({ includeTeam = false }: { includeTeam?: boolean }) {
  return (
    <section id="pricing" className="lt-plan-pricing" aria-labelledby="plan-pricing-title">
      <div className="lt-plan-wrap">
        <header className="lt-plan-heading">
          <p className="lt-plan-eyebrow">Individual & family plans</p>
          <h2 id="plan-pricing-title">Choose your plan.<br />Know what you’ll pay.</h2>
          <p>Individual access is <strong>$19 per month</strong>. Family access is <strong>$249 per year for up to 6 profiles</strong>.</p>
        </header>
        <div className="lt-plan-trial">
          <strong>Start with a 7-day free trial.</strong>
          <span>Then use the billing option you choose. Payment and renewal terms are shown in checkout.</span>
          <a href={APP_URL}>Try the app →</a>
        </div>
        <div className="lt-plan-grid">
          {PLANS.map(plan => (
            <article key={plan.id} className={`lt-plan-card lt-plan-${plan.id}`} aria-labelledby={`plan-${plan.id}`}>
              <h3 id={`plan-${plan.id}`}>{plan.name}</h3>
              <p className="lt-plan-price"><strong>{plan.price}</strong><span>{plan.period}</span></p>
              <p className="lt-plan-audience">{plan.audience}</p>
              <p className="lt-plan-billing">{plan.billing}</p>
              <ul>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
              <a className="lt-plan-button" href={`${APP_URL}/pricing?plan=${plan.id}`}>{plan.cta} →</a>
              <p className="lt-plan-renewal">7-day trial · Review renewal terms in checkout</p>
            </article>
          ))}
        </div>
        {includeTeam && (
          <aside className="lt-plan-team">
            <div><h3>Learning with your team?</h3><p><strong>$99/month for 5 learner seats.</strong> Pricing adjusts as you add seats.</p></div>
            <a href={`${APP_URL}/teams`}>See team pricing →</a>
          </aside>
        )}
        <p className="lt-plan-free">Missionary Spanish remains free. <a href={MISSIONARY_APP_URL}>Open the free module →</a></p>
      </div>
    </section>
  )
}
