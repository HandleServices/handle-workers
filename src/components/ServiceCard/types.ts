export type ServiceCardVariants =
  | 'pending'
  | 'processing'
  | 'canceled'
  | 'finished'

export type ServiceCardProps = {
  customer: {
    name: string
    address: string
  }
  dateTime: Date
}
