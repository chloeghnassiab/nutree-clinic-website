import type { Metadata } from 'next'
import Image from 'next/image'
import { PRICES } from '@/lib/prices.config'
import { CHECKOUT } from '@/lib/checkout.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, HowItWorks,
  ScienceGrid, AlsoFromNutree,
  PageLegal, ConsultBand, InStockBadge,
} from '@/components/ui/PageComponents'
import { ExplainerSection, BenefitGrid, NumberedSteps, SeoFAQ, faqsForPages } from '@/components/treatment/SeoBlocks'
import { SermorelinCompare, SermorelinDifference } from '@/components/treatment/SermorelinSections'
import { ImportantSafetyInfo, CONSULT_NEUTRAL } from '@/components/compliance'

const TITLE = 'Sermorelin Online | Lean Muscle, Sleep & Recovery | Nutree Clinic'
const DESCRIPTION = 'Clinician-guided compounded sermorelin (off-label) that may support natural growth hormone signaling, sleep, and recovery goals — prescribed only if appropriate, with ongoing medical support.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/sermorelin' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/sermorelin',
    images: [{ url: '/images/sermorelin-growth-hormone-therapy-nutreeclinic.png', alt: 'Sermorelin injectable therapy from Nutree Clinic' }],
  },
}

const P = PRICES
const PAGE = '/sermorelin'

