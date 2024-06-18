'use client'
import { usePathname } from 'next/navigation'

import Sidebar from '@/components/Sidebar'
import { BottomMenus, TopMenus } from '@/components/Sidebar/Sidebar'

const menuNames = [...BottomMenus, ...TopMenus]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname().split('/')[2]
  return (
    <div className="bg-handle-background-intern h-full grid grid-cols-[auto_1fr]">
      <Sidebar>{children}</Sidebar>
      <div className="grid grid-rows-[75px_1fr]">
        <div className="grid grid-cols-[300px_1fr]">
          <div className="grid justify-start ml-12 mt-8 text-2xl font-bold text-handle-blue">
            {menuNames.find((e) => e.path === pathName)?.name}
          </div>
          <div>
            {
              // Notification Component
            }
          </div>
        </div>
        <div className="pl-12">{children}</div>
      </div>
    </div>
  )
}
