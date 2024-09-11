import React from 'react'

import { Dialog, DialogContent, DialogTrigger } from '../Dialog'

interface DialogButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
  children: React.ReactNode
  isSendingData: boolean
  buttonClassName?: string
  className?: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogButton = ({
  title,
  children,
  isSendingData,
  buttonClassName,
  className,
  isOpen,
  setIsOpen,
}: DialogButtonProps) => {
  return (
    <div className={className}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger
          className={`select-none text-handle-blue tracking-widest font-semibold ${buttonClassName}`}
        >
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
    </div>
  )
}

export default DialogButton
