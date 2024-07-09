'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

import { NewUserDto } from '@/types/dtos'

type RegisterFormContextType = {
  formData: NewUserDto
  updateFormData: (newData: Partial<NewUserDto>) => void
  isFirstRegisterComplete: boolean
  setIsFirstRegisterComplete: (value: boolean) => void
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
  // TO_DO: Change to fALSE
  const [isFirstRegisterComplete, setIsFirstRegisterComplete] = useState(true)

  const updateFormData = (newData: Partial<NewUserDto>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }))
  }

  return (
    <RegisterFormContext.Provider
      value={{
        formData,
        updateFormData,
        isFirstRegisterComplete,
        setIsFirstRegisterComplete,
      }}
    >
      {children}
    </RegisterFormContext.Provider>
  )
}
