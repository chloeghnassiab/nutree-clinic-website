import { IntakePage } from '@/components/utility/IntakePage'
import { intakeMetadata } from '@/components/utility/intakeConfig'

export const metadata = intakeMetadata('get_semaglutide_microdosing')

export default function GetSemaglutideMicrodosingPage() {
  return <IntakePage slug="get_semaglutide_microdosing" />
}
