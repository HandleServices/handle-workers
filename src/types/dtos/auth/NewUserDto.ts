export interface NewUserDto {
  name: string
  email: string
  phoneNumber: string
  identificationNumber: string
  password: string
  businessName: string
  selectedRole: string
  workingDays: string[]
  workingHour: [string, string]
  image?: any
}
