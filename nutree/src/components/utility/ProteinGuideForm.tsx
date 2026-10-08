'use client'
import { useState } from 'react'
import Link from 'next/link'

// Same fields as the live Umso form (form_QftItocLAizYNNqk). The Umso backend cannot be
// carried over, so submissions go to /api/lead (source: 'protein_guide').
// TODO(owner): /api/lead is currently a stub that only logs — wire it to the CRM / email
// delivery of the guide before the domain moves, or swap this for a Jotform embed.

const STATES = 'AL - Alabama|AK - Alaska|AZ - Arizona|AR - Arkansas|CA - California|CO - Colorado|CT - Connecticut|DE - Delaware|FL - Florida|GA - Georgia|HI - Hawaii|ID - Idaho|IL - Illinois|IN - Indiana|IA - Iowa|KS - Kansas|KY - Kentucky|LA - Louisiana|ME - Maine|MD - Maryland|MA - Massachusetts|MI - Michigan|MN - Minnesota|MS - Mississippi|MO - Missouri|MT - Montana|NE - Nebraska|NV - Nevada|NH - New Hampshire|NJ - New Jersey|NM - New Mexico|NY - New York|NC - North Carolina|ND - North Dakota|OH - Ohio|OK - Oklahoma|OR - Oregon|PA - Pennsylvania|RI - Rhode Island|SC - South Carolina|SD - South Dakota|TN - Tennessee|TX - Texas|UT - Utah|VT - Vermont|VA - Virginia|WA - Washington|WV - West Virginia|WI - Wisconsin|WY - Wyoming'.split('|')

const input: React.CSSProperties = { width: '100%', padding: '12px 14px', fontSize: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--white)', color: 'var(--ink)', fontFamily: 'var(--font-sans)' }
const label: React.CSSProperties = { display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-2)', marginBottom: 6 }
const req = <span style={{ color: 'darkred' }}> *</span>

export function ProteinGuideForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [err, setErr] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const data = Object.fromEntries(f.entries()) as Record<string, string>
    if (!data.first_name || !data.last_name || !data.email || !data.phone || !data.state) { setErr('Please fill in all required fields.'); return }
    if (!data.accept) { setErr('Please accept the Terms of Use and Privacy Policy to continue.'); return }
    setErr('')
    setStatus('sending')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: `${data.first_name} ${data.last_name}`, email: data.email, phone: data.phone, state: data.state, source: 'protein_guide' }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div role="status" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Thank you!</h2>
        <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.65 }}>Your Protein &amp; Portion Guide is on its way to your inbox.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.875rem', marginBottom: '0.875rem' }}>
        <div><label htmlFor="pg-first" style={label}>Name{req}</label><input id="pg-first" name="first_name" type="text" placeholder="Jane" autoComplete="given-name" required style={input} /></div>
        <div><label htmlFor="pg-last" style={label}>Last Name{req}</label><input id="pg-last" name="last_name" type="text" placeholder="Doe" autoComplete="family-name" required style={input} /></div>
        <div><label htmlFor="pg-email" style={label}>Email{req}</label><input id="pg-email" name="email" type="email" placeholder="your@email.com" autoComplete="email" required style={input} /></div>
        <div><label htmlFor="pg-phone" style={label}>Phone{req}</label><input id="pg-phone" name="phone" type="tel" autoComplete="tel" required style={input} /></div>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="pg-state" style={label}>State{req}</label>
        <select id="pg-state" name="state" required defaultValue="" style={input}>
          <option value="" disabled>Select state of residence</option>
          {STATES.map(s => <option key={s} value={s.slice(0, 2)}>{s}</option>)}
        </select>
      </div>
      <label style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--ink-2)', lineHeight: 1.55, marginBottom: '1rem', cursor: 'pointer' }}>
        <input type="checkbox" name="accept" value="true" style={{ marginTop: 3, flexShrink: 0 }} />
        <span>
          I confirm that I accept the <Link href="/terms-of-use" style={{ color: 'var(--teal-dark)' }}>Terms of Use</Link> and{' '}
          <Link href="/privacy" style={{ color: 'var(--teal-dark)' }}>Privacy Policy</Link> of Nutree Clinic LLC, and that I want to receive SMS and email from Nutree Clinic LLC using the contact information I provide. Reply &quot;STOP&quot; to opt-out at any time.
        </span>
      </label>
      {err && <p role="alert" style={{ color: '#A12A2A', fontSize: '0.875rem', marginBottom: '0.75rem' }}>{err}</p>}
      {status === 'error' && (
        <p role="alert" style={{ color: '#A12A2A', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
          Something went wrong. Please try again, or email <a href="mailto:contact@nutreeclinic.com" style={{ color: '#A12A2A' }}>contact@nutreeclinic.com</a> and we&apos;ll send you the guide.
        </p>
      )}
      <button type="submit" disabled={status === 'sending'} style={{ width: '100%', padding: '14px', borderRadius: 999, border: 'none', cursor: 'pointer', background: 'var(--ink)', color: '#fff', fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-sans)', opacity: status === 'sending' ? 0.6 : 1 }}>
        {status === 'sending' ? 'Sending…' : 'Send me the guide!'}
      </button>
    </form>
  )
}
