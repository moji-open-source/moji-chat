import type { ReactNode } from 'react'

interface LoginShellProps {
  children: ReactNode
}

export function LoginShell({ children }: LoginShellProps) {
  return (
    <main data-tauri-drag-region className="h-screen w-screen relative flex min-h-dvh items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(196,98,255,0.18),transparent_32%),linear-gradient(180deg,rgba(19,20,28,1),rgba(10,11,17,1))] p-2 text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <section data-tauri-drag-region className="relative h-full w-full max-w-md rounded-[1.3rem] border border-white/10 bg-black/25 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="space-y-8" data-tauri-drag-region>
          <div className="-mb-2 h-5 w-full" data-tauri-drag-region />
          {children}
        </div>
      </section>
    </main>
  )
}
