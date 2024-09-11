import './TodoList.css'

import { useCallback, useState } from 'react'

import TodoCard from './components/TodoCard'

export type Todo = {
  type: string
  client: string
  hour: string
}

export interface TodoListProps {
  height?: number
  width?: number
  minHeight?: number
  className?: string
}

const TodoList = ({ minHeight, className }: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useCallback(async () => {
    setTodos(await new Promise((resolve) => setTimeout(resolve, 10000, [])))
  }, [])

  return (
    <div
      className={`flex flex-col p-2 pb-6 bg-white rounded-sm w-full ${className}`}
    >
      <div
        className="p-4 pb-1 pr-2 gap-1 overflow-auto h-full"
        style={{ minHeight: `${minHeight}px` }}
      >
        {todos.map((todo, index) => (
          <div key={index}>
            <TodoCard {...todo} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
