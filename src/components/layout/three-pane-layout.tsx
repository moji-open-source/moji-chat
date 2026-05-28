import { cn } from '@/lib/utils'
import { Group, Panel, Separator } from 'react-resizable-panels'

interface ThreePaneLayoutProps {
  list: React.ReactNode
  children: React.ReactNode
  listClassName?: string
  contentClassName?: string
  disableResize?: boolean
}

export function ThreePaneLayout({
  list,
  children,
  listClassName,
  contentClassName,
  disableResize,
}: ThreePaneLayoutProps) {
  return (
    <Group className="flex h-full min-h-0 min-w-0 flex-1 overflow-hidden bg-[#13131d]" disabled={disableResize}>
      <Panel groupResizeBehavior="preserve-pixel-size" defaultSize={288} maxSize={400} minSize={200}>
        <aside
          className={cn(
            'size-full flex flex-col shrink-0',
            listClassName,
          )}
        >
          {list}
        </aside>
      </Panel>
      <Separator />
      <Panel className="overflow-visible!">
        <section
          className={cn(
            'size-full flex min-w-0 flex-1 flex-col bg-background border-l border-border rounded-l-2xl shadow-border/40 shadow-lg',
            contentClassName,
          )}
        >
          {children}
        </section>
      </Panel>
    </Group>
  )
}
