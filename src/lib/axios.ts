import axios from 'axios'

import { AUTH_API_URL } from '@/constants/api'

/**
 * userApi axios object for the handle-auth-service API
 */

const authApi = axios.create({
  baseURL: AUTH_API_URL,
})

export { authApi }
