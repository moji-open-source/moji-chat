'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Pin, Plus, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { conversations, type Conversation } from '@/features/messages/data'

function ConversationItem({ conversation }: { conversation: Conversation }) {
  const pathname = usePathname()
  const href = `/messages/${conversation.id}`
  const active = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex min-w-0 gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent',
        active && 'bg-accent text-accent-foreground',
      )}
    >
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-medium">
        {conversation.name.slice(0, 1)}
        {conversation.online && (
          <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-card bg-primary" />
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="truncate text-sm font-medium">{conversation.name}</span>
          <span className="shrink-0 text-xs text-muted-foreground">
            {conversation.time}
          </span>
        </span>
        <span className="mt-1 flex items-center gap-2">
          <span className="truncate text-xs text-muted-foreground">
            {conversation.preview}
          </span>
          {conversation.unread ? (
            <span className="ml-auto flex min-w-5 shrink-0 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-medium text-primary-foreground">
              {conversation.unread}
            </span>
          ) : null}
        </span>
      </span>
    </Link>
  )
}

function ConversationGroup({
  title,
  pinned,
}: {
  title: string
  pinned?: boolean
}) {
  const items = conversations.filter((conversation) => Boolean(conversation.pinned) === Boolean(pinned))

  return (
    <section className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-muted-foreground">
        {pinned && <Pin className="size-3" />}
        <span>{title}</span>
      </div>
      <div className="flex flex-col gap-1">
        {items.map((conversation) => (
          <ConversationItem key={conversation.id} conversation={conversation} />
        ))}
      </div>
    </section>
  )
}

export function ConversationList() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="flex shrink-0 flex-col gap-4 border-b px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold">消息</h1>
            <p className="mt-1 truncate text-xs text-muted-foreground">
              最近会话和置顶聊天
            </p>
          </div>
          <Button size="icon" className="size-8 shrink-0 rounded-lg" aria-label="新建会话">
            <Plus />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索会话"
            className="h-9 rounded-lg pl-9"
          />
        </div>
      </header>

      <ScrollArea className="min-h-0 flex-1">
        <div className="flex flex-col gap-4 p-2">
          <ConversationGroup title="置顶" pinned />
          <ConversationGroup title="最近" />
        </div>
      </ScrollArea>
    </div>
  )
}
