import '../styles/globals.css'

import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { twMerge } from 'tailwind-merge'

import { AuthProvider } from '@/contexts/AuthContext'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Handle Workers',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        <div className={twMerge(manrope.className, 'min-h-screen w-screen')}>
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  )
}
