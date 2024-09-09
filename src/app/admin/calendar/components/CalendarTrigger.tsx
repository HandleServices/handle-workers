import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PencilIcon } from 'lucide-react'

import upperCaseMonth from '@/utils/functions/upperCaseMonth'

interface CalendarTriggerProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedDate: Date | Date[]
}

const CalendarTrigger = ({
  isOpen,
  setIsOpen,
  selectedDate,
}: CalendarTriggerProps) => {
  return (
    !isOpen && (
      <div
        className="relative group hover:underline underline-offset-auto text-handle-blue cursor-pointer flex flex-row"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <span className="text-handle-blue tracking-widest select-none text-2xl font-medium">
            {format(
              selectedDate instanceof Date ? selectedDate : new Date(),
              'dd',
              { locale: ptBR },
            ) +
              ' de ' +
              upperCaseMonth(
                selectedDate instanceof Date ? selectedDate : new Date(),
              )}
          </span>
          <span className="text-handle-blue tracking-widest select-none ">
            {', ' +
              format(
                selectedDate instanceof Date ? selectedDate : new Date(),
                'cccc',
                { locale: ptBR },
              )}
          </span>
        </div>
        <PencilIcon className="text-handle-gray group-hover:text-handle-blue h-3 w-3" />
      </div>
    )
  )
}

export default CalendarTrigger
