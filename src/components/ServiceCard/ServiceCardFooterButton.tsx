import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface ServiceCardFooterButtonProps {
  variant: 'pending' | 'open' | 'cancel'
  children: React.ReactNode
  className?: HTMLDivElement['className']
}

const variants = cva([], {
  variants: {
    variant: {
      pending: 'bg-[#4ECB71] w-1/2 hover:opacity-75',
      open: 'bg-[#1A73E8D4] w-2/3 hover:opacity-75',
      cancel: 'w-1/3 hover:bg-[#b1b7c2ac]',
    },
  },
})

const ServiceCardFooterButton = forwardRef<
  HTMLButtonElement,
  ServiceCardFooterButtonProps
>(({ variant, children, className }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={cn('h-full m-0 p-0', variants({ variant }), className)}
    >
      {children}
    </button>
  )
})

ServiceCardFooterButton.displayName = 'ServiceCardFooterButton'

export default ServiceCardFooterButton
