import type { Metadata } from 'next'
import Link from 'next/link'
import { PRICES } from '@/lib/prices.config'
import { ConsultBand } from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'Pricing — Nutree Clinic',
  description: 'Transparent pricing for all Nutree Clinic treatments. GLP-1 from $249/mo. No hidden fees. Same price at every dose.',
}

const P = PRICES

const PLANS = [
  {
    name: 'GLP-1 Weight Loss',
    color: 'var(--glp)', darkColor: 'var(--glp-dark)',
    href: '/weight-loss',
    options: [
      { label: 'Compounded Semaglutide · Monthly',    price: P.semaglutide.monthly.label },
      { label: 'Compounded Semaglutide · 3-month',    price: P.semaglutide.threeMonth.label, badge: 'Save 8%' },
      { label: 'Compounded Tirzepatide · Monthly',    price: P.tirzepatide.monthly.label },
      { label: 'Compounded Tirzepatide · 3-month',    price: P.tirzepatide.threeMonth.label, badge: 'Save 8%' },
      { label: 'GLP-1 Microdosing Sema · 5-week',    price: P.microdosingSema.fiveWeek.label },
      { label: 'GLP-1 Microdosing Sema · 10-week',   price: P.microdosingSema.tenWeek.label },
      { label: 'GLP-1 Microdosing Tirz · 5-week',    price: P.microDosingTirz.fiveWeek.label },
      { label: 'Wegovy®',                              price: P.wegovy.monthly.label },
      { label: 'Mounjaro®',                            price: P.mounjaro.monthly.label },
    ],
  },
  {
    name: 'NAD+ Therapy',
    color: 'var(--nad)', darkColor: 'var(--nad-dark)',
    href: '/nad',
    options: [
      { label: 'Injectable · Monthly',   price: P.nadInjectable.monthly.label },
      { label: 'Injectable · 6-month',   price: P.nadInjectable.sixMonth.label, badge: 'Save 15%' },
      { label: 'Nasal Spray · Monthly',  price: P.nadNasalSpray.monthly.label },
      { label: 'Nasal Spray · 6-month',  price: P.nadNasalSpray.sixMonth.label, badge: 'Save 15%' },
      { label: 'Patches + GHK-Cu · Monthly', price: P.nadPatches.monthly.label },
      { label: 'Patches + GHK-Cu · 6-month', price: P.nadPatches.sixMonth.label, badge: 'Save 15%' },
    ],
  },
  {
    name: 'Sermorelin',
    color: 'var(--ser)', darkColor: 'var(--ser-dark)',
    href: '/sermorelin',
    options: [
      { label: '10-week starter plan',  price: P.sermorelin.tenWeek.label },
      { label: 'Monthly subscription',  price: `${P.sermorelin.monthly.firstLabel} · ${P.sermorelin.monthly.label} after` },
      { label: '3-month plan',          price: P.sermorelin.threeMonth.label, badge: 'Best value' },
    ],
  },
  {
    name: 'Oxytocin Nasal Spray',
    color: 'var(--oxy)', darkColor: 'var(--oxy-dark)',
    href: '/oxytocin',
    options: [
      { label: 'Monthly',   price: P.oxytocin.monthly.label },
      { label: '3-month',   price: P.oxytocin.threeMonth.label },
      { label: '6-month',   price: P.oxytocin.sixMonth.label, badge: 'Save 15%' },
    ],
  },
  {
    name: 'B6 / B12',
    color: 'var(--b12)', darkColor: 'var(--b12-dark)',
    href: '/b12',
    options: [
      { label: 'Injectable · Monthly',   price: P.b12Injectable.monthly.label },
      { label: 'Injectable · 6-month',   price: P.b12Injectable.sixMonth.label, badge: 'Save 15%' },
      { label: 'Oral / Sublingual · Monthly', price: P.b12Oral.monthly.label },
      { label: 'Oral / Sublingual · 6-month', price: P.b12Oral.sixMonth.label, badge: 'Save 15%' },
    ],
  },
  {
    name: 'Consultation',
    color: 'var(--con)', darkColor: 'var(--con-dark)',
    href: '/consult',
    options: [
      { label: '30-min consultation · video or phone', price: P.consult.initial.label, badge: 'Credited to first plan' },
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <section style={{ padding: '2.5rem 1rem 1.5rem', background: 'var(--base)' }}>
        <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>Transparent pricing</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.625rem' }}>
          The price you see<br />is the price you pay.
        </h1>
        <p style={{ fontSize: '0.8125rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: 360 }}>
          All plans include your medication, provider consultation, and free shipping. No hidden fees. Your price stays the same at every dose level.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {['✓ No hidden fees', '✓ Same price at every dose', '✓ FSA / HSA eligible', '✓ Cancel anytime'].map(t => (
            <div key={t} className="trust-pill">{t}</div>
          ))}
        </div>
      </section>

      {PLANS.map((plan, pi) => (
        <section key={pi} style={{ padding: '1.25rem 1rem', background: pi % 2 === 0 ? 'var(--white)' : 'var(--base)', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: plan.color, flexShrink: 0 }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}>{plan.name}</div>
            </div>
            <Link href={plan.href} style={{ fontSize: '0.5625rem', fontWeight: 600, color: plan.darkColor, textDecoration: 'none' }}>View page →</Link>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', border: '0.5px solid var(--border)', overflow: 'hidden' }}>
            {plan.options.map((opt, oi) => (
              <div key={oi} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.625rem 0.875rem', borderBottom: oi < plan.options.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.625rem', fontWeight: 500, color: 'var(--ink)' }}>{opt.label}</div>
                  {opt.badge && (
                    <span style={{ display: 'inline-block', marginTop: 2, fontSize: '0.4375rem', fontWeight: 700, padding: '1px 6px', borderRadius: 'var(--radius-pill)', background: plan.color, color: plan.darkColor }}>{opt.badge}</span>
                  )}
                </div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: plan.darkColor, flexShrink: 0, marginLeft: '0.5rem' }}>{opt.price}</div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section style={{ padding: '1.25rem 1rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ background: 'var(--base)', borderRadius: 'var(--radius-lg)', padding: '1rem', border: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.375rem' }}>All prices include</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {['Your prescribed medication', 'Provider consultation (video or phone)', 'Dose adjustments as needed', 'Free expedited shipping', '503A licensed pharmacy'].map(item => (
              <div key={item} style={{ fontSize: '0.625rem', color: 'var(--ink-2)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <span style={{ color: 'var(--green-badge)', fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultBand heading="Not sure which plan fits?" sub="A clinician will map it out for you · $50 · credited to first plan" />
    </>
  )
}
