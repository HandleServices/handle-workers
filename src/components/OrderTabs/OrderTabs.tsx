import * as Tabs from '@radix-ui/react-tabs'
import React from 'react'

import { OrderStatusEnum } from '@/types/enums/OrderStatusEnum'
import { Order } from '@/types/models/Order.model'

import OrderTabsContent from './components/OrderTabsContent'
import OrderTabsTriggers from './components/OrderTabsTriggers'

const OrderTabs = ({ orders }: { orders: Order[] }) => {
  return (
    <Tabs.Root defaultValue={OrderStatusEnum.PENDING}>
      <Tabs.List className="border-2 rounded-sm h-8 mr-12 bg-handle-gray-home grid grid-cols-3 grid-rows-1 items-center justify-center">
        <OrderTabsTriggers orders={orders} />
      </Tabs.List>
      <Tabs.Content value={OrderStatusEnum.PENDING}>
        <OrderTabsContent orders={orders} activeTab={OrderStatusEnum.PENDING} />
      </Tabs.Content>
      <Tabs.Content value={OrderStatusEnum.OPEN}>
        <OrderTabsContent orders={orders} activeTab={OrderStatusEnum.OPEN} />
      </Tabs.Content>
      <Tabs.Content value={OrderStatusEnum.FINISHED}>
        <OrderTabsContent
          orders={orders}
          activeTab={OrderStatusEnum.FINISHED}
        />
      </Tabs.Content>
    </Tabs.Root>
  )
}

export { OrderTabs }
