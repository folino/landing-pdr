export function InvestmentHighlights() {
  return (
    <section id="investment-highlight" className="bg-[#1F3023] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-white/60">
            Oportunidad de Inversión
          </p>
        </div>

        {/* Main figures - two columns */}
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-24 lg:gap-32">
          {/* Paquete Accionario Total */}
          <div className="text-center">
            <div className="mb-2 font-serif text-5xl font-medium text-[#C4956A] md:text-6xl lg:text-7xl">
              U$S 6.500.000
            </div>
            <div className="font-sans text-sm uppercase tracking-[0.15em] text-white/80">
              Paquete Accionario Total
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-24 w-px bg-white/20 md:block" />
          <div className="h-px w-24 bg-white/20 md:hidden" />

          {/* Ingreso Mínimo */}
          <div className="text-center">
            <div className="mb-2 font-serif text-5xl font-medium text-[#C4956A] md:text-6xl lg:text-7xl">
              U$S 150.000
            </div>
            <div className="font-sans text-sm uppercase tracking-[0.15em] text-white/80">
              Ingreso Mínimo
            </div>
          </div>
        </div>

        {/* Horizontal separator */}
        <div className="mx-auto my-12 h-px w-48 bg-white/20 md:my-16 md:w-64" />

        {/* Tasa de Retorno - secondary */}
        <div className="text-center">
          <div className="mb-1 font-serif text-3xl font-medium text-[#C4956A]/80 md:text-4xl">
            6%
          </div>
          <div className="font-sans text-xs uppercase tracking-[0.15em] text-white/60">
            Tasa de Retorno Proyectada
          </div>
        </div>
      </div>
    </section>
  )
}
