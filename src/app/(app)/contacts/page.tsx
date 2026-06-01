'use client'

import { useAtomValue } from 'jotai'

import { activeContactAtom, ContactProfile, ContactEmpty } from '@/features/contacts'

export default function ContactsPage() {
  const contactId = useAtomValue(activeContactAtom)

  if (!contactId) return <ContactEmpty />

  return <ContactProfile contactId={contactId} />
}
