import { MessageSquareText } from 'lucide-react'

export function ConversationEmpty() {
  return (
    <div className="flex h-full min-h-0 flex-1 items-center justify-center p-8">
      <div className="flex max-w-sm flex-col items-center gap-3 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
          <MessageSquareText />
        </div>
      </div>
    </div>
  )
}
