import { cn } from '@/lib/utils'

import type { MessageBubbleProps } from './types'

export function MessageBubble({ message }: MessageBubbleProps) {
  const mine = message.sender === 'me'

  return (
    <div
      className={cn(
        'rounded-xl border px-3.5 py-2 text-sm leading-relaxed shadow-[inset_0px_1px_0px_rgba(255,255,255,0.06)] backdrop-blur-2xl',
        mine
          ? 'rounded-br-sm bg-[linear-gradient(135deg,rgba(124,58,237,0.88),rgba(109,40,217,0.88))] text-primary-foreground'
          : 'rounded-tl-sm bg-muted text-foreground',
      )}
    >
      <p>{message.text}</p>
    </div>
  )
}
