import type { Metadata } from 'next'
import { JotformEmbed } from '@/components/utility/JotformEmbed'

export const metadata: Metadata = {
  title: 'Giveaway Entry Form — April 2026',
  description: 'Enter the Nutree Clinic giveaway.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/sweepstakes-april2026-form' },
}

export default function SweepstakesApril2026FormPage() {
  return (
    <section style={{ padding: '2rem 1rem 3rem', background: 'var(--base)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--ink)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
          Nutree Clinic Giveaway
        </h1>
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden' }}>
          {/* Same Jotform as live: form 260883085964167 */}
          <JotformEmbed formId="260883085964167" src="https://form.jotform.com/260883085964167" title="Nutree Clinic - Giveaway" />
        </div>
      </div>
    </section>
  )
}
