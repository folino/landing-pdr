import { CheckCircle } from "lucide-react"

const benefits = [
  "Nulos costos de ingreso, administrativos y tributarios.",
  "Inexistentes costos administrativos de salida y baja cuota de imposici\u00F3n tributaria a la salida.",
  "Transparencia en la operaci\u00F3n del negocio.",
  "Sencillez en tiempos y procedimientos en la rendici\u00F3n de cuentas.",
  "Participaci\u00F3n en un emprendimiento disruptivo en el mercado inmobiliario, delegando la operaci\u00F3n.",
  "Bajas barreras de salida.",
]

export function KeyBenefitsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left: Title */}
          <div>
            <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Ventajas competitivas
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              {"Ser accionista, una decisi\u00F3n"}{" "}
              <span className="font-bold text-[#C4956A]">clave.</span>
            </h2>
          </div>

          {/* Right: Benefits list */}
          <div className="flex flex-col gap-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border-b border-border py-5 first:border-t"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#C4956A]" />
                <p className="font-sans text-base leading-relaxed text-foreground">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
