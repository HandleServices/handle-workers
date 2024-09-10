import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

/**
 * @param date - Entry date to be converted.
 * @returns string - A month with first char as upper case.
 */
export default function upperCaseMonth(date: Date): string {
  return (
    format(date, 'MMMM', { locale: ptBR }).charAt(0).toUpperCase() +
    format(date, 'MMMM', { locale: ptBR }).slice(1)
  )
}
