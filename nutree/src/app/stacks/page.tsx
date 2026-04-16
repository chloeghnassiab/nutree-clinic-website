import type { Metadata } from 'next'
import Link from 'next/link'
import { STACKS } from '@/lib/stacks.config'
import { ConsultBand } from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'Treatment Stacks — Protocols Designed for Real Goals | Nutree Clinic',
  description: 'Curated multi-treatment protocols from Nutree Clinic. Weight loss, longevity, and performance stacks designed to address your health goals at every level.',
}

export default function StacksPage() {
  return (
    <>
      <section style={{ padding: '2.5rem 1.25rem 1.5rem', background: 'var(--base)' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>
          Recommended protocols
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
          Treatment stacks.
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.65, maxWidth: 480, marginBottom: '1rem' }}>
          Each stack is a curated combination of treatments addressing a specific health goal. Your clinician tailors the exact protocol to your health profile.
        </p>
      </section>

      <section style={{ padding: '0 1.25rem 2.5rem', background: 'var(--base)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {STACKS.map(stack => (
            <div key={stack.id} style={{ background: 'var(--white)', borderRadius: 16, border: '0.5px solid var(--border)', overflow: 'hidden' }}>
              {/* Header band */}
              <div style={{ background: stack.color, padding: '1.25rem 1.25rem 1rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: stack.darkColor, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.375rem' }}>
                  {stack.tagline}
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '0.625rem' }}>
                  {stack.name}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {stack.products.map((product, i) => (
                    <Link key={i} href={stack.hrefs[i]}
                      style={{ fontSize: '0.8125rem', fontWeight: 700, padding: '4px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.7)', color: stack.darkColor, textDecoration: 'none' }}>
                      {product}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.25rem' }}>
                <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  {stack.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: stack.darkColor }}>{stack.price}</div>
                  <Link href={stack.hrefs[0]}
                    style={{ padding: '10px 20px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none' }}>
                    Start with {stack.products[0]} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ConsultBand />
    </>
  )
}
