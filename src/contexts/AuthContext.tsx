'use client'

import { parseCookies, setCookie } from 'nookies'
import {
  createContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'

import { authApi } from '@/lib/axios'
import authService from '@/services/auth.service'
import { LoginDto } from '@/types/dtos/auth/LoginDto'
import { User } from '@/types/models/User.model'

interface AuthProviderProps {
  children: ReactNode
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: LoginDto) => Promise<any>
  logout: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const { 'handleworkers.token': token } = parseCookies()

    if (token) {
      // Chamar o getUser passando o id.then(response => setIsAuthenticated(true) setUser(responser.user))
    } else {
      setToken(null)
      setUser(null)
    }
  }, [])

  useEffect(() => {
    setIsAuthenticated(!!user)
  }, [user])

  useLayoutEffect(() => {
    const authInterceptor = authApi.interceptors.request.use((config) => {
      config.headers.Authorization = token
        ? `Bearer ${token}`
        : config.headers.Authorization
      return config
    })

    return () => {
      authApi.interceptors.request.eject(authInterceptor)
    }
  }, [token])

  const signIn = async ({ email, password }: LoginDto) => {
    try {
      const response = await authService.signin({ email, password })

      console.log('TESTE: ', response)

      if (response.status === 404) {
        throw new Error('Usuário não encontrado')
      } else if (response.error) {
        throw new Error(response.error)
      }

      setToken(response.access_token)

      setCookie(undefined, 'handleworkers.token', response.access_token, {
        path: '/',
        maxAge: 3600,
        sameSite: 'strict',
        secure: true,
      })

      authApi.defaults.headers.Authorization = `Bearer ${response.access_token}`
      setIsAuthenticated(true)

      // TO-DO: getUser based on token
      // TO-DO: setUser(response.user)
      return response
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const logout = async () => {
    // TO-DO: Remove cookie
    setToken('')
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
