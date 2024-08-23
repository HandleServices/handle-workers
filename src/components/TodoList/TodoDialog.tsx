import { zodResolver } from '@hookform/resolvers/zod'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import Input from '../Input'
import { LabelError } from '../LabelError'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select/Select'
import TimePicker from '../TimePicker'

const TodoDialog = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [services, setServices] = useState<string[]>([
    'Service 1',
    'Service 2',
    'Service 3',
  ])
  const [hour] = useState('00:00')

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
  const onSubmit = (data: TodoDataType) => console.log('Submitted data:', data)

  return (
    <>
      <DialogTitle>
        <p className="text-handle-blue text-2xl font-medium">
          Cadastrando uma nova tarefa...
        </p>
        <p className="text-handle-blue text-base font-light">
          por favor preencha os campos necessários
        </p>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="w-11/12 sm:w-full flex flex-col gap-1">
          <Input
            customBgColor="bg-white"
            type="text"
            id="name"
            height={32}
            placeholder="Nome do cliente"
            labelClassName="text-base tracking-widest text-handle-gray"
            inputClassName="border-handle-gray h-8"
            className="text-handle-gray"
            {...register('name')}
            error={!!errors.name}
          />
          <LabelError errors={errors} name="name" />
        </div>
        <div className="flex flex-col gap-1">
          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={(value) => field.onChange(value)}
                {...field}
              >
                <SelectTrigger
                  className="h-8 border-handle-gray text-handle-gray"
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
                      className="bg-white h-8"
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
          <span className="text-handle-gray">Horário</span>
          <div className="flex flex-row">
            <Controller
              name="hour"
              control={control}
              defaultValue={hour}
              render={({ field }) => (
                <TimePicker
                  hour={field.value}
                  setHour={field.onChange}
                  className="border-handle-gray bg-white"
                  height={32}
                  style={{ fontSize: '1.75rem' }}
                />
              )}
            />
            <span className="self-end ml-1 text-handle-gray text-sm">
              horas/min
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-handle-blue text-white w-28 self-center tracking-widest rounded-md p-2"
        >
          Salvar
        </button>
      </form>
    </>
  )
}

export default TodoDialog
