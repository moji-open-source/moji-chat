'use client'

import { type LucideIcon } from 'lucide-react'

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    suffix?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { state } = useSidebar()

  function isCollapsed() {
    return state === 'collapsed'
  }

  return (
    <SidebarGroup>
      <SidebarMenu className={isCollapsed() ? 'items-center' : undefined}>
        {items.map((item) => (
          <SidebarMenuButton tooltip={item.title} key={item.title}>
            {item.icon && <item.icon className="size-10" />}
            <span>{item.title}</span>
            {item.suffix && <item.suffix />}
          </SidebarMenuButton>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
