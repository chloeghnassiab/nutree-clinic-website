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
      <p style={{ fontWeight: 700, color: 'var(--ink)' }}>⏳ Winners will be selected on April 12, 2026.</p>
      <p>
        <strong style={{ color: 'var(--ink)' }}>Want to increase your chances?</strong><br />
        Share the giveaway to your story and tag{' '}
        <a href="https://www.instagram.com/nutreeclinic/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal-dark)' }}>@nutreeclinic</a>{' '}
        for a bonus entry.
      </p>
      <p>We’re looking forward to potentially guiding you on your wellness journey.</p>
      <p style={{ fontWeight: 600, color: 'var(--ink)' }}>Nutree Clinic Team</p>
    </ThankYouPage>
  )
}
