'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── SHARED ANIMATION VARIANTS ───────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
}
const VP = { once: true, margin: '-60px' } as const
import {
  CheckCircle, ArrowRight, Star, Info, Plus, Minus, ClipboardText, TrendDown, Stethoscope, SprayBottle,
  ShieldCheck, CreditCard, Lock, Certificate,
  Brain, Timer, Drop, Barbell, Lightning, Dna,
  Pill, Syringe, Fire, Moon, ArrowsClockwise,
  TrendUp, Heart, Plant, Smiley, SmileyMeh,
  Scales, MagnifyingGlass, Leaf, Sun, Sparkle,
  Bandaids, Package,
} from '@phosphor-icons/react'

// Map icon string names → Phosphor components
const ICON_COMPONENTS: Record<string, React.ComponentType<{size?: number; weight?: 'thin'|'light'|'regular'|'bold'|'fill'|'duotone'; color?: string; style?: React.CSSProperties}>> = {
  Brain, Timer, Drop, Barbell, Lightning, Dna,
  Pill, Syringe, Fire, Moon, ArrowsClockwise,
  TrendUp, Heart, Plant, Smiley, SmileyMeh,
  Scales, MagnifyingGlass, Leaf, Sun, Sparkle,
  ShieldCheck, CreditCard, Lock, Certificate,
  CheckCircle, Star, ClipboardText, TrendDown, Stethoscope, SprayBottle,
  Bandaids, Package,
}

function PhosphorIcon({ name, size = 22, color = 'var(--ink)', weight = 'regular' }: { name: string; size?: number; color?: string; weight?: 'thin'|'light'|'regular'|'bold'|'fill'|'duotone' }) {
  const Comp = ICON_COMPONENTS[name]
  if (!Comp) return <span style={{ fontSize: size * 0.8 }}>{name}</span>
  return <Comp size={size} weight={weight} color={color} />
}

// Icon size standard: 20px regular weight throughout
const SZ = 20
const WT = 'regular' as const

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
export function Section({ children, bg = 'var(--base)', divider = true, style = {}, className = '' }: {
  children: React.ReactNode; bg?: string; divider?: boolean; style?: React.CSSProperties; className?: string
}) {
  return (
    <section style={{ padding: '2rem 1.5rem', background: bg, borderTop: divider ? '1px solid var(--border)' : 'none', ...style }} className={className}>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
        {children}
      </motion.div>
    </section>
  )
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
export function SectionHeader({ eyebrow, title, body, color = 'var(--ink-3)' }: {
  eyebrow?: string; title: string; body?: string; color?: string
}) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      {eyebrow && <div style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color, marginBottom: '0.5rem' }}>{eyebrow}</div>}
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: body ? '0.625rem' : 0 }}>{title}</h2>
      {body && <p style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.65, maxWidth: 520 }}>{body}</p>}
    </div>
  )
}

// ─── PROMO BANNER ────────────────────────────────────────────────────────────
export function PromoBanner({ text = '$50 consultation credited toward your first plan' }: { text?: string }) {
  return (
    <div style={{ background: 'var(--promo-bg)', border: '1px solid var(--promo-border)', borderRadius: 8, padding: '0.625rem 0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
      <CreditCard size={16} weight="fill" color="var(--promo-dark)" />
      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--promo-dark)' }}>{text}</span>
    </div>
  )
}

// ─── PLAN ROW ────────────────────────────────────────────────────────────────
export function PlanRow({ name, sub, price, afterPrice, best, color }: {
  name: string; sub?: string; price: string; afterPrice?: string; best?: boolean; color: string
}) {
  return (
    <div className="plan-row" style={{ display: 'flex', alignItems: 'center', padding: '0.75rem 0.875rem', borderRadius: 8, border: best ? `1.5px solid ${color}` : '1px solid var(--border)', marginTop: best ? 8 : 0, marginBottom: '0.375rem', background: 'var(--white)', position: 'relative' }}>
      {best && <div style={{ position: 'absolute', top: -10, right: 10, background: 'var(--green-badge)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>Best Value</div>}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)' }}>{name}</div>
        {sub && <span style={{ fontSize: '0.875rem', color: 'var(--ink-3)', display: 'block', marginTop: 2 }}>{sub}</span>}
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '1rem', fontWeight: 700, color }}>{price}</div>
        {afterPrice && <div style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>{afterPrice}</div>}
      </div>
    </div>
  )
}

// ─── PRODUCT BLOCK HEADER ────────────────────────────────────────────────────
export function ProductBlockHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      {children}
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  )
}

