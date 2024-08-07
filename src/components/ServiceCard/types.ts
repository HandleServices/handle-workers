export type ServiceCardVariants = 'pending' | 'open' | 'canceled' | 'finished'

export type ServiceCardProps = {
  customer: {
    name: string
    address: string
  }
  dateTime: Date
}
