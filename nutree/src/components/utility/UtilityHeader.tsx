/** Simple page header used by legal, intake and thank-you pages (matches /telehealth-consent). */
export function UtilityHeader({
  eyebrow,
  title,
  subtitle,
  children,
  background = 'var(--base)',
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  children?: React.ReactNode
  background?: string
}) {
  return (
    <section style={{ padding: '2.5rem 1rem 1.5rem', background }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {eyebrow && (
          <div style={{
            fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink-3)',
            textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem',
          }}>
            {eyebrow}
          </div>
        )}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
          color: 'var(--ink)', lineHeight: 1.1, marginBottom: subtitle ? '0.5rem' : 0,
        }}>
          {title}
        </h1>
        {subtitle && (
          <div style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.65 }}>{subtitle}</div>
        )}
        {children}
      </div>
    </section>
  )
}

/** Bordered white body section with a centred column. */
export function UtilityBody({ children, maxWidth = 760, padding = '2rem 1rem 4rem' }: {
  children: React.ReactNode; maxWidth?: number; padding?: string
}) {
  return (
    <section style={{ borderTop: '1px solid var(--border)', background: 'var(--white)', padding }}>
      <div style={{ maxWidth, margin: '0 auto' }}>{children}</div>
    </section>
  )
}
