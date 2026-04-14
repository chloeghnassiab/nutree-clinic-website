import type { Metadata } from 'next'
import Link from 'next/link'
import { ConsultBand, FAQSection } from '@/components/ui/PageComponents'
import { STACKS, STACKS_VISIBLE } from '@/lib/stacks.config'
import { FAQ_ITEMS } from '@/lib/faq.config'

export const metadata: Metadata = {
  title: 'Science-based telehealth. Human-centered care.',
  description: 'Physician-guided GLP-1 weight loss, NAD+, Sermorelin, Oxytocin, and B12 therapy. Licensed Florida telehealth, delivered to your door.',
}

const TREATMENTS = [
  { name: 'GLP-1 Weight Loss',  sub: 'Semaglutide · Tirzepatide · Microdosing', price: 'from $229/mo', href: '/weight-loss', bg: 'linear-gradient(135deg, #8ED4EA 0%, #B8E4F0 100%)', priceColor: '#1A6B85', size: 'large' },
  { name: 'NAD+ Therapy',       sub: 'Energy · longevity · cellular health',     price: 'from $TBD/mo', href: '/nad',         bg: 'linear-gradient(135deg, #78C8A8 0%, #A8D8C8 100%)', priceColor: '#1E6650', size: 'large' },
  { name: 'Sermorelin',         sub: 'Growth hormone · strength · recovery',     price: 'from $175/mo', href: '/sermorelin', bg: 'linear-gradient(135deg, #E0A070 0%, #F2C4A0 100%)', priceColor: '#8B4A20', size: 'medium' },
  { name: 'Glutathione',        sub: 'Detox · antioxidant · cellular health',    price: 'from $TBD/mo', href: '/glutathione', bg: 'linear-gradient(135deg, #78C8A8 0%, #B8E8D0 100%)', priceColor: '#1E6650', size: 'medium' },
  { name: 'Oxytocin',           sub: 'Stress relief · emotional well-being',     price: 'from $TBD/mo', href: '/oxytocin',    bg: 'linear-gradient(135deg, #B898D8 0%, #D4B8E8 100%)', priceColor: '#5A3080', size: 'medium' },
  { name: 'B6 / B12',           sub: 'Energy · mood · neurological support',     price: 'from $TBD/mo', href: '/b12',         bg: 'linear-gradient(135deg, #ECC840 0%, #F9E07A 100%)', priceColor: '#7A6200', size: 'medium' },
]

const HOW_STEPS = [
  { n: '1', title: 'Complete a brief health questionnaire', desc: 'Takes 3 minutes. Your clinician reviews your history and goals — so they can make the most appropriate clinical decision for you.', color: '#B8E4F0' },
  { n: '2', title: 'Your clinician reviews your intake', desc: 'A licensed Nutree clinician reviews your health history and issues your prescription directly — no call required unless they have questions or it is clinically necessary.', color: '#A8D8C8' },
  { n: '3', title: 'Receive your medication at home', desc: 'Prescribed by your clinician, prepared by a licensed 503A pharmacy, shipped free to your door.', color: '#F2C4A0' },
  { n: '4', title: 'Ongoing care and 7/7 messaging', desc: 'Your provider monitors your progress and adjusts your plan throughout. Your assigned clinician is available 7 days a week via direct message for questions, dose adjustments, and ongoing support.', color: '#D4B8E8' },
]

