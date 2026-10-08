import { DiscoverPage, discoverMetadata } from '@/components/utility/DiscoverPage'

export const metadata = discoverMetadata('discover')

export default function DiscoverRoute() {
  return <DiscoverPage slug="discover" />
}
