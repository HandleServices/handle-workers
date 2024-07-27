import axios, { AxiosResponse } from 'axios'

import { authApi } from '@/lib/axios'
import { LoginDto } from '@/types/dtos/auth/LoginDto'
import { RegisterUserDto } from '@/types/dtos/auth/RegisterUserDto'
import { ValidateRegisterDto } from '@/types/dtos/auth/ValidateRegisterDto'

const signup = async (userData: RegisterUserDto) => {
  try {
    const response: AxiosResponse = await authApi.post('/register', userData)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}

const signin = async ({ email, password }: LoginDto) => {
  try {
    const response: AxiosResponse = await authApi.post('/login', {
      email,
      password,
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401)
        error.response.data.detail = 'Usuário ou Senha Incorretos'

      if (error.response?.status === 404)
        error.response.data.detail = 'Usuário não encontrado'

      throw error
    } else {
      throw new Error('Um error inesperado aconteceu')
    }
  }
}

const validateRegister = async ({
  email,
  identificationNumber,
  phoneNumber,
}: ValidateRegisterDto) => {
  const requestData = {
    email,
    docNum: identificationNumber.replace(/\D/g, ''),
    phone: phoneNumber.replace(/\D/g, ''),
  }

  try {
    const response: AxiosResponse = await authApi.post(
      '/register/validate',
      requestData,
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
const authService = {
  signup,
  signin,
  validateRegister,
}

export default authService
