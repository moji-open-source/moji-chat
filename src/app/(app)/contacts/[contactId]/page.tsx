import { ContactProfile } from '@/features/contacts/components/contact-profile'
import { contacts } from '@/features/contacts/data'

export function generateStaticParams() {
  return contacts.map((contact) => ({
    contactId: contact.id,
  }))
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ contactId: string }>
}) {
  const { contactId } = await params

  return <ContactProfile contactId={contactId} />
}
