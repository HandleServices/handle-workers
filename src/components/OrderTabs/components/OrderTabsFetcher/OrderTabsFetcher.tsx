import React from 'react'
import useSWR from 'swr'

import { fetchOrders } from '@/app/admin/home/utils/cards-mock'
import Skeleton from '@/components/Skeleton'
import { ErrorType } from '@/types/enums/ErrorType'
import errorHandler from '@/utils/err/errorHandler'

import { OrderTabs } from '../../OrderTabs'

const OrderTabsFetcher = () => {
  const {
    data: orders = [],
    error,
    isLoading,
  } = useSWR('getOrders', fetchOrders)

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
    let code = error?.response?.status as ErrorType
    if (!code) {
      code = ErrorType.NETWORK_ERROR
    }
    const ErrorComponent = errorHandler[code]
    return <ErrorComponent error={error} />
  }

  return <OrderTabs orders={orders} />
}

export { OrderTabsFetcher }
