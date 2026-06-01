'use client'

import { useEffect, useState } from 'react'
import { Group, Panel, Separator } from 'react-resizable-panels'

import { getConversation, getMessages, type Conversation, type Message } from '@/bindings'

import { ConversationHeader } from './header'
import { MessageComposer } from './composer'
import { MessageList } from './message-list'
import type { ConversationViewProps } from './types'

export function ConversationView({ conversationId }: ConversationViewProps) {
  const [conversation, setConversation] = useState<Conversation | null>(null)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    getConversation(conversationId).then(setConversation).catch(console.error)
    getMessages(conversationId).then(setMessages).catch(console.error)
  }, [conversationId])

  if (!conversation) return null

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <ConversationHeader conversation={conversation} />
      <Group orientation="vertical">
        <Panel>
          <MessageList conversation={conversation} messages={messages} />
        </Panel>
        <Separator />
        <Panel groupResizeBehavior="preserve-pixel-size" defaultSize={180} minSize={143} maxSize={250}>
          <MessageComposer />
        </Panel>
      </Group>
    </div>
  )
}
