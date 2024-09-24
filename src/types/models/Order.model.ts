import { OrderStatusEnum } from '../enums/OrderStatusEnum'

interface Customer {
  name?: string
  address?: string
}

export interface Order {
  id?: number
  customer?: Customer
  dateTime: Date
  value: number
  name: string
  status: OrderStatusEnum
}

export interface WorkOrder {
  id?: number
  customer?: Customer
  value: number
  name: string
  description: string
  estimatedTime: string
  enable: boolean
}
