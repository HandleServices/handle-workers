import React from 'react'

import { ServiceCard } from '@/components/ServiceCard'
import { ServiceStatusEnum } from '@/types/enums/ServiceStatusEnum'
import { Service } from '@/types/models/Service.model'

type ServiceTabsContentProps = {
  services: Service[]
  activeTab: ServiceStatusEnum
}

const ServiceTabsContent = ({
  services,
  activeTab,
}: ServiceTabsContentProps) => {
  const filteredServices = services.filter((service) => {
    if (activeTab === ServiceStatusEnum.FINISHED) {
      return (
        service.status === ServiceStatusEnum.FINISHED ||
        service.status === ServiceStatusEnum.CANCELED
      )
    }
    return service.status === activeTab
  })

  return (
    <div className="pt-8 flex flex-col gap-4 items-center mr-14">
      {filteredServices.map((service) => (
        <ServiceCard.Container key={service.id} variant={service.status}>
          <ServiceCard.Header
            variant={service.status}
            data={{
              customer: {
                name: `${service.customer?.name}`,
                address: `${service.customer?.address}`,
              },
              dateTime: service.dateTime,
            }}
            value={service.value}
            setValue={() => null}
          />

          <ServiceCard.Content variant={service.status}>
            <p className="text-[16px] font-light">
              {`${service.name} - ${new Date(service.dateTime).getHours()}h`}
            </p>
          </ServiceCard.Content>

          <ServiceCard.Footer variant={service.status} />
        </ServiceCard.Container>
      ))}
    </div>
  )
}

export { ServiceTabsContent }
