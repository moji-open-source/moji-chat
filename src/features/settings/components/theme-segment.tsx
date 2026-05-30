'use client'
import { Moon, Sun } from 'lucide-react'
import { setTheme } from '@tauri-apps/api/app'
import { cn } from '@/lib/utils'

const base =
  'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium capitalize transition-color'

export function ThemeSegment() {
  return (
    <div className="flex gap-0.5 rounded-lg bg-black/6 p-0.5 dark:bg-white/7">
      <button
        className={cn(
          base,
          'text-black/34',
          'dark:bg-[rgba(124,58,237,0.15)] dark:border dark:border-primary/25 dark:text-[rgba(167,139,250,0.9)]',
        )}
        onClick={() => setTheme('dark')}
      >
        <Moon className="h-3 w-3" />
        Dark
      </button>
      <button
        className={cn(
          base,
          'bg-[rgba(124,58,237,0.15)] border border-primary/15 text-[rgba(109,40,217,0.9)]',
          'dark:bg-transparent dark:border-none dark:text-white/30',
        )}
        onClick={() => setTheme('light')}
      >
        <Sun className="h-3 w-3" />
        Light
      </button>
    </div>
  )
}
