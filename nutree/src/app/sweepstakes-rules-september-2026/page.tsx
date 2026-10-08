import type { Metadata } from 'next'
import { LegalDoc } from '@/components/utility/LegalDoc'
import { SWEEPSTAKES_SEPTEMBER_2026_HTML } from '@/components/utility/legalContent'

export const metadata: Metadata = {
  title: 'Wellness Sweepstakes Official Rules — September 2026',
  description: 'Official rules for the Nutree Clinic Wellness Sweepstakes, September 2026.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/sweepstakes-rules-september-2026' },
}

export default function SweepstakesRulesSeptember2026Page() {
  return <LegalDoc eyebrow="Official Rules" title="Nutree Clinic Wellness Sweepstakes" subtitle="September 2026" html={SWEEPSTAKES_SEPTEMBER_2026_HTML} />
}
