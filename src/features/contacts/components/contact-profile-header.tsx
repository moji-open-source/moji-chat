import { MessageSquareText, MoreHorizontal, Phone, Video } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { Contact } from '@/bindings'

interface ContactProfileHeaderProps {
  contact: Contact
}

export function ContactProfileHeader({ contact }: ContactProfileHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b px-5">
      <div className="flex min-w-0 items-center gap-3">
        <span className="relative flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-medium">
          {contact.name.slice(0, 1)}
          {contact.online && (
            <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-primary" />
          )}
        </span>
        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold">{contact.name}</h2>
          <p className="truncate text-xs text-muted-foreground">{contact.handle}</p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <Button variant="ghost" size="icon" className="size-8" aria-label="Message">
          <MessageSquareText />
        </Button>
        <Button variant="ghost" size="icon" className="size-8" aria-label="Voice call">
          <Phone />
        </Button>
        <Button variant="ghost" size="icon" className="size-8" aria-label="Video call">
          <Video />
        </Button>
        <Button variant="ghost" size="icon" className="size-8" aria-label="More actions">
          <MoreHorizontal />
        </Button>
      </div>
    </header>
  )
}
