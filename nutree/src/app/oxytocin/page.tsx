// ─── OXYTOCIN PAGE ────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { PRICES } from '@/lib/prices.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, HowItWorks,
  ScienceGrid, Testimonials, AlsoFromNutree,
  PageLegal, ConsultBand, InStockBadge,
} from '@/components/ui/PageComponents'
import { ExplainerSection, BenefitGrid, NumberedSteps, SeoFAQ, faqsForPages } from '@/components/treatment/SeoBlocks'

const TITLE = 'Oxytocin Therapy Online | Support Mood, Stress & Connection | Nutree Clinic'
const DESCRIPTION = 'Clinician-guided oxytocin therapy designed to support emotional well-being, stress management, and a greater sense of connection. Delivered to your door with ongoing medical support.'

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
            Personalized oxytocin therapy, guided by real clinicians — support for calm, emotional balance, and connection
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
        title="The most direct route to calm."
        body="The nasal mucosa provides direct access to the central nervous system, allowing oxytocin to reach its target receptors efficiently. Two sprays daily, as prescribed — easy to build into any morning or evening routine."
        cards={[
          { icon: 'Brain', title: 'CNS targeting', desc: 'Direct access to the amygdala and stress-regulating pathways' },
          { icon: 'Smiley', title: 'Cortisol regulation', desc: 'Supports a calmer baseline stress response throughout the day' },
          { icon: 'Moon', title: 'Sleep support', desc: 'Lower evening cortisol supports a more natural transition to rest' },
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

      {/* ── NEXT STEPS (restored from live) ──────────────────────── */}
      <NumberedSteps
        eyebrow="Simple, guided care"
        title="Next steps"
        accent="linear-gradient(135deg, var(--oxy-mid), var(--oxy))"
        steps={[
          { title: 'Digital Intake', desc: 'Tell us about your health history, lifestyle, and goals through our secure online portal.' },
          { title: 'Video Consultation', desc: 'Meet with your clinician to discuss your goals and determine whether Oxytocin therapy is right for you.' },
          { title: 'Doorstep Delivery', desc: 'If appropriate, your personalized medication kit is shipped directly to your door with everything you need to begin.' },
          { title: 'Ongoing Support', desc: 'Your care doesn’t stop after delivery. Your clinician remains available to monitor your progress and adjust your treatment when needed.' },
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
          { name: 'NAD+ Therapy', sub: 'Cellular energy — complements stress-related fatigue', href: '/nad+',    arrowColor: 'var(--nad-dark)', img: '/images/nad-plus-injectable-therapy-nutreeclinic-nav.png' },
          { name: 'B6 / B12',    sub: 'Neurological support · mood & energy',                 href: '/b12',    arrowColor: 'var(--b12-dark)' },
          { name: 'Sermorelin',  sub: 'Recovery, strength & sleep quality',                   href: '/sermorelin', arrowColor: 'var(--ser-dark)', img: '/images/sermorelin-growth-hormone-therapy-nutreeclinic-nav.png' },
        ]}
      />

      <SeoFAQ items={faqs} accent="var(--oxy)" accentDark="var(--oxy-dark)" />

      <PageLegal text="Compounded oxytocin nasal spray is not FDA-approved and has not been evaluated by the FDA for safety, efficacy, or quality. Not indicated for psychiatric conditions. Not appropriate during pregnancy. Prescriptions issued at provider discretion only. Individual results vary. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
