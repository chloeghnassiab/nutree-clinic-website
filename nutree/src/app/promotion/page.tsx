import type { Metadata } from 'next'
import Link from 'next/link'
import { OfferHero, HowSection, BenefitsSection, StepsSection, LandingFAQ } from '@/components/utility/LandingSections'
import { IMG, MICRODOSING } from '@/components/utility/landingContent'

export const metadata: Metadata = {
  title: { absolute: 'Tirzepatide Microdosing Promotion | Nutree Clinic' },
  description: 'Limited-time tirzepatide microdosing promotion: 5 weeks of clinician-guided treatment with medication and home delivery included. Subject to medical evaluation.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/promotion' },
}

const CTA = '/discover-mk7pl4'
const p: React.CSSProperties = { marginBottom: '0.875rem' }

export default function PromotionPage() {
  return (
    <>
      {/* Promo bar (live had a countdown timer that has already expired; shown as static text) */}
      <div style={{ background: 'var(--promo-bg)', borderBottom: '1px solid var(--promo-border)', padding: '0.75rem 1.25rem', textAlign: 'center', fontSize: '0.9375rem', color: 'var(--ink)' }}>
        <strong>Nutree Clinic Labor Day Special</strong> · Tirzepatide Microdosing — $109 for 5 weeks · Limited-time offer ·{' '}
        <Link href="/getpromotion" style={{ color: 'var(--ink)', fontWeight: 700 }}>GET THIS OFFER</Link>
      </div>
      <OfferHero
        eyebrow="Labor Day special — limited time"
        title="Tirzepatide Microdosing"
        tagline="5 weeks of clinician-guided treatment with medication and home delivery included"
        price={
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--glp-dark)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Labor Day price</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--glp-dark)', lineHeight: 1 }}>$109</div>
            <div style={{ fontSize: '0.9375rem', color: 'var(--ink-2)' }}>for 5 weeks · Limited-time promotional pricing</div>
          </div>
        }
        cta={{ href: '/getpromotion', label: 'GET THIS OFFER' }}
        intro="GLP-1 microdosing uses a low weekly dose as part of a personalized treatment plan designed to support appetite regulation, metabolic health, and your individual goals."
        fineprint="Promotional price applies to the eligible 5-week tirzepatide microdosing program. Prescription treatment requires medical evaluation and eligibility. Individual treatment plans and results vary. Offer available for a limited time and subject to promotional terms."
        image={{ ...IMG.glpVial, alt: 'Tirzepatide microdosing treatment vial from Nutree Clinic' }}
      />

      <section style={{ padding: '2.5rem 1.25rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.75 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '0.25rem' }}>Promotion Terms</h2>
          <p style={{ ...p, fontWeight: 700, color: 'var(--ink)' }}>Nutree Clinic LLC</p>
          <p style={p}>Promotional pricing and discounts are available for a limited time and may be subject to availability, patient eligibility, treatment eligibility, and other offer-specific conditions.</p>
          <p style={p}>Prescription treatments require evaluation by a licensed medical provider and are available only when medically appropriate. Responding to or purchasing a promotion does not guarantee that a prescription treatment will be prescribed.</p>
          <p style={p}>Promotions may be limited to new patients, a specified number of patients, particular treatments, or a defined promotional period, as stated in the applicable offer. Unless expressly stated otherwise, promotions cannot be combined with other discounts, credits, or offers.</p>
          <p style={p}>Individual results vary and are not guaranteed. Compounded medications, when prescribed, are not FDA-approved and are prescribed only when determined medically appropriate by the treating provider.</p>
          <p style={p}>For complete website terms, please see <Link href="/terms-of-use" style={{ color: 'var(--teal-dark)', textDecoration: 'underline' }}>Nutree Clinic Terms of Use</Link>.</p>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--ink)', margin: '1.5rem 0 0.5rem' }}>Florida Discounted Treatment Notice</h3>
          <p style={{ ...p, fontWeight: 600 }}>THE PATIENT AND ANY OTHER PERSON RESPONSIBLE FOR PAYMENT HAS A RIGHT TO REFUSE TO PAY, CANCEL PAYMENT, OR BE REIMBURSED FOR PAYMENT FOR ANY OTHER SERVICE, EXAMINATION, OR TREATMENT THAT IS PERFORMED AS A RESULT OF AND WITHIN 72 HOURS OF RESPONDING TO THE ADVERTISEMENT FOR THE FREE, DISCOUNTED FEE, OR REDUCED FEE SERVICE, EXAMINATION, OR TREATMENT.</p>
        </div>
      </section>

      <BenefitsSection {...MICRODOSING.benefits} cta={CTA} />
      <HowSection {...MICRODOSING.how} cta={CTA} />
      <StepsSection steps={MICRODOSING.steps} cta={CTA} />
      <LandingFAQ items={MICRODOSING.faq} />
    </>
  )
}
