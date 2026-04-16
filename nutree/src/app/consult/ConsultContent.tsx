'use client'
import Link from 'next/link'
import {
  Stethoscope, ClipboardText, CreditCard, ChatCircle,
  Question, Pill, Leaf, Scales,
} from '@phosphor-icons/react'
import { ConsultBand } from '@/components/ui/PageComponents'

const INCLUDED = [
  { Icon: Stethoscope, title: 'Personalised treatment recommendation', desc: 'Your clinician reviews your health history and goals, then recommends the treatment most appropriate for your body — or none, if it\'s not right for you.' },
  { Icon: ClipboardText, title: 'Full health history review', desc: 'A real clinical conversation. Your provider asks the right questions and listens before making any recommendation.' },
  { Icon: CreditCard, title: '$50 credited to your first plan', desc: 'If you start a Nutree treatment plan after your consultation, the $50 is credited toward your first month.' },
  { Icon: ChatCircle, title: '7/7 direct clinician messaging', desc: 'Your assigned clinician is available 7 days a week via direct message throughout your plan — no phone required, no waiting rooms.' },
]

const WHO = [
  { Icon: Question, t: 'Not sure which treatment is right', d: 'Between GLP-1, NAD+, Sermorelin, Oxytocin, and B12 — a clinician maps it out clearly for your specific situation.' },
  { Icon: Pill, t: 'On existing medications', d: 'Your clinician reviews your current medications for interactions before prescribing anything.' },
  { Icon: Leaf, t: 'Want a full protocol', d: 'Your provider can design a coordinated multi-treatment plan addressing several goals at once.' },
  { Icon: Scales, t: 'Have questions the website doesn\'t answer', d: 'Bring anything. Your provider is there to give you honest, personalised guidance — not a sales pitch.' },
]

export function ConsultContent() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: '3rem 1.25rem 2rem', background: 'linear-gradient(145deg, var(--con) 0%, #FAD8CC 55%, #FFF0EC 100%)' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--con-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
          Wellness consultation · Licensed provider
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
          Start your health journey.
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 400 }}>
          Submit your intake form and your clinician reviews everything. Your prescription is issued directly — no call required unless you request one or it is clinically necessary. Your clinician is available 7 days a week via direct message.
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 700, color: 'var(--con-dark)', lineHeight: 1 }}>$50</span>
          <div style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.4 }}>Consultation fee<br />credited to your first plan</div>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(82,159,153,0.12)', border: '1px solid rgba(82,159,153,0.25)', borderRadius: 999, padding: '8px 18px', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--teal)', marginBottom: '1.5rem' }}>
          ⭐ $50 credited toward your first treatment plan
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="https://calendly.com/nutreeclinic" target="_blank"
            style={{ padding: '14px 28px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontSize: '1rem', fontWeight: 700, textDecoration: 'none' }}>
            Book my consultation →
          </Link>
          <Link href="/faq"
            style={{ padding: '14px 24px', borderRadius: 999, background: 'transparent', color: 'var(--ink)', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>
            Read FAQs first
          </Link>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: '2rem 1.25rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--con-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>What&apos;s included</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {INCLUDED.map(({ Icon, title, desc }, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem', borderRadius: 12, background: 'var(--base)', border: '0.5px solid var(--border)' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, var(--con), #FAD8CC)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={20} weight="regular" color="var(--con-dark)" />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO BOOKS */}
      <section style={{ padding: '2rem 1.25rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--con-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.625rem' }}>Who books a consultation?</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', color: 'var(--ink)', marginBottom: '1rem' }}>Most people book when they&apos;re in one of these situations.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {WHO.map(({ Icon, t, d }, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem', borderRadius: 12, background: 'var(--white)', border: '0.5px solid var(--border)' }}>
              <Icon size={22} weight="regular" color="var(--con-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{t}</div>
                <div style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLINICAL INDEPENDENCE */}
      <section style={{ padding: '1.5rem 1.25rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ background: 'var(--base)', borderRadius: 14, padding: '1.25rem', border: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>Our approach</div>
          <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>
            Your clinician&apos;s role is to determine what is medically appropriate for you — not to recommend a specific plan. If a treatment is not right for you, your provider will tell you that clearly and honestly.
          </p>
        </div>
      </section>

      <ConsultBand />
    </>
  )
}
