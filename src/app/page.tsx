'use client'
import React, { useState } from 'react'
import { DayOfWeekPicker } from '@/components/DaysOfWeekPicker/DayOfWeekPicker'

export default function Home() {
  const [value, setValue] = useState([])
  return (
    <div>
      <DayOfWeekPicker
        value={value}
        onValueChange={(value) => {
          if (value) setValue(value)
        }}
        className="w-[375px] gap-4"
      />
    </div>
  )
}
