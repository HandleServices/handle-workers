import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { OrderCardVariants } from './types'

export interface OrderCardContainerProps {
  variant: OrderCardVariants
  children: React.ReactNode
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

const OrderCardContainer = forwardRef<
  HTMLInputElement,
  OrderCardContainerProps
>(({ variant, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'w-full max-w-[1306px] max-h-[177px] bg-white rounded-[8px] shadow-lg flex flex-col gap-0',
        variants({ variant }),
      )}
    >
      {children}
    </div>
  )
})

OrderCardContainer.displayName = 'OrderCardContainer'

export default OrderCardContainer
