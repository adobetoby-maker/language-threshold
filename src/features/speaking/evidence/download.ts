interface DownloadAnchor {
  href: string
  download: string
  click: () => void
  remove: () => void
}

interface DownloadDocument {
  body: { appendChild: (node: DownloadAnchor) => unknown }
  createElement: (tag: 'a') => DownloadAnchor
}

interface DownloadUrlApi {
  createObjectURL: (blob: Blob) => string
  revokeObjectURL: (url: string) => void
}

export function downloadEvidenceJson(
  json: string,
  filename: string,
  dependencies: {
    document?: DownloadDocument
    urlApi?: DownloadUrlApi
    schedule?: (task: () => void, delayMs: number) => unknown
  } = {},
) {
  const documentRef = dependencies.document ?? (document as unknown as DownloadDocument)
  const urlApi = dependencies.urlApi ?? URL
  const schedule = dependencies.schedule ?? window.setTimeout.bind(window)
  const url = urlApi.createObjectURL(new Blob([json], { type: 'application/json' }))
  const link = documentRef.createElement('a')
  link.href = url
  link.download = filename
  documentRef.body.appendChild(link)
  link.click()
  link.remove()
  schedule(() => urlApi.revokeObjectURL(url), 1_000)
}
