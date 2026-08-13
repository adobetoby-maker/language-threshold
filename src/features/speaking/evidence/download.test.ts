import { describe, expect, it, vi } from 'vitest'
import { downloadEvidenceJson } from './download'

describe('speaking evidence download', () => {
  it('attaches the link and delays URL revocation for Safari', () => {
    const link = { href: '', download: '', click: vi.fn(), remove: vi.fn() }
    const appendChild = vi.fn()
    const revokeObjectURL = vi.fn()
    const scheduled: Array<() => void> = []

    downloadEvidenceJson('{"safe":true}', 'evidence.json', {
      document: { body: { appendChild }, createElement: () => link },
      urlApi: { createObjectURL: () => 'blob:evidence', revokeObjectURL },
      schedule: task => scheduled.push(task),
    })

    expect(link).toMatchObject({ href: 'blob:evidence', download: 'evidence.json' })
    expect(appendChild).toHaveBeenCalledWith(link)
    expect(link.click).toHaveBeenCalledOnce()
    expect(link.remove).toHaveBeenCalledOnce()
    expect(revokeObjectURL).not.toHaveBeenCalled()
    scheduled[0]()
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:evidence')
  })
})
