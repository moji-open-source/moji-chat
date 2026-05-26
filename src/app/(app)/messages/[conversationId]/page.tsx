import { ConversationView } from '@/features/messages/components/conversation-view'
import { conversations } from '@/features/messages/data'

export function generateStaticParams() {
  return conversations.map((conversation) => ({
    conversationId: conversation.id,
  }))
}

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ conversationId: string }>
}) {
  const { conversationId } = await params

  return <ConversationView conversationId={conversationId} />
}
