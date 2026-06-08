import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raynote - Cross-Device Notes for Students',
  description: 'Capture lecture notes on any device and access them instantly anywhere. No formatting loss, no sync delays.',
  keywords: ['notes', 'student', 'cross-device', 'sync', 'lecture'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
