'use client'

import { setCookie } from 'nookies'
import { createContext, ReactNode, useState } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

type AuthContextType = {
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  setCookie(undefined, 'handleworkers.token', token, {
    maxAge: 60 * 60 * 1, // 1 hour
  })

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
