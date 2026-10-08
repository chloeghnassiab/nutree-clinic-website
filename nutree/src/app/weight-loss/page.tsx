import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PRICES } from '@/lib/prices.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand,
  ScienceGrid, Testimonials, AlsoFromNutree,
  PageLegal, ConsultBand, Section, SectionHeader, InStockBadge,
} from '@/components/ui/PageComponents'
import { NumberedSteps, SeoFAQ, CTAButton, faqsForPages } from '@/components/treatment/SeoBlocks'

const TITLE = 'Semaglutide & Tirzepatide for Weight Loss | Nutree Clinic'
const DESCRIPTION = 'Medical weight loss with semaglutide or tirzepatide when prescribed. Video consultation, personalized dosing, ongoing follow-up, shipped to you.'

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
              name="3-month plan" sub={`${P.semaglutide.threeMonth.totalLabel} · medication · consultation · shipping`}
              price={P.semaglutide.threeMonth.monthlyLabel}
              afterPrice={P.semaglutide.threeMonth.savingsLabel}
              best color="var(--glp-dark)"
            />
            <PlanRow
              name="Monthly plan" sub="Cancel anytime"
              price={P.semaglutide.monthly.monthlyLabel}
              afterPrice={P.semaglutide.monthly.perWeekLabel}
              color="var(--glp-dark)"
            />
          </div>

          {/* TIRZEPATIDE */}
          <div style={{ marginBottom: '0.75rem' }}>
            <ProductBlockHeader>Compounded Tirzepatide</ProductBlockHeader>
            <PlanRow
              name="3-month plan" sub={`${P.tirzepatide.threeMonth.totalLabel} · medication · consultation · shipping`}
              price={P.tirzepatide.threeMonth.monthlyLabel}
              afterPrice={P.tirzepatide.threeMonth.savingsLabel}
              best color="var(--glp-dark)"
            />
            <PlanRow
              name="Monthly plan" sub="Cancel anytime"
              price={P.tirzepatide.monthly.monthlyLabel}
              afterPrice={P.tirzepatide.monthly.perWeekLabel}
              color="var(--glp-dark)"
            />
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CTAArea />

      {/* ── BENEFITS ──────────────────────────────────────────────── */}
      <BenefitsList color="var(--glp)" items={[
        'Your price stays the same at every dose level — no surprises',
        'Free expedited shipping on every order',
        'Provider consultation and dose adjustments included',
        'Personalised dosing adjusted to your response and goals',
        '503A licensed pharmacy on every prescription',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <TrustStrip />

      {/* ── FEATURE BAND ──────────────────────────────────────────── */}
      <FeatureBand
        gradient="linear-gradient(145deg, var(--glp-mid) 0%, var(--glp) 55%, #DDF4FF 100%)"
        eyebrow="What every plan includes"
        title="Your price. Your dose. Your plan."
        body="Every Nutree GLP-1 plan is built around you — medication, consultation, and shipping all included. Your price remains consistent throughout your treatment, at every dose level."
        cards={[
          { icon: 'Pill', title: 'Medication included', desc: 'Compounded by a licensed 503A pharmacy to your prescription' },
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
        ctaHref="/consult"
        ctaLabel="Check my eligibility"
        steps={[
          { title: 'Tell us about yourself', desc: 'Complete a short intake so we understand your health history, goals, and concerns. It takes about 3 minutes.' },
          { title: 'Get matched with your clinician', desc: 'A licensed Nutree clinician reviews your health history and determines the most appropriate plan for your profile — no call required unless clinically necessary.' },
          { title: 'A real medical consultation — from home', desc: 'Your licensed Nutree Clinic provider takes the time to understand your body, your habits, and your goals, and designs a plan built around you. Semaglutide or tirzepatide is prescribed only if you are eligible.' },
          { title: 'Ongoing care, not just a prescription', desc: 'If prescribed, your medication is prepared by our licensed 503A pharmacy partner and shipped free to your door. Your clinician is available 7 days a week via direct message to monitor progress and adjust your dose.' },
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
        {/* Rainbow gradient bar chart */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '0.875rem', border: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Average weight loss progression</div>
          <div style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.875rem' }}>GLP-1 therapy combined with diet and exercise · months 1–6</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.3rem', height: 72 }}>
            {[
              { val: '~3%', h: '20%', bg: 'linear-gradient(180deg,var(--b12),#F0D040)' },
              { val: '~6%', h: '36%', bg: 'linear-gradient(180deg,var(--ser),var(--b12))' },
              { val: '~9%', h: '52%', bg: 'linear-gradient(180deg,var(--con),var(--ser))' },
              { val: '~12%',h: '68%', bg: 'linear-gradient(180deg,var(--oxy),var(--con))' },
              { val: '~15%',h: '84%', bg: 'linear-gradient(180deg,var(--nad),var(--oxy))' },
              { val: '~18%',h: '100%',bg: 'linear-gradient(180deg,var(--glp-mid),var(--nad))' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flex: 1 }}>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: 'var(--ink-2)' }}>{b.val}</div>
                <div style={{ borderRadius: '4px 4px 0 0', width: '100%', height: b.h, background: b.bg }} />
                <div style={{ fontSize: '1rem', color: 'var(--ink-3)' }}>Mo {i + 1}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '1rem', color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.5 }}>
            *Data from clinical trials of FDA-approved reference medications. Compounded preparations are not those FDA-approved products. Individual results vary.
          </div>
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
                ['Avg weight loss*','~15% body weight',             '~21% body weight ✓'],
                ['Administration', 'Once-weekly injection',         'Once-weekly injection'],
                ['Starting price', `${P.semaglutide.threeMonth.monthlyLabel} ✓`, P.tirzepatide.threeMonth.monthlyLabel],
                ['Well suited for','First GLP-1 · extensively studied','Stronger metabolic response needed'],
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
        items={[
          { quote: 'After 9 weeks on a microdosed GLP-1, I lost 9 pounds. I already feel lighter, confident, in control. With a team that supports me!', author: 'Courtney, 32 · Nutree Clinic patient', tag: 'GLP-1 Microdosing', img: '/images/Courtney-nutree-clinic-patient-glp-1.jpeg', featured: true },
          { quote: 'The provider was easy to connect with and clearly knew what they were doing, which made me feel at ease right away. Doing it online was super convenient, and the value for the money felt right. I\'d definitely recommend them.', author: 'Mari T. · Nutree Clinic patient', tag: 'Compounded Semaglutide', img: '/images/Mari T.png' },
        ]}
      />

      {/* ── CAROUSEL ──────────────────────────────────────────────── */}
      <Section bg="var(--white)">
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Medication made accessible</div>
          <div style={{ fontSize: "0.9375rem", color: 'var(--ink-3)' }}>All options, without the need for insurance</div>
        </div>
        <div className="carousel-track">
          {[
            { name: 'Compounded Semaglutide', price: P.semaglutide.threeMonth.monthlyLabel, bg: 'linear-gradient(150deg,var(--glp-mid),var(--glp))', color: 'var(--glp-dark)', href: '/weight-loss', active: true },
            { name: 'Compounded Tirzepatide', price: P.tirzepatide.threeMonth.monthlyLabel, bg: 'linear-gradient(150deg,var(--ser-mid),var(--ser))', color: 'var(--ser-dark)', href: '/weight-loss' },
            { name: 'GLP-1 Microdosing',       price: P.microdosingSema.perWeek.label, bg: 'linear-gradient(150deg,var(--nad-mid),var(--nad))', color: 'var(--nad-dark)', href: '/glp-1' },
            { name: 'Wegovy®',                  price: P.wegovy.monthly.label,          bg: 'linear-gradient(150deg,#D0E4F4,#B8CCE8)', color: '#3A5A8A', href: '/weight-loss' },
            { name: 'Mounjaro®',                price: P.mounjaro.monthly.label,         bg: 'linear-gradient(150deg,#E4E4E0,#D0D0C8)', color: 'var(--ink-3)', href: '/weight-loss' },
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
          { name: 'B6 / B12',      sub: 'Energy support — natural complement to GLP-1', href: '/b12', arrowColor: 'var(--b12-dark)' },
          { name: 'Sermorelin',    sub: 'Preserving muscle during weight loss', href: '/sermorelin', arrowColor: 'var(--ser-dark)', img: '/images/sermorelin-growth-hormone-therapy-nutreeclinic-nav.png' },
        ]}
      />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <SeoFAQ items={faqs} accent="var(--glp)" accentDark="var(--glp-dark)" />

      <PageLegal text="Compounded semaglutide and tirzepatide are prepared by state-licensed 503A compounding pharmacies and are not FDA-approved. They have not been evaluated by the FDA for safety, efficacy, or quality. *Clinical outcome data refers to FDA-approved reference medications (Wegovy®, Zepbound®). Compounded preparations are not those products. Wegovy® is a registered trademark of Novo Nordisk A/S. Mounjaro®/Zepbound® are registered trademarks of Eli Lilly and Company. Individual results vary. Prescriptions issued at provider discretion only. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
