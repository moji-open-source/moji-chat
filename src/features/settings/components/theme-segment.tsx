import { Moon, Sun } from 'lucide-react'

export function ThemeSegment() {
  return (
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
}
