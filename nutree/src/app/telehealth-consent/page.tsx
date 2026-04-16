import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telehealth Consent — Nutree Clinic',
  description: 'Telehealth consent policy for Nutree Clinic LLC, covering benefits, risks, privacy, and patient acknowledgment.',
}

export default function TelehealthConsentPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '2.5rem 1rem 1.5rem', background: 'var(--base)' }}>
        <div style={{
          fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink-3)',
          textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem',
        }}>
          Legal
        </div>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
          color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.5rem',
        }}>
          Telehealth Consent
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Please read this consent carefully before your consultation.
        </p>
      </section>

      {/* ── Body ── */}
      <section style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--white)',
        padding: '2.5rem 1rem 4rem',
      }}>
        <div style={{ maxWidth: 720, fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.75 }}>

          <p>
            For convenience of accessing care, <strong>NUTREE CLINIC, LLC</strong>, offers remote telehealth
            consultations between patients and clinicians via a secure video platform. Additionally, your
            healthcare provider may consult with other providers or specialists remotely about your care via
            video or phone. Please carefully review this consent — by filling in a form, you agree to the
            following:
          </p>

          <h2 style={h2}>Potential Benefits of Telehealth</h2>
          <ul style={ul}>
            <li>Convenience in accessing your providers from your home or another location.</li>
            <li>Protection against the transmission of communicable illnesses between yourself and other patients and clinic staff.</li>
            <li>Improvements to the quality of care when your clinician can consult with other providers as needed.</li>
          </ul>

          <h2 style={h2}>Technology Risks</h2>
          <p>
            Inherent in the use of telehealth are technological risks of disruption to the call or video
            connection and other technical difficulties. You or the provider may discontinue the telehealth
            consultation if either of you determine that technical difficulties are too disruptive to continue.
          </p>

          <h2 style={h2}>Privacy and Security</h2>
          <p>
            We take strong precautions to safeguard the privacy of your protected health information (PHI),
            including using only HIPAA-compliant platforms for telehealth. Nevertheless, there is an
            unavoidable risk of unauthorized access when sending/receiving PHI electronically (for example,
            via a video feed).
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            You are solely responsible for ensuring privacy and confidentiality on your side — by conducting
            the visit in a private space where others cannot overhear and cannot see private information on
            the screen.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            We do not record (voice or video) telehealth consultations, but the health care provider will
            retain a medical record of care in their secure electronic health records system.
          </p>

          <h2 style={h2}>Limitations of Telehealth</h2>
          <p>
            Some visits — specifically, those that require the clinician to be physically present with you —
            are not suitable for telehealth. Your provider may ask that you schedule an in-person visit with
            your primary care provider for any issues that require in-person evaluation or treatment.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <strong>Telehealth is not a substitute for emergency care.</strong><br />
            If you need urgent care, call <strong>911</strong> or go to the nearest urgent care facility.
          </p>

          <h2 style={h2}>Cost Responsibility</h2>
          <p>
            You are responsible for the cost of your telehealth consultation. If you are seeking insurance
            payment or reimbursement for the visit, note that insurance companies may require that you
            participate in the telehealth consultation from:
          </p>
          <ul style={ul}>
            <li>A hospital</li>
            <li>A mental health facility</li>
            <li>A physician&apos;s office</li>
            <li>An adult care facility</li>
            <li>Your home</li>
          </ul>

          <h2 style={h2}>Privacy Recommendations</h2>
          <p>I understand the following recommendations given to me about privacy:</p>
          <ul style={ul}>
            <li>If people are close to you, they may hear something you did not want them to know. You should be in a private place, so other people cannot hear you.</li>
            <li>We use telehealth technology that is designed to protect your privacy.</li>
            <li>There is a very small chance that someone could use technology to hear or see your telehealth visit.</li>
            <li>If you use the Internet for telehealth, use a network that is private and secure.</li>
          </ul>

          <h2 style={h2}>Practice Policies</h2>
          <p>I have read and understood the following practice policies:</p>
          <ul style={ul}>
            <li>
              The patient must be located or reside in the <strong>State of Florida</strong> or reside where
              a licensed health care provider employed by <strong>NUTREE CLINIC</strong> is duly licensed to
              provide health care services at the time of the telehealth consult.
            </li>
            <li>No recordings of audio or video are allowed.</li>
            <li>Choose a quiet room. Other people will not be allowed to see or listen to the visit unless it is a legal tutor, or you need technical help.</li>
            <li>Please do not drive during the appointment.</li>
            <li>Make sure you are appropriately dressed as if you were visiting the office.</li>
            <li>Make sure to turn off all other electronic devices or social media.</li>
            <li>
              Make sure to be connected to the patient portal and ready for your visit at least{' '}
              <strong>10 minutes prior</strong> to the scheduled time.
            </li>
            <li>Controlled substances will not be prescribed.</li>
            <li>
              If you have not submitted your payment or all patient forms have not been completed at least{' '}
              <strong>15 minutes prior</strong> to the appointment, your appointment could be cancelled or
              rescheduled.
            </li>
            <li>If we encounter technical difficulties the appointment may need to be rescheduled.</li>
          </ul>

          <div style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            background: 'var(--base)',
            border: '1px solid var(--border)',
            borderRadius: 10,
          }}>
            <h2 style={{ ...h2, marginTop: 0 }}>Patient Consent to the Use of Telehealth</h2>
            <p>
              I have read this form — or had it read and explained to me — in full. I fully understand its
              contents, including the risks, benefits, and alternatives.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              I have been given opportunity to ask questions and any questions have been answered to my
              satisfaction.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              I hereby give my informed consent to the use of telehealth in the course of my diagnosis and
              treatment.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              By filling in a form, I acknowledge and agree that:
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              I have carefully read the information on this Telehealth Consent and understand I may be giving
              up some important legal rights by signing.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.125rem',
  color: 'var(--ink)',
  marginTop: '2rem',
  marginBottom: '0.5rem',
  lineHeight: 1.3,
}

const ul: React.CSSProperties = {
  paddingLeft: '1.25rem',
  marginTop: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
}
