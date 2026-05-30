import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib'
import { WinDisplayController } from '@/components/win-display-controller'
import { NativeBehavior } from '@/components/native-behavior'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moji Chat',
  description: 'A desktop-first chat workspace built with Next.js and Tauri.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark overflow-hidden" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
      <WinDisplayController />
      <NativeBehavior />
    </html>
  )
}
