'use client'

import { usePathname } from 'next/navigation'
import { Pin, Plus, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { conversations, type Conversation } from '@/features/messages/data'
import { Listbox, ListboxContent, ListboxItem, ListboxGroup, ListboxGroupLabel } from '@/components/ui/listbox'

function ConversationItem({ conversation }: { conversation: Conversation }) {
  const pathname = usePathname()
  const href = `/messages/${conversation.id}`
  const active = pathname === href

  return (
    <ListboxItem asChild value={conversation.id}>
      <Button
        variant="ghost"
        className={cn(
          'h-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-left relative hover:bg-white/5 border border-transparent data-[state=checked]:bg-[rgba(124,58,237,0.18)] data-[state=checked]:border-[rgba(139,92,246,0.28)] [&[data-state=checked]_.name-span]:text-[rgba(167,139,250,0.9)]',
          active && 'bg-accent text-accent-foreground',
        )}
      >
        <div className="relative">
          <div className="size-7.75 text-sm rounded-full bg-linear-to-br from-indigo-500 to-blue-600 flex items-center justify-center font-semibold text-white shrink-0">
            {conversation.name.slice(0, 1)}
          </div>
          {conversation.online && (
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#0d0d14]"></div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium truncate text-accent-foreground transition-colors name-span">{conversation.name}</span>
            <span className="text-tiny text-muted-foreground shrink-0 ml-2">{conversation.time}</span>
          </div>
          <p className="text-xs text-muted-foreground truncate mt-0.5">
            {conversation.typing ? (
              <span className="italic text-[rgba(167,139,250,0.9)]">typing...</span>
            ) : (
              conversation.lastMessage
            )}
          </p>
        </div>
        {
          // background: linear-gradient(135deg, rgb(124, 58, 237), rgb(109, 40, 217)); box-shadow: rgba(124, 58, 237, 0.4) 0px 2px 6px;
          Boolean(conversation.unread) && <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-tiny font-bold text-white shrink-0 bg-linear-to-br from-violet-600 to-violet-700 shadow-violet-600/40 shadow-md" >{conversation.unread}</div>
        }

      </Button>
    </ListboxItem>
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
            <ConversationItem key={conversation.id} conversation={conversation} />
          ))}
        </div>
      </section>
    </ListboxGroup>
  )
}


function ConversationHeader() {
  return (
    <header data-tauri-drag-region className="px-4 pt-5 pb-3">
      <div data-tauri-drag-region className="flex items-center justify-between mb-4">
        <h1 className="text-base font-semibold text-foreground">Messages</h1>

        <Button size="icon" variant="secondary" className="size-6.25 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent flex items-center justify-center text-muted-foreground transition-all" aria-label="New">
          <Plus />
        </Button>
      </div>
      <div className="relative" data-tauri-drag-region>
        <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search conversations..."
          className="h-7.5 rounded-full pl-8 pr-3 py-2 text-xs! bg-[#1a1a26]"
        />
      </div>
    </header>
  )
}

export function ConversationList() {
  return (
    <>
      <ConversationHeader />
      <Listbox>
        <ListboxContent className="border-none! border-0! bg-transparent! flex-1 overflow-y-auto px-1.75 pb-4 pt-0 space-y-4 scrollbar-hide">
          <ConversationGroup title="Pinned" pinned />
          <ConversationGroup title="Recent" />
        </ListboxContent>
      </Listbox>
    </>
  )
}
