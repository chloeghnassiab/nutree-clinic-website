import type { Metadata } from 'next'
import { GlutathioneContent } from './GlutathioneContent'

export const metadata: Metadata = {
  alternates: { canonical: '/glutathione' },
  title: 'Glutathione Injections — Detox, Antioxidant & Cellular Health',
  description: 'Physician-prescribed compounded glutathione injections. Support detoxification, reduce oxidative stress, and enhance cellular health. Florida telehealth.',
}

export default function GlutathionePage() {
  return <GlutathioneContent />
}
