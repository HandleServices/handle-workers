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
import { SignInResponse } from '@/services/auth/types'
import { User } from '@/types/models/User.model'

interface AuthProviderProps {
  children: ReactNode
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  signIn: (response: SignInResponse) => void
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

  const signIn = (response: SignInResponse) => {
    setToken(response.accessToken)

    setCookie(undefined, 'handleworkers.token', response.accessToken, {
      path: '/',
      maxAge: 3600,
      sameSite: 'strict',
      secure: true,
    })

    authApi.defaults.headers.Authorization = `Bearer ${response.accessToken}`
    setIsAuthenticated(true)
    // TO-DO: getUser based on token
    // TO-DO: setUser(response.user)
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
