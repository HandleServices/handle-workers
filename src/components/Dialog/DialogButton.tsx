import React from 'react'

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

interface DialogButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
  children: React.ReactNode
  isSendingData: boolean
}

const DialogButton = ({
  title,
  children,
  isSendingData,
}: DialogButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger className="select-none text-handle-blue tracking-widest font-semibold">
        {title}
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => isSendingData && e.preventDefault()}
        onPointerDownOutside={(e) => isSendingData && e.preventDefault()}
        onEscapeKeyDown={(e) => isSendingData && e.preventDefault()}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default DialogButton
