'use client'

import '@/components/Input/input.styles.css'
import './calendar-input.styles.css'

import { clsx } from 'clsx'
import { forwardRef, InputHTMLAttributes, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export interface CalendarInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name?: string | undefined
  error?: boolean
  sz?: 'small' | 'medium' | 'large'
  customBgColor?: string | undefined
  inputClassName?: string | undefined
  labelClassName?: string | undefined
  textSize?: number | undefined
  children: React.ReactNode
}

const CalendarInput = forwardRef<HTMLInputElement, CalendarInputProps>(
  ({
    customBgColor = 'bg-inherit',
    className,
    placeholder,
    error,
    labelClassName,
    textSize,
    children,
    ...props
  }) => {
    const labelBg = customBgColor

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

CalendarInput.displayName = 'CalendarInput'

export { CalendarInput }
