'use client'

import { CheckCircledIcon } from '@radix-ui/react-icons'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { MapPin } from 'lucide-react'
import { forwardRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { ServiceStatusEnum } from '@/types/enums/ServiceStatusEnum'
import { formatCurrency } from '@/utils/functions/numberUtils'

import Input from '../Input'
import { ServiceCardProps, ServiceCardVariants } from './types'

const CommentPen = ({ className }: { className: SVGElement['className'] }) => {
  return (
    <svg
      className={className}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.9402 0C5.42602 0 0.940186 4.48583 0.940186 10C0.940186 15.5142 5.42602 20 10.9402 20H20.9402V10C20.9402 4.48583 16.4544 0 10.9402 0ZM15.2077 9.26833L9.47519 15H5.94019V11.4642L11.6727 5.7325C12.6477 4.7575 14.2327 4.7575 15.2077 5.7325C15.6794 6.20417 15.9402 6.8325 15.9402 7.5C15.9402 8.1675 15.6794 8.79583 15.2077 9.26833ZM14.0294 6.91167C14.1869 7.06833 14.2735 7.2775 14.2735 7.50083C14.2735 7.72417 14.1869 7.9325 14.0294 8.09L8.78518 13.3342H7.60685V12.155L12.851 6.91167C13.1769 6.58667 13.7035 6.58667 14.0294 6.91167Z" />
    </svg>
  )
}

export type ServiceCardHeaderProps = {
  children?: React.ReactNode
  data: ServiceCardProps
  variant: ServiceCardVariants
  value: number
  // setValue: Dispatch<SetStateAction<number>>
  setValue: (num: number) => void
}

const variants = cva([], {
  variants: {
    variant: {
      pending: 'bg-[#4ECB7133]',
      open: 'bg-[#D0E3FB]',
      canceled: 'bg-[#F2DCDC]',
      finished: 'bg-[#F2DCDC]',
    },
  },
})

const ServiceCardHeader = forwardRef<HTMLInputElement, ServiceCardHeaderProps>(
  ({ variant, data, value, setValue }, ref) => {
    const [isEditing, setIsEditing] = useState(false)

    const toggleEditing = () => {
      setIsEditing((prev) => !prev)
    }

    const changeNumber = (value: string) => {
      const num = parseFloat(value)
      if (!isNaN(num)) {
        setValue(num)
      }
    }

    const request = () => {
      toggleEditing()
    }

    const formattedDate = dayjs(data.dateTime).format('MM/DD/YYYY')

    return (
      <div
        ref={ref}
        className={cn(
          'w-full h-[80px] max-h-[80px] bg-[#C5CCD9] rounded-tr-[8px] rounded-tl-[8px] flex flex-row items-center justify-between',
          variants({ variant }),
        )}
      >
        <div className="flex flex-col gap-4 px-8">
          <div className="flex flex-row gap-2 items-end justify-start">
            <p className="text-2xl/5 font-medium tracking-wider">
              {data.customer.name + ','}
            </p>
            <p className="text-xs/3 font-thin tracking-wider">
              {formattedDate}
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start">
            <p className="text-lg/5 font-light tracking-wider">
              {data.customer.address}
            </p>

            <button
              type="button"
              className={cn(
                'flex flex-row gap-1 items-center hover:opacity-50 active:opacity-100',
                clsx({
                  'text-[#4ECB71]':
                    variant === ServiceStatusEnum.PENDING.valueOf(),
                  'text-[#1A73E8D4]':
                    variant === ServiceStatusEnum.OPEN.valueOf(),
                  'text-[#FF5252]':
                    variant === ServiceStatusEnum.CANCELED.valueOf(),
                }),
              )}
            >
              <MapPin size={14} />

              <p className={'text-xs/3 font-bold tracking-wider'}>
                {'Mostrar no mapa'}
              </p>
            </button>
          </div>
        </div>

        <div
          className={cn(
            'relative flex items-center justify-center px-8 py-2',
            clsx({
              'text-[#4ECB71] fill-[#4ECB71]':
                variant === ServiceStatusEnum.PENDING.valueOf(),
              'text-[#1A73E8D4] fill-[#1A73E8D4]':
                variant === ServiceStatusEnum.OPEN.valueOf(),
              'text-[#FF5252] fill-[#FF5252]':
                variant === ServiceStatusEnum.CANCELED.valueOf() ||
                variant === ServiceStatusEnum.FINISHED.valueOf(),
            }),
          )}
        >
          {variant === 'open' && !isEditing && (
            <button type="button" onClick={toggleEditing}>
              <CommentPen className="absolute left-3 top-0 size-4" />
            </button>
          )}
          {isEditing ? (
            <div className="flex flex-col gap-1 items-center justify-center">
              <Input
                placeholder={`${formatCurrency(value)}`}
                onChange={(e) => changeNumber(e.target.value)}
                customBgColor="bg-[#D0E3FB]"
                className="w-full h-full max-w-28"
                sz="large"
              />

              <button
                type="button"
                onClick={request}
                className="flex flex-row gap-1 items-center justify-center"
              >
                <p className="text-xs font-bold text-[#1A73E8D4]">solicitar</p>

                <CheckCircledIcon className="text-[#1A73E8D4] size-3" />
              </button>
            </div>
          ) : (
            <p className="font-semibold text-2xl">{formatCurrency(value)}</p>
          )}
        </div>
      </div>
    )
  },
)

ServiceCardHeader.displayName = 'ServiceCardHeader'

export default ServiceCardHeader
