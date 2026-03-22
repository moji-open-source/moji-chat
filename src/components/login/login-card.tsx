import type { ReactNode } from 'react'

import { Card, CardContent, CardFooter } from '@/components/ui'

interface LoginCardProps {
  children: ReactNode
  footer?: ReactNode
}

export function LoginCard({ children, footer }: LoginCardProps) {
  return (
    <Card className="border-border/70 bg-card/95 shadow-md backdrop-blur-sm">
      <CardContent className="space-y-6 p-6">{children}</CardContent>
      {footer ? <CardFooter className="flex-col gap-3">{footer}</CardFooter> : null}
    </Card>
  )
}
