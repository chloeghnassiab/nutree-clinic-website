import type { Metadata } from 'next'
import { FAQ_ITEMS } from '@/lib/faq.config'
import { FLORIDA_HUB_PATH } from '@/lib/florida-cities.config'
import { CTAArea, BenefitsList, TrustStrip, PageLegal, ConsultBand } from '@/components/ui/PageComponents'
import {
  MicrodosingHero, PlanFinePrint, MicrodosingComparison, MicrodosingBenefits,
  HowMicrodosingWorks, MicrodosingAtAGlance, StatewideCare, CityDirectory, MICRODOSING_LEGAL,
} from '@/components/microdosing/MicrodosingSections'
import { FaqList } from '@/components/microdosing/FaqList'
import { JsonLd, faqPageSchema, medicalBusinessSchema, breadcrumbSchema, FLORIDA_STATE } from '@/components/microdosing/schema'
import { ImportantSafetyInfo } from '@/components/compliance'

const PAGE = FLORIDA_HUB_PATH
const TITLE = 'GLP-1 Microdosing Florida | Semaglutide & Tirzepatide'
const DESCRIPTION =
  'Clinician-guided GLP-1 microdosing for Florida residents. Low weekly dose semaglutide or tirzepatide, 100% online, shipped free statewide.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE,
    images: [{ url: '/images/microdosing/glp-1-microdosing-og.png', width: 1024, height: 538, alt: 'Nutree Clinic GLP-1 microdosing vial' }],
  },
}

export default function FloridaMicrodosingPage() {
  const faqs = FAQ_ITEMS
    .filter(f => f.active && f.pages.includes(PAGE))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))

  return (
    <>
      <JsonLd data={[
        medicalBusinessSchema({
          path: PAGE,
          description: 'Clinician-guided GLP-1 microdosing for Florida residents. Low weekly dose semaglutide or tirzepatide to support appetite regulation and metabolic balance, delivered 100% online.',
          areaServed: FLORIDA_STATE,
        }),
        faqPageSchema(faqs),
        breadcrumbSchema([
          { name: 'GLP-1 Microdosing', path: '/glp-1microdosing' },
          { name: 'Florida', path: PAGE },
        ]),
      ]} />

      <MicrodosingHero
        eyebrow="Clinician-guided metabolic support · Florida"
        h1="GLP-1 Microdosing in Florida"
        subtitle="Clinician-guided GLP-1 microdosing for Florida residents. A licensed provider reviews your intake; a video or phone visit may be required depending on your treatment and Florida rules."
      />

      <CTAArea />
      <PlanFinePrint />

      <BenefitsList color="var(--glp)" items={[
        'Filled by state-licensed 503A pharmacies',
        'No membership, no hidden fees',
        'Consultation and shipping included — free delivery statewide',
        'No commitment — fixed program, no auto-renewal',
        '100% online with Florida-licensed clinicians — no waiting rooms, no commute',
      ]} />
      <TrustStrip />

      <MicrodosingComparison />

      <MicrodosingBenefits heading="Why some Floridians choose a lower-dose GLP-1 approach" />

      <HowMicrodosingWorks />

      <MicrodosingAtAGlance />

      <StatewideCare />

      <CityDirectory />

      <FaqList items={faqs} />

      <ImportantSafetyInfo drugs={['glp1']} />

      <PageLegal text={MICRODOSING_LEGAL} />

      <ConsultBand />
    </>
  )
}
