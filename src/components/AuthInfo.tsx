'use client'
import { usePathname } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

type AuthInfoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

export default function AuthInfo({ className }: AuthInfoProps) {
  const pathname = usePathname()

  const info =
    pathname === '/auth/register'
      ? {
          title: 'Cadastre-se',
          subtitle: 'seus dados estarão seguros conosco :)',
        }
      : { title: 'Login', subtitle: 'que bom que você está de volta :)' }

  return (
    <section className={className}>
      <Balancer ratio={0} className="text-2xl font-bold">
        {info.title}
      </Balancer>

      <Balancer ratio={0.75} className="font-medium">
        {info.subtitle}
      </Balancer>
    </section>
  )
}
