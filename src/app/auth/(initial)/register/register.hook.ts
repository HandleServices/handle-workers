import { useCallback } from 'react'

import authService from '@/services/auth.service'
import { ValidateRegisterDto } from '@/types/dtos/auth/ValidateRegisterDto'

type AvailableType = {
  field: string
  available: boolean
}

function useRegisterHook() {
  const validateRegister = useCallback(async (data: ValidateRegisterDto) => {
    const response = await authService.validateRegister(data)

    const unavailableField = response.find(
      (field: AvailableType) => !field.available,
    )
    if (unavailableField) {
      if (unavailableField.field === 'email') {
        throw new Error('Esse Email já foi cadastrado.')
      } else if (unavailableField.field === 'docNum') {
        throw new Error('Esse CPF/CNPJ já foi cadastrado')
      } else if (unavailableField.field === 'phone') {
        throw new Error('Esse número de telefone já foi cadastrado')
      }
    }

    return true
  }, [])

  return {
    validateRegister,
  }
}

export default useRegisterHook
