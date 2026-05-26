import { ContactProfile } from '@/features/contacts/components/contact-profile'

// Static params for build-time route generation.
// These must match the IDs returned by the Rust `list_contacts` command.
export function generateStaticParams() {
  return [
    { contactId: 'lin' },
    { contactId: 'mika' },
    { contactId: 'chen' },
    { contactId: 'workspace-bot' },
  ]
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ contactId: string }>
}) {
  const { contactId } = await params

  return <ContactProfile contactId={contactId} />
}