// ─── CTA AREA ────────────────────────────────────────────────────────────────
export function CTAArea({ href = '/consult' }: { href?: string }) {
  return (
    <div style={{ background: 'var(--white)', padding: '1rem 1.25rem 1.25rem' }}>
      <Link href={href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '0.875rem', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontSize: '1rem', fontWeight: 700, textDecoration: 'none', marginBottom: '0.625rem' }}>
        Get started <ArrowRight size={16} weight="bold" />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--ink-3)', marginBottom: '0.375rem' }}>
        <ShieldCheck size={14} color="var(--ink-3)" />
        FSA/HSA eligible · Free shipping · Cancel anytime
      </div>
    </div>
  )
}

// ─── BENEFITS LIST ───────────────────────────────────────────────────────────
export function BenefitsList({ items, color }: { items: string[]; color: string }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={VP}
      style={{ padding: '1rem 1.25rem', background: 'var(--white)', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
      {items.map((item, i) => (
        <motion.div key={i} variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--ink-2)' }}>
          <CheckCircle size={18} weight="fill" color={color} style={{ flexShrink: 0, marginTop: 2 }} />
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
}

// ─── TRUST STRIP ─────────────────────────────────────────────────────────────
export function TrustStrip() {
  const items = [
    { icon: <ShieldCheck size={14} />, label: '🇺🇸 Compounded in the USA' },
    { icon: <CreditCard size={14} />, label: 'FSA & HSA eligible' },
    { icon: <Lock size={14} />, label: 'HIPAA compliant' },
    { icon: <Certificate size={14} />, label: 'LegitScript certified' },
  ]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', padding: '0.625rem 1.25rem 1rem', background: 'var(--white)' }}>
      {items.map(({ label }, i) => (
        <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.3rem 0.75rem', borderRadius: 999, background: 'var(--base)', border: '0.5px solid var(--border)', fontSize: '0.875rem', color: 'var(--ink-3)', fontWeight: 500 }}>
          {label}
        </div>
      ))}
    </div>
  )
}

// ─── FEATURE BAND ────────────────────────────────────────────────────────────
export function FeatureBand({ eyebrow, title, body, gradient, cards }: {
  eyebrow: string; title: string; body: string; gradient: string; cards: { icon: string; title: string; desc: string }[]
}) {
  return (
    <div style={{ padding: '2rem 1.5rem', background: gradient }}>
      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.625rem' }}>{eyebrow}</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '0.75rem' }}>{title}</h2>
      <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 480 }}>{body}</p>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={VP}
        style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
        {cards.map((c, i) => (
          <motion.div key={i} variants={fadeUp} style={{ flex: '1 1 140px', background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(6px)', borderRadius: 12, padding: '1rem', border: '1px solid rgba(255,255,255,0.9)' }}>
            <div style={{ marginBottom: '0.5rem', display: 'flex' }}><PhosphorIcon name={c.icon} size={24} color="var(--ink)" /></div>
            <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.3rem' }}>{c.title}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.5 }}>{c.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

// ─── HOW IT WORKS ────────────────────────────────────────────────────────────
export function HowItWorks({ steps, gradient }: { steps: { title: string; desc: string }[]; gradient: string }) {
  return (
    <Section bg="var(--white)">
      <SectionHeader eyebrow="How it works" title="From first question to first delivery." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
        {steps.map((step, i) => (
          <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: i < steps.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: gradient, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)' }}>
              {i + 1}
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{step.title}</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.65 }}>{step.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

// ─── SCIENCE GRID ────────────────────────────────────────────────────────────
export function ScienceGrid({ eyebrow, title, items, iconGradient }: {
  eyebrow: string; title: string; items: { icon: string; title: string; desc: string }[]; iconGradient: string
}) {
  return (
    <Section bg="var(--base)">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={VP}
        style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {items.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="science-item" style={{ display: 'flex', gap: '1rem', padding: '1rem', borderRadius: 12, background: 'var(--white)', border: '0.5px solid var(--border)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: iconGradient, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PhosphorIcon name={item.icon} size={22} color="var(--white)" weight="regular" />
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
export function Testimonials({ items, tagColor, tagDarkColor }: {
  items: { quote: string; author: string; tag: string; img?: string; featured?: boolean }[]; tagColor: string; tagDarkColor: string
}) {
  return (
    <Section bg="var(--white)">
      <SectionHeader eyebrow="From our patients" title="What Nutree patients say." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        {items.map((t, i) => (
          t.featured && t.img ? (
            /* ── Featured: large photo + quote side-by-side ── */
            <div key={i} className="testimonial-photo-card" style={{ display: 'flex', borderRadius: 16, overflow: 'hidden', border: '0.5px solid var(--border)', background: 'var(--base)' }}>
              <div style={{ flexShrink: 0, width: 260 }}>
                <img src={t.img} alt={t.author} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ flex: 1, padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(5)].map((_, si) => <Star key={si} size={16} weight="fill" color="#F9B800" />)}
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)', fontStyle: 'italic', lineHeight: 1.75 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '0.5rem' }}>{t.author}</div>
                  <div style={{ display: 'inline-block', fontSize: '0.875rem', fontWeight: 700, padding: '4px 12px', borderRadius: 999, background: tagColor, color: tagDarkColor }}>
                    {t.tag}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ── Standard card (with optional small avatar) ── */
            <div key={i} style={{ background: 'var(--base)', borderRadius: 14, padding: '1.25rem', border: '0.5px solid var(--border)' }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.625rem' }}>
                {[...Array(5)].map((_, si) => <Star key={si} size={14} weight="fill" color="#F9B800" />)}
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--ink)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                {t.img && (
                  <img src={t.img} alt={t.author} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '1.5px solid var(--border)' }} />
                )}
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-3)' }}>{t.author}</div>
                  <div style={{ display: 'inline-block', marginTop: '0.375rem', fontSize: '0.8125rem', fontWeight: 700, padding: '2px 9px', borderRadius: 999, background: tagColor, color: tagDarkColor }}>
                    {t.tag}
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
        <div style={{ fontSize: '1rem', color: 'var(--ink-3)', textAlign: 'center' }}>
          Results reflect individual patient experiences and are not typical or guaranteed outcomes.
        </div>
      </div>
    </Section>
  )
}

// ─── ALSO FROM NUTREE ────────────────────────────────────────────────────────
export function AlsoFromNutree({ eyebrow, title, items }: {
  eyebrow: string; title: string; items: { name: string; sub: string; href: string; arrowColor: string; img?: string }[]
}) {
  return (
    <Section bg="var(--base)">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={VP}
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {items.map((item, i) => (
          <motion.div key={i} variants={fadeUp}>
          <Link href={item.href} className="also-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', borderRadius: 12, background: 'var(--white)', border: '0.5px solid var(--border)', textDecoration: 'none', transition: 'border-color 0.15s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              {item.img && (
                <div style={{ width: 52, height: 52, borderRadius: 10, overflow: 'hidden', flexShrink: 0, background: 'var(--base)' }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)' }}>{item.name}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--ink-3)', marginTop: 2 }}>{item.sub}</div>
              </div>
            </div>
            <ArrowRight size={18} weight="bold" color={item.arrowColor} />
          </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export function FAQSection({ items, iconBg, iconColor }: {
  items: { q: string; a: string }[]; iconBg: string; iconColor: string
}) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ padding: '1.5rem 1.25rem 0.375rem', fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', color: 'var(--ink)' }}>
        Frequently asked questions
      </div>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
      {items.map((item, i) => (
        <motion.div key={i} variants={fadeUp} style={{ borderBottom: '0.5px solid var(--border)' }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', textAlign: 'left', gap: '1rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4 }}>{item.q}</span>
            <span style={{ width: 24, height: 24, borderRadius: '50%', background: iconBg, color: iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {open === i ? <Minus size={14} weight="bold" color={iconColor} /> : <Plus size={14} weight="bold" color={iconColor} />}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 1.25rem 1rem', fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>
              {item.a}
            </div>
          )}
        </motion.div>
      ))}
      </motion.div>
    </div>
  )
}

// ─── PAGE LEGAL ──────────────────────────────────────────────────────────────
export function PageLegal({ text }: { text: string }) {
  return (
    <div style={{ padding: '1rem 1.5rem', fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.65, background: 'var(--white)', borderTop: '0.5px solid var(--border)' }}>
      <Info size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
      {text}
    </div>
  )
}

// ─── CONSULT BAND ────────────────────────────────────────────────────────────
export function ConsultBand({ heading, sub }: { heading: string; sub?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}
      className="consult-band" style={{ background: 'var(--ink)', padding: '2rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', color: '#fff', lineHeight: 1.3, marginBottom: sub ? 4 : 0 }}>
          {heading}
        </div>
        {sub && <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>{sub}</div>}
      </div>
      <Link href="/consult" style={{ padding: '12px 22px', borderRadius: 999, background: 'var(--con)', color: 'var(--ink)', fontSize: '0.9375rem', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
        Book a consult · $50 →
      </Link>
    </motion.div>
  )
}

// ─── IN STOCK BADGE ──────────────────────────────────────────────────────────
export function InStockBadge() {
  return (
    <div style={{ position: 'absolute', top: 12, left: 12, background: 'var(--white)', borderRadius: 999, padding: '4px 10px', fontSize: '1rem', fontWeight: 700, color: 'var(--green-badge)', display: 'flex', alignItems: 'center', gap: 5, zIndex: 2, boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-badge)' }} />
      In Stock
    </div>
  )
}
