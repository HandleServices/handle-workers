import React from 'react'

import { OrderCard } from '@/components/OrderCard'
import { OrderStatusEnum } from '@/types/enums/OrderStatusEnum'
import { Order } from '@/types/models/Order.model'

type OrderTabsContentProps = {
  orders: Order[]
  activeTab: OrderStatusEnum
}

const OrderTabsContent = ({ orders, activeTab }: OrderTabsContentProps) => {
  const filteredOrders = orders.filter((order) => {
    if (activeTab === OrderStatusEnum.FINISHED) {
      return (
        order.status === OrderStatusEnum.FINISHED ||
        order.status === OrderStatusEnum.CANCELED
      )
    }
    return order.status === activeTab
  })

  return (
    <div className="pt-8 flex flex-col gap-4 items-center mr-14">
      {filteredOrders.map((order) => (
        <OrderCard.Container key={order.id} variant={order.status}>
          <OrderCard.Header
            variant={order.status}
            data={{
              customer: {
                name: `${order.customer?.name}`,
                address: `${order.customer?.address}`,
              },
              dateTime: order.dateTime,
            }}
            value={order.value}
            setValue={() => null}
          />

          <OrderCard.Content variant={order.status}>
            <p className="text-[16px] font-light">
              {`${order.name} - ${new Date(order.dateTime).getHours()}h`}
            </p>
          </OrderCard.Content>

          <OrderCard.Footer variant={order.status} />
        </OrderCard.Container>
      ))}
    </div>
  )
}

export { OrderTabsContent }
