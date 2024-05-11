'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { string, z } from 'zod'

import { Button } from '@/components/Button'
import { DayOfWeekPicker } from '@/components/DaysOfWeekPicker'
import Input from '@/components/Input'
import { InputImage } from '@/components/InputImage'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select/Select'
import TimePicker from '@/components/TimePicker'

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter ao menos 2 caracteres.' }),
  role: z.string().min(1, { message: 'Selecione uma profissão' }),
  image: z.string().min(1, { message: 'Adicione uma imagem!' }),
  workingDays: z
    .string()
    .array()
    .min(1, { message: 'Selecione pelo menos 1 dia de trabalho' }),
  workingHour: z
    .string()
    .array()
    .min(1, { message: 'Selecione o horário de trabalho!' }),
})

type RegisterType = z.infer<typeof registerSchema>

export default function CompleteRegister() {
  const [workingDays, setworkingDays] = React.useState<string>('')
  const [workingHours, setWorkingHours] = React.useState<Array<string>>()
  const [selectedRole, setSelectedRole] = React.useState<string>('')

  const handleTimeChange = (timeRange: string[]) => {
    setWorkingHours(timeRange)
  }

  const router = useRouter()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    console.log(data)
    // router.push('complete_register')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-rows-[30px_1fr_1fr_50px] w-full h-full gap-12 sm:gap-6 min-[200px]:max-[700px]:gap-5"
    >
      <h1 className="text-2xl font-semibold tracking-wider text-handle-blue text-center min-[200px]:max-[700px]:-mt-4">
        Nos conte sobre sua vida profissional :)
      </h1>
      <div className="md:grid md:grid-cols-[1fr_2fr] sm:flex sm:flex-col sm:items-center gap-6">
        <div className="flex flex-col items-center">
          <InputImage {...register('image')} />
        </div>
        <div className="flex flex-col justify-evenly gap-[38px] w-full min-[200px]:mt-6 min-[200px]:max-[700px]:w-full items-center min-[200px]:max-[700px]:gap-3">
          <Input
            {...register('name')}
            placeholder="Nome"
            customBgColor="bg-handle-background"
            sz="large"
            className="w-full"
          />
          <Select {...register('role')} onValueChange={setSelectedRole}>
            <SelectTrigger className="bg-transparent h-16">
              <SelectValue placeholder={'Selecione sua profissão'} />
            </SelectTrigger>
            <SelectContent>
              {[
                'Desenvolvedor',
                'Designer',
                'Engenheiro',
                'Estudante',
                'Outro',
              ].map((item) => {
                return (
                  <SelectItem
                    className="bg-transparent"
                    key={item}
                    value={item}
                  >
                    {item}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="border-[0.098rem] border-handle-gray-700 w-full h-full rounded-sm">
        <label className="absolute text-sm tracking-widest -mt-[15px] bg-handle-background ml-2 p-1">
          Meu expediente
        </label>
        <div className="flex flex-col items-center  w-full h-full justify-center min-[200px]:py-4 min-[200px]:px-1">
          <div>
            <label htmlFor="" className="self-start mb-[7px] mt-[7px]">
              Selecione os dias que você trabalha :)
            </label>
            <DayOfWeekPicker
              {...register('workingDays')}
              value={workingDays}
              onValueChange={(selectedDay: string) => {
                if (selectedDay) setworkingDays(selectedDay)
              }}
              className="h-full gap-[21.59px] min-[200px]:max-[500px]:gap-1 mb-[25px] w-full"
            />
          </div>
          <TimePicker
            {...register('workingHour')}
            className="gap[95px] w-full"
            cb={handleTimeChange}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button size="large" variant={'primary'} className="text-lg">
          Finalizar
        </Button>
      </div>
    </form>
  )
}
