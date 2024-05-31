'use client'
import { forwardRef, LegacyRef, useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

import { cn } from '@/lib/utils'

import config from './../../../tailwind.config'
import InputTimePicker from './components/InputTimePicker'

const handleColors = resolveConfig(config).handle

function inputStyle(inHour: string, outHour: string) {
  const [color, borderColor] =
    inHour !== '00:00' || outHour !== '00:00'
      ? handleColors.gray[300]
      : handleColors.blue.DEFAULT
  return {
    color,
    borderColor,
  }
}

export interface TimePickerProps {
  width?: number
  height?: number
  className?: string
  groupClassName?: string
  style?: React.CSSProperties
  labelClassName?: string
  cb?: (timeRange: string[]) => void
}

const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      width = 140,
      height = 60,
      style = {},
      className = '',
      groupClassName = '',
      labelClassName = '',
      cb = undefined,
    }: TimePickerProps,
    ref,
  ) => {
    const [inHour, setInHour] = useState('00:00')
    const [outHour, setOutHour] = useState('00:00')

    const defaultProps = (
      hour: string,
      setHour: React.Dispatch<React.SetStateAction<string>>,
    ) => {
      return {
        style: {
          ...style,
          ...inputStyle(inHour, outHour),
        },
        className,
        width,
        height,
        hour,
        setHour,
      }
    }

    useEffect(() => {
      // eslint-disable-next-line n/no-callback-literal
      cb && cb([inHour, outHour])
    }, [inHour, outHour])

    return (
      <div
        className={`flex row gap-4 md:gap-14 lg:gap-[5.948rem] ${groupClassName}`}
        ref={ref as LegacyRef<HTMLDivElement>}
      >
        <div>
          <label
            className={cn('tracking-widest text-sm font-thin', labelClassName)}
          >
            início
          </label>
          <InputTimePicker {...defaultProps(inHour, setInHour)} />
        </div>
        <div>
          <label
            className={cn('tracking-widest text-sm font-thin', labelClassName)}
          >
            fim
          </label>
          <InputTimePicker {...defaultProps(outHour, setOutHour)} />
        </div>
      </div>
    )
  },
)

TimePicker.displayName = 'TimePicker'

export default TimePicker
