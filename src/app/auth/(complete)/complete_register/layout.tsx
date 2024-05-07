export default function CompleteRegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative h-screen">
      <section className="absolute inset-0 bg-iconsOverlay bg-repeat flex items-center justify-center overflow-hidden sm:w-full sm:h-full">
        <section className="bg-handle-background rounded-lg h-4/5 w-2/5 max-h-[53.18rem] max-w-[45.62rem] min-[200px]:w-full min-[200px]:h-full px-14 py-6 max-[700px]:px-1 min-[200px]:max-[700px]:px-2">
          {children}
        </section>
      </section>
    </section>
  )
}
