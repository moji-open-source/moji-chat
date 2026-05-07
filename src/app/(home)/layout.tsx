'use client'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false} className='p-1.25' style={
      { '--sidebar-width-icon': '5.8rem', '--sidebar-width': '16rem' } as React.CSSProperties
    }>
      <AppSidebar className="overflow-x-hidden" />
      <SidebarInset>
        {/* <SidebarTrigger className="-ml-1" /> */}
        {children}
        {/* <main className="min-h-dvh min-w-0 flex-1 p-3 pl-0">
            <div className="flex min-h-[calc(100dvh-1.5rem)] min-w-0 flex-1 flex-col rounded-[1.75rem] border border-white/10 bg-black/10 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-3">
              <header className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-white">Moji Chat</p>
                    <p className="truncate text-xs text-zinc-400">桌面端聊天工作区</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-9 rounded-xl border border-white/10 bg-white/[0.05] text-zinc-300 hover:bg-white/10 hover:text-white"
                  >
                    <Search className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-9 rounded-xl border border-white/10 bg-white/[0.05] text-zinc-300 hover:bg-white/10 hover:text-white"
                  >
                    <Bell className="size-4" />
                  </Button>
                  <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-zinc-400 sm:flex">
                    <Command className="size-3.5" />
                    <span>⌘K</span>
                  </div>
                </div>
              </header>

              <div className="min-h-0 min-w-0 flex-1 py-3">
                {children}
              </div>
            </div>
          </main> */}
      </SidebarInset>
      {/* </div> */}
    </SidebarProvider>
  )
}
