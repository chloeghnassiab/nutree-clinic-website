'use client'
import { Star, SmileyMeh, Scales, MagnifyingGlass } from '@phosphor-icons/react'

const ITEMS = [
  { Icon: Star,            t: "You've never tried GLP-1 before",             d: 'Microdosing is the most comfortable way to experience GLP-1 therapy for the first time.' },
  { Icon: SmileyMeh,       t: 'You had side effects on standard dosing',      d: 'If you tried GLP-1 previously and stopped due to nausea, microdosing often resolves this completely.' },
  { Icon: Scales,          t: 'You have a smaller amount of weight to lose',  d: 'For patients closer to their goal weight, a lower dose is often clinically appropriate.' },
  { Icon: MagnifyingGlass, t: 'You want to try before committing to monthly plans', d: 'A 5 or 10-week programme lets you experience the medication with no ongoing obligation.' },
]

export function WhoItsFor() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {ITEMS.map(({ Icon, t, d }, i) => (
        <div key={i} style={{ display: 'flex', gap: '0.875rem', padding: '1rem', borderRadius: 12, background: 'var(--base)', border: '0.5px solid var(--border)', alignItems: 'flex-start' }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg, var(--glp-mid), var(--glp))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={18} weight="regular" color="var(--glp-dark)" />
          </div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{t}</div>
            <div style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>{d}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
