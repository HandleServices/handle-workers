import AuthInfo from './components/AuthInfo'
import { ReleasedLogos } from './components/ReleasedLogos'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-screen flex flex-row">
      <section className="min-h-full w-1/3 bg-handle-blue lg:flex flex-col items-center justify-center hidden">
        <AuthInfo className="p-4 ml-36 flex flex-col flex-grow gap-3 items-start text-white tracking-[0.3em] pt-36" />

        <ReleasedLogos />
      </section>

      <section className="flex-grow bg-handle-background">{children}</section>
    </section>
  )
}
