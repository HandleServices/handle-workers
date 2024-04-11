import {
  FieldValues,
  useForm,
  UseFormProps,
  UseFormRegisterReturn,
} from 'react-hook-form'

import { cpfCnpjMask } from '@/app/auth/(initial)/register/functions/cpfCnpjMask'
import { phoneMask } from '@/app/auth/(initial)/register/functions/phoneMask'

export function useFormattedForm<TFieldValues extends FieldValues>(
  defaultValues?: UseFormProps<TFieldValues, unknown>,
) {
  const methods = useForm<UseFormProps<TFieldValues, unknown>>({
    defaultValues,
  })

  const formatPhoneNumber = (value: string) => {
    const formattedValue = phoneMask(value)

    return formattedValue
  }

  const formatCpfCnpj = (value: string) => {
    const formattedValue = cpfCnpjMask(value)

    return formattedValue
  }

  const registerFormatted = (
    name: keyof UseFormProps<TFieldValues, unknown>,
    options: {
      as: 'phone-number' | 'cpf-cnpj'
    },
  ): UseFormRegisterReturn => {
    const format = {
      'phone-number': formatPhoneNumber,
      'cpf-cnpj': formatCpfCnpj,
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      methods.setValue(name, format[options.as](value))
    }
    return methods.register(name, { ...options, onChange })
  }

  return { ...methods, registerFormatted }
}
