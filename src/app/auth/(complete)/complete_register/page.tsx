'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { DaysOfWeekPicker } from '@/components/DaysOfWeekPicker'
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
    message: 'selecione uma imagem!',
  }),
  name: z.string().min(2, { message: 'Nome deve ter ao menos 2 caracteres.' }),
  selectedRole: z.string().min(1, { message: 'Selecione uma profissão' }),
  workingDays: z.array(z.string()).refine(
    (arg) => {
      const quantity = arg.length
      return quantity > 0
    },
    { message: 'Selecione ao menos um dia da semana ' },
  ),
  workingHour: z.tuple([z.string(), z.string()]),
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
    defaultValues: {
      selectedRole: '',
    },
  })

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    try {
      console.log(data)
      router.push('/admin/home')
    } catch (error) {
      console.error(error)
      console.log(data)
    }
  }

  console.log(errors.selectedRole)

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
        <div className="flex flex-col justify-evenly gap-[28px] w-full min-[200px]:mt-6 min-[200px]:max-[700px]:w-full items-center min-[200px]:max-[700px]:gap-3">
          <div className="w-full flex flex-col gap-1">
            <Input
              {...register('name')}
              error={!!errors.name}
              placeholder="Nome do seu negócio"
              customBgColor="bg-handle-background"
              sz="large"
              height={56}
              className="w-full"
            />

            <LabelError errors={errors} name="name" />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Controller
              control={control}
              name="selectedRole"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger
                    error={!!errors.selectedRole}
                    className="bg-transparent h-14"
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
      <div className="border-1.5 border-handle-gray-300 w-full h-full rounded-lg">
        <label className="absolute text-sm tracking-widest -mt-[15px] bg-handle-background ml-2 p-1">
          Meu expediente
        </label>
        <div className="flex flex-col items-center w-full h-full justify-center min-[200px]:py-4 min-[200px]:px-1">
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="self-start text-sm tracking-widest font-thin"
            >
              Selecione os dias que você trabalha :)
            </label>
            <div className="flex flex-col gap-0">
              <Controller
                control={control}
                name="workingDays"
                defaultValue={[]}
                render={({ field }) => (
                  <DaysOfWeekPicker
                    {...field}
                    className={clsx(
                      'h-full gap-[21.59px] min-[200px]:max-[500px]:gap-1 w-full',
                      {
                        'mb-3': errors.workingDays,
                        'mb-6': !errors.workingDays,
                      },
                    )}
                  />
                )}
              />
              <div
                className={clsx('flex justify-center', {
                  'mb-5': errors.workingDays,
                  'mb-0': !errors.workingDays,
                })}
              >
                <LabelError errors={errors} name="workingDays" />
              </div>
            </div>
          </div>
          <Controller
            name="workingHour"
            control={control}
            defaultValue={['00:00', '00:00']}
            render={({ field }) => (
              <TimePicker value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button
          type="submit"
          size="extra"
          variant={'primary'}
          className="text-lg"
        >
          Finalizar
        </Button>
      </div>
    </form>
  )
}
