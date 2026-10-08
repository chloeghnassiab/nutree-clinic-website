// ─────────────────────────────────────────────────────────────────────────────
// SEO CONTENT BLOCKS — server components (no client JS, no entrance animation)
// so every heading, paragraph and FAQ answer is present and visible in the
// server-rendered HTML that search engines index.
// ─────────────────────────────────────────────────────────────────────────────
import Image from 'next/image'
import Link from 'next/link'
import type { FAQItem } from '@/lib/faq.config'

type QA = { q: string; a: string }

// ─── HELPERS ─────────────────────────────────────────────────────────────────
/** Active FAQ items for any of the given page paths, sorted by `order`. */
export function faqsForPages(items: FAQItem[], paths: string[]): QA[] {
  return items
    .filter(f => f.active && f.pages.some(p => paths.includes(p)))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))
}

export function faqPageJsonLd(items: QA[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(i => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; escape "<" so content can never close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

// ─── SHARED STYLES ───────────────────────────────────────────────────────────
const sectionStyle = (bg: string): React.CSSProperties => ({
  padding: '2.5rem 1.5rem',
  background: bg,
  borderTop: '1px solid var(--border)',
})
const inner: React.CSSProperties = { maxWidth: 1080, margin: '0 auto' }
const eyebrowStyle: React.CSSProperties = {
  fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase',
  letterSpacing: '0.12em', color: 'var(--ink-3)', marginBottom: '0.5rem',
}
const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)',
  color: 'var(--ink)', lineHeight: 1.2, marginBottom: '0.75rem',
}
const h3Style: React.CSSProperties = {
  fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 6, lineHeight: 1.35,
}
const bodyStyle: React.CSSProperties = { fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }
const noteStyle: React.CSSProperties = { fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6 }
const splitGrid: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
  gap: '1.75rem', alignItems: 'center',
}

export function CTAButton({ href = '/consult', children, variant = 'dark' }: {
  href?: string; children: React.ReactNode; variant?: 'dark' | 'outline'
}) {
  return (
    <Link href={href} style={{
      display: 'inline-block', padding: '13px 26px', borderRadius: 999, fontSize: '0.9375rem', fontWeight: 700,
      textDecoration: 'none',
      background: variant === 'dark' ? 'var(--ink)' : 'transparent',
      color: variant === 'dark' ? '#fff' : 'var(--ink)',
      border: variant === 'dark' ? 'none' : '1px solid var(--border)',
    }}>
      {children}
    </Link>
  )
}

function Check({ color }: { color: string }) {
  return (
    <span aria-hidden="true" style={{
      width: 22, height: 22, borderRadius: '50%', background: color, flexShrink: 0,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '0.75rem', fontWeight: 800, color: 'var(--ink)', marginTop: 2,
    }}>✓</span>
  )
}

