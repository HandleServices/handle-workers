export interface TodoCardProps {
  type: string
  client: string
  hour: string
}

const TodoCard = ({ type, client, hour }: TodoCardProps) => {
  return (
    <div className="bg-white h-16 w-full">
      <div className="grid grid-cols-[30px_1fr_80px] h-full items-center">
        <div className="h-2 w-2 bg-handle-blue opacity-20 self-center mr-4" />
        <div>
          <h3 className="text-handle-gray-300 font-semibold text-base tracking-widest">
            {type}
          </h3>
          <p className="text-handle-gray text-sm tracking-widest">{client}</p>
        </div>
        <p className="text-handle-blue font-bold text-sm self-center text-center w-[72px] bg-handle-background-blue rounded-sm tracking-widest">
          {hour}
        </p>
      </div>
    </div>
  )
}

export default TodoCard
