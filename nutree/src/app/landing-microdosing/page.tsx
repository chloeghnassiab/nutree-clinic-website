import type { Metadata } from 'next'
import { OfferHero, HowSection, BenefitsSection, StepsSection, LandingFAQ } from '@/components/utility/LandingSections'
import { IMG, MICRODOSING } from '@/components/utility/landingContent'

export const metadata: Metadata = {
  title: { absolute: 'Clinician-Guided GLP-1 Microdosing' },
  description: 'A lower-dose protocol using semaglutide or tirzepatide, carefully guided by licensed providers to support appetite regulation and metabolic health.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/glp-1microdosing' },
}

// Ad landing page: CTAs go to the tracked discover variant, exactly as live.
const CTA = '/discover-mk7pl4'

export default function LandingMicrodosingPage() {
  return (
    <>
      <OfferHero
        eyebrow="Clinician-guided metabolic support"
        title="GLP-1 Microdosing"
        price={<div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--glp-dark)' }}>Starting at $35/week</div>}
        cta={{ href: CTA, label: 'Start Microdosing now' }}
        intro="GLP-1 microdosing uses a low weekly dose to help support appetite regulation and metabolic balance."
        fineprint={<>Includes a personalized video consultation, medication, and home delivery.<br />$35/week (semaglutide) or $45/week (tirzepatide) — 10-week plan, paid upfront.<br />No membership. No hidden fees. No commitment.</>}
        image={IMG.glpVial}
      />
      <HowSection {...MICRODOSING.how} cta={CTA} />
      <BenefitsSection {...MICRODOSING.benefits} cta={CTA} />
      <StepsSection steps={MICRODOSING.steps} cta={CTA} />
      <LandingFAQ items={MICRODOSING.faq} />
    </>
  )
}
