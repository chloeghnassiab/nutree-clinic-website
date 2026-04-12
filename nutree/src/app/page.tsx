import type { Metadata } from 'next'
import Link from 'next/link'
import { ConsultBand } from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'Science-based telehealth. Human-centered care.',
  description: 'Physician-guided GLP-1 weight loss, NAD+, Sermorelin, Oxytocin, and B12 therapy. Licensed Florida telehealth, delivered to your door.',
}

const TREATMENTS = [
  { name: 'GLP-1 Weight Loss', sub: 'Semaglutide · Tirzepatide · Microdosing', price: 'from $249/mo', href: '/weight-loss', bg: 'linear-gradient(135deg, var(--glp-mid) 0%, var(--glp) 100%)', priceColor: 'var(--glp-dark)', size: 'large' },
  { name: 'NAD+ Therapy',      sub: 'Energy · anti-aging · longevity',          price: 'from $TBD/mo', href: '/nad',         bg: 'linear-gradient(135deg, var(--nad-mid) 0%, var(--nad) 100%)', priceColor: 'var(--nad-dark)', size: 'medium' },
  { name: 'Sermorelin',        sub: 'Growth hormone · strength',                price: 'from $125 first', href: '/sermorelin', bg: 'linear-gradient(135deg, var(--ser-mid) 0%, var(--ser) 100%)', priceColor: 'var(--ser-dark)', size: 'medium' },
  { name: 'Oxytocin',          sub: 'Stress relief · well-being',               price: 'from $TBD/mo', href: '/oxytocin',    bg: 'linear-gradient(135deg, var(--oxy-mid) 0%, var(--oxy) 100%)', priceColor: 'var(--oxy-dark)', size: 'medium' },
  { name: 'B6 / B12',          sub: 'Energy & vitality',                        price: 'from $TBD/mo', href: '/b12',         bg: 'linear-gradient(135deg, var(--b12-mid) 0%, var(--b12) 100%)', priceColor: 'var(--b12-dark)', size: 'small' },
]

const HOW_STEPS = [
  { n: '1', title: 'Check your eligibility',        desc: 'Complete a short health questionnaire online. Takes 3 minutes.', color: 'var(--glp)' },
  { n: '2', title: 'Meet with a licensed provider', desc: 'Video or phone consultation. Your clinician reviews your history and determines the right plan — or none, if it\'s not right for you.', color: 'var(--nad)' },
  { n: '3', title: 'Receive your medication',       desc: 'Prescribed by your clinician, prepared by a licensed 503A pharmacy, shipped free to your door.', color: 'var(--ser)' },
  { n: '4', title: 'Ongoing care and check-ins',    desc: 'Your provider monitors your progress, adjusts your dose, and is available between visits.', color: 'var(--oxy)' },
]

