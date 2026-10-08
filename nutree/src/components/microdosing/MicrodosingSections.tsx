// Shared sections for /glp-1microdosing, /glp-1microdosing/florida and the
// Florida city pages. Content carried over from the live Umso pages, restyled
// with the new site's design language (PageComponents + globals.css tokens).
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle, ArrowRight, Star, SmileyMeh, Scales, MagnifyingGlass, MapPin,
} from '@phosphor-icons/react/dist/ssr'
import { PRICES } from '@/lib/prices.config'
import { CHECKOUT } from '@/lib/checkout.config'
import { FLORIDA_CITIES, FLORIDA_REGIONS, FLORIDA_HUB_PATH, cityPath } from '@/lib/florida-cities.config'
import {
  PromoList, PlanRow, ProductBlockHeader, InStockBadge, Section, SectionHeader,
} from '@/components/ui/PageComponents'

const P = PRICES

const eyebrowStyle: React.CSSProperties = {
  fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--glp-dark)', marginBottom: '0.5rem',
}
const bodyStyle: React.CSSProperties = { fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 640 }
const smallNote: React.CSSProperties = { fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6 }
const pillLink: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.75rem 1.5rem', borderRadius: 999,
  background: 'var(--ink)', color: '#fff', fontSize: '1rem', fontWeight: 700, textDecoration: 'none',
}

// ─── HERO ────────────────────────────────────────────────────────────────────
export function MicrodosingHero({ eyebrow, h1, subtitle }: { eyebrow: string; h1: string; subtitle: string }) {
  return (
    <div className="hero-split">
      <div className="hero-photo gradient-glp" style={{ minHeight: 320 }}>
        <InStockBadge />
        <Image
          src="/images/microdosing/glp-1-microdosing-vial-nutree-clinic.png"
          alt="GLP-1 microdosing vial — low-dose compounded semaglutide or tirzepatide from Nutree Clinic"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="hero-right">
        <div style={eyebrowStyle}>{eyebrow}</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
          {h1}
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', marginBottom: '0.75rem' }}>{subtitle}</p>
        <PromoList />

        <div style={{ marginBottom: '0.75rem' }}>
          <ProductBlockHeader>Microdose Semaglutide · single agonist</ProductBlockHeader>
          <div style={{ ...smallNote, marginBottom: 6 }}>Supports appetite regulation and metabolic balance</div>
          <PlanRow name="10-week program" sub="All-inclusive · no auto-renewal" price={P.microdosingSema.tenWeek.label} afterPrice={P.microdosingSema.tenWeek.perWeekLabel} color="var(--glp-dark)" href={CHECKOUT.semaglutideMicrodosing} ctaLabel="Buy Semaglutide now" />
          <div style={{ ...smallNote, marginTop: 3, paddingLeft: 4 }}>{P.microdosingSema.tenWeek.perWeekLabel} · billed upfront</div>
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          <ProductBlockHeader>Microdose Tirzepatide · dual agonist</ProductBlockHeader>
          <div style={{ ...smallNote, marginBottom: 6 }}>GLP-1/GIP care for appetite regulation and metabolic balance</div>
          <PlanRow name="10-week program" sub="All-inclusive · no auto-renewal" price={P.microDosingTirz.tenWeek.label} afterPrice={P.microDosingTirz.tenWeek.perWeekLabel} color="var(--glp-dark)" href={CHECKOUT.tirzepatideMicrodosing} ctaLabel="Buy Tirzepatide now" />
          <div style={{ ...smallNote, marginTop: 3, paddingLeft: 4 }}>{P.microDosingTirz.tenWeek.perWeekLabel} · billed upfront</div>
        </div>

        <Link href="/consult" style={{ display: 'block', padding: '0.75rem 0.875rem', borderRadius: 8, border: '1px dashed var(--glp-dark)', background: 'rgba(184,228,240,0.18)', textDecoration: 'none' }}>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)' }}>Not sure which option is right for you?</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--ink-3)', marginTop: 2 }}>Talk with our team and learn more before you begin →</div>
        </Link>
      </div>
    </div>
  )
}

