'use client'

import TodoButton from '@/components/TodoList/TodoButton'
import TodoDialog from '@/components/TodoList/TodoDialog'

export default function App() {
  return (
    <div>
      <TodoButton>
        <TodoDialog />
      </TodoButton>
    </div>
  )
}
