import { AxiosError } from 'axios'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { HandleError } from '../class/HandleError'

type NetworkErrorHandlerProps = {
  error: HandleError | AxiosError
}

export const NetworkErrorHandler: FC<NetworkErrorHandlerProps> = ({
  error,
}) => {
  useEffect(() => {
    if (error) {
      toast.error('Sem Conexão com a Internet')
    }
  }, [error])

  return null
}

export default NetworkErrorHandler
