import '../styles/globals.css'

import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
        <div className={twMerge(manrope.className, 'min-h-screen w-screen')}>
          {children}
        </div>
      </body>
    </html>
  )
}
