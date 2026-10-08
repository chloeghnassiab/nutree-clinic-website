import type { Metadata } from 'next'
import { ThankYouPage } from '@/components/utility/ThankYouPage'

export const metadata: Metadata = {
  title: 'Thank You — Giveaway Entry',
  description: 'Thank you',
  robots: { index: false, follow: true },
  alternates: { canonical: '/thankyougiveaway' },
}

export default function ThankYouGiveaway() {
  return (
    <ThankYouPage title="Welcome to Nutree Clinic giveaway!">
      <p>At Nutree, care is always personal — and every entry is reviewed to ensure it meets our eligibility criteria.</p>
      <p>Our team is currently reviewing your submission eligibility. Once confirmed, your entry will be officially validated.</p>
      <p style={{ fontWeight: 700, color: 'var(--ink)' }}>This giveaway has ended.</p>
      <p>We’re looking forward to potentially guiding you on your wellness journey.</p>
      <p style={{ fontWeight: 600, color: 'var(--ink)' }}>Nutree Clinic Team</p>
    </ThankYouPage>
  )
}
