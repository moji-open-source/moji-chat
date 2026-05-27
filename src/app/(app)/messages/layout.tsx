import { ThreePaneLayout } from '@/components/layout/three-pane-layout'
import { ConversationList } from '@/features/messages/components/conversation-list/index'

export default function MessagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ThreePaneLayout list={<ConversationList />}>{children}</ThreePaneLayout>
}
