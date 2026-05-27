'use client'

import { useAtomValue } from 'jotai'

import { activeConversationAtom } from '@/store/ui'
import { ConversationView } from '@/features/messages/components/conversation-view'
import { ConversationEmpty } from '@/features/messages/components/conversation-empty'

export default function MessagesPage() {
  const conversationId = useAtomValue(activeConversationAtom)

  if (!conversationId) return <ConversationEmpty />

  return <ConversationView conversationId={conversationId} />
}
