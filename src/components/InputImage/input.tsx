import * as React from 'react'

import { cn } from '@/lib/utils'
import './style.css'
import Image from 'next/image'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <label
        htmlFor="picture"
        className="flex flex-col items-center cursor-pointer"
      >
        <p className="tracking-widest text-sm mb-[4px]">
          adicione uma foto sua*
        </p>
        <div className="box-border rounded-lg pt-11 border-2 border-handle-gray-700 externBox">
          <svg
            width="178"
            height="130"
            viewBox="0 0 178 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M177 118.283C162.157 98.7554 142.012 72.5322 94.3012 72.5322C45 72.5323 20.0843 100.987 1 130"
              stroke="#323238"
              stroke-width="1.5"
            />
            <path
              d="M124.298 33.4764C124.298 51.5873 110.358 66.2028 93.2411 66.2028C76.1243 66.2028 62.1838 51.5873 62.1838 33.4764C62.1838 15.3655 76.1243 0.75 93.2411 0.75C110.358 0.75 124.298 15.3655 124.298 33.4764Z"
              stroke="#323238"
              stroke-width="1.5"
            />
          </svg>
          <input
            src="/images/default.png"
            type={type}
            id={props.id || 'picture'}
            accept="image/*"
            className={cn(
              'hidden h-[180px] w-[180px] rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
        <div className="h-[58px] w-[58px] bg-handle-blue transform translate-x-[80px] translate-y-[-35px] rounded-full flex justify-center items-center">
          <Image
            src="/images/plus.png"
            alt=""
            width={24}
            height={24}
            content="center"
          />
        </div>
      </label>
    )
  },
)
Input.displayName = 'Input'

export { Input }
