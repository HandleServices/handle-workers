'use client'

import * as Tabs from '@radix-ui/react-tabs'
import React, { useEffect, useState } from 'react'

import { ServiceStatusEnum } from '@/types/enums/ServiceStatusEnum'
import { Service } from '@/types/models/Service.model'

import TabCircle from '../TabCircle'

const makeTabTriggerClassName = (isActive: boolean, color: string) => {
  return (
    `transition-all cursor-pointer h-full flex gap-2 rounded-sm font-semibold text-base items-center justify-center tracking-[0.2rem] ` +
    (isActive
      ? `${color} text-white shadow-md`
      : `bg-handle-gray-home text-handle-gray-icons hover:shadow`)
  )
}

const ServiceTabsTriggers = ({ services }: { services: Service[] }) => {
  const [activeTab, setActiveTab] = useState<ServiceStatusEnum>(
    ServiceStatusEnum.PENDING,
  )
  const [notifications, setNotifications] = useState<{
    [key in ServiceStatusEnum]?: boolean
  }>({
    [ServiceStatusEnum.PENDING]: false,
    [ServiceStatusEnum.OPEN]: false,
    [ServiceStatusEnum.FINISHED]: false,
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

  const hasNewNotifications = (status: ServiceStatusEnum) => {
    const hasNew = services.some((service) => service.status === status)
    return hasNew && !notifications[status]
  }

  const handleTabClick = (status: ServiceStatusEnum) => {
    setActiveTab(status)
    setNotifications((prev) => ({
      ...prev,
      [status]: true,
    }))
  }

  return (
    <>
      <Tabs.Trigger
        value={ServiceStatusEnum.PENDING}
        className={makeTabTriggerClassName(
          activeTab === ServiceStatusEnum.PENDING,
          'bg-handle-green',
        )}
        onClick={() => handleTabClick(ServiceStatusEnum.PENDING)}
      >
        Solicitações
        {hasNewNotifications(ServiceStatusEnum.PENDING) && (
          <TabCircle color="bg-handle-green" className="ml-8" />
        )}
      </Tabs.Trigger>
      <Tabs.Trigger
        value={ServiceStatusEnum.OPEN}
        className={makeTabTriggerClassName(
          activeTab === ServiceStatusEnum.OPEN,
          'bg-handle-blue',
        )}
        onClick={() => handleTabClick(ServiceStatusEnum.OPEN)}
      >
        Em aberto
        {hasNewNotifications(ServiceStatusEnum.OPEN) && (
          <TabCircle color="bg-handle-blue" className="ml-8" />
        )}
      </Tabs.Trigger>
      <Tabs.Trigger
        value={ServiceStatusEnum.FINISHED}
        className={makeTabTriggerClassName(
          activeTab === ServiceStatusEnum.FINISHED,
          'bg-handle-red',
        )}
        onClick={() => handleTabClick(ServiceStatusEnum.FINISHED)}
      >
        Finalizados
        {hasNewNotifications(ServiceStatusEnum.FINISHED) && (
          <TabCircle color="bg-handle-red" className="ml-8" />
        )}
      </Tabs.Trigger>
    </>
  )
}

export { ServiceTabsTriggers }
