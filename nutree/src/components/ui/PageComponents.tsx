'use client'
import { useState } from 'react'
import Link from 'next/link'

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
export function Section({
  children, bg = 'var(--base)', divider = true,
  style = {}, className = '',
}: {
  children: React.ReactNode
  bg?: string
  divider?: boolean
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <section style={{
      padding: '1.5rem 1rem',
      background: bg,
      borderTop: divider ? '1px solid var(--border)' : 'none',
      ...style,
    }} className={className}>
      {children}
    </section>
  )
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
export function SectionHeader({
  eyebrow, title, body, color = 'var(--ink-3)',
}: {
  eyebrow?: string
  title: string
  body?: string
  color?: string
}) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {eyebrow && (
        <div className="section-label" style={{ color }}>{eyebrow}</div>
      )}
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: body ? '0.5rem' : 0 }}>
        {title}
      </h2>
      {body && (
        <p style={{ fontSize: '0.6875rem', color: 'var(--ink-3)', lineHeight: 1.65, maxWidth: 300 }}>
          {body}
        </p>
      )}
    </div>
  )
}

// ─── PROMO BANNER ────────────────────────────────────────────────────────────
export function PromoBanner({ text = '$50 consultation credited toward your first plan' }: { text?: string }) {
  return (
    <div className="promo-banner">
      <span style={{ fontSize: '0.75rem' }}>🏷</span>
      <span>{text}</span>
    </div>
  )
}

// ─── PLAN ROW ────────────────────────────────────────────────────────────────
export function PlanRow({
  name, sub, price, afterPrice, best, color,
}: {
  name: string
  sub?: string
  price: string
  afterPrice?: string
  best?: boolean
  color: string
}) {
  return (
    <div className={`plan-row${best ? ' best' : ''}`}
      style={{ borderColor: best ? color : 'var(--border)' }}>
      {best && <div className="best-badge">Best Value</div>}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--ink)' }}>{name}</div>
        {sub && <span style={{ fontSize: '0.5625rem', color: 'var(--ink-3)', display: 'block', marginTop: 1 }}>{sub}</span>}
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color }}>{price}</div>
        {afterPrice && <div style={{ fontSize: '0.5rem', color: 'var(--ink-3)' }}>{afterPrice}</div>}
      </div>
    </div>
  )
}

// ─── PRODUCT BLOCK HEADER ────────────────────────────────────────────────────
export function ProductBlockHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: '0.625rem', fontWeight: 700, color: 'var(--ink)',
      marginBottom: '0.375rem',
      display: 'flex', alignItems: 'center', gap: '0.375rem',
    }}>
      {children}
      <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
    </div>
  )
}

// ─── CTA AREA ────────────────────────────────────────────────────────────────
export function CTAArea({ href = '/consult' }: { href?: string }) {
  return (
    <div style={{ background: 'var(--white)', padding: '0.75rem 1rem 1rem' }}>
      <Link href={href} className="btn-primary"
        style={{ display: 'block', textAlign: 'center', width: '100%', marginBottom: '0.5rem' }}>
        Get started →
      </Link>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '0.3rem', fontSize: '0.5625rem', color: 'var(--ink-3)', marginBottom: '0.25rem',
      }}>
        Buy now, pay later with
        <span style={{ background: '#FFB3C7', color: '#111', fontSize: '0.5rem', fontWeight: 700, padding: '2px 5px', borderRadius: 3 }}>Klarna</span>
        <span style={{ background: '#111', color: '#fff', fontSize: '0.5rem', fontWeight: 700, padding: '2px 5px', borderRadius: 3 }}>Apple Pay</span>
        <span style={{ background: '#007A5E', color: '#fff', fontSize: '0.5rem', fontWeight: 700, padding: '2px 5px', borderRadius: 3 }}>HSA/FSA</span>
      </div>
      <div style={{ textAlign: 'center', fontSize: '0.5625rem', color: 'var(--ink-3)' }}>
        Discount auto-applied at checkout · Cancel before renewal
      </div>
    </div>
  )
}

// ─── BENEFITS LIST ───────────────────────────────────────────────────────────
export function BenefitsList({ items, color }: { items: string[]; color: string }) {
  return (
    <div style={{
      padding: '0.75rem 1rem', background: 'var(--white)',
      display: 'flex', flexDirection: 'column', gap: '0.4rem',
    }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.6875rem', color: 'var(--ink-2)' }}>
          <div style={{
            width: 15, height: 15, borderRadius: '50%',
            background: color, color: 'var(--white)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.4375rem', fontWeight: 700, flexShrink: 0, marginTop: 1,
          }}>✓</div>
          {item}
        </div>
      ))}
    </div>
  )
}

// ─── TRUST STRIP ─────────────────────────────────────────────────────────────
export function TrustStrip() {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '0.3rem',
      padding: '0.5rem 1rem 0.875rem', background: 'var(--white)',
    }}>
      {['🇺🇸 Compounded in the USA', '✅ FSA & HSA eligible', '🔒 HIPAA compliant'].map(t => (
        <div key={t} className="trust-pill">{t}</div>
      ))}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="trust-pill">
        <img src="https://static.legitscript.com/seals/47538313.png" alt="LegitScript" style={{ height: 11, opacity: 0.65 }} />
      </div>
    </div>
  )
}

