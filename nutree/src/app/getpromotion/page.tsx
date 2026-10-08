import type { Metadata } from 'next'
import { IntakePage } from '@/components/utility/IntakePage'
import { intakeMetadata } from '@/components/utility/intakeConfig'

// /getpromotion is kept for QR codes / ads. It used to embed the expired
// "$109 Tirzepatide Labor Day Special" Healthie offering (INTAKES.getpromotion,
// offering 263021). It now shows the standard tirzepatide microdosing checkout
// (same embed as /get_tirzepatide_microdosing, offering 234528).
export const metadata: Metadata = {
  ...intakeMetadata('get_tirzepatide_microdosing'),
  alternates: { canonical: '/getpromotion' },
}

export default function GetpromotionPage() {
  return <IntakePage slug="get_tirzepatide_microdosing" />
}
