import type { Metadata } from 'next'
import Image from 'next/image'
import { PRICES } from '@/lib/prices.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, HowItWorks,
  ScienceGrid, Testimonials, AlsoFromNutree, FAQSection,
  PageLegal, ConsultBand, InStockBadge,
} from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'Sermorelin — Growth Hormone Support, Energy & Recovery',
  description: 'Physician-prescribed Sermorelin injections — supports your body\'s own growth hormone release for energy, recovery, lean muscle, and better sleep. Florida telehealth.',
}

const P = PRICES
const PAGE = '/sermorelin'

export default function SermorelinPage() {
  const faqs = FAQ_ITEMS
    .filter(f => f.active && f.pages.includes(PAGE))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))

  return (
    <>
      {/* ── HERO SPLIT ─────────────────────────────────────────────── */}
      <div className="hero-split">
        <div className="hero-photo gradient-ser">
          <InStockBadge />
          <Image
            src="/images/sermorelin-growth-hormone-therapy-nutreeclinic.png"
            alt="Sermorelin therapy"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="hero-right">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
            Sermorelin
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            More energy, stronger recovery, better sleep — from your own body
          </p>
          <PromoList />

          <div style={{ marginBottom: '0.625rem' }}>
            <ProductBlockHeader>10-week starter plan</ProductBlockHeader>
            <div className="plan-row" style={{ borderColor: 'var(--ser-dark)', borderWidth: 1.5 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: 'var(--ink)' }}>10-week programme</div>
                <span style={{ fontSize: "0.875rem", color: 'var(--ink-3)', display: 'block', marginTop: 1 }}>Medication · consultation · shipping · no auto-renewal</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: 'var(--ser-dark)' }}>{P.sermorelin.tenWeek.label}</div>
                <div style={{ fontSize: "1rem", color: 'var(--ink-3)' }}>{P.sermorelin.tenWeek.subLabel}</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '0.625rem' }}>
            <ProductBlockHeader>Monthly plan</ProductBlockHeader>
            <PlanRow
              name="Monthly subscription"
              sub="Cancel anytime"
              price={P.sermorelin.monthly.monthlyLabel}
              color="var(--ser-dark)"
            />
          </div>

          <div>
            <ProductBlockHeader>3-month plan · Best value</ProductBlockHeader>
            <PlanRow
              name={`3-month · ${P.sermorelin.threeMonth.totalLabel}`}
              sub={`${P.sermorelin.threeMonth.monthlyLabel} · medication · consultation · shipping`}
              price={P.sermorelin.threeMonth.monthlyLabel}
              afterPrice={P.sermorelin.threeMonth.savingsLabel || undefined}
              best
              color="var(--ser-dark)"
            />
          </div>
        </div>
      </div>

      <CTAArea />

      <BenefitsList color="var(--ser)" items={[
        'Injectable delivery — supports your body\'s own growth hormone release, no synthetic hormones added',
        'Natural pulsatile release aligned with your sleep cycle',
        'Provider consultation and dose adjustments included',
        'Free expedited shipping on every order',
        '503A licensed pharmacy on every prescription',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <TrustStrip />

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
          { name: 'NAD+ Therapy',    sub: 'Cellular energy · longevity · complements Sermorelin', href: '/nad',          arrowColor: 'var(--nad-dark)', img: '/images/nad-plus-injectable-therapy-nutreeclinic-nav.png' },
          { name: 'B6 / B12',        sub: 'Performance, energy & neurological support',             href: '/b12',          arrowColor: 'var(--b12-dark)' },
          { name: 'GLP-1 Weight Loss',sub: 'Metabolic support — complements body composition goals',href: '/weight-loss', arrowColor: 'var(--glp-dark)', img: '/images/glp1-semaglutide-weight-loss-nutreeclinic-nav.png' },
        ]}
      />

      {faqs.length > 0 && (
        <FAQSection
          iconBg="var(--ser)"
          iconColor="var(--ser-dark)"
          items={faqs}
        />
      )}

      <PageLegal text="Compounded Sermorelin is not FDA-approved. Previously FDA-approved, discontinued by manufacturer in 2006 for commercial reasons. Off-label use must be prescribed and supervised by a licensed provider. Individual results vary. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand
        heading="Ready to take the next step?"
        sub="Your clinician reviews your intake and issues your prescription. If they have any questions, they will reach out directly."
      />
    </>
  )
}
