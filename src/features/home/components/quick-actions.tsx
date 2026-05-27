import { Command } from 'lucide-react'

const QUICK_ACTIONS = [
  '开始一个新会话',
  '切到最近聊天',
  '恢复上次工作区',
  '进入登录并同步账号',
] as const

export function QuickActions() {
  return (
    <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 sm:grid-cols-2 lg:w-[24rem] lg:grid-cols-1">
      {QUICK_ACTIONS.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
            0{index + 1}
          </div>
          <p className="text-sm text-zinc-200">{item}</p>
        </div>
      ))}

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">快捷命令</p>
          <p className="mt-1 text-sm text-zinc-200">后续可以在这里挂模型切换和全局搜索。</p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-zinc-400">
          <Command className="size-3.5" />
          <span>⌘K</span>
        </div>
      </div>
    </div>
  )
}
