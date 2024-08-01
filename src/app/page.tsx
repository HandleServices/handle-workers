import { ServiceCard } from "@/components/ServiceCard";
import { ServiceCardProps, ServiceCardVariants } from "@/components/ServiceCard/types";

interface ServiceCardType {
  variant: ServiceCardVariants
  data: ServiceCardProps
}

export default function App() {
  const cards: ServiceCardType[] = [
    {
      variant: 'pending',
      data: {
        customer: {
          name: 'Lucas Rabelo',
          address: 'Av. Diógenes Ribeiro 74 -  Alto da Lapa',
        },
        dateTime: new Date(),
      }
    },
    {
      variant: 'processing',
      data: {
        customer: {
          name: 'Lucas Rabelo',
          address: 'Av. Diógenes Ribeiro 74 -  Alto da Lapa',
        },
        dateTime: new Date(),
      }
    },
    {
      variant: 'canceled',
      data: {
        customer: {
          name: 'Lucas Rabelo',
          address: 'Av. Diógenes Ribeiro 74 -  Alto da Lapa',
        },
        dateTime: new Date(),
      }
    },
  ]

  return (
    <div className="w-screen h-screen pt-40 px-24 flex flex-col gap-8">
      {
        cards.map((card, idx) => (
          <ServiceCard.Container key={idx} variant={card.variant}>
            <ServiceCard.Header variant={card.variant} data={card.data} />

            <ServiceCard.Content variant={card.variant}>
              <p className="text-[16px] font-light">{'Manutenção de Ar Condicionado - 10h'}</p>
            </ServiceCard.Content>

            <ServiceCard.Footer variant={card.variant} />
          </ServiceCard.Container>
        ))
      }
    </div>
  )
}
