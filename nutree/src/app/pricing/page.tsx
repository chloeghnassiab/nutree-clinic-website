import type { Metadata } from 'next'
import Link from 'next/link'
import { PRICES, PRICING_AT_CONSULT, GLP1_FROM_LABEL } from '@/lib/prices.config'
import { CHECKOUT } from '@/lib/checkout.config'
import { ConsultBand } from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  alternates: { canonical: '/pricing' },
  title: 'Pricing',
  description: `Transparent pricing for all Nutree Clinic treatments. GLP-1 ${GLP1_FROM_LABEL}. No hidden fees. Same price at every dose.`,
}

const P = PRICES

type PlanOption = { label: string; price: string; badge?: string; href?: string; cta?: string }

const PLANS: { name: string; color: string; darkColor: string; href: string; options: PlanOption[] }[] = [
  {
    name: 'GLP-1 Weight Loss',
    color: 'var(--glp)', darkColor: 'var(--glp-dark)',
    href: '/weight-loss',
    options: [
      { label: 'Compounded Semaglutide · Monthly',    price: P.semaglutide.monthly.monthlyLabel, href: CHECKOUT.semaglutideWeightLoss },
      { label: 'Compounded Tirzepatide · Monthly',    price: `From ${P.tirzepatide.monthly.monthlyLabel}`, href: CHECKOUT.tirzepatideWeightLoss },
      { label: 'Wegovy®',                              price: PRICING_AT_CONSULT, href: CHECKOUT.consult, cta: 'Book a consult' },
      { label: 'Mounjaro®',                            price: PRICING_AT_CONSULT, href: CHECKOUT.consult, cta: 'Book a consult' },
    ],
  },
  {
    name: 'GLP-1 Microdosing',
    color: 'var(--glp)', darkColor: 'var(--glp-dark)',
    href: '/glp-1microdosing',
    options: [
      { label: 'Microdosing Semaglutide · 10-week',   price: P.microdosingSema.tenWeek.label, href: CHECKOUT.semaglutideMicrodosing },
      { label: 'Microdosing Tirzepatide · 10-week',   price: P.microDosingTirz.tenWeek.label, href: CHECKOUT.tirzepatideMicrodosing },
    ],
  },
  {
    name: 'NAD+ Therapy',
    color: 'var(--nad)', darkColor: 'var(--nad-dark)',
    href: '/nad+',
    options: [
      { label: 'Injectable · Monthly',   price: P.nadInjectable.monthly.monthlyLabel, href: CHECKOUT.nad },
      { label: 'Nasal Spray · Monthly',  price: P.nadNasalSpray.monthly.monthlyLabel, href: CHECKOUT.nad },
      { label: 'Patches + GHK-Cu',       price: PRICING_AT_CONSULT, href: CHECKOUT.consult, cta: 'Book a consult' },
    ],
  },
  {
    name: 'Sermorelin',
    color: 'var(--ser)', darkColor: 'var(--ser-dark)',
    href: '/sermorelin',
    options: [
      { label: 'Monthly plan',  price: P.sermorelin.monthly.monthlyLabel, href: CHECKOUT.sermorelin },
    ],
  },
  {
    name: 'Glutathione',
    color: 'var(--nad)', darkColor: 'var(--nad-dark)',
    href: '/glutathione',
    options: [
      { label: 'Glutathione plan', price: PRICING_AT_CONSULT, href: CHECKOUT.consult, cta: 'Book a consult' },
    ],
  },
  {
    name: 'Oxytocin Nasal Spray',
    color: 'var(--oxy)', darkColor: 'var(--oxy-dark)',
    href: '/oxytocin',
    options: [
      { label: 'Monthly plan',   price: P.oxytocin.monthly.monthlyLabel, href: CHECKOUT.oxytocin },
    ],
  },
  {
    name: 'B6 / B12',
    color: 'var(--b12)', darkColor: 'var(--b12-dark)',
    href: '/b12',
    options: [
      { label: 'Injectable',         price: PRICING_AT_CONSULT, href: CHECKOUT.consult, cta: 'Book a consult' },
      { label: 'Oral / Sublingual',  price: PRICING_AT_CONSULT, href: CHECKOUT.consult, cta: 'Book a consult' },
    ],
  },
  {
    name: 'Consultation',
    color: 'var(--con)', darkColor: 'var(--con-dark)',
    href: '/consult',
    options: [
      { label: '30-min consultation', price: P.consult.initial.label, badge: 'Credited to first plan', href: CHECKOUT.consult, cta: 'Book' },
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <section style={{ padding: '2.5rem 1rem 1.5rem', background: 'var(--base)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>Transparent pricing</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.625rem' }}>
          The price you see<br />is the price you pay.
        </h1>
        <p style={{ fontSize: "1rem", color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: 360 }}>
          All plans include your medication, provider consultation, and free shipping. No hidden fees. Your price stays the same at every dose level.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {['✓ No hidden fees', '✓ Same price at every dose', '✓ FSA / HSA eligible', '✓ Cancel anytime'].map(t => (
            <div key={t} className="trust-pill">{t}</div>
          ))}
        </div>
      </section>

      {PLANS.map((plan, pi) => (
        <section key={pi} style={{ padding: '1.75rem 1.5rem', background: pi % 2 === 0 ? 'var(--white)' : 'var(--base)', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: plan.color, flexShrink: 0 }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}>{plan.name}</div>
            </div>
            <Link href={plan.href} style={{ fontSize: "0.875rem", fontWeight: 600, color: plan.darkColor, textDecoration: 'none' }}>View page →</Link>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', border: '0.5px solid var(--border)', overflow: 'hidden' }}>
            {plan.options.map((opt, oi) => (
              <div key={oi} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.625rem 0.875rem', borderBottom: oi < plan.options.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.875rem", fontWeight: 500, color: 'var(--ink)' }}>{opt.label}</div>
                  {opt.badge && (
                    <span style={{ display: 'inline-block', marginTop: 2, fontSize: '1rem', fontWeight: 700, padding: '1px 6px', borderRadius: 'var(--radius-pill)', background: plan.color, color: plan.darkColor }}>{opt.badge}</span>
                  )}
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '0.5rem' }}>
                  <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: plan.darkColor }}>{opt.price}</div>
                  {opt.href && (
                    <Link href={opt.href} style={{ display: 'inline-block', marginTop: 4, padding: '4px 12px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontSize: '0.8125rem', fontWeight: 700, textDecoration: 'none' }}>
                      {opt.cta ?? 'Get started'} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section style={{ padding: '1.75rem 1.5rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ background: 'var(--base)', borderRadius: 'var(--radius-lg)', padding: '1rem', border: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.375rem' }}>All prices include</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {['Your prescribed medication', 'Provider consultation', 'Dose adjustments as needed', 'Free expedited shipping', '503A licensed pharmacy', '7/7 clinician messaging'].map(item => (
              <div key={item} style={{ fontSize: "0.875rem", color: 'var(--ink-2)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <span style={{ color: 'var(--green-badge)', fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultBand />
    </>
  )
}
