export type OrderCardVariants = 'pending' | 'open' | 'canceled' | 'finished'

export type OrderCardProps = {
  customer: {
    name: string
    address: string
  }
  dateTime: Date
}
