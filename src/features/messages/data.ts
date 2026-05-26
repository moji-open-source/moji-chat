export interface Conversation {
  id: string
  name: string
  preview: string
  time: string
  unread?: number
  pinned?: boolean
  online?: boolean
}

export interface Message {
  id: string
  author: 'me' | 'them'
  body: string
  time: string
}

export const conversations: Conversation[] = [
  {
    id: 'design-sync',
    name: '产品设计同步',
    preview: '主页结构可以先稳定下来，后续再接数据。',
    time: '00:42',
    unread: 2,
    pinned: true,
    online: true,
  },
  {
    id: 'tauri-core',
    name: 'Tauri Core',
    preview: '窗口命令已经预留，下一步可以接登录态。',
    time: '昨天',
    pinned: true,
  },
  {
    id: 'frontend-room',
    name: '前端小组',
    preview: '联系人页也走同一套三栏结构。',
    time: '周一',
    unread: 5,
    online: true,
  },
  {
    id: 'notes',
    name: '灵感草稿',
    preview: '这里可以放自己发给自己的消息和 Prompt 片段。',
    time: '5月24日',
  },
]

export const messagesByConversation: Record<string, Message[]> = {
  'design-sync': [
    {
      id: 'm1',
      author: 'them',
      body: '我把主导航、列表栏和详情区拆开了，路由会更清楚。',
      time: '00:34',
    },
    {
      id: 'm2',
      author: 'me',
      body: '很好，消息页和联系人页都可以用自己的 layout 承载列表。',
      time: '00:38',
    },
    {
      id: 'm3',
      author: 'them',
      body: '设置页这种只有两个区域的内容，就直接放在 AppShell 右侧。',
      time: '00:42',
    },
  ],
  'tauri-core': [
    {
      id: 'm1',
      author: 'them',
      body: 'Tauri 窗口拖拽区域保留在最外层，内容区只管业务。',
      time: '昨天',
    },
  ],
  'frontend-room': [
    {
      id: 'm1',
      author: 'me',
      body: '下一步可以把会话列表里的搜索、置顶、未读做成客户端组件。',
      time: '周一',
    },
  ],
  notes: [
    {
      id: 'm1',
      author: 'me',
      body: '把当前选中的会话放进 URL，而不是只放进全局 store。',
      time: '5月24日',
    },
  ],
}

export function getConversation(id: string) {
  return conversations.find((conversation) => conversation.id === id)
}

export function getConversationMessages(id: string) {
  return messagesByConversation[id] ?? []
}
