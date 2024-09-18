'use client'

import { addDays, differenceInDays } from 'date-fns'
import React from 'react'

import SvgComponent from '@/app/auth/(initial)/assets/google'
import { Calendar } from '@/components/Calendar/Calendar'
import TodoList from '@/components/TodoList'
import { Todo } from '@/components/TodoList/TodoList'

import AddOrderDialog from './components/AddOrderDialog'
import CalendarTrigger from './components/CalendarTrigger'

const CalendarPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [todos, setTodos] = React.useState<Todo[]>([])

  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date())

  return (
    <div className="grid grid-cols-2 gap-16 w-[85%] h-[95%] self-center overflow-none">
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
          className={`bg-white ${isOpen ? '' : 'h-0 p-0 overflow-hidden'}`}
        />

        <div>
          <h1 className={`text-xl font-bold mb-4 ${isOpen ? 'mt-10' : ''}`}>
            Tarefas diárias
          </h1>
        </div>
        <div
          className={`bg-white w-full rounded-lg ${isOpen ? 'h-[55%]' : 'h-5/6'}`}
        >
          <AddOrderDialog todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos.filter((todo) => {
              return (
                differenceInDays(
                  addDays(new Date(todo.date), 1),
                  selectedDate,
                ) === 0 &&
                addDays(new Date(todo.date), 1).getDay() ===
                  selectedDate.getDay()
              )
            })}
            minHeight={360}
            className={`transition-all duration-1000`}
          />
        </div>
      </div>
      <div className="transition-all duration-1000 h-[90%]">
        <h1 className={`text-xl font-bold mb-4 ${isOpen ? 'mt-10' : ''}`}>
          Calendário
        </h1>
        <div className="h-5/6 w-full bg-white flex flex-row items-center justify-center rounded-lg gap-4">
          <SvgComponent />
          <a href="#" className="text-2xl text-handle-blue">
            Sincronizar conta Google
          </a>
        </div>
      </div>
    </div>
  )
}

export default CalendarPage
