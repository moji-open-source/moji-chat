import type { Contact } from '@/bindings'
import { cn } from '@/lib/utils'

interface ContactItemProps {
  contact: Contact
  active: boolean
  onSelect: (id: string) => void
}

export function ContactItem({ contact, active, onSelect }: ContactItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(contact.id)}
      className={cn(
        'flex min-w-0 gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent text-left w-full',
        active && 'bg-accent text-accent-foreground',
      )}
    >
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-medium">
        {contact.name.slice(0, 1)}
        {contact.online && (
          <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-card bg-primary" />
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="truncate text-sm font-medium">{contact.name}</span>
          <span className="shrink-0 text-xs text-muted-foreground">
            {contact.handle}
          </span>
        </span>
        <span className="mt-1 block truncate text-xs text-muted-foreground">
          {contact.status}
        </span>
      </span>
    </button>
  )
}
