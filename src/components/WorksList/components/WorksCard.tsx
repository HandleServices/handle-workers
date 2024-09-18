import { useEffect, useRef, useState } from 'react'

import DialogButton from '@/components/Dialog/components/DialogButton'
import { DialogTitle } from '@/components/Dialog/Dialog'
import { WorkService } from '@/types/models/Service.model'

import PencilIcon from '../assets/PencilIcon'
import TrashIcon from '../assets/TrashIcon'

export interface WorkCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string
  cardInfo: WorkService
}

const WorkCard = ({ className, cardInfo, ...props }: WorkCardProps) => {
  const [editDialogIsOpen, setEditDialogIsOpen] = useState(false)
  const [editDialogIsPending, setEditDialogIsPending] = useState(false)
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const optionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        !editDialogIsOpen
      ) {
        setShowOptions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [editDialogIsOpen, optionsRef, showOptions])

  return (
    <div className="grid grid-cols-[1fr_0.12fr_0.10fr] ml-6 min-h-20 relative">
      <div className="flex flex-col">
        <h1 className="font-semibold tracking-wide">{cardInfo.name}</h1>
        <p className="text-handle-gray text-sm">{cardInfo.description}</p>
      </div>
      <div className="flex flex-row justify-between items-center text-handle-blue text-2xl">
        <span className="mr-2">R$</span>
        <span>{cardInfo.value.toFixed(2).replace('.', ',')}</span>
      </div>

      <div className="relative flex flex-col justify-center items-center">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className={`duration-500 ease-in-out delay-[1000ms] text-2xl p-0 mb-12 ${
            showOptions ? 'opacity-0 h-0 w-0 overflow-hidden' : 'opacity-100'
          }`}
        >
          ...
        </button>

        <div
          ref={optionsRef}
          className={`absolute top-0 flex flex-col justify-center items-center gap-2 transition-all duration-500 ease-in-out overflow-hidden ${
            showOptions ? 'max-h-32' : 'max-h-0'
          }`}
          style={{ top: '50%', transform: 'translateY(-50%)' }} // Centraliza os ícones
        >
          <div
            className={`transition-opacity duration-500 ease-in-out delay-[100ms] ${
              showOptions ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <DialogButton
              buttonTitle={
                <PencilIcon viewBox={`-3 -1 18 18`} height={25} width={25} />
              }
              setIsOpen={setEditDialogIsOpen}
              isSendingData={editDialogIsPending}
              isOpen={editDialogIsOpen}
              className="text-3xl flex justify-center items-center"
            >
              <DialogTitle>
                <p className="text-handle-blue text-2xl font-medium select-none mb-0">
                  Editando um serviço...
                </p>
                <p className="text-handle-blue text-base font-light select-none mt-0">
                  Por favor, modifique o que desejar.
                </p>
              </DialogTitle>
              <form></form>
            </DialogButton>
          </div>
          <div
            className={`transition-opacity duration-500 ease-in-out delay-[300ms] ${
              showOptions ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button className="text-3xl flex justify-center items-center">
              <TrashIcon viewBox={`-5 0 25 25`} height={25} width={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
