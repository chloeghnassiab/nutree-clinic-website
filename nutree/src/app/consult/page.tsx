import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book a Consultation — $50, Credited to Your First Plan',
  description: 'Book a 30-minute consultation with a licensed Nutree clinician. Video or phone. $50, credited toward your first treatment plan.',
}

export default function ConsultPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: '2.5rem 1rem 1.5rem', background: 'linear-gradient(145deg, var(--con) 0%, #FAD8CC 55%, #FFF0EC 100%)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--con-dark)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.875rem' }}>
          Wellness consultation · 30 minutes · Licensed provider
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.625rem' }}>
          Not sure where<br />to start?<br />
          <em style={{ color: 'var(--con-dark)' }}>Start with a conversation.</em>
        </h1>
        <p style={{ fontSize: "1rem", color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 300 }}>
          A licensed Nutree clinician will listen to what you&apos;re experiencing, review your goals and health history, and give you an honest recommendation.
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 700, color: 'var(--con-dark)', lineHeight: 1 }}>$50</span>
          <div style={{ fontSize: "1rem", color: 'var(--ink-2)', lineHeight: 1.4 }}>30-minute consultation<br />with a licensed provider</div>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(82,159,153,0.12)', border: '1px solid rgba(82,159,153,0.25)', borderRadius: 'var(--radius-pill)', padding: '6px 14px', fontSize: "1rem", fontWeight: 600, color: 'var(--teal)', marginBottom: '1.25rem' }}>
          ⭐ $50 credited toward your first treatment plan
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Link href="https://calendly.com/nutreeclinic" target="_blank" className="btn-primary">
            Book my consultation →
          </Link>
          <Link href="/faq" className="btn-ghost">Read FAQs first</Link>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: '1.5rem 1rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--con-dark)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.875rem' }}>What&apos;s included</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            { icon: '🩺', title: 'Personalised treatment recommendation', desc: 'Your clinician reviews your health history and goals, then recommends the treatment most appropriate for your body — or none, if it\'s not right for you.' },
            { icon: '🎯', title: 'Full health history review', desc: 'A real clinical conversation. Your provider asks the right questions and listens before making any recommendation.' },
            { icon: '💳', title: '$50 credited to your first plan', desc: 'If you start a Nutree treatment plan after your consultation, the $50 is credited toward your first month.' },
            { icon: '📱', title: 'Video or phone — your choice', desc: 'Consult from anywhere. No travel, no waiting rooms. Florida-licensed providers only.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.875rem', borderRadius: 'var(--radius-md)', background: 'var(--base)', border: '0.5px solid var(--border)' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, var(--con), #FAD8CC)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{item.title}</div>
                <div style={{ fontSize: "0.875rem", color: 'var(--ink-3)', lineHeight: 1.55 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO BOOKS */}
      <section style={{ padding: '1.5rem 1rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--con-dark)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>Who books a consultation?</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.875rem' }}>Most people book when they&apos;re in one of these situations.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          {[
            { icon: '🤔', t: 'Not sure which treatment is right', d: 'Between GLP-1, NAD+, Sermorelin, Oxytocin, and B12 — a clinician maps it out clearly for your specific situation.' },
            { icon: '💊', t: 'On existing medications', d: 'Your clinician reviews your current medications for interactions before prescribing anything.' },
            { icon: '🌿', t: 'Want a full protocol', d: 'Your provider can design a coordinated multi-treatment plan addressing several goals at once.' },
            { icon: '❓', t: 'Have questions the website doesn\'t answer', d: 'Bring anything. Your provider is there to give you honest, personalised guidance — not a sales pitch.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'var(--white)', border: '0.5px solid var(--border)' }}>
              <div style={{ fontSize: '1rem', flexShrink: 0, marginTop: 1 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{item.t}</div>
                <div style={{ fontSize: "0.875rem", color: 'var(--ink-3)', lineHeight: 1.55 }}>{item.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLINICAL INDEPENDENCE */}
      <section style={{ padding: '1.25rem 1rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ background: 'var(--base)', borderRadius: 'var(--radius-lg)', padding: '1rem', border: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.375rem' }}>Our approach</div>
          <p style={{ fontSize: "0.9375rem", color: 'var(--ink-2)', lineHeight: 1.7 }}>
            Your clinician&apos;s role is to determine what is medically appropriate for you — not to recommend a specific plan. If a treatment is not right for you, your provider will tell you that clearly and honestly.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: 'var(--ink)', padding: '1.5rem 1rem', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>Video or phone.<br />Your choice.</div>
        <div style={{ fontSize: "0.875rem", color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>No pressure to commit to anything on the call</div>
        <Link href="https://calendly.com/nutreeclinic" target="_blank" className="btn-consult">
          Book now · $50 →
        </Link>
      </section>
    </>
  )
}
