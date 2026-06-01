'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Settings } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { canOpenNativeWindow, openSettingsWindow } from '@/bindings'

import { SETTINGS_ROUTE } from './constants'

interface OpenSettingsButtonProps {
  className?: string
}

export function OpenSettingsButton({ className }: OpenSettingsButtonProps) {
  const router = useRouter()
  const [isOpening, setIsOpening] = useState(false)

  const handleOpenSettings = useCallback(async () => {
    if (isOpening)
      return

    if (!canOpenNativeWindow()) {
      router.push(SETTINGS_ROUTE)
      return
    }

    setIsOpening(true)

    try {
      await openSettingsWindow()
    } catch (error) {
      console.error('Failed to open settings window:', error)
    } finally {
      setIsOpening(false)
    }
  }, [isOpening, router])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Settings"
          disabled={isOpening}
          onClick={handleOpenSettings}
          className={cn(
            'size-10 rounded-lg text-sidebar-accent-foreground hover:border hover:border-solid hover:border-primary/25 hover:bg-sidebar-primary/20 hover:text-primary',
            className,
          )}
        >
          <Settings />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">Settings</TooltipContent>
    </Tooltip>
  )
}
