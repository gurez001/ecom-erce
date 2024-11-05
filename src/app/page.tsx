import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirect to a default country code, or you could determine this based on the user's location
  redirect('/in')
}