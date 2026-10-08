import type { Metadata } from 'next'
import { ConsultContent } from './ConsultContent'
import { PRICES } from '@/lib/prices.config'

const CONSULT = PRICES.consult.initial.label

export const metadata: Metadata = {
  alternates: { canonical: '/consult' },
  title: `Book a Consultation — ${CONSULT}, Credited to Your First Plan`,
  description: `Book a consultation with a licensed Nutree clinician. ${CONSULT}, credited toward your first treatment plan.`,
}

export default function ConsultPage() {
  return <ConsultContent />
}
