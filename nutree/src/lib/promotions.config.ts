export const PROMOTIONS: Array<{
  id: string
  active: boolean
  text: string
  code?: string
  discountType: 'fixed' | 'percent'
  discountValue: number
}> = [
  {
    id: 'launch100',
    active: false,
    text: '$100 off your first order — use code NUTREE100',
    code: 'NUTREE100',
    discountType: 'fixed',
    discountValue: 100,
  },
  {
    id: 'freeshipping',
    active: false,
    text: 'Free expedited shipping on your first order',
    discountType: 'fixed',
    discountValue: 0,
  },
]
