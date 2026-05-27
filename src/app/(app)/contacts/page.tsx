'use client'

import { useAtomValue } from 'jotai'

import { activeContactAtom } from '@/store/ui'
import { ContactProfile } from '@/features/contacts/components/contact-profile'
import { ContactEmpty } from '@/features/contacts/components/contact-empty'

export default function ContactsPage() {
  const contactId = useAtomValue(activeContactAtom)

  if (!contactId) return <ContactEmpty />

  return <ContactProfile contactId={contactId} />
}
