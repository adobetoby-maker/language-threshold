import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import PlanPricing from './PlanPricing'
import ProfessionalPlans from './ProfessionalPlans'

describe('plan pricing', () => {
  it('shows the four plans in order with honest annual savings and team pricing', () => {
    const html = renderToStaticMarkup(<PlanPricing includeTeam />)
    const positions = ['plan-monthly', 'plan-annual', 'plan-family-monthly', 'plan-family']
      .map(id => html.indexOf(`id="${id}"`))
    expect(positions.every(position => position >= 0)).toBe(true)
    expect(positions).toEqual([...positions].sort((a, b) => a - b))
    expect(html).toContain('$228/year')
    expect(html).toContain('Save $79 a year')
    expect(html).toContain('$420/year')
    expect(html).toContain('Save $171 a year')
    expect(html).toContain('Family monthly checkout is being prepared')
    expect(html).toContain('Crew lead? Get what you need for your team.')
    expect(html).toContain('href="https://app.languagethreshold.com/team"')
  })
})

describe('specialty funnel pricing', () => {
  it('uses the same four-plan comparison and keeps PDF guides separate', () => {
    const html = renderToStaticMarkup(<ProfessionalPlans accentColor="#FF7A4A" />)
    expect(html).toContain('Printable PDF guides shown on this page are separate optional products.')
    expect(html).toContain('id="plan-monthly"')
    expect(html).toContain('id="plan-annual"')
    expect(html).toContain('id="plan-family-monthly"')
    expect(html).toContain('id="plan-family"')
    expect(html).toContain('href="https://app.languagethreshold.com/team"')
  })
})
