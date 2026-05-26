export interface Contact {
  id: string
  name: string
  handle: string
  title: string
  status: string
  online?: boolean
}

export const contacts: Contact[] = [
  {
    id: 'lin',
    name: '林澈',
    handle: '@lin',
    title: '产品设计',
    status: '正在整理首页信息架构',
    online: true,
  },
  {
    id: 'mika',
    name: 'Mika',
    handle: '@mika',
    title: '前端工程',
    status: '今天会处理布局路由',
    online: true,
  },
  {
    id: 'chen',
    name: '陈予安',
    handle: '@chen',
    title: '后端工程',
    status: 'Tauri command 联调中',
  },
  {
    id: 'workspace-bot',
    name: 'Workspace Bot',
    handle: '@workspace-bot',
    title: '系统助手',
    status: '可以接收自动化通知',
  },
]

export function getContact(id: string) {
  return contacts.find((contact) => contact.id === id)
}
