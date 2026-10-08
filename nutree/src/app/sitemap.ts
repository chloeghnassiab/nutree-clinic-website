import type { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/posts'
import { FLORIDA_HUB_PATH, FLORIDA_CITY_PATHS } from '@/lib/florida-cities.config'

const BASE = 'https://www.nutreeclinic.com'

// Indexable pages only. Campaign, intake and translated pages are noindex and left out.
const PAGES = [
  '/', '/about', '/weight-loss', '/glp-1', '/glp-1microdosing', '/nad+', '/sermorelin',
  '/oxytocin', '/b12', '/glutathione', '/stacks', '/pricing', '/faq', '/consult',
  '/contact', '/bmi', '/protein_guide', '/blog', '/privacy', '/terms-of-use',
  '/refund-policy', '/telehealth-consent',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map(path => ({ url: BASE + path })),
    ...[FLORIDA_HUB_PATH, ...FLORIDA_CITY_PATHS].map(path => ({ url: BASE + path })),
    ...getAllPostSlugs().map(p => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: p.updated ?? p.date,
    })),
  ]
}
