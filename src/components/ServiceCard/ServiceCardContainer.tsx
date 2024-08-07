import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { ServiceCardVariants } from './types'

export interface ServiceCardContainerProps {
  variant: ServiceCardVariants
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

const ServiceCardContainer = forwardRef<
  HTMLInputElement,
  ServiceCardContainerProps
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

ServiceCardContainer.displayName = 'ServiceCardContainer'

export default ServiceCardContainer
