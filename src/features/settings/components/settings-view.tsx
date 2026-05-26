import { ChevronRight, Moon, Sun } from 'lucide-react'

import { Switch } from '@/components/ui/switch'

export function SettingsView() {
  return (
    <main className="flex-1 flex flex-col min-w-0 bg-background overflow-auto">
      <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6 flex h-full min-h-0 flex-col">
        <Section title="Appearance">
          <Row label="Theme" sub="Choose between dark and light mode" right={<ThemeSegment />} border={false} />
        </Section>

        <Section title="Notifications">
          <Row label="Enable Notifications" sub="Show alerts for new messages" right={<Switch />} />
          <Row label="Message Sounds" sub="Play sounds for incoming messages" right={<Switch />} />
          <Row label="Message Preview" sub="Show content in notifications" right={<Switch />} border={false} />
        </Section>

        <Section title="About">
          <Row label="Clover" sub="Version 0.1.0 (Build 42)" right={
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-black/7 dark:bg-white/7 text-[rgba(16,8,36,0.34)] dark:text-white/30">Latest</span>
          } />
          <Row label="Acknowledgements" right={
            <ChevronRight className="w-4 h-4 dark:text-white/18 text-[rgba(16,8,36,0.34)]" />
          } border={false} />
        </Section>
      </div>
    </main>
  )
}

// Segmented control for theme
const ThemeSegment = () => (
  <div className="flex p-0.5 rounded-lg gap-0.5 bg-black/6 dark:bg-white/7">
    <button
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium capitalize transition-all bg-[rgba(124,58,237,0.28)] dark:bg-[rgba(124,58,237,0.15)] border border-primary/25 text-[rgba(167,139,250,0.9)]"
    >
      <Moon className="w-3 h-3" />
      Dark
    </button>
    <button
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium capitalize transition-all text-white/30"
    >
      <Sun className="w-3 h-3" />
      Light
    </button>
  </div>
)

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-widest mb-2 px-1 text-muted-foreground/50">{title}</p>
      <div className="rounded-[14px] overflow-hidden bg-black/4 dark:bg-white/6 border border-black/7 dark:border-white/7">{children}</div>
    </div>
  )
}

function Row({ label, sub, right, border = true }: { label: string; sub?: string; right: React.ReactNode, border?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${border ? 'border-b border-b-border' : ''}`}>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium">{label}</p>
        {sub && <p className="text-xs mt-0.5 text-muted-foreground">{sub}</p>}
      </div>
      {right}
    </div>
  )
}
