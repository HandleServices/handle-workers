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
  value?: [string, string]
  onChange?: (value: [string, string]) => void
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
      cb,
      value = ['00:00', '00:00'],
      onChange,
    }: TimePickerProps,
    ref,
  ) => {
    const [inHour, setInHour] = useState(value[0])
    const [outHour, setOutHour] = useState(value[1])

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
      const timeRange: [string, string] = [inHour, outHour]
      if (cb) cb(timeRange)
      if (onChange) onChange([timeRange[0], timeRange[1]])
    }, [inHour, outHour, cb, onChange])

    useEffect(() => {
      setInHour(value[0])
      setOutHour(value[1])
    }, [value])

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
