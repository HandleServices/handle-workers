import { zodResolver } from '@hookform/resolvers/zod'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Input from '../Input'
import { LabelError } from '../LabelError'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '../Select/Select'
import TimePicker from '../TimePicker'

const TodoDialog = () => {
  const [services, setServices] = useState<string[]>([
    'Service 1',
    'Service 2',
    'Service 3',
  ])

  const TodoSchema = z.object({
    name: z.string(),
    service: z.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TodoSchema),
  })

  const onSubmit = (data: any) => console.log(data)

  // useEffect(() => {
  //   const fetchServices = async () => {
  //     // const response = await fetch('https://api.example.com/services')
  //     // const data = await response.json()
  //     // setServices(data)
  //   }
  // }, [services])
  //

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
            placeholder="Nome"
            className="text-base tracking-widest text-handle-gray"
            inputClassName="border-handle-gray"
            {...register('name', { required: true })}
            error={!!errors.name}
          />
          <LabelError errors={errors} name="name" />
        </div>
        <div className="flex flex-col gap-1">
          <Select {...(register('service'), { required: true })}>
            <SelectTrigger className="h-8 border-handle-gray text-handle-gray">
              Serviço Prestado
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <LabelError errors={errors} name="service" />
        </div>
        <button
          type="submit"
          className="bg-handle-blue text-white w-2/5 self-center tracking-widest rounded-md p-2"
        >
          Salvar
        </button>
      </form>
    </>
  )
}

export default TodoDialog
