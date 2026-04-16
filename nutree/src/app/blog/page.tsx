import type { Metadata } from 'next'
import BlogList from './BlogList'

export const metadata: Metadata = {
  title: 'Blog — Nutree Clinic',
  description: 'Evidence-based articles on GLP-1 therapy, NAD+, peptides, longevity, and metabolic health from the Nutree Clinic team.',
}

export default function BlogPage() {
  return <BlogList />
}
