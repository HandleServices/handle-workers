'use client'
import { cva } from 'class-variance-authority'
import React, { forwardRef, useState } from 'react'
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
        primary: ['bg-handle-blue', 'text-handle-background'],
        secondary: ['bg-[#DDDDE1]', 'text-handle-blue'],
        neutral: ['bg-handle-gray', 'text-handle-backgroud'],
      },
      size: {
        small: ['w-40', 'text-xs'],
        medium: ['w-52 h-12', 'text-xs'],
        mediumlg: ['w-[17rem] h-12', 'text-[0.8em]'],
        large: ['w-96 h-12', 'text-lg'],
        extra: ['w-button-extra h-12', 'text-lg'],
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
  return (
    <div className="flex flex-row align-center justify-center content-center">
      <div
        className={`w-4 h-4 rounded-full border-2 border-b-transparent animate-spin ${type === 'secondary' ? 'border-handle-blue' : ''} `}
      />
    </div>
  )
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: 'small' | 'medium' | 'mediumlg' | 'large' | 'extra'
  variant: 'primary' | 'secondary' | 'neutral'
  action?:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>)
    | (() => void)
  icon?: JSX.Element
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, className, children, size, variant, action, ...rest }, ref) => {
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
          onClick={async (e) => {
            if (loading || !action) return
            setLoading(true)
            await action(e)
            setLoading(false)
          }}
          disabled={loading}
        >
          {(loading && <Loading type={variant} />) ||
            (icon && (
              <div className="grid grid-cols-12 w-full h-full align-center items-center content-center">
                <div className="flex flex-row align-center items-center justify-center col-span-2">
                  {icon}
                </div>
                <p className="col-span-10 text-center pr-2 m-0">{children}</p>
              </div>
            )) ||
            children}
        </button>
      </div>
    )
  },
)

Button.displayName = 'Button'

export type { ButtonProps }
export { Button }
