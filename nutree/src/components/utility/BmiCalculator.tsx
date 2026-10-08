'use client'
import { useState } from 'react'
import Link from 'next/link'
import { PRICES } from '@/lib/prices.config'

type Units = 'imperial' | 'metric'

const CATEGORIES = [
  { label: 'Underweight', range: '< 18.5', min: 0, max: 18.5, color: '#8ED4EA' },
  { label: 'Healthy Weight', range: '18.5 – 24.9', min: 18.5, max: 25, color: '#78C8A8' },
  { label: 'Overweight', range: '25 – 29.9', min: 25, max: 30, color: '#ECC840' },
  { label: 'Obesity', range: '≥ 30', min: 30, max: Infinity, color: '#E0A070' },
]

function categoryFor(bmi: number) {
  return CATEGORIES.find(c => bmi >= c.min && bmi < c.max) ?? CATEGORIES[3]
}

const input: React.CSSProperties = {
  width: '100%', padding: '12px 14px', fontSize: '1rem', borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--border)', background: 'var(--white)', color: 'var(--ink)', fontFamily: 'var(--font-sans)',
}
const label: React.CSSProperties = { display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-2)', marginBottom: 6 }

export function BmiCalculator() {
  const [units, setUnits] = useState<Units>('imperial')
  const [ft, setFt] = useState('')
  const [inch, setInch] = useState('')
  const [lb, setLb] = useState('')
  const [cm, setCm] = useState('')
  const [kg, setKg] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [error, setError] = useState('')

  function calculate(e?: React.FormEvent) {
    e?.preventDefault()
    let meters = 0
    let kilos = 0
    if (units === 'imperial') {
      const totalIn = (parseFloat(ft) || 0) * 12 + (parseFloat(inch) || 0)
      meters = totalIn * 0.0254
      kilos = (parseFloat(lb) || 0) * 0.45359237
    } else {
      meters = (parseFloat(cm) || 0) / 100
      kilos = parseFloat(kg) || 0
    }
    if (meters < 0.9 || meters > 2.5 || kilos < 20 || kilos > 350) {
      setBmi(null)
      setError('Please enter a valid height and weight.')
      return
    }
    setError('')
    setBmi(Math.round((kilos / (meters * meters)) * 10) / 10)
  }

  function switchUnits(u: Units) {
    setUnits(u)
    setBmi(null)
    setError('')
  }

  const cat = bmi !== null ? categoryFor(bmi) : null
  // Marker position on a 15–40 scale
  const pos = bmi !== null ? Math.min(100, Math.max(0, ((bmi - 15) / 25) * 100)) : null

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
      {/* FORM */}
      <form onSubmit={calculate} noValidate style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: '1rem' }}>
          Enter your height and weight to estimate your BMI and see where it lands on the chart.
        </p>
        <div role="group" aria-label="Units" style={{ display: 'inline-flex', background: 'var(--base)', border: '1px solid var(--border)', borderRadius: 999, padding: 3, marginBottom: '1rem' }}>
          {(['imperial', 'metric'] as const).map(u => (
            <button key={u} type="button" onClick={() => switchUnits(u)} aria-pressed={units === u}
              style={{ border: 'none', cursor: 'pointer', borderRadius: 999, padding: '6px 14px', fontSize: '0.875rem', fontWeight: 600, fontFamily: 'var(--font-sans)', background: units === u ? 'var(--ink)' : 'transparent', color: units === u ? '#fff' : 'var(--ink-2)' }}>
              {u === 'imperial' ? 'ft / in / lb' : 'cm / kg'}
            </button>
          ))}
        </div>

        {units === 'imperial' ? (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div>
                <label htmlFor="bmi-ft" style={label}>Height (feet)</label>
                <input id="bmi-ft" type="number" inputMode="numeric" min={0} step={1} placeholder="feet" value={ft} onChange={e => setFt(e.target.value)} style={input} />
              </div>
              <div>
                <label htmlFor="bmi-in" style={label}>Height (inches)</label>
                <input id="bmi-in" type="number" inputMode="decimal" min={0} step={0.1} placeholder="inches" value={inch} onChange={e => setInch(e.target.value)} style={input} />
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="bmi-lb" style={label}>Weight (pounds)</label>
              <input id="bmi-lb" type="number" inputMode="decimal" min={0} step={0.1} placeholder="pounds" value={lb} onChange={e => setLb(e.target.value)} style={input} />
            </div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: '0.75rem' }}>
              <label htmlFor="bmi-cm" style={label}>Height (cm)</label>
              <input id="bmi-cm" type="number" inputMode="decimal" min={0} step={0.1} placeholder="cm" value={cm} onChange={e => setCm(e.target.value)} style={input} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="bmi-kg" style={label}>Weight (kg)</label>
              <input id="bmi-kg" type="number" inputMode="decimal" min={0} step={0.1} placeholder="kg" value={kg} onChange={e => setKg(e.target.value)} style={input} />
            </div>
          </>
        )}
        <button type="submit" style={{ width: '100%', padding: '14px', borderRadius: 999, border: 'none', cursor: 'pointer', background: 'var(--ink)', color: '#fff', fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-sans)' }}>
          Calculate
        </button>
        {error && <p role="alert" style={{ color: '#A12A2A', fontSize: '0.875rem', marginTop: '0.625rem' }}>{error}</p>}
      </form>

      {/* RESULT */}
      <div aria-live="polite" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.25rem' }}>Your BMI</h2>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.25rem', fontWeight: 700, color: cat ? 'var(--ink)' : 'var(--ink-3)', lineHeight: 1.1 }}>
          {bmi !== null ? bmi.toFixed(1) : '—'}
        </div>
        {cat && <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem' }}>{cat.label} <span style={{ fontWeight: 400, color: 'var(--ink-3)' }}>({cat.range})</span></div>}

        {/* Scale */}
        <div style={{ position: 'relative', margin: '1rem 0 0.5rem' }}>
          <div style={{ display: 'flex', height: 10, borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ flex: 3.5, background: CATEGORIES[0].color }} />
            <div style={{ flex: 6.5, background: CATEGORIES[1].color }} />
            <div style={{ flex: 5, background: CATEGORIES[2].color }} />
            <div style={{ flex: 10, background: CATEGORIES[3].color }} />
          </div>
          {pos !== null && (
            <div aria-hidden="true" style={{ position: 'absolute', top: -4, left: `calc(${pos}% - 9px)`, width: 18, height: 18, borderRadius: '50%', background: 'var(--ink)', border: '3px solid var(--white)', boxShadow: 'var(--shadow-sm)' }} />
          )}
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.375rem 1rem', fontSize: '0.875rem', color: 'var(--ink-2)' }}>
          {CATEGORIES.map(c => (
            <li key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: cat?.label === c.label ? 700 : 400 }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: c.color, flexShrink: 0 }} />
              {c.label} {c.range}
            </li>
          ))}
        </ul>

        <div style={{ background: 'var(--base)', borderRadius: 'var(--radius-md)', padding: '0.875rem 1rem', fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: '1rem' }}>
          {bmi === null && 'Enter your height and weight to view your BMI and recommendations.'}
          {bmi !== null && bmi >= 30 && (
            <>Your BMI is in a range where you <strong style={{ color: 'var(--ink)' }}>may qualify</strong> for GLP-1 medical weight loss treatment. A licensed clinician makes the final decision after reviewing your full health history.</>
          )}
          {bmi !== null && bmi >= 27 && bmi < 30 && (
            <>With a BMI of 27 or higher, you <strong style={{ color: 'var(--ink)' }}>may qualify</strong> for GLP-1 treatment if you also have a weight-related condition (such as high blood pressure, type 2 diabetes, or high cholesterol). A licensed clinician makes the final decision.</>
          )}
          {bmi !== null && bmi < 27 && (
            <>Standard GLP-1 weight loss treatment is typically considered at a BMI of 30, or 27 with a weight-related condition. A clinician can still talk through options such as low-dose GLP-1 microdosing or other wellness support that may fit your goals.</>
          )}
        </div>
        <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
          <Link href="/consult" style={{ padding: '12px 22px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: '0.9375rem' }}>
            Book a {PRICES.consult.initial.label} consultation →
          </Link>
          <Link href="/glp-1microdosing" style={{ padding: '12px 22px', borderRadius: 999, border: '1px solid var(--border)', color: 'var(--ink)', fontWeight: 600, textDecoration: 'none', fontSize: '0.9375rem' }}>
            Explore GLP-1 microdosing
          </Link>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.5, marginTop: '0.875rem' }}>
          BMI is a screening estimate and does not account for muscle mass, age, or body composition. This tool is informational only and is not medical advice.
        </p>
      </div>
    </div>
  )
}