export default function HomePage() {
  const homeFAQs = FAQ_ITEMS
    .filter(f => f.active && f.pages.includes('/'))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ padding: '3rem 1.5rem 2rem', background: 'var(--base)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem' }}>
          Florida · Licensed telehealth · LegitScript certified
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 6vw, 3.5rem)', color: 'var(--ink)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
          Science-based<br />treatments.<br />
          <span style={{ color: 'var(--teal)' }}>Human-centered</span><br />
          care.
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 420 }}>
          Physician-guided GLP-1, NAD+, Sermorelin, Glutathione, Oxytocin, B12. Delivered to your door.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <Link href="/weight-loss" style={{ padding: '14px 28px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontSize: '1rem', fontWeight: 700, textDecoration: 'none' }}>
            Check my eligibility →
          </Link>
          <Link href="/consult" style={{ padding: '14px 24px', borderRadius: 999, background: 'transparent', color: 'var(--ink)', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>
            Start your intake
          </Link>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['✓ Free shipping', '✓ FSA/HSA eligible', '✓ No insurance needed', '✓ 7/7 clinician messaging', '✓ Cancel anytime'].map(t => (
            <div key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '5px 12px', borderRadius: 999, background: 'var(--white)', border: '0.5px solid var(--border)', fontSize: '0.875rem', color: 'var(--ink-3)', fontWeight: 500 }}>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ── TREATMENT CARDS ─────────────────────────────────────── */}
      <section style={{ padding: '1.5rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem' }}>
          Treatments
        </div>
        {/* Top row — two large cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {TREATMENTS.slice(0, 2).map(item => (
            <TreatmentCard key={item.href} item={item} />
          ))}
        </div>
        {/* Middle row — four medium cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {TREATMENTS.slice(2, 6).map(item => (
            <TreatmentCard key={item.href} item={item} />
          ))}
        </div>
        {/* Consult card — full width */}
        <Link href="/consult" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none',
          background: 'linear-gradient(135deg, #F0B8A8 0%, #FAD8CC 100%)',
          borderRadius: 16, padding: '1.5rem',
          gap: '1rem',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--ink)', marginBottom: 4 }}>Start Your Intake</div>
            <div style={{ fontSize: '1rem', color: 'var(--con-dark)', marginBottom: 8 }}>Submit your form · clinician reviews and prescribes directly</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--con-dark)' }}>$50 → credited to your first plan</div>
          </div>
          <div style={{ padding: '12px 24px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontSize: '1rem', fontWeight: 700, flexShrink: 0 }}>
            Get started →
          </div>
        </Link>
      </section>

      {/* ── STACKS (conditional) ────────────────────────────────── */}
      {STACKS_VISIBLE && (
        <section style={{ padding: '2rem 1.5rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>Recommended protocols</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--ink)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Stacks for your goals.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {STACKS.map(stack => (
              <Link key={stack.id} href={`/stacks#${stack.id}`} style={{
                display: 'block', textDecoration: 'none',
                background: stack.color, borderRadius: 14, padding: '1.25rem',
              }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)', marginBottom: 4 }}>{stack.name}</div>
                <div style={{ fontSize: '0.875rem', color: stack.darkColor, marginBottom: '0.625rem' }}>{stack.tagline}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {stack.products.map(p => (
                    <span key={p} style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.6)', color: stack.darkColor }}>{p}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <Link href="/stacks" style={{ display: 'block', textAlign: 'center', marginTop: '1rem', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink-3)', textDecoration: 'none' }}>
            View all protocols →
          </Link>
        </section>
      )}

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 1.5rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>How it works</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: 'var(--ink)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
          From first question<br />to first delivery.
        </h2>
        {HOW_STEPS.map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '1.25rem', padding: '1.25rem 0', borderBottom: i < HOW_STEPS.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: step.color, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 700, color: 'var(--ink)' }}>
              {step.n}
            </div>
            <div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{step.title}</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.65 }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </section>

      {/* ── CLINICAL INDEPENDENCE ───────────────────────────────── */}
      <section style={{ padding: '2rem 1.5rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
        <div style={{ background: 'var(--white)', borderRadius: 16, padding: '1.5rem', border: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.625rem' }}>Our clinical approach</div>
          <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.75 }}>
            Every Nutree consultation is guided by one principle: your clinician&apos;s role is to determine what is medically appropriate for you — not to recommend a specific plan. If a treatment is not right for you, your provider will tell you that honestly.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────── */}
      <section style={{ padding: '2rem 1.5rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>From our patients</div>
        <div style={{ background: 'var(--base)', borderRadius: 16, padding: '1.5rem', border: '0.5px solid var(--border)' }}>
          <div style={{ color: '#F9B800', fontSize: '1rem', marginBottom: '0.625rem' }}>★★★★★</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            &ldquo;After 9 weeks on a microdosed GLP-1, I lost 9 pounds. I already feel lighter, confident, in control. With a team that supports me!&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: 'var(--glp)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, color: 'var(--glp-dark)', border: '2px solid var(--border)' }}>
              <img
                src="/images/Courtney-nutree-clinic-patient-glp-1.jpeg"
                alt="Courtney"
                width={48}
                height={48}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' }}
              />
            </div>
            <div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink-3)' }}>Courtney, 32 · Nutree Clinic patient</div>
              <div style={{ display: 'inline-block', marginTop: 6, fontSize: '0.875rem', fontWeight: 700, padding: '4px 12px', borderRadius: 999, background: '#B8E4F0', color: '#1A6B85' }}>GLP-1 Microdosing</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      {homeFAQs.length > 0 && (
        <FAQSection
          items={homeFAQs}
          iconBg="var(--teal)"
          iconColor="#fff"
        />
      )}

      <ConsultBand heading="Not sure where to start?" sub="Your clinician reviews your intake and issues your prescription. If they have any questions, they will reach out directly." />
    </>
  )
}

function TreatmentCard({ item }: { item: typeof TREATMENTS[0] }) {
  return (
    <Link href={item.href} style={{
      display: 'block', textDecoration: 'none',
      background: item.bg, borderRadius: 16, padding: '1.25rem',
      position: 'relative', overflow: 'hidden',
      minHeight: item.size === 'large' ? 180 : 150,
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}>
      <div style={{ position: 'absolute', width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.22)', top: -20, right: -20 }} />
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: item.size === 'large' ? '1.375rem' : '1.125rem', color: 'var(--ink)', lineHeight: 1.2, marginBottom: 6, position: 'relative' }}>
        {item.name}
      </div>
      <div style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', marginBottom: '1rem', position: 'relative', lineHeight: 1.4 }}>{item.sub}</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)', background: 'rgba(0,0,0,0.1)', padding: '6px 12px', borderRadius: 999, position: 'relative', marginBottom: 8 }}>
        LEARN MORE →
      </div>
      <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: item.priceColor, position: 'relative' }}>{item.price}</div>
    </Link>
  )
}
