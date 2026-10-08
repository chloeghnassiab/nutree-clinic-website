// ─── REAL PATIENT REVIEWS ────────────────────────────────────────────────────
// Only reviews published by real patients may be used. Quotes are verbatim
// (trimmed only with "…"); never edit wording. Source:
// https://www.trustpilot.com/review/nutreeclinic.com (checked Oct 2026; all
// reviews on that page are 5-star). Attribution uses the name exactly as shown
// on Trustpilot, shortened to first name + last initial.
//
// Courtney is the patient featured on the live /glp-1microdosing page; her
// disclosure (complimentary treatment) must always be shown with her quote.

export type Review = {
  quote: string
  author: string
  source: string
  rating: number
  date?: string
  tag: string
  img?: string
  featured?: boolean
  disclosure?: string
}

export const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/nutreeclinic.com'

export const COURTNEY_DISCLOSURE =
  'Courtney is a real Nutree Clinic patient who received complimentary treatment in exchange for sharing her honest experience.'

export const REVIEWS = {
  corinne: {
    quote: 'I am in my eighth week on tirzepatide with Nutree Clinic and I lost 12 pounds. The team is great, always available for me.',
    author: 'Corinne',
    source: 'Trustpilot review',
    rating: 5,
    date: 'Dec 2025',
    tag: 'Compounded Tirzepatide',
  },
  tammy: {
    quote: 'Starting GLP-1 medication has honestly been life-changing for me. For the first time, I don’t feel controlled by constant hunger…',
    author: 'Tammy',
    source: 'Trustpilot review',
    rating: 5,
    date: 'Dec 2025',
    tag: 'GLP-1 Weight Loss',
  },
  maxL: {
    quote: 'The consultation was clear, thoughtful, and easy to follow. The provider took the time to explain everything and made the process feel simple…',
    author: 'Max L.',
    source: 'Trustpilot review',
    rating: 5,
    date: 'Jan 2026',
    tag: 'Nutree Clinic patient',
  },
  elizabethK: {
    quote: 'I had a great experience with Atara and Nutree Clinic! Atara was incredibly kind, knowledgeable, and took the time to personalize my care.',
    author: 'Elizabeth K.',
    source: 'Trustpilot review',
    rating: 5,
    date: 'Jun 2026',
    tag: 'Nutree Clinic patient',
  },
  courtney: {
    quote: 'After 9 weeks on a microdosed GLP-1, I lost 9 pounds. I already feel lighter, confident, in control. With a team that supports me!',
    author: 'Courtney, 32 · Nutree Clinic patient',
    source: 'Featured patient',
    rating: 5,
    tag: 'GLP-1 Microdosing',
    img: '/images/Courtney-nutree-clinic-patient-glp-1.jpeg',
    featured: true,
    disclosure: COURTNEY_DISCLOSURE,
  },
} satisfies Record<string, Review>
