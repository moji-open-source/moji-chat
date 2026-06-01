'use client'

import { useAtomValue } from 'jotai'

import { activeConversationAtom, ConversationView, ConversationEmpty } from '@/features/messages'

export default function MessagesPage() {
  const conversationId = useAtomValue(activeConversationAtom)

  if (!conversationId) return <ConversationEmpty />

  return <ConversationView conversationId={conversationId} />
}