export function CheckList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
      {items.map(item => (
        <li key={item} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', ...bodyStyle }}>
          <Check color={color} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// ─── EXPLAINER: "How does X work?" + "Who is this for?" ──────────────────────
export function ExplainerSection({
  id, eyebrow, title, body, image, imageAlt, listTitle, list, note, accent, ctaHref = '/consult', ctaLabel = 'Get started',
  bg = 'var(--white)',
}: {
  id?: string; eyebrow?: string; title: string; body: string[]; image?: string; imageAlt?: string
  listTitle?: string; list?: string[]; note?: string; accent: string; ctaHref?: string; ctaLabel?: string; bg?: string
}) {
  return (
    <section id={id} style={sectionStyle(bg)}>
      <div style={{ ...inner, ...splitGrid }}>
        <div>
          {eyebrow && <div style={eyebrowStyle}>{eyebrow}</div>}
          <h2 style={h2Style}>{title}</h2>
          {body.map(p => <p key={p} style={{ ...bodyStyle, marginBottom: '0.875rem' }}>{p}</p>)}
          {listTitle && <h3 style={{ ...h3Style, marginTop: '1.25rem', marginBottom: '0.75rem' }}>{listTitle}</h3>}
          {list && <CheckList items={list} color={accent} />}
          {note && <p style={{ ...noteStyle, marginTop: '1rem' }}>{note}</p>}
          <div style={{ marginTop: '1.25rem' }}><CTAButton href={ctaHref}>{ctaLabel} →</CTAButton></div>
        </div>
        {image && (
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--base)' }}>
            <Image src={image} alt={imageAlt ?? ''} fill sizes="(max-width: 760px) 100vw, 540px" style={{ objectFit: 'cover' }} />
          </div>
        )}
      </div>
    </section>
  )
}

// ─── BENEFIT GRID: "Discover how X can support …" ────────────────────────────
export function BenefitGrid({
  id, eyebrow, title, intro, items, disclaimer, accent, image, imageAlt, ctaHref = '/consult', ctaLabel = 'Get started',
  bg = 'var(--base)',
}: {
  id?: string; eyebrow?: string; title: string; intro?: string; items: { title: string; desc: string }[]
  disclaimer?: string; accent: string; image?: string; imageAlt?: string; ctaHref?: string; ctaLabel?: string; bg?: string
}) {
  return (
    <section id={id} style={sectionStyle(bg)}>
      <div style={inner}>
        {eyebrow && <div style={eyebrowStyle}>{eyebrow}</div>}
        <h2 style={h2Style}>{title}</h2>
        {intro && <p style={{ ...bodyStyle, maxWidth: 640, marginBottom: '1.25rem' }}>{intro}</p>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {items.map(item => (
            <div key={item.title} style={{ background: 'var(--white)', border: '0.5px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.125rem', display: 'flex', gap: '0.75rem' }}>
              <Check color={accent} />
              <div>
                <h3 style={h3Style}>{item.title}</h3>
                <p style={{ ...bodyStyle, fontSize: '0.9375rem', color: 'var(--ink-3)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {image && (
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 7', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1.25rem' }}>
            <Image src={image} alt={imageAlt ?? ''} fill sizes="(max-width: 1080px) 100vw, 1080px" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
          </div>
        )}
        {disclaimer && <p style={{ ...noteStyle, maxWidth: 760, marginBottom: '1.25rem' }}>{disclaimer}</p>}
        <CTAButton href={ctaHref}>{ctaLabel} →</CTAButton>
      </div>
    </section>
  )
}

// ─── NUMBERED STEPS: "Next steps" / "How It Works" ───────────────────────────
export function NumberedSteps({
  id, eyebrow, title, intro, steps, accent, ctaHref = '/consult', ctaLabel = 'Get started', bg = 'var(--white)',
}: {
  id?: string; eyebrow?: string; title: string; intro?: string; steps: { title: string; desc: string }[]
  accent: string; ctaHref?: string; ctaLabel?: string; bg?: string
}) {
  return (
    <section id={id} style={sectionStyle(bg)}>
      <div style={inner}>
        {eyebrow && <div style={eyebrowStyle}>{eyebrow}</div>}
        <h2 style={h2Style}>{title}</h2>
        {intro && <p style={{ ...bodyStyle, maxWidth: 640, marginBottom: '1rem' }}>{intro}</p>}
        <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: '0.75rem' }}>
          {steps.map((s, i) => (
            <li key={s.title} style={{ background: 'var(--base)', borderRadius: 'var(--radius-md)', padding: '1.125rem', border: '0.5px solid var(--border)' }}>
              <div aria-hidden="true" style={{ width: 32, height: 32, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.625rem' }}>{i + 1}</div>
              <h3 style={h3Style}>{s.title}</h3>
              <p style={{ ...bodyStyle, fontSize: '0.9375rem', color: 'var(--ink-3)' }}>{s.desc}</p>
            </li>
          ))}
        </ol>
        {ctaLabel && <CTAButton href={ctaHref}>{ctaLabel} →</CTAButton>}
      </div>
    </section>
  )
}

// ─── FAQ (answers always in the HTML; native <details> accordion) ────────────
export function SeoFAQ({ id, title = 'Frequently asked questions', items, accent, accentDark, jsonLd = true }: {
  id?: string; title?: string; items: QA[]; accent: string; accentDark: string; jsonLd?: boolean
}) {
  if (items.length === 0) return null
  return (
    <section id={id} style={{ ...sectionStyle('var(--white)'), scrollMarginTop: 80 }}>
      <style>{`
        .seo-faq summary { list-style: none; }
        .seo-faq summary::-webkit-details-marker { display: none; }
        .seo-faq .faq-icon::before { content: '+'; }
        .seo-faq details[open] .faq-icon::before { content: '−'; }
      `}</style>
      <div style={inner} className="seo-faq">
        <h2 style={h2Style}>{title}</h2>
        {items.map(item => (
          <details key={item.q} style={{ borderBottom: '0.5px solid var(--border)' }}>
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1rem 0', cursor: 'pointer' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, margin: 0 }}>{item.q}</h3>
              <span className="faq-icon" aria-hidden="true" style={{ width: 24, height: 24, borderRadius: '50%', background: accent, color: accentDark, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700 }} />
            </summary>
            <p style={{ ...bodyStyle, fontSize: '0.9375rem', padding: '0 0 1rem' }}>{item.a}</p>
          </details>
        ))}
      </div>
      {jsonLd && <JsonLd data={faqPageJsonLd(items)} />}
    </section>
  )
}
