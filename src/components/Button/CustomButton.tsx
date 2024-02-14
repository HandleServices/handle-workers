'use client'
import React, { forwardRef, useState } from 'react'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const variants = cva(
  [
    'rounded-md',
    'shadow-md',
    'hover:shadow-lg',
    'transition-shadow',
    'duration-400',
    'tracking-[0.2em]',
    'font-bold',
    'h-10',
  ],
  {
    variants: {
      variant: {
        primary: ['bg-[#1A74EA]', 'text-white'],
        secondary: ['bg-[#F7F8F4]', 'text-[#1A74EA]'],
        neutral: ['bg-[#7c828d]', 'text-white'],
      },
      size: {
        small: ['w-40', 'text-xs'],
        medium: ['w-52', 'text-xs'],
        large: ['w-64', 'text-[0.9em]'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    },
  },
)

interface loadingProps {
  type: string
}

function Loading({ type }: loadingProps): JSX.Element {
  if (type === 'secondary') {
    return (
      <div
        className={` flex flex-row align-center justify-center content-center `}
      >
        <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[#1A74EA]"></div>
      </div>
    )
  }
  return (
    <div
      className={` flex flex-row align-center justify-center content-center `}
    >
      <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin"></div>
    </div>
  )
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'neutral'
  icon?: JSX.Element
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, className, children, size, variant, ...rest }, ref) => {
    const [loading, setLoading] = useState(false)
    return (
      <div
        className={twMerge(variants({ variant, size, className }), [
          'grid',
          'align-middle',
          'justify-center',
          'content-center',
        ])}
      >
        <button
          ref={ref}
          className={twMerge(variants({ variant, size }))}
          {...rest}
          onClick={(e) => {
            if (loading) return
            setLoading(true)
            if (typeof rest.onClick === 'function') {
              fetch(new Request(e.currentTarget?.baseURI || '')).then(() => {
                setLoading(false)
                if (rest.onClick) {
                  rest.onClick(e)
                }
              })
            } else {
              console.log('No function')
              setLoading(false)
            }
          }}
          disabled={loading}
        >
          {(loading && <Loading type={variant || ''} />) ||
            (icon && (
              <div
                className={`grid grid-cols-12 w-full h-full align-center items-center content-center`}
              >
                <div
                  className={`flex flex-row align-center items-center justify-center col-span-2`}
                >
                  {icon}
                </div>
                <p className={`col-span-10 text-center p-0 m-0`}>{children}</p>
              </div>
            )) ||
            children}
        </button>
      </div>
    )
  },
)

Button.displayName = 'Button'

export { Button }
