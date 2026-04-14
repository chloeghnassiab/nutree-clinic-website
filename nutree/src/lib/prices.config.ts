// ─────────────────────────────────────────────────────────────────────────────
// NUTREE CLINIC — PRICES CONFIG
// To update a price: change monthlyPriceCents below.
// Multi-month totals, savings, and per-week labels auto-recalculate everywhere.
// All prices in USD cents to avoid floating-point.
// ─────────────────────────────────────────────────────────────────────────────

function formatPrice(cents: number): string {
  if (cents < 1000) return '$TBD'
  return '$' + (cents / 100).toFixed(0)
}

export function calcPlan(monthlyPriceCents: number, discountPct: number, months: number) {
  const isDollarTBD = monthlyPriceCents <= 100
  if (isDollarTBD) {
    return {
      monthlyLabel: '$TBD/mo (4 weeks)',
      totalLabel:   '$TBD total',
      savingsLabel: discountPct > 0 ? `Save ${discountPct}%` : '',
      perWeekLabel: '~$TBD/week',
      discountPct,
      cents:        monthlyPriceCents * months,
      monthlyCents: monthlyPriceCents,
    }
  }
  const discountedMonthly = Math.round(monthlyPriceCents * (1 - discountPct / 100))
  const totalCents        = discountedMonthly * months
  const savingsCents      = (monthlyPriceCents - discountedMonthly) * months
  return {
    monthlyLabel: formatPrice(discountedMonthly) + '/mo (4 weeks)',
    totalLabel:   formatPrice(totalCents) + ' total',
    savingsLabel: savingsCents > 0 ? 'Save ' + formatPrice(savingsCents) + ' vs monthly' : '',
    perWeekLabel: '~' + formatPrice(Math.round(discountedMonthly / 4)) + '/week',
    discountPct,
    cents:        totalCents,
    monthlyCents: discountedMonthly,
  }
}

// ── SOURCE OF TRUTH ──────────────────────────────────────────────────────────
// Change monthlyPriceCents here; all downstream labels update automatically.

const SEMA = { monthlyPriceCents: 24900, threeMonthDiscountPct: 8,  sixMonthDiscountPct: 15 }
const TIRZ = { monthlyPriceCents: 34900, threeMonthDiscountPct: 8,  sixMonthDiscountPct: 15 }
const SER  = { monthlyPriceCents: 19900, threeMonthDiscountPct: 12, sixMonthDiscountPct: 20 }
// TODO: confirm actual prices — $TBD placeholder (cents: 100)
const NAD  = { monthlyPriceCents: 100,   threeMonthDiscountPct: 8,  sixMonthDiscountPct: 15 }
const OXY  = { monthlyPriceCents: 100,   threeMonthDiscountPct: 8,  sixMonthDiscountPct: 15 }
const B12  = { monthlyPriceCents: 100,   threeMonthDiscountPct: 8,  sixMonthDiscountPct: 15 }
const GLUT = { monthlyPriceCents: 100,   threeMonthDiscountPct: 8,  sixMonthDiscountPct: 15 }

