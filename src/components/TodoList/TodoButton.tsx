import { DialogTrigger } from '@radix-ui/react-dialog'
import React, { ReactNode, useEffect, useState, useTransition } from 'react'

import { Dialog, DialogContent } from '../ui/dialog'

export interface TodoButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode
}

const TodoButton = ({ children, ...props }: TodoButtonProps) => {
  const [isPending, startTransition] = useTransition()
  const [isLoadingChildren, setIsLoadingChildren] = useState(false) // Track children loading state

  // Assuming your children have a method to trigger loading
  const childrenRef = React.createRef<any>() // Reference to children component

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
      <DialogTrigger className="text-handle-blue tracking-widest">
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
