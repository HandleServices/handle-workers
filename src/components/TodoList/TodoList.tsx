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

const TodoList = ({ width, minHeight, className }: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useCallback(async () => {
    setTodos(await new Promise((resolve) => setTimeout(resolve, 10000, [])))
  }, [])

  return (
    <div
      className={`flex flex-col p-2 pb-6 bg-white rounded-sm w-full ${className}`}
      style={{ minHeight: `${minHeight}px`, width: `${width}px` }}
    >
      {todos.map((todo, index) => (
        <div key={index}>
          <TodoCard {...todo} />
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TodoList
