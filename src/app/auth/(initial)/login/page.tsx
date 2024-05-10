'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Separator from '@radix-ui/react-separator'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import Input from '@/components/Input'
import { LabelError } from '@/components/LabelError'

import SvgComponent from '../assets/google'

const loginSchema = z.object({
  email: z.string().email({ message: 'Endereço de e-mail inválido.' }),
  password: z.string().min(8, { message: 'Deve ter no mínimo 8 caracteres.' }),
})

type LoginType = z.infer<typeof loginSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    // console.log('FINISHED')
    console.log(data)
    // alert(JSON.stringify(data))
    router.push('/admin/home')
  }

  const openRegister = () => {
    router.push('register')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-screen min-h-screen px-5 lg:px-20 py-0 lg:py-10 flex items-center justify-center"
    >
      <div className="w-2/3 gap-10 flex flex-col items-center justify-center bg-handle-background">
        <div className="w-full flex flex-col gap-6 bg-handle-background">
          <div className="w-full flex flex-col gap-1">
            <Input
              {...register('email')}
              error={!!errors.email}
              className="w-full"
              placeholder="E-mail"
              customBgColor="bg-handle-background"
              height="3rem"
            />

            <LabelError errors={errors} name="email" />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Input
              {...register('password')}
              error={!!errors.password}
              className="w-full"
              placeholder="Senha"
              type="password"
              customBgColor="bg-handle-background"
              height="3rem"
            />

            <LabelError errors={errors} name="password" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="">
            Ainda não possui uma conta?{' '}
            <a onClick={openRegister} className="font-bold cursor-pointer">
              Cadastre-se
            </a>
          </p>
          <Button
            type="submit"
            size="extra"
            action={() => ({})}
            variant="primary"
          >
            <span className="text-handle-background text-lg">Entrar</span>
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
            action={() => ({})}
            variant="secondary"
          >
            <span className="text-handle-gray-300 text-lg">
              Entrar com Google
            </span>
          </Button>
        </div>
      </div>
    </form>
  )
}
