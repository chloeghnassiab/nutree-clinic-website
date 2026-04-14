import type { Metadata } from 'next'
import { GlutathioneContent } from './GlutathioneContent'

export const metadata: Metadata = {
  title: 'Glutathione Injections — Detox, Antioxidant & Cellular Health | Nutree Clinic',
  description: 'Physician-prescribed compounded glutathione injections. Support detoxification, reduce oxidative stress, and enhance cellular health. Florida telehealth.',
}

export default function GlutathionePage() {
  return <GlutathioneContent />
}
