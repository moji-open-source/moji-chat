interface SettingsSectionProps {
  title: string
  children: React.ReactNode
}

export function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <div>
      <p data-tauri-drag-region className="text-[11px] font-semibold uppercase tracking-widest mb-2 px-1 text-muted-foreground/50">{title}</p>
      <div className="rounded-[14px] overflow-hidden bg-black/4 dark:bg-white/6 border border-black/7 dark:border-white/7">{children}</div>
    </div>
  )
}

interface SettingsRowProps {
  label: string
  sub?: string
  right: React.ReactNode
  border?: boolean
}

export function SettingsRow({ label, sub, right, border = true }: SettingsRowProps) {
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
