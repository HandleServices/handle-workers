import React, { ReactNode, useEffect, useState, useTransition } from 'react'

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

export interface TodoButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode
}

const TodoButton = ({ children, ...props }: TodoButtonProps) => {
  const [isPending, startTransition] = useTransition()
  const [isLoadingChildren, setIsLoadingChildren] = useState(false) // Track children loading state

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef = React.createRef<any>()

  useEffect(() => {
    // Handle potential loading triggered within children (replace with actual logic)
    if (childrenRef.current && childrenRef.current.triggerLoading) {
      childrenRef.current.triggerLoading(() => {
        setIsLoadingChildren(true)
        startTransition(() => {
          setIsLoadingChildren(false)
        })
      })
    }
  }, [childrenRef])

  return (
    <Dialog {...props}>
      <DialogTrigger className="text-handle-blue tracking-widest font-semibold">
        + Adicionar Tarefa
      </DialogTrigger>
      {isPending ? (
        <DialogContent>Loading...</DialogContent>
      ) : (
        <DialogContent ref={childrenRef}>
          {isLoadingChildren ? 'Loading children...' : children}
        </DialogContent>
      )}
    </Dialog>
  )
}

export default TodoButton
