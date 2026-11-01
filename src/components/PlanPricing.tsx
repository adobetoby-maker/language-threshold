import { APP_URL, MISSIONARY_APP_URL } from '../constants'
import './plan-pricing.css'

const INDIVIDUAL_FEATURES = [
  'All published professional modules',
  'Reading, listening and speaking practice',
  'Your own learning progress',
]

const FAMILY_FEATURES = [
  'Pro access for up to 6 family members',
  'Junior Linguist for kids ages 4–12',
  'Separate family profiles and progress',
]

const PLAN_GROUPS = [
  {
    title: 'Individual',
    description: 'One learner. Every published module.',
    plans: [
      {
        id: 'monthly', name: 'Monthly', price: '$19', period: '/month',
        billing: '$19 charged each month after the trial. Renews monthly until canceled.',
        features: INDIVIDUAL_FEATURES,
        cta: 'Choose Individual monthly',
      },
      {
        id: 'annual', name: 'Annual', price: '$149', period: '/year',
        fullPrice: '$228', savings: 'Save $79 a year',
        billing: '$149 charged once per year after the trial. About $12.42/month, billed annually.',
        features: INDIVIDUAL_FEATURES,
        cta: 'Choose Individual annual',
      },
    ],
  },
  {
    title: 'Family',
    description: 'Up to 6 profiles, including Junior Linguist.',
    plans: [
      {
        id: 'family-monthly', name: 'Monthly', price: '$35', period: '/month',
        billing: '$35 charged each month after the trial. Renews monthly until canceled.',
        features: FAMILY_FEATURES,
        cta: 'Choose Family monthly',
      },
      {
        id: 'family', name: 'Annual', price: '$249', period: '/year',
        fullPrice: '$420', savings: 'Save $171 a year',
        billing: '$249 charged once per year after the trial. About $20.75/month, billed annually.',
        features: FAMILY_FEATURES,
        cta: 'Choose Family annual',
      },
    ],
  },
] as const

const familyMonthlyCheckoutReady = import.meta.env.VITE_FAMILY_MONTHLY_CHECKOUT_READY === 'true'

export default function PlanPricing({ includeTeam = false }: { includeTeam?: boolean }) {
  return (
    <section id="pricing" className="lt-plan-pricing" aria-labelledby="plan-pricing-title">
      <div className="lt-plan-wrap">
        <header className="lt-plan-heading">
          <p className="lt-plan-eyebrow">Individual & family plans</p>
          <h2 id="plan-pricing-title">Choose your plan.<br />Know what you’ll pay.</h2>
          <p>Choose monthly flexibility or save with an annual plan.</p>
        </header>
        <p className="lt-plan-trial">
          <strong>Start with a 7-day free trial.</strong>
          <span> Your chosen price starts after the trial. Payment and renewal terms are shown in checkout.</span>
        </p>
        {PLAN_GROUPS.map(group => (
          <div className="lt-plan-group" key={group.title}>
            <div className="lt-plan-group-heading">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <div className="lt-plan-grid">
              {group.plans.map(plan => (
                <article key={plan.id} className={`lt-plan-card lt-plan-${plan.id}`} aria-labelledby={`plan-${plan.id}`}>
                  <h4 id={`plan-${plan.id}`}>{plan.name}</h4>
                  {'fullPrice' in plan && (
                    <p className="lt-plan-savings">
                      <span className="lt-plan-old-price">{plan.fullPrice}/year</span>
                      <span className="lt-plan-comparison">12 monthly payments</span>
                      <strong>{plan.savings}</strong>
                    </p>
                  )}
                  <p className="lt-plan-price"><strong>{plan.price}</strong><span>{plan.period}</span></p>
                  <p className="lt-plan-billing">{plan.billing}</p>
                  <ul>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
                  {plan.id === 'family-monthly' && !familyMonthlyCheckoutReady ? (
                    <span className="lt-plan-button lt-plan-button-pending" aria-label="Family monthly checkout is being prepared">
                      Checkout being prepared
                    </span>
                  ) : (
                    <a className="lt-plan-button" href={`${APP_URL}/pricing?plan=${plan.id}`}>{plan.cta} →</a>
                  )}
                  <p className="lt-plan-renewal">
                    {plan.id === 'family-monthly' && !familyMonthlyCheckoutReady
                      ? 'Monthly pricing preview · Checkout is not available yet'
                      : '7-day trial · Review renewal terms in checkout'}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
        {includeTeam && (
          <aside className="lt-plan-team">
            <div>
              <p className="lt-plan-team-eyebrow">For supervisors and owners</p>
              <h3>Crew lead? Get what you need for your team.</h3>
              <p>Train your crew with flexible seats and a plan that fits your team.</p>
            </div>
            <a href={`${APP_URL}/team`}>See team pricing →</a>
          </aside>
        )}
        <p className="lt-plan-free">Missionary Spanish remains free. <a href={MISSIONARY_APP_URL}>Open the free module →</a></p>
      </div>
    </section>
  )
}
