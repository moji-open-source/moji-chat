import { Card, CardContent } from '@/components/ui'

export function WorkspacePreview() {
  return (
    <Card className="overflow-hidden border-white/10 bg-black/24 shadow-none">
      <CardContent className="space-y-6 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white">工作区预览</p>
            <p className="mt-1 text-sm text-zinc-400">把后续页面组织成更容易扩展的结构。</p>
          </div>
          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            Ready
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          <ListPanelMockup />
          <ChatPanelMockup />
        </div>
      </CardContent>
    </Card>
  )
}

function ListPanelMockup() {
  return (
    <div className="space-y-3 rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4">
      <div className="h-10 rounded-xl bg-white/[0.08]" />
      <div className="space-y-2">
        <div className="h-12 rounded-xl bg-primary/12" />
        <div className="h-12 rounded-xl bg-white/[0.08]" />
        <div className="h-12 rounded-xl bg-white/[0.08]" />
      </div>
      <div className="h-16 rounded-2xl bg-white/[0.08]" />
    </div>
  )
}

function ChatPanelMockup() {
  return (
    <div className="space-y-3 rounded-[1.4rem] border border-white/10 bg-zinc-950/65 p-4">
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <div className="space-y-2">
          <div className="h-2.5 w-20 rounded-full bg-white/15" />
          <div className="h-3 w-36 rounded-full bg-white/10" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-white/10" />
          <div className="h-8 w-8 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="ml-auto h-[4.5rem] w-[78%] rounded-[1.4rem] rounded-br-md bg-primary/20" />
        <div className="h-20 w-[84%] rounded-[1.4rem] rounded-bl-md bg-white/[0.08]" />
        <div className="ml-auto h-16 w-[70%] rounded-[1.4rem] rounded-br-md bg-cyan-400/12" />
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="h-10 flex-1 rounded-xl bg-white/[0.08]" />
        <div className="h-10 w-10 rounded-xl bg-primary/25" />
      </div>
    </div>
  )
}
