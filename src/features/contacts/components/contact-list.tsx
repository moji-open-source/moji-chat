'use client'

import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { Plus, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { listContacts, type Contact } from '@/bindings'
import { activeContactAtom } from '@/store/ui'

export function ContactList() {
  const [activeId, setActiveId] = useAtom(activeContactAtom)
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    listContacts().then(setContacts).catch(console.error)
  }, [])

  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="flex shrink-0 flex-col gap-4 border-b px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold">Contacts</h1>
            <p className="mt-1 truncate text-xs text-muted-foreground">
              Friends, bots, and team members
            </p>
          </div>
          <Button size="icon" className="size-8 shrink-0 rounded-lg" aria-label="Add contact">
            <Plus />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search contacts"
            className="h-9 rounded-lg pl-9"
          />
        </div>
      </header>

      <ScrollArea className="min-h-0 flex-1">
        <div className="flex flex-col gap-1 p-2">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              active={activeId === contact.id}
              onSelect={setActiveId}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

function ContactItem({ contact, active, onSelect }: { contact: Contact; active: boolean; onSelect: (id: string) => void }) {
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
