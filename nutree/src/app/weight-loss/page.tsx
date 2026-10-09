import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PRICES, PRICING_AT_CONSULT } from '@/lib/prices.config'
import { CHECKOUT, ELIGIBILITY_QUIZ } from '@/lib/checkout.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand,
  ScienceGrid, Testimonials, AlsoFromNutree,
  PageLegal, ConsultBand, Section, SectionHeader, InStockBadge,
} from '@/components/ui/PageComponents'
import { NumberedSteps, SeoFAQ, CTAButton, faqsForPages } from '@/components/treatment/SeoBlocks'
import { ImportantSafetyInfo, ResultsDisclaimer, CompoundedDisclosure, CONSULT_NEUTRAL } from '@/components/compliance'
import { REVIEWS } from '@/components/compliance/reviews'

const TITLE = 'Semaglutide & Tirzepatide for Weight Loss | Nutree Clinic'
const DESCRIPTION = 'Medical weight loss with semaglutide or tirzepatide when prescribed. Licensed provider review, personalized dosing if prescribed, ongoing follow-up.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/weight-loss' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/weight-loss',
    images: [{ url: '/images/glp1-semaglutide-weight-loss-nutreeclinic.png', alt: 'Compounded semaglutide and tirzepatide for medical weight loss' }],
  },
}

const P = PRICES
const PAGE = '/weight-loss'

export default function WeightLossPage() {
  const faqs = faqsForPages(FAQ_ITEMS, [PAGE])

  return (
    <>
      {/* ── HERO SPLIT ─────────────────────────────────────────────── */}
      <div className="hero-split">
        {/* LEFT — product photo on pastel gradient */}
        <div className="hero-photo gradient-glp">
          <InStockBadge />
          <Image
            src="/images/glp1-semaglutide-weight-loss-nutreeclinic.png"
            alt="GLP-1 weight loss medications — compounded semaglutide and tirzepatide"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* RIGHT — pricing */}
        <div className="hero-right">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8, letterSpacing: '-0.01em' }}>
            Medical Weight-Loss Programs
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            Medical care for lasting, healthy weight loss. Personalized semaglutide or tirzepatide treatment (if eligible), guided by your clinician.
          </p>

          <PromoList />

          {/* SEMAGLUTIDE */}
          <div style={{ marginBottom: '0.75rem' }}>
            <ProductBlockHeader>Compounded Semaglutide</ProductBlockHeader>
            <PlanRow
              name="Monthly plan" sub="Billed every 4 weeks · medication · consultation · shipping · cancel anytime"
              price={P.semaglutide.monthly.monthlyLabel}
              afterPrice={P.semaglutide.monthly.perWeekLabel}
              color="var(--glp-dark)"
              href={CHECKOUT.semaglutideWeightLoss} ctaLabel="Get semaglutide"
            />
          </div>

          {/* TIRZEPATIDE */}
          <div style={{ marginBottom: '0.75rem' }}>
            <ProductBlockHeader>Compounded Tirzepatide</ProductBlockHeader>
            <PlanRow
              name="Monthly plan" sub="Billed every 4 weeks · medication · consultation · shipping · cancel anytime"
              price={`From ${P.tirzepatide.monthly.monthlyLabel}`}
              afterPrice={P.tirzepatide.monthly.perWeekLabel}
              color="var(--glp-dark)"
              href={CHECKOUT.tirzepatideWeightLoss} ctaLabel="Get tirzepatide"
            />
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CTAArea href={CHECKOUT.semaglutideWeightLoss} label="Get started with semaglutide" secondaryHref={CHECKOUT.tirzepatideWeightLoss} secondaryLabel="Get started with tirzepatide" />
      <div style={{ background: 'var(--white)', textAlign: 'center', padding: '0 1.25rem 1rem' }}>
        <a href={ELIGIBILITY_QUIZ} style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--teal-dark)' }}>Check eligibility →</a>
      </div>

      {/* ── BENEFITS ──────────────────────────────────────────────── */}
      <BenefitsList color="var(--glp)" items={[
        'Clear plan pricing before you start — no hidden fees',
        'Free expedited shipping on every order',
        'Provider consultation and dose adjustments included',
        'Personalised dosing adjusted to your response and goals',
        'Filled by a state-licensed 503A pharmacy',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <div style={{ background: 'var(--white)', padding: '0 1.25rem 1rem' }}>
        <CompoundedDisclosure variant="glp1" withTrademarks={false} style={{ margin: 0 }} />
      </div>
      <TrustStrip />

      {/* ── FEATURE BAND ──────────────────────────────────────────── */}
      <FeatureBand
        gradient="linear-gradient(145deg, var(--glp-mid) 0%, var(--glp) 55%, #DDF4FF 100%)"
        eyebrow="What every plan includes"
        title="Your price. Your dose. Your plan."
        body="Every Nutree GLP-1 plan is built around you — medication, consultation, and shipping all included. Your plan price is shown before you start, with no hidden fees."
        cards={[
          { icon: 'Pill', title: 'Medication included', desc: 'Compounded by a state-licensed 503A pharmacy to your prescription' },
          { icon: 'Stethoscope', title: 'Provider care', desc: 'Consultation, follow-ups, and dose adjustments throughout' },
          { icon: 'Package', title: 'Free shipping', desc: 'Expedited, discreet delivery on every order' },
        ]}
      />

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <NumberedSteps
        id="how-it-works"
        eyebrow="Personalized, clinician-guided weight loss — made simple"
        title="How It Works"
        accent="linear-gradient(135deg, var(--glp-mid), var(--glp))"
        ctaHref={ELIGIBILITY_QUIZ}
        ctaLabel="Check my eligibility"
        steps={[
          { title: 'Tell us about yourself', desc: 'Complete a short intake so we understand your health history, goals, and concerns. It takes about 3 minutes.' },
          { title: 'Get matched with your clinician', desc: `${CONSULT_NEUTRAL} Your clinician decides whether treatment is appropriate for your health profile.` },
          { title: 'A personalized plan — from home', desc: 'Your licensed Nutree Clinic provider considers your health history, habits, and goals. Semaglutide or tirzepatide is prescribed only if your provider determines it is appropriate.' },
          { title: 'Ongoing care, not just a prescription', desc: 'If prescribed, your medication is prepared by a state-licensed 503A pharmacy partner and shipped free to your door. You can message your care team 7 days a week; your clinician monitors progress and adjusts your dose when needed. For emergencies, call 911.' },
        ]}
      />

      {/* ── BMI CALCULATOR CTA (live page embeds a calculator; new site links to /bmi) ── */}
      <section id="bmi" style={{ padding: '2.5rem 1.5rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', background: 'linear-gradient(135deg, rgba(142,212,234,0.45), rgba(255,255,255,0.8))', borderRadius: 'var(--radius-lg)', padding: '1.75rem', border: '0.5px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '0.75rem' }}>Calculate your BMI</h2>
          <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '0.5rem', maxWidth: 640 }}>
            Your BMI can help you and your clinician better understand your body composition and health goals.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 640 }}>
            Enter your height and weight to estimate your BMI and see where it lands on the chart: underweight (under 18.5),
            healthy weight (18.5–24.9), overweight (25–29.9), or obesity (30 and above).
          </p>
          <CTAButton href="/bmi">Open the BMI calculator →</CTAButton>
        </div>
      </section>

      {/* ── CLINICAL RESULTS ──────────────────────────────────────── */}
      <Section bg="var(--base)">
        <SectionHeader eyebrow="Clinical outcomes" title="What the research shows." />
        {/* Stat cards */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.875rem' }}>
          {[
            { val: '~15%', unit: 'body weight', label: 'Average loss in the 68-week semaglutide clinical trial*' },
            { val: '~21%', unit: 'body weight', label: 'Average loss in the 72-week tirzepatide clinical trial*' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, background: 'linear-gradient(150deg, var(--glp-mid), var(--glp))',
              borderRadius: 'var(--radius-md)', padding: '0.875rem', textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', fontWeight: 700, color: 'var(--glp-dark)', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: "0.875rem", color: 'var(--glp-dark)', marginTop: 2 }}>{s.unit}</div>
              <div style={{ fontSize: "1rem", color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '0.875rem', border: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>What these numbers mean</div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 0.5rem' }}>
            *STEP-1 (semaglutide 2.4 mg, 68 weeks) and SURMOUNT-1 (tirzepatide up to 15 mg, 72 weeks) studied the FDA-approved
            brand-name medications together with diet and exercise. Weight loss in these trials was gradual and built over more
            than a year; many participants lost less than the average and some lost more.
          </p>
          <ResultsDisclaimer trialData style={{ margin: 0 }} />
        </div>
      </Section>

      {/* ── SEMA VS TIRZ COMPARISON ──────────────────────────────── */}
      <Section bg="var(--white)">
        <SectionHeader
          eyebrow="Understanding your options"
          title="Compounded Semaglutide vs. Compounded Tirzepatide"
          body="Your clinician will recommend the most appropriate option based on your health profile and clinical history."
        />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: "0.9375rem" }}>
            <thead>
              <tr>
                <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink)', borderBottom: '2px solid var(--border)', width: '36%' }} />
                <th style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                  <span style={{ background: 'var(--glp)', color: 'var(--glp-dark)', padding: '3px 7px', borderRadius: 5, fontSize: "0.875rem", fontWeight: 700, display: 'inline-block' }}>
                    Compounded<br />Semaglutide
                  </span>
                </th>
                <th style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                  <span style={{ background: 'var(--ser)', color: 'var(--ser-dark)', padding: '3px 7px', borderRadius: 5, fontSize: "0.875rem", fontWeight: 700, display: 'inline-block' }}>
                    Compounded<br />Tirzepatide
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Mechanism',      'GLP-1 receptor agonist',        'GLP-1 + GIP dual agonist'],
                ['Avg weight loss in trials*','~15% body weight',   '~21% body weight'],
                ['Administration', 'Once-weekly injection',         'Once-weekly injection'],
                ['Starting price', `${P.semaglutide.monthly.monthlyLabel} ✓`, `From ${P.tirzepatide.monthly.monthlyLabel}`],
                ['Often considered for','A first GLP-1 · longest track record','A dual GLP-1/GIP option, per your clinician'],
              ].map(([label, a, b], i) => (
                <tr key={i} style={{ background: i % 2 === 1 ? 'rgba(184,228,240,0.12)' : 'transparent' }}>
                  <td style={{ padding: '7px 6px', fontWeight: 700, color: 'var(--ink)', borderBottom: '0.5px solid var(--border)' }}>{label}</td>
                  <td style={{ padding: '7px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)' }}>{a}</td>
                  <td style={{ padding: '7px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)' }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '1rem', color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.5 }}>
          *Clinical trial data for FDA-approved reference medications (Wegovy®, Zepbound®). Compounded preparations are not those products. Your clinician determines suitability based on your individual health profile.
        </p>
      </Section>

      {/* ── SCIENCE ───────────────────────────────────────────────── */}
      <ScienceGrid
        eyebrow="How GLP-1 therapy works"
        title="The science behind the results."
        iconGradient="linear-gradient(135deg, var(--glp-mid), var(--glp))"
        items={[
          { icon: 'Brain', title: 'Appetite regulation at the brain level', desc: 'GLP-1 agonists act on hypothalamic receptors to reduce hunger signals — making it physiologically easier to maintain a healthy intake.' },
          { icon: 'Timer', title: 'Extended feeling of fullness', desc: 'Gastric emptying slows, so food moves more gradually — extending satiety after meals.' },
          { icon: 'Drop', title: 'Metabolic and blood sugar support', desc: 'GLP-1 medications support insulin secretion and suppress glucagon, improving metabolic markers beyond weight alone.' },
          { icon: 'Barbell', title: 'Weight loss that preserves lean tissue', desc: 'Combined with adequate protein and movement, GLP-1 therapy supports fat loss while helping to maintain lean muscle.' },
        ]}
      />

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <Testimonials
        tagColor="var(--glp)" tagDarkColor="var(--glp-dark)"
        items={[REVIEWS.corinne, REVIEWS.tammy]}
      />

      {/* ── CAROUSEL ──────────────────────────────────────────────── */}
      <Section bg="var(--white)">
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Medication made accessible</div>
          <div style={{ fontSize: "0.9375rem", color: 'var(--ink-3)' }}>All options, without the need for insurance</div>
        </div>
        <div className="carousel-track">
          {[
            { name: 'Compounded Semaglutide', price: P.semaglutide.monthly.monthlyLabel, bg: 'linear-gradient(150deg,var(--glp-mid),var(--glp))', color: 'var(--glp-dark)', href: CHECKOUT.semaglutideWeightLoss, active: true },
            { name: 'Compounded Tirzepatide', price: `From ${P.tirzepatide.monthly.monthlyLabel}`, bg: 'linear-gradient(150deg,var(--ser-mid),var(--ser))', color: 'var(--ser-dark)', href: CHECKOUT.tirzepatideWeightLoss },
            { name: 'GLP-1 Microdosing',       price: `From ${P.microdosingSema.tenWeek.label}`, bg: 'linear-gradient(150deg,var(--nad-mid),var(--nad))', color: 'var(--nad-dark)', href: '/glp-1microdosing' },
            { name: 'Wegovy®',                  price: PRICING_AT_CONSULT,          bg: 'linear-gradient(150deg,#D0E4F4,#B8CCE8)', color: '#3A5A8A', href: CHECKOUT.consult },
            { name: 'Mounjaro®',                price: PRICING_AT_CONSULT,         bg: 'linear-gradient(150deg,#E4E4E0,#D0D0C8)', color: 'var(--ink-3)', href: CHECKOUT.consult },
          ].map((c, i) => (
            <Link key={i} href={c.href}
              className={`carousel-card${c.active ? ' active' : ''}`}
              style={{ borderColor: c.active ? 'var(--glp-dark)' : 'var(--border)', textDecoration: 'none' }}>
              <div style={{ height: 96, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img
                  src="/images/glp1-semaglutide-weight-loss-nutreeclinic.png"
                  alt={c.name}
                  style={{ height: '90%', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: '0.5rem' }}>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 2 }}>{c.name}</div>
                <div style={{ fontSize: "1rem", color: 'var(--ink-3)' }}>{c.price}</div>
                <div style={{ fontSize: "1rem", fontWeight: 600, color: c.color, marginTop: 3 }}>See if you qualify →</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── ALSO FROM NUTREE ──────────────────────────────────────── */}
      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="GLP-1 pairs well with these treatments."
        items={[
          { name: 'NAD+ Therapy',  sub: 'Cellular energy · longevity', href: '/nad+', arrowColor: 'var(--nad-dark)', img: '/images/nad-plus-injectable-therapy-nutreeclinic-nav.png' },
          { name: 'B6 / B12',      sub: 'Energy support, often paired with GLP-1 care', href: '/b12', arrowColor: 'var(--b12-dark)' },
          { name: 'Sermorelin',    sub: 'Preserving muscle during weight loss', href: '/sermorelin', arrowColor: 'var(--ser-dark)', img: '/images/sermorelin-growth-hormone-therapy-nutreeclinic-nav.png' },
        ]}
      />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <SeoFAQ items={faqs} accent="var(--glp)" accentDark="var(--glp-dark)" />

      <ImportantSafetyInfo drugs={['glp1']} />

      <PageLegal text="Compounded semaglutide and tirzepatide are prepared by state-licensed 503A compounding pharmacies for individual patients. They are not FDA-approved, the FDA does not review compounded drugs for safety, effectiveness, or quality, and they are not generic versions of any brand-name product. *Clinical outcome data refers to FDA-approved reference medications (Wegovy®, Zepbound®) studied with diet and exercise; compounded preparations were not studied in those trials. Ozempic® and Wegovy® are registered trademarks of Novo Nordisk A/S. Mounjaro® and Zepbound® are registered trademarks of Eli Lilly and Company. Nutree Clinic is not affiliated with or endorsed by either company. Individual results vary. Prescriptions are issued only if a licensed provider determines treatment is appropriate. Care is available to patients located in Florida. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
