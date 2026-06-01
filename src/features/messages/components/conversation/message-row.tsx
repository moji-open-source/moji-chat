import { cn } from '@/lib/utils'

import { ConversationAvatar } from './avatar'
import { MessageBubble } from './message-bubble'
import type { MessageRowProps } from './types'

export function MessageRow({ conversation, message }: MessageRowProps) {
  const mine = message.sender === 'me'

  return (
    <div className={cn('flex gap-2.5', mine && 'flex-row-reverse')}>
      {!mine && (
        <ConversationAvatar
          participant={conversation}
          className="size-8 rounded-full"
          fallbackClassName="rounded-full bg-linear-to-br from-violet-500 to-purple-600 text-xs font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]"
        />
      )}

      <div
        className={cn(
          'flex max-w-[80%] flex-col',
          mine ? 'items-end' : 'items-start',
        )}
      >
        {!mine && (
          <p className="mb-1 px-1 text-tiny text-muted-foreground">
            {conversation.name}
          </p>
        )}

        <MessageBubble message={message} />

        <p className="mt-1 px-1 text-tiny text-muted-foreground">
          {message.time}
        </p>
      </div>
    </div>
  )
}
