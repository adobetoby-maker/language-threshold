import { useState } from 'react'
import { sansFont, displayFont } from '../constants'

interface Props {
  accentColor: string
  specialty: 'medical' | 'construction'
}

export default function EmailSignupBanner({ accentColor, specialty }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [code, setCode] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: specialty }),
      })
      const data = await res.json()
      if (res.ok && data.code) {
        setCode(data.code)
        setStatus('success')
      } else {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error — please try again.')
      setStatus('error')
    }
  }

  const isSuccess = status === 'success'

  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${accentColor}10 0%, rgba(13,13,13,0) 60%)`,
        border: `1px solid ${accentColor}25`,
        borderRadius: 20,
        padding: '40px 36px',
        margin: '0 auto',
        maxWidth: 780,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle decorative circle */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', right: -60, top: -60,
          width: 240, height: 240,
          borderRadius: '50%',
          background: accentColor + '08',
          pointerEvents: 'none',
        }}
      />

      {isSuccess ? (
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
          <h3 style={{ ...displayFont, fontSize: 22, color: '#F7F3EC', margin: '0 0 8px' }}>
            You're in!
          </h3>
          <p style={{ ...sansFont, fontSize: 14, color: '#A89F94', margin: '0 0 20px' }}>
            Use this code at checkout for <strong style={{ color: accentColor }}>10% off your first 6 months</strong>:
          </p>
          <div
            style={{
              display: 'inline-block',
              background: accentColor + '18',
              border: `1.5px dashed ${accentColor}60`,
              borderRadius: 12,
              padding: '14px 32px',
              marginBottom: 16,
            }}
          >
            <span style={{ ...sansFont, fontSize: 28, fontWeight: 800, letterSpacing: '0.12em', color: accentColor }}>
              {code}
            </span>
          </div>
          <p style={{ ...sansFont, fontSize: 12, color: '#71717A' }}>
            Enter this code when upgrading to a paid plan in the app.
          </p>
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'inline-block',
              ...sansFont, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: accentColor,
              background: accentColor + '15', borderRadius: 20, padding: '3px 11px',
              marginBottom: 14,
            }}
          >
            Limited offer
          </div>
          <h3 style={{ ...displayFont, fontSize: 26, color: '#F7F3EC', margin: '0 0 8px', lineHeight: 1.25 }}>
            Get 10% off your first 6 months
          </h3>
          <p style={{ ...sansFont, fontSize: 14, color: '#A89F94', margin: '0 0 24px', lineHeight: 1.6, maxWidth: 480 }}>
            Join our list and receive a discount code for 10% off any paid plan — applied automatically for your first six months.
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              style={{
                ...sansFont,
                flex: '1 1 220px',
                background: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 10,
                color: '#F7F3EC',
                fontSize: 14,
                padding: '12px 16px',
                outline: 'none',
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                ...sansFont,
                background: accentColor,
                color: '#0D0D0D',
                border: 'none',
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                padding: '12px 24px',
                cursor: status === 'loading' ? 'wait' : 'pointer',
                whiteSpace: 'nowrap',
                opacity: status === 'loading' ? 0.7 : 1,
                transition: 'opacity 0.15s',
              }}
            >
              {status === 'loading' ? 'Sending…' : 'Get Discount Code →'}
            </button>
          </form>
          {status === 'error' && (
            <p style={{ ...sansFont, fontSize: 12, color: '#EF4444', marginTop: 10 }}>{errorMsg}</p>
          )}
          <p style={{ ...sansFont, fontSize: 11, color: '#71717A', marginTop: 14 }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      )}
    </section>
  )
}
