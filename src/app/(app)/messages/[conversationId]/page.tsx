import { ConversationView } from '@/features/messages/components/conversation-view'

// Static params for build-time route generation.
// These must match the IDs returned by the Rust `list_conversations` command.
export function generateStaticParams() {
  return [
    { conversationId: 'c1' },
    { conversationId: 'c2' },
    { conversationId: 'c3' },
    { conversationId: 'c4' },
    { conversationId: 'c5' },
    { conversationId: 'c6' },
    { conversationId: 'c7' },
  ]
}

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ conversationId: string }>
}) {
  const { conversationId } = await params

  return <ConversationView conversationId={conversationId} />
}
