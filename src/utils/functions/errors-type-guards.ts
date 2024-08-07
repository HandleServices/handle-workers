import axios from 'axios'

import { HandleError } from '../class/HandleError'

export const handleErrorMessage = (error: unknown) => {
  if (!axios.isAxiosError(error)) {
    if (error instanceof HandleError) {
      return error.message
    }
    return 'Error desconhecido'
  }

  if (error.code === 'ERR_NETWORK') return 'Sem conexão com a Internet'

  return error.response?.data.detail
}
