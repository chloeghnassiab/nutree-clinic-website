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
    tagline: 'Metabolic reset from the inside out',
    color: 'var(--glp)',
    darkColor: 'var(--glp-dark)',
    products: ['GLP-1 Treatments', 'B6 / B12', 'Glutathione'],
    hrefs: ['/weight-loss', '/b12', '/glutathione'],
    price: '$TBD/mo',
    description:
      'GLP-1 therapy combined with B12 energy support and glutathione cellular detox — for patients who want to address metabolic health at every level.',
  },
  {
    id: 'longevity',
    name: 'Longevity Stack',
    tagline: 'Cellular renewal from every angle',
    color: 'var(--nad)',
    darkColor: 'var(--nad-dark)',
    products: ['NAD+ Therapy', 'Sermorelin', 'Glutathione'],
    hrefs: ['/nad', '/sermorelin', '/glutathione'],
    price: '$TBD/mo',
    description:
      'NAD+ restores cellular energy, Sermorelin supports growth hormone and lean tissue, and Glutathione eliminates oxidative stress.',
  },
  {
    id: 'performance',
    name: 'Performance Stack',
    tagline: 'Strength, recovery, and stamina',
    color: 'var(--ser)',
    darkColor: 'var(--ser-dark)',
    products: ['Sermorelin', 'NAD+', 'B6 / B12'],
    hrefs: ['/sermorelin', '/nad', '/b12'],
    price: '$TBD/mo',
    description:
      'Sermorelin supports growth hormone and recovery, NAD+ fuels ATP production and stamina, and B12 sustains daily energy.',
  },
]