export const PRICES = {

  // ── GLP-1 ──────────────────────────────────────────────────────────────────
  semaglutide: {
    monthly:    calcPlan(SEMA.monthlyPriceCents, 0,                           1),
    threeMonth: calcPlan(SEMA.monthlyPriceCents, SEMA.threeMonthDiscountPct,  3),
    sixMonth:   calcPlan(SEMA.monthlyPriceCents, SEMA.sixMonthDiscountPct,    6),
  },
  tirzepatide: {
    monthly:    calcPlan(TIRZ.monthlyPriceCents, 0,                           1),
    threeMonth: calcPlan(TIRZ.monthlyPriceCents, TIRZ.threeMonthDiscountPct,  3),
    sixMonth:   calcPlan(TIRZ.monthlyPriceCents, TIRZ.sixMonthDiscountPct,    6),
  },

  // Microdosing & brand-name plans use fixed/per-week pricing — kept as-is.
  microdosingSema: {
    perWeek:  { cents: 3500,   label: '$35/week' },
    fiveWeek: { cents: 17500,  label: '$175 · 5 weeks' },
    tenWeek:  { cents: 35000,  label: '$350 · 10 weeks' },
  },
  microDosingTirz: {
    perWeek:  { cents: 4500,   label: '$45/week' },
    fiveWeek: { cents: 22500,  label: '$225 · 5 weeks' },
    tenWeek:  { cents: 45000,  label: '$450 · 10 weeks' },
  },
  wegovy: {
    monthly: { cents: 139900, label: '$1,399/mo' },
    consult: { cents: 12000,  label: '$120 consult' },
    refill:  { cents: 6000,   label: '$60/refill' },
  },
  mounjaro: {
    monthly: { cents: 106900, label: '$1,069/mo' },
    consult: { cents: 12000,  label: '$120 consult' },
    refill:  { cents: 6000,   label: '$60/refill' },
  },

  // ── SERMORELIN ─────────────────────────────────────────────────────────────
  // tenWeek is a fixed-price starter; monthly/threeMonth/sixMonth use calcPlan.
  sermorelin: {
    tenWeek: {
      cents:    39900,
      label:    '$399 upfront',
      subLabel: '~$100/week · all-inclusive',
    },
    monthly:    calcPlan(SER.monthlyPriceCents, 0,                          1),
    threeMonth: calcPlan(SER.monthlyPriceCents, SER.threeMonthDiscountPct,  3),
    sixMonth:   calcPlan(SER.monthlyPriceCents, SER.sixMonthDiscountPct,    6),
  },

  // ── NAD+ ───────────────────────────────────────────────────────────────────
  // TODO: confirm actual prices — $TBD placeholder (cents: 100)
  nadInjectable: {
    monthly:  calcPlan(NAD.monthlyPriceCents, 0,                          1),
    sixMonth: calcPlan(NAD.monthlyPriceCents, NAD.sixMonthDiscountPct,    6),
  },
  nadNasalSpray: {
    monthly:  calcPlan(NAD.monthlyPriceCents, 0,                          1),
    sixMonth: calcPlan(NAD.monthlyPriceCents, NAD.sixMonthDiscountPct,    6),
  },
  nadPatches: {
    monthly:  calcPlan(NAD.monthlyPriceCents, 0,                          1),
    sixMonth: calcPlan(NAD.monthlyPriceCents, NAD.sixMonthDiscountPct,    6),
  },

  // ── OXYTOCIN ───────────────────────────────────────────────────────────────
  // TODO: confirm actual prices — $TBD placeholder (cents: 100)
  oxytocin: {
    monthly:    calcPlan(OXY.monthlyPriceCents, 0,                          1),
    threeMonth: calcPlan(OXY.monthlyPriceCents, OXY.threeMonthDiscountPct,  3),
    sixMonth:   calcPlan(OXY.monthlyPriceCents, OXY.sixMonthDiscountPct,    6),
  },

  // ── B6 / B12 ───────────────────────────────────────────────────────────────
  // TODO: confirm actual prices — $TBD placeholder (cents: 100)
  b12Injectable: {
    monthly:  calcPlan(B12.monthlyPriceCents, 0,                         1),
    sixMonth: calcPlan(B12.monthlyPriceCents, B12.sixMonthDiscountPct,   6),
  },
  b12Oral: {
    monthly:  calcPlan(B12.monthlyPriceCents, 0,                         1),
    sixMonth: calcPlan(B12.monthlyPriceCents, B12.sixMonthDiscountPct,   6),
  },

  // ── GLUTATHIONE ────────────────────────────────────────────────────────────
  // TODO: confirm actual prices — $TBD placeholder (cents: 100)
  glutathione: {
    monthly:    calcPlan(GLUT.monthlyPriceCents, 0,                           1),
    threeMonth: calcPlan(GLUT.monthlyPriceCents, GLUT.threeMonthDiscountPct,  3),
    sixMonth:   calcPlan(GLUT.monthlyPriceCents, GLUT.sixMonthDiscountPct,    6),
  },

  // ── CONSULTATION ───────────────────────────────────────────────────────────
  consult: {
    initial: { cents: 5000, label: '$50' },
  },
}

export type CalcPlanResult = ReturnType<typeof calcPlan>
