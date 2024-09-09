'use client'
import React from 'react'

import { Calendar } from '@/components/Calendar/Calendar'

import CalendarTrigger from './components/CalendarTrigger'

const CalendarPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState<Date | Date[]>(
    new Date(),
  )

  return (
    <div>
      <CalendarTrigger
        selectedDate={selectedDate}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <Calendar
        selectedDate={selectedDate}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setSelectedDate={setSelectedDate}
        className="bg-white"
      />
    </div>
  )
}

export default CalendarPage
