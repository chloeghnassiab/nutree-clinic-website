// JSON-LD helpers for the GLP-1 / microdosing pages.
// Mirrors the two blocks on the live Umso pages (MedicalBusiness + FAQPage).

// Keep in sync with metadataBase in src/app/layout.tsx
export const SITE_URL = 'https://nutreeclinic.com'

export const BUSINESS = {
  name: 'Nutree Clinic',
  telephone: '(305) 209-2066',
  logo: `${SITE_URL}/images/NutreeClinic-logo-stacked.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6423 Collins Ave',
    addressLocality: 'Miami Beach',
    addressRegion: 'FL',
    postalCode: '33141',
    addressCountry: 'US',
  },
} as const

export const FLORIDA_STATE = { '@type': 'State', name: 'Florida' } as const

export function medicalBusinessSchema({ path, description, areaServed }: {
  path: string
  description: string
  areaServed: Record<string, unknown> | Record<string, unknown>[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'MedicalClinic'],
    name: BUSINESS.name,
    url: `${SITE_URL}${path}`,
    image: BUSINESS.logo,
    logo: BUSINESS.logo,
    description,
    priceRange: '$$',
    telephone: BUSINESS.telephone,
    address: BUSINESS.address,
    areaServed,
    availableLanguage: ['English'],
    medicalSpecialty: 'Obesity medicine',
    isAcceptingNewPatients: true,
  }
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(i => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  }
}

export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escape "<" so content can never close the script tag
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  )
}
