export default function CompleteRegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative h-screen w-screen">
      <section className="absolute inset-0 bg-iconsOverlay bg-repeat flex items-center justify-center overflow-hidden w-full h-full">
        <section className="bg-handle-background rounded-lg overflow-auto sm:max-w-[45.62rem] w-full h-full lg:h-[90%] lg:w-3/5 transition-all">
          {children}
        </section>
      </section>
    </section>
  )
}
