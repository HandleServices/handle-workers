'use client'

import { parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { userApi } from '@/lib/axios'
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
  const [token, setToken] = useState<string>('')
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const { 'handleworkers.token': token } = parseCookies()

    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    setIsAuthenticated(!!user)
  }, [user])

  const signIn = async ({ email, password }: LoginDto) => {
    try {
      const response = await authService.signin({ email, password })
      if (response.error) return response
      setCookie(undefined, 'handleworkers.token', response.access_token)
      userApi.defaults.headers.Authorization = `Bearer ${response.access_token}`
      setUser(response.user)
      return response
    } catch (error) {
      console.log(error)
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
