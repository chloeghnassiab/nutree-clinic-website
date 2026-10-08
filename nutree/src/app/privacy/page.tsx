import type { Metadata } from 'next'
import { LegalDoc } from '@/components/utility/LegalDoc'
import { PRIVACY_HTML } from '@/components/utility/legalContent'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Nutree Clinic' },
  description: 'How Nutree Clinic collects, uses, and protects your personal health information. HIPAA-compliant telehealth privacy practices and patient data security.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return <LegalDoc title="Website Privacy Policy" subtitle="Nutree Clinic LLC" html={PRIVACY_HTML} />
}
