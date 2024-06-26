'use client'

import React, { useState } from 'react'

import { AboutIcon } from './assets/about-icon'
import { ArrowIcon } from './assets/arrow-icon'
import { CalendarIcon } from './assets/calendar-icon'
import { HomeIcon } from './assets/home-icon'
import { ServicesIcon } from './assets/services-icon'
import { SettingsIcon } from './assets/settings-icon'
import { WalletIcon } from './assets/wallet-icon'
import SidebarItem from './components/SidebarItem'

export interface SidebarProps {
  children: React.ReactNode
}

export interface ISidebarItem {
  name: string
  icon: React.ElementType
  path: string
}

const Sidebar = ({ children }: SidebarProps) => {
  const [open, setOpen] = useState(true)

  const TopMenus: ISidebarItem[] = [
    {
      name: 'Início',
      icon: HomeIcon,
      path: 'home',
    },
    {
      name: 'Agenda',
      icon: CalendarIcon,
      path: 'calendar',
    },
    {
      name: 'Meus Serviços',
      icon: ServicesIcon,
      path: 'services',
    },
    {
      name: 'Carteira',
      icon: WalletIcon,
      path: 'wallet',
    },
  ]

  const BottomMenus: ISidebarItem[] = [
    {
      name: 'Configurações',
      icon: SettingsIcon,
      path: 'settings',
    },
    {
      name: 'Sobre',
      icon: AboutIcon,
      path: 'about',
    },
  ]

  return (
    <aside className="flex z-50">
      <div
        className={`${open ? 'w-72 open' : 'w-24 close'} rounded-r-lg h-screen relative bg-white border-r shadow-xl p-0 duration-300`}
      >
        <ArrowIcon
          onClick={() => {
            setOpen(!open)
          }}
          className={`arrow ${open && '-rotate-180'} duration-300 -right-3 top-8 absolute cursor-pointer rounded-full bg-handle-blue shadow-2xl p-1`}
        />

        <div className="flex pl-10 pt-10">
          <h3 className={`${!open ? 'hidden' : ''} font-medium text-base`}>
            bem-vindo, Marcos
          </h3>
        </div>

        <div className={` ${open ? 'my-14' : ''} flex flex-col`}>
          <span className="text-handle-gray-icons text-lg pl-10 py-10">
            Principais
          </span>
          <ul className="flex-1">
            {TopMenus.map((menu, index) => (
              <SidebarItem menu={menu} key={index} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <span className="text-handle-gray-icons text-lg pl-10 py-5">
            Outros
          </span>
          <ul className="flex-1">
            {BottomMenus.map((menu, index) => (
              <SidebarItem menu={menu} key={index} />
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1 h-screen ml-12 py-8">{children}</div>
    </aside>
  )
}

export { Sidebar }
