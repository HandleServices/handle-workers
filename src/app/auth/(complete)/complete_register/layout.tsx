export default function CompleteRegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative h-screen">
      <section className="absolute inset-0 bg-iconsOverlay bg-repeat flex items-center justify-center overflow-hidden">
        <section className="bg-handle-background rounded-lg h-4/5 w-2/5 max-h-[53.18rem] max-w-[45.62rem] flex flex-col px-14 py-6 items-center">
          {children}
        </section>
      </section>
    </section>
  )
}
