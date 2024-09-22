'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import { useContext, useLayoutEffect, useMemo, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
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
import { RegisterFormContext } from '@/contexts/RegisterFormContext'
import authService from '@/services/auth/auth.service'
import { ErrorType } from '@/types/enums/ErrorType'
import { HandleError } from '@/utils/class/HandleError'
import errorHandler from '@/utils/err/errorHandler'

import useCompleteRegisterHook from './complete-register.hook'

const registerSchema = z.object({
  image: z.any().refine((file) => file && file.length > 0, {
    message: 'selecione uma imagem!',
  }),
  businessName: z
    .string()
    .min(2, { message: 'Nome deve ter ao menos 2 caracteres.' }),
  selectedRole: z.string().min(1, { message: 'Selecione uma profissão' }),
  workingDays: z.array(z.string()).refine(
    (arg) => {
      const quantity = arg.length
      return quantity > 0
    },
    { message: 'Selecione ao menos um dia da semana ' },
  ),
  workingHour: z.tuple([z.string(), z.string()]) as unknown as z.ZodType<
    [string, string]
  >,
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
      workingHour: ['00:00', '00:00'],
    },
  })

  const { formData, updateFormData } = useContext(RegisterFormContext)
  const { setupRequest } = useCompleteRegisterHook()
  const [error, setError] = useState<HandleError | AxiosError>()
  const [errorCode, setErrorCode] = useState<ErrorType>()

  const ErrorComponent = useMemo(() => {
    return errorCode ? errorHandler[errorCode] : null
  }, [errorCode])

  useLayoutEffect(() => {
    const cookies = parseCookies()
    const isFirstRegisterComplete =
      cookies['handleworkers.isFirstRegisterComplete']

    if (!isFirstRegisterComplete) {
      router.push('/auth/register')
    }
  }, [router])

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    try {
      const combinedData = { ...formData, ...data }
      updateFormData(combinedData)
      // TODO: Deal with the photo
      // TODO: Deal with gender
      // TODO: Deal with job-id (lets create the others option)
      const sendData = setupRequest(combinedData)
      await authService.signup(sendData)
      toast.success('Cadastro feito com sucesso. Seja bem-vindo!')
      router.push('/auth/login')
    } catch (error) {
      let code = error?.response?.status as ErrorType
      if (!code) {
        code = ErrorType.NETWORK_ERROR
      }
      setError(error)
      setErrorCode(code)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid w-full h-full gap-6 sm:gap-12 py-5 sm:p-10 items-start sm:items-center"
      >
        <h1 className="text-2xl font-semibold tracking-wider text-handle-blue text-center">
          Nos conte sobre sua vida profissional :)
        </h1>
        <div className="grid sm:grid-cols-[0.3fr_1fr] sm:items-center gap-6">
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="image"
              render={({ field }) => <InputImage {...field} />}
            />
            <LabelError errors={errors} name="image" />
          </div>
          <div className="flex flex-col justify-evenly gap-[28px] w-full items-center">
            <div className="w-11/12 sm:w-full flex flex-col gap-1">
              <Input
                {...register('businessName')}
                error={!!errors.businessName}
                placeholder="Nome do seu negócio"
                customBgColor="bg-handle-background"
                sz="medium"
                height={56}
                className="w-full"
              />

              <LabelError errors={errors} name="businessName" />
            </div>

            <div className="w-11/12 sm:w-full flex flex-col gap-1">
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
        <div className="relative border-1.5 border-handle-gray-300 w-11/12 sm:w-full h-full rounded-lg justify-self-center">
          <label className="absolute text-sm tracking-widest -mt-[15px] bg-handle-background ml-2 p-1">
            Meu expediente
          </label>
          <div className="flex flex-col items-center w-full h-full justify-center min-[200px]:py-4 min-[200px]:px-0">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="self-start text-sm tracking-widest font-thin"
              >
                Selecione os dias que você trabalha :)
              </label>
              <div className="flex flex-col">
                <Controller
                  control={control}
                  name="workingDays"
                  defaultValue={[]}
                  render={({ field }) => (
                    <DaysOfWeekPicker
                      {...field}
                      className={clsx(
                        'h-full gap-1 min-[415px]:gap-2 sm:gap-[21.59px]  w-full',
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
              render={({ field }) => (
                <TimePicker
                  className=""
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <Button
            type="submit"
            size="large"
            variant={'primary'}
            className="text-lg"
          >
            {'Finalizar'}
          </Button>
        </div>
      </form>

      {ErrorComponent && error && <ErrorComponent error={error} />}
    </>
  )
}
