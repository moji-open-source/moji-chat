import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui'

export function HeroSection() {
  return (
    <div className="max-w-3xl space-y-5">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        Moji Chat
      </div>

      <div className="space-y-4">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          做成像真正聊天软件一样顺手的首页和工作区入口。
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
          首页继续保留产品介绍，但视觉会直接和登录页、聊天工作区保持同一套桌面端气质。
          现在从这里进入消息页，已经能看到更像常见聊天软件的主界面骨架。
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="h-11 rounded-full px-6">
          <Link href="/messages">
            进入聊天工作区
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="h-11 rounded-full border border-white/10 bg-white/5 px-6 text-white hover:bg-white/10"
        >
          <Link href="/login">查看登录页</Link>
        </Button>
      </div>
    </div>
  )
}
