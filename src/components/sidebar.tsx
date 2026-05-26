'use client'

import Link from 'next/link'

import { Users, MessageSquare, Settings } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React, { DOMAttributes } from 'react'

interface Props {
  pathname?: string;
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

function isActivePath(href: string, pathname?: string) {
  const pathnameTrim = pathname?.trim()
  return (
    pathnameTrim === href || (pathnameTrim?.startsWith(`${href}/`) ?? false)
  )
}

export function Sidebar({ pathname }: Props) {
  return (
    <>
      <aside
        data-tauri-drag-region
        className="flex w-14 shrink-0 flex-col items-center border-r bg-sidebar px-2 py-2 text-sidebar-foreground pt-14"
      >
        <nav
          data-tauri-drag-region
          className="flex flex-1 flex-col items-center gap-1"
        >
          {primaryNavItems.map((item) => {
            const active = isActivePath(item.href, pathname)
            return (
              <SidebarItem
                key={item.href}
                active={active}
                href={item.href}
                title={item.title}
                icon={item.icon}
              />
            )
          })}
        </nav>

        <div className="flex flex-col items-center gap-1">
          <SidebarItem active={false} title="settings" icon={Settings} />

          <div className="relative">
            <div
              className="size-8 text-xs rounded-full bg-linear-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-semibold text-white shrink-0 select-none"
              style={{
                boxShadow:
                  'rgba(255, 255, 255, 0.25) 0px 1px 0px inset, rgba(0, 0, 0, 0.35) 0px 2px 8px;',
              }}
            >
              YO
            </div>
            <span className="absolute -bottom-0.5 -right-0.5">
              <span
                className="w-2.75 rounded-full shrink-0 block"
                style={{
                  background: 'rgb(52, 211, 153)',
                  boxShadow: 'rgba(11, 11, 18, 0.9) 0px 0px 0px 2px',
                }}
              ></span>
            </span>
          </div>
        </div>
      </aside>
    </>
  )
}

const ACTIVE_CLASS_NAME =
  'bg-sidebar-primary/20 text-[rgba(167,139,250,0.9)] border-sidebar-border border-solid border'
const HOVER_CLASS_NAME =
  'hover:bg-sidebar-primary/20 hover:text-[rgba(167,139,250,0.9)] hover:border-primary/25 hover:border-solid hover:border'

interface SidebarItemProps {
  active: boolean;
  href?: string;
  title: string;
  icon: React.FunctionComponent;
}

function SidebarItem({
  active,
  href,
  title,
  icon: Icon,
  ...props
}: SidebarItemProps & DOMAttributes<HTMLButtonElement>) {
  return (
    <Button
      asChild
      variant={'ghost'}
      size="icon"
      title={title}
      aria-label={title}
      className={cn(
        'size-10 rounded-lg text-sidebar-accent-foreground [&_svg]:size-4.75',
        HOVER_CLASS_NAME,
        active && ACTIVE_CLASS_NAME,
      )}
      {...props}
    >
      <Link href={href ?? '#'}>
        <Icon />
      </Link>
    </Button>
  )
}
