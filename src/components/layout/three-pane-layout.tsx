import { cn } from '@/lib/utils'

interface ThreePaneLayoutProps {
  list: React.ReactNode
  children: React.ReactNode
  listClassName?: string
  contentClassName?: string
}

export function ThreePaneLayout({
  list,
  children,
  listClassName,
  contentClassName,
}: ThreePaneLayoutProps) {
  return (
    <div className="flex h-full min-h-0 min-w-0 flex-1 overflow-hidden">
      <aside
        className={cn(
          'w-72 bg-[#13131d] border-r border-border flex flex-col shrink-0',
          listClassName,
        )}
      >
        {list}
      </aside>
      <section
        className={cn(
          'flex min-w-0 flex-1 flex-col bg-background',
          contentClassName,
        )}
      >
        {children}
      </section>
    </div>
  )
}
