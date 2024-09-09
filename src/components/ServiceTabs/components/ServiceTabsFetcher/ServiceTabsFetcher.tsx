import React from 'react'
import useSWR from 'swr'

import { fetchServices } from '@/app/admin/home/utils/cards-mock'

import ServiceTabs from '../ServiceTabs'

const ServiceTabsFetcher = () => {
  const {
    data: services = [],
    error,
    isLoading,
  } = useSWR('getServices', fetchServices)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading services.</div>
  }

  return <ServiceTabs services={services} />
}

export { ServiceTabsFetcher }
