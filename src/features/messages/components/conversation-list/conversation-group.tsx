import { Pin } from 'lucide-react'

import type { Conversation } from '@/bindings'
import { ListboxGroup, ListboxGroupLabel } from '@/components/ui/listbox'

import { ConversationItem } from './conversation-item'

interface ConversationGroupProps {
  title: string
  pinned?: boolean
  conversations: Conversation[]
  activeId: string | null
}

export function ConversationGroup({
  title,
  pinned,
  conversations,
  activeId,
}: ConversationGroupProps) {
  const items = conversations.filter((c) => Boolean(c.pinned) === Boolean(pinned))

  return (
    <ListboxGroup asChild className="p-0">
      <section className="flex flex-col gap-1">
        <ListboxGroupLabel asChild>
          <div className="flex items-center gap-1.5 px-2 mb-1.5">
            {pinned && <Pin className="size-3 text-muted-foreground" />}
            <span className="text-tiny font-semibold text-muted-foreground uppercase tracking-wider">{title}</span>
          </div>
        </ListboxGroupLabel>
        <div className="flex flex-col gap-1">
          {items.map((conversation) => (
            <ConversationItem key={conversation.id} conversation={conversation} active={activeId === conversation.id} />
          ))}
        </div>
      </section>
    </ListboxGroup>
  )
}
