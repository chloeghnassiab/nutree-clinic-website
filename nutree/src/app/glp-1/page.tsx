import type { Metadata } from 'next'
import Link from 'next/link'
import { WhoItsFor } from './WhoItsFor'
import { PRICES } from '@/lib/prices.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, ScienceGrid,
  Testimonials, AlsoFromNutree, FAQSection, PageLegal,
  ConsultBand, Section, SectionHeader, InStockBadge,
} from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'GLP-1 Microdosing — Gentle Weight Loss, No Side Effects',
  description: 'Compounded GLP-1 microdosing — a gentler, lower-dose approach to semaglutide and tirzepatide. Fewer side effects, sustainable results. Florida telehealth.',
}

const P = PRICES
const PAGE = '/glp-1'

export default function MicroDosingPage() {
  const faqs = FAQ_ITEMS
    .filter(f => f.active && f.pages.includes(PAGE))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))

  return (
    <>
      {/* HERO */}
      <div className="hero-split">
        <div className="hero-photo gradient-glp">
          <InStockBadge />
          <img
            src="/images/glp1-semaglutide-weight-loss-nutreeclinic.png"
            alt="GLP-1 microdosing"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="hero-right">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
            GLP-1 Microdosing
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            A gentler start — lower doses, fewer side effects, sustainable results
          </p>
          <PromoList />

          <div style={{ marginBottom: '0.625rem' }}>
            <ProductBlockHeader>Microdose Semaglutide</ProductBlockHeader>
            <PlanRow
              name="5-week programme"
              sub="All-inclusive · no auto-renewal"
              price={P.microdosingSema.fiveWeek.label}
              color="var(--glp-dark)"
            />
            <PlanRow
              name="10-week programme"
              sub="All-inclusive · no auto-renewal"
              price={P.microdosingSema.tenWeek.label}
              best
              color="var(--glp-dark)"
            />
            <div style={{ fontSize: "1rem", color: 'var(--ink-3)', marginTop: 3, paddingLeft: 4 }}>
              {P.microdosingSema.perWeek.label} · billed upfront
            </div>
          </div>

          <div>
            <ProductBlockHeader>Microdose Tirzepatide</ProductBlockHeader>
            <PlanRow
              name="5-week programme"
              sub="All-inclusive · no auto-renewal"
              price={P.microDosingTirz.fiveWeek.label}
              color="var(--glp-dark)"
            />
            <PlanRow
              name="10-week programme"
              sub="All-inclusive · no auto-renewal"
              price={P.microDosingTirz.tenWeek.label}
              best
              color="var(--glp-dark)"
            />
            <div style={{ fontSize: "1rem", color: 'var(--ink-3)', marginTop: 3, paddingLeft: 4 }}>
              {P.microDosingTirz.perWeek.label} · billed upfront
            </div>
          </div>
        </div>
      </div>

      <CTAArea />

      <BenefitsList color="var(--glp)" items={[
        'Lower starting doses — fewer side effects from day one',
        'Ideal for GLP-1 first-timers or those sensitive to standard dosing',
        'Fixed programme — know exactly what you\'re committing to',
        'Provider consultation and guidance included',
        'Free expedited shipping · 503A licensed pharmacy',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <TrustStrip />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--glp-mid) 0%, var(--glp) 55%, #DDF4FF 100%)"
        eyebrow="Why microdosing"
        title="Same medication. Gentler introduction."
        body="Standard GLP-1 dosing can cause nausea and digestive discomfort in the early weeks. Microdosing uses the same compounded semaglutide or tirzepatide at a lower starting dose — giving your body more time to adjust. Many patients find the side effect profile significantly more manageable, while still achieving meaningful results."
        cards={[
          { icon: 'Plant', title: 'Lower dose', desc: 'A fraction of the standard starting dose — your body adjusts gradually' },
          { icon: 'Smiley', title: 'Fewer side effects', desc: 'Nausea and digestive discomfort significantly reduced for most patients' },
          { icon: 'ClipboardText', title: 'Fixed programme', desc: '5 or 10 weeks — clear start and end, no ongoing commitment' },
        ]}
      />

      {/* WHO IT IS FOR */}
      <Section bg="var(--white)">
        <SectionHeader eyebrow="Is microdosing right for you?" title="Most patients choose microdosing when..." />
        <WhoItsFor />
      </Section>

      {/* MICRODOSING vs STANDARD */}
      <Section bg="var(--base)">
        <SectionHeader eyebrow="Understanding your options" title="Microdosing vs. standard dosing" />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: "0.9375rem" }}>
            <thead>
              <tr>
                <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink)', borderBottom: '2px solid var(--border)', width: '38%' }} />
                <th style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                  <span style={{ background: 'var(--glp)', color: 'var(--glp-dark)', padding: '3px 8px', borderRadius: 5, fontSize: "0.875rem", fontWeight: 700, display: 'inline-block' }}>Microdosing ✓</span>
                </th>
                <th style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                  <span style={{ background: 'var(--base)', color: 'var(--ink-3)', padding: '3px 8px', borderRadius: 5, fontSize: "0.875rem", fontWeight: 700, display: 'inline-block', border: '1px solid var(--border)' }}>Standard plan</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Starting dose',    'Very low — gentle introduction',    'Standard protocol'],
                ['Side effects',     'Minimal for most patients ✓',        'More common in weeks 1–4'],
                ['Commitment',       'Fixed 5 or 10 weeks ✓',             'Monthly subscription'],
                ['Best for',         'First-timers · sensitive patients',  'Ready to commit · more to lose'],
                ['Results',          'Gradual, sustainable',               'Faster progression'],
              ].map(([label, a, b], i) => (
                <tr key={i} style={{ background: i % 2 === 1 ? 'rgba(184,228,240,0.12)' : 'var(--white)' }}>
                  <td style={{ padding: '8px 6px', fontWeight: 700, color: 'var(--ink)', borderBottom: '0.5px solid var(--border)', fontSize: "0.875rem" }}>{label}</td>
                  <td style={{ padding: '8px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)', fontSize: "0.875rem" }}>{a}</td>
                  <td style={{ padding: '8px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)', fontSize: "0.875rem" }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <ScienceGrid
        eyebrow="How it works"
        title="Same mechanism. Lower dose."
        iconGradient="linear-gradient(135deg, var(--glp-mid), var(--glp))"
        items={[
          { icon: 'Brain', title: 'GLP-1 receptor activation', desc: 'Microdosed semaglutide and tirzepatide work through the same receptor pathways as standard doses — signalling satiety, slowing gastric emptying, and supporting metabolic health.' },
          { icon: 'TrendDown', title: 'Gradual titration', desc: 'Lower starting doses allow your body to adapt without the shock that often causes nausea. Your clinician may titrate upward over the programme if appropriate.' },
          { icon: 'Scales', title: 'Meaningful results at lower doses', desc: 'Clinical data shows meaningful metabolic benefits at sub-standard doses — particularly for patients who are closer to their target weight.' },
        ]}
      />

      <Testimonials
        tagColor="var(--glp)" tagDarkColor="var(--glp-dark)"
        items={[
          { quote: 'After 9 weeks on a microdosed GLP-1, I lost 9 pounds. I already feel lighter, confident, in control. With a team that supports me!', author: 'Courtney, 32 · Nutree Clinic patient', tag: 'GLP-1 Microdosing · 10-week', img: '/images/Courtney-nutree-clinic-patient-glp-1.jpeg', featured: true },
        ]}
      />

      <AlsoFromNutree
        eyebrow="Ready for more?"
        title="After microdosing, many patients move to a full plan."
        items={[
          { name: 'Compounded Semaglutide', sub: 'Full monthly plan from $249/mo',       href: '/weight-loss', arrowColor: 'var(--glp-dark)', img: '/images/glp1-semaglutide-weight-loss-nutreeclinic-nav.png' },
          { name: 'Compounded Tirzepatide', sub: 'Full monthly plan from $349/mo',       href: '/weight-loss', arrowColor: 'var(--glp-dark)', img: '/images/glp1-semaglutide-weight-loss-nutreeclinic-nav.png' },
          { name: 'B6 / B12',               sub: 'Energy support — pairs with GLP-1',   href: '/b12',         arrowColor: 'var(--b12-dark)' },
        ]}
      />

      {faqs.length > 0 && (
        <FAQSection
          iconBg="var(--glp)"
          iconColor="var(--glp-dark)"
          items={faqs}
        />
      )}

      <PageLegal text="Compounded semaglutide and tirzepatide are prepared by state-licensed 503A compounding pharmacies and are not FDA-approved. Off-label use must be prescribed and supervised by a licensed provider. Individual results vary. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand
        heading="Ready to take the next step?"
        sub="Your clinician reviews your intake and issues your prescription. If they have any questions, they will reach out directly."
      />
    </>
  )
}
