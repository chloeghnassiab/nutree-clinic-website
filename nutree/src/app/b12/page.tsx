import type { Metadata } from 'next'
import { PRICING_AT_CONSULT } from '@/lib/prices.config'
import { CHECKOUT } from '@/lib/checkout.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand,
  ScienceGrid, AlsoFromNutree, FAQSection,
  PageLegal, ConsultBand, Section, SectionHeader, InStockBadge,
} from '@/components/ui/PageComponents'
import { ImportantSafetyInfo } from '@/components/compliance'

export const metadata: Metadata = {
  alternates: { canonical: '/b12' },
  title: 'B6 / B12 Injections — Clinician-Guided Vitamin Support',
  description: 'Clinician-prescribed B6/B12 injections and oral options for B-vitamin support, if appropriate after provider review. Florida telehealth.',
}

const PAGE = '/b12'

export default function B12Page() {
  const faqs = FAQ_ITEMS
    .filter(f => f.active && f.pages.includes(PAGE))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))

  return (
    <>
      <div className="hero-split">
        <div className="hero-photo gradient-b12">
          <div style={{ position: 'absolute', width: 110, height: 110, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', top: -22, right: -22 }} />
          <div style={{ position: 'absolute', width: 58, height: 58, borderRadius: '50%', background: 'rgba(122,98,0,0.12)', bottom: -8, left: -8 }} />
          <div style={{ position: 'absolute', width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.22)', top: 28, left: 14 }} />
          <InStockBadge />
          <div style={{ width: 80, height: 80, borderRadius: 20, background: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, fontSize: '2.5rem' }}>
            <img src='/images/hero-b12.png' alt='B12' style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 20 }} />
          </div>
        </div>

        <div className="hero-right">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
            B6 / B12 Injections
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            B-vitamin support, prescribed if appropriate — injectable and oral
          </p>
          <PromoList />

          <div style={{ marginBottom: '0.625rem' }}>
            <ProductBlockHeader>Injectable · Injectable option</ProductBlockHeader>
            <PlanRow name="Injectable plan" sub="Plan and price confirmed at your consultation" price={PRICING_AT_CONSULT} color="var(--b12-dark)" />
          </div>

          <div>
            <ProductBlockHeader>Oral / Sublingual · Needle-free</ProductBlockHeader>
            <PlanRow name="Oral / sublingual plan" sub="Plan and price confirmed at your consultation" price={PRICING_AT_CONSULT} color="var(--b12-dark)" />
          </div>
        </div>
      </div>

      <CTAArea href={CHECKOUT.consult} />

      <BenefitsList color="var(--b12)" items={[
        'Two delivery forms — injectable or oral/sublingual',
        'Clear plan pricing before you start — no hidden fees',
        'Provider consultation and guidance included',
        'Free expedited shipping on every order',
        'Filled by a state-licensed 503A pharmacy',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <TrustStrip />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--b12-mid) 0%, var(--b12) 55%, #FFF4B0 100%)"
        eyebrow="Two delivery forms"
        title="Injectable or oral — your clinician recommends what's right."
        body="Injections deliver B vitamins without relying on digestion, which matters when absorption from food or pills is reduced. Oral sublingual tablets dissolve under the tongue for partial mucosal absorption. Your provider selects the most appropriate form based on your health profile."
        cards={[
          { icon: 'Syringe', title: 'Injectable', desc: 'Bypasses the digestive system — often used when absorption is reduced' },
          { icon: 'Pill', title: 'Oral / Sublingual', desc: 'Needle-free — dissolves under the tongue for mucosal absorption' },
          { icon: 'Lightning', title: 'Monitored', desc: 'Your clinician reviews your response; noticeable changes in energy are more likely if you were low in B12' },
        ]}
      />

      <ScienceGrid
        eyebrow="The science"
        title="Why B6 and B12 matter."
        iconGradient="linear-gradient(135deg, var(--b12-mid), var(--b12))"
        items={[
          { icon: 'Lightning', title: 'Energy metabolism at the cellular level', desc: 'B12 and B6 are cofactors in metabolic pathways the body uses to turn food into energy. Supplementing is most likely to help when levels are low.' },
          { icon: 'Brain', title: 'Neurological function and mood', desc: 'B6 is a cofactor in making neurotransmitters such as serotonin, dopamine, and GABA, and B12 is essential for healthy nerves. Deficiency of either can affect mood and nerve function.' },
          { icon: 'Drop', title: 'Red blood cell formation', desc: 'B12 is needed to produce healthy red blood cells. Low B12 can cause anemia, which can lead to tiredness and weakness.' },
        ]}
      />

      {/* INJECTABLE vs ORAL TABLE */}
      <Section bg="var(--base)">
        <SectionHeader eyebrow="Choosing your form" title="Injectable vs. oral — at a glance." />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: "0.9375rem" }}>
            <thead>
              <tr>
                <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink)', borderBottom: '2px solid var(--border)', width: '38%' }} />
                <th style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                  <span style={{ background: 'var(--b12)', color: 'var(--b12-dark)', padding: '3px 7px', borderRadius: 5, fontSize: "0.875rem", fontWeight: 700, display: 'inline-block' }}>Injectable</span>
                </th>
                <th style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                  <span style={{ background: '#FFF4B0', color: 'var(--b12-dark)', padding: '3px 7px', borderRadius: 5, fontSize: "0.875rem", fontWeight: 700, display: 'inline-block' }}>Oral / Sublingual</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Absorption',       'Bypasses the gut',      'Depends on gut absorption'],
                ['Raising low levels', 'Typically faster',    'Typically more gradual'],
                ['Needle required',  'Yes — small, subcutaneous', 'No'],
                ['Often used for',   'Deficiency or reduced absorption', 'Maintenance, per your clinician'],
              ].map(([label, a, b], i) => (
                <tr key={i} style={{ background: i % 2 === 1 ? 'rgba(249,224,122,0.15)' : 'var(--white)' }}>
                  <td style={{ padding: '8px 6px', fontWeight: 700, color: 'var(--ink)', borderBottom: '0.5px solid var(--border)' }}>{label}</td>
                  <td style={{ padding: '8px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)' }}>{a}</td>
                  <td style={{ padding: '8px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)' }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="B6/B12 pairs well with these treatments."
        items={[
          { name: 'NAD+ Therapy',    sub: 'Cellular energy — both address fatigue from different angles', href: '/nad+',          arrowColor: 'var(--nad-dark)', img: '/images/nad-plus-injectable-therapy-nutreeclinic-nav.png' },
          { name: 'Sermorelin',      sub: 'Growth hormone · recovery · body composition',                href: '/sermorelin',   arrowColor: 'var(--ser-dark)', img: '/images/sermorelin-growth-hormone-therapy-nutreeclinic-nav.png' },
          { name: 'GLP-1 Weight Loss',sub: 'Metabolic support — a natural complement',                  href: '/weight-loss',  arrowColor: 'var(--glp-dark)', img: '/images/glp1-semaglutide-weight-loss-nutreeclinic-nav.png' },
        ]}
      />

      {faqs.length > 0 && (
        <FAQSection
          iconBg="var(--b12)"
          iconColor="var(--b12-dark)"
          items={faqs}
        />
      )}

      <ImportantSafetyInfo drugs={['b12']} />

      <PageLegal text="Compounded B6/B12 preparations are prepared by state-licensed 503A compounding pharmacies. Compounded combination products are not FDA-approved, and the FDA does not review compounded drugs for safety, effectiveness, or quality. Vitamin B12 injection is FDA-approved for B12 deficiency; use for energy or general wellness without a deficiency is off-label. Prescriptions are issued only if a licensed provider determines treatment is appropriate. Individual results vary. Care is available to patients located in Florida. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
