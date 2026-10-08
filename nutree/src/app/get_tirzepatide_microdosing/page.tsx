import { IntakePage } from '@/components/utility/IntakePage'
import { intakeMetadata } from '@/components/utility/intakeConfig'

export const metadata = intakeMetadata('get_tirzepatide_microdosing')

export default function GetTirzepatideMicrodosingPage() {
  return <IntakePage slug="get_tirzepatide_microdosing" />
}
