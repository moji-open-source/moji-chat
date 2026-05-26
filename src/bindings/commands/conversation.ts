import { invoke } from '@tauri-apps/api/core'

import type { Conversation, Message } from '../types'

export async function listConversations(): Promise<Conversation[]> {
  return invoke<Conversation[]>('list_conversations')
}

export async function getConversation(id: string): Promise<Conversation> {
  return invoke<Conversation>('get_conversation', { id })
}

export async function getMessages(conversationId: string): Promise<Message[]> {
  return invoke<Message[]>('get_messages', { conversationId })
}
