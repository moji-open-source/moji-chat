import { ThreePaneLayout } from '@/components/layout/three-pane-layout'
import { ContactList } from '@/features/contacts/components/contact-list/index'

export default function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ThreePaneLayout list={<ContactList />}>{children}</ThreePaneLayout>
}
