import snapshot from './generated/hello-little-one.booklet.json'

export interface PublicBookletSentence {
  sentenceId: string
  order: number
  source: string
  target: string
}

export interface PublicBookletPage {
  pageId: string
  sourceLabel: string
  order: number
  kind: 'cover' | 'content'
  image: {
    assetId: string
    url: string
    altText: { source: string; target: string }
    ownershipStatus: string
    storageStatus: string
    sha256: string
  }
  sentences: PublicBookletSentence[]
}

export interface PublicBooklet {
  bookId: string
  editionId: string
  editionVersion: number
  sourceLanguage: 'en'
  targetLanguage: 'es'
  contentStatus: string
  title: { source: string; target: string }
  requiresAccount: false
  requiresProduction: false
  pages: PublicBookletPage[]
  vocabulary: Array<{
    vocabularyId: string
    term: { source: string; target: string }
    gloss: { source: string; target: string }
  }>
}

export const HELLO_LITTLE_ONE_SNAPSHOT = snapshot as unknown as {
  generatedAtSourceCommit: string
  sourceRepository: string
  sourceFixture: string
  sourceFixtureSha256: string
  content: PublicBooklet
}

export const HELLO_LITTLE_ONE = HELLO_LITTLE_ONE_SNAPSHOT.content
