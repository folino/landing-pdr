export function BackingSection() {
  return (
    <section className="bg-[#1F3023] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Label */}
        <p className="mb-12 text-center font-sans text-sm uppercase tracking-[0.2em] text-[#C4956A]">
          Invertir con respaldo
        </p>

        {/* Two-column layout */}
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left: Image */}
          <div className="overflow-hidden rounded">
            <img
              src="/images/rogelio-rodrigo-rotonda.png"
              alt="Rodrigo A. Rotonda, Director General, y Rogelio A. Rotonda, Presidente"
              className="h-auto w-full object-cover"
            />
            <div className="mt-4 flex justify-between gap-4">
              <p className="font-sans text-sm text-white/60">
                <span className="font-medium text-white/80">Rodrigo A. Rotonda</span>
                <br />
                Director General
              </p>
              <p className="text-right font-sans text-sm text-white/60">
                <span className="font-medium text-white/80">Rogelio A. Rotonda</span>
                <br />
                Presidente
              </p>
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <p className="font-serif text-xl leading-relaxed text-white/90 md:text-2xl text-pretty">
              {"Somos una empresa que se origina con "}
              <strong className="font-bold text-white">El Eco</strong>
              {", nuestro multimedios con ra\u00EDces profundas en la tradici\u00F3n tandilense."}
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-white/70 text-pretty">
              {"Con la visi\u00F3n de dejar una huella distintiva, seguimos adelante con el compromiso de innovar. Por eso, adem\u00E1s de continuar impulsando la industria de los medios de comunicaci\u00F3n, nos hemos expandido hacia nuevas direcciones: "}
              <span className="font-semibold text-[#C4956A]">Agro, Real Estate y Tecnolog{"\u00ED"}a</span>
              {"."}
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-white/70 text-pretty">
              {"Esto significa que cada proyecto que desarrollamos tiene garantizada su vidriera, su narrativa y su conexi\u00F3n con la comunidad."}
            </p>
            <a
              href="https://gruporotonda.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.12em] text-[#C4956A] transition-colors hover:text-[#d4a57a]"
            >
              {"Grupo Rotonda \u2192"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
