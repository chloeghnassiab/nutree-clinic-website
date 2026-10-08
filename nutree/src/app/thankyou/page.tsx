import type { Metadata } from 'next'
import { ThankYouPage } from '@/components/utility/ThankYouPage'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you',
  robots: { index: false, follow: true },
  alternates: { canonical: '/thankyou' },
}

export default function ThankYou() {
  return <ThankYouPage title="Your wellness journey starts here!" />
}
