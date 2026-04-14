'use client'
import { PRICES } from '@/lib/prices.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand,
  ScienceGrid, Testimonials, AlsoFromNutree, FAQSection,
  PageLegal, ConsultBand, InStockBadge,
} from '@/components/ui/PageComponents'

const P = PRICES

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
            Your body&apos;s master antioxidant — restored and replenished
          </p>
          <PromoList />

          <div>
            <ProductBlockHeader>Injectable · Physician-prescribed</ProductBlockHeader>
            <PlanRow
              name="6-month plan"
              sub={`${P.glutathione.sixMonth.totalLabel} · medication · consultation · shipping`}
              price={P.glutathione.sixMonth.monthlyLabel}
              afterPrice={P.glutathione.sixMonth.savingsLabel || undefined}
              best
              color="var(--nad-dark)"
            />
            <PlanRow
              name="3-month plan"
              price={P.glutathione.threeMonth.monthlyLabel}
              afterPrice={P.glutathione.threeMonth.savingsLabel || undefined}
              color="var(--nad-dark)"
            />
            <PlanRow
              name="Monthly plan"
              sub="Cancel anytime"
              price={P.glutathione.monthly.monthlyLabel}
              afterPrice={P.glutathione.monthly.perWeekLabel}
              color="var(--nad-dark)"
            />
          </div>
        </div>
      </div>

      <CTAArea />

      <BenefitsList color="var(--nad)" items={[
        'Injectable delivery — direct cellular absorption, far more effective than oral supplements',
        'Supports liver detoxification and toxin elimination',
        'May improve response to GLP-1 therapy in patients with high toxic load',
        'Provider consultation and dose adjustments included',
        'Free expedited shipping on every order',
        '503A licensed pharmacy on every prescription',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <TrustStrip />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--nad-mid) 0%, var(--nad) 55%, #D8F4EC 100%)"
        eyebrow="Why glutathione matters"
        title="The master antioxidant your body already makes — and gradually loses."
        body="Glutathione is produced naturally in every cell, but levels decline with age, stress, poor diet, and toxic exposure. When depleted, oxidative stress accumulates — affecting energy, immunity, skin, and your body's ability to detox. Injectable glutathione bypasses the digestive system entirely, delivering the antioxidant directly where it is needed."
        cards={[
          { icon: 'Drop', title: 'Injectable delivery', desc: 'Bypasses digestion for direct cellular absorption — far more effective than oral supplements' },
          { icon: 'ShieldCheck', title: 'Detox support', desc: 'Supports liver function, helps eliminate toxins, heavy metals, and metabolic waste' },
          { icon: 'Lightning', title: 'Cellular energy', desc: 'Essential to mitochondrial function — supporting the ATP production that drives energy and recovery' },
        ]}
      />

      <ScienceGrid
        eyebrow="The science"
        title="What glutathione does in the body."
        iconGradient="linear-gradient(135deg, var(--nad-mid), var(--nad))"
        items={[
          { icon: 'Leaf', title: 'Master antioxidant', desc: 'Neutralizes free radicals and reactive oxygen species — reducing oxidative damage to DNA, proteins, and cell membranes.' },
          { icon: 'Drop', title: 'Liver detoxification', desc: 'The liver uses glutathione to bind and eliminate toxins, heavy metals, and metabolic waste. Depleted glutathione directly impairs detox capacity.' },
          { icon: 'Heart', title: 'Immune modulation', desc: 'Regulates immune cell activity and helps control inflammation — supporting both immune strength and balance.' },
          { icon: 'Brain', title: 'GLP-1 synergy', desc: 'Patients with high oxidative stress sometimes experience a blunted response to GLP-1 medications. Glutathione helps restore the cellular environment that makes metabolic treatments more effective.' },
        ]}
      />

      <Testimonials
        tagColor="var(--nad)" tagDarkColor="var(--nad-dark)"
        items={[
          { quote: 'Within two weeks I noticed my energy was steadier and the inflammation I\'d been managing for years started to ease. The team was available whenever I had questions.', author: 'Diana R., 44 · Nutree Clinic patient', tag: 'Glutathione Injectable' },
        ]}
      />

      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="Glutathione pairs well with these treatments."
        items={[
          { name: 'NAD+ Therapy', sub: 'Cellular energy — works synergistically with glutathione', href: '/nad', arrowColor: 'var(--nad-dark)', img: '/images/nad-plus-injectable-therapy-nutreeclinic-nav.png' },
          { name: 'GLP-1 Weight Loss', sub: 'Glutathione supports your metabolic response', href: '/weight-loss', arrowColor: 'var(--glp-dark)', img: '/images/glp1-semaglutide-weight-loss-nutreeclinic-nav.png' },
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

      <PageLegal text="Compounded glutathione is not FDA-approved and has not been reviewed by the FDA for safety, efficacy, or quality. Not recommended during pregnancy or breastfeeding. Prescriptions issued at provider discretion only. Individual results vary. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand
        heading="Ready to take the next step?"
        sub="Your clinician reviews your intake and issues your prescription. If they have any questions, they will reach out directly."
      />
    </>
  )
}
