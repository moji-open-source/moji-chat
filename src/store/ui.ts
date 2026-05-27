import { atom } from 'jotai'

export const activeConversationAtom = atom<string | null>(null)

export const activeContactAtom = atom<string | null>(null)
