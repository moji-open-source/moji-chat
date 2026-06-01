import { Info, Phone, Video, type LucideIcon } from 'lucide-react'

export interface ConversationHeaderAction {
  icon: LucideIcon
  label: string
}

/**
 * Header actions are data-driven so future controls can be gated,
 * reordered, or moved into menus without rewriting the header layout.
 */
export const CONVERSATION_HEADER_ACTIONS: ConversationHeaderAction[] = [
  { icon: Phone, label: 'Voice call' },
  { icon: Video, label: 'Video call' },
  { icon: Info, label: 'Info' },
]
