import * as Tabs from '@radix-ui/react-tabs'
import React, { useState } from 'react'

import { ServiceStateEnum } from '@/types/enums/ServiceStateEnum'

import TabCircle from './components/TabCircle'

type Cards = {
  id: number
}

type TabProps = {
  name: string
  value: ServiceStateEnum
  color: string
  data: Cards[]
}

export interface ServiceTabsProps {
  services?: Map<ServiceStateEnum, Cards[]>
  filter?: string | null
}

// TO-DO: makes the filter logic
const ServiceTabs = ({ services }: ServiceTabsProps) => {
  const [activeTab, setActiveTab] = useState<ServiceStateEnum>(
    ServiceStateEnum.PENDING,
  )

  const tabs: TabProps[] = [
    {
      name: 'Solicitações',
      value: ServiceStateEnum.PENDING,
      color: 'bg-handle-green',
      data: services?.get(ServiceStateEnum.PENDING) || [{ id: 1 }, { id: 2 }],
    },
    {
      name: 'Em aberto',
      value: ServiceStateEnum.OPEN,
      color: 'bg-handle-blue',
      data: services?.get(ServiceStateEnum.OPEN) || [{ id: 3 }, { id: 4 }],
    },
    {
      name: 'Finalizados',
      value: ServiceStateEnum.CLOSED,
      color: 'bg-handle-red',
      data: services?.get(ServiceStateEnum.CLOSED) || [{ id: 5 }, { id: 6 }],
    },
  ]

  const makeTabTriggerClassName = (tab: TabProps) => {
    return (
      `transition-all cursor-pointer h-full flex gap-2 rounded-sm font-semibold text-base items-center justify-center tracking-[0.2rem] ` +
      (activeTab === tab.value
        ? `${tab.color} text-white shadow-md`
        : `bg-handle-gray-home text-handle-gray-icons hover:shadow`)
    )
  }

  return (
    <Tabs.Root defaultValue="Solicitações">
      <Tabs.List className="border-2 rounded-sm h-8 mr-12 bg-handle-gray-home grid grid-cols-3 grid-rows-1 items-center justify-center">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className={makeTabTriggerClassName(tab)}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.name}
            {tab.data.length > 0 && activeTab !== tab.value && (
              <TabCircle color={tab.color} className="ml-8" />
            )}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content key={tab.value} value={tab.value}>
          {tab.data.map((card) => (
            <div key={card.id}>{card.id}</div> // TO-DO: Render cards here
          ))}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

export { ServiceTabs }
