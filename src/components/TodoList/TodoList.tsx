import './TodoList.css'

import TodoCard from './components/TodoCard'

export type Todo = {
  service: string
  client: string
  hour: string
  date: string
}

export interface TodoListProps {
  height?: number
  width?: number
  minHeight?: number
  className?: string
  todos: Todo[]
}

const TodoList = ({ width, minHeight, className, todos }: TodoListProps) => {
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
