import { notFound } from 'next/navigation'
import { Phone, Send, Video, Info } from 'lucide-react'

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
  const mine = message.sender === 'me'

  return (
    <div
      className={cn(
        'px-3.5 py-2 text-sm leading-relaxed rounded-xl backdrop-blur-2xl border shadow-[inset_0px_1px_0px_rgba(255,255,255,0.06)]',
        mine
          ? 'rounded-br-sm bg-[linear-gradient(135deg,rgba(124,58,237,0.88),rgba(109,40,217,0.88))] text-primary-foreground'
          : 'rounded-tl-sm bg-muted text-foreground',
      )}
    >
      <p>{message.text}</p>
    </div>
  )
}

function MessageRow({ message }: { message: Message }) {
  const mine = message.sender === 'me'
  return (
    <div className={cn('flex gap-2.5 mt-4', mine && 'flex-row-reverse')}>
      {mine ? undefined : (
        <div className="shrink-0">
          <div
            className="w-8 h-8 text-xs rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center font-semibold text-white shrink-0 select-none"
            style={{ boxShadow: 'rgba(255, 255, 255, 0.25) 0px 1px 0px inset, rgba(0, 0, 0, 0.35) 0px 2px 8px' }}
          >
            AC
          </div>
        </div>
      )}

      <div className={cn('max-w-[62%] flex flex-col', mine ? 'items-end' : 'items-start')}>
        {!mine && <p className="text-tiny text-[rgba(255,255,255,0.3)] mb-1 px-1">Aria Chen</p>}
        <MessageBubble message={message} />
        <p className="text-tiny text-[rgba(255,255,255,0.18)] mt-1 px-1">{message.time}</p>
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
      <ConversationViewHeader
        name={conversation.name}
        online={conversation.online}
      />

      <ScrollArea className="min-h-0 flex-1">
        <div className="flex-1 px-5 py-5 space-y-1">
          {messages.map((message) => (
            <MessageRow key={message.id} message={message} />
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

function ConversationViewHeader({
  name,
  online,
}: {
  name: string
  online: boolean
}) {
  return (
    <header data-tauri-drag-region className="h-14.5 flex items-center justify-between px-5 shrink-0 border-b">
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-medium">
          {name.slice(0, 1)}
        </span>
        <div className="min-w-0">
          <h2 className="text-sm font-semibold leading-snug">{name}</h2>
          <p className="text-[11px] mt-0.5 text-[rgba(255,255,255,0.3)]">
            {online ? 'Active now' : 'Offline'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-0.5">
        <ConversationViewHeaderIcon label="Voice call">
          <Phone />
        </ConversationViewHeaderIcon>

        <ConversationViewHeaderIcon label="Video call">
          <Video />
        </ConversationViewHeaderIcon>

        <ConversationViewHeaderIcon label="Info">
          <Info />
        </ConversationViewHeaderIcon>
      </div>
    </header>
  )
}

function ConversationViewHeaderIcon({ children, label }: React.PropsWithChildren & { label: string }) {
  return <Button variant="ghost" size="icon" className="size-8 [&_svg]:size-4.25! text-[rgba(255,255,255,0.3)]" aria-label={label}>
    {children}
  </Button>
}
