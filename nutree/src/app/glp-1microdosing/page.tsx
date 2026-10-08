import type { Metadata } from 'next'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  CTAArea, BenefitsList, TrustStrip, FeatureBand, ScienceGrid,
  Testimonials, AlsoFromNutree, PageLegal, ConsultBand,
} from '@/components/ui/PageComponents'
import {
  MicrodosingHero, PlanFinePrint, MicrodosingComparison, MicrodosingBenefits,
  HowMicrodosingWorks, MicrodosingNextSteps, MicrodosingAtAGlance, CityDirectory,
  MICRODOSING_LEGAL,
} from '@/components/microdosing/MicrodosingSections'
import { FaqList } from '@/components/microdosing/FaqList'
import { JsonLd, faqPageSchema, medicalBusinessSchema, FLORIDA_STATE } from '@/components/microdosing/schema'

const PAGE = '/glp-1microdosing'
const TITLE = 'Clinician-Guided GLP-1 Microdosing'
const DESCRIPTION =
  'A lower-dose protocol using semaglutide or tirzepatide, carefully guided by licensed providers to support appetite regulation and metabolic health.'

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

export default function GlpMicrodosingPage() {
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
      ]} />

      <MicrodosingHero
        eyebrow="Clinician-guided metabolic support"
        h1="GLP-1 Microdosing"
        subtitle="Real clinicians, real conversations — via video or phone. A gentler, lower-dose start with semaglutide or tirzepatide."
      />

      <CTAArea />
      <PlanFinePrint />

      <BenefitsList color="var(--glp)" items={[
        'Lower starting doses — some patients find side effects easier to manage',
        'Ideal for GLP-1 first-timers or those sensitive to standard dosing',
        'Licensed 503A pharmacy medications',
        'Consultation and shipping included · no membership, no hidden fees',
        'Fixed program — no auto-renewal, no ongoing commitment',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <TrustStrip />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--glp-mid) 0%, var(--glp) 55%, #DDF4FF 100%)"
        eyebrow="Why microdosing"
        title="Same medication. Gentler introduction."
        body="Standard GLP-1 dosing can cause nausea and digestive discomfort, especially during dose increases. Microdosing uses the same compounded semaglutide or tirzepatide at a lower dose, giving your body more time to adjust. Some patients find side effects more manageable this way — though they can still occur, and your clinician will monitor how you respond."
        cards={[
          { icon: 'Plant', title: 'Lower dose', desc: 'A fraction of the standard dose — your body adjusts gradually' },
          { icon: 'Smiley', title: 'A gentler start', desc: 'Fewer side effects for some patients; individual responses vary' },
          { icon: 'ClipboardText', title: 'Fixed program', desc: '5 or 10 weeks — clear start and end, no ongoing commitment' },
        ]}
      />

      <MicrodosingBenefits heading="Join thousands using GLP-1 to support metabolism & balance" />

      <HowMicrodosingWorks detailed />

      <MicrodosingComparison />

      <ScienceGrid
        eyebrow="The science"
        title="Same mechanism. Lower dose."
        iconGradient="linear-gradient(135deg, var(--glp-mid), var(--glp))"
        items={[
          { icon: 'Brain', title: 'GLP-1 receptor activation', desc: 'Microdosed semaglutide and tirzepatide act on the same receptor pathways as standard doses — signalling satiety, slowing gastric emptying, and supporting metabolic health.' },
          { icon: 'TrendDown', title: 'Gradual titration', desc: 'Lower doses give your body time to adapt. Your clinician may adjust your dose over the program if clinically appropriate.' },
          { icon: 'Scales', title: 'A measured approach', desc: 'For some patients — particularly those closer to their goal weight — a lower dose is the more appropriate clinical choice. Results are typically more gradual and vary from person to person.' },
        ]}
      />

      <MicrodosingNextSteps />

      <Testimonials
        tagColor="var(--glp)" tagDarkColor="var(--glp-dark)"
        items={[
          { quote: 'After 9 weeks on a microdosed GLP-1, I lost 9 pounds. I already feel lighter, confident, in control. With a team that supports me!', author: 'Courtney, 32 · Nutree Clinic patient', tag: 'GLP-1 Microdosing · 10-week', img: '/images/Courtney-nutree-clinic-patient-glp-1.jpeg', featured: true },
        ]}
      />
      <p style={{ background: 'var(--white)', margin: 0, padding: '0 2rem 1.5rem', fontSize: '0.875rem', color: 'var(--ink-3)', textAlign: 'center' }}>
        Courtney is a real Nutree Clinic patient who received complimentary treatment in exchange for sharing her honest experience.
      </p>

      <MicrodosingAtAGlance />

      <CityDirectory title="GLP-1 microdosing across Florida" />

      <AlsoFromNutree
        eyebrow="Ready for more?"
        title="After microdosing, some patients move to a full plan."
        items={[
          { name: 'What are GLP-1s?', sub: 'How semaglutide and tirzepatide work', href: '/glp-1', arrowColor: 'var(--glp-dark)' },
          { name: 'Compounded Semaglutide & Tirzepatide', sub: 'Standard weight-loss plans', href: '/weight-loss', arrowColor: 'var(--glp-dark)', img: '/images/glp1-semaglutide-weight-loss-nutreeclinic-nav.png' },
          { name: 'B6 / B12', sub: 'Energy support — pairs with GLP-1', href: '/b12', arrowColor: 'var(--b12-dark)' },
        ]}
      />

      <FaqList items={faqs} />

      <PageLegal text={MICRODOSING_LEGAL} />

      <ConsultBand />
    </>
  )
}
