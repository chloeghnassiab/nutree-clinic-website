import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer style={{
      background: 'var(--white)',
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 1.25rem 1.5rem',
    }}>
      <style>{`
        .footer-link { display: block; font-size: 0.75rem; color: var(--ink-3); text-decoration: none; margin-bottom: 0.375rem; transition: color 0.15s; }
        .footer-link:hover { color: var(--ink); }
      `}</style>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>nutree clinic</div>
          <p style={{ fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '0.75rem' }}>Science-based telehealth.<br />Human-centered care.</p>
          <p style={{ fontSize: '0.625rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>Nutree Clinic LLC<br />Florida · Licensed telehealth<br />LegitScript certified</p>
        </div>
        <div>
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Treatments</div>
          <Link href="/weight-loss" className="footer-link">GLP-1 Weight Loss</Link>
          <Link href="/nad" className="footer-link">NAD+ Therapy</Link>
          <Link href="/sermorelin" className="footer-link">Sermorelin</Link>
          <Link href="/oxytocin" className="footer-link">Oxytocin</Link>
          <Link href="/b12" className="footer-link">B6 / B12</Link>
        </div>
        <div>
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</div>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/blog" className="footer-link">Blog</Link>
          <Link href="/faq" className="footer-link">FAQ</Link>
          <Link href="/pricing" className="footer-link">Pricing</Link>
          <Link href="/consult" className="footer-link">Book a Consult</Link>
        </div>
        <div>
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</div>
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          <Link href="/terms-of-use" className="footer-link">Terms of Use</Link>
        </div>
      </div>
      <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '1rem', fontSize: '0.5625rem', color: 'var(--ink-3)', lineHeight: 1.65 }}>
        <p style={{ marginBottom: '0.375rem' }}>Compounded medications are not FDA-approved and have not been reviewed by the FDA for safety, efficacy, or quality. All prescriptions are issued at the sole clinical discretion of licensed providers. This website does not provide medical advice. Individual results vary. Nutree Clinic LLC is not a pharmacy.</p>
        <p>Wegovy® is a registered trademark of Novo Nordisk A/S. Mounjaro® and Zepbound® are registered trademarks of Eli Lilly and Company. Use of these names does not imply any affiliation with or endorsement by these companies.</p>
        <p style={{ marginTop: '0.5rem' }}>© {new Date().getFullYear()} Nutree Clinic LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}
