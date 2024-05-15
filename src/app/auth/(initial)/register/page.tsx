'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Separator from '@radix-ui/react-separator'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { CustomCheckbox } from '@/components/Checkbox'
import Input from '@/components/Input'
import { LabelError } from '@/components/LabelError'
import { generalErrorSchemaKey } from '@/components/LabelError/LabelError'
import { useFormattedForm } from '@/hooks/useFormattedForm'
import { checkCpfCnpj, cpfCnpjMask } from '@/utils/mask-cpf-cnpj'
import { checkPhoneMask, phoneMask } from '@/utils/mask-phone'

import SvgComponent from '../assets/google'

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
      .min(8, { message: 'Deve ter no mínimo 8 caracteres.' }),
    repeatPassword: z
      .string()
      .min(8, { message: 'Deve ter no mínimo 8 caracteres.' }),
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

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    // console.log('FINISHED')
    console.log(data)
    // alert(JSON.stringify(data))
    router.push('complete_register')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-screen px-20 py-10 flex items-center justify-center"
    >
      <div className="w-2/3 gap-10 flex flex-col items-center justify-center bg-handle-background">
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

          <div className="flex flex-row gap-6">
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

          <div className="flex flex-row gap-6">
            <div className="w-full flex flex-col gap-1">
              <Input
                {...register('password')}
                error={!!errors.password}
                className="w-full"
                placeholder="Senha"
                type="password"
                customBgColor="bg-handle-background"
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
              />

              <LabelError errors={errors} name="repeatPassword" />
            </div>
          </div>

          <LabelError errors={errors} name={generalErrorSchemaKey} />
        </div>

        <div className="flex flex-col gap-1">
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
                  const isChecked = checked === 'indeterminate' ? true : checked
                  onChange(isChecked)
                }}
                checkboxId="checkbox-login"
                label="Concordo e aceito os termos de consentimento."
              />
            )}
          />

          <LabelError errors={errors} name="agree" />

          <Button size="large" variant="primary">
            <span className="text-handle-background text-lg">Cadastrar</span>
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
          size="extra"
          icon={<SvgComponent />}
          variant="secondary"
        >
          <span className="text-handle-gray-300 text-lg">
            Cadastrar-se com Google
          </span>
        </Button>
      </div>
    </form>
  )
}
