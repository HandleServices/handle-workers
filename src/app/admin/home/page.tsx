'use client'

import * as Separator from '@radix-ui/react-separator'
import * as Tabs from '@radix-ui/react-tabs'
import React, { useState } from 'react'

import Input from '@/components/Input'

import SearchIcon from './assets/SearchIcon'

// Change this after.
type Cards = {
  id: number
}

type tab = {
  name: string
  color: string
  data: Cards[]
}

const Home = () => {
  const [activeTab, setActiveTab] = useState('Solicitações')
  const [search, setSearch] = useState('')
  const [tabData] = useState<Map<string, Cards[]>>(new Map()) // FIX: Insert setTabData

  // TODO: Make logic to each tab data here.
  const tabs: tab[] = [
    {
      name: 'Solicitações',
      color: 'bg-handle-green',
      data: tabData.get('Solicitações') || [
        {
          id: 1,
        },
      ],
    },
    {
      name: 'Em aberto',
      color: 'bg-handle-blue',
      data: tabData.get('Em aberto') || [],
    },
    {
      name: 'Finalizados',
      color: 'bg-handle-red',
      data: tabData.get('Finalizados') || [],
    },
  ]

  type TabCircleProps = { color: string; className?: string }

  const TabCircle = ({ color, className }: TabCircleProps) => {
    return <div className={`h-4 w-4 rounded-full ${color} ${className}`} />
  }

  const makeTabTriggerClassName = (tab: tab) => {
    return (
      `transition-all cursor-pointer h-full flex gap-2 rounded-sm font-semibold text-base items-center justify-center tracking-[0.2rem] ` +
      (activeTab === tab.name
        ? `${tab.color} text-white shadow-md`
        : `bg-handle-gray-home text-handle-gray-icons hover:shadow`)
    )
  }

  return (
    <div>
      <div className="grid grid-cols-[0.95fr_0.05fr] w-[97.7%] mr-12 mb-12">
        <input
          className="bg-handle-background-intern p-2 border-handle-gray-icons border-1.5 border-r-0 rounded-md rounded-r-none"
          placeholder="Pesquisar"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className="flex border-y-handle-gray border-y-1.5 gap-2 border-r-handle-gray border-r-1.5 rounded-r-md p-2 items-center justify-center">
          <Separator.Root className="h-8 w-[0.5px] bg-handle-gray" />
          <SearchIcon width={16} height={16} className="ml-2" />
        </div>
      </div>
      <Tabs.Root defaultValue="Solicitações">
        <Tabs.List className="border-2 rounded-sm h-8 mr-12 bg-handle-gray-home grid grid-cols-3 grid-rows-1 items-center justify-center">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.name}
              value={tab.name}
              className={makeTabTriggerClassName(tab)}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
              {tab.data.length > 0 && (
                <TabCircle color={tab.color} className="ml-8" />
              )}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {
          // <Tabs.Content value="Solicitações">{tabs.map(tab => tab.data.filter(data => data.includes(search)))}</Tabs.Content> example of content
        }
      </Tabs.Root>
    </div>
  )
}

export default Home
