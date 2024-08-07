'use client'

import { useState } from 'react'

import { ServiceCard } from '@/components/ServiceCard'

export default function App() {
  const [value, setValue] = useState(100.0)
  return (
    <div className="w-screen h-screen pt-40 px-24 flex flex-col gap-8">
      <ServiceCard.Container key={0} variant={'pending'}>
        <ServiceCard.Header
          variant={'pending'}
          data={{
            customer: {
              name: 'Lucas Rabelo',
              address: 'Av. Diógenes Ribeiro 74 -  Alto da Lapa',
            },
            dateTime: new Date(),
          }}
          value={value}
          setValue={setValue}
        />

        <ServiceCard.Content variant={'pending'}>
          <p className="text-[16px] font-light">
            {'Manutenção de Ar Condicionado - 10h'}
          </p>
        </ServiceCard.Content>

        <ServiceCard.Footer variant={'pending'} />
      </ServiceCard.Container>

      <ServiceCard.Container key={1} variant={'open'}>
        <ServiceCard.Header
          variant={'open'}
          data={{
            customer: {
              name: 'Lucas Rabelo',
              address: 'Av. Diógenes Ribeiro 74 -  Alto da Lapa',
            },
            dateTime: new Date(),
          }}
          value={value}
          setValue={setValue}
        />

        <ServiceCard.Content variant={'open'}>
          <p className="text-[16px] font-light">
            {'Manutenção de Ar Condicionado - 10h'}
          </p>
        </ServiceCard.Content>

        <ServiceCard.Footer variant={'open'} />
      </ServiceCard.Container>

      <ServiceCard.Container key={2} variant={'canceled'}>
        <ServiceCard.Header
          variant={'canceled'}
          data={{
            customer: {
              name: 'Lucas Rabelo',
              address: 'Av. Diógenes Ribeiro 74 -  Alto da Lapa',
            },
            dateTime: new Date(),
          }}
          value={value}
          setValue={setValue}
        />

        <ServiceCard.Content variant={'canceled'}>
          <p className="text-[16px] font-light">
            {'Manutenção de Ar Condicionado - 10h'}
          </p>
        </ServiceCard.Content>

        <ServiceCard.Footer variant={'canceled'} />
      </ServiceCard.Container>

      <ServiceCard.Container key={2} variant={'finished'}>
        <ServiceCard.Header
          variant={'finished'}
          data={{
            customer: {
              name: 'Lucas Rabelo',
              address: 'Av. Diógenes Ribeiro 74 -  Alto da Lapa',
            },
            dateTime: new Date(),
          }}
          value={value}
          setValue={setValue}
        />

        <ServiceCard.Content variant={'finished'}>
          <p className="text-[16px] font-light">
            {'Manutenção de Ar Condicionado - 10h'}
          </p>
        </ServiceCard.Content>

        <ServiceCard.Footer variant={'finished'} />
      </ServiceCard.Container>
    </div>
  )
}
