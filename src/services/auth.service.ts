import axios from 'axios'

import { userApi } from '@/lib/axios'
import { LoginDto } from '@/types/dtos/auth/LoginDto'
import { RegisterUserDto } from '@/types/dtos/auth/RegisterUserDto'
import { ValidateRegisterDto } from '@/types/dtos/auth/ValidateRegisterDto'

const signup = async (userData: RegisterUserDto) => {
  try {
    const response = await userApi.post('/register', userData)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data || 'Unknown error')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}

const signin = async ({ email, password }: LoginDto) => {
  const response = await userApi.post('/login', {
    email,
    password,
  })
  return response.data
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
    const response = await userApi.post('/register/validate', requestData)

    return response.data
  } catch (error) {
    throw new Error('Error de conexão')
  }
}
const authService = {
  signup,
  signin,
  validateRegister,
}

export default authService
