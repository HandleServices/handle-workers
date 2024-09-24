'use client'

import * as Tabs from '@radix-ui/react-tabs'
import React, { useEffect, useState } from 'react'

import { OrderStatusEnum } from '@/types/enums/OrderStatusEnum'
import { Order } from '@/types/models/Order.model'

import TabCircle from '../TabCircle'

const makeTabTriggerClassName = (isActive: boolean, color: string) => {
  return (
    `transition-all cursor-pointer h-full flex gap-2 rounded-sm font-semibold text-base items-center justify-center tracking-[0.2rem] ` +
    (isActive
      ? `${color} text-white shadow-md`
      : `bg-handle-gray-home text-handle-gray-icons hover:shadow`)
  )
}

const OrderTabsTriggers = ({ orders }: { orders: Order[] }) => {
  const [activeTab, setActiveTab] = useState<OrderStatusEnum>(
    OrderStatusEnum.PENDING,
  )
  const [notifications, setNotifications] = useState<{
    [key in OrderStatusEnum]?: boolean
  }>({
    [OrderStatusEnum.PENDING]: false,
    [OrderStatusEnum.OPEN]: false,
    [OrderStatusEnum.FINISHED]: false,
  })

  useEffect(() => {
    const savedNotifications = localStorage.getItem('notifications')
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications))
  }, [notifications])

  const hasNewNotifications = (status: OrderStatusEnum) => {
    const hasNew = orders.some((order) => order.status === status)
    return hasNew && !notifications[status]
  }

  const handleTabClick = (status: OrderStatusEnum) => {
    setActiveTab(status)
    setNotifications((prev) => ({
      ...prev,
      [status]: true,
    }))
  }

  return (
    <>
      <Tabs.Trigger
        value={OrderStatusEnum.PENDING}
        className={makeTabTriggerClassName(
          activeTab === OrderStatusEnum.PENDING,
          'bg-handle-green',
        )}
        onClick={() => handleTabClick(OrderStatusEnum.PENDING)}
      >
        Solicitações
        {hasNewNotifications(OrderStatusEnum.PENDING) && (
          <TabCircle color="bg-handle-green" className="ml-8" />
        )}
      </Tabs.Trigger>
      <Tabs.Trigger
        value={OrderStatusEnum.OPEN}
        className={makeTabTriggerClassName(
          activeTab === OrderStatusEnum.OPEN,
          'bg-handle-blue',
        )}
        onClick={() => handleTabClick(OrderStatusEnum.OPEN)}
      >
        Em aberto
        {hasNewNotifications(OrderStatusEnum.OPEN) && (
          <TabCircle color="bg-handle-blue" className="ml-8" />
        )}
      </Tabs.Trigger>
      <Tabs.Trigger
        value={OrderStatusEnum.FINISHED}
        className={makeTabTriggerClassName(
          activeTab === OrderStatusEnum.FINISHED,
          'bg-handle-red',
        )}
        onClick={() => handleTabClick(OrderStatusEnum.FINISHED)}
      >
        Finalizados
        {hasNewNotifications(OrderStatusEnum.FINISHED) && (
          <TabCircle color="bg-handle-red" className="ml-8" />
        )}
      </Tabs.Trigger>
    </>
  )
}

export { OrderTabsTriggers }
