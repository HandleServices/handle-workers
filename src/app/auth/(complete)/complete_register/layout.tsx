export default function CompleteRegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative h-screen w-screen">
      <section className="absolute inset-0 bg-iconsOverlay bg-repeat flex items-center justify-center overflow-hidden w-full h-full">
        <section className="bg-handle-background rounded-lg sm:min-h-[700px] sm:max-h-[53.18rem] sm:max-w-[45.62rem] w-full h-full lg:h-4/5 lg:w-4/5 transition-all">
          {children}
        </section>
      </section>
    </section>
  )
}
