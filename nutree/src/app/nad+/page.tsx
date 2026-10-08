import type { Metadata } from 'next'
import { NADPage, nadMetadata } from '@/components/treatment/NADPage'

// Canonical NAD+ URL — matches the live Umso URL https://www.nutreeclinic.com/nad+
export const metadata: Metadata = nadMetadata

export default function Page() {
  return <NADPage />
}
