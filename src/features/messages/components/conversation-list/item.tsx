import type { Conversation } from '@/bindings'
import { Button } from '@/components/ui/button'
import { ListboxItem } from '@/components/ui/listbox'
import { cn } from '@/lib/utils'

interface ConversationItemProps {
  conversation: Conversation
  active: boolean
}

export function ConversationItem({ conversation, active }: ConversationItemProps) {
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
        {Boolean(conversation.unread) && (
          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-tiny font-bold text-white shrink-0 bg-linear-to-br from-violet-600 to-violet-700 shadow-violet-600/40 shadow-md">
            {conversation.unread}
          </div>
        )}
      </Button>
    </ListboxItem>
  )
}
