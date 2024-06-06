'use client'
import { usePathname } from 'next/navigation'

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
      <p className="text-2xl max-[585px]:text-lg">{info.title}</p>

      <p className="text-base max-w-[16rem] max-[585px]:hidden text-handle-background">
        {info.subtitle}
      </p>
    </section>
  )
}
