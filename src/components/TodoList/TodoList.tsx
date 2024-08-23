import './TodoList.css'

import TodoButton from './TodoButton'
import TodoCard from './TodoCard'
import TodoDialog from './TodoDialog'

export type Todo = {
  type: string
  client: string
  hour: string
}

export interface TodoListProps {
  todos: Todo[]
  cardsToShow: number
  width: number
}

const TodoList = ({ todos, cardsToShow, width }: TodoListProps) => {
  return (
    <div
      className="flex flex-col p-2 pb-10 bg-white rounded-sm"
      style={{ width: `${width}px` }}
    >
      <div className="p-2 self-end">
        <TodoButton>
          <TodoDialog />
        </TodoButton>
      </div>
      <div
        className="p-4 pb-1 pr-2 gap-1 overflow-auto"
        style={{ height: `${cardsToShow * 82}px` }}
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
