// ─────────────────────────────────────────────────────────────────────────────
// NUTREE CLINIC — CHECKOUT DESTINATIONS
// Purchase CTAs point at the /get_* pages, which embed the Healthie checkout
// (see src/components/utility/intakeConfig.ts — embed URLs live there only).
// This mirrors the live Umso site's button destinations.
// ─────────────────────────────────────────────────────────────────────────────

export const CHECKOUT = {
  semaglutideMicrodosing: '/get_semaglutide_microdosing',
  tirzepatideMicrodosing: '/get_tirzepatide_microdosing',
  semaglutideWeightLoss:  '/get_semaglutide_weight_loss',
  tirzepatideWeightLoss:  '/get_tirzepatide_weight_loss',
  nad:                    '/get_nad',
  sermorelin:             '/get_sermorelin',
  oxytocin:               '/get_oxytocin',
  /** Products with no Healthie offering on live (B12, glutathione, stacks, NAD+ patches, brand GLP-1s). */
  consult:                '/consult',
} as const

/** Jotform weight-loss eligibility quiz linked from the live weight-loss pages. */
export const ELIGIBILITY_QUIZ = 'https://form.jotform.com/NutreeClinic/weightlosseligibility'

/** Healthie patient portal ("Login" on live). */
export const PATIENT_PORTAL = 'https://secure.gethealthie.com/go/nutreeclinic'
