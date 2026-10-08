import { IntakePage } from '@/components/utility/IntakePage'
import { intakeMetadata } from '@/components/utility/intakeConfig'

export const metadata = intakeMetadata('get_sermorelin')

export default function GetSermorelinPage() {
  return <IntakePage slug="get_sermorelin" />
}
