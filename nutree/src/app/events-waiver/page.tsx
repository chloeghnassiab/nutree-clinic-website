import type { Metadata } from 'next'
import Image from 'next/image'
import { JotformEmbed } from '@/components/utility/JotformEmbed'

export const metadata: Metadata = {
  title: 'Wellness Experience Waiver',
  description: 'Review and complete the Nutree Clinic wellness experience waiver before participating.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/events-waiver' },
}

const SERVICES = ['Body composition analysis', 'Red light therapy', 'Personalized wellness insights']

export default function EventsWaiverPage() {
  return (
    <>
      <section style={{ padding: '2.5rem 1rem 2rem', background: 'linear-gradient(160deg, var(--glp) 0%, var(--base) 55%)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--glp-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              Nutree Clinic Wellness Experience
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Welcome to Nutree Clinic
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Nutree Clinic is a premium Florida-based telemedicine practice dedicated to helping you look, feel, and live your best. We specialize in advanced peptide therapies that accelerate injury recovery, boost muscle growth, promote longevity, enhance skin quality, and support effective weight management. Through personalized virtual care, we optimize your health from the inside out to restore your vibrant energy.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1rem' }}>
              {SERVICES.map(s => (
                <span key={s} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 999, padding: '6px 14px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)' }}>{s}</span>
              ))}
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--ink)', fontWeight: 600, lineHeight: 1.6 }}>
              Before participating in today&apos;s experience, please review and complete the waiver below.
            </p>
          </div>
          <Image
            src="/images/utility/glp1-vial-online-intake.jpg"
            alt="Nutree Clinic GLP-1 vial beside a phone showing the Nutree Clinic online contact form"
            width={800} height={800}
            sizes="(max-width: 700px) 100vw, 400px"
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }}
            priority
          />
        </div>
      </section>
      <section style={{ padding: '2rem 1rem 3rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* Same Jotform as live: 261058441677159 (served via the NutreeClinic/nutree-clinic-redlightandscale alias) */}
          <JotformEmbed
            formId="261058441677159"
            src="https://form.jotform.com/NutreeClinic/nutree-clinic-redlightandscale"
            title="Nutree Clinic - Red light and scale"
          />
        </div>
      </section>
    </>
  )
}
