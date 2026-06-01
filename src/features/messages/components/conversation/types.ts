import type { Conversation, Message } from '@/bindings'

export interface ConversationViewProps {
  conversationId: string
}

export interface ConversationParticipant {
  avatar: Conversation['avatar']
  name: Conversation['name']
  online: Conversation['online']
}

export interface ConversationHeaderProps {
  conversation: ConversationParticipant
}

export interface MessageListProps {
  conversation: ConversationParticipant
  messages: Message[]
}

export interface MessageRowProps {
  conversation: ConversationParticipant
  message: Message
}

export interface MessageBubbleProps {
  message: Message
}

export interface ConversationAvatarProps {
  className?: string
  fallbackClassName?: string
  showStatus?: boolean
  participant: ConversationParticipant
}
