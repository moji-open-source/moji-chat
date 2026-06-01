import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

import type { ConversationAvatarProps } from './types'
import { getAvatarLabel } from './utils'

export function ConversationAvatar({
  className,
  fallbackClassName,
  participant,
  showStatus = false,
}: ConversationAvatarProps) {
  return (
    <div className="relative shrink-0">
      <Avatar className={cn('size-9 rounded-lg', className)}>
        <AvatarFallback
          className={cn(
            'select-none rounded-lg bg-muted text-sm font-medium',
            fallbackClassName,
          )}
        >
          {getAvatarLabel(participant)}
        </AvatarFallback>
      </Avatar>

      {showStatus && participant.online && (
        <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-emerald-400 ring-2 ring-background" />
      )}
    </div>
  )
}
