import type { Metadata } from 'next'

import { TwoPaneLayout } from '@/components/layout/two-pane-layout'
import { SettingsView } from '@/features/settings'

export const metadata: Metadata = {
  title: 'Settings | Moji Chat',
}

export default function SettingsPage() {
  return (
    <TwoPaneLayout className="h-dvh">
      <SettingsView />
    </TwoPaneLayout>
  )
}
