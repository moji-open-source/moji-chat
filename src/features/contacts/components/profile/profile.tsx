'use client'

import { useEffect, useState } from 'react'

import { getContact, type Contact } from '@/bindings'

import { ContactProfileHeader } from './header'
import { ContactProfileContent } from './content'

export function ContactProfile({ contactId }: { contactId: string }) {
  const [contact, setContact] = useState<Contact | null>(null)

  useEffect(() => {
    getContact(contactId).then(setContact).catch(console.error)
  }, [contactId])

  if (!contact) return null

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <ContactProfileHeader contact={contact} />
      <ContactProfileContent contact={contact} />
    </div>
  )
}
