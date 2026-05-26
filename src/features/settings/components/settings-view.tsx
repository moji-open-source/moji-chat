import type { LucideIcon } from 'lucide-react'
import { Bell, Database, Monitor, Shield } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const sections = [
  {
    title: '账户与安全',
    description: '登录状态、设备信任和本地密钥管理。',
    icon: Shield,
    status: '本地安全策略',
  },
  {
    title: '通知',
    description: '桌面提醒、声音和免打扰时间。',
    icon: Bell,
    status: '桌面通知',
  },
  {
    title: '外观',
    description: '主题、窗口密度和侧边栏显示方式。',
    icon: Monitor,
    status: '界面偏好',
  },
  {
    title: '数据',
    description: '消息缓存、附件目录和同步策略。',
    icon: Database,
    status: '存储管理',
  },
] as const

export function SettingsView() {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col bg-background">
      <header
        data-tauri-drag-region
        className="flex h-16 shrink-0 items-center border-b px-6"
      >
        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold">设置</h1>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            管理 Moji Chat 的账号、通知、显示和本地数据。
          </p>
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
        <section className="mx-auto flex w-full max-w-3xl flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">应用偏好</h2>
            <p className="text-sm leading-6 text-muted-foreground">
              常用设置会优先服务桌面端体验，后续可以按模块接入持久化和账号同步。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {sections.map((section) => (
              <SettingsSectionCard key={section.title} section={section} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

interface SettingsSection {
  title: string
  description: string
  icon: LucideIcon
  status: string
}

function SettingsSectionCard({ section }: { section: SettingsSection }) {
  const Icon = section.icon

  return (
    <Card className="rounded-lg shadow-none transition-colors hover:bg-accent/40">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <Icon aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <CardTitle className="truncate text-sm">{section.title}</CardTitle>
            <CardDescription className="mt-1 leading-6">
              {section.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <p className="text-xs text-muted-foreground">{section.status}</p>
      </CardContent>
    </Card>
  )
}
