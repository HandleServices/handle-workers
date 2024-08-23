import React from 'react'

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import TodoDialog from './TodoDialog'

const TodoButton = ({ ...props }) => {
  const [isSendingData, setIsSendingData] = React.useState(false)

  return (
    <Dialog {...props}>
      <DialogTrigger className="select-none text-handle-blue tracking-widest font-semibold">
        + Adicionar Tarefa
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        onInteractOutside={(e) => isSendingData && e.preventDefault()}
        onPointerDownOutside={(e) => isSendingData && e.preventDefault()}
        onEscapeKeyDown={(e) => isSendingData && e.preventDefault()}
      >
        <TodoDialog setIsSendingData={setIsSendingData} />
      </DialogContent>
    </Dialog>
  )
}

export default TodoButton
