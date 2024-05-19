'use client'

import './sidebar-item.styles.css'

import { usePathname, useRouter } from 'next/navigation'
import React, { useMemo } from 'react'

export interface ISidebarItem {
  name: string
  icon: React.ElementType
  path: string
}

const SidebarItem = ({ menu }: { menu: ISidebarItem }) => {
  const { name, icon: Icon, path } = menu

  const router = useRouter()
  const pathName = usePathname()

  const handleChangePath = () => {
    router.push(path)
  }

  const isActive = useMemo(() => {
    return `/admin/${path}` === pathName
  }, [path, pathName])

  return (
    <li>
      <div
        className={`sidebar-item pl-10 flex gap-5 items-center py-5 cursor-pointer [&:not(.active)]:hover:text-handle-hover-blue [&:not(.active)]:hover:font-medium font-normal ${isActive ? 'active text-handle-blue bg-handle-background-blue border-r-[2.5px] border-handle-blue' : 'text-handle-gray-icons'}`}
        onClick={handleChangePath}
      >
        <div className="icon-wrapper">
          <Icon className="w-5 h-5 icon duration-200" />
        </div>
        <span>{name}</span>
        <div className="tag absolute left-full rounded-md p-2 ml-6 bg-handle-background-blue text-md invisible opacity-20 transition-opacity duration-200">
          {name}
        </div>
      </div>
    </li>
  )
}

export { SidebarItem }
