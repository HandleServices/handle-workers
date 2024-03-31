'use client'

import * as Separator from '@radix-ui/react-separator'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { CustomCheckbox } from '@/components/Checkbox'
import Input from '@/components/Input'

import SvgComponent from '../assets/google'
import { cpfCnpjMask } from './functions/cpfCnpjMask'
import { phoneMask } from './functions/phoneMask'

export default function Register() {
  const [isChecked, setIsChecked] = useState(false)
  const [cpfValue, setCpfValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

  function handleCpfMask(event: { target: { value: string } }) {
    const { value } = event.target

    setCpfValue(cpfCnpjMask(value))
  }

  function handlePhoneMask(event: { target: { value: string } }) {
    const { value } = event.target

    setPhoneValue(phoneMask(value))
  }

  return (
    <form className="w-full min-h-screen px-20 py-10 flex items-center justify-center">
      <div className="w-2/3 gap-10 flex flex-col items-center justify-center bg-handle-background">
        <div className="w-full flex flex-col gap-6 bg-handle-background">
          <Input
            className="w-full"
            placeholder="Nome"
            customBgColor="bg-handle-background"
          />

          <Input
            className="w-full"
            placeholder="E-mail"
            customBgColor="bg-handle-background"
          />

          <div className="flex flex-row gap-6">
            <Input
              className="w-full"
              placeholder="Telefone"
              customBgColor="bg-handle-background"
              onChange={handlePhoneMask}
              value={phoneValue}
            />

            <Input
              className="w-full"
              placeholder="CPF/CNPJ"
              customBgColor="bg-handle-background"
              onChange={handleCpfMask}
              value={cpfValue}
            />
          </div>

          <div className="flex flex-row gap-6">
            <Input
              className="w-full"
              placeholder="Senha"
              type="password"
              customBgColor="bg-handle-background"
            />

            <Input
              className="w-full"
              placeholder="Repita a senha"
              type="password"
              customBgColor="bg-handle-background"
            />
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

          <Button
            type="submit"
            size="extra"
            action={() => ({})}
            variant="primary"
          >
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
            action={() => ({})}
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
