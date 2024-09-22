import { AxiosError } from 'axios'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { HandleError } from '../class/HandleError'

type UnknowErrorHandlerProps = {
  error: HandleError | AxiosError
}

export const UnknowErrorHandler: FC<UnknowErrorHandlerProps> = ({ error }) => {
  useEffect(() => {
    if (error) {
      let errorMessage = ''

      if (error instanceof HandleError) {
        switch (error.url) {
          case '/login':
            errorMessage = 'Usuário não encontrado'
            break
          default:
            errorMessage = `${error.message}`
        }
      }

      toast.error(errorMessage)
    }
  }, [error])

  return null
}

export default UnknowErrorHandler
