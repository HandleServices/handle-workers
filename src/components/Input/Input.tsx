'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

import './input.styles.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string | undefined
  error?: boolean
  sz?: 'small' | 'medium' | 'large'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, className, placeholder, error, sz = 'medium', ...props }, ref) => {
    console.log(error)

    const variants = cva(
      clsx({
        'w-full rounded-md bg-transparent box-border outline-none transition-all duration-300 ease-in-out focus-visible:text-handle-blue border-[0.094rem] border-custom-gray-300 focus-visible:border-handle-blue peer':
          true,
        'text-handle-red-500 border-handle-red-500 focus-visible:text-handle-red-500 focus-visible:border-handle-red-500':
          error,
      }),
      {
        variants: {
          sz: {
            small: ['px-2 py-2', 'text-sm'],
            medium: ['px-3 py-2', 'text-base'],
            large: ['px-4 py-2', 'text-lg'],
          },
        },
        defaultVariants: {
          sz: 'medium',
        },
      },
    )

    return (
      <div className={twMerge('relative bg-inherit', className)}>
        <input
          ref={ref}
          id={name}
          name={name}
          type="text"
          className={twMerge(variants({ sz }))}
          {...props}
          placeholder=" "
        />
        <label
          htmlFor={props.id}
          className={twMerge(
            'absolute top-0 -translate-y-1/2 left-2 px-1 py-0 text-xs bg-inherit transition-all duration-300 ease-in-out pointer-events-none',
            clsx({
              'text-handle-red-500': error,
              'text-custom-gray-300 peer-focus-visible:text-handle-blue':
                !error,
            }),
          )}
        >
          {placeholder}
        </label>
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
