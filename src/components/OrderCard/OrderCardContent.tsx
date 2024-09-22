import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { OrderCardVariants } from './types'

export interface OrderCardContentProps {
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

const OrderCardContent = forwardRef<HTMLInputElement, OrderCardContentProps>(
  ({ variant, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full h-[64px] bg-white flex items-center pl-8',
          variants({ variant }),
        )}
      >
        {children}
      </div>
    )
  },
)

OrderCardContent.displayName = 'OrderCardContent'

export default OrderCardContent
