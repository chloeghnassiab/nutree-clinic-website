import { PRICING_AT_CONSULT } from './prices.config'

export const STACKS_VISIBLE = false

export type Stack = {
  id: string
  name: string
  tagline: string
  color: string
  darkColor: string
  products: string[]
  hrefs: string[]
  price: string
  description: string
}

export const STACKS: Stack[] = [
  {
    id: 'weight-loss',
    name: 'Weight Loss Stack',
    tagline: 'Clinician-guided metabolic support',
    color: 'var(--glp)',
    darkColor: 'var(--glp-dark)',
    products: ['GLP-1 Treatments', 'B6 / B12', 'Glutathione'],
    hrefs: ['/weight-loss', '/b12', '/glutathione'],
    price: PRICING_AT_CONSULT,
    description:
      'GLP-1 therapy combined with B-vitamin support and glutathione, if your clinician determines each is appropriate. Compounded medications are not FDA-approved.',
  },
  {
    id: 'longevity',
    name: 'Longevity Stack',
    tagline: 'Clinician-guided healthy-aging goals',
    color: 'var(--nad)',
    darkColor: 'var(--nad-dark)',
    products: ['NAD+ Therapy', 'Sermorelin', 'Glutathione'],
    hrefs: ['/nad', '/sermorelin', '/glutathione'],
    price: PRICING_AT_CONSULT,
    description:
      'NAD+, sermorelin, and glutathione, prescribed off-label for patients with energy, recovery, and healthy-aging goals. Evidence for these uses is limited, and each is prescribed only if appropriate.',
  },
  {
    id: 'performance',
    name: 'Performance Stack',
    tagline: 'Strength, recovery, and stamina',
    color: 'var(--ser)',
    darkColor: 'var(--ser-dark)',
    products: ['Sermorelin', 'NAD+', 'B6 / B12'],
    hrefs: ['/sermorelin', '/nad', '/b12'],
    price: PRICING_AT_CONSULT,
    description:
      'Sermorelin, NAD+, and B6/B12 for patients with strength, recovery, and energy goals. Responses vary, evidence is limited for some uses, and each is prescribed only if appropriate.',
  },
]
