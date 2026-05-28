import { Button } from '@/components/ui/button'

import {
  CONVERSATION_HEADER_ACTIONS,
  type ConversationHeaderAction,
} from './conversation-actions'
import { ConversationAvatar } from './conversation-avatar'
import type { ConversationHeaderProps } from './types'

export function ConversationHeader({ conversation }: ConversationHeaderProps) {
  return (
    <header
      data-tauri-drag-region
      className="flex h-14.5 shrink-0 items-center justify-between border-b px-5"
    >
      <div className="flex min-w-0 items-center gap-3">
        <ConversationAvatar participant={conversation} showStatus />

        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold leading-snug">
            {conversation.name}
          </h2>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            {conversation.online ? 'Active now' : 'Offline'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-0.5">
        {CONVERSATION_HEADER_ACTIONS.map((action) => (
          <ActionButton key={action.label} action={action} />
        ))}
      </div>
    </header>
  )
}

function ActionButton({ action }: { action: ConversationHeaderAction }) {
  const Icon = action.icon

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8 text-muted-foreground"
      aria-label={action.label}
    >
      <Icon aria-hidden="true" />
    </Button>
  )
}
