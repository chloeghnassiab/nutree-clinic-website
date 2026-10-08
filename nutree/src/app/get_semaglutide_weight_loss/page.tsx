import { IntakePage } from '@/components/utility/IntakePage'
import { intakeMetadata } from '@/components/utility/intakeConfig'

export const metadata = intakeMetadata('get_semaglutide_weight_loss')

export default function GetSemaglutideWeightLossPage() {
  return <IntakePage slug="get_semaglutide_weight_loss" />
}
