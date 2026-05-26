import { notFound } from 'next/navigation'

import {
  getConversation,
  getConversationMessages,
} from '@/features/messages/data'

import { ConversationHeader } from './conversation-header'
import { MessageComposer } from './message-composer'
import { MessageList } from './message-list'
import type { ConversationViewProps } from './types'

export function ConversationView({ conversationId }: ConversationViewProps) {
  // Resolve feature data here so the child components stay presentational.
  const conversation = getConversation(conversationId)

  if (!conversation) {
    notFound()
  }

  const messages = getConversationMessages(conversationId)

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <ConversationHeader conversation={conversation} />
      <MessageList conversation={conversation} messages={messages} />
      <MessageComposer />
    </div>
  )
}
