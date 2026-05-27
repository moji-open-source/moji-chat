import { Plus, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ConversationListHeader() {
  return (
    <header data-tauri-drag-region className="px-4 pt-5 pb-3">
      <div data-tauri-drag-region className="flex items-center justify-between mb-4">
        <h1 className="text-base font-semibold text-foreground">Messages</h1>

        <Button size="icon" variant="secondary" className="size-6.25 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent flex items-center justify-center text-muted-foreground transition-all" aria-label="New">
          <Plus />
        </Button>
      </div>
      <div className="relative" data-tauri-drag-region>
        <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search conversations..."
          className="h-7.5 rounded-full pl-8 pr-3 py-2 text-xs! bg-[#1a1a26]"
        />
      </div>
    </header>
  )
}
