'use client'
import { PRICING_AT_CONSULT } from '@/lib/prices.config'
import { CHECKOUT } from '@/lib/checkout.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand,
  ScienceGrid, AlsoFromNutree, FAQSection,
  PageLegal, ConsultBand, InStockBadge,
} from '@/components/ui/PageComponents'
import { ImportantSafetyInfo } from '@/components/compliance'

const PAGE = '/glutathione'

export function GlutathioneContent() {
  const faqs = FAQ_ITEMS
    .filter(f => f.active && f.pages.includes(PAGE))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))

  return (
    <>
      {/* ── HERO SPLIT ─────────────────────────────────────────────── */}
      <div className="hero-split">
        <div className="hero-photo gradient-nad">
          <InStockBadge />
          <img
            src="/images/nad-plus-injectable-therapy-nutreeclinic.png"
            alt="Glutathione injectable therapy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="hero-right">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
            Glutathione
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            Your body&apos;s own antioxidant — compounded injections, prescribed off-label if appropriate
          </p>
          <PromoList />

          <div>
            <ProductBlockHeader>Injectable · Physician-prescribed</ProductBlockHeader>
            <PlanRow
              name="Glutathione plan"
              sub="Your clinician confirms your plan and price at your consultation"
              price={PRICING_AT_CONSULT}
              color="var(--nad-dark)"
            />
          </div>
        </div>
      </div>

      <CTAArea href={CHECKOUT.consult} />

      <BenefitsList color="var(--nad)" items={[
        'Injectable delivery — avoids breakdown in the digestive system',
        'Glutathione is one of the antioxidants your body makes naturally',
        'Off-label use; human evidence for wellness benefits is limited',
        'Provider consultation and dose adjustments included',
        'Free expedited shipping on every order',
        '503A licensed pharmacy on every prescription',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <TrustStrip />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--nad-mid) 0%, var(--nad) 55%, #D8F4EC 100%)"
        eyebrow="Why glutathione matters"
        title="An antioxidant your body already makes."
        body="Glutathione is produced naturally in cells and helps manage oxidative stress. Levels may be lower with age and some health conditions. Oral glutathione is largely broken down during digestion, so some clinicians prescribe it by injection. Whether glutathione injections improve energy, immunity, or skin in healthy people has not been established."
        cards={[
          { icon: 'Drop', title: 'Injectable delivery', desc: 'Avoids the digestive breakdown that limits oral glutathione' },
          { icon: 'ShieldCheck', title: 'Liver chemistry', desc: 'The liver uses glutathione in its normal processing of many substances' },
          { icon: 'Lightning', title: 'Cellular protection', desc: 'Helps protect cells, including mitochondria, from oxidative stress' },
        ]}
      />

      <ScienceGrid
        eyebrow="The science"
        title="What glutathione does in the body."
        iconGradient="linear-gradient(135deg, var(--nad-mid), var(--nad))"
        items={[
          { icon: 'Leaf', title: 'Antioxidant role', desc: 'Inside cells, glutathione helps neutralize reactive oxygen species that can damage DNA, proteins, and cell membranes.' },
          { icon: 'Drop', title: 'Liver function', desc: 'The liver uses glutathione to process certain drugs and chemicals. Glutathione injections are not a treatment for poisoning or heavy-metal exposure.' },
          { icon: 'Heart', title: 'Immune cells', desc: 'Glutathione is involved in normal immune-cell function. Clinical benefit from supplementing in healthy people is not established.' },
          { icon: 'Brain', title: 'Alongside other treatments', desc: 'Some patients use glutathione alongside other wellness treatments. There is no clinical evidence that it improves the results of GLP-1 medications.' },
        ]}
      />

      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="Glutathione pairs well with these treatments."
        items={[
          { name: 'NAD+ Therapy', sub: 'Cellular energy support (off-label)', href: '/nad+', arrowColor: 'var(--nad-dark)', img: '/images/nad-plus-injectable-therapy-nutreeclinic-nav.png' },
          { name: 'GLP-1 Weight Loss', sub: 'Clinician-guided weight management', href: '/weight-loss', arrowColor: 'var(--glp-dark)', img: '/images/glp1-semaglutide-weight-loss-nutreeclinic-nav.png' },
          { name: 'Sermorelin', sub: 'Growth hormone · body composition', href: '/sermorelin', arrowColor: 'var(--ser-dark)', img: '/images/sermorelin-growth-hormone-therapy-nutreeclinic-nav.png' },
        ]}
      />

      {faqs.length > 0 && (
        <FAQSection
          items={faqs}
          iconBg="var(--nad)"
          iconColor="var(--nad-dark)"
        />
      )}

      <ImportantSafetyInfo drugs={['glutathione']} />

      <PageLegal text="Compounded glutathione is prepared by state-licensed 503A compounding pharmacies. It is not FDA-approved, the FDA does not review compounded drugs for safety, effectiveness, or quality, and it is prescribed off-label. Human evidence for antioxidant, detox, or wellness benefits is limited. Not recommended during pregnancy or breastfeeding. Prescriptions are issued only if a licensed provider determines treatment is appropriate. Individual results vary. Care is available to patients located in Florida. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