/** Plan inclusions + approval/refund note shown under the hero CTA (live copy). */
export function PlanFinePrint() {
  return (
    <div style={{ background: 'var(--white)', padding: '0 1.25rem 1rem' }}>
      <p style={{ ...smallNote, maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        GLP-1 microdosing uses a low weekly dose to help support appetite regulation and metabolic balance. Each plan includes your clinician consultation, medication and home delivery, paid upfront. No membership. No hidden fees. No commitment. Subject to clinical approval — if you are not approved, your payment will be refunded.
      </p>
    </div>
  )
}

// ─── MICRODOSING vs STANDARD ─────────────────────────────────────────────────
export function MicrodosingComparison() {
  const rows: [string, string, string][] = [
    ['Dose',              'Low, carefully guided amounts',                    'Standard, higher-dose protocols'],
    ['Frequency',         'Typically once weekly',                            'Typically once weekly'],
    ['Experience',        'Gentler, more gradual',                            'More intensive'],
    ['Active ingredient', 'Semaglutide or tirzepatide',                       'Semaglutide or tirzepatide'],
    ['Side effects',      'May be fewer for some patients — can still occur', 'More common during dose increases'],
    ['Commitment',        'Fixed 10-week plan, no auto-renewal',              'Monthly plan, billed every 4 weeks'],
    ['Best suited for',   'Those who prefer a steadier, lower-dose start',    'Those who want a standard full-dose program'],
  ]
  return (
    <Section bg="var(--white)">
      <SectionHeader
        eyebrow="Two GLP-1 options at Nutree"
        title="Microdosing vs. standard GLP-1 dosing"
        body="We offer both — a lower-dose microdosing approach and a standard, full-dose GLP-1 program. Here's how they compare so you and your clinician can choose the right fit."
      />
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
          <thead>
            <tr>
              <th scope="col" style={{ padding: '8px 6px', textAlign: 'left', borderBottom: '2px solid var(--border)', width: '30%' }}><span style={{ position: 'absolute', left: -9999 }}>Feature</span></th>
              <th scope="col" style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                <span style={{ background: 'var(--glp)', color: 'var(--glp-dark)', padding: '3px 8px', borderRadius: 5, fontSize: '0.875rem', fontWeight: 700, display: 'inline-block' }}>Lower-dose<br />GLP-1 microdosing</span>
              </th>
              <th scope="col" style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                <span style={{ background: 'var(--base)', color: 'var(--ink-3)', padding: '3px 8px', borderRadius: 5, fontSize: '0.875rem', fontWeight: 700, display: 'inline-block', border: '1px solid var(--border)' }}>Full-dose<br />standard GLP-1</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b], i) => (
              <tr key={label} style={{ background: i % 2 === 1 ? 'rgba(184,228,240,0.12)' : 'var(--white)' }}>
                <th scope="row" style={{ padding: '8px 6px', fontWeight: 700, color: 'var(--ink)', borderBottom: '0.5px solid var(--border)', fontSize: '0.875rem', textAlign: 'left' }}>{label}</th>
                <td style={{ padding: '8px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)', fontSize: '0.875rem' }}>{a}</td>
                <td style={{ padding: '8px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)', fontSize: '0.875rem' }}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
        <Link href="/weight-loss" style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--glp-dark)' }}>
          Prefer the standard, full-dose route? See our standard GLP-1 program →
        </Link>
        <span style={smallNote}>Your clinician determines which approach, if any, is appropriate for you.</span>
      </div>
    </Section>
  )
}

