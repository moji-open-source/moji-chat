import type { Metadata } from 'next'

import { LoginScene } from '@/features/login'

export const metadata: Metadata = {
  title: 'Login | Moji Chat',
  description: 'Sign in to Moji Chat and continue your desktop conversation workspace.',
}

export default function LoginPage() {
  return <LoginScene />
}
