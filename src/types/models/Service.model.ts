import { ServiceStatusEnum } from '../enums/ServiceStatusEnum'

interface Customer {
  name?: string
  address?: string
}

export interface Service {
  id?: number
  customer?: Customer
  dateTime: Date
  value: number
  name: string
  status: ServiceStatusEnum
}

export interface WorkService {
  id?: number
  customer?: Customer
  value: number
  name: string
  description: string
  estimatedTime: string
  enable: boolean
}
