import { cva } from 'class-variance-authority'
import { Check, X } from 'lucide-react'
import React, { forwardRef } from 'react'

import { cn } from '@/lib/utils'
import { ServiceStatusEnum } from '@/types/enums/ServiceStatusEnum'

import ServiceCardFooterButton from './ServiceCardFooterButton'
import { ServiceCardVariants } from './types'

export interface ServiceCardFooterProps {
  variant: ServiceCardVariants
  children?: React.ReactNode
}

const variants = cva([], {
  variants: {
    variant: {
      pending: '',
      open: '',
      canceled: '',
      finished: '',
    },
  },
})

const PendingVariant: React.FC = () => (
  <div className="w-full h-full flex flex-row gap-0">
    <ServiceCardFooterButton
      variant={ServiceStatusEnum.PENDING}
      className="rounded-bl-[8px] flex items-center justify-center gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Aceitar</p>
      <Check className="text-white" strokeWidth={3} />
    </ServiceCardFooterButton>

    <ServiceCardFooterButton
      variant={ServiceStatusEnum.PENDING}
      className="rounded-br-[8px] flex items-center justify-center gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Recusar</p>
      <X className="text-white" strokeWidth={2} />
    </ServiceCardFooterButton>
  </div>
)

const OpenVariant: React.FC = () => (
  <div className="w-full h-full flex flex-row gap-0">
    <ServiceCardFooterButton
      variant={ServiceStatusEnum.OPEN}
      className="w-2/3 rounded-bl-[8px] pl-12 flex items-center justify-start gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">
        Finalizar
      </p>
      <Check className="text-white" strokeWidth={3} />
    </ServiceCardFooterButton>

    <ServiceCardFooterButton
      variant="cancel"
      className="rounded-br-[8px] pr-12 flex items-center justify-end gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Cancelar</p>
      <X className="text-white" strokeWidth={2} />
    </ServiceCardFooterButton>
  </div>
)

const CanceledVariant: React.FC = () => (
  <div className="bg-[#FF5252] w-1/5 rounded-bl-[8px] flex items-center justify-center gap-2">
    <p className="text-white uppercase font-bold tracking-widest">Cancelado</p>
    <X className="text-white" strokeWidth={2} />
  </div>
)

const FinishedVariant: React.FC = () => (
  <div className="bg-[#FF5252] w-full rounded-b-[8px] pr-12 flex items-center justify-end gap-2">
    <p className="text-white uppercase font-bold tracking-widest">Finalizado</p>
    <Check className="text-white" strokeWidth={3} />
  </div>
)

const ServiceCardFooterButtons = ({
  variant,
}: {
  variant: ServiceCardVariants
}) => {
  let VariantComponent: React.FC = () => <React.Fragment />

  switch (variant) {
    case ServiceStatusEnum.CANCELED.valueOf():
      VariantComponent = CanceledVariant
      break
    case ServiceStatusEnum.PENDING.valueOf():
      VariantComponent = PendingVariant
      break
    case ServiceStatusEnum.OPEN.valueOf():
      VariantComponent = OpenVariant
      break
    case ServiceStatusEnum.FINISHED.valueOf():
      VariantComponent = FinishedVariant
      break
  }

  return <VariantComponent />
}

const ServiceCardFooter = forwardRef<HTMLInputElement, ServiceCardFooterProps>(
  ({ variant }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full h-[32px] max-h-[32px] m-0 p-0 bg-[#C5CCD9] rounded-br-[8px] rounded-bl-[8px] flex flex-row gap-0',
          variants({ variant }),
        )}
      >
        <ServiceCardFooterButtons variant={variant} />
      </div>
    )
  },
)

ServiceCardFooter.displayName = 'ServiceCardFooter'

export default ServiceCardFooter
