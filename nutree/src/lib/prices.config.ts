// ─────────────────────────────────────────────────────────────────────────────
// NUTREE CLINIC — PRICES CONFIG (single source of truth)
//
// Every price below matches the live site (www.nutreeclinic.com) AND the
// Healthie offering that the matching /get_* checkout page charges
// (verified 2026-10-08 via the Healthie offering records):
//
//   Semaglutide weight loss   $199 every 4 weeks   (Healthie offering 234404)
//   Tirzepatide weight loss   $249 every 4 weeks   (Healthie offering 234405, "starting at" on live)
//   Semaglutide microdosing   $219 one-time, 10 wk (Healthie offering 234526)
//   Tirzepatide microdosing   $299 one-time, 10 wk (Healthie offering 234528)
//   Sermorelin                $149 every 4 weeks   (Healthie offering 254004)
//   NAD+ (injectable / nasal) $139 every 4 weeks   (Healthie offering 244421)
//   Oxytocin nasal spray      $139 every 4 weeks   (Healthie offering 257589)
//
// The live site does NOT sell multi-month (3-/6-month) plans, 5-week
// microdosing, B12, glutathione, NAD+ patches or brand-name Wegovy®/Mounjaro®,
// so no price is defined for them — pages show PRICING_AT_CONSULT instead.
// Never invent a price here that the checkout does not charge.
//
// Consultation: kept at $50 (credited to first plan) by owner decision —
// note the live site still lists a $120 consultation.
//
// All prices in USD cents to avoid floating-point.
// ─────────────────────────────────────────────────────────────────────────────

/** Shown wherever a product has no published price on the live site. */
export const PRICING_AT_CONSULT = 'Pricing at consultation'

function formatPrice(cents: number): string {
  return '$' + (cents / 100).toLocaleString('en-US', { maximumFractionDigits: 0 })
}

/** Recurring plan billed every 4 weeks ("month" = 28 days). */
export function calcPlan(monthlyPriceCents: number) {
  return {
    monthlyLabel: formatPrice(monthlyPriceCents) + '/mo (4 weeks)',
    shortLabel:   formatPrice(monthlyPriceCents) + '/mo',
    priceLabel:   formatPrice(monthlyPriceCents),
    perWeekLabel: '~' + formatPrice(Math.round(monthlyPriceCents / 4)) + '/week',
    cents:        monthlyPriceCents,
    monthlyCents: monthlyPriceCents,
  }
}

/** One-time, fixed-length plan (e.g. 10-week microdosing). */
function fixedPlan(totalCents: number, weeks: number) {
  const perWeek = (totalCents / weeks / 100).toFixed(1).replace(/\.0$/, '')
  return {
    cents:        totalCents,
    weeks,
    priceLabel:   formatPrice(totalCents),
    totalLabel:   formatPrice(totalCents) + ' total',
    label:        `${formatPrice(totalCents)} for ${weeks} weeks`,
    perWeekLabel: `$${perWeek}/week`,
  }
}

// ── SOURCE OF TRUTH ──────────────────────────────────────────────────────────
const SEMA_CENTS       = 19900
const TIRZ_CENTS       = 24900
const MICRO_SEMA_CENTS = 21900
const MICRO_TIRZ_CENTS = 29900
const SER_CENTS        = 14900
const NAD_CENTS        = 13900
const OXY_CENTS        = 13900
const CONSULT_CENTS    = 5000

export const PRICES = {
  // ── GLP-1 weight loss (billed every 4 weeks) ───────────────────────────────
  semaglutide: { monthly: calcPlan(SEMA_CENTS) },
  /** Live shows "Starting at $249" for tirzepatide. */
  tirzepatide: { monthly: calcPlan(TIRZ_CENTS), startingAt: true },

  // ── GLP-1 microdosing (one-time, 10-week plan) ─────────────────────────────
  microdosingSema: { tenWeek: fixedPlan(MICRO_SEMA_CENTS, 10) },
  microDosingTirz: { tenWeek: fixedPlan(MICRO_TIRZ_CENTS, 10) },

  // ── Peptides & wellness (billed every 4 weeks) ─────────────────────────────
  sermorelin:    { monthly: calcPlan(SER_CENTS) },
  nadInjectable: { monthly: calcPlan(NAD_CENTS) },
  nadNasalSpray: { monthly: calcPlan(NAD_CENTS) },
  oxytocin:      { monthly: calcPlan(OXY_CENTS) },

  // ── Consultation (owner decision: $50, credited to first plan) ─────────────
  consult: {
    initial: { cents: CONSULT_CENTS, label: formatPrice(CONSULT_CENTS) },
  },
}

/** Lowest recurring GLP-1 weight-loss price, e.g. "from $199/mo". */
export const GLP1_FROM_LABEL = `from ${PRICES.semaglutide.monthly.shortLabel}`

export type CalcPlanResult = ReturnType<typeof calcPlan>
