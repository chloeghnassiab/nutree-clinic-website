import Image from 'next/image'

/** Post-submission thank-you pages (/thankyou, /thankyougiveaway). */
export function ThankYouPage({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section style={{ padding: '3rem 1rem 3.5rem', background: 'var(--base)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: 'var(--ink)', lineHeight: 1.1, marginBottom: children ? '1.25rem' : '1.75rem',
        }}>
          {title}
        </h1>
        {children && (
          <div style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {children}
          </div>
        )}
        <Image
          src="/images/utility/welcome-wellness-journey-nutreeclinic.jpg"
          alt="Three glass medication vials and a syringe beside a sprig of greenery on a white surface"
          width={1400}
          height={933}
          sizes="(max-width: 800px) 100vw, 760px"
          style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }}
          priority
        />
      </div>
    </section>
  )
}
