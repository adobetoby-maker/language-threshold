import { sansFont, displayFont } from '../constants'

// Add your Stripe Payment Link URLs here when ready.
// Each module gets its own link so buyers know exactly which guide they're purchasing.
// Construction module IDs: framer, foreman, safety, plumber, drywall, electrician, truck-driver, landscaper, auto-mechanic
// Medical module IDs: emergency, nursing, orthopedics, family-medicine, obgyn, surgery, cardiology, physical-therapy, pain-management, medical-receptionist, social-work, or-evs, fmg
const PAYMENT_LINKS: Record<string, string> = {
  // Replace '#' values with your Stripe payment link URLs:
  // e.g. 'emergency': 'https://buy.stripe.com/xxx'
}

const BUNDLE_LINK = {
  medical: '',
  construction: '',
}

interface GuideModule {
  id: string
  emoji: string
  title: string
  tagline: string
  color: string
}

interface Props {
  specialty: 'medical' | 'construction'
  accentColor: string
  modules: GuideModule[]
}

const PRICE = '$19.99'
const BUNDLE_PRICE = { medical: '$99', construction: '$59' }

export default function PDFGuideSection({ specialty, accentColor, modules }: Props) {
  const bundleLink = BUNDLE_LINK[specialty]

  function buyLink(moduleId: string) {
    return PAYMENT_LINKS[moduleId] || ''
  }

  function handleBuy(link: string, title: string) {
    if (link) {
      window.open(link, '_blank', 'noopener noreferrer')
    } else {
      // No link set yet — scroll to email signup as fallback
      const el = document.getElementById('email-signup')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      alert(`"${title}" PDF guide is coming soon! Sign up for our list to be notified when it's available.`)
    }
  }

  return (
    <section>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            ...sansFont, display: 'inline-block', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: accentColor,
            background: accentColor + '15', borderRadius: 20, padding: '3px 11px',
            marginBottom: 14,
          }}
        >
          PDF Study Guides
        </div>
        <h2 style={{ ...displayFont, fontSize: 28, color: '#F7F3EC', margin: '0 0 8px' }}>
          Take the curriculum offline
        </h2>
        <p style={{ ...sansFont, fontSize: 14, color: '#A89F94', lineHeight: 1.6, maxWidth: 520 }}>
          Each module compiled into a printable PDF study guide: vocabulary, sample phrases, clinical scenarios, and a full notes section for your own review.
        </p>
      </div>

      {/* Module cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 12,
          marginBottom: 24,
        }}
      >
        {modules.map(mod => {
          const link = buyLink(mod.id)
          return (
            <div
              key={mod.id}
              style={{
                background: '#161616',
                border: `1px solid ${mod.color}20`,
                borderRadius: 14,
                padding: '18px 18px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 22 }}>{mod.emoji}</span>
                <span
                  style={{
                    ...sansFont, fontSize: 11, fontWeight: 700,
                    color: mod.color, background: mod.color + '15',
                    borderRadius: 20, padding: '2px 9px',
                  }}
                >
                  {PRICE}
                </span>
              </div>
              <div style={{ ...displayFont, fontSize: 15, fontWeight: 700, color: '#F7F3EC' }}>
                {mod.title}
              </div>
              <div style={{ ...sansFont, fontSize: 12, color: '#A89F94', flex: 1, lineHeight: 1.5 }}>
                {mod.tagline}
              </div>
              <button
                onClick={() => handleBuy(link, mod.title)}
                style={{
                  ...sansFont,
                  marginTop: 10,
                  background: link ? mod.color : 'rgba(255,255,255,0.04)',
                  border: link ? 'none' : `1px solid rgba(255,255,255,0.1)`,
                  borderRadius: 8,
                  color: link ? '#0D0D0D' : '#71717A',
                  fontWeight: 700,
                  fontSize: 12,
                  padding: '9px 0',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'opacity 0.15s',
                }}
              >
                {link ? 'Buy PDF Guide →' : 'Coming Soon'}
              </button>
            </div>
          )
        })}
      </div>

      {/* Bundle CTA */}
      <div
        style={{
          background: `linear-gradient(135deg, ${accentColor}12 0%, rgba(13,13,13,0) 70%)`,
          border: `1px solid ${accentColor}25`,
          borderRadius: 16,
          padding: '24px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div>
          <div style={{ ...displayFont, fontSize: 18, color: '#F7F3EC', marginBottom: 4 }}>
            Complete {specialty === 'medical' ? 'Medical Spanish' : 'Construction Spanish'} Bundle
          </div>
          <div style={{ ...sansFont, fontSize: 13, color: '#A89F94' }}>
            All {modules.length} guides · Printable PDF · Notes section on every page
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ ...displayFont, fontSize: 28, color: accentColor, fontWeight: 700 }}>
            {BUNDLE_PRICE[specialty]}
          </div>
          <button
            onClick={() => bundleLink ? window.open(bundleLink, '_blank', 'noopener noreferrer') : alert('Bundle coming soon! Sign up for our list to be notified.')}
            style={{
              ...sansFont,
              background: accentColor,
              border: 'none',
              borderRadius: 24,
              color: '#0D0D0D',
              fontWeight: 700,
              fontSize: 14,
              padding: '12px 28px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Get All {modules.length} Guides →
          </button>
        </div>
      </div>

      <p style={{ ...sansFont, fontSize: 11, color: '#71717A', marginTop: 12 }}>
        PDF delivered to your email within 24 hours of purchase. Printable on standard paper.
      </p>
    </section>
  )
}
