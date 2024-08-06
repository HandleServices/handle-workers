import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { ServiceCardVariants } from './types'

export interface ServiceCardFooterButtonProps {
  variant: ServiceCardVariants
  children: React.ReactNode
  className?: HTMLDivElement['className']
}

const variants = cva([], {
  variants: {
    variant: {
      pending: 'bg-[#4ECB71] w-1/2',
      processing: 'bg-[#1A73E8D4] w-2/3',
      canceled: 'bg-[#FF5252] w-1/5',
      finished: 'bg-[#FF5252] w-full',
    },
  },
})

const ServiceCardFooterButton = forwardRef<
  HTMLButtonElement,
  ServiceCardFooterButtonProps
>(({ variant, children, className }, ref) => {
  // if (variant === "processing") {
  //   return (
  //     <svg
  //       width="710"
  //       height="32"
  //       className="flex flex-row items-center justify-center"
  //       viewBox="0 0 710 32"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M0 0H709.066L690.591 32H8C3.58172 32 0 28.4183 0 24V0Z"
  //         fill="#1A73E8"
  //         fill-opacity="0.83"
  //       />

  //       <text x="10" y="20" fill="white" className="font-semibold">Finalizar</text>
  //     </svg>
  //   );
  // }

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'h-full m-0 p-0 hover:opacity-75',
        variants({ variant }),
        className,
      )}
    >
      {children}
    </button>
  )
})

ServiceCardFooterButton.displayName = 'ServiceCardFooterButton'

export default ServiceCardFooterButton
