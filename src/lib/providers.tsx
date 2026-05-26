'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { TooltipProvider } from '@/components/ui/tooltip'

import { useFeignDesktop } from './feign-desktop'

export function Providers({ children }: React.PropsWithChildren) {
  useFeignDesktop()

  return (
    <NextThemesProvider attribute="class" enableSystem>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  )
}
