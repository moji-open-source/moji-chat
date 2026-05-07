import Link from 'next/link'
import {
  ArrowRight,
  Command,
  LayoutDashboard,
  MessageSquareText,
  Sparkles,
  WandSparkles,
} from 'lucide-react'

import { Button, Card, CardContent, CardDescription, CardTitle } from '@/components/ui'

const featureCards = [
  {
    title: '会话工作台',
    description: '把常用对话、草稿和最近上下文收进一个稳定入口，减少来回切换。',
    icon: MessageSquareText,
  },
  {
    title: 'Prompt 组合区',
    description: '预留系统提示词、角色模板和快速插入能力，后续接入会更顺手。',
    icon: WandSparkles,
  },
  {
    title: '桌面式布局',
    description: '为 Tauri 应用准备的左右分区和模块卡片，首页与应用内页的过渡更自然。',
    icon: LayoutDashboard,
  },
] as const

const quickActions = [
  '开始一个新会话',
  '切到最近聊天',
  '恢复上次工作区',
  '进入登录并同步账号',
] as const

export default function HomePage() {
  return (
    <main className="h-dvh overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(196,98,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_24%),linear-gradient(180deg,#16141f_0%,#0c0d13_100%)] text-foreground">
      <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-6">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute -left-16 top-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          </div>

          <div className="relative flex min-h-[calc(100dvh-2rem)] flex-col justify-between gap-10 lg:min-h-168">
            <header className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
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

              <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 sm:grid-cols-2 lg:w-[24rem] lg:grid-cols-1">
                {quickActions.map((item, index) => (
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
            </header>

            <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-4 md:grid-cols-3">
                {featureCards.map(({ title, description, icon: Icon }) => (
                  <Card
                    key={title}
                    className="border-white/10 bg-white/[0.07] shadow-none backdrop-blur-sm"
                  >
                    <CardContent className="space-y-5 p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-base text-white">{title}</CardTitle>
                        <CardDescription className="leading-6 text-zinc-400">
                          {description}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

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
                    <div className="space-y-3 rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4">
                      <div className="h-10 rounded-xl bg-white/[0.08]" />
                      <div className="space-y-2">
                        <div className="h-12 rounded-xl bg-primary/12" />
                        <div className="h-12 rounded-xl bg-white/[0.08]" />
                        <div className="h-12 rounded-xl bg-white/[0.08]" />
                      </div>
                      <div className="h-16 rounded-2xl bg-white/[0.08]" />
                    </div>

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
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
