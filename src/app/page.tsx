'use client'

import TodoList from '@/components/TodoList/TodoList'

export default function App() {
  const todos = [
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
    { type: 'Limpeza de Ar', client: 'Carlos André', hour: '01:00' },
  ]

  return (
    <div className="bg-handle-blue min-h-screen">
      <TodoList cardsToShow={5} todos={todos} width={472} />
    </div>
  )
}
