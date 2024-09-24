import { OrderStatusEnum } from '@/types/enums/OrderStatusEnum'
import { Order } from '@/types/models/Order.model'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchOrders = async (): Promise<Order[]> => {
  await delay(1000)

  return [
    {
      id: 1,
      name: 'Manutenção de Ar Condicionado',
      customer: {
        name: 'Lucas Rabelo',
        address: 'Av. Diógenes Ribeiro 74 - Alto da Lapa',
      },
      dateTime: new Date(),
      value: 100.0,
      status: OrderStatusEnum.PENDING,
    },
    {
      id: 2,
      name: 'Manutenção de Ar Condicionado',
      customer: {
        name: 'Lucas Rabelo',
        address: 'Av. Diógenes Ribeiro 74 - Alto da Lapa',
      },
      dateTime: new Date(),
      value: 100.0,
      status: OrderStatusEnum.PENDING,
    },
    {
      id: 3,
      name: 'Manutenção de Ar Condicionado',
      customer: {
        name: 'Lucas Rabelo',
        address: 'Av. Diógenes Ribeiro 74 - Alto da Lapa',
      },
      dateTime: new Date(),
      value: 100.0,
      status: OrderStatusEnum.OPEN,
    },
    {
      id: 4,
      name: 'Manutenção de Ar Condicionado',
      customer: {
        name: 'Lucas Rabelo',
        address: 'Av. Diógenes Ribeiro 74 - Alto da Lapa',
      },
      dateTime: new Date(),
      value: 100.0,
      status: OrderStatusEnum.OPEN,
    },
    {
      id: 5,
      name: 'Manutenção de Ar Condicionado',
      customer: {
        name: 'Lucas Rabelo',
        address: 'Av. Diógenes Ribeiro 74 - Alto da Lapa',
      },
      dateTime: new Date(),
      value: 100.0,
      status: OrderStatusEnum.FINISHED,
    },
    {
      id: 6,
      name: 'Manutenção de Ar Condicionado',
      customer: {
        name: 'Lucas Rabelo',
        address: 'Av. Diógenes Ribeiro 74 - Alto da Lapa',
      },
      dateTime: new Date(),
      value: 100.0,
      status: OrderStatusEnum.CANCELED,
    },
  ]
}
