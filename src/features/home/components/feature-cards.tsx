import { LayoutDashboard, MessageSquareText, WandSparkles } from 'lucide-react'

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui'

const FEATURE_CARDS = [
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

export function FeatureCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {FEATURE_CARDS.map(({ title, description, icon: Icon }) => (
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
  )
}
