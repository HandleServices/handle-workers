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
        type="text"
        selectedDate={selectedDate}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <Calendar
        selectedDate={selectedDate}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setSelectedDate={setSelectedDate}
        className={`bg-white ${isOpen ? '' : 'h-0'}`}
      />

      <div>
        <h1 className={`text-3xl font-bold ${isOpen ? 'mt-4' : ''}`}>
          Tarefas diárias
        </h1>
      </div>
    </div>
  )
}

export default CalendarPage
