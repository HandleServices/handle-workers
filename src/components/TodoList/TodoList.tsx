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
      className="flex flex-col p-2 bg-white rounded-sm"
      style={{ width: `${width}px` }}
    >
      <div className="p-2 self-end">
        <TodoButton>
          <TodoDialog />
        </TodoButton>
      </div>
      <div
        className="p-4 pb-1 pr-2 gap-1 overflow-auto"
        style={{ height: `${8 + cardsToShow * 66}px` }}
      >
        {todos.map((todo, index) => (
          <>
            <TodoCard key={index} {...todo} />
            <hr />
          </>
        ))}
      </div>
    </div>
  )
}

export default TodoList

// style={{ height: `${8 + cardsToShow * 55}px` }}
