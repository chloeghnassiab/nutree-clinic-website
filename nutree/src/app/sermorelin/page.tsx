import type { Metadata } from 'next'
import Image from 'next/image'
import { PRICES } from '@/lib/prices.config'
import { CHECKOUT } from '@/lib/checkout.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, HowItWorks,
  ScienceGrid, Testimonials, AlsoFromNutree,
  PageLegal, ConsultBand, InStockBadge,
} from '@/components/ui/PageComponents'
import { ExplainerSection, BenefitGrid, NumberedSteps, SeoFAQ, faqsForPages } from '@/components/treatment/SeoBlocks'
import { SermorelinCompare, SermorelinDifference } from '@/components/treatment/SermorelinSections'

const TITLE = 'Sermorelin Online | Lean Muscle, Sleep & Recovery | Nutree Clinic'
const DESCRIPTION = 'Clinician-guided sermorelin therapy to support natural growth hormone signaling, muscle strength, recovery, sleep quality, and healthy aging — delivered to your door with ongoing medical support.'

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
            Personalized sermorelin care, guided by real clinicians — support for sleep, recovery, and lean muscle from your own body
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
        'Injectable delivery — supports your body\'s own growth hormone release, no synthetic hormones added',
        'Natural pulsatile release aligned with your sleep cycle',
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
          'Sermorelin is a peptide that helps stimulate your body’s natural growth hormone signaling. At Nutree Clinic, treatment is prescribed and monitored by licensed providers to support better sleep, recovery, metabolism, muscle tone, and healthy aging — with dosing adapted to your goals and response.',
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
        title="Growth hormone, restored naturally."
        body="As growth hormone levels naturally decline with age, energy, muscle tone, and sleep quality often decline with them. Sermorelin works with your body's natural signalling to encourage the release of growth hormone — helping restore what time has gradually reduced. It acts on the gland in your brain that controls growth hormone production, prompting your body to make more of its own — rather than adding synthetic hormones directly."
        cards={[
          { icon: 'Moon', title: 'Nightly injection', desc: 'Small subcutaneous dose, 5 nights/week before sleep' },
          { icon: 'ArrowsClockwise', title: 'Natural rhythm', desc: 'Growth hormone released in pulses aligned with your sleep cycle' },
          { icon: 'TrendUp', title: 'Builds over time', desc: 'Full results develop over 3–6 months of consistent use' },
        ]}
      />

      {/* ── DISCOVER HOW SERMORELIN CAN SUPPORT (restored from live) ── */}
      <BenefitGrid
        eyebrow="Personalized peptide care, built around you"
        title="Discover how Sermorelin can support sleep & recovery"
        intro="Sermorelin therapy is often chosen by patients looking for a clinician-guided approach to recovery, sleep quality, body composition, and healthy aging support."
        items={[
          { title: 'Sleep quality support', desc: 'Sermorelin supports the body’s natural growth hormone signaling, which plays a role in overnight repair, deeper rest, and recovery while you sleep.' },
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
          { title: 'Weeks 1–2 · Deeper sleep', desc: 'Most patients notice more restful, deeper sleep within the first two weeks — the first sign that growth hormone production is responding.' },
          { title: 'Weeks 3–6 · Energy and recovery', desc: 'Increased energy, faster recovery after exercise, and a general sense of vitality as growth hormone levels continue to build.' },
          { title: 'Months 2–3 · Body composition', desc: 'Visible changes in muscle tone and body fat distribution alongside consistent exercise and nutrition.' },
          { title: 'Months 3–6 · Full results', desc: 'The most significant improvements in lean muscle, vitality, and overall well-being after a complete protocol. Your clinician is available 7 days a week via direct message throughout.' },
        ]}
      />

      <ScienceGrid
        eyebrow="The science"
        title="What Sermorelin does in the body."
        iconGradient="linear-gradient(135deg, var(--ser-mid), var(--ser))"
        items={[
          { icon: 'Barbell', title: 'Lean muscle support', desc: 'Higher growth hormone levels support the production of IGF-1, which helps with muscle protein synthesis — supporting lean mass alongside resistance training.' },
          { icon: 'Fire', title: 'Body composition improvement', desc: 'Growth hormone plays a direct role in fat metabolism. Many patients notice a gradual shift in body composition — particularly around the midsection.' },
          { icon: 'Lightning', title: 'Sustained energy and vitality', desc: 'Restored growth hormone levels support mitochondrial function and metabolic health — translating to more stable energy throughout the day.' },
        ]}
      />

      {/* ── NEXT STEPS (restored from live) ──────────────────────── */}
      <NumberedSteps
        eyebrow="Simple, guided care"
        title="Next steps"
        accent="linear-gradient(135deg, var(--ser-mid), var(--ser))"
        steps={[
          { title: 'Digital Intake', desc: 'Tell us about your health history, lifestyle, and goals through our secure online portal.' },
          { title: 'Video Consultation', desc: 'Meet with your clinician to discuss your goals and determine whether Sermorelin therapy is right for you.' },
          { title: 'Doorstep Delivery', desc: 'If appropriate, your personalized medication kit is shipped directly to your door with everything you need to begin.' },
          { title: 'Ongoing Support', desc: 'Your care doesn’t stop after delivery. Your clinician remains available to monitor your progress and adjust your treatment when needed.' },
        ]}
      />

      {/* ── BUYING-INTENT SECTIONS (restored from live) ───────────── */}
      <SermorelinCompare />
      <SermorelinDifference />

      <Testimonials
        tagColor="var(--ser)" tagDarkColor="var(--ser-dark)"
        items={[
          { quote: 'Sleep changed first — deeper, more restorative than it had been in years. By month two the difference in my workouts was undeniable. The care team stayed involved the entire time.', author: 'Carlos G., 44 · Nutree Clinic patient', tag: 'Sermorelin · Monthly plan' },
        ]}
      />

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

      <PageLegal text="Compounded Sermorelin is not FDA-approved. Previously FDA-approved, discontinued by manufacturer in 2006 for commercial reasons. Off-label use must be prescribed and supervised by a licensed provider. Individual results vary. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