export default function HomePage() {
  return (
    <>
      <style>{`
        .treatment-card { transition: box-shadow 0.2s, transform 0.2s; }
        .treatment-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.12); transform: translateY(-2px); }
      `}</style>

      {/* HERO */}
      <section style={{ padding: '2.5rem 1rem 1.5rem', background: 'var(--base)' }}>
        <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.875rem' }}>
          Florida · Licensed telehealth · LegitScript certified
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 3rem)', color: 'var(--ink)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
          Science-based<br />treatments.<br />
          <span style={{ color: 'var(--teal)' }}>Human-centered</span><br />care.
        </h1>
        <p style={{ fontSize: '0.8125rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 320 }}>
          Physician-guided GLP-1, NAD+, Sermorelin, Oxytocin, B12. Delivered to your door.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          <Link href="/weight-loss" className="btn-primary">Check my eligibility →</Link>
          <Link href="/consult" className="btn-ghost">Book a consultation</Link>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {['✓ Free shipping', '✓ FSA/HSA eligible', '✓ No insurance needed', '✓ Cancel anytime'].map(t => (
            <div key={t} className="trust-pill">{t}</div>
          ))}
        </div>
      </section>

      {/* TREATMENT CARDS */}
      <section style={{ padding: '1rem', background: 'var(--base)' }}>
        <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>
          Treatments
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <TreatmentCard item={TREATMENTS[0]} flex={1.4} />
          <TreatmentCard item={TREATMENTS[1]} flex={1} />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <TreatmentCard item={TREATMENTS[2]} flex={1} />
          <TreatmentCard item={TREATMENTS[3]} flex={1} />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <TreatmentCard item={TREATMENTS[4]} flex={1} />
          <Link href="/consult" className="treatment-card" style={{
            flex: 1, display: 'block', textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--con) 0%, #FAD8CC 100%)',
            borderRadius: 'var(--radius-lg)', padding: '1rem',
          }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.875rem', color: 'var(--ink)', marginBottom: 3 }}>Book a Consultation</div>
            <div style={{ fontSize: '0.5625rem', color: 'var(--con-dark)', marginBottom: '0.625rem' }}>30 min · licensed provider</div>
            <div style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--con-dark)' }}>$50 → credited to first plan</div>
            <div style={{ display: 'inline-block', marginTop: '0.625rem', padding: '6px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--ink)', color: '#fff', fontSize: '0.5625rem', fontWeight: 700 }}>
              Book now →
            </div>
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '1.5rem 1rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>How it works</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--ink)', marginBottom: '1rem', lineHeight: 1.25 }}>
          From first question<br />to first delivery.
        </h2>
        {HOW_STEPS.map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.875rem 0', borderBottom: i < HOW_STEPS.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: step.color, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)' }}>
              {step.n}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{step.title}</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--ink-3)', lineHeight: 1.55 }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </section>

      {/* CLINICAL INDEPENDENCE */}
      <section style={{ padding: '1.25rem 1rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '1rem', border: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.375rem' }}>Our clinical approach</div>
          <p style={{ fontSize: '0.6875rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>
            Every Nutree consultation is guided by one principle: your clinician&apos;s role is to determine what is medically appropriate for you — not to recommend a specific plan. If a treatment is not right for you, your provider will tell you that honestly.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: '1.25rem 1rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.875rem' }}>From our patients</div>
        <div style={{ background: 'var(--base)', borderRadius: 'var(--radius-lg)', padding: '1rem', border: '0.5px solid var(--border)' }}>
          <div style={{ color: '#F9B800', fontSize: '0.6875rem', marginBottom: '0.375rem' }}>★★★★★</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.8125rem', color: 'var(--ink)', fontStyle: 'italic', lineHeight: 1.65, marginBottom: '0.5rem' }}>
            &ldquo;After 9 weeks on a microdosed GLP-1, I lost 9 pounds. I already feel lighter, confident, in control. With a team that supports me!&rdquo;
          </p>
          <div style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--ink-3)' }}>Courtney, 32 · Nutree Clinic patient</div>
          <div style={{ display: 'inline-block', marginTop: 5, fontSize: '0.5rem', fontWeight: 700, padding: '2px 8px', borderRadius: 'var(--radius-pill)', background: 'var(--glp)', color: 'var(--glp-dark)' }}>GLP-1 Microdosing</div>
        </div>
      </section>

      <ConsultBand heading="Not sure where to start?" sub="30 min · licensed provider · $50 · credited to your first plan" />
    </>
  )
}

function TreatmentCard({ item, flex }: { item: typeof TREATMENTS[0]; flex: number }) {
  return (
    <Link href={item.href} className="treatment-card" style={{
      flex, display: 'block', textDecoration: 'none',
      background: item.bg,
      borderRadius: 'var(--radius-lg)', padding: '1rem',
      position: 'relative', overflow: 'hidden',
      minHeight: item.size === 'large' ? 140 : item.size === 'medium' ? 120 : 100,
    }}>
      <div style={{ position: 'absolute', width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', top: -15, right: -15 }} />
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: item.size === 'large' ? '1rem' : '0.875rem', color: 'var(--ink)', lineHeight: 1.25, marginBottom: 3, position: 'relative' }}>
        {item.name}
      </div>
      <div style={{ fontSize: '0.5rem', color: 'var(--ink-2)', marginBottom: '0.625rem', position: 'relative' }}>{item.sub}</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.5rem', fontWeight: 700, color: 'var(--ink)', background: 'rgba(0,0,0,0.08)', padding: '4px 9px', borderRadius: 'var(--radius-pill)', position: 'relative' }}>
        LEARN MORE →
      </div>
      <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: item.priceColor, marginTop: 6, position: 'relative' }}>{item.price}</div>
    </Link>
  )
}
