import { RegisterFormProvider } from '@/contexts/RegisterFormContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RegisterFormProvider>{children}</RegisterFormProvider>
}