// ─── BENEFITS ("Join thousands…") ────────────────────────────────────────────
const BENEFITS = [
  { t: 'Metabolic and hormonal support', d: 'May support blood sugar regulation and insulin sensitivity as part of a clinician-guided metabolic plan.' },
  { t: 'Gradual, sustainable progress',  d: 'A gentler dosing approach designed for patients who prefer steadier, more sustainable changes over time.' },
  { t: 'Appetite and craving support',   d: 'Treatment may help reduce “food noise” and support more balanced eating routines.' },
  { t: 'Whole-body wellness focus',      d: 'GLP-1 pathways are being studied for broader effects related to metabolic and systemic health.' },
]

export function MicrodosingBenefits({ heading }: { heading: string }) {
  return (
    <Section bg="var(--base)">
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: '1 1 340px' }}>
          <SectionHeader
            eyebrow="Personalized care, built around you"
            title={heading}
            body="A lower-dose GLP-1 approach is often chosen by patients seeking a more gradual, personalized path to metabolic balance and appetite regulation."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.625rem', marginBottom: '1rem' }}>
            {BENEFITS.map(b => (
              <div key={b.t} style={{ background: 'var(--white)', border: '0.5px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <CheckCircle size={20} weight="fill" color="var(--glp-dark)" style={{ flexShrink: 0, marginTop: 1 }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-sans)' }}>{b.t}</h3>
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.6, margin: '6px 0 0 28px' }}>{b.d}</p>
              </div>
            ))}
          </div>
          <Link href="/consult" style={pillLink}>Get started <ArrowRight size={16} weight="bold" /></Link>
        </div>
        <div style={{ flex: '0 1 300px', margin: '0 auto' }}>
          <Image
            src="/images/microdosing/nutree-glp-1-treatment-kit.png"
            alt="Nutree Clinic GLP-1 vial from the microdosing treatment kit"
            width={600} height={600}
            sizes="300px"
            style={{ width: '100%', height: 'auto', borderRadius: 16 }}
          />
        </div>
      </div>
      <p style={{ ...smallNote, marginTop: '1rem' }}>
        This information is educational only and is not a promise of results. Eligibility, response, side effects, and outcomes vary. Your clinician will determine whether treatment is appropriate for you based on your medical history and goals.
      </p>
    </Section>
  )
}

// ─── HOW IT WORKS / WHO IT'S FOR ─────────────────────────────────────────────
const WHO_DETAILED = [
  { Icon: Star,            t: "You've never tried GLP-1 before",                  d: 'Microdosing is a gentle way to experience GLP-1 therapy for the first time.' },
  { Icon: SmileyMeh,       t: 'You had side effects on standard dosing',           d: 'If you stopped GLP-1 treatment because of nausea or digestive discomfort, a lower dose may be easier to tolerate. Your clinician will review what happened before.' },
  { Icon: Scales,          t: 'You have a smaller amount of weight to lose',       d: 'For patients closer to their goal weight, a lower dose is often clinically appropriate.' },
  { Icon: MagnifyingGlass, t: 'You want to try before committing to monthly plans', d: 'A 5- or 10-week program lets you experience the medication with no ongoing obligation.' },
]

