import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Nutree Clinic',
  description: 'Nutree Clinic is a licensed Florida telehealth practice founded by Atara Marko, MMS, PA-C. Science-based treatments, human-centered care.',
}

export default function AboutPage() {
  return (
    <>
      {/* FOUNDER STORY */}
      <section style={{ padding: '2.5rem 1rem 1.5rem', background: 'var(--base)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.875rem' }}>Our story</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '1rem' }}>
          Science-based care<br />should be accessible<br />to everyone.
        </h1>
        <p style={{ fontSize: "1rem", color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '0.875rem', maxWidth: 560 }}>
          Nutree Clinic was founded by Atara Marko, MMS, PA-C — a practicing clinician who saw firsthand how difficult it was for patients to access evidence-based metabolic and longevity treatments. The barrier wasn&apos;t efficacy. It was access, cost, and the lack of a trusted clinical relationship.
        </p>
        <p style={{ fontSize: "1rem", color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '0.875rem', maxWidth: 560 }}>
          Nutree was built to close that gap — combining the clinical rigor of a licensed medical practice with the accessibility of telehealth, delivered by providers who take the time to understand each patient individually.
        </p>
        <p style={{ fontSize: "1rem", color: 'var(--ink-2)', lineHeight: 1.75, maxWidth: 560 }}>
          We are based in Florida and serve patients across the state. Every plan starts with a real clinical conversation — not an intake form.
        </p>
      </section>

      {/* TEAM */}
      <section style={{ padding: '1.5rem 1rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.875rem' }}>Our team</div>

        {/* Atara */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
          <div style={{ width: 72, height: 72, borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, var(--teal), var(--teal-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.5rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-serif)' }}>
            AM
          </div>
          <div>
            <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-serif)', marginBottom: 2 }}>Atara Marko, MMS, PA-C</div>
            <div style={{ fontSize: "0.875rem", fontWeight: 600, color: 'var(--teal)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Founder · Managing Member</div>
            <p style={{ fontSize: "0.9375rem", color: 'var(--ink-3)', lineHeight: 1.65 }}>
              Licensed Physician Assistant with a Master of Medical Science. Atara founded Nutree Clinic to bring evidence-based metabolic and longevity medicine within reach of patients who deserve better than the standard of care currently available to them.
            </p>
          </div>
        </div>

        {/* Dr. Bilhartz */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ width: 72, height: 72, borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0 }}>
            <Image
              src="https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/9jhhz4lnjic2qnkw.jpg"
              alt="Dr. Teri Bilhartz, MD, MPH — Medical Director, Nutree Clinic"
              width={72} height={72}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-serif)', marginBottom: 2 }}>Dr. Teri Bilhartz, MD, MPH</div>
            <div style={{ fontSize: "0.875rem", fontWeight: 600, color: 'var(--teal)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Medical Director</div>
            <p style={{ fontSize: "0.9375rem", color: 'var(--ink-3)', lineHeight: 1.65 }}>
              Board-certified physician with a Master of Public Health. Dr. Bilhartz oversees clinical protocols and provider standards at Nutree Clinic, bringing decades of medical expertise to the practice&apos;s approach to evidence-based metabolic health.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '1.5rem 1rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.875rem' }}>What we believe</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { title: 'Clinical honesty above all', body: 'Your clinician\'s role is to determine what is medically appropriate for you — not to recommend a specific plan. If a treatment is not right for you, we will tell you.' },
            { title: 'Access is a clinical issue', body: 'Evidence-based metabolic treatments should not be limited to patients who can afford concierge medicine. Nutree exists to close that gap.' },
            { title: 'The relationship matters', body: 'Telehealth at its best is not faster medicine — it is more accessible medicine. Our providers take the time that traditional practice often cannot.' },
            { title: 'Transparency in everything', body: 'No hidden fees, no dose-dependent price increases, no pressure to commit. The price you see is the price you pay.' },
          ].map((v, i) => (
            <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', padding: '0.875rem', border: '0.5px solid var(--border)' }}>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{v.title}</div>
              <div style={{ fontSize: "0.875rem", color: 'var(--ink-3)', lineHeight: 1.65 }}>{v.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ padding: '1.25rem 1rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>Credentials & compliance</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {['🏥 Licensed Florida telehealth practice', '✅ LegitScript certified', '🔒 HIPAA compliant', '🇺🇸 503A licensed pharmacy partners', '💳 FSA / HSA eligible'].map(c => (
            <div key={c} className="trust-pill">{c}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--ink)', padding: '1.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9375rem', color: '#fff', lineHeight: 1.3, marginBottom: 2 }}>Ready to get started?</div>
          <div style={{ fontSize: "0.875rem", color: 'rgba(255,255,255,0.45)' }}>30 min · licensed clinician</div>
        </div>
        <Link href="/consult" className="btn-consult">Book a consult · $50 →</Link>
      </section>
    </>
  )
}
