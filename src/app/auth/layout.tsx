import AuthInfo from '@/components/AuthInfo'
import { ReleasedLogos } from '@/components/ReleasedLogos'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen w-screen flex flex-row">
      <section className="min-h-full w-1/4 bg-blue-500 flex flex-col items-center justify-center pt-44">
        <AuthInfo className="max-w-72 flex flex-col flex-grow gap-3 items-center text-white tracking-widest text-center" />

        <ReleasedLogos />
      </section>

      <section className="flex-grow bg-background">{children}</section>
    </section>
  )
}
