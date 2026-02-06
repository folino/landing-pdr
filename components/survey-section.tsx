export function SurveySection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Two-column: Hero stat + intro text */}
        <div className="mb-20 grid items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left: Title + description */}
          <div>
            <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Respaldado por datos
            </p>
            <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl text-balance mb-0">
              Una propuesta construida <span className="text-primary">con la comunidad</span>.
            </h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground text-pretty">
              {"A trav\u00E9s de encuestas, recopilamos datos que nos permitieron conocer h\u00E1bitos, preferencias y comportamientos que hoy respaldan la viabilidad del Paseo de la Rotonda, conscientes de estar alineados con lo que Tandil realmente quiere y necesita."}
            </p>
          </div>

          {/* Right: Hero stat */}
          <div>
            <div className="mb-4 font-serif text-7xl font-medium leading-none text-[#C4956A] md:text-8xl lg:text-7xl">
              3 de 4 Personas
            </div>
            <p className="font-sans text-xl leading-relaxed text-foreground md:text-2xl">
              {"visitan el \u00E1rea del Dique del Fuerte al menos "}
              <strong className="font-bold">tres veces por semana.</strong>
            </p>
          </div>
        </div>

        {/* Data points */}
        <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-4">
          {/* Principales hábitos */}
          <div className="flex flex-col bg-card p-8">
            <p className="mb-3 font-sans text-xs  tracking-[0.15em] text-[#C4956A]">
              {"Los principales h\u00E1bitos incluyen"}
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground font-bold">
              {"Deporte (57%), paseo (52%) y circulaci\u00F3n diaria (39%)."}
            </p>
          </div>

          {/* Facilidades solicitadas */}
          <div className="flex flex-col bg-card p-8">
            <p className="mb-3 font-sans text-xs  tracking-[0.15em] text-[#C4956A]">
              {"Las facilidades m\u00E1s solicitadas"}
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground font-bold">
              {"Cafeter\u00EDas, supermercados, actividades culturales, restaurantes y farmacias."}
            </p>
          </div>

          {/* Público deportista */}
          <div className="flex flex-col bg-card p-8">
            <p className="mb-3 font-sans text-xs  tracking-[0.15em] text-[#C4956A]">
              {"El p\u00FAblico deportista busca"}
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground font-bold">
              {"Puestos de hidrataci\u00F3n y espacios alternativos de entrenamiento."}
            </p>
          </div>

          {/* Propuesta de valor */}
          <div className="flex flex-col bg-card p-8">
            <p className="mb-3 font-sans text-xs  tracking-[0.15em] text-[#C4956A]">
              La propuesta de valor responde a
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground font-bold">
              {"Familias j\u00F3venes, deportistas y profesionales."}
            </p>
          </div>
        </div>

        {/* Source note */}
        <p className="mt-8 font-sans text-xs text-muted-foreground/60">
          {"Datos relevados de una encuesta realizada entre el 25/2/2025 y el 11/3/2025, con un muestreo representativo de la ciudad de Tandil y alrededores."}
        </p>
      </div>
    </section>
  )
}
