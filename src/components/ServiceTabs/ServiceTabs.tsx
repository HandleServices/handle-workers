import * as Tabs from '@radix-ui/react-tabs'
import React, { useState } from 'react'

import { ServiceStatusEnum } from '@/types/enums/ServiceStatusEnum'
import { Service } from '@/types/models/Service.model'

import { ServiceCard } from '../ServiceCard'
import TabCircle from './components/TabCircle'

type TabProps = {
  name: string
  value: ServiceStatusEnum
  color: string
  data: Service[]
}

export interface ServiceTabsProps {
  services?: Map<ServiceStatusEnum, Service[]>
  filter?: string | null
}

// TO-DO: makes the filter logic
const ServiceTabs = ({ services }: ServiceTabsProps) => {
  const [activeTab, setActiveTab] = useState<ServiceStatusEnum>(
    ServiceStatusEnum.PENDING,
  )

  const tabs: TabProps[] = [
    {
      name: 'Solicitações',
      value: ServiceStatusEnum.PENDING,
      color: 'bg-handle-green',
      data: services?.get(ServiceStatusEnum.PENDING) || [],
    },
    {
      name: 'Em aberto',
      value: ServiceStatusEnum.OPEN,
      color: 'bg-handle-blue',
      data: services?.get(ServiceStatusEnum.OPEN) || [],
    },
    {
      name: 'Finalizados',
      value: ServiceStatusEnum.FINISHED,
      color: 'bg-handle-red',
      data: [
        ...(services?.get(ServiceStatusEnum.FINISHED) || []),
        ...(services?.get(ServiceStatusEnum.CANCELED) || []),
      ],
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

  const [value, setValue] = useState(100.0) // TO-DO: make change value logic

  const formatServiceDetails = (name: string, dateTime: Date): string => {
    const hours = Math.floor(dateTime.getTime() / (1000 * 60 * 60)) % 24
    return `${name} - ${hours}h`
  }

  return (
    <Tabs.Root defaultValue={ServiceStatusEnum.PENDING}>
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
          <div
            key={tab.value}
            className="pt-8 flex flex-col gap-4 items-center mr-14"
          >
            {tab.data.map((service) => (
              <ServiceCard.Container key={service.id} variant={service.status}>
                <ServiceCard.Header
                  variant={service.status}
                  data={{
                    customer: {
                      name: `${service.customer?.name}`,
                      address: `${service.customer?.address}`,
                    },
                    dateTime: service.dateTime,
                  }}
                  value={service.value}
                  setValue={setValue}
                />

                <ServiceCard.Content variant={service.status}>
                  <p className="text-[16px] font-light">
                    {formatServiceDetails(service.name, service.dateTime)}
                  </p>
                </ServiceCard.Content>

                <ServiceCard.Footer variant={service.status} />
              </ServiceCard.Container>
            ))}
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

export { ServiceTabs }
