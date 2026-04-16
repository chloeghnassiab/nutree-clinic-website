import type { Metadata } from 'next'
import { FAQ_ITEMS } from '@/lib/faq.config'
import { FAQSection, ConsultBand } from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'FAQ — Nutree Clinic',
  description: 'Answers to common questions about Nutree Clinic\'s treatments, pricing, prescriptions, and telehealth process.',
}

const CATEGORY_LABELS: Record<string, string> = {
  clinical: 'Getting started',
  general:  'Getting started',
  glp1:     'GLP-1 Weight Loss',
  nad:      'NAD+, Sermorelin & Peptides',
  sermorelin: 'NAD+, Sermorelin & Peptides',
  glutathione: 'NAD+, Sermorelin & Peptides',
  oxytocin: 'Oxytocin',
  b12:      'B6 / B12',
  billing:  'Billing & cancellation',
}

// Filter to /faq items, sort by order, group by display category
const faqItems = FAQ_ITEMS
  .filter(f => f.active && f.pages.includes('/faq'))
  .sort((a, b) => a.order - b.order)

// Build ordered groups (preserving first-seen order of each display category)
const groupMap = new Map<string, { q: string; a: string }[]>()
for (const item of faqItems) {
  const label = CATEGORY_LABELS[item.category] ?? item.category
  if (!groupMap.has(label)) groupMap.set(label, [])
  groupMap.get(label)!.push({ q: item.question, a: item.answer })
}
const FAQ_GROUPS = Array.from(groupMap.entries()).map(([category, items]) => ({ category, items }))

export default function FAQPage() {
  return (
    <>
      <section style={{ padding: '2.5rem 1rem 1.5rem', background: 'var(--base)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>Support</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
          Frequently asked<br />questions
        </h1>
        <p style={{ fontSize: "1rem", color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Can&apos;t find what you&apos;re looking for? <a href="/consult" style={{ color: 'var(--teal)', fontWeight: 600 }}>Start your intake</a> — a clinician will answer directly.
        </p>
      </section>

      {FAQ_GROUPS.map((cat, ci) => (
        <section key={ci} style={{ borderTop: '1px solid var(--border)', background: ci % 2 === 0 ? 'var(--white)' : 'var(--base)' }}>
          <div style={{ padding: '1rem 1rem 0', fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
            {cat.category}
          </div>
          <FAQSection
            items={cat.items}
            iconBg="var(--teal)"
            iconColor="#fff"
          />
        </section>
      ))}

      <ConsultBand />
    </>
  )
}
