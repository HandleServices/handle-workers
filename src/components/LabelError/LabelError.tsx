import { FieldErrors, FieldValues } from 'react-hook-form'

const generalErrorSchemaKey = 'GENERAL_ERROR_SCHEMA'

interface LabelErrorProps<T extends FieldValues> {
  errors: FieldErrors<T>
  name: keyof T | 'GENERAL_ERROR_SCHEMA'
}

const LabelError = <T extends FieldValues>({
  errors,
  name,
}: LabelErrorProps<T>) => {
  if (!errors[name]) return undefined
  return (
    <p className="text-red-500 text-sm">{errors[name]?.message?.toString()}</p>
  )
}

export { generalErrorSchemaKey, LabelError }
