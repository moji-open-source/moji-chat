import { cn } from '@/lib/utils'

interface TwoPaneLayoutProps {
  children: React.ReactNode
  className?: string
}

export function TwoPaneLayout({ children, className }: TwoPaneLayoutProps) {
  return (
    <section
      className={cn(
        'flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-background',
        className,
      )}
    >
      {children}
    </section>
  )
}
