import { ChevronRight } from 'lucide-react'

import { Switch } from '@/components/ui/switch'

import { SettingsSection, SettingsRow } from './settings-primitives'
import { ThemeSegment } from './theme-segment'

export function SettingsView() {
  return (
    <main className="flex-1 flex flex-col min-w-0 bg-background overflow-auto">
      <div className="flex-1 overflow-y-auto px-8 py-8 pt-11! space-y-6 flex h-full min-h-0 flex-col">
        <SettingsSection title="Appearance">
          <SettingsRow label="Theme" sub="Choose between dark and light mode" right={<ThemeSegment />} border={false} />
        </SettingsSection>

        <SettingsSection title="Notifications">
          <SettingsRow label="Enable Notifications" sub="Show alerts for new messages" right={<Switch />} />
          <SettingsRow label="Message Sounds" sub="Play sounds for incoming messages" right={<Switch />} />
          <SettingsRow label="Message Preview" sub="Show content in notifications" right={<Switch />} border={false} />
        </SettingsSection>

        <SettingsSection title="About">
          <SettingsRow label="Clover" sub="Version 0.1.0 (Build 42)" right={
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-black/7 dark:bg-white/7 text-[rgba(16,8,36,0.34)] dark:text-white/30">Latest</span>
          } />
          <SettingsRow label="Acknowledgements" right={
            <ChevronRight className="w-4 h-4 dark:text-white/18 text-[rgba(16,8,36,0.34)]" />
          } border={false} />
        </SettingsSection>
      </div>
    </main>
  )
}
