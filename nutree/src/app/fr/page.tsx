import type { Metadata } from 'next'

// Legacy French URL kept alive. Renders the English homepage until real translations are decided.
export { default } from '../page'

export const metadata: Metadata = {
  title: { absolute: 'Nutree Clinic | Medical Weight Loss & Wellness Online' },
  description: 'Weight Loss, Healthy Aging & Muscle Strength. Semaglutide & Tirzepatide prescriptions (if eligible). Personalized care, ongoing follow-up, shipped to you.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/' },
  openGraph: { siteName: 'Nutree Clinic', type: 'website', locale: 'fr_FR' },
}
