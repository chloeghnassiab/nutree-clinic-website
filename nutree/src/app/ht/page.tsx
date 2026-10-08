import type { Metadata } from 'next'

// Legacy language URL kept alive (QR codes / links). Renders the English homepage for now.
export { default } from '../page'

export const metadata: Metadata = {
  title: { absolute: 'Nutree Clinic | Medical Weight Loss & Wellness Online' },
  description: 'Weight Loss, Healthy Aging & Muscle Strength. Semaglutide & Tirzepatide prescriptions (if eligible). Personalized care, ongoing follow-up, shipped to you.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/' },
  openGraph: { siteName: 'Nutree Clinic', type: 'website', locale: 'ht_HT' },
}
