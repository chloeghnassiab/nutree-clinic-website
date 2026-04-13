import type { Metadata } from 'next'
import { ConsultContent } from './ConsultContent'

export const metadata: Metadata = {
  title: 'Book a Consultation — $50, Credited to Your First Plan',
  description: 'Book a consultation with a licensed Nutree clinician. $50, credited toward your first treatment plan.',
}

export default function ConsultPage() {
  return <ConsultContent />
}
