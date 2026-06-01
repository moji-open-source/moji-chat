'use client'

import Link from 'next/link'

import type { LucideIcon } from 'lucide-react'
import { MessageSquare, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { OpenSettingsButton } from '@/features/settings'
import { cn } from '@/lib/utils'

interface Props {
  pathname?: string
}

const primaryNavItems = [
  {
    title: 'Messages',
    href: '/messages',
    icon: MessageSquare,
  },
  {
    title: 'Contacts',
    href: '/contacts',
    icon: Users,
  },
] as const

const ACTIVE_CLASS_NAME =
  'border border-solid border-sidebar-border bg-sidebar-primary/20 text-primary'
const HOVER_CLASS_NAME =
  'hover:border hover:border-solid hover:border-primary/25 hover:bg-sidebar-primary/20 hover:text-primary'

function isActivePath(href: string, pathname?: string) {
  const pathnameTrim = pathname?.trim()

  return (
    pathnameTrim === href || (pathnameTrim?.startsWith(`${href}/`) ?? false)
  )
}

export function Sidebar({ pathname }: Props) {
  return (
    <aside
      data-tauri-drag-region
      className="flex w-14 shrink-0 flex-col items-center bg-sidebar/84 px-2 py-2 pt-14 text-sidebar-foreground"
    >
      <nav
        data-tauri-drag-region
        className="flex flex-1 flex-col items-center gap-1"
      >
        {primaryNavItems.map((item) => (
          <SidebarNavItem
            key={item.href}
            active={isActivePath(item.href, pathname)}
            href={item.href}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </nav>

      <div className="flex flex-col items-center gap-1">
        <OpenSettingsButton />

        <div className="relative">
          <div
            className="flex size-8 shrink-0 select-none items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-indigo-600 text-xs font-semibold text-white"
            style={{
              boxShadow:
                'rgba(255, 255, 255, 0.25) 0px 1px 0px inset, rgba(0, 0, 0, 0.35) 0px 2px 8px',
            }}
          >
            YO
          </div>
          <span className="absolute -bottom-0.5 -right-0.5">
            <span
              className="block size-2.75 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(11,11,18,0.9)]"
            />
          </span>
        </div>
      </div>
    </aside>
  )
}

interface SidebarNavItemProps {
  active: boolean
  href: string
  title: string
  icon: LucideIcon
}

function SidebarNavItem({
  active,
  href,
  title,
  icon: Icon,
}: SidebarNavItemProps) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      title={title}
      aria-label={title}
      className={cn(
        'size-10 rounded-lg text-sidebar-accent-foreground',
        HOVER_CLASS_NAME,
        active && ACTIVE_CLASS_NAME,
      )}
    >
      <Link draggable="false" href={href}>
        <Icon />
      </Link>
    </Button>
  )
}
