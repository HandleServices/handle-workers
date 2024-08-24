import './TodoList.css'

import TodoButton from './TodoButton'
import TodoCard from './TodoCard'

export type Todo = {
  type: string
  client: string
  hour: string
}

export interface TodoListProps {
  todos: Todo[]
  height: number
  width: number
  minHeight: number
}

const TodoList = ({ todos, minHeight, height, width }: TodoListProps) => {
  return (
    <div
      className="flex flex-col p-2 pb-10 bg-white rounded-sm"
      style={{ width: `${width}px` }}
    >
      <div className="p-2 self-end">
        <TodoButton />
      </div>
      <div
        className="p-4 pb-1 pr-2 gap-1 overflow-auto"
        style={{ minHeight: `${minHeight}px`, height: `${height}px` }}
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
