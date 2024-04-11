'use client'

import * as Separator from '@radix-ui/react-separator'

import { Button } from '@/components/Button'
import Input from '@/components/Input'

import SvgComponent from '../assets/google'

export default function Login() {
  return (
    <form className="w-full max-w-screen min-h-screen px-5 lg:px-20 py-0 lg:py-10 flex items-center justify-center">
      <div className="w-2/3 gap-10 flex flex-col items-center justify-center bg-handle-background">
        <div className="w-full flex flex-col gap-6 bg-handle-background">
          <Input
            className="w-full"
            placeholder="E-mail"
            customBgColor="bg-handle-background"
            height="3rem"
          />

          <Input
            className="w-full"
            placeholder="Senha"
            type="password"
            customBgColor="bg-handle-background"
            height="3rem"
          />
        </div>

        <div className="flex flex-col gap-2">
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
            <span className="text-custom-gray-300 text-lg">
              Entrar com Google
            </span>
          </Button>
        </div>
      </div>
    </form>
  )
}
