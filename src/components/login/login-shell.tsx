import type { ReactNode } from 'react'

interface LoginShellProps {
  children: ReactNode
}

export function LoginShell({ children }: LoginShellProps) {
  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-10" data-tauri-drag-region>
      <div className="w-full max-w-96">{children}</div>
    </main>
  )
}
