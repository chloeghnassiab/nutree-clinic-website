import type { Metadata } from 'next'
import { LegalDoc } from '@/components/utility/LegalDoc'
import { TERMS_HTML } from '@/components/utility/legalContent'

export const metadata: Metadata = {
  title: { absolute: 'Terms of Use | Nutree Clinic' },
  description: "Terms and conditions for using Nutree Clinic's telehealth services. Patient rights, responsibilities, and service agreement for online medical care.",
  alternates: { canonical: '/terms-of-use' },
}

export default function TermsOfUsePage() {
  return <LegalDoc title="Terms of Use" subtitle="Nutree Clinic LLC" html={TERMS_HTML} />
}
