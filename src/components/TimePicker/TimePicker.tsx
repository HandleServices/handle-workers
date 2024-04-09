'use client'
import { parse } from 'path'
import { useState } from 'react'

import { Input } from '../Input/Input'

interface TimePickerProps {
  width?: number
  height?: number
}

function hourMinuteMask(value: string): string {
  const numbers = value.replace(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/g, '')
  if (numbers.length <= 2) {
    if (parseInt(numbers) > 23) return '23'
    return numbers
  }
  return `${numbers.slice(0, 2)}  ${parseInt(numbers.slice(2, 4)) > 59 ? '59' : numbers.slice(2, 4)}`
}

const TimePicker = ({
  width = 140,
  height = 60,
  ...props
}: TimePickerProps) => {
  const [inHour, setInOur] = useState('')
  const [outHour, setOutOur] = useState('')
  const [onFocus, setOnFocus] = useState([false, false])

  function handleHourMinuteMask(
    event: { target: { value: string } },
    setTime: (value: string) => void,
  ) {
    setTime(hourMinuteMask(event.target.value))
    console.log(inHour)
  }

  return (
    <div className="flex flex-row gap-[95px] tracking-widest">
      <div>
        <label className="">Início</label>
        <div
          className="absolute"
          style={{
            transform: `translate(${width / 2 - (height / 20) * 2 - 3 * (height / 60)}px, ${height / 2 - height / 2 - height / 10}px)`,
            fontSize: `${height / 20}rem`,
            visibility: !onFocus[0] ? 'visible' : 'hidden',
            color: !onFocus[0] ? 'black' : 'transparent',
          }}
        >
          :
        </div>
        <Input
          style={{
            width,
            height,
            textAlign: 'center',
            letterSpacing: '0.1rem',
            fontSize: `${height / 30}rem`,
          }}
          onChange={(event) => handleHourMinuteMask(event, setInOur)}
          placeholder=""
          width={width}
          height={height}
          value={inHour}
          onFocus={() => setOnFocus([true, false])}
          onBlur={() => setOnFocus([false, false])}
        />
      </div>
      <div>
        <label className="">Fim</label>
        <div
          className="absolute"
          style={{
            transform: `translate(${width / 2 - (height / 20) * 2}px, ${height / 2 - height / 2 - height / 10}px)`,
            fontSize: `${height / 20}rem`,
          }}
        >
          :
        </div>
        <Input
          style={{
            width,
            height,
            textAlign: 'center',
          }}
          onChange={(event) => handleHourMinuteMask(event, setOutOur)}
          placeholder=""
          width={width}
          height={height}
          value={outHour}
          onFocus={() => setOnFocus([false, true])}
        />
      </div>
    </div>
  )
}

export default TimePicker
