'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Separator from '@radix-ui/react-separator'
import { useRouter } from 'next/navigation'
import router from 'next/router'
import { useContext, useState } from 'react'
import { Controller, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { CustomCheckbox } from '@/components/Checkbox'
import Input from '@/components/Input'
import { LabelError } from '@/components/LabelError'
import { generalErrorSchemaKey } from '@/components/LabelError/LabelError'
import { RegisterFormContext } from '@/contexts/RegisterFormContext'
import { ValidateRegisterDto } from '@/types/dtos/auth/ValidateRegisterDto'
import { handleErrorMessage } from '@/utils/functions/errors-type-guards'
import { hashPassword } from '@/utils/functions/hash-password'
import { useBreakpoint } from '@/utils/hooks/useBreakpoints'
import { useFormattedForm } from '@/utils/hooks/useFormattedForm'
import { checkCpfCnpj, cpfCnpjMask } from '@/utils/masks/mask-cpf-cnpj'
import { checkPhoneMask, phoneMask } from '@/utils/masks/mask-phone'

import SvgComponent from '../assets/google'
import useRegisterHook from './register.hook'

const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Nome deve ter ao menos 2 caracteres.' }),
    email: z.string().email({ message: 'Endereço de e-mail inválido.' }),
    phoneNumber: z
      .string()
      .transform((arg) => phoneMask(arg))
      .refine((arg) => checkPhoneMask(arg), {
        message: 'Número de telefone inválido.',
      }),
    identificationNumber: z
      .string()
      .transform((arg) => cpfCnpjMask(arg))
      .refine((arg) => checkCpfCnpj(arg), {
        message: 'CPF/CNPJ inválido.',
      }),
    password: z
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' }),
    repeatPassword: z
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' }),
    agree: z.boolean().refine((value) => value === true, {
      message: 'Aceite os termos de consentimento para continuar.',
    }),
  })
  .refine((arg) => arg.password === arg.repeatPassword, {
    message: 'As senhas devem ser iguais.',
    path: [generalErrorSchemaKey],
  })

type RegisterType = z.infer<typeof registerSchema>

export default function Register() {
  const router = useRouter()
  const { isBelowSm } = useBreakpoint('sm')

  const {
    control,
    register,
    registerFormatted,
    handleSubmit,
    formState: { errors },
  } = useFormattedForm<RegisterType, 'phoneNumber' | 'identificationNumber'>(
    {
      resolver: zodResolver(registerSchema),
    },
    [
      {
        key: 'phoneNumber',
        format: phoneMask,
      },
      {
        key: 'identificationNumber',
        format: cpfCnpjMask,
      },
    ],
  )

  const { updateFormData } = useContext(RegisterFormContext)
  const { validateRegister } = useRegisterHook()

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    try {
      data.password = await hashPassword(data.password)
      const { name, email, phoneNumber, identificationNumber, password } = data

      const passData = {
        name,
        email,
        phoneNumber,
        identificationNumber,
        password,
      }

      const validateData: ValidateRegisterDto = {
        email,
        identificationNumber,
        phoneNumber,
      }

      await validateRegister(validateData)
      await updateFormData(passData)
      router.push('complete_register')
    } catch (error) {
      const errorMessage = handleErrorMessage(error)
      toast.error(errorMessage)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-[586px]:min-h-screen max-[585px]:h-full max-[1000px]:px-2 max-[1000px]:py-8 px-20 py-10 flex items-center justify-center"
    >
      <div className="w-2/3 max-[1000px]:w-11/12 max-[1400px]:w-10/12 gap-10 flex flex-col items-center min-[585px]:justify-center bg-handle-background">
        <div className="w-full flex flex-col gap-6 bg-handle-background">
          <div className="w-full flex flex-col gap-1">
            <Input
              {...register('name')}
              error={!!errors.name}
              className="w-full"
              placeholder="Nome"
              customBgColor="bg-handle-background"
              sz="large"
            />

            <LabelError errors={errors} name="name" />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Input
              {...register('email')}
              error={!!errors.email}
              className="w-full"
              placeholder="E-mail"
              customBgColor="bg-handle-background"
            />

            <LabelError errors={errors} name="email" />
          </div>

          <div className="flex flex-row gap-6 max-[650px]:gap-2">
            <div className="w-full flex flex-col gap-1">
              <Input
                {...registerFormatted('phoneNumber')}
                error={!!errors.phoneNumber}
                className="w-full"
                placeholder="Telefone"
                customBgColor="bg-handle-background"
              />

              <LabelError errors={errors} name="phoneNumber" />
            </div>

            <div className="w-full flex flex-col gap-1">
              <Input
                {...registerFormatted('identificationNumber')}
                error={!!errors.identificationNumber}
                className="w-full"
                placeholder="CPF/CNPJ"
                customBgColor="bg-handle-background"
              />

              <LabelError errors={errors} name="identificationNumber" />
            </div>
          </div>

          <div className="flex flex-row gap-6 max-[650px]:gap-2">
            <div className="w-full flex flex-col gap-1">
              <Input
                {...register('password')}
                error={!!errors.password}
                className="w-full"
                placeholder="Senha"
                type="password"
                customBgColor="bg-handle-background"
                inputClassName="pr-14"
              />

              <LabelError errors={errors} name="password" />
            </div>

            <div className="w-full flex flex-col gap-1">
              <Input
                {...register('repeatPassword')}
                error={!!errors.repeatPassword}
                className="w-full"
                placeholder="Repita a senha"
                type="password"
                customBgColor="bg-handle-background"
                inputClassName="pr-14"
              />

              <LabelError errors={errors} name="repeatPassword" />
            </div>
          </div>

          <LabelError errors={errors} name={generalErrorSchemaKey} />
        </div>

        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-col gap-1 items-center justify-center">
            <Controller
              name="agree"
              defaultValue={false}
              control={control}
              render={({ field: { name, onChange, ref, disabled, value } }) => (
                <CustomCheckbox
                  ref={ref}
                  name={name}
                  disabled={disabled}
                  checked={value === true}
                  onCheckedChange={(checked) => {
                    const isChecked =
                      checked === 'indeterminate' ? true : checked
                    onChange(isChecked)
                  }}
                  checkboxId="checkbox-login"
                  label="Concordo e aceito os termos de consentimento."
                />
              )}
            />

            <LabelError errors={errors} name="agree" />
            <Button
              size={isBelowSm ? 'mediumlg' : 'large'}
              variant="primary"
              className="mt-5"
            >
              <span className="text-handle-background max-[770px]:text-[0.9rem] text-lg">
                {'Cadastrar'}
              </span>
            </Button>
          </div>

          <div className="w-full gap-4 flex flex-row items-center">
            <Separator.Root
              className="bg-handle-gray h-[1px] w-full"
              decorative
              orientation="horizontal"
            ></Separator.Root>

            <span className="text-handle-gray">ou</span>

            <Separator.Root
              className="bg-handle-gray h-[1px] w-full"
              decorative
              orientation="horizontal"
            ></Separator.Root>
          </div>

          <Button
            type="button"
            size={isBelowSm ? 'mediumlg' : 'extra'}
            icon={<SvgComponent />}
            variant="secondary"
          >
            <span className="w-full text-handle-gray-300 max-[645px]:text-[0.85rem] min-[646px]:text-lg">
              Cadastrar-se com Google
            </span>
          </Button>
        </div>
      </div>
    </form>
  )
}
