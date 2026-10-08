import type { Metadata } from 'next'
import { LegalDoc } from '@/components/utility/LegalDoc'
import { REFUND_HTML } from '@/components/utility/legalContent'

export const metadata: Metadata = {
  title: { absolute: 'Refund Policy' },
  description: 'Refund policy for Nutree Clinic services and prescription medications',
  alternates: { canonical: '/refund-policy' },
}

export default function RefundPolicyPage() {
  return <LegalDoc title="Refund Policy" html={REFUND_HTML} />
}
