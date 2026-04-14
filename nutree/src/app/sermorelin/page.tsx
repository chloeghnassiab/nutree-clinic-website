import type { Metadata } from 'next'
import Image from 'next/image'
import { PRICES } from '@/lib/prices.config'
import {
  PromoBanner, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, HowItWorks,
  ScienceGrid, Testimonials, AlsoFromNutree, FAQSection,
  PageLegal, ConsultBand, InStockBadge,
} from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'Sermorelin — Growth Hormone Support, Energy & Recovery',
  description: 'Physician-prescribed Sermorelin — supports your body\'s own growth hormone release for energy, recovery, lean muscle, and better sleep. Florida telehealth.',
}

const P = PRICES

export default function SermorelinPage() {
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
          {/* ✅ CORRECTED: outcome-first, no "pituitary" in headline */}
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            More energy, stronger recovery, better sleep — from your own body
          </p>
          <PromoBanner />

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
            <PlanRow name="Monthly subscription" sub={`${P.sermorelin.monthly.firstLabel} · ${P.sermorelin.monthly.label} after`} price={P.sermorelin.monthly.firstLabel!} afterPrice={`${P.sermorelin.monthly.label} after`} best color="var(--ser-dark)" />
          </div>

          <div>
            <ProductBlockHeader>3-month plan · Best value</ProductBlockHeader>
            <PlanRow name={`3-month · ${P.sermorelin.threeMonth.label}`} sub={P.sermorelin.threeMonth.firstLabel} price="$125 first" afterPrice="then $175/mo" best color="var(--ser-dark)" />
          </div>
        </div>
      </div>

      <CTAArea />

      <BenefitsList color="var(--ser)" items={[
        'Supports your body\'s own growth hormone release — no synthetic hormones added',
        'Natural pulsatile release aligned with your sleep cycle',
        'Provider consultation and dose adjustments included',
        'Free expedited shipping on every order',
        '503A licensed pharmacy on every prescription',
      ]} />
      <TrustStrip />

      {/* ── FEATURE BAND — ✅ Eden-informed copy, outcome first ─── */}
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
          { title: 'Months 3–6 · Full results', desc: 'The most significant improvements in lean muscle, vitality, and overall well-being after a complete protocol.' },
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

      <FAQSection
        iconBg="var(--ser)" iconColor="var(--ser-dark)"
        items={[
          { q: 'How does Sermorelin differ from synthetic growth hormone?', a: 'Synthetic HGH replaces your growth hormone directly, bypassing your body\'s natural regulation. Sermorelin instead signals the gland in your brain that controls growth hormone production to release more of your own — keeping your body\'s natural feedback loops intact. This is why many providers prefer it as a more physiologic approach to growth hormone support.' },
          { q: 'How is Sermorelin administered?', a: 'A small subcutaneous injection self-administered at home — typically into the abdomen, on an empty stomach before bedtime, five nights per week. Your provider guides you through the technique at your first consultation.' },
          { q: 'Is Sermorelin FDA-approved?', a: 'Sermorelin was previously FDA-approved but the manufacturer discontinued it in 2006 for commercial reasons, not safety concerns. It remains available as a compounded medication from licensed 503A pharmacies. All prescriptions are issued at the sole clinical discretion of your licensed Nutree provider.' },
          { q: 'How long should I take it?', a: 'Most providers recommend 3–6 months for full results. The 10-week starter plan is a structured way to experience the initial effects. Your clinician will guide your plan based on your response and goals.' },
          { q: 'Is insurance required?', a: 'No. All Nutree Sermorelin plans are self-pay and FSA/HSA eligible.' },
        ]}
      />

      <PageLegal text="Compounded Sermorelin is not FDA-approved. Previously FDA-approved, discontinued by manufacturer in 2006 for commercial reasons. Off-label use must be prescribed and supervised by a licensed provider. Individual results vary. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand
        heading="Not sure which plan is right for you?"
        sub="30 min · licensed clinician"
      />
    </>
  )
}
