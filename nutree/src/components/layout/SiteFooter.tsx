import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer style={{
      background: 'var(--white)',
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 1.25rem 1.5rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: '1rem',
              color: 'var(--ink)', marginBottom: '0.5rem',
            }}>
              nutree clinic
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              Science-based telehealth.<br />Human-centered care.
            </p>
            <p style={{ fontSize: '0.625rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              Nutree Clinic LLC<br />
              Florida · Licensed telehealth<br />
              LegitScript certified
            </p>
          </div>

          {/* Treatments */}
          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Treatments
            </div>
            {[
              { label: 'GLP-1 Weight Loss', href: '/weight-loss' },
              { label: 'NAD+ Therapy',      href: '/nad' },
              { label: 'Sermorelin',         href: '/sermorelin' },
              { label: 'Oxytocin',           href: '/oxytocin' },
              { label: 'B6 / B12',           href: '/b12' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: 'block', fontSize: '0.75rem',
                color: 'var(--ink-3)', textDecoration: 'none',
                marginBottom: '0.375rem', transition: 'color 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-3)')}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Company
            </div>
            {[
              { label: 'About',         href: '/about' },
              { label: 'Blog',          href: '/blog' },
              { label: 'FAQ',           href: '/faq' },
              { label: 'Pricing',       href: '/pricing' },
              { label: 'Book a Consult',href: '/consult' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: 'block', fontSize: '0.75rem',
                color: 'var(--ink-3)', textDecoration: 'none',
                marginBottom: '0.375rem', transition: 'color 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-3)')}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Legal
            </div>
            {[
              { label: 'Privacy Policy',   href: '/privacy' },
              { label: 'Terms of Use',     href: '/terms-of-use' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: 'block', fontSize: '0.75rem',
                color: 'var(--ink-3)', textDecoration: 'none',
                marginBottom: '0.375rem',
              }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal disclaimer */}
        <div style={{
          borderTop: '0.5px solid var(--border)',
          paddingTop: '1rem',
          fontSize: '0.5625rem',
          color: 'var(--ink-3)',
          lineHeight: 1.65,
        }}>
          <p style={{ marginBottom: '0.375rem' }}>
            Compounded medications are not FDA-approved and have not been reviewed by the FDA for safety, efficacy, or quality. All prescriptions are issued at the sole clinical discretion of licensed providers. This website does not provide medical advice. Individual results vary. Nutree Clinic LLC is not a pharmacy.
          </p>
          <p>
            Wegovy® is a registered trademark of Novo Nordisk A/S. Mounjaro® and Zepbound® are registered trademarks of Eli Lilly and Company. Use of these names does not imply any affiliation with or endorsement by these companies.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            © {new Date().getFullYear()} Nutree Clinic LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
