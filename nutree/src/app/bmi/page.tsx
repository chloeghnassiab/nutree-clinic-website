import type { Metadata } from 'next'
import Link from 'next/link'
import { BmiCalculator } from '@/components/utility/BmiCalculator'
import { MicrodosingPlans } from '@/components/utility/LandingSections'

export const metadata: Metadata = {
  title: { absolute: 'Free BMI Calculator | Check Your Eligibility | Nutree Clinic' },
  description: 'Calculate your BMI instantly and see if you qualify for medical weight loss treatment. Free tool with personalized recommendations from licensed providers.',
  alternates: { canonical: '/bmi' },
}

export default function BmiPage() {
  return (
    <>
      <section style={{ padding: '2.5rem 1.25rem 2rem', background: 'linear-gradient(160deg, var(--glp) 0%, var(--base) 55%)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 6vw, 3.25rem)', color: 'var(--ink)', lineHeight: 1.05, marginBottom: '0.75rem' }}>
            Calculate your BMI
          </h1>
          <p style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 560, marginBottom: '1.25rem' }}>
            Your BMI can help you and your clinician better understand your body composition and health goals.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href="/consult" style={{ padding: '14px 28px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontWeight: 700, textDecoration: 'none' }}>Get Started</Link>
            <Link href="/glp-1microdosing" style={{ padding: '14px 24px', borderRadius: 999, border: '1px solid var(--border)', background: 'var(--white)', color: 'var(--ink)', fontWeight: 600, textDecoration: 'none' }}>Learn More</Link>
          </div>
          <BmiCalculator />
        </div>
      </section>
      <MicrodosingPlans />
    </>
  )
}
