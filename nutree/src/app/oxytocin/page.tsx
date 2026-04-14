// ─── OXYTOCIN PAGE ────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { PRICES } from '@/lib/prices.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, HowItWorks,
  ScienceGrid, Testimonials, AlsoFromNutree, FAQSection,
  PageLegal, ConsultBand, InStockBadge,
} from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'Oxytocin Nasal Spray — Stress Relief & Emotional Well-being',
  description: 'Physician-prescribed compounded oxytocin nasal spray for stress regulation, emotional balance, and sleep support. Florida telehealth.',
}

const P = PRICES
const PAGE = '/oxytocin'

export default function OxytocinPage() {
  const faqs = FAQ_ITEMS
    .filter(f => f.active && f.pages.includes(PAGE))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))

  return (
    <>
      <div className="hero-split">
        <div className="hero-photo gradient-oxy">
          <InStockBadge />
          <img
            src='/images/oxytocin-nasal-spray-nutreeclinic.png'
            alt='Oxytocin'
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="hero-right">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
            Oxytocin Nasal Spray
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            Calm, emotional balance, and stress relief — from within
          </p>
          <PromoList />

          <div>
            <ProductBlockHeader>Nasal Spray · Physician-prescribed</ProductBlockHeader>
            <PlanRow name="6-month plan" sub={`${P.oxytocin.sixMonth.totalLabel} · medication · consultation · shipping`} price={P.oxytocin.sixMonth.monthlyLabel} afterPrice={P.oxytocin.sixMonth.savingsLabel} best color="var(--oxy-dark)" />
            <PlanRow name="3-month plan" price={P.oxytocin.threeMonth.monthlyLabel} afterPrice={P.oxytocin.threeMonth.savingsLabel} color="var(--oxy-dark)" />
            <PlanRow name="Monthly plan" sub="Cancel anytime" price={P.oxytocin.monthly.monthlyLabel} afterPrice={P.oxytocin.monthly.perWeekLabel} color="var(--oxy-dark)" />
          </div>
        </div>
      </div>

      <CTAArea />

      <BenefitsList color="var(--oxy)" items={[
        'Stress regulation and emotional balance — daily nasal spray',
        'Targets the central nervous system directly via nasal mucosa',
        'Provider consultation and dose guidance included',
        'Free expedited shipping on every order',
        '503A licensed pharmacy on every prescription',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <TrustStrip />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--oxy-mid) 0%, var(--oxy) 55%, #EAD8FF 100%)"
        eyebrow="Why nasal spray"
        title="The most direct route to calm."
        body="The nasal mucosa provides direct access to the central nervous system, allowing oxytocin to reach its target receptors efficiently. Two sprays daily, as prescribed — easy to build into any morning or evening routine."
        cards={[
          { icon: 'Brain', title: 'CNS targeting', desc: 'Direct access to the amygdala and stress-regulating pathways' },
          { icon: 'Smiley', title: 'Cortisol regulation', desc: 'Supports a calmer baseline stress response throughout the day' },
          { icon: 'Moon', title: 'Sleep support', desc: 'Lower evening cortisol supports a more natural transition to rest' },
        ]}
      />

      <HowItWorks
        gradient="linear-gradient(135deg, var(--oxy-mid), var(--oxy))"
        steps={[
          { title: 'Week 1–2 · Reduced reactivity', desc: 'Stressors that previously triggered strong reactions start to feel more manageable.' },
          { title: 'Week 2–4 · Better sleep and mood', desc: 'Improved sleep quality and a more stable emotional baseline as evening cortisol reduces.' },
          { title: 'Month 1–3 · Sustained well-being', desc: 'A consistent sense of calm — and social interactions that feel more natural.' },
        ]}
      />

      <ScienceGrid
        eyebrow="The science"
        title="What oxytocin does in the brain."
        iconGradient="linear-gradient(135deg, var(--oxy-mid), var(--oxy))"
        items={[
          { icon: 'Heart', title: 'Amygdala modulation', desc: 'Oxytocin reduces the reactivity of the amygdala — the brain\'s threat-detection centre — supporting a calmer, more regulated emotional response.' },
          { icon: 'ArrowsClockwise', title: 'Cortisol reduction', desc: 'Oxytocin activates the parasympathetic nervous system, helping to lower cortisol and shift the body toward calm, regulated function.' },
          { icon: 'Plant', title: 'Reduced systemic inflammation', desc: 'Research suggests oxytocin suppresses inflammatory cytokines — relevant for patients whose stress has manifested as chronic fatigue or systemic inflammation.' },
        ]}
      />

      <Testimonials
        tagColor="var(--oxy)" tagDarkColor="var(--oxy-dark)"
        items={[
          { quote: 'I wasn\'t expecting much — I\'d tried other things before. Within two weeks the edge I\'d been carrying every day started to soften. It\'s not dramatic, but it\'s real and it\'s mine.', author: 'Sarah K., 38 · Nutree Clinic patient', tag: 'Oxytocin Nasal Spray' },
        ]}
      />

      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="Oxytocin pairs well with these treatments."
        items={[
          { name: 'NAD+ Therapy', sub: 'Cellular energy — complements stress-related fatigue', href: '/nad',    arrowColor: 'var(--nad-dark)', img: '/images/nad-plus-injectable-therapy-nutreeclinic-nav.png' },
          { name: 'B6 / B12',    sub: 'Neurological support · mood & energy',                 href: '/b12',    arrowColor: 'var(--b12-dark)' },
          { name: 'Sermorelin',  sub: 'Recovery, strength & sleep quality',                   href: '/sermorelin', arrowColor: 'var(--ser-dark)', img: '/images/sermorelin-growth-hormone-therapy-nutreeclinic-nav.png' },
        ]}
      />

      {faqs.length > 0 && (
        <FAQSection
          iconBg="var(--oxy)"
          iconColor="var(--oxy-dark)"
          items={faqs}
        />
      )}

      <PageLegal text="Compounded oxytocin nasal spray is not FDA-approved and has not been evaluated by the FDA for safety, efficacy, or quality. Not indicated for psychiatric conditions. Not appropriate during pregnancy. Prescriptions issued at provider discretion only. Individual results vary. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand
        heading="Ready to take the next step?"
        sub="Your clinician reviews your intake and issues your prescription. If they have any questions, they will reach out directly."
      />
    </>
  )
}
