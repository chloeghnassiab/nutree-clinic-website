import type { Metadata } from 'next'
import BlogList from './BlogList'
import { getAllPostMeta } from '@/lib/posts'

export const metadata: Metadata = {
  title: { absolute: 'Health & Wellness Blog | Medical Weight Loss | Nutree Clinic' },
  description:
    'Explore expert insights on medical weight loss, semaglutide, tirzepatide & healthy aging. Evidence-based advice guided by our licensed clinicians.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Health & Wellness Blog | Medical Weight Loss | Nutree Clinic',
    description:
      'Explore expert insights on medical weight loss, semaglutide, tirzepatide & healthy aging. Evidence-based advice guided by our licensed clinicians.',
    url: '/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  return <BlogList posts={getAllPostMeta()} />
}
