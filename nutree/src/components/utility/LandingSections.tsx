import Image from 'next/image'
import Link from 'next/link'
import { FAQSection } from '@/components/ui/PageComponents'
import { PRICES } from '@/lib/prices.config'
import { CHECKOUT } from '@/lib/checkout.config'
import { BENEFITS_DISCLAIMER, IMG, MICRODOSING_CHECKLIST, type ImageRef } from './landingContent'

// Building blocks for the ad / partner landing pages (/landing-*, /promotion, /mbjcc-jperks).

const eyebrowStyle: React.CSSProperties = { fontSize: '0.875rem', fontWeight: 700, color: 'var(--teal-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.625rem' }
const h2Style: React.CSSProperties = { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', color: 'var(--ink)', lineHeight: 1.15, marginBottom: '0.75rem' }
const wrap: React.CSSProperties = { maxWidth: 1040, margin: '0 auto' }
const grid2: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', alignItems: 'center' }

export function CTA({ href, children, variant = 'dark' }: { href: string; children: React.ReactNode; variant?: 'dark' | 'light' }) {
  return (
    <Link href={href} style={{
      display: 'inline-block', padding: '14px 28px', borderRadius: 999, fontSize: '1rem', fontWeight: 700, textDecoration: 'none',
      background: variant === 'dark' ? 'var(--ink)' : 'var(--white)', color: variant === 'dark' ? '#fff' : 'var(--ink)',
      border: variant === 'dark' ? 'none' : '1px solid var(--border)',
    }}>
      {children}
    </Link>
  )
}

export function Img({ img, sizes = '(max-width: 700px) 100vw, 500px', priority, radius = true }: { img: ImageRef; sizes?: string; priority?: boolean; radius?: boolean }) {
  return (
    <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes={sizes} priority={priority}
      style={{ width: '100%', height: 'auto', borderRadius: radius ? 'var(--radius-lg)' : undefined, display: 'block' }} />
  )
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map(i => (
        <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9375rem', color: 'var(--ink-2)' }}>
          <span aria-hidden="true" style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span>{i}
        </li>
      ))}
    </ul>
  )
}

/** Product hero: eyebrow, title, price block, CTA, intro, checklist, fine print, image. */
export function OfferHero({ eyebrow, title, tagline = 'Real clinicians, real conversations via video or phone', price, cta, intro, fineprint, image, background = 'linear-gradient(160deg, var(--glp) 0%, var(--base) 60%)' }: {
  eyebrow: string; title: React.ReactNode; tagline?: string; price?: React.ReactNode; cta: { href: string; label: string }
  intro: string; fineprint: React.ReactNode; image: ImageRef; background?: string
}) {
  return (
    <section style={{ padding: '2.5rem 1.25rem', background }}>
      <div style={{ ...wrap, ...grid2 }}>
        <div>
          <div style={eyebrowStyle}>{eyebrow}</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 6vw, 3.25rem)', color: 'var(--ink)', lineHeight: 1.05, marginBottom: '0.5rem' }}>{title}</h1>
          <p style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', marginBottom: '1.25rem' }}>{tagline}</p>
          {price && <div style={{ marginBottom: '1.25rem' }}>{price}</div>}
          <div style={{ marginBottom: '1.25rem' }}><CTA href={cta.href}>{cta.label}</CTA></div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: '0.75rem' }}>{intro}</p>
          <Checklist items={MICRODOSING_CHECKLIST} />
          <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>{fineprint}</div>
        </div>
        <div style={{ maxWidth: 440, width: '100%', justifySelf: 'center' }}><Img img={image} priority /></div>
      </div>
    </section>
  )
}

