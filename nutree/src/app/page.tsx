import type { Metadata } from 'next'
import Link from 'next/link'
import { ConsultBand, FAQSection, TrustStrip } from '@/components/ui/PageComponents'
import { STACKS, STACKS_VISIBLE } from '@/lib/stacks.config'
import { FAQ_ITEMS } from '@/lib/faq.config'

export const metadata: Metadata = {
  title: 'Science-based telehealth. Human-centered care.',
  description: 'Physician-guided GLP-1 weight loss, NAD+, Sermorelin, Oxytocin, and B12 therapy. Licensed Florida telehealth, delivered to your door.',
}

const TREATMENTS = [
  { name: 'GLP-1 Weight Loss',  sub: 'Semaglutide · Tirzepatide · Microdosing', price: 'from $229/mo', href: '/weight-loss', bg: 'linear-gradient(135deg, rgba(142,212,234,0.5) 0%, rgba(255,255,255,0.65) 100%)', priceColor: '#1A6B85', size: 'large',  image: '/images/glp1-weight-loss-patient-nutreeclinic.png',    imageHeight: '101%', imageTransform: 'translateX(8%)',  imageMaxWidth: '52%' },
  { name: 'NAD+',               sub: 'Energy · longevity · cellular health',     price: 'from $TBD/mo', href: '/nad',         bg: 'linear-gradient(135deg, rgba(120,200,168,0.5) 0%, rgba(255,255,255,0.65) 100%)', priceColor: '#1E6650', size: 'large',  image: '/images/nad-plus-therapy-patient-nutreeclinic.png',     imageHeight: '100%', imageTransform: 'translateX(8%)',  imageMaxWidth: 'none' },
  { name: 'Sermorelin',         sub: 'Growth hormone · strength · recovery',     price: 'from $175/mo', href: '/sermorelin', bg: 'linear-gradient(135deg, rgba(224,160,112,0.5) 0%, rgba(255,255,255,0.65) 100%)', priceColor: '#8B4A20', size: 'medium', image: '/images/sermorelin-therapy-patient-nutreeclinic.png',   imageHeight: '91%',  imageTransform: 'translateX(-4%)', imageMaxWidth: '52%' },
  { name: 'Glutathione',        sub: 'Detox · antioxidant · cellular health',    price: 'from $TBD/mo', href: '/glutathione', bg: 'linear-gradient(135deg, rgba(236,200,64,0.5) 0%, rgba(255,255,255,0.65) 100%)',  priceColor: '#7A6200', size: 'medium', image: '/images/glutathione-therapy-patient-nutreeclinic.png',  imageHeight: '101%', imageTransform: 'translateX(8%)',  imageMaxWidth: '52%' },
  { name: 'Oxytocin',           sub: 'Stress relief · emotional well-being',     price: 'from $TBD/mo', href: '/oxytocin',    bg: 'linear-gradient(135deg, rgba(184,152,216,0.5) 0%, rgba(255,255,255,0.65) 100%)', priceColor: '#5A3080', size: 'medium', image: '/images/oxytocin-therapy-patient-nutreeclinic.png',    imageHeight: '101%', imageTransform: 'translateX(8%)',  imageMaxWidth: '52%' },
  { name: 'B12-MIC',            sub: 'Energy · mood · neurological support',     price: 'from $TBD/mo', href: '/b12',         bg: 'linear-gradient(135deg, rgba(232,152,184,0.5) 0%, rgba(255,255,255,0.65) 100%)', priceColor: '#7A2048', size: 'medium', image: '/images/b12-mic-therapy-patient-nutreeclinic.png',      imageHeight: '101%', imageTransform: 'translateX(8%)',  imageMaxWidth: '52%' },
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
        <TrustStrip />
      </section>

      {/* ── TREATMENT CARDS ─────────────────────────────────────── */}
      <section style={{ padding: '1.5rem', background: 'var(--base)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem' }}>
          Treatments
        </div>
        {/* Row 1 — GLP-1 (3fr) + NAD+ (2fr) */}
        <div className="treatment-grid" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {TREATMENTS.slice(0, 2).map(item => (
            <TreatmentCard key={item.href} item={item} />
          ))}
        </div>
        {/* Row 2 — Sermorelin (2fr) + Glutathione (3fr) */}
        <div className="treatment-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {TREATMENTS.slice(2, 4).map(item => (
            <TreatmentCard key={item.href} item={item} />
          ))}
        </div>
        {/* Row 3 — Oxytocin (3fr) + B12-MIC (2fr) */}
        <div className="treatment-grid" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {TREATMENTS.slice(4, 6).map(item => (
            <TreatmentCard key={item.href} item={item} />
          ))}
        </div>
        {/* Consult card — full width */}
        <Link href="/consult" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none',
          background: 'linear-gradient(135deg, rgba(240,184,168,0.5) 0%, rgba(255,255,255,0.65) 100%)',
          borderRadius: 16, padding: '1.5rem',
          gap: '1rem',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 6 }}>Personalized guidance from a licensed clinician.</div>
            <div style={{ fontSize: '0.9375rem', color: 'var(--con-dark)', marginBottom: 8 }}>Not sure where to start? One consultation is all it takes. Your clinician will recommend the right treatment for you.</div>
            <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--con-dark)' }}>$50 · credited to your first plan</div>
          </div>
          <div style={{ padding: '12px 24px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontSize: '0.875rem', fontWeight: 700, flexShrink: 0 }}>
            Book a consult →
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

      <ConsultBand />
    </>
  )
}

function TreatmentCard({ item }: { item: typeof TREATMENTS[0] }) {
  return (
    <Link href={item.href} className="treatment-card" style={{
      display: 'block', textDecoration: 'none',
      background: item.bg, borderRadius: 16, padding: '1.25rem',
      position: 'relative', overflow: 'hidden',
      minHeight: 210,
    }}>
      {/* Decorative blob */}
      <div style={{ position: 'absolute', width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.22)', top: -20, right: -20, zIndex: 0 }} />
      {/* Product image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          style={{
            position: 'absolute', bottom: 0, right: 0,
            height: item.imageHeight, width: 'auto',
            maxWidth: item.imageMaxWidth,
            objectFit: 'contain', objectPosition: 'bottom right',
            transform: item.imageTransform,
            opacity: 0.92, pointerEvents: 'none', zIndex: 1,
          }}
        />
      )}
      {/* Text content */}
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 6, position: 'relative', zIndex: 2 }}>
        {item.name}
      </div>
      <div style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', marginBottom: '1rem', position: 'relative', lineHeight: 1.4, zIndex: 2 }}>{item.sub}</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)', background: 'rgba(0,0,0,0.1)', padding: '6px 12px', borderRadius: 999, position: 'relative', marginBottom: 8, zIndex: 2 }}>
        LEARN MORE →
      </div>
      <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: item.priceColor, position: 'relative', zIndex: 2 }}>{item.price}</div>
    </Link>
  )
}
