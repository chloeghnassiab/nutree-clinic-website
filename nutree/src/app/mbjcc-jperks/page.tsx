import type { Metadata } from 'next'
import { CTA, Img, HowSection, BenefitsSection, StepsSection, LandingFAQ, MicrodosingPlans } from '@/components/utility/LandingSections'
import { IMG, MICRODOSING } from '@/components/utility/landingContent'
import { TestimonialDisclaimer } from '@/components/compliance'

export const metadata: Metadata = {
  title: { absolute: 'Miami Beach JCC x Nutree Clinic' },
  description: 'JPerks members of the Miami Beach JCC enjoy 10% off eligible Nutree Clinic treatments with member code JPERKS10.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/mbjcc-jperks' },
}

const DISCOVER = '/discover'
const eyebrow: React.CSSProperties = { fontSize: '0.875rem', fontWeight: 700, color: 'var(--teal-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.625rem' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', color: 'var(--ink)', lineHeight: 1.15, marginBottom: '0.75rem' }
const body: React.CSSProperties = { fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '0.75rem' }
const wrap: React.CSSProperties = { maxWidth: 1040, margin: '0 auto' }

export default function MbjccJperksPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: '2.5rem 1.25rem', background: 'linear-gradient(160deg, var(--glp) 0%, var(--base) 60%)' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem', fontSize: '0.9375rem', color: 'var(--ink-2)' }}>
            In partnership with
            <span style={{ width: 56, display: 'inline-block' }}><Img img={IMG.mbjccLogo} sizes="56px" radius={false} priority /></span>
          </div>
          <div style={eyebrow}>Nutree Clinic × JPerks</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5.5vw, 3.25rem)', color: 'var(--ink)', lineHeight: 1.08, marginBottom: '0.75rem', maxWidth: 760 }}>
            A little extra care for our Miami Beach JCC community
          </h1>
          <p style={{ ...body, fontSize: '1.0625rem', maxWidth: 620 }}>
            JPerks members enjoy an exclusive benefit on personalized medical wellness care at Nutree Clinic.
          </p>
        </div>
      </section>

      {/* MEMBER BENEFIT */}
      <section style={{ padding: '2.5rem 1.25rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', alignItems: 'center' }}>
          <div>
            <div style={eyebrow}>Your member benefit</div>
            <h2 style={h2}>10% off Nutree Clinic treatments</h2>
            <p style={body}>
              Explore clinician-guided care for weight management, wellness, peptide therapies, hair health, and more — with a special benefit reserved for JPerks members.
            </p>
            <CTA href="/">Explore Treatments</CTA>
          </div>
          <div style={{ background: 'var(--base)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 700, color: 'var(--glp-dark)', lineHeight: 1 }}>10% OFF</div>
            <div style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', margin: '0.5rem 0 1rem' }}>JPerks exclusive · Personalized medical care</div>
            <div style={{ fontSize: '1rem', color: 'var(--ink)' }}>
              Use member code{' '}
              <strong style={{ fontFamily: 'monospace', fontSize: '1.125rem', background: 'var(--promo-bg)', border: '1px dashed var(--promo-border)', borderRadius: 6, padding: '2px 8px' }}>JPERKS10</strong>
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', marginTop: '0.75rem' }}>Proof of active membership may be requested.</div>
          </div>
        </div>
      </section>

      {/* MEMBER DETAILS */}
      <section style={{ padding: '2.5rem 1.25rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
        <div style={{ ...wrap, maxWidth: 760 }}>
          <div style={eyebrow}>Member details</div>
          <h2 style={h2}>Simple, transparent savings.</h2>
          <p style={body}>Receive <strong style={{ color: 'var(--ink)' }}>10% off eligible treatments</strong> based on the regular prices shown on NutreeClinic.com.</p>
          <p style={body}>The member benefit cannot be combined with promotional pricing, coupons, event specials, introductory offers, or other discounts. If promotional pricing is available, you may use either the promotion or your JPerks benefit.</p>
          <p style={body}>For GLP-1 treatment, the benefit applies to <strong style={{ color: 'var(--ink)' }}>tirzepatide doses up to 10 mg per week</strong> and <strong style={{ color: 'var(--ink)' }}>semaglutide doses up to 2.5 mg per week</strong>.</p>
          <p style={body}>Available to active members. Proof of membership may be requested.</p>
        </div>
      </section>

      {/* APPROACH */}
      <section style={{ padding: '2.5rem 1.25rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ ...wrap, maxWidth: 760 }}>
          <div style={eyebrow}>The Nutree approach</div>
          <h3 style={h2}>Medical care that stays personal.</h3>
          <p style={body}>
            We take the time to understand your health, your goals, and what feels realistic for you. Your care is guided by licensed medical providers and adapted along the way when needed.
          </p>
          <div style={{ marginBottom: '1.25rem' }}><CTA href={DISCOVER}>Book a Free Discovery Call</CTA></div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
            Offer applies to eligible Nutree Clinic treatments at the regular price advertised at the time of redemption and cannot be combined with other promotions or discounts. Available to active Miami Beach JCC members; proof of membership may be requested. For GLP-1 treatment, the benefit applies to tirzepatide doses up to 10 mg per week and semaglutide doses up to 2.5 mg per week. Prescription treatments require evaluation by a licensed medical provider and are available only when medically appropriate. Individual eligibility and treatment recommendations vary. Offer has no cash value and is non-transferable.
          </p>
        </div>
      </section>

      <MicrodosingPlans discoverHref={DISCOVER} />

      {/* TESTIMONIAL */}
      <section style={{ padding: '2.5rem 1.25rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem', alignItems: 'center' }}>
          <div style={{ maxWidth: 360, width: '100%', justifySelf: 'center' }}><Img img={IMG.courtney} sizes="(max-width: 700px) 100vw, 360px" /></div>
          <figure style={{ margin: 0 }}>
            <div style={eyebrow}>Real patient experience</div>
            <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', color: 'var(--ink)', lineHeight: 1.3, margin: '0 0 0.75rem' }}>
              “After 9 weeks on a microdosed GLP-1, I lost 9 pounds. I already feel lighter, confident, in control. With a team that supports me!”
            </blockquote>
            <figcaption style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', marginBottom: '0.5rem' }}><strong>Courtney</strong>, 32yo, Nutree Clinic patient</figcaption>
            <p style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              Courtney is a real Nutree Clinic patient who received complimentary treatment in exchange for sharing her honest experience.
            </p>
            <TestimonialDisclaimer style={{ textAlign: 'left', fontSize: '0.8125rem' }} />
          </figure>
        </div>
      </section>

      <BenefitsSection {...MICRODOSING.benefits} cta={DISCOVER} />
      <HowSection {...MICRODOSING.how} cta={DISCOVER} />
      <StepsSection steps={MICRODOSING.steps} cta={DISCOVER} />
      <LandingFAQ items={MICRODOSING.faq} />
    </>
  )
}
