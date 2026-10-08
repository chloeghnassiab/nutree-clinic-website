// Small "Prescription only · Important Safety Information" line placed next to
// a CTA, linking to the ISI section on the same page (Eden/Ro pattern).
import { ISI_ANCHOR } from './copy'

export function SafetyInfoLink({ align = 'center', tone = 'dark' }: { align?: 'left' | 'center'; tone?: 'dark' | 'light' }) {
  const color = tone === 'light' ? 'rgba(255,255,255,0.7)' : 'var(--ink-3)'
  return (
    <div style={{ fontSize: '0.8125rem', color, textAlign: align, lineHeight: 1.5 }}>
      Prescription only, if appropriate after provider review ·{' '}
      <a href={`#${ISI_ANCHOR}`} style={{ color, fontWeight: 700, textDecoration: 'underline' }}>
        Important Safety Information
      </a>
    </div>
  )
}
