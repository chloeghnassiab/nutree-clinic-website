import { INTAKES, type IntakeSlug } from './intakeConfig'

/** Healthie booking iframe exactly as embedded on the live site. */
export function HealthieEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div>
      <iframe
        src={src}
        title={title}
        style={{ width: '100%', height: '100%', minHeight: 600, border: 0, display: 'block' }}
      />
      <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', textAlign: 'center', marginTop: '0.5rem' }}>
        Booking Provided by{' '}
        <a href="https://gethealthie.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-3)' }}>
          Healthie
        </a>
      </div>
    </div>
  )
}

/** One of the /get_* Healthie intake/checkout pages (noindex, linked from offers and QR codes). */
export function IntakePage({ slug }: { slug: IntakeSlug }) {
  const intake = INTAKES[slug]
  return (
    <section style={{ padding: '2rem 1rem 3rem', background: 'var(--base)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
          color: 'var(--ink)', lineHeight: 1.15, marginBottom: '0.375rem',
        }}>
          {intake.heading}
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          Secure booking and checkout. Treatment is subject to clinical approval by a licensed clinician.
        </p>
        <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '0.75rem', overflow: 'hidden' }}>
          <HealthieEmbed src={intake.embedSrc} title={`${intake.heading} booking (Healthie)`} />
        </div>
      </div>
    </section>
  )
}
