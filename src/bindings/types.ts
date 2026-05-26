// Types mirroring Rust models. Keep in sync with src-tauri/src/models/.

// ── Auth ──────────────────────────────────────────────────────────────────

export interface LoginParams {
  account: string
  password: string
}

export interface LoginResponse {
  token: string
  userId: string
}

// ── Contact ───────────────────────────────────────────────────────────────

export interface Contact {
  id: string
  name: string
  handle: string
  title: string
  status: string
  online: boolean
}

// ── Conversation ──────────────────────────────────────────────────────────

export interface Conversation {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  pinned: boolean
  online: boolean
  typing?: boolean
}

export interface Message {
  id: string
  sender: 'me' | 'other'
  text: string
  time: string
}

// ── Error ─────────────────────────────────────────────────────────────────

export interface AppError {
  kind: string
  message: string
}
