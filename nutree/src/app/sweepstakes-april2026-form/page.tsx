import type { Metadata } from 'next'
import Link from 'next/link'

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
        {/* The April 2026 giveaway has ended; its entry form (Jotform 260883085964167) is no longer embedded. */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '1.5rem', fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>
          <p style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>This giveaway has ended.</p>
          <p>
            Thank you to everyone who entered. Explore Nutree Clinic treatments on our{' '}
            <Link href="/" style={{ color: 'var(--teal-dark)', textDecoration: 'underline' }}>homepage</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
