'use client'

import { usePathname } from 'next/navigation'
import { Sidebar } from './sidebar'
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <main
      data-tauri-drag-region
      className="flex h-screen w-screen overflow-hidden p-2 text-foreground bg-tahoe-dark"
    >
      <div
        data-tauri-drag-region
        className="flex min-h-0 flex-1 overflow-hidden rounded-2xl border shadow-sm"
      >
        <Sidebar pathname={pathname} />
        <section className="flex min-w-0 flex-1 overflow-hidden">{children}</section>
      </div>
    </main>
  )
}
