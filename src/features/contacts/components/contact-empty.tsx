import { ContactRound } from 'lucide-react'

export function ContactEmpty() {
  return (
    <div className="flex h-full min-h-0 flex-1 items-center justify-center p-8">
      <div className="flex max-w-sm flex-col items-center gap-3 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
          <ContactRound />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-semibold">选择一个联系人</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            联系人列表由 `/contacts` 的 layout 固定，右侧详情由
            `/contacts/[contactId]` 控制。
          </p>
        </div>
      </div>
    </div>
  )
}
