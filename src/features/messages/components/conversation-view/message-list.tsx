import { ScrollArea } from '@/components/ui/scroll-area'

import { MessageRow } from './message-row'
import type { MessageListProps } from './types'

export function MessageList({ conversation, messages }: MessageListProps) {
  return (
    <ScrollArea className="min-h-0 flex-1">
      {/* Keep scrolling in this component so rows only own message rendering. */}
      <div className="flex flex-col gap-4 px-5 py-5">
        {messages.map((message) => (
          <MessageRow
            key={message.id}
            conversation={conversation}
            message={message}
          />
        ))}
      </div>
    </ScrollArea>
  )
}
