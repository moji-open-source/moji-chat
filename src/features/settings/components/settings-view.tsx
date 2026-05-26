import { Bell, Database, Monitor, Shield } from 'lucide-react'

const sections = [
  {
    title: '账户与安全',
    description: '登录状态、设备信任和本地密钥管理。',
    icon: Shield,
  },
  {
    title: '通知',
    description: '桌面提醒、声音和免打扰时间。',
    icon: Bell,
  },
  {
    title: '外观',
    description: '主题、窗口密度和侧边栏显示方式。',
    icon: Monitor,
  },
  {
    title: '数据',
    description: '消息缓存、附件目录和同步策略。',
    icon: Database,
  },
] as const

export function SettingsView() {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <header className="flex h-16 shrink-0 items-center border-b px-6">
        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold">设置</h1>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            这个页面演示侧边栏 + 单内容区的两栏布局。
          </p>
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto px-8 py-7">
        <section className="mx-auto flex w-full max-w-3xl flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">应用偏好</h2>
            <p className="text-sm leading-6 text-muted-foreground">
              `/settings` 没有二级列表栏，直接由 `(app)/layout.tsx` 的
              `AppShell` 承载右侧内容。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-lg border bg-card p-4">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <section.icon />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium">{section.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
