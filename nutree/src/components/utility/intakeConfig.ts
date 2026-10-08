import type { Metadata } from 'next'

/**
 * Healthie booking embeds for the live /get_* intake pages.
 * Embed URLs are copied EXACTLY from www.nutreeclinic.com (query params included) —
 * do not "tidy" them: dietitian_id / offering_id / org_level select the right package.
 */
const HEALTHIE = 'https://secure.gethealthie.com/appointments/embed_appt'

export type IntakeSlug =
  | 'get_nad'
  | 'get_oxytocin'
  | 'get_semaglutide_microdosing'
  | 'get_semaglutide_weight_loss'
  | 'get_sermorelin'
  | 'get_tirzepatide_microdosing'
  | 'get_tirzepatide_weight_loss'
  | 'getpromotion'

export const INTAKES: Record<IntakeSlug, { title: string; heading: string; embedSrc: string }> = {
  get_nad: {
    title: 'Get Started: NAD+ Therapy',
    heading: 'NAD+ Therapy',
    embedSrc: `${HEALTHIE}?dietitian_id=11055809&require_offering=true&offering_id=244421&hide_package_images=false&hide_embed_title=true&primary_color=529f99`,
  },
  get_oxytocin: {
    title: 'Get Started: Oxytocin Nasal Spray',
    heading: 'Oxytocin Nasal Spray',
    embedSrc: `${HEALTHIE}?dietitian_id=11055809&require_offering=true&offering_id=257589&hide_package_images=false&hide_embed_title=false&primary_color=529f99`,
  },
  get_semaglutide_microdosing: {
    title: 'Get Started: Semaglutide Microdosing',
    heading: 'Semaglutide Microdosing',
    embedSrc: `${HEALTHIE}?dietitian_id=11056229&require_offering=true&immediate_checkout=true&offering_id=234526&org_level=true&hide_package_images=false&hide_embed_title=false&primary_color=529f99`,
  },
  get_semaglutide_weight_loss: {
    title: 'Get Started: Semaglutide Weight Loss',
    heading: 'Semaglutide Weight Loss',
    embedSrc: `${HEALTHIE}?dietitian_id=11055809&require_offering=true&immediate_checkout=true&offering_id=234404&hide_package_images=false&hide_embed_title=false&primary_color=529f99`,
  },
  get_sermorelin: {
    title: 'Get Started: Sermorelin',
    heading: 'Sermorelin',
    embedSrc: `${HEALTHIE}?dietitian_id=11055809&require_offering=true&immediate_checkout=true&offering_id=254004&hide_package_images=false&primary_color=529f99`,
  },
  get_tirzepatide_microdosing: {
    title: 'Get Started: Tirzepatide Microdosing',
    heading: 'Tirzepatide Microdosing',
    embedSrc: `${HEALTHIE}?dietitian_id=11056229&require_offering=true&immediate_checkout=true&offering_id=234528&org_level=true&hide_package_images=false&hide_embed_title=true&primary_color=529f99`,
  },
  get_tirzepatide_weight_loss: {
    title: 'Get Started: Tirzepatide Weight Loss',
    heading: 'Tirzepatide Weight Loss',
    embedSrc: `${HEALTHIE}?dietitian_id=11056229&require_offering=true&immediate_checkout=true&offering_id=234405&org_level=true&hide_package_images=false&hide_embed_title=false&primary_color=529f99`,
  },
  getpromotion: {
    title: 'Get Started: Tirzepatide Microdosing Promotion',
    heading: 'Tirzepatide Microdosing Promotion',
    embedSrc: `${HEALTHIE}?dietitian_id=11055809&require_offering=true&immediate_checkout=true&offering_id=263021&hide_package_images=false&hide_embed_title=false&primary_color=529f99`,
  },
}

export function intakeMetadata(slug: IntakeSlug): Metadata {
  return {
    title: INTAKES[slug].title,
    description: `Secure booking and checkout for ${INTAKES[slug].heading} with Nutree Clinic. Subject to clinical approval by a licensed Florida clinician.`,
    robots: { index: false, follow: true },
    alternates: { canonical: `/${slug}` },
  }
}
