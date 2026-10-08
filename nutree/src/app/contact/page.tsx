import type { Metadata } from 'next'
import { ConsultContent } from '../consult/ConsultContent'
import { PRICES } from '@/lib/prices.config'

const CONSULT = PRICES.consult.initial.label

export const metadata: Metadata = {
  title: { absolute: `Contact Nutree Clinic | Book Your ${CONSULT} Consultation` },
  description: `Contact Nutree Clinic and book a ${CONSULT} consultation with a licensed Florida clinician. Your ${CONSULT} consult fee is credited toward your first treatment plan.`,
  alternates: { canonical: '/contact' },
}

// Contact details: the live /contact page lists none; these come from the live
// Refund Policy (contact@), Privacy Policy (privacy@, mailing address) and site header (patient login).
const DETAILS = [
  { label: 'General questions', value: 'contact@nutreeclinic.com', href: 'mailto:contact@nutreeclinic.com' },
  { label: 'Privacy requests', value: 'privacy@nutreeclinic.com', href: 'mailto:privacy@nutreeclinic.com' },
  { label: 'Existing patients', value: 'Log in to your patient portal', href: 'https://secure.gethealthie.com/go/nutreeclinic' },
]

export default function ContactPage() {
  return (
    <>
      <ConsultContent />
      <section style={{ padding: '2rem 1.25rem 2.5rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
          Contact details
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
          {DETAILS.map(d => (
            <a key={d.label} href={d.href}
              {...(d.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={{ display: 'block', background: 'var(--base)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1rem', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', fontWeight: 600, marginBottom: 4 }}>{d.label}</div>
              <div style={{ fontSize: '1rem', color: 'var(--ink)', fontWeight: 600, overflowWrap: 'anywhere' }}>{d.value}</div>
            </a>
          ))}
        </div>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.65 }}>
          Mail: NUTREE CLINIC, LLC · P.O. Box 414262, Miami Beach, FL 33141
        </p>
      </section>
    </>
  )
}
