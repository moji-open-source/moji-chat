import { atom } from 'jotai'

// UI state atoms — purely for interface state, not business data.

/// Currently selected conversation ID in the messages view.
export const activeConversationAtom = atom<string | null>(null)

/// Whether the sidebar is collapsed.
export const sidebarCollapsedAtom = atom(false)
