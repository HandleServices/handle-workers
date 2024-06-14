'use client'

import './input.styles.css'

import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import { forwardRef, InputHTMLAttributes, useMemo, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import CloseEyeIcon from '@/app/auth/(initial)/assets/close-eye-icon'
import OpenEyeIcon from '@/app/auth/(initial)/assets/open-eye-icon'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string | undefined
  error?: boolean
  sz?: 'small' | 'medium' | 'large'
  customBgColor?: string | undefined
  inputClassName?: string | undefined
  labelClassName?: string | undefined
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      customBgColor = 'bg-inherit',
      className,
      placeholder,
      error,
      width,
      height,
      sz = 'medium',
      type,
      inputClassName,
      labelClassName,
      ...props
    },
    ref,
  ) => {
    const [show, setShow] = useState(false)

    const labelBg = customBgColor

    const variants = cva(
      clsx({
        'w-full rounded-md bg-transparent box-border outline-none transition-all duration-300 ease-in-out focus-visible:text-handle-blue border-1.5 border-handle-gray-300 focus-visible:border-handle-blue peer':
          true,
        'text-handle-red border-handle-red focus-visible:text-handle-red focus-visible:border-handle-red':
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

    const currentTextColor = useMemo(
      () =>
        clsx({
          'text-handle-red': error,
          'text-handle-gray-300 peer-focus-visible:text-handle-blue': !error,
        }),
      [error],
    )

    const currentType = useMemo(() => {
      if (!type) return 'text'

      if (type !== 'password') return type

      return show ? 'text' : 'password'
    }, [show, type])

    return (
      <div className={twMerge('relative bg-inherit grid', className)}>
        <input
          ref={ref}
          id={name}
          name={name}
          style={{ width, height }}
          className={twMerge(variants({ sz }), inputClassName)}
          {...props}
          type={currentType}
          placeholder=" "
        />

        <label
          htmlFor={props.id}
          className={twMerge(
            'absolute top-0 -translate-y-1/2 left-2 px-1 py-0 text-xs transition-all duration-300 ease-in-out pointer-events-none',
            currentTextColor,
            labelBg,
            labelClassName,
          )}
        >
          {placeholder}
        </label>

        {type === 'password' && (
          <div
            className={twMerge(
              `p-0 mr-4 select-none cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2`,
              currentTextColor,
            )}
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <OpenEyeIcon className="fill-current text-inherit" size="lg" />
            ) : (
              <CloseEyeIcon className="fill-current text-inherit" size="lg" />
            )}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
