'use client'

import * as React from 'react'
import {
  AudioWaveform,
  Command,
  ContactRound,
  GalleryVerticalEnd,
  MessageSquareText,
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Messages',
      url: '/',
      icon: MessageSquareText,
      isActive: true,
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: ContactRound,
      isActive: false,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar data-tauri-drag-region collapsible="icon" {...props} className="p-1.25 pr-0 border-none *:data-[sidebar='sidebar']:rounded-[1.3rem] *:data-[sidebar='sidebar']:border *:data-[sidebar='sidebar']:border-white/10">
      <SidebarHeader data-tauri-drag-region>
        {/* <TeamSwitcher teams={data.teams} /> */}
        {/* hello world */}
      </SidebarHeader>
      <SidebarContent data-tauri-drag-region>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter data-tauri-drag-region>
        <NavUser user={data.user} data-tauri-drag-region />
      </SidebarFooter>
      {/* <SidebarRail data-tauri-drag-region /> */}
    </Sidebar>
  )
}
