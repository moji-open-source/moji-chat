'use client'

import { useEffect, useState } from 'react'
import { MessageSquareText, MoreHorizontal, Phone, UserPlus, Video } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getContact, type Contact } from '@/bindings'

export function ContactProfile({ contactId }: { contactId: string }) {
  const [contact, setContact] = useState<Contact | null>(null)

  useEffect(() => {
    getContact(contactId).then(setContact).catch(console.error)
  }, [contactId])

  if (!contact) return null

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
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
    </div>
  )
}