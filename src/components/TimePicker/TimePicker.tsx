'use client'
import './TimePicker.css'

import { useState } from 'react'

import { Input } from '../Input/Input'
import colors from './../../../tailwind.config'

const handleColors = colors.theme?.colors?.handle

function inputStyle(value: string) {
  return {
    color: value !== '00:00' ? handleColors.blue.DEFAULT : handleColors.gray[700],
    borderColor: value !== '00:00' ? handleColors.blue.DEFAULT : handleColors.gray[700],
  }
}

interface TimePickerProps {
  width?: number
  height?: number
}

const TimePicker = ({
  width = 140,
  height = 60,
  ...props
}: TimePickerProps) => {
  const [inHour, setInOur] = useState('00:00')
  const [outHour, setOutOur] = useState('00:00')

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setTime: React.Dispatch<React.SetStateAction<string>>,
  ): void => {
    console.log(handleColors.blue.DEFAULT)
    const { value } = event.target
    setTime(value)
  }

  return (
    <div className="flex flex-row gap-[95px] tracking-widest">
      <div>
        <label
          className={`${inHour !== '00:00' ? 'text-handle-blue' : 'text-handle-gray-700'}`}
        >
          Início
        </label>
        <Input
          type="time"
          style={{
            width,
            height,
            textAlign: 'center',
            letterSpacing: '.5rem',
            fontSize: `${height / 30}rem`,
            ...inputStyle(inHour),
          }}
          onChange={(event) => handleInputChange(event, setInOur)}
          width={width}
          height={height}
          value={inHour}
        />
      </div>
      <div>
        <label
          className={`${outHour !== '00:00' ? 'text-handle-blue' : 'text-handle-gray-700'}`}
        >
          Fim
        </label>
        <Input
          type="time"
          style={{
            width,
            height,
            textAlign: 'center',
            letterSpacing: '.5rem',
            fontSize: `${height / 30}rem`,
            ...inputStyle(outHour),
          }}
          onChange={(event) => handleInputChange(event, setOutOur)}
          width={width}
          height={height}
          value={outHour}
        />
      </div>
    </div>
  )
}

export default TimePicker
