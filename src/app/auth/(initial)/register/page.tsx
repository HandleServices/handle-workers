'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Separator from '@radix-ui/react-separator'
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { CustomCheckbox } from '@/components/Checkbox'
import Input from '@/components/Input'
import { useFormattedForm } from '@/hooks/useFormattedForm'

import SvgComponent from './assets/google'
import { checkCpfCnpj, cpfCnpjMask } from './functions/cpfCnpjMask'
import { checkPhoneMask, phoneMask } from './functions/phoneMask'

const registerSchema = z
  .object({
    name: z.string().min(2, { message: 'Nome deve ter ao menos 2 caracteres' }),
    email: z.string().email({ message: 'Endereço de e-mail inválido' }),
    phoneNumber: z
      .string()
      .transform((arg) => phoneMask(arg))
      .refine((arg) => checkPhoneMask(arg), {
        message: 'Nùmero de telefone inválido',
      }),
    identificationNumber: z
      .string()
      .transform((arg) => cpfCnpjMask(arg))
      .refine((arg) => checkCpfCnpj(arg), {
        message: 'CPF/CNPJ inválido',
      }),
    password: z.string(),
    repeatPassword: z.string(),
  })
  .required()
  .superRefine((arg, ctx) => {
    if (arg.password !== arg.repeatPassword) {
      ctx.addIssue({
        message: 'As senhas devem ser iguais',
        code: z.ZodIssueCode.custom,
        path: [''],
        params: {
          '': true,
        },
      })
    }
  })

type RegisterType = z.infer<typeof registerSchema>

export default function Register() {
  const [isChecked, setIsChecked] = useState(false)

  const {
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

  const onSubmit: SubmitHandler<RegisterType> = (data) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-screen px-20 py-10 flex items-center justify-center"
    >
      <div className="w-2/3 gap-10 flex flex-col items-center justify-center bg-handle-background">
        <div className="w-full flex flex-col gap-6 bg-handle-background">
          <div className="w-full flex flex-col gap-2">
            <Input
              {...register('name')}
              error={!!errors.name}
              className="w-full"
              placeholder="Nome"
              customBgColor="bg-handle-background"
            />

            <p className="text-red-500 text-xs">{errors.name?.message}</p>
          </div>

          <div className="w-full flex flex-col gap-2">
            <Input
              {...register('email')}
              error={!!errors.email}
              className="w-full"
              placeholder="E-mail"
              customBgColor="bg-handle-background"
            />

            <p className="text-red-500 text-xs">{errors.email?.message}</p>
          </div>

          <div className="flex flex-row gap-6">
            <div className="w-full flex flex-col gap-2">
              <Input
                {...registerFormatted('phoneNumber')}
                error={!!errors.phoneNumber}
                className="w-full"
                placeholder="Telefone"
                customBgColor="bg-handle-background"
              />

              <p className="text-red-500 text-xs">
                {errors.phoneNumber?.message}
              </p>
            </div>

            <div className="w-full flex flex-col gap-2">
              <Input
                {...registerFormatted('identificationNumber')}
                error={!!errors.identificationNumber}
                className="w-full"
                placeholder="CPF/CNPJ"
                customBgColor="bg-handle-background"
              />

              <p className="text-red-500 text-xs">
                {errors.identificationNumber?.message}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-6">
            <div className="w-full flex flex-col gap-2">
              <Input
                {...register('password')}
                error={!!errors.password}
                className="w-full"
                placeholder="Senha"
                type="password"
                customBgColor="bg-handle-background"
              />

              <p className="text-red-500 text-xs">{errors.password?.message}</p>
            </div>

            <div className="w-full flex flex-col gap-2">
              <Input
                {...register('repeatPassword')}
                error={!!errors.repeatPassword}
                className="w-full"
                placeholder="Repita a senha"
                type="password"
                customBgColor="bg-handle-background"
              />

              <p className="text-red-500 text-xs">
                {errors.repeatPassword?.message}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <CustomCheckbox
            checked={isChecked}
            onCheckedChange={(checked) =>
              checked === 'indeterminate'
                ? setIsChecked(true)
                : setIsChecked(checked)
            }
            checkboxId="checkbox-login"
            label="Concordo e aceito os termos de consentimento."
          />

          <Button size="extra" variant="primary">
            <span className="text-handle-background text-lg">Finalizar</span>
          </Button>
        </div>

        <div className="w-full gap-4 flex flex-row items-center">
          <Separator.Root
            className="bg-handle-gray h-[1px] w-full"
            decorative
            orientation="horizontal"
          />

          <span className="text-handle-gray">ou</span>

          <Separator.Root
            className="bg-handle-gray h-[1px] w-full"
            decorative
            orientation="horizontal"
          />
        </div>

        <div>
          <Button
            type="button"
            size="extra"
            icon={<SvgComponent />}
            variant="secondary"
          >
            <span className="text-custom-gray-300 text-lg">
              Cadastrar-se com Google
            </span>
          </Button>
        </div>
      </div>
    </form>
  )
}
