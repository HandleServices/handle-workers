'use client'
import Sidebar from '@/components/Sidebar'

export default function CompleteRegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-handle-background-intern h-full">
      <Sidebar>{children}</Sidebar>
    </div>
  )
}
