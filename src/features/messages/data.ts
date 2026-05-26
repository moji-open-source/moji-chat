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
  sender: 'me' | 'other'
  text: string
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
  c1: [
    { id: 'c1', sender: 'other', text: 'Hey! Did you get a chance to look at the new designs?', time: '2:08 PM' },
    { id: 'c1', sender: 'me', text: 'Just opened them now — the color palette is stunning', time: '2:09 PM' },
    { id: 'c1', sender: 'other', text: 'Thanks! I went with a darker base this time. Felt more premium.', time: '2:10 PM' },
    { id: 'c1', sender: 'me', text: 'It really shows. The purple accent works perfectly against it.', time: '2:11 PM' },
    { id: 'c1', sender: 'other', text: 'Exactly what I was going for 🎨 Also tweaked the typography — switched to Inter.', time: '2:12 PM' },
    { id: 'c1', sender: 'me', text: 'Smart call. Readable and modern without being generic.', time: '2:13 PM' },
    { id: 'c1', sender: 'other', text: 'Sent you the Figma file! Let me know what you think 🎨', time: '2:14 PM' },
  ],
}

export function getConversation(id: string) {
  return conversations.find((conversation) => conversation.id === id)
}

export function getConversationMessages(id: string) {
  return messagesByConversation[id] ?? []
}
