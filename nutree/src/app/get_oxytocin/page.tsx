import { IntakePage } from '@/components/utility/IntakePage'
import { intakeMetadata } from '@/components/utility/intakeConfig'

export const metadata = intakeMetadata('get_oxytocin')

export default function GetOxytocinPage() {
  return <IntakePage slug="get_oxytocin" />
}
