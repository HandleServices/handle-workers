import { ServiceStatusEnum } from '@/types/enums/ServiceStatusEnum'
import { Service } from '@/types/models/Service.model'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchServices = async (): Promise<Service[]> => {
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
      status: ServiceStatusEnum.PENDING,
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
      status: ServiceStatusEnum.PENDING,
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
      status: ServiceStatusEnum.OPEN,
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
      status: ServiceStatusEnum.OPEN,
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
      status: ServiceStatusEnum.FINISHED,
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
      status: ServiceStatusEnum.CANCELED,
    },
  ]
}
