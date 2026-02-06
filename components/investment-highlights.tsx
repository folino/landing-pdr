export function InvestmentHighlights() {
  return (
    <section id="investment-highlight" className="bg-[#1F3023] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-white/60">
            Oportunidad de Inversión
          </p>
        </div>

        {/* Main figures - two columns, top-aligned */}
        <div className="flex flex-col items-start justify-center gap-12 md:flex-row md:gap-0">
          {/* Tasa de retorno */}
          <div className="flex flex-1 flex-col items-center text-center">
            <div className="mb-3 font-serif text-5xl font-medium text-[#C4956A] md:text-6xl lg:text-7xl">
              8%
            </div>
            <div className="mx-auto font-sans text-sm uppercase leading-relaxed tracking-[0.12em] text-white/80">
              Tasa mínima de retorno proyectada
            </div>
            <div className="mt-1 font-sans text-xs tracking-wider text-white/50">
              (después de impuestos)
            </div>
          </div>

          {/* Divider */}
          <div className="hidden self-stretch border-l border-white/20 md:block" />
          <div className="h-px w-24 self-center bg-white/20 md:hidden" />

          {/* Ingreso Mínimo */}
          <div className="flex flex-1 flex-col items-center text-center">
            <div className="mb-3 font-serif text-5xl font-medium text-[#C4956A] md:text-6xl lg:text-7xl">
              U$S 50.000
            </div>
            <div className="font-sans text-sm uppercase tracking-[0.12em] text-white/80">
              Ingreso Mínimo
            </div>
          </div>
        </div>

        {/* Highlight message */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-white/15 pt-12 md:mt-20 md:pt-14">
          <p className="text-center font-serif text-lg leading-relaxed text-white/90 md:text-xl lg:text-2xl text-pretty">
            Su inversión lo convierte en <span className="font-semibold text-[#C4956A]">accionista del proyecto</span>, su participación impacta en la rentabilidad general del Paseo de la Rotonda. Una <span className="font-semibold text-[#C4956A]">oportunidad superadora </span>, a la inversión tradicional en m{"²"}.
          </p>
        </div>
      </div>
    </section>
  )
}
