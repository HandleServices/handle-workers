import React from 'react'
import useSWR from 'swr'

import { fetchServices } from '@/app/admin/home/utils/cards-mock'
import Skeleton from '@/components/Skeleton'

import { ServiceTabs } from '../../ServiceTabs'

const ServiceTabsFetcher = () => {
  const {
    data: services = [],
    error,
    isLoading,
  } = useSWR('getServices', fetchServices)

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-5">
        <Skeleton className="h-8 mr-6" />
        <div className="space-y-3">
          <Skeleton className="h-48 rounded-xl mr-6" />
          <Skeleton className="h-48 rounded-xl mr-6" />
        </div>
      </div>
    )
  }

  if (error) {
    return <div>Error loading services.</div>
  }

  return <ServiceTabs services={services} />
}

export { ServiceTabsFetcher }
