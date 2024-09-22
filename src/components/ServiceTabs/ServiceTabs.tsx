import * as Tabs from '@radix-ui/react-tabs'
import React from 'react'

import { ServiceStatusEnum } from '@/types/enums/ServiceStatusEnum'
import { Service } from '@/types/models/Service.model'

import ServiceTabsContent from './components/ServiceTabsContent'
import ServiceTabsTriggers from './components/ServiceTabsTriggers'

const ServiceTabs = ({ services }: { services: Service[] }) => {
  return (
    <Tabs.Root defaultValue={ServiceStatusEnum.PENDING}>
      <Tabs.List className="border-2 rounded-sm h-8 mr-12 bg-handle-gray-home grid grid-cols-3 grid-rows-1 items-center justify-center">
        <ServiceTabsTriggers services={services} />
      </Tabs.List>
      <Tabs.Content value={ServiceStatusEnum.PENDING}>
        <ServiceTabsContent
          services={services}
          activeTab={ServiceStatusEnum.PENDING}
        />
      </Tabs.Content>
      <Tabs.Content value={ServiceStatusEnum.OPEN}>
        <ServiceTabsContent
          services={services}
          activeTab={ServiceStatusEnum.OPEN}
        />
      </Tabs.Content>
      <Tabs.Content value={ServiceStatusEnum.FINISHED}>
        <ServiceTabsContent
          services={services}
          activeTab={ServiceStatusEnum.FINISHED}
        />
      </Tabs.Content>
    </Tabs.Root>
  )
}

export { ServiceTabs }
