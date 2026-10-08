import type { Metadata } from 'next'
import { OfferHero, HowSection, BenefitsSection, StepsSection, LandingFAQ } from '@/components/utility/LandingSections'
import { IMG, MICRODOSING } from '@/components/utility/landingContent'
import { PRICES } from '@/lib/prices.config'
import { CHECKOUT } from '@/lib/checkout.config'

// /promotion is kept because it is printed on QR codes / used in ads. The expired
// Labor Day offer ($109 for 5 weeks) was removed in Oct 2026; the page now presents
// the standard tirzepatide microdosing plan at its regular price.
export const metadata: Metadata = {
  title: { absolute: 'Tirzepatide Microdosing | Nutree Clinic' },
  description: 'Clinician-guided tirzepatide microdosing: a 10-week plan with consultation, medication, and home delivery included. Subject to medical evaluation.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/promotion' },
}

const CTA = '/discover-mk7pl4'
const TIRZ = PRICES.microDosingTirz.tenWeek

export default function PromotionPage() {
  return (
    <>
      <OfferHero
        eyebrow="Clinician-guided metabolic support"
        title="Tirzepatide Microdosing"
        tagline="10 weeks of clinician-guided treatment with medication and home delivery included"
        price={
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--glp-dark)', lineHeight: 1 }}>{TIRZ.priceLabel}</div>
            <div style={{ fontSize: '0.9375rem', color: 'var(--ink-2)' }}>for 10 weeks · {TIRZ.perWeekLabel}</div>
          </div>
        }
        cta={{ href: CHECKOUT.tirzepatideMicrodosing, label: 'Buy Tirzepatide now' }}
        intro="GLP-1 microdosing uses a low weekly dose as part of a personalized treatment plan designed to support appetite regulation, metabolic health, and your individual goals."
        fineprint="Prescription treatment requires medical evaluation and eligibility. Individual treatment plans and results vary."
        image={{ ...IMG.glpVial, alt: 'Tirzepatide microdosing treatment vial from Nutree Clinic' }}
      />

      <BenefitsSection {...MICRODOSING.benefits} cta={CTA} />
      <HowSection {...MICRODOSING.how} cta={CTA} />
      <StepsSection steps={MICRODOSING.steps} cta={CTA} />
      <LandingFAQ items={MICRODOSING.faq} />
    </>
  )
}
