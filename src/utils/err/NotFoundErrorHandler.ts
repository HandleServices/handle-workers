import { AxiosError } from 'axios'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { HandleError } from '../class/HandleError'

type NotFoundErrorHandlerProps = {
  error: HandleError | AxiosError
}

export const NotFoundErrorHandler: FC<NotFoundErrorHandlerProps> = ({
  error,
}) => {
  useEffect(() => {
    if (error) {
      toast.error('Usuário não Encontrado')
    }
  }, [error])

  return null
}

export default NotFoundErrorHandler