// ─── FEATURE BAND ────────────────────────────────────────────────────────────
export function FeatureBand({
  eyebrow, title, body, gradient, cards,
}: {
  eyebrow: string
  title: string
  body: string
  gradient: string
  cards: { icon: string; title: string; desc: string }[]
}) {
  return (
    <div style={{ padding: '1.375rem 1rem', background: gradient }}>
      <div className="section-label" style={{ color: 'inherit', opacity: 0.7 }}>{eyebrow}</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.5rem' }}>
        {title}
      </h2>
      <p style={{ fontSize: '0.6875rem', color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: '0.875rem', maxWidth: 300 }}>
        {body}
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {cards.map((c, i) => (
          <div key={i} className="feat-card">
            <div style={{ fontSize: '1rem', marginBottom: '0.375rem' }}>{c.icon}</div>
            <div style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.2rem' }}>{c.title}</div>
            <div style={{ fontSize: '0.5625rem', color: 'var(--ink-3)', lineHeight: 1.45 }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── HOW IT WORKS ────────────────────────────────────────────────────────────
export function HowItWorks({
  steps, gradient,
}: {
  steps: { title: string; desc: string }[]
  gradient: string
}) {
  return (
    <Section bg="var(--white)">
      <SectionHeader eyebrow="How it works" title="From first question to first delivery." />
      <div>
        {steps.map((step, i) => (
          <div key={i} style={{
            display: 'flex', gap: '0.75rem', padding: '0.875rem 0',
            borderBottom: i < steps.length - 1 ? '0.5px solid var(--border)' : 'none',
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: gradient, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.6875rem', fontWeight: 700, color: 'var(--ink)',
            }}>
              {i + 1}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{step.title}</div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--ink-3)', lineHeight: 1.55 }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── SCIENCE GRID ────────────────────────────────────────────────────────────
export function ScienceGrid({
  eyebrow, title, items, iconGradient,
}: {
  eyebrow: string
  title: string
  items: { icon: string; title: string; desc: string }[]
  iconGradient: string
}) {
  return (
    <Section bg="var(--base)">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {items.map((item, i) => (
          <div key={i} className="science-item">
            <div style={{
              width: 30, height: 30, borderRadius: 7,
              background: iconGradient, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.875rem',
            }}>
              {item.icon}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{item.title}</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--ink-3)', lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
export function Testimonials({
  items, tagColor, tagDarkColor,
}: {
  items: { quote: string; author: string; tag: string }[]
  tagColor: string
  tagDarkColor: string
}) {
  return (
    <Section bg="var(--white)">
      <SectionHeader eyebrow="From our patients" title="What Nutree patients say." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {items.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div style={{ color: '#F9B800', fontSize: '0.6875rem', marginBottom: '0.375rem' }}>★★★★★</div>
            <p style={{
              fontFamily: 'var(--font-serif)', fontSize: '0.8125rem',
              color: 'var(--ink)', fontStyle: 'italic', lineHeight: 1.65, marginBottom: '0.5rem',
            }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--ink-3)' }}>{t.author}</div>
            <div style={{
              display: 'inline-block', marginTop: '0.375rem',
              fontSize: '0.5rem', fontWeight: 700,
              padding: '2px 8px', borderRadius: 'var(--radius-pill)',
              background: tagColor, color: tagDarkColor,
            }}>
              {t.tag}
            </div>
          </div>
        ))}
        <div style={{ fontSize: '0.5625rem', color: 'var(--ink-3)', textAlign: 'center' }}>
          Results reflect individual patient experiences and are not typical or guaranteed outcomes.
        </div>
      </div>
    </Section>
  )
}

// ─── ALSO FROM NUTREE ────────────────────────────────────────────────────────
export function AlsoFromNutree({
  eyebrow, title, items,
}: {
  eyebrow: string
  title: string
  items: { name: string; sub: string; href: string; arrowColor: string }[]
}) {
  return (
    <Section bg="var(--base)">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
        {items.map((item, i) => (
          <Link key={i} href={item.href} className="also-item">
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)' }}>{item.name}</div>
              <div style={{ fontSize: '0.5625rem', color: 'var(--ink-3)', marginTop: 1 }}>{item.sub}</div>
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: item.arrowColor }}>→</div>
          </Link>
        ))}
      </div>
    </Section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export function FAQSection({
  items, iconBg, iconColor,
}: {
  items: { q: string; a: string }[]
  iconBg: string
  iconColor: string
}) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ padding: '1rem 1rem 0.25rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)' }}>
        Frequently asked questions
      </div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-button" onClick={() => setOpen(open === i ? null : i)}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3 }}>
              {item.q}
            </span>
            <span className="faq-icon" style={{ background: iconBg, color: iconColor }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 1rem 0.75rem', fontSize: '0.6875rem', color: 'var(--ink-2)', lineHeight: 1.65 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── PAGE LEGAL ──────────────────────────────────────────────────────────────
export function PageLegal({ text }: { text: string }) {
  return (
    <div className="page-legal">{text}</div>
  )
}

// ─── CONSULT BAND ────────────────────────────────────────────────────────────
export function ConsultBand({
  heading, sub,
}: {
  heading: string
  sub?: string
}) {
  return (
    <div className="consult-band">
      <div>
        <div style={{
          fontFamily: 'var(--font-serif)', fontSize: '0.9375rem',
          color: '#fff', lineHeight: 1.3, marginBottom: 2,
        }}>
          {heading}
        </div>
        {sub && (
          <div style={{ fontSize: '0.5625rem', color: 'rgba(255,255,255,0.45)' }}>{sub}</div>
        )}
      </div>
      <Link href="/consult" className="btn-consult">
        Book a consult · $50 →
      </Link>
    </div>
  )
}

// ─── IN STOCK BADGE ──────────────────────────────────────────────────────────
export function InStockBadge() {
  return (
    <div className="in-stock-badge">
      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green-badge)' }} />
      In Stock
    </div>
  )
}
