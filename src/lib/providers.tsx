'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { TooltipProvider } from '@/components/ui/tooltip'

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <NextThemesProvider attribute="class" enableSystem>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  )
}
