import { useCallback } from 'react'

import authService from '@/services/auth/auth.service'
import { ValidateRegisterDto } from '@/types/dtos/auth/ValidateRegisterDto'
import { HandleError } from '@/utils/class/HandleError'

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
        throw new HandleError('Esse Email já foi cadastrado.')
      } else if (unavailableField.field === 'docNum') {
        throw new HandleError('Esse CPF/CNPJ já foi cadastrado')
      } else if (unavailableField.field === 'phone') {
        throw new HandleError('Esse número de telefone já foi cadastrado')
      }
    }

    return true
  }, [])

  return {
    validateRegister,
  }
}

export default useRegisterHook
