'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { DayOfWeekPicker } from '@/components/DaysOfWeekPicker'
import Input from '@/components/Input'
import { InputImage } from '@/components/InputImage'
import { LabelError } from '@/components/LabelError'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select/Select'
import TimePicker from '@/components/TimePicker'

const registerSchema = z.object({
  image: z.any().refine((file) => file && file.length > 0, {
    message: 'selecione uma image!',
  }),
  name: z.string().min(2, { message: 'Nome deve ter ao menos 2 caracteres.' }),
  selectedRole: z.string().min(1, { message: 'Selecione uma profissão' }),
  workingDays: z.array(z.string()).refine(
    (arg) => {
      const quantity = arg.length
      return quantity > 0
    },
    { message: 'Deve ter no mínimo 1 dia.' },
  ),

  workingHour: z.tuple([z.date(), z.date()]),
})

type RegisterType = z.infer<typeof registerSchema>

export default function CompleteRegister() {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    try {
      console.log(data)
      router.push('/app')
    } catch (error) {
      console.error(error)
      console.log(data)
    }
  }

  useEffect(() => {
    console.log(errors.image)
    console.log(errors.name)
    console.log(errors.selectedRole)
    console.log(errors.workingDays)
    console.log(errors.workingHour)
  }, [errors])

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
          <Controller
            control={control}
            name="image"
            render={({ field }) => <InputImage {...field} />}
          />
          <LabelError errors={errors} name="image" />
        </div>
        <div className="flex flex-col justify-evenly gap-[38px] w-full min-[200px]:mt-6 min-[200px]:max-[700px]:w-full items-center min-[200px]:max-[700px]:gap-3">
          <div className="w-full flex flex-col gap-1">
            <Input
              {...register('name')}
              error={!!errors.name}
              placeholder="Nome do seu negócio"
              customBgColor="bg-handle-background"
              sz="large"
              className="w-full"
            />

            <LabelError errors={errors} name="name" />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Controller
              control={control}
              name="selectedRole"
              render={({ field }) => (
                <Select {...field} onValueChange={(val) => field.onChange(val)}>
                  <SelectTrigger
                    error={!!errors.selectedRole}
                    className="bg-transparent h-16"
                  >
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
              )}
            />

            <LabelError errors={errors} name="selectedRole" />
          </div>
        </div>
      </div>
      <div className="border-[0.098rem] border-handle-gray-700 w-full h-full rounded-sm">
        <label className="absolute text-sm tracking-widest -mt-[15px] bg-handle-background ml-2 p-1">
          Meu expediente
        </label>
        <div className="flex flex-col items-center w-full h-full justify-center min-[200px]:py-4 min-[200px]:px-1">
          <div>
            <label htmlFor="" className="self-start mb-[7px] mt-[7px]">
              Selecione os dias que você trabalha :)
            </label>
            <div className="flex flex-col">
              <Controller
                control={control}
                name="workingDays"
                render={({ field }) => (
                  <DayOfWeekPicker
                    {...field}
                    className="h-full gap-[21.59px] min-[200px]:max-[500px]:gap-1 mb-[25px] w-full"
                  />
                )}
              />
              <div className="flex justify-center">
                <LabelError errors={errors} name="workingDays" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <TimePicker
              {...register('workingHour')}
              className="gap-[95px] w-full"
            />
            <div className="flex justify-center">
              <LabelError errors={errors} name="workingHour" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button
          type="submit"
          size="large"
          variant={'primary'}
          className="text-lg"
        >
          Finalizar
        </Button>
      </div>
    </form>
  )
}
