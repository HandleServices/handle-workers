import axios from 'axios'

export const handleErrorMessage = (error: unknown) => {
  if (!axios.isAxiosError(error)) return 'Error Desconhecido'

  if (error.code === 'ERR_NETWORK') return 'Sem conexão com a Internet'

  return error.response?.data.detail
}
