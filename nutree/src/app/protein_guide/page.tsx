import type { Metadata } from 'next'
import { ProteinGuideForm } from '@/components/utility/ProteinGuideForm'

export const metadata: Metadata = {
  title: { absolute: 'Free Protein Guide for Weight Loss | GLP-1 Nutrition' },
  description: 'Download your free protein guide optimized for GLP-1 therapy. Nutrition tips to maximize results, preserve muscle, and support healthy weight loss.',
  alternates: { canonical: '/protein_guide' },
}

export default function ProteinGuidePage() {
  return (
    <section style={{ padding: '2.5rem 1.25rem 3rem', background: 'linear-gradient(160deg, var(--nad) 0%, var(--base) 55%)' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem', alignItems: 'start' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 6vw, 3.25rem)', color: 'var(--ink)', lineHeight: 1.05, marginBottom: '1rem' }}>
            Get Your Free<br /><span style={{ color: 'var(--nad-dark)' }}>Protein &amp; Portion Guide</span>
          </h1>
          <p style={{ fontSize: '1.0625rem', color: 'var(--ink)', fontWeight: 600, lineHeight: 1.6, marginBottom: '0.75rem' }}>
            Unlock the key to maintaining strength and metabolism while on your weight-loss journey.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>
            Our clinician-designed guide helps you understand how much protein your body needs, which foods support lean muscle, and how to build balanced, satisfying meals — even with a smaller appetite.
          </p>
        </div>
        <ProteinGuideForm />
      </div>
    </section>
  )
}
