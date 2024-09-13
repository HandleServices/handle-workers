'use client'

import '@/components/Input/input.styles.css'
import './input.css'

import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import { forwardRef, InputHTMLAttributes, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string | undefined
  error?: boolean
  sz?: 'small' | 'medium' | 'large'
  customBgColor?: string | undefined
  inputClassName?: string | undefined
  labelClassName?: string | undefined
  textSize?: number | undefined
  children: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    customBgColor = 'bg-inherit',
    className,
    placeholder,
    error,
    inputClassName,
    labelClassName,
    textSize,
    children,
    ...props
  }) => {
    const labelBg = customBgColor

    const variants = cva(
      clsx({
        [`w-full rounded-md bg-transparent box-border outline-none transition-all duration-300 ease-in-out focus-visible:text-handle-blue border-1.5 border-handle-gray-300 focus-visible:border-handle-blue peer ${inputClassName}`]:
          true,
        [`${inputClassName} text-handle-red border-handle-red focus-visible:text-handle-red focus-visible:border-handle-red`]:
          error,
      }),
    )

    const currentTextColor = useMemo(
      () =>
        clsx({
          [`${labelClassName} text-handle-red`]: error,
          [`text-handle-gray-300 peer-focus-visible:text-handle-blue ${labelClassName}`]:
            !error,
        }),
      [error, labelClassName],
    )

    return (
      <div className={twMerge('relative bg-inherit grid', className)}>
        {children}
        <label
          style={{
            fontSize: `${textSize}px`,
          }}
          htmlFor={props.id}
          className={twMerge(
            'absolute top-0 -translate-y-1/2 left-2 px-1 py-0 transition-all duration-300 ease-in-out pointer-events-none',
            currentTextColor,
            labelBg,
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
