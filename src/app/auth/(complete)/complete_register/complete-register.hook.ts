import { useCallback } from 'react'

import { NewUserDto } from '@/types/dtos'

function useCompleteRegisterHook() {
  const setupRequest = useCallback((data: NewUserDto) => {
    const {
      password,
      email,
      name,
      businessName,
      phoneNumber,
      identificationNumber,
      workingDays,
      workingHour,
    } = data
    const [firstName, ...restName] = name.split(' ')
    const lastName = restName.join(' ')
    const docNum = identificationNumber.replace(/\D/g, '')
    const phone = phoneNumber.replace(/\D/g, '')
    const docType = docNum.length === 11 ? 'CPF' : 'CNPJ'
    const expedient = workingDays.map((weekDay) => ({
      weekDay,
      startTime: workingHour.at(0),
      endTime: workingHour.at(1),
    }))

    const sendData = {
      password,
      email,
      firstName,
      lastName,
      gender: 'OTHERS',
      businessName,
      jobId: 1,
      phone,
      docNum,
      docType,
      expedient,
    }

    return sendData
  }, [])

  return {
    setupRequest,
  }
}

export default useCompleteRegisterHook
