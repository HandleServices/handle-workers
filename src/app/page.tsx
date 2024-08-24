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
  ]

  return (
    <div className="bg-handle-blue min-h-screen">
      <TodoList height={400} minHeight={400} todos={todos} width={472} />
    </div>
  )
}
