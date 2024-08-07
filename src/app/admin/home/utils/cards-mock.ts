import { ServiceStatusEnum } from '@/types/enums/ServiceStatusEnum'
import { Service } from '@/types/models/Service'

export const CardsMock: { [key in ServiceStatusEnum]: Service[] } = {
  pending: [
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
  ],
  open: [
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
  ],
  finished: [
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
  ],
  canceled: [
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
  ],
}
