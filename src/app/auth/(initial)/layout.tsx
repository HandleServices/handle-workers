import AuthInfo from './components/AuthInfo'
import { ReleasedLogos } from './components/ReleasedLogos'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-screen flex flex-row max-[585px]:flex-col">
      <section className="min-[585px]:min-h-full w-1/3 max-[585px]:w-full max-[585px]:h-1/6 bg-handle-blue flex flex-col max-[585px]:flex-row items-center justify-center">
        <AuthInfo className="p-4 min-[900px]:ml-36 ml-6 flex flex-col flex-grow gap-3 items-start text-white tracking-[0.3em] pt-36 max-[585px]:pt-6 max-[585px]:p-2 max-[585px]:w-full" />

        <ReleasedLogos />
      </section>
      <section className="flex-grow bg-handle-background">{children}</section>
    </section>
  )
}
