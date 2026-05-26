export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  pinned: boolean;
  online: boolean;
  typing?: boolean;
}

export interface Message {
  id: string
  author: 'me' | 'them'
  body: string
  time: string
}

export const conversations: Conversation[] = [
  {
    id: 'c1',
    name: 'Aria Chen',
    avatar: 'AC',
    lastMessage: 'Sent you the Figma file! Let me know what you think 🎨',
    time: 'now',
    unread: 3,
    pinned: true,
    online: true,
    typing: false,
  },
  {
    id: 'c2',
    name: 'Design Team',
    avatar: 'DT',
    lastMessage: 'Kai: Sprint review is at 4pm today',
    time: '2m',
    unread: 7,
    pinned: true,
    online: true,
  },
  {
    id: 'c3',
    name: 'Kai Nakamura',
    avatar: 'KN',
    lastMessage: 'yeah that PR looks good to merge',
    time: '18m',
    unread: 0,
    pinned: false,
    online: true,
    typing: true,
  },
  {
    id: 'c4',
    name: 'Zoe Laurent',
    avatar: 'ZL',
    lastMessage: 'Revised the logo — check your email',
    time: '1h',
    unread: 1,
    pinned: false,
    online: false,
  },
  {
    id: 'c5',
    name: 'Marcus Webb',
    avatar: 'MW',
    lastMessage: 'Deployment is live ✅',
    time: '3h',
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 'c6',
    name: 'Sasha Petrov',
    avatar: 'SP',
    lastMessage: 'Can we hop on a call tomorrow?',
    time: 'Yesterday',
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 'c7',
    name: 'Lena Hoffman',
    avatar: 'LH',
    lastMessage: 'Here are the model benchmarks you asked about',
    time: '2d',
    unread: 0,
    pinned: false,
    online: true,
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
