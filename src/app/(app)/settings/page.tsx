import { TwoPaneLayout } from '@/components/layout/two-pane-layout'
import { SettingsView } from '@/features/settings/components/settings-view'

export default function SettingsPage() {
  return (
    <TwoPaneLayout>
      <SettingsView />
    </TwoPaneLayout>
  )
}
