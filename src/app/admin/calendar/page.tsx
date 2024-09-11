'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogTitle } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import SvgComponent from '@/app/auth/(initial)/assets/google'
import { Calendar } from '@/components/Calendar/Calendar'
import DialogButton from '@/components/Dialog/components/DialogButton'
import { DialogFooter } from '@/components/Dialog/Dialog'
import Input from '@/components/Input'
import { LabelError } from '@/components/LabelError'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select/Select'
import TimePicker from '@/components/TimePicker'
import TodoList from '@/components/TodoList'

import CalendarTrigger from './components/CalendarTrigger'

const CalendarPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState<Date | Date[]>(
    new Date(),
  )
  const [isSendingData, setIsSendingData] = useState(false)
  const [services, setServices] = useState<string[]>([
    'Service 1',
    'Service 2',
    'Service 3',
  ])

  const [hour] = useState('00:00')
  const [loading, setLoading] = useState(false)

  type TodoDataType = {
    name: string
    service: string
    hour: string
  }

  const TodoSchema = z.object({
    name: z.string().min(1, 'Precisa identificar a tarefa!'),
    service: z.string().min(1, 'Necessário selecionar um tipo de serviço!'),
    hour: z.string(),
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TodoSchema),
    defaultValues: {
      name: '',
      service: '',
      hour: '00:00',
    },
  })

  // TODO: Make a request to get services from the server
  // TODO: Manipulate data and make logic here.
  const onSubmit = async (data: TodoDataType): Promise<void> => {
    setIsSendingData(true)
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
      console.log(data)
    })
    console.log(document.querySelector('dialog'))
    setLoading(false)
    setIsSendingData(false)
    setDialogIsOpen(false)
  }

  return (
    <div className="grid grid-cols-2 gap-16 w-[85%] h-[95%] self-center overflow-none">
      <div>
        <CalendarTrigger
          type="text"
          selectedDate={selectedDate}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <Calendar
          selectedDate={selectedDate}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setSelectedDate={setSelectedDate}
          className={`bg-white ${isOpen ? '' : 'h-0 p-0 overflow-hidden'}`}
        />

        <div>
          <h1 className={`text-xl font-bold mb-4 ${isOpen ? 'mt-10' : ''}`}>
            Tarefas diárias
          </h1>
        </div>
        <div
          className={`bg-white w-full rounded-lg ${isOpen ? 'h-[55%]' : 'h-5/6'}`}
        >
          <DialogButton
            className="p-4 text-end select-none rounded-md"
            isSendingData={isSendingData}
            title="+ clique aqui"
            buttonClassName="w-32 p-1"
            isOpen={dialogIsOpen}
            setIsOpen={setDialogIsOpen}
          >
            <DialogTitle>
              <p className="text-handle-blue text-2xl font-medium select-none mb-0">
                Cadastrando uma nova tarefa...
              </p>
              <p className="text-handle-blue text-base font-light select-none mt-0">
                por favor preencha os campos necessários
              </p>
            </DialogTitle>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="sm:w-full flex flex-col gap-1 select-none">
                <Input
                  customBgColor="bg-white"
                  type="text"
                  id="name"
                  height={32}
                  placeholder="Nome do cliente"
                  labelClassName="text-base tracking-widest text-handle-gray select-none"
                  inputClassName="border-handle-gray h-8 select-none"
                  className="text-handle-gray select-none"
                  {...register('name')}
                  error={!!errors.name}
                />
                <LabelError errors={errors} name="name" />
              </div>
              <div className="flex flex-col gap-1 select-none">
                <Controller
                  name="service"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger
                        className="h-8 select-none border-handle-gray text-handle-gray"
                        error={!!errors.service}
                      >
                        <SelectValue
                          defaultValue={services}
                          placeholder="Serviço prestado"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem
                            className="bg-white h-8 select-none"
                            key={service}
                            value={service}
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <LabelError errors={errors} name="service" />
              </div>
              <div>
                <span className="text-handle-gray select-none">Horário</span>
                <div className="flex flex-row">
                  <Controller
                    name="hour"
                    control={control}
                    defaultValue={hour}
                    render={({ field }) => (
                      <TimePicker
                        hour={field.value}
                        setHour={field.onChange}
                        className="border-handle-gray select-none bg-white"
                        height={32}
                        style={{ fontSize: '1.75rem' }}
                      />
                    )}
                  />
                  <span className="self-end ml-1 text-handle-gray text-sm select-none">
                    horas/min
                  </span>
                </div>
              </div>
              <DialogFooter>
                <button
                  type="submit"
                  aria-label="close"
                  className={`bg-handle-blue text-white w-28 self-center tracking-widest rounded-md p-2 select-none ${loading ? 'bg-handle-gray text-white' : ''}`}
                  disabled={loading}
                >
                  Salvar
                </button>
              </DialogFooter>
            </form>
          </DialogButton>
          <TodoList
            minHeight={360}
            className={`transition-all duration-1000`}
          />
        </div>
      </div>
      <div className="transition-all duration-1000 h-[90%]">
        <h1 className={`text-xl font-bold mb-4 ${isOpen ? 'mt-10' : ''}`}>
          Calendário
        </h1>
        <div className="h-5/6 w-full bg-white flex flex-row items-center justify-center rounded-lg gap-4">
          <SvgComponent />
          <span className="text-2xl text-handle-blue">
            Sincronizar conta Google
          </span>
        </div>
      </div>
    </div>
  )
}

export default CalendarPage
