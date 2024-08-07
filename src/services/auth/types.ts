export type SignInResponse = {
  accessToken: string
}

export type SignUpResponse = {
  accessToken: string
}

type FieldAvailability = {
  field: string
  available: boolean
}

export type ValidateResponse = FieldAvailability[]
