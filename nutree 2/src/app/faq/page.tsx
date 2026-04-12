import type { Metadata } from 'next'
import { FAQSection, ConsultBand } from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'FAQ — Nutree Clinic',
  description: 'Answers to common questions about Nutree Clinic\'s treatments, pricing, prescriptions, and telehealth process.',
}

const FAQ_CATEGORIES = [
  {
    category: 'Getting started',
    items: [
      { q: 'How does Nutree Clinic work?', a: 'Complete a short health questionnaire, book a consultation with a licensed Nutree clinician, and — if prescribed — receive your medication free to your door from a licensed 503A pharmacy. Your provider stays available throughout your plan.' },
      { q: 'Do I need insurance?', a: 'No. All Nutree treatments are self-pay. All plans are FSA and HSA eligible. For Wegovy® and Mounjaro®, we can help you explore manufacturer savings programmes where applicable.' },
      { q: 'Is Nutree licensed in Florida?', a: 'Yes. Nutree Clinic LLC is a licensed Florida telehealth practice. All prescriptions are issued by Florida-licensed providers. We are LegitScript certified.' },
      { q: 'Will I definitely receive a prescription?', a: 'All prescriptions are issued at the sole clinical discretion of your licensed provider, based on your health profile and clinical evaluation. Your clinician\'s role is to determine what is medically appropriate for you.' },
    ],
  },
  {
    category: 'GLP-1 Weight Loss',
    items: [
      { q: 'What is the difference between Compounded Semaglutide and Tirzepatide?', a: 'Semaglutide is a GLP-1 receptor agonist. Tirzepatide activates both GLP-1 and GIP receptors, producing a broader metabolic effect — clinical trials show greater average weight loss (~21% vs ~15%). Your clinician will advise which is most appropriate for your health profile.' },
      { q: 'What is included in a GLP-1 plan?', a: 'Medication, provider consultation (video or phone), dosing supplies, and free shipping. Your price is the same at every dose level — no additional fees as your treatment progresses.' },
      { q: 'What are the most common side effects?', a: 'Nausea and mild digestive discomfort are most common, especially in the early weeks. These typically ease as dosing is titrated gradually. Your provider is available to adjust your plan throughout.' },
      { q: 'Can I get Wegovy® or Mounjaro® through Nutree?', a: 'Yes. Nutree facilitates access to Wegovy® and Mounjaro® for eligible patients. Your clinician will advise which option is most appropriate for you based on your health profile.' },
    ],
  },
  {
    category: 'NAD+, Sermorelin & Peptides',
    items: [
      { q: 'Is Sermorelin FDA-approved?', a: 'Sermorelin was previously FDA-approved but the manufacturer discontinued it in 2006 for commercial reasons, not safety concerns. It remains available as a compounded medication from licensed 503A pharmacies.' },
      { q: 'Which NAD+ delivery form is most effective?', a: 'Injectables provide the highest bioavailability. Nasal spray offers rapid CNS absorption without needles. Patches with GHK-Cu provide continuous slow-release delivery. Your clinician recommends the most appropriate form based on your goals.' },
      { q: 'How long before I see results from Sermorelin?', a: 'Most patients notice improved sleep within the first 2 weeks. Energy and recovery improvements typically follow in weeks 3–6. Visible body composition changes develop over months 2–3 of consistent use. Individual results vary.' },
    ],
  },
  {
    category: 'Billing & cancellation',
    items: [
      { q: 'How do I cancel my plan?', a: 'Cancel anytime before your next renewal date through your patient portal. There are no cancellation fees.' },
      { q: 'Can I use my FSA or HSA card?', a: 'Yes. All Nutree treatment plans are FSA and HSA eligible. Use your card at checkout or request a receipt for reimbursement.' },
      { q: 'Are there any hidden fees?', a: 'No. The price you see includes your medication, provider consultation, and free shipping. Your price remains the same throughout your treatment, at every dose level.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <section style={{ padding: '2.5rem 1rem 1.5rem', background: 'var(--base)' }}>
        <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>Support</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
          Frequently asked<br />questions
        </h1>
        <p style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Can&apos;t find what you&apos;re looking for? <a href="/consult" style={{ color: 'var(--teal)', fontWeight: 600 }}>Book a consultation</a> — a clinician will answer directly.
        </p>
      </section>

      {FAQ_CATEGORIES.map((cat, ci) => (
        <section key={ci} style={{ borderTop: '1px solid var(--border)', background: ci % 2 === 0 ? 'var(--white)' : 'var(--base)' }}>
          <div style={{ padding: '1rem 1rem 0', fontSize: '0.625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
            {cat.category}
          </div>
          <FAQSection
            items={cat.items}
            iconBg="var(--teal)"
            iconColor="#fff"
          />
        </section>
      ))}

      <ConsultBand
        heading="Still have questions?"
        sub="A licensed clinician will answer directly · $50 · video or phone"
      />
    </>
  )
}
