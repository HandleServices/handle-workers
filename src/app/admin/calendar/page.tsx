'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dialog, DialogTitle } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import DialogButton from '@/components/Dialog/components/DialogButton'
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
import TodoList from '@/components/TodoList/TodoList'

const Calendar = () => {
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
  const onSubmit = async (
    data: TodoDataType,
  ): Promise<TodoDataType | undefined> => {
    if (setIsSendingData) setIsSendingData(true)
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 10000)).then(() =>
      console.log(data),
    )
    setLoading(false)
    if (setIsSendingData) setIsSendingData(false)
    return undefined
  }
  return (
    <div className="bg-white w-[487px]">
      <DialogButton
        className="p-4 w-full text-end select-none "
        isSendingData={isSendingData}
        title="+ clique aqui"
      >
        <Dialog>
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
            {!loading ? (
              <button
                type="submit"
                className="bg-handle-blue text-white w-28 self-center tracking-widest rounded-md p-2 select-none"
              >
                Salvar
              </button>
            ) : (
              <div>Carregando</div>
            )}
          </form>
        </Dialog>
      </DialogButton>
      <TodoList height={400} minHeight={400} width={472} />
    </div>
  )
}

export default Calendar
