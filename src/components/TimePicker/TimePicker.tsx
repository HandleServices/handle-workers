'use client'
import { useState } from 'react'
import colors from 'tailwindcss/colors'
import resolveConfig from 'tailwindcss/resolveConfig'

import config from './../../../tailwind.config'
import TimePickerComponent from './TimePickerComponent'
import TimePickerLabel from './TimePickerLabel'

const handleColors = resolveConfig(config).handle

export interface TimePickerProps {
  width?: number
  height?: number
  className?: string
  groupClassName?: string
  style?: React.CSSProperties
  labelClassName?: string
}

const TimePicker = ({
  width = 140,
  height = 60,
  style = {},
  className = '',
  groupClassName = '',
  labelClassName = '',
}: TimePickerProps) => {
  const [inHour, setInHour] = useState('00:00')
  const [outHour, setOutHour] = useState('00:00')

  function inputStyle(inHour: string, outHour: string) {
    const inHours = inHour.split(':')[0]
    const inMinutes = inHour.split(':')[1]
    const outHours = outHour.split(':')[0]
    const outMinutes = outHour.split(':')[1]

    if (inHours > outHours && outHours !== '00') {
      return {
        color: colors.red[500],
        borderColor: colors.red[500],
      }
    } else if (
      inHours === outHours &&
      inMinutes >= outMinutes &&
      outHours !== '00'
    ) {
      return {
        color: colors.red[500],
        borderColor: colors.red[500],
      }
    } else {
      return {
        color:
          inHour !== '00:00' && outHour !== '00:00'
            ? style.color || handleColors.blue.DEFAULT
            : handleColors.gray[700],
        borderColor:
          inHour !== '00:00' && outHour !== '00:00'
            ? handleColors.blue.DEFAULT
            : handleColors.gray[700],
      }
    }
  }

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

  return (
    <div className={`flex row gap-[95px] ${groupClassName}`}>
      <div>
        <TimePickerLabel
          className={labelClassName}
          style={{ ...inputStyle(inHour, outHour) }}
        >
          Inicio
        </TimePickerLabel>
        <TimePickerComponent {...defaultProps(inHour, setInHour)} />
      </div>
      <div>
        <TimePickerLabel
          className={labelClassName}
          style={{ ...inputStyle(inHour, outHour) }}
        >
          Fim
        </TimePickerLabel>
        <TimePickerComponent {...defaultProps(outHour, setOutHour)} />
      </div>
    </div>
  )
}

export default TimePicker
