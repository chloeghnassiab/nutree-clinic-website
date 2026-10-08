'use client'
import { useState } from 'react'
import Link from 'next/link'

// BMI calculator — carried over from the live /glp-1 page ("Calculate your BMI").

const BANDS = [
  { label: 'Underweight',    range: '< 18.5',      min: 0,    max: 18.5,     color: '#8ED4EA' },
  { label: 'Healthy weight', range: '18.5 – 24.9', min: 18.5, max: 25,       color: '#78C8A8' },
  { label: 'Overweight',     range: '25 – 29.9',   min: 25,   max: 30,       color: '#ECC840' },
  { label: 'Obesity',        range: '≥ 30',        min: 30,   max: Infinity, color: '#E0A070' },
]

function note(bmi: number): string {
  if (bmi < 18.5) return 'Your BMI is below the healthy range. GLP-1 weight-loss medication is not appropriate — consider speaking with your doctor about your nutrition.'
  if (bmi < 25) return 'Your BMI is in the healthy range. GLP-1 weight-loss medication is generally not indicated, but a clinician can talk through your metabolic health goals.'
  if (bmi < 27) return 'Your BMI is in the overweight range. GLP-1 medication is usually considered from a BMI of 27 with a weight-related condition — a clinician can review your situation.'
  if (bmi < 30) return 'With a BMI of 27 or more and a weight-related condition (such as high blood pressure, prediabetes or high cholesterol), you may be a candidate for GLP-1 treatment. A clinician will confirm.'
  return 'A BMI of 30 or higher is within the range where GLP-1 treatment is commonly considered. Eligibility is always confirmed by a licensed clinician after reviewing your full health history.'
}

const input: React.CSSProperties = {
  width: '100%', padding: '0.75rem 0.875rem', borderRadius: 8, border: '1px solid var(--border)',
  fontSize: '1rem', fontFamily: 'var(--font-sans)', color: 'var(--ink)', background: 'var(--white)',
}
const label: React.CSSProperties = { fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-2)', marginBottom: 6, display: 'block' }

export function BmiCalculator() {
  const [ft, setFt] = useState('')
  const [inch, setInch] = useState('')
  const [lb, setLb] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)

  function calc(e: React.FormEvent) {
    e.preventDefault()
    const totalIn = (parseFloat(ft) || 0) * 12 + (parseFloat(inch) || 0)
    const w = parseFloat(lb)
    if (!totalIn || !w) { setBmi(null); return }
    setBmi(Math.round((703 * w / (totalIn * totalIn)) * 10) / 10)
  }

  const band = bmi === null ? null : BANDS.find(b => bmi >= b.min && bmi < b.max) ?? null

  return (
    <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
      <form onSubmit={calc} style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'var(--white)', border: '0.5px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '0.625rem' }}>
          <div style={{ flex: 1 }}>
            <label style={label} htmlFor="bmi-ft">Height (feet)</label>
            <input id="bmi-ft" style={input} type="number" inputMode="numeric" min={3} max={8} value={ft} onChange={e => setFt(e.target.value)} placeholder="5" />
          </div>
          <div style={{ flex: 1 }}>
            <label style={label} htmlFor="bmi-in">Height (inches)</label>
            <input id="bmi-in" style={input} type="number" inputMode="numeric" min={0} max={11} value={inch} onChange={e => setInch(e.target.value)} placeholder="6" />
          </div>
        </div>
        <div>
          <label style={label} htmlFor="bmi-lb">Weight (pounds)</label>
          <input id="bmi-lb" style={input} type="number" inputMode="decimal" min={50} max={800} value={lb} onChange={e => setLb(e.target.value)} placeholder="180" />
        </div>
        <button type="submit" style={{ padding: '0.875rem', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontSize: '1rem', fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
          Calculate
        </button>
      </form>

      <div style={{ flex: '1 1 260px', background: 'var(--white)', border: '0.5px solid var(--border)', borderRadius: 12, padding: '1.25rem' }} aria-live="polite">
        <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-3)' }}>Your BMI</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--ink)', lineHeight: 1.1, margin: '0.25rem 0 0.75rem' }}>
          {bmi ?? '—'}{band && <span style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)', color: 'var(--ink-2)', marginLeft: 8 }}>{band.label}</span>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: '0.875rem' }}>
          {BANDS.map(b => (
            <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: 'var(--ink-2)', fontWeight: band?.label === b.label ? 700 : 400 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: b.color, flexShrink: 0 }} />
              <span style={{ flex: 1 }}>{b.label}</span>
              <span style={{ color: 'var(--ink-3)' }}>{b.range}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>
          {bmi === null ? 'Enter your height and weight to view your BMI and recommendations.' : note(bmi)}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.875rem', fontSize: '0.9375rem', fontWeight: 700 }}>
          <Link href="/consult" style={{ color: 'var(--glp-dark)' }}>Get started →</Link>
          <Link href="/bmi" style={{ color: 'var(--ink-2)' }}>Full BMI calculator →</Link>
        </div>
      </div>
    </div>
  )
}
