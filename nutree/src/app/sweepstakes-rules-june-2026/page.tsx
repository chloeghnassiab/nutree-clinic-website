import type { Metadata } from 'next'
import { LegalDoc } from '@/components/utility/LegalDoc'
import { SWEEPSTAKES_JUNE_2026_HTML } from '@/components/utility/legalContent'

export const metadata: Metadata = {
  title: 'Wellness Sweepstakes Official Rules — June 2026',
  description: 'Official rules for the Nutree Clinic Wellness Sweepstakes, June 2026.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/sweepstakes-rules-june-2026' },
}

export default function SweepstakesRulesJune2026Page() {
  return <LegalDoc eyebrow="Official Rules" title="Nutree Clinic Wellness Sweepstakes" subtitle="June 2026" html={SWEEPSTAKES_JUNE_2026_HTML} />
}
