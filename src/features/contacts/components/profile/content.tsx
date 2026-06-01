import { MessageSquareText, Phone, UserPlus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { Contact } from '@/bindings'

interface ContactProfileContentProps {
  contact: Contact
}

export function ContactProfileContent({ contact }: ContactProfileContentProps) {
  return (
    <main className="min-h-0 flex-1 overflow-y-auto px-8 py-7">
      <section className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <div className="flex items-start gap-5">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-muted text-2xl font-semibold">
            {contact.name.slice(0, 1)}
          </span>
          <div className="min-w-0 flex-1 pt-1">
            <h1 className="truncate text-2xl font-semibold">{contact.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{contact.title}</p>
            <p className="mt-3 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
              {contact.status}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Button>
            <MessageSquareText data-icon="inline-start" />
            Message
          </Button>
          <Button variant="secondary">
            <Phone data-icon="inline-start" />
            Call
          </Button>
          <Button variant="outline">
            <UserPlus data-icon="inline-start" />
            Note
          </Button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-4">
            <p className="text-xs font-medium text-muted-foreground">Handle</p>
            <p className="mt-2 text-sm">{contact.handle}</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="text-xs font-medium text-muted-foreground">Status</p>
            <p className="mt-2 text-sm">{contact.online ? 'Online' : 'Offline'}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
