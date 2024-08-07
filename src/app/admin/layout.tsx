'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Bell from '@/components/Bell'
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
      <Sidebar />
      <div className="grid grid-rows-[75px_1fr]">
        <div className="grid grid-cols-[300px_1fr]">
          <div className="grid justify-start ml-12 mt-8 text-2xl font-bold text-handle-blue">
            {menuNames.find((e) => e.path === pathName)?.title}
          </div>
          <div className="flex flex-col pr-8">
            <div className="flex flex-row items-end justify-end justify-self-end self-end w-[50%]">
              <Bell />
              <Image
                src="/images/handlelogo.png"
                alt="handle icon"
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="pl-12 mt-5">{children}</div>
      </div>
    </div>
  )
}