export function HowMicrodosingWorks({ detailed = false }: { detailed?: boolean }) {
  return (
    <Section bg="var(--white)">
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <Image
            src="/images/microdosing/metabolic-wellness-nutree-clinic.jpg"
            alt="Woman sitting on a wooden stool, smiling — metabolic wellness with Nutree Clinic"
            width={1200} height={799}
            sizes="(max-width: 640px) 100vw, 45vw"
            style={{ width: '100%', height: 'auto', borderRadius: 16 }}
          />
        </div>
        <div style={{ flex: '1 1 340px' }}>
          <SectionHeader
            eyebrow="How it works"
            title="How does GLP-1 microdosing work?"
            body="Nutree Clinic uses small weekly doses of semaglutide or tirzepatide to support appetite and metabolic balance, with a gentle start to help your body adjust."
          />
          <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', margin: '0 0 0.5rem', fontFamily: 'var(--font-sans)' }}>Who is this for?</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.875rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Support for appetite and cravings', 'A gradual, low-dose GLP-1 approach', 'Improving metabolic balance', 'Clinician-guided, personalized care'].map(t => (
              <li key={t} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: '0.9375rem', color: 'var(--ink-2)' }}>
                <CheckCircle size={18} weight="fill" color="var(--glp-dark)" /> {t}
              </li>
            ))}
          </ul>
          <p style={{ ...smallNote, marginBottom: '1rem' }}>
            Every treatment plan is prescribed and monitored by a licensed provider to ensure safety, personalization, and appropriate follow-up.
          </p>
          <Link href="/consult" style={pillLink}>Get started <ArrowRight size={16} weight="bold" /></Link>
        </div>
      </div>

      {detailed && (
        <div style={{ marginTop: '1.75rem' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', color: 'var(--ink)', margin: '0 0 0.75rem', fontWeight: 400 }}>Most patients choose microdosing when…</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.5rem' }}>
            {WHO_DETAILED.map(({ Icon, t, d }) => (
              <div key={t} style={{ display: 'flex', gap: '0.875rem', padding: '1rem', borderRadius: 12, background: 'var(--base)', border: '0.5px solid var(--border)', alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg, var(--glp-mid), var(--glp))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} weight="regular" color="var(--glp-dark)" />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{t}</div>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}

// ─── NEXT STEPS ──────────────────────────────────────────────────────────────
export function MicrodosingNextSteps() {
  const steps = [
    { t: 'Digital intake',          d: 'Tell us about your health history, lifestyle, and goals through our secure online portal.' },
    { t: 'Clinician consultation',  d: 'A licensed clinician reviews your intake and connects with you by video or phone to discuss your goals and determine whether a gentle GLP-1 microdosing approach is right for you.' },
    { t: 'Doorstep delivery',       d: 'If appropriate, your personalized medication kit is shipped free and discreetly to your door with everything you need to begin.' },
    { t: 'Ongoing support',         d: 'Your care doesn’t stop after delivery. Your clinician remains available by direct message to monitor your progress and adjust your treatment when needed.' },
  ]
  return (
    <Section bg="var(--base)">
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: '1 1 360px' }}>
          <SectionHeader eyebrow="Simple, guided care" title="Next steps" />
          <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem' }}>
            {steps.map((s, i) => (
              <li key={s.t} style={{ display: 'flex', gap: '1rem', padding: '0.875rem 0', borderBottom: i < steps.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, var(--glp-mid), var(--glp))', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)' }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', margin: '0 0 4px', fontFamily: 'var(--font-sans)' }}>{s.t}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href="/consult" style={pillLink}>Get started <ArrowRight size={16} weight="bold" /></Link>
        </div>
        <div style={{ flex: '0 1 320px', margin: '0 auto' }}>
          <Image
            src="/images/microdosing/nutree-glp-1-microdosing-kit.png"
            alt="Nutree Clinic online intake form on a phone next to a GLP-1 vial"
            width={600} height={600}
            sizes="320px"
            style={{ width: '100%', height: 'auto', borderRadius: 16 }}
          />
        </div>
      </div>
    </Section>
  )
}

// ─── AT A GLANCE ─────────────────────────────────────────────────────────────
export function MicrodosingAtAGlance() {
  const rows: [string, string][] = [
    ['What it is',   'Low-dose semaglutide or tirzepatide, clinician-guided'],
    ['Supports',     'Appetite regulation and metabolic balance'],
    ["Who it's for", 'Adult Florida residents, after clinical review'],
    ['How',          '100% online telehealth — no in-person visits; video or phone when your clinician needs to speak with you'],
    ['Frequency',    'Typically once weekly'],
    ['Plans',        `Semaglutide ${P.microdosingSema.tenWeek.priceLabel} / Tirzepatide ${P.microDosingTirz.tenWeek.priceLabel} (10-week)`],
    ['Pharmacy',     'U.S. licensed 503(A) compounding pharmacies'],
    ['Delivery',     'Free; often as early as the day after your consult'],
  ]
  return (
    <Section bg="var(--white)">
      <SectionHeader eyebrow="Quick reference" title="GLP-1 microdosing at a glance" />
      <dl style={{ margin: 0, border: '0.5px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
        {rows.map(([k, v], i) => (
          <div key={k} style={{ display: 'flex', gap: '1rem', padding: '0.75rem 1rem', background: i % 2 ? 'rgba(184,228,240,0.12)' : 'var(--white)', borderTop: i ? '0.5px solid var(--border)' : 'none', flexWrap: 'wrap' }}>
            <dt style={{ flex: '0 0 130px', fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)' }}>{k}</dt>
            <dd style={{ flex: '1 1 220px', margin: 0, fontSize: '0.9375rem', color: 'var(--ink-2)' }}>{v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

// ─── STATEWIDE CARE ──────────────────────────────────────────────────────────
export function StatewideCare() {
  return (
    <Section bg="var(--base)">
      <SectionHeader eyebrow="Statewide telehealth" title="Microdosing care all over Florida" />
      <p style={{ ...bodyStyle, marginBottom: '1rem' }}>
        Nutree Clinic delivers the whole program online to all Florida residents statewide: a consultation with a Florida-licensed clinician, a plan tailored to how your body responds, close follow-up, and medication shipped free to your door. No waiting rooms, no commute, and no insurance required.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginRight: 4 }}>Other programs</span>
        {[{ n: 'NAD+', h: '/nad' }, { n: 'Sermorelin', h: '/sermorelin' }, { n: 'GLP-1 weight loss', h: '/weight-loss' }].map(l => (
          <Link key={l.h} href={l.h} style={{ padding: '6px 14px', borderRadius: 999, border: '1px solid var(--border)', background: 'var(--white)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}>{l.n}</Link>
        ))}
      </div>
    </Section>
  )
}

// ─── CITY DIRECTORY ──────────────────────────────────────────────────────────
export function CityDirectory({ exclude, title = 'Find GLP-1 microdosing in your city' }: { exclude?: string; title?: string }) {
  return (
    <Section bg="var(--white)">
      <SectionHeader
        eyebrow="Available across Florida"
        title={title}
        body="Telehealth covers the whole state — these pages just speak to your area directly."
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {FLORIDA_REGIONS.map(r => {
          const cities = FLORIDA_CITIES.filter(c => c.region === r.id && c.slug !== exclude)
          if (!cities.length) return null
          return (
            <div key={r.id}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', margin: '0 0 0.5rem', fontFamily: 'var(--font-sans)' }}>{r.label}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
                {cities.map(c => (
                  <Link key={c.slug} href={cityPath(c.slug)} className="also-item" style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <MapPin size={18} color="var(--glp-dark)" />
                      <span>
                        <span style={{ display: 'block', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)' }}>{c.directoryLabel}</span>
                        <span style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--ink-3)' }}>{c.county} County</span>
                      </span>
                    </span>
                    <ArrowRight size={16} weight="bold" color="var(--glp-dark)" />
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
        {exclude && (
          <Link href={FLORIDA_HUB_PATH} style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--glp-dark)' }}>
            See GLP-1 microdosing across Florida →
          </Link>
        )}
      </div>
    </Section>
  )
}

// ─── LEGAL ───────────────────────────────────────────────────────────────────
export const MICRODOSING_LEGAL =
  'Prescriptions are issued only when clinically appropriate and are always at the discretion of your licensed clinician; a medication recommendation is never guaranteed. Compounded medications associated with Nutree Clinic are prepared by state-licensed 503A compounding pharmacies, are not FDA-approved, and have not been evaluated by the FDA for safety, efficacy, or quality. Ozempic® and Mounjaro® are registered trademarks of their respective owners and are not affiliated with Nutree Clinic. Results vary and depend on individual factors. This page is for informational purposes only and does not create a doctor–patient relationship. Nutree Clinic LLC · Florida telehealth · LegitScript certified.'
