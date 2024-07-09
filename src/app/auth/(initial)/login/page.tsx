'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Separator from '@radix-ui/react-separator'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { Button } from '@/components/Button'
import Input from '@/components/Input'
import { LabelError } from '@/components/LabelError'
import { AuthContext } from '@/contexts/AuthContext'
import { useBreakpoint } from '@/lib/hooks/useBreakpoints'
import { LoginDto } from '@/types/dtos/auth/LoginDto'

import SvgComponent from '../assets/google'

const loginSchema = z.object({
  email: z.string().email({ message: 'Endereço de e-mail inválido.' }),
  password: z.string().min(8, { message: 'Senha inválida' }),
})

type LoginType = z.infer<typeof loginSchema>

export default function Login() {
  const { isBelowMd } = useBreakpoint('md')
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()
  const { signIn } = useContext(AuthContext)

  const onSubmit: SubmitHandler<LoginType> = async (data: LoginDto) => {
    try {
      setLoading(true)
      const response = await signIn(data)
      if (response.error) {
        toast.error(response.error)
      } else {
        toast.success('Login realizado com sucesso! ;)')
        router.push('/admin/home')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const openRegister = () => {
    router.push('register')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-[586px]:min-h-screen max-[585px]:h-full max-[1000px]:px-4 max-[1000px]:py-8 px-20 py-10 flex items-center justify-evenly"
    >
      <div className="w-2/3 max-[1000px]:w-11/12 max-[1400px]:w-10/12 h-full gap-10 max-[585px]:gap-14 flex flex-col items-center justify-start max-[585px]:mt-20 bg-handle-background">
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
              inputClassName="pr-14"
            />

            <LabelError errors={errors} name="password" />
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col gap-4">
            <p className="">
              Ainda não possui uma conta?{' '}
              <a onClick={openRegister} className="font-bold cursor-pointer">
                Cadastre-se
              </a>
            </p>
            <Button
              type="submit"
              size={isBelowMd ? 'mediumlg' : 'large'}
              action={() => ({})}
              variant="primary"
              className="self-center"
              disabled={!!loading}
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
              disabled={!!loading}
            >
              <span className="text-handle-gray-300 text-lg">
                Entrar com Google
              </span>
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
