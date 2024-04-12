'use client'

import {
  Path,
  PathValue,
  useForm,
  UseFormProps,
  UseFormRegisterReturn,
} from 'react-hook-form'

type Formatting<T, U> = {
  key: T
  format: (key: string) => U
}

export function useFormattedForm<
  TField extends object,
  TFormatField extends Path<TField>,
>(
  defaultValues: UseFormProps<TField, unknown>,
  formats: Array<
    Formatting<TFormatField, PathValue<TField, TFormatField>>
  > = [],
) {
  const methods = useForm<TField>(defaultValues)

  const registerFormatted = (name: TFormatField): UseFormRegisterReturn => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target

      const key = formats.find((format) => format.key === name)

      if (key) {
        methods.setValue(name, key.format(value))
      }
    }

    return methods.register(name, { onChange })
  }

  return { ...methods, registerFormatted }
}
