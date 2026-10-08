import { IntakePage } from '@/components/utility/IntakePage'
import { intakeMetadata } from '@/components/utility/intakeConfig'

export const metadata = intakeMetadata('getpromotion')

export default function GetpromotionPage() {
  return <IntakePage slug="getpromotion" />
}
