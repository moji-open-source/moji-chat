import { Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

/**
 * The composer stays isolated so send actions, attachments,
 * and optimistic updates can be added without touching the message list.
 */
export function MessageComposer() {
  return (
    <footer className="shrink-0 border-t p-4">
      <div className="flex items-center gap-2 rounded-xl border bg-card p-2">
        <Input
          aria-label="Message"
          placeholder="输入消息..."
          className="h-9 border-0 bg-transparent shadow-none focus-visible:ring-0"
        />
        <Button
          type="button"
          size="icon"
          className="size-9 rounded-lg"
          aria-label="发送消息"
        >
          <Send aria-hidden="true" />
        </Button>
      </div>
    </footer>
  )
}
