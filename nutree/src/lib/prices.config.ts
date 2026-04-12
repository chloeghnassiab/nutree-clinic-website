// ─────────────────────────────────────────────
// NUTREE CLINIC — PRICES CONFIG
// Edit this file to update prices everywhere.
// All prices in USD cents to avoid floating point.
// ─────────────────────────────────────────────

export const PRICES = {
  // ── GLP-1 ──────────────────────────────────
  semaglutide: {
    monthly:    { cents: 24900, label: "$249/mo" },
    threeMonth: { cents: 22900, label: "$229/mo first", afterLabel: "$249/mo after" },
    sixMonth:   { cents: 21200, label: "$212/mo first", afterLabel: "$229/mo after" },
  },
  tirzepatide: {
    monthly:    { cents: 34900, label: "$349/mo" },
    threeMonth: { cents: 32100, label: "$321/mo first", afterLabel: "$349/mo after" },
    sixMonth:   { cents: 29700, label: "$297/mo first", afterLabel: "$321/mo after" },
  },
  microdosingSema: {
    perWeek:    { cents: 3500,  label: "$35/week" },
    fiveWeek:   { cents: 17500, label: "$175 · 5 weeks" },
    tenWeek:    { cents: 35000, label: "$350 · 10 weeks" },
  },
  microDosingTirz: {
    perWeek:    { cents: 4500,  label: "$45/week" },
    fiveWeek:   { cents: 22500, label: "$225 · 5 weeks" },
    tenWeek:    { cents: 45000, label: "$450 · 10 weeks" },
  },
  wegovy: {
    monthly:    { cents: 139900, label: "$1,399/mo" },
    consult:    { cents: 12000,  label: "$120 consult" },
    refill:     { cents: 6000,   label: "$60/refill" },
  },
  mounjaro: {
    monthly:    { cents: 106900, label: "$1,069/mo" },
    consult:    { cents: 12000,  label: "$120 consult" },
    refill:     { cents: 6000,   label: "$60/refill" },
  },

  // ── NAD+ ───────────────────────────────────
  // TODO: confirm actual prices — using $1 placeholder
  nadInjectable: {
    monthly:    { cents: 100, label: "$TBD/mo" },
    sixMonth:   { cents: 100, label: "$TBD/mo", afterLabel: "Save 15%" },
  },
  nadNasalSpray: {
    monthly:    { cents: 100, label: "$TBD/mo" },
    sixMonth:   { cents: 100, label: "$TBD/mo", afterLabel: "Save 15%" },
  },
  nadPatches: {
    monthly:    { cents: 100, label: "$TBD/mo" },
    sixMonth:   { cents: 100, label: "$TBD/mo", afterLabel: "Save 15%" },
  },

  // ── SERMORELIN ─────────────────────────────
  sermorelin: {
    tenWeek:    { cents: 39900, label: "$399 upfront", subLabel: "~$40/week · all-inclusive" },
    monthly:    { cents: 19900, label: "$199/mo", firstLabel: "$175 first month" },
    threeMonth: { cents: 47500, label: "$475 total", firstLabel: "$125 first · $175/mo after" },
  },

  // ── OXYTOCIN ───────────────────────────────
  // TODO: confirm actual prices — using $1 placeholder
  oxytocin: {
    monthly:    { cents: 100, label: "$TBD/mo" },
    threeMonth: { cents: 100, label: "$TBD/mo" },
    sixMonth:   { cents: 100, label: "$TBD/mo", afterLabel: "Save 15%" },
  },

  // ── B6 / B12 ───────────────────────────────
  // TODO: confirm actual prices — using $1 placeholder
  b12Injectable: {
    monthly:    { cents: 100, label: "$TBD/mo" },
    sixMonth:   { cents: 100, label: "$TBD/mo", afterLabel: "Save 15%" },
  },
  b12Oral: {
    monthly:    { cents: 100, label: "$TBD/mo" },
    sixMonth:   { cents: 100, label: "$TBD/mo", afterLabel: "Save 15%" },
  },

  // ── CONSULTATION ───────────────────────────
  consult: {
    initial:    { cents: 5000, label: "$50" },
  },
} as const

export type PriceEntry = {
  cents: number
  label: string
  afterLabel?: string
  subLabel?: string
  firstLabel?: string
}
