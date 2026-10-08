import type { Metadata } from 'next'
import { JotformEmbed } from './JotformEmbed'

/**
 * /discover and its tracked variants. Each variant embeds the same Jotform intake
 * (260744062065150) with its own `source` code, exactly as on the live site.
 * Note the source codes are mixed-case on live (e.g. T8vN3z) — keep them as-is.
 */
export const DISCOVER_VARIANTS = {
  discover: { src: 'https://form.jotform.com/260744062065150?noJump=true', title: 'Nutree Clinic - GLP-1', variant: 'main' },
  'discover-mk7pl4': { src: 'https://form.jotform.com/260744062065150?source=mK7pL4', title: 'Nutree Clinic - landing page', variant: 'tracked' },
  'discover-qr5wy1': { src: 'https://form.jotform.com/260744062065150?source=qR5wY1', title: 'Nutree Clinic - landing page', variant: 'tracked' },
  'discover-t8vn3z': { src: 'https://form.jotform.com/260744062065150?source=T8vN3z', title: 'Nutree Clinic - landing page', variant: 'tracked' },
  'discover-x9f2aq': { src: 'https://form.jotform.com/260744062065150?source=x9F2aQ', title: 'Nutree Clinic - landing page', variant: 'tracked' },
} as const

export type DiscoverSlug = keyof typeof DISCOVER_VARIANTS

export function discoverMetadata(slug: DiscoverSlug): Metadata {
  return {
    title: { absolute: 'Discover Nutree Clinic' },
    description: 'Start with a short intake. No payment required. Your clinician will review your information and guide the next step.',
    robots: { index: false, follow: true },
    alternates: { canonical: `/${slug}` },
  }
}

export function DiscoverPage({ slug }: { slug: DiscoverSlug }) {
  const cfg = DISCOVER_VARIANTS[slug]
  const isMain = cfg.variant === 'main'
  return (
    <section style={{ padding: '2.5rem 1rem 3rem', background: 'linear-gradient(160deg, var(--glp) 0%, var(--base) 45%)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.75rem',
        }}>
          Your journey starts here!
        </h1>
        <p style={{ fontSize: '1.0625rem', color: 'var(--ink)', fontWeight: 600, lineHeight: 1.6, marginBottom: '0.25rem' }}>
          Start with a short intake. No payment required.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Your clinician will review your information and guide the next step.
        </p>
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden' }}>
          <JotformEmbed
            formId="260744062065150"
            src={cfg.src}
            title={cfg.title}
            {...(isMain ? { minHeight: 800, useEmbedHandler: false, rounded: true } : { height: 539 })}
          />
        </div>
      </div>
    </section>
  )
}
