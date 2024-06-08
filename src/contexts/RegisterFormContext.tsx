'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

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

const RegisterFormContext = createContext({} as RegisterFormContextType)

export const useRegisterFormData = (): RegisterFormContextType => {
  const context = useContext(RegisterFormContext)
  if (!context)
    throw new Error('useRegisterFormData must be used within a FormProvider')

  return context
}

export const RegisterFormProvider = ({
  children,
}: RegisterFormProviderProps) => {
  const [formData, setFormData] = useState<NewUserDto>(initialFormData)

  const updateFormData = (newData: Partial<NewUserDto>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }))
  }

  return (
    <RegisterFormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </RegisterFormContext.Provider>
  )
}
