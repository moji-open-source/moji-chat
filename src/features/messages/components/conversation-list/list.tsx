'use client'

import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

import { listConversations, type Conversation } from '@/bindings'
import { Listbox, ListboxContent } from '@/components/ui/listbox'
import { activeConversationAtom } from '@/features/messages/store'

import { ConversationGroup } from './group'
import { ConversationListHeader } from './header'

export function ConversationList() {
  const [activeId, setActiveId] = useAtom(activeConversationAtom)
  const [conversations, setConversations] = useState<Conversation[]>([])

  useEffect(() => {
    listConversations().then(setConversations).catch(console.error)
  }, [])

  return (
    <>
      <ConversationListHeader />
      <Listbox onValueChange={setActiveId}>
        <ListboxContent className="border-none! border-0! bg-transparent! flex-1 overflow-y-auto px-1.75 pb-4 pt-0 space-y-4 scrollbar-hide">
          <ConversationGroup title="Pinned" pinned conversations={conversations} activeId={activeId} />
          <ConversationGroup title="Recent" conversations={conversations} activeId={activeId} />
        </ListboxContent>
      </Listbox>
    </>
  )
}
