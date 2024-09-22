import { cva } from 'class-variance-authority'
import { Check, X } from 'lucide-react'
import React, { forwardRef } from 'react'

import { cn } from '@/lib/utils'
import { OrderStatusEnum } from '@/types/enums/OrderStatusEnum'

import OrderCardFooterButton from './OrderCardFooterButton'
import { OrderCardVariants } from './types'

export interface OrderCardFooterProps {
  variant: OrderCardVariants
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
    <OrderCardFooterButton
      variant={OrderStatusEnum.PENDING}
      className="rounded-bl-[8px] flex items-center justify-center gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Aceitar</p>
      <Check className="text-white" strokeWidth={3} />
    </OrderCardFooterButton>

    <OrderCardFooterButton
      variant={OrderStatusEnum.PENDING}
      className="rounded-br-[8px] flex items-center justify-center gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Recusar</p>
      <X className="text-white" strokeWidth={2} />
    </OrderCardFooterButton>
  </div>
)

const OpenVariant: React.FC = () => (
  <div className="w-full h-full flex flex-row gap-0">
    <OrderCardFooterButton
      variant={OrderStatusEnum.OPEN}
      className="w-2/3 rounded-bl-[8px] pl-12 flex items-center justify-start gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">
        Finalizar
      </p>
      <Check className="text-white" strokeWidth={3} />
    </OrderCardFooterButton>

    <OrderCardFooterButton
      variant="cancel"
      className="rounded-br-[8px] pr-12 flex items-center justify-end gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Cancelar</p>
      <X className="text-white" strokeWidth={2} />
    </OrderCardFooterButton>
  </div>
)

const CanceledVariant: React.FC = () => (
  <div className="bg-handle-red w-1/5 rounded-bl-[8px] flex items-center justify-center gap-2">
    <p className="text-white uppercase font-bold tracking-widest">Cancelado</p>
    <X className="text-white" strokeWidth={2} />
  </div>
)

const FinishedVariant: React.FC = () => (
  <div className="bg-handle-red w-full rounded-b-[8px] pr-12 flex items-center justify-end gap-2">
    <p className="text-white uppercase font-bold tracking-widest">Finalizado</p>
    <Check className="text-white" strokeWidth={3} />
  </div>
)

const OrderCardFooterButtons = ({
  variant,
}: {
  variant: OrderCardVariants
}) => {
  let VariantComponent: React.FC = () => <React.Fragment />

  switch (variant) {
    case OrderStatusEnum.CANCELED.valueOf():
      VariantComponent = CanceledVariant
      break
    case OrderStatusEnum.PENDING.valueOf():
      VariantComponent = PendingVariant
      break
    case OrderStatusEnum.OPEN.valueOf():
      VariantComponent = OpenVariant
      break
    case OrderStatusEnum.FINISHED.valueOf():
      VariantComponent = FinishedVariant
      break
  }

  return <VariantComponent />
}

const OrderCardFooter = forwardRef<HTMLInputElement, OrderCardFooterProps>(
  ({ variant }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full h-[32px] max-h-[32px] m-0 p-0 bg-[#C5CCD9] rounded-br-[8px] rounded-bl-[8px] flex flex-row gap-0',
          variants({ variant }),
        )}
      >
        <OrderCardFooterButtons variant={variant} />
      </div>
    )
  },
)

OrderCardFooter.displayName = 'OrderCardFooter'

export default OrderCardFooter
