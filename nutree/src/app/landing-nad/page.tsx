import type { Metadata } from 'next'
import { OfferHero, HowSection, BenefitsSection, StepsSection, LandingFAQ } from '@/components/utility/LandingSections'
import { IMG, NAD } from '@/components/utility/landingContent'
import { PRICES } from '@/lib/prices.config'

export const metadata: Metadata = {
  title: { absolute: 'NAD+ Therapy | Nutree Clinic' },
  description: 'Clinician-guided NAD+ injection therapy to support cellular energy, mental clarity, and healthy aging. Consultation and shipping included.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/nad+' },
}

// Live links to /discover-T8vN3z (mixed case); we use the lowercase route.
const CTA = '/discover-t8vn3z'

export default function LandingNadPage() {
  return (
    <>
      <OfferHero
        eyebrow="Clinician-guided cellular wellness"
        title={<>NAD<sup>+</sup> Therapy</>}
        price={
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nad-dark)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Monthly Plan</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--nad-dark)' }}>{PRICES.nadInjectable.monthly.shortLabel}</div>
            <div style={{ fontSize: '0.9375rem', color: 'var(--ink-2)' }}>Billed every 4 weeks</div>
          </div>
        }
        cta={{ href: CTA, label: 'Start NAD+ now' }}
        intro="NAD+ injectable therapy is designed to help support cellular energy, mental clarity, and healthy aging with a personalized, clinician-guided approach."
        fineprint={<>Includes a personalized video consultation, treatment, and home delivery.<br />No membership. No hidden fees. No commitment.</>}
        image={IMG.nadVial}
        background="linear-gradient(160deg, var(--nad) 0%, var(--base) 60%)"
      />
      <HowSection {...NAD.how} cta={CTA} />
      <BenefitsSection {...NAD.benefits} cta={CTA} />
      <StepsSection steps={NAD.steps} cta={CTA} />
      <LandingFAQ items={NAD.faq} />
    </>
  )
}
