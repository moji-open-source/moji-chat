'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { Sidebar } from './sidebar'
import { canOpenNativeWindow, openSettingsWindow } from '@/bindings'


function useGlobalShortcutHandler() {
  const isSettingsShortcut = (evt: KeyboardEvent) => evt.composed && evt.metaKey && evt.key === ','

  const settingsShortcutHandler = (evt: KeyboardEvent) => {
    evt.preventDefault()
    if (canOpenNativeWindow())
      openSettingsWindow()
  }

  return (evt: KeyboardEvent) => {
    if (isSettingsShortcut(evt))
      settingsShortcutHandler(evt)
  }
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const globalShortcutHandler = useGlobalShortcutHandler()

  React.useEffect(() => {
    window.addEventListener('keyup', globalShortcutHandler)
  }, [])

  return (
    <main
      data-tauri-drag-region
      className="flex h-screen w-screen overflow-hidden p-2 text-foreground bg-tahoe-dark"
    >
      <div
        data-tauri-drag-region
        className="flex min-h-0 flex-1 overflow-hidden rounded-window-chrome-radius border shadow-sm"
      >
        <Sidebar pathname={pathname} />
        <section className="flex min-w-0 flex-1 overflow-hidden border-l border-border rounded-l-2xl shadow-border/40 shadow-lg">{children}</section>
      </div>
    </main>
  )
}
