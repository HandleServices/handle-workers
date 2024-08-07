export interface RegisterUserDto {
  expedient: {
    weekDay: string
    startTime: string | undefined
    endTime: string | undefined
  }[]
  password: string
  email: string
  firstName: string
  lastName: string
  gender: string
  businessName: string
  jobId: number
  phone: string
  docNum: string
  docType: string
}
