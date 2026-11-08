import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import TrifoldPrint from './TrifoldPrint'
function render(specialty: 'medical' | 'construction', url: string) {
 return renderToStaticMarkup(<MemoryRouter initialEntries={[url]}><TrifoldPrint specialty={specialty} /></MemoryRouter>)
}
describe('free resource card selection', () => {
 it('opens only the selected two-page nursing card', () => {
  const html = render('medical', '/print/trifold/medical?module=nursing')
  expect((html.match(/class="trifold-page"/g) || []).length).toBe(2)
  expect(html).toContain('Print Nursing Card')
 })
 it('opens only the selected two-page construction safety card', () => {
  const html = render('construction', '/print/trifold/construction?module=safety')
  expect((html.match(/class="trifold-page"/g) || []).length).toBe(2)
  expect(html).toContain('Print Construction Safety Card')
 })
 it('keeps the full collection available without a selected card', () => {
  const html = render('medical', '/print/trifold/medical')
  expect((html.match(/class="trifold-page"/g) || []).length).toBe(26)
 })
})
