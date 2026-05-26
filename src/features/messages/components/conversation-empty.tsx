import { MessageSquareText } from 'lucide-react'

export function ConversationEmpty() {
  return (
    <div className="flex h-full min-h-0 flex-1 items-center justify-center p-8">
      <div className="flex max-w-sm flex-col items-center gap-3 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
          <MessageSquareText />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-semibold">选择一个会话</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            当前页面用于承载消息详情。左侧列表保持不变，右侧会根据
            `/messages/[conversationId]` 渲染具体会话。
          </p>
        </div>
      </div>
    </div>
  )
}
