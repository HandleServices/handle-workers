export interface User {
  name: string
  email: string
  phoneNumber: string
  identificationNumber: string
  businessName: string
  selectedRole: string
  workingDays: string[]
  workingHour: [string, string]
  image?: any
  token: string
}
