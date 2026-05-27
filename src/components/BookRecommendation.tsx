import { sansFont, displayFont } from '../constants'

// Update AMAZON_TAG with your affiliate tag (e.g. 'tobyandertonmd-20')
const AMAZON_TAG = 'tobyandertonmd-20'

interface Book {
  asin: string
  title: string
  subtitle: string
  author: string
  why: string
  emoji: string
  accentColor: string
}

const BOOKS: Record<'medical' | 'construction', Book[]> = {
  medical: [
    {
      asin: '1438010079',
      title: '501 Spanish Verbs',
      subtitle: 'Fully Conjugated in All the Tenses',
      author: 'Christopher & Theodore Kendris',
      why: 'The gold standard conjugation reference. Every verb you\'ll use in the clinic, fully mapped. A permanent desk reference.',
      emoji: '📘',
      accentColor: '#4A9EFF',
    },
  ],
  construction: [
    {
      asin: '1438010079',
      title: '501 Spanish Verbs',
      subtitle: 'Fully Conjugated in All the Tenses',
      author: 'Christopher & Theodore Kendris',
      why: 'Master the verbs that run the jobsite. Assign tasks, describe procedures, correct mistakes — all with confidence.',
      emoji: '📘',
      accentColor: '#FF7A4A',
    },
  ],
}

interface Props {
  specialty: 'medical' | 'construction'
}

export default function BookRecommendation({ specialty }: Props) {
  const books = BOOKS[specialty]

  return (
    <section>
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            ...sansFont, display: 'inline-block', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#C9A84C', background: 'rgba(201,168,76,0.12)',
            borderRadius: 20, padding: '3px 11px', marginBottom: 12,
          }}
        >
          Recommended reading
        </div>
        <h2 style={{ ...displayFont, fontSize: 22, color: '#F7F3EC', margin: 0 }}>
          Books worth owning
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {books.map(book => {
          const link = `https://www.amazon.com/dp/${book.asin}?tag=${AMAZON_TAG}`
          return (
            <a
              key={book.asin}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                gap: 18,
                background: '#161616',
                border: `1px solid ${book.accentColor}18`,
                borderRadius: 14,
                padding: '18px 20px',
                textDecoration: 'none',
                transition: 'border-color 0.18s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = book.accentColor + '45')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = book.accentColor + '18')}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 56,
                  height: 72,
                  background: book.accentColor + '15',
                  border: `1px solid ${book.accentColor}25`,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                }}
              >
                {book.emoji}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ ...displayFont, fontSize: 16, fontWeight: 700, color: '#F7F3EC', marginBottom: 2 }}>
                  {book.title}
                </div>
                <div style={{ ...sansFont, fontSize: 12, color: book.accentColor, marginBottom: 2 }}>
                  {book.subtitle}
                </div>
                <div style={{ ...sansFont, fontSize: 11, color: '#71717A', marginBottom: 8 }}>
                  {book.author}
                </div>
                <div style={{ ...sansFont, fontSize: 13, color: '#A89F94', lineHeight: 1.5 }}>
                  {book.why}
                </div>
                <div
                  style={{
                    ...sansFont, display: 'inline-block', marginTop: 10,
                    fontSize: 11, fontWeight: 700, color: '#C9A84C',
                    background: 'rgba(201,168,76,0.10)', borderRadius: 20, padding: '3px 10px',
                  }}
                >
                  View on Amazon →
                </div>
              </div>
            </a>
          )
        })}
      </div>

      <p style={{ ...sansFont, fontSize: 11, color: '#71717A', marginTop: 10 }}>
        Affiliate link — we may earn a small commission at no cost to you.
      </p>
    </section>
  )
}
