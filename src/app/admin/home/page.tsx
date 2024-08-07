'use client'

import React from 'react'

import Search from '@/components/Search'
import ServiceTabs from '@/components/ServiceTabs'
import { ServiceStatusEnum } from '@/types/enums/ServiceStatusEnum'
import { Service } from '@/types/models/Service.model'

import { CardsMock } from './utils/cards-mock'

const Home = () => {
  const search = (value: string) => {
    console.log(value)
  }

  const servicesMap = new Map<ServiceStatusEnum, Service[]>(
    Object.entries(CardsMock) as [ServiceStatusEnum, Service[]][],
  )

  return (
    <div>
      <Search
        onSearch={search}
        placeholder="Pesquisar"
        className="w-[97.7%] mr-12 mb-10"
      />
      <ServiceTabs services={servicesMap} />
    </div>
  )
}

export default Home
