// Homepage sections restored from the live Umso homepage (server components).
import Image from 'next/image'
import Link from 'next/link'
import { PRICES } from '@/lib/prices.config'
import { CTAButton, CheckList } from '@/components/treatment/SeoBlocks'

const section = (bg: string): React.CSSProperties => ({ padding: '2.5rem 1.5rem', background: bg, borderTop: '1px solid var(--border)' })
const inner: React.CSSProperties = { maxWidth: 1080, margin: '0 auto' }
const eyebrow: React.CSSProperties = { fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '0.75rem' }
const h3: React.CSSProperties = { fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 6, lineHeight: 1.35 }
const body: React.CSSProperties = { fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }
const muted: React.CSSProperties = { fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.65 }
const note: React.CSSProperties = { fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6 }
const grid = (min: number): React.CSSProperties => ({ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`, gap: '0.75rem' })
const card: React.CSSProperties = { background: 'var(--white)', border: '0.5px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }

const P = PRICES
const isTBD = (label: string) => label.includes('TBD')

/** "from $X/mo" using the lowest per-4-week price of a plan family in prices.config. */
export function fromMonthly(cents: number) {
  return `from $${Math.round(cents / 100)}/mo`
}

// ─── PROGRAM DETAILS ("Science-based treatments. Human-centered care.") ─────
export function ProgramDetails() {
  const programs = [
    {
      name: 'GLP-1 Microdosing', tag: 'Metabolic & appetite support', href: '/weight-loss', color: 'var(--glp)',
      desc: 'A lower-dose approach using compounded semaglutide or tirzepatide (not FDA-approved) that may support appetite regulation and help quiet food noise, with gradual progress. Prescribed only if appropriate.',
      bullets: [
        `Semaglutide: ${P.microdosingSema.tenWeek.label}`,
        `Tirzepatide: ${P.microDosingTirz.tenWeek.label}`,
        'Personalized weekly dosing based on your response',
        'Consultation, medication, and shipping included',
      ],
    },
    {
      name: 'NAD+ Therapy', tag: 'Cellular energy & wellness', href: '/nad+', color: 'var(--nad)',
      desc: 'Clinician-guided, compounded NAD+ therapy, prescribed off-label for patients with energy, mental-clarity, and healthy-aging goals. Human evidence is still limited.',
      bullets: [
        ...(isTBD(P.nadInjectable.monthly.monthlyLabel) ? [] : [`From ${P.nadInjectable.sixMonth.monthlyLabel}`]),
        'Injectable or needle-free nasal spray options',
        'For energy and mental-clarity goals (off-label)',
        'Convenient treatment from home',
        'Consultation, treatment, and shipping included',
      ],
    },
    {
      name: 'Sermorelin', tag: 'Sleep, recovery & body composition', href: '/sermorelin', color: 'var(--ser)',
      desc: 'A clinician-guided, compounded peptide (off-label) that prompts your body’s own growth hormone signaling. Some patients use it for sleep, recovery, energy, and body-composition goals; evidence is limited.',
      bullets: [
        `Monthly plan: ${P.sermorelin.monthly.monthlyLabel}`,
        'May support sleep quality',
        'May support recovery alongside training',
        'Response varies; reviewed by your clinician',
        'Consultation, treatment, and shipping included',
      ],
    },
  ]
  return (
    <section style={section('var(--white)')}>
      <div style={inner}>
        <div style={eyebrow}>Personalized programs</div>
        <h2 style={h2}>Science-based treatments. Human-centered care.</h2>
        <p style={{ ...body, maxWidth: 640, marginBottom: '1.25rem' }}>
          Explore personalized programs designed to support weight, energy, recovery, and long-term well-being — with real medical
          guidance every step of the way.
        </p>
        <div style={grid(280)}>
          {programs.map(p => (
            <div key={p.name} style={{ ...card, borderTop: `4px solid ${p.color}` }}>
              <div style={{ ...note, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{p.tag}</div>
              <h3 style={{ ...h3, fontFamily: 'var(--font-serif)', fontSize: '1.375rem', fontWeight: 600 }}>{p.name}</h3>
              <p style={{ ...muted, marginBottom: '0.875rem' }}>{p.desc}</p>
              <CheckList items={p.bullets} color={p.color} />
              <Link href={p.href} style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)' }}>
                Discover {p.name} →
              </Link>
            </div>
          ))}
        </div>
        <p style={{ ...note, marginTop: '1rem' }}>
          All treatments are subject to medical evaluation and clinical approval. Compounded medications are not FDA-approved, and
          the FDA does not review them for safety, effectiveness, or quality. Results vary by patient. Pricing includes the
          services described above unless otherwise stated.
        </p>
      </div>
    </section>
  )
}

// ─── FDA-REGULATED PHARMACY PARTNERS ─────────────────────────────────────────
export function PharmacyPartners() {
  return (
    <section style={section('var(--base)')}>
      <div style={{ ...inner, ...card, background: 'linear-gradient(135deg, rgba(82,159,153,0.14), rgba(255,255,255,0.9))' }}>
        <div style={eyebrow}>Quality & safety</div>
        <h2 style={h2}>We work with state-licensed U.S. compounding pharmacies</h2>
        <p style={{ ...body, maxWidth: 680, marginBottom: '0.5rem' }}>
          Prescriptions are filled by state-licensed 503A sterile compounding pharmacies in the United States, which are subject
          to state pharmacy board oversight and federal compounding requirements. Compounded medications are not FDA-approved.
        </p>
        <p style={{ ...body, maxWidth: 680 }}>Your medications are sent to your door with free shipping.</p>
      </div>
    </section>
  )
}

// ─── FEEL BETTER, LOOK BETTER, LIVE BETTER ───────────────────────────────────
export function FeelBetter() {
  const pillars = [
    { kicker: 'Real follow-up', title: 'Ongoing care that keeps you moving forward.', desc: 'Your clinician stays connected through regular check-ins — fine-tuning your plan, celebrating milestones, and ensuring your progress stays safe, steady, and sustainable.' },
    { kicker: 'Real guidance', title: 'Expert support, every step of the way.', desc: 'From nutrition to lifestyle adjustments, your Nutree team helps you understand your body and make choices that support your goals.' },
    { kicker: 'Real progress', title: 'See your success in motion.', desc: 'Track your results, stay accountable, and watch your transformation unfold inside the Nutree app. Every update helps your provider personalize your care.' },
  ]
  return (
    <section style={section('var(--white)')}>
      <div style={inner}>
        <h2 style={h2}>Feel better, look better, live better</h2>
        <p style={{ ...body, maxWidth: 640, marginBottom: '1.25rem' }}>
          — with care that’s truly personal, designed around your goals and your rhythm.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {pillars.map(p => (
              <div key={p.kicker} style={{ ...card, background: 'var(--base)' }}>
                <div style={{ ...note, fontWeight: 700, color: 'var(--teal-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{p.kicker}</div>
                <h3 style={h3}>{p.title}</h3>
                <p style={muted}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '2000 / 1020' }}>
            <Image
              src="/images/personalized-weight-loss-plan-nutreeclinic.png"
              alt="Example personalized Nutree weight loss plan: compounded semaglutide once weekly, protein, activity, and sleep targets"
              fill sizes="(max-width: 760px) 100vw, 540px" style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <p style={{ ...note, marginTop: '1rem' }}>
          Prescriptions are issued only when clinically appropriate. A medication recommendation is never guaranteed and is always
          at the discretion of your licensed clinician. The term “month” refers to a 28-day period.
        </p>
      </div>
    </section>
  )
}

// ─── SIMPLE, TRANSPARENT PRICING (#Pricing) ──────────────────────────────────
export function HomePricing() {
  const glpFeatures = ['Custom treatment plan', 'Ongoing clinician follow-up', 'Weekly check-ins', 'Diet & fitness guidance', '7/7 care support', 'Cancel anytime']
  const plans = [
    {
      name: 'Consultation', sub: 'One-time payment · credited to your first plan', price: P.consult.initial.label, unit: 'per consultation',
      features: ['Meet a licensed clinician', 'Personalized treatment recommendation', 'No commitment'], href: '/consult', cta: 'Book your consultation',
    },
    {
      name: 'Semaglutide plan', sub: 'Compounded injectable semaglutide — GLP-1', price: P.semaglutide.monthly.monthlyLabel.replace(' (4 weeks)', ''), unit: `per month, billed every 4 weeks · ${P.semaglutide.sixMonth.monthlyLabel.replace(' (4 weeks)', '')} on a 6-month plan`,
      features: glpFeatures, href: '/weight-loss', cta: 'Get started',
    },
    {
      name: 'Tirzepatide plan', sub: 'Compounded injectable tirzepatide — GLP-1/GIP', price: P.tirzepatide.monthly.monthlyLabel.replace(' (4 weeks)', ''), unit: `per month, billed every 4 weeks · ${P.tirzepatide.sixMonth.monthlyLabel.replace(' (4 weeks)', '')} on a 6-month plan`,
      features: glpFeatures, href: '/weight-loss', cta: 'Get started',
    },
  ]
  return (
    <section id="Pricing" style={{ ...section('var(--base)'), scrollMarginTop: 80 }}>
      <div style={inner}>
        <div style={eyebrow}>FSA/HSA eligible</div>
        <h2 style={h2}>Simple, Transparent Pricing</h2>
        <p style={{ ...body, maxWidth: 640, marginBottom: '1.25rem' }}>
          Explore our pricing plans designed to fit your needs. From comprehensive packages to customizable options, find the
          perfect match for your wellness journey.
        </p>
        <div style={grid(260)}>
          {plans.map(p => (
            <div key={p.name} style={{ ...card, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ ...h3, fontFamily: 'var(--font-serif)', fontSize: '1.375rem', fontWeight: 600, marginBottom: 2 }}>{p.name}</h3>
              <div style={{ ...note, marginBottom: '0.75rem' }}>{p.sub}</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1 }}>{p.price}</div>
              <div style={{ ...note, marginBottom: '1rem' }}>{p.unit}</div>
              <div style={{ flex: 1, marginBottom: '1rem' }}><CheckList items={p.features} color="var(--glp)" /></div>
              <CTAButton href={p.href}>{p.cta} →</CTAButton>
            </div>
          ))}
        </div>
        <p style={{ ...note, marginTop: '1rem' }}>
          Semaglutide and tirzepatide are prescribed only if you are eligible, at your clinician’s discretion. Plan price includes
          medication, clinician care, and shipping. See all plans, including GLP-1 microdosing, on our{' '}
          <Link href="/weight-loss" style={{ color: 'var(--teal-dark)' }}>weight loss page</Link> and{' '}
          <Link href="/pricing" style={{ color: 'var(--teal-dark)' }}>pricing page</Link>.
        </p>
      </div>
    </section>
  )
}

// ─── ORGANIZATION / MEDICAL BUSINESS JSON-LD ─────────────────────────────────
export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'Organization'],
  name: 'Nutree Clinic',
  legalName: 'Nutree Clinic, LLC',
  url: 'https://www.nutreeclinic.com/',
  logo: 'https://www.nutreeclinic.com/images/NutreeClinic-logo-stacked.png',
  description: 'Weight Loss, Healthy Aging & Muscle Strength. Semaglutide & Tirzepatide prescriptions (if eligible). Personalized care, ongoing follow-up, shipped to you.',
  areaServed: { '@type': 'State', name: 'Florida' },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61582421796670',
    'https://www.instagram.com/nutreeclinic/',
  ],
}