export function HowSection({ title, image, body, who, cta }: { title: string; image: ImageRef; body: string; who: string[]; cta: string }) {
  return (
    <section style={{ padding: '2.5rem 1.25rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
      <div style={wrap}>
        <h2 style={h2Style}>{title}</h2>
        <div style={grid2}>
          <Img img={image} sizes="(max-width: 700px) 100vw, 520px" />
          <div>
            <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1rem' }}>{body}</p>
            <div style={{ marginBottom: '1.5rem' }}><CTA href={cta}>Get Started</CTA></div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', color: 'var(--ink)', marginBottom: '0.625rem' }}>Who is this for?</h3>
            <Checklist items={who} />
            <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              Every treatment plan is prescribed and monitored by a licensed provider to ensure safety, personalization, and appropriate follow-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BenefitsSection({ eyebrow, title, body, items, image, cta }: {
  eyebrow: string; title: string; body: string; items: { title: string; body: string }[]; image: ImageRef; cta: string
}) {
  return (
    <section style={{ padding: '2.5rem 1.25rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
      <div style={wrap}>
        <div style={eyebrowStyle}>{eyebrow}</div>
        <h2 style={h2Style}>{title}</h2>
        <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 620, marginBottom: '1.25rem' }}>{body}</p>
        <div style={{ marginBottom: '1.75rem' }}><CTA href={cta}>Get Started</CTA></div>
        <div style={grid2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {items.map(i => (
              <div key={i.title} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                  <span aria-hidden="true" style={{ color: 'var(--teal)', marginRight: 6 }}>✓</span>{i.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>{i.body}</p>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 440, width: '100%', justifySelf: 'center' }}><Img img={image} /></div>
        </div>
        <p style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', lineHeight: 1.6, marginTop: '1.25rem', maxWidth: 720 }}>{BENEFITS_DISCLAIMER}</p>
      </div>
    </section>
  )
}

export function StepsSection({ steps, cta, image = IMG.glpIntake }: { steps: { title: string; desc: string }[]; cta: string; image?: ImageRef }) {
  return (
    <section style={{ padding: '2.5rem 1.25rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
      <div style={{ ...wrap, ...grid2 }}>
        <div style={{ maxWidth: 420, width: '100%', justifySelf: 'center' }}><Img img={image} /></div>
        <div>
          <div style={eyebrowStyle}>Simple, guided care</div>
          <h2 style={h2Style}>Next steps</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem' }}>
            {steps.map((s, i) => (
              <li key={s.title} style={{ display: 'flex', gap: '1rem', padding: '0.875rem 0', borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--glp)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--ink)' }}>{i + 1}</span>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <CTA href={cta}>Get Started</CTA>
        </div>
      </div>
    </section>
  )
}

export function LandingFAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section style={{ background: 'var(--white)' }}>
      <div style={wrap}>
        <FAQSection items={items} iconBg="var(--glp)" iconColor="var(--glp-dark)" />
      </div>
    </section>
  )
}

/** Semaglutide / Tirzepatide microdosing plan cards (live /bmi and /mbjcc-jperks). */
export function MicrodosingPlans({ discoverHref = '/discover' }: { discoverHref?: string }) {
  const plans = [
    { name: 'Semaglutide Plan', desc: 'Supports appetite regulation and metabolic balance', weekly: PRICES.microdosingSema.tenWeek.perWeekLabel, total: PRICES.microdosingSema.tenWeek.totalLabel, tags: ['10-week plan', 'Single Agonist'], href: CHECKOUT.semaglutideMicrodosing, cta: 'Buy Semaglutide now' },
    { name: 'Tirzepatide Plan', desc: 'GLP-1/GIP care for appetite regulation and metabolic balance', weekly: PRICES.microDosingTirz.tenWeek.perWeekLabel, total: PRICES.microDosingTirz.tenWeek.totalLabel, tags: ['10-week plan', 'Dual Agonist'], href: CHECKOUT.tirzepatideMicrodosing, cta: 'Buy Tirzepatide now' },
    { name: 'Not sure which option is right for you?', desc: 'Talk with our team and learn more before you begin', weekly: 'Free', total: 'Discovery call', tags: ['No commitment', 'Ask questions first'], href: discoverHref, cta: 'Book Free Discovery Call' },
  ]
  return (
    <section style={{ padding: '2.5rem 1.25rem', background: 'linear-gradient(160deg, var(--glp) 0%, var(--base) 55%)', borderTop: '1px solid var(--border)' }}>
      <div style={wrap}>
        <div style={eyebrowStyle}>Clinician-guided metabolic support</div>
        <h2 style={{ ...h2Style, fontSize: 'clamp(1.875rem, 5vw, 2.75rem)', marginBottom: '0.25rem' }}>GLP-1 Microdosing</h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', marginBottom: '1.5rem' }}>Real clinicians, real conversations via video or phone</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {plans.map(p => (
            <div key={p.name} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', color: 'var(--ink)', lineHeight: 1.2, marginBottom: 4 }}>{p.name}</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.5, marginBottom: '0.875rem' }}>{p.desc}</p>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--glp-dark)', lineHeight: 1 }}>{p.weekly}</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', marginBottom: '0.75rem' }}>{p.total}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '1rem' }}>
                {p.tags.map(t => <span key={t} style={{ fontSize: '0.8125rem', fontWeight: 600, background: 'var(--base)', border: '1px solid var(--border)', borderRadius: 999, padding: '3px 10px', color: 'var(--ink-2)' }}>{t}</span>)}
              </div>
              <div style={{ marginTop: 'auto' }}>
                <Link href={p.href} style={{ display: 'block', textAlign: 'center', padding: '12px 18px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontWeight: 700, textDecoration: 'none' }}>{p.cta}</Link>
              </div>
            </div>
          ))}
        </div>
        <MicrodosingIntro />
      </div>
    </section>
  )
}

/** Vial + intro + checklist block that follows the plan cards on live. */
export function MicrodosingIntro() {
  return (
    <div style={grid2}>
      <div style={{ maxWidth: 360, width: '100%', justifySelf: 'center' }}><Img img={IMG.glpVial} /></div>
      <div>
        <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
          GLP-1 microdosing uses a low weekly dose to help support appetite regulation and metabolic balance.
        </p>
        <Checklist items={MICRODOSING_CHECKLIST} />
        <p style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
          Includes a personalized video consultation, medication, and home delivery. 10-week plan, paid upfront.
          No membership. No hidden fees. No commitment. Subject to clinical approval. If not approved, your payment will be refunded.
          View full disclaimer in footer.*
        </p>
      </div>
    </div>
  )
}
