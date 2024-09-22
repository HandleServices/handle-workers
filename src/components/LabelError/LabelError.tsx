import { FieldErrors, FieldValues } from 'react-hook-form'

const generalErrorSchemaKey = 'GENERAL_ERROR_SCHEMA'

interface LabelErrorProps<T extends FieldValues> {
  errors: FieldErrors<T>
  name: keyof T | typeof generalErrorSchemaKey
}

const LabelError = <T extends FieldValues>({
  errors,
  name,
}: LabelErrorProps<T>) => {
  const errorMessage = errors[name]?.message

  if (!errorMessage) return null

  return (
    <p className="text-handle-red-600 text-sm">
      {typeof errorMessage === 'string' ? errorMessage : String(errorMessage)}
    </p>
  )
}

export { generalErrorSchemaKey, LabelError }
