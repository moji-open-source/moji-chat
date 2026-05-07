import { ArrowUp, Paperclip, PhoneCall, Star, Video } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const messages = [
  {
    role: 'assistant',
    author: 'Moji',
    content: '首页骨架已经铺好，接下来可以把真实会话流、登录态和会话列表逐步挂进来。',
    time: '09:14',
  },
  {
    role: 'user',
    author: 'You',
    content: '先把常见聊天软件的主界面气质做出来，尤其是侧边栏和中间聊天区。',
    time: '09:16',
  },
  {
    role: 'assistant',
    author: 'Moji',
    content: '现在这版会把导航、当前会话、右侧上下文都先留好位置，后面替换成真实数据会比较平滑。',
    time: '09:18',
  },
] as const

const highlights = [
  '统一登录页和应用内页的视觉语言',
  '保留聊天列表、消息流和输入区的扩展位',
  '让 Tauri 桌面端看起来更像完整产品而不是临时页面',
] as const

export default function ChatPage() {
  return (
    <div className="grid h-full gap-3 xl:grid-cols-[minmax(0,1fr)_20rem]">
      <Card className="flex min-h-0 flex-col rounded-[1.75rem] border-white/10 bg-black/20 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex min-w-0 items-center gap-3">
            <Avatar className="size-11 border border-white/10">
              <AvatarFallback className="bg-primary/20 text-sm font-semibold text-white">
                M
              </AvatarFallback>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/50982977?v=4"
                alt="Moji"
                draggable={false}
              />
            </Avatar>
            <div className="min-w-0">
              <CardTitle className="truncate text-lg text-white">产品首页骨架</CardTitle>
              <CardDescription className="truncate text-zinc-400">
                正在整理主页视觉、聊天布局和工作区结构
              </CardDescription>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 rounded-xl border border-white/10 bg-white/[0.05] text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              <PhoneCall className="size-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 rounded-xl border border-white/10 bg-white/[0.05] text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              <Video className="size-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 rounded-xl border border-white/10 bg-white/[0.05] text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              <Star className="size-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-6">
          <div className="mx-auto rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-400">
            今天
          </div>

          {messages.map(message => (
            <div
              key={`${message.author}-${message.time}`}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[42rem] rounded-[1.5rem] px-4 py-3 ${
                  message.role === 'user'
                    ? 'rounded-br-md bg-primary/20 text-white'
                    : 'rounded-bl-md border border-white/10 bg-white/[0.06] text-zinc-100'
                }`}
              >
                <div className="mb-2 flex items-center gap-2 text-xs text-zinc-400">
                  <span>{message.author}</span>
                  <span>{message.time}</span>
                </div>
                <p className="text-sm leading-7">{message.content}</p>
              </div>
            </div>
          ))}
        </CardContent>

        <CardFooter className="border-t border-white/10 pt-5">
          <div className="flex w-full items-end gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-3">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-10 rounded-xl text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              <Paperclip className="size-4" />
            </Button>
            <div className="min-h-24 flex-1 rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-500">
              输入消息、粘贴 prompt，或者把后续的真实输入框接在这里。
            </div>
            <Button
              type="button"
              size="icon"
              className="size-10 rounded-xl"
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Card className="hidden rounded-[1.75rem] border-white/10 bg-black/20 shadow-2xl shadow-black/20 backdrop-blur-xl xl:flex xl:flex-col">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="text-white">会话上下文</CardTitle>
          <CardDescription className="text-zinc-400">
            给右侧留出常见聊天软件会用到的信息位。
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4 py-6">
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">状态</p>
            <p className="mt-3 text-sm text-white">设计骨架已就绪，可继续接真实会话和数据。</p>
          </div>

          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">本轮重点</p>
            <div className="mt-3 flex flex-col gap-3">
              {highlights.map(item => (
                <div key={item} className="rounded-xl bg-black/20 px-3 py-2 text-sm text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">下一步</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              可以继续接入真实会话列表、消息输入框、模型切换和用户设置。
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
