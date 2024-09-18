import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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

  const serviceSchema = z.object({
    value: z.number(),
    name: z.string(),
    description: z.string(),
  })

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(serviceSchema),
  })

  return (
    <div className="grid grid-cols-[1fr_0.12fr_0.10fr] ml-6 min-h-20">
      <div className="flex flex-col">
        <h1 className="font-semibold tracking-wide">{cardInfo.name}</h1>
        <p className="text-handle-gray text-sm">{cardInfo.description}</p>
      </div>
      <div className="flex flex-row justify-between items-center text-handle-blue text-2xl">
        <text className="mr-2">R$</text>
        <text>{cardInfo.value.toFixed(2).replace('.', ',')}</text>
      </div>
      <div className="flex flex-col justify-center items-center transition-all duration-1000">
        <button
          onClick={() => setShowOptions(true)}
          className={`text-2xl p-0 mb-12 ${showOptions ? 'hidden h-0 p-0 w-0 overflow-hidden' : ''}`}
        >
          ...
        </button>
        <div
          className={`flex flex-col transition-all duration-1000 justify-center items-center gap-2 ${showOptions ? 'h-full w-full ' : 'hidden'}`}
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
                por favor modifique o que desejar
              </p>
            </DialogTitle>
            <form></form>
          </DialogButton>
          <button className="text-3xl flex justify-center items-center">
            <TrashIcon viewBox={`-5 0 25 25`} height={25} width={25} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
