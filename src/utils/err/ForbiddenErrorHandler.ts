import { AxiosError } from 'axios'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { HandleError } from '../class/HandleError'

type ForbiddenErrorHandlerProps = {
  error: HandleError | AxiosError
}

export const ForbiddenErrorHandler: FC<ForbiddenErrorHandlerProps> = ({
  error,
}) => {
  useEffect(() => {
    if (error) {
      toast.error('Usuário ou Senha Incorreto')
    }
  }, [error])

  return null
}

export default ForbiddenErrorHandler
