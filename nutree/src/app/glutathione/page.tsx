import type { Metadata } from 'next'
import { GlutathioneContent } from './GlutathioneContent'

export const metadata: Metadata = {
  alternates: { canonical: '/glutathione' },
  title: 'Glutathione Injections — Clinician-Guided Antioxidant Support',
  description: 'Compounded glutathione injections, prescribed off-label only if appropriate after review by a licensed provider. Not FDA-approved. Florida telehealth.',
}

export default function GlutathionePage() {
  return <GlutathioneContent />
}
