import { IntakePage } from '@/components/utility/IntakePage'
import { intakeMetadata } from '@/components/utility/intakeConfig'

export const metadata = intakeMetadata('get_nad')

export default function GetNadPage() {
  return <IntakePage slug="get_nad" />
}
