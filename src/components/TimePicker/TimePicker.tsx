'use client'
import { useState } from 'react'

import TimePickerComponent from './TimePickerComponent'

interface TimePickerProps {
  width?: number
  height?: number
  className?: string
  groupClassName?: string
  style?: React.CSSProperties
}

const TimePicker = ({
  width = 140,
  height = 60,
  style = {},
  className = '',
  groupClassName = '',
}: TimePickerProps) => {
  const [inHour, setInHour] = useState('00:00')
  const [outHour, setOutHour] = useState('00:00')

  const defaultProps = (
    hour: string,
    setHour: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    return {
      style,
      className,
      width,
      height,
      hour,
      setHour,
    }
  }

  return (
    <div className={`flex row gap-[95px] ${groupClassName}`}>
      <TimePickerComponent
        {...defaultProps(inHour, setInHour)}
        labelName="Inicio"
      />
      <TimePickerComponent
        {...defaultProps(outHour, setOutHour)}
        labelName="Fim"
      />
    </div>
  )
}

export default TimePicker
