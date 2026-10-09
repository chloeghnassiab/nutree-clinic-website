// ─── OXYTOCIN PAGE ────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { PRICES } from '@/lib/prices.config'
import { CHECKOUT } from '@/lib/checkout.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, HowItWorks,
  ScienceGrid, AlsoFromNutree,
  PageLegal, ConsultBand, InStockBadge,
} from '@/components/ui/PageComponents'
import { ExplainerSection, BenefitGrid, NumberedSteps, SeoFAQ, faqsForPages } from '@/components/treatment/SeoBlocks'
import { ImportantSafetyInfo, CONSULT_NEUTRAL } from '@/components/compliance'

const TITLE = 'Oxytocin Therapy Online | Support Mood, Stress & Connection | Nutree Clinic'
const DESCRIPTION = 'Clinician-guided compounded oxytocin nasal spray (off-label) for adults with stress, well-being, and connection goals. Prescribed only if appropriate, with ongoing medical support.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/oxytocin' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/oxytocin',
    images: [{ url: '/images/oxytocin-nasal-spray-nutreeclinic.png', alt: 'Oxytocin prescription nasal spray from Nutree Clinic' }],
  },
}

const P = PRICES
const PAGE = '/oxytocin'

export default function OxytocinPage() {
  const faqs = faqsForPages(FAQ_ITEMS, [PAGE])

  return (
    <>
      <div className="hero-split">
        <div className="hero-photo gradient-oxy">
          <InStockBadge />
          <img
            src='/images/oxytocin-nasal-spray-nutreeclinic.png'
            alt='Oxytocin prescription nasal spray from Nutree Clinic'
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="hero-right">
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--oxy-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>
            Clinician-guided emotional wellness
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
            Oxytocin Nasal Spray
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            Personalized oxytocin therapy, guided by licensed clinicians — off-label use that may support calm, emotional balance, and connection
          </p>
          <PromoList />

          <div>
            <ProductBlockHeader>Nasal Spray · Physician-prescribed</ProductBlockHeader>
            <PlanRow name="Monthly plan" sub="Billed every 4 weeks · medication · consultation · shipping · cancel anytime" price={P.oxytocin.monthly.monthlyLabel} afterPrice={P.oxytocin.monthly.perWeekLabel} color="var(--oxy-dark)" href={CHECKOUT.oxytocin} ctaLabel="Start oxytocin" />
          </div>
        </div>
      </div>

      <CTAArea href={CHECKOUT.oxytocin} />

      <BenefitsList color="var(--oxy)" items={[
        'Off-label nasal spray for stress and emotional-balance goals, used as prescribed',
        'Needle-free — absorbed through the nasal lining',
        'Provider consultation and dose guidance included',
        'Free expedited shipping on every order',
        'Filled by a state-licensed 503A pharmacy',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <p style={{ padding: '0 1.25rem 1rem', background: 'var(--white)', fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
        Includes a personalized consultation, prescription treatment, and home delivery. No membership. No hidden fees. No
        commitment. Subject to clinical approval — if you are not approved for treatment, your payment will be refunded.
        Oxytocin prescribed for mood, stress, connection, or general wellness is an off-label use. Individual experiences and
        results vary.
      </p>
      <TrustStrip />

      {/* ── HOW DOES OXYTOCIN NASAL SPRAY WORK? (restored from live) ── */}
      <ExplainerSection
        eyebrow="Emotional wellness & connection"
        title="How does oxytocin nasal spray work?"
        body={[
          'Oxytocin is a naturally occurring hormone involved in bonding, trust, emotional regulation, and the body’s response to stress. Prescription oxytocin nasal spray delivers a measured dose through the nasal passages as part of a personalized, clinician-guided treatment plan.',
        ]}
        image="/images/oxytocin-connection-couple-nutreeclinic.jpg"
        imageAlt="Smiling couple relaxing together at home — oxytocin therapy for emotional wellness and connection with Nutree Clinic"
        listTitle="Who may consider oxytocin therapy?"
        list={[
          'People seeking support for emotional balance and everyday stress',
          'Those experiencing a reduced sense of closeness or social connection',
          'Patients interested in supporting calm, relaxation, and restorative routines',
          'Adults looking for convenient, clinician-guided treatment at home',
        ]}
        note="Oxytocin prescribed for mood, stress, connection, or general wellness is an off-label use. Treatment is not appropriate for everyone. A licensed clinician will review your medical history, current medications, symptoms, and goals to determine whether oxytocin therapy may be appropriate for you. Individual experiences and results vary."
        accent="var(--oxy)"
      />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--oxy-mid) 0%, var(--oxy) 55%, #EAD8FF 100%)"
        eyebrow="Why nasal spray"
        title="Why a nasal spray?"
        body="Intranasal delivery is the route most often used in oxytocin research, because it is needle-free and may allow some oxytocin to reach the brain. How much reaches the brain, and how strong the effects are, is still being studied. Use exactly as prescribed — your clinician sets the dose and schedule."
        cards={[
          { icon: 'Brain', title: 'Studied pathways', desc: 'Research has looked at oxytocin and stress-related brain areas such as the amygdala' },
          { icon: 'Smiley', title: 'Stress response', desc: 'Some studies suggest effects on the stress response; findings are mixed' },
          { icon: 'Moon', title: 'Part of a routine', desc: 'May complement healthy habits for unwinding and rest — not a sleep medication' },
        ]}
      />

      {/* ── DISCOVER HOW OXYTOCIN MAY SUPPORT (restored from live) ── */}
      <BenefitGrid
        eyebrow="Personalized care, built around you"
        title="Discover how oxytocin may support calm & connection"
        intro="Oxytocin nasal spray may be considered for patients seeking clinician-guided support for stress response, emotional well-being, social connection, and a greater sense of balance in everyday life."
        items={[
          { title: 'Stress-response support', desc: 'Oxytocin is involved in the body’s response to stress. Some patients explore clinician-guided therapy to support a calmer response to everyday pressure and a smoother transition from stress to recovery.' },
          { title: 'Emotional balance', desc: 'Because oxytocin interacts with pathways involved in mood and emotional regulation, treatment may be considered as part of a broader plan focused on emotional well-being and day-to-day resilience.' },
          { title: 'Connection and social well-being', desc: 'Oxytocin is naturally involved in bonding, trust, and social signaling. Some patients are interested in treatment to support a greater sense of connection, closeness, and comfort in social interactions.' },
          { title: 'Calm and restorative routines', desc: 'By supporting pathways associated with relaxation and nervous-system balance, oxytocin may complement healthy routines focused on unwinding, emotional recovery, and more restorative rest.' },
        ]}
        image="/images/oxytocin-calm-wellbeing-nutreeclinic.jpg"
        imageAlt="Woman smiling with eyes closed on the beach at sunset — calm and emotional well-being"
        disclaimer="Oxytocin prescribed for stress, mood, connection, or general wellness is an off-label use. This information is educational only and is not a promise of results. Eligibility, response, side effects, and outcomes vary. Your clinician will review your medical history, medications, symptoms, and goals to determine whether treatment is appropriate for you."
        accent="var(--oxy)"
      />

      <HowItWorks
        gradient="linear-gradient(135deg, var(--oxy-mid), var(--oxy))"
        steps={[
          { title: 'Start as prescribed', desc: 'If your clinician prescribes oxytocin, you use the nasal spray exactly as directed — never more often than prescribed.' },
          { title: 'Check in with your clinician', desc: 'Your clinician asks how you are feeling and whether you have side effects. Some patients notice subtle changes; others notice none.' },
          { title: 'Review and adjust', desc: 'Your clinician decides with you whether to continue, adjust, or stop. Oxytocin is not a substitute for mental-health care; for a crisis, call or text 988, and for emergencies call 911.' },
        ]}
      />

      <ScienceGrid
        eyebrow="The science"
        title="What oxytocin does in the brain."
        iconGradient="linear-gradient(135deg, var(--oxy-mid), var(--oxy))"
        items={[
          { icon: 'Heart', title: 'Amygdala activity', desc: 'In some research studies, intranasal oxytocin reduced amygdala reactivity — the brain\'s threat-detection centre. Results across studies are mixed.' },
          { icon: 'ArrowsClockwise', title: 'Stress hormones', desc: 'Oxytocin interacts with the body\'s stress-hormone system. Some studies report lower cortisol responses to stress, while others do not.' },
          { icon: 'Plant', title: 'Early research areas', desc: 'Laboratory and early human research is exploring oxytocin and inflammation. This is not an established clinical use.' },
        ]}
      />

      {/* ── NEXT STEPS (restored from live) ──────────────────────── */}
      <NumberedSteps
        eyebrow="Simple, guided care"
        title="Next steps"
        accent="linear-gradient(135deg, var(--oxy-mid), var(--oxy))"
        steps={[
          { title: 'Digital Intake', desc: 'Tell us about your health history, lifestyle, and goals through our secure online portal.' },
          { title: 'Provider Review', desc: `${CONSULT_NEUTRAL} Your clinician determines whether Oxytocin therapy is appropriate for you.` },
          { title: 'Doorstep Delivery', desc: 'If appropriate, your personalized medication kit is shipped directly to your door with everything you need to begin.' },
          { title: 'Ongoing Support', desc: 'Your care doesn’t stop after delivery. Your clinician remains available to monitor your progress and adjust your treatment when needed.' },
        ]}
      />

      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="Oxytocin pairs well with these treatments."
        items={[
          { name: 'NAD+ Therapy', sub: 'Cellular energy — complements stress-related fatigue', href: '/nad+',    arrowColor: 'var(--nad-dark)', img: '/images/nad-plus-injectable-therapy-nutreeclinic-nav.png' },
          { name: 'B6 / B12',    sub: 'Neurological support · mood & energy',                 href: '/b12',    arrowColor: 'var(--b12-dark)' },
          { name: 'Sermorelin',  sub: 'Recovery, strength & sleep quality',                   href: '/sermorelin', arrowColor: 'var(--ser-dark)', img: '/images/sermorelin-growth-hormone-therapy-nutreeclinic-nav.png' },
        ]}
      />

      <SeoFAQ items={faqs} accent="var(--oxy)" accentDark="var(--oxy-dark)" />

      <ImportantSafetyInfo drugs={['oxytocin']} />

      <PageLegal text="Compounded oxytocin nasal spray is prepared by state-licensed 503A compounding pharmacies. It is not FDA-approved, and the FDA does not review compounded drugs for safety, effectiveness, or quality. Oxytocin is FDA-approved only as an injection for certain obstetric uses; use for mood, stress, connection, or general wellness is off-label, and evidence is limited. Not a treatment for psychiatric conditions. Not appropriate during pregnancy. Prescriptions are issued only if a licensed provider determines treatment is appropriate. Individual results vary. Care is available to patients located in Florida. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