export default function SermorelinPage() {
  const faqs = faqsForPages(FAQ_ITEMS, [PAGE])

  return (
    <>
      {/* ── HERO SPLIT ─────────────────────────────────────────────── */}
      <div className="hero-split">
        <div className="hero-photo gradient-ser">
          <InStockBadge />
          <Image
            src="/images/sermorelin-growth-hormone-therapy-nutreeclinic.png"
            alt="Sermorelin injectable therapy vial from Nutree Clinic"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="hero-right">
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ser-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>
            Clinician-guided hormone wellness
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
            Sermorelin Therapy
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            Personalized sermorelin care, guided by licensed clinicians — may support sleep, recovery, and lean-muscle goals (off-label use)
          </p>
          <PromoList />

          <div style={{ marginBottom: '0.625rem' }}>
            <ProductBlockHeader>Monthly plan</ProductBlockHeader>
            <PlanRow
              name="Monthly plan"
              sub="Billed every 4 weeks · medication · consultation · shipping"
              price={P.sermorelin.monthly.monthlyLabel}
              color="var(--ser-dark)"
              href={CHECKOUT.sermorelin} ctaLabel="Start Sermorelin"
            />
          </div>
        </div>
      </div>

      <CTAArea href={CHECKOUT.sermorelin} />

      <BenefitsList color="var(--ser)" items={[
        'Prompts your pituitary to release its own growth hormone, rather than replacing growth hormone directly',
        'Typically dosed at bedtime, when natural growth hormone release is highest',
        'Provider consultation and dose adjustments included',
        'Free expedited shipping on every order',
        '503A licensed pharmacy on every prescription',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <p style={{ padding: '0 1.25rem 1rem', background: 'var(--white)', fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
        Includes a personalized consultation, treatment, and home delivery. No membership. No hidden fees. No commitment.
        Subject to clinical approval — if not approved, your payment will be refunded.
      </p>
      <TrustStrip />

      {/* ── HOW DOES SERMORELIN WORK? (restored from live) ────────── */}
      <ExplainerSection
        eyebrow="Peptide therapy for recovery, sleep & vitality"
        title="How does Sermorelin work?"
        body={[
          'Sermorelin is a peptide that helps stimulate your body’s natural growth hormone signaling. At Nutree Clinic, treatment is prescribed off-label and monitored by licensed providers for patients whose goals include sleep, recovery, muscle tone, and healthy aging — with dosing adapted to your response. Evidence for these uses in adults is limited.',
        ]}
        image="/images/sermorelin-strength-recovery-nutreeclinic.jpg"
        imageAlt="Woman doing a barbell squat outdoors — Sermorelin therapy for strength, recovery, and lean muscle support"
        listTitle="Who is this for?"
        list={[
          'Support for deeper sleep and overnight recovery',
          'Muscle tone, body composition, and strength support',
          'Metabolism, energy, and healthy aging support',
          'Personalized care with provider-guided follow-up',
        ]}
        note="Sermorelin is available only if clinically appropriate. Your provider will review your health history, goals, and eligibility before prescribing a personalized protocol."
        accent="var(--ser)"
      />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--ser-mid) 0%, var(--ser) 55%, #FAE8D4 100%)"
        eyebrow="How it works"
        title="Working with your own growth hormone signaling."
        body="As growth hormone levels naturally decline with age, energy, muscle tone, and sleep quality often decline with them. Sermorelin works with your body's natural signalling to encourage the release of growth hormone. It acts on the gland in your brain that controls growth hormone production, prompting your body to make more of its own — rather than adding synthetic hormones directly."
        cards={[
          { icon: 'Moon', title: 'Nightly injection', desc: 'Small subcutaneous dose, 5 nights/week before sleep' },
          { icon: 'ArrowsClockwise', title: 'Natural rhythm', desc: 'Dosed to align with your body\'s nighttime growth hormone pulses' },
          { icon: 'TrendUp', title: 'Reviewed over time', desc: 'Any effects tend to develop gradually; your clinician reviews your response over several months' },
        ]}
      />

      {/* ── DISCOVER HOW SERMORELIN CAN SUPPORT (restored from live) ── */}
      <BenefitGrid
        eyebrow="Personalized peptide care, built around you"
        title="Discover how Sermorelin can support sleep & recovery"
        intro="Sermorelin therapy is often chosen by patients looking for a clinician-guided approach to recovery, sleep quality, body composition, and healthy aging support."
        items={[
          { title: 'Sleep quality support', desc: 'Growth hormone signaling plays a role in overnight repair and sleep. Some patients use sermorelin with the goal of more restful sleep; responses vary.' },
          { title: 'Recovery and resilience', desc: 'Patients often explore Sermorelin as part of a wellness plan designed to support recovery from physical stress, training, fatigue, and daily demands.' },
          { title: 'Muscle tone and body composition', desc: 'With the right lifestyle foundation, Sermorelin may help support lean muscle maintenance, strength goals, and a healthier body composition over time.' },
          { title: 'Healthy aging support', desc: 'Because growth hormone signaling naturally changes with age, some patients choose Sermorelin as part of a clinician-guided plan focused on long-term vitality.' },
        ]}
        disclaimer="This information is educational only and is not a promise of results. Eligibility, response, side effects, and outcomes vary. Your clinician will determine whether treatment is appropriate for you based on your medical history, goals, and clinical profile."
        accent="var(--ser)"
      />

      <HowItWorks
        gradient="linear-gradient(135deg, var(--ser-mid), var(--ser))"
        steps={[
          { title: 'Start low, at bedtime', desc: 'If prescribed, you begin with a small nightly injection as directed by your clinician.' },
          { title: 'Check in early', desc: 'Your clinician checks how you are tolerating treatment and whether any side effects need attention.' },
          { title: 'Adjust to your response', desc: 'Some patients report changes in sleep, energy, or recovery; others notice little. Your dose may be adjusted based on your response and any labs.' },
          { title: 'Decide together whether to continue', desc: 'Your clinician reviews your progress over several months. You can message your care team 7 days a week; for emergencies, call 911.' },
        ]}
      />

      <ScienceGrid
        eyebrow="The science"
        title="What Sermorelin does in the body."
        iconGradient="linear-gradient(135deg, var(--ser-mid), var(--ser))"
        items={[
          { icon: 'Barbell', title: 'Lean muscle support', desc: 'Growth hormone stimulates production of IGF-1, which is involved in muscle protein synthesis. Resistance training and protein remain the foundation for lean mass.' },
          { icon: 'Fire', title: 'Body composition', desc: 'Growth hormone plays a role in fat metabolism. Effects of sermorelin on body composition in adults have been studied only in small trials, and results vary.' },
          { icon: 'Lightning', title: 'Energy and metabolism', desc: 'Growth hormone and IGF-1 are involved in how the body uses energy. Any effect on day-to-day energy varies from person to person and is not guaranteed.' },
        ]}
      />

      {/* ── NEXT STEPS (restored from live) ──────────────────────── */}
      <NumberedSteps
        eyebrow="Simple, guided care"
        title="Next steps"
        accent="linear-gradient(135deg, var(--ser-mid), var(--ser))"
        steps={[
          { title: 'Digital Intake', desc: 'Tell us about your health history, lifestyle, and goals through our secure online portal.' },
          { title: 'Provider Review', desc: `${CONSULT_NEUTRAL} Your clinician determines whether Sermorelin therapy is appropriate for you.` },
          { title: 'Doorstep Delivery', desc: 'If appropriate, your personalized medication kit is shipped directly to your door with everything you need to begin.' },
          { title: 'Ongoing Support', desc: 'Your care doesn’t stop after delivery. Your clinician remains available to monitor your progress and adjust your treatment when needed.' },
        ]}
      />

      {/* ── BUYING-INTENT SECTIONS (restored from live) ───────────── */}
      <SermorelinCompare />
      <SermorelinDifference />

      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="Sermorelin pairs well with these treatments."
        items={[
          { name: 'NAD+ Therapy',    sub: 'Cellular energy · longevity · complements Sermorelin', href: '/nad+',          arrowColor: 'var(--nad-dark)', img: '/images/nad-plus-injectable-therapy-nutreeclinic-nav.png' },
          { name: 'B6 / B12',        sub: 'Performance, energy & neurological support',             href: '/b12',          arrowColor: 'var(--b12-dark)' },
          { name: 'GLP-1 Weight Loss',sub: 'Metabolic support — complements body composition goals',href: '/weight-loss', arrowColor: 'var(--glp-dark)', img: '/images/glp1-semaglutide-weight-loss-nutreeclinic-nav.png' },
        ]}
      />

      <SeoFAQ items={faqs} accent="var(--ser)" accentDark="var(--ser-dark)" />

      <ImportantSafetyInfo drugs={['sermorelin']} />

      <PageLegal text="Compounded sermorelin is prepared by state-licensed 503A compounding pharmacies. It is not FDA-approved, and the FDA does not review compounded drugs for safety, effectiveness, or quality. A sermorelin product was previously FDA-approved but is no longer marketed in the U.S. Use for sleep, recovery, body composition, or healthy aging is off-label and must be prescribed and supervised by a licensed provider; evidence for these uses is limited. Prescriptions are issued only if a licensed provider determines treatment is appropriate. Individual results vary. Care is available to patients located in Florida. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
