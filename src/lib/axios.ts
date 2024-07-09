import axios from 'axios'
import { parseCookies } from 'nookies'

import { USER_API_URL } from '@/constants/api'

const { 'handleworkers.token': token } = parseCookies()

/**
 * userApi axios object for the handle-auth-service API
 */
const userApi = axios.create({
  baseURL: USER_API_URL,
})

if (token) {
  userApi.defaults.headers.Authorization = `Bearer ${token}`
}

export { userApi }
