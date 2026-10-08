import { IntakePage } from '@/components/utility/IntakePage'
import { intakeMetadata } from '@/components/utility/intakeConfig'

export const metadata = intakeMetadata('get_tirzepatide_weight_loss')

export default function GetTirzepatideWeightLossPage() {
  return <IntakePage slug="get_tirzepatide_weight_loss" />
}
