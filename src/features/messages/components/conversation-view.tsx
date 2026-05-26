import { notFound } from 'next/navigation'
import { MoreHorizontal, Phone, Send, Video } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import {
  getConversation,
  getConversationMessages,
  type Message,
} from '@/features/messages/data'

function MessageBubble({ message }: { message: Message }) {
  const mine = message.author === 'me'

  return (
    <div className={cn('flex', mine ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[72%] rounded-2xl px-4 py-2.5 text-sm leading-6',
          mine
            ? 'rounded-br-md bg-primary text-primary-foreground'
            : 'rounded-bl-md bg-muted text-foreground',
        )}
      >
        <p>{message.body}</p>
        <p
          className={cn(
            'mt-1 text-right text-[11px]',
            mine ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          {message.time}
        </p>
      </div>
    </div>
  )
}

export function ConversationView({ conversationId }: { conversationId: string }) {
  const conversation = getConversation(conversationId)

  if (!conversation) {
    notFound()
  }

  const messages = getConversationMessages(conversationId)

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b px-5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-medium">
            {conversation.name.slice(0, 1)}
          </span>
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold">{conversation.name}</h2>
            <p className="truncate text-xs text-muted-foreground">
              {conversation.online ? '在线' : '上次活跃：昨天'}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <Button variant="ghost" size="icon" className="size-8" aria-label="语音通话">
            <Phone />
          </Button>
          <Button variant="ghost" size="icon" className="size-8" aria-label="视频通话">
            <Video />
          </Button>
          <Button variant="ghost" size="icon" className="size-8" aria-label="更多操作">
            <MoreHorizontal />
          </Button>
        </div>
      </header>

      <ScrollArea className="min-h-0 flex-1">
        <div className="flex flex-col gap-3 px-6 py-5">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>

      <footer className="shrink-0 border-t p-4">
        <div className="flex items-center gap-2 rounded-xl border bg-card p-2">
          <Input
            placeholder="输入消息..."
            className="h-9 border-0 bg-transparent shadow-none focus-visible:ring-0"
          />
          <Button size="icon" className="size-9 rounded-lg" aria-label="发送消息">
            <Send />
          </Button>
        </div>
      </footer>
    </div>
  )
}
