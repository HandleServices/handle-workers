'use client'

import { destroyCookie, setCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { NewUserDto } from '@/types/dtos'

type RegisterFormContextType = {
  formData: NewUserDto
  updateFormData: (newData: Partial<NewUserDto>) => void
}

const initialFormData: NewUserDto = {
  name: '',
  email: '',
  phoneNumber: '',
  identificationNumber: '',
  password: '',
  businessName: '',
  selectedRole: '',
  workingDays: [],
  workingHour: ['', ''],
  image: null,
}

interface RegisterFormProviderProps {
  children: ReactNode
}

export const RegisterFormContext = createContext({} as RegisterFormContextType)

export const RegisterFormProvider = ({
  children,
}: RegisterFormProviderProps) => {
  const [formData, setFormData] = useState<NewUserDto>(initialFormData)

  const updateFormData = (newData: Partial<NewUserDto>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }))

    setCookie(null, 'handleworkers.isFirstRegisterComplete', 'true', {
      path: '/auth',
      sameSite: 'strict',
      secure: true,
    })
  }

  if (formData.password === '') {
    destroyCookie(null, 'handleworkers.isFirstRegisterComplete', {
      path: '/auth',
    })
  }

  return (
    <RegisterFormContext.Provider
      value={{
        formData,
        updateFormData,
      }}
    >
      {children}
    </RegisterFormContext.Provider>
  )
}
