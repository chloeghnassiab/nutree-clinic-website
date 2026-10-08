import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer style={{
      background: 'var(--white)',
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2rem 1.5rem',
    }}>
      <style>{`
        .footer-link { display: block; font-size: 0.75rem; color: var(--ink-3); text-decoration: none; margin-bottom: 0.375rem; transition: color 0.15s; }
        .footer-link:hover { color: var(--ink); }
      `}</style>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          {/* Logo */}
          <div style={{ marginBottom: '0.75rem' }}>
            <img src="/images/NutreeClinic-logo-stacked-charcoal.png" alt="Nutree Clinic" style={{ height: 52, width: 'auto', display: 'block', marginLeft: '-6px' }} />
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.65 }}>Science-based.<br />Human-centered care.</p>
        </div>
        <div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Treatments</div>
          <Link href="/weight-loss" className="footer-link">GLP-1 Weight Loss</Link>
          <Link href="/glp-1microdosing" className="footer-link">GLP-1 Microdosing</Link>
          <Link href="/nad+" className="footer-link">NAD+</Link>
          <Link href="/sermorelin" className="footer-link">Sermorelin</Link>
          <Link href="/glutathione" className="footer-link">Glutathione</Link>
          <Link href="/oxytocin" className="footer-link">Oxytocin</Link>
          <Link href="/b12" className="footer-link">B12-MIC</Link>
        </div>
        <div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</div>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/blog" className="footer-link">Blog</Link>
          <Link href="/faq" className="footer-link">FAQ</Link>
          <Link href="/pricing" className="footer-link">Pricing</Link>
          <Link href="/consult" className="footer-link">Book a Consult</Link>
        </div>
        <div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</div>
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          <Link href="/terms-of-use" className="footer-link">Terms of Use</Link>
        </div>
      </div>
      {/* 7/7 trust pill */}
      <div className="footer-trust-row" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {['✓ Free shipping', '✓ FSA / HSA eligible', '✓ 7/7 clinician messaging'].map(t => (
            <div key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 999, background: 'var(--base)', border: '0.5px solid var(--border)', fontSize: '0.75rem', color: 'var(--ink-3)', fontWeight: 500 }}>
              {t}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* LegitScript official seal */}
          <a href="https://www.legitscript.com/websites/?checker_keywords=nutreeclinic.com"
             target="_blank"
             rel="noopener noreferrer"
             title="Verify LegitScript Approval for www.nutreeclinic.com">
            <img
              src="https://static.legitscript.com/seals/47538313.png"
              alt="Verify Approval for www.nutreeclinic.com nutreeclinic"
              style={{ height: 64, width: 'auto' }}
            />
          </a>
          {/* Compounded in the U.S.A. — typographic badge */}
          <div style={{
            display: 'inline-flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 2,
            border: '1.5px solid var(--ink)',
            borderRadius: 8, padding: '8px 14px',
            minWidth: 80, height: 64,
          }}>
            <div style={{ width: '100%', height: '0.5px', background: 'var(--ink-3)', marginBottom: 2 }} />
            <span style={{ fontSize: '0.5625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--ink)', textAlign: 'center' }}>
              Compounded
            </span>
            <span style={{ fontSize: '0.4375rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-3)', textAlign: 'center' }}>
              in the
            </span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--ink)', textAlign: 'center' }}>
              U.S.A.
            </span>
            <div style={{ width: '100%', height: '0.5px', background: 'var(--ink-3)', marginTop: 2 }} />
          </div>
        </div>
      </div>

      <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '1rem', fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.75 }}>
        <p style={{ marginBottom: '0.625rem', fontSize: '0.75rem', lineHeight: 1.75, color: 'var(--ink-3)' }}>
          Nutree Clinic LLC is a Florida-licensed telehealth medical practice and currently provides care only to patients located in Florida. Prescription treatments require an evaluation by a licensed healthcare provider, and a prescription is issued only if your provider determines it is medically appropriate; a prescription is never guaranteed. A licensed provider reviews your intake; a video or phone visit may be required depending on your treatment and Florida rules.
        </p>
        <p style={{ marginBottom: '0.625rem', fontSize: '0.75rem', lineHeight: 1.75, color: 'var(--ink-3)' }}>
          Compounded medications are not FDA-approved, and the FDA does not review compounded drugs for safety, effectiveness, or quality. Compounded medications are prepared by state-licensed 503A compounding pharmacies for individual patients and are not generic versions of brand-name drugs. Some treatments, including NAD+, sermorelin, oxytocin, and glutathione, are prescribed off-label. See the Important Safety Information on each treatment page. Nutree Clinic LLC is not a pharmacy.
        </p>
        <p style={{ marginBottom: '0.625rem', fontSize: '0.75rem', lineHeight: 1.75, color: 'var(--ink-3)' }}>
          Individual results vary and are not guaranteed. Patient reviews reflect individual experiences and are not typical of all patients. FSA/HSA eligibility depends on your plan administrator. Information on this website is for general education only and is not a substitute for advice, diagnosis, or treatment from a licensed healthcare provider. Nutree Clinic is not for medical emergencies — if you think you are having a medical emergency, call 911 or go to the nearest emergency room; if you are having thoughts of harming yourself, call or text 988.
        </p>
        <p style={{ marginBottom: '0.625rem', fontSize: '0.75rem', lineHeight: 1.75, color: 'var(--ink-3)' }}>
          Ozempic® and Wegovy® are registered trademarks of Novo Nordisk A/S. Mounjaro® and Zepbound® are registered trademarks of Eli Lilly and Company. Nutree Clinic is not affiliated with, sponsored by, or endorsed by Novo Nordisk or Eli Lilly, and use of these names does not imply any such relationship.
        </p>
        <p style={{ marginBottom: '0.75rem', fontSize: '0.75rem', lineHeight: 1.75, color: 'var(--ink-3)' }}>© 2026 Nutree Clinic LLC · All rights reserved.</p>
      </div>
    </footer>
  )
}
