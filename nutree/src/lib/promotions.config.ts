// Site-wide promotions rendered by <PromoList /> (PageComponents).
// All previous offers (NUTREE100 launch discount, free-shipping promo) were
// removed in Oct 2026 — add a new entry here only for a current, approved offer.
export const PROMOTIONS: Array<{
  id: string
  active: boolean
  text: string
  code?: string
  discountType: 'fixed' | 'percent'
  discountValue: number
}> = []
