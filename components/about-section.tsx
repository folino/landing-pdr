import { CheckCircle2 } from "lucide-react"

const benefits = [
 "Ubicación estratégica en Av. Don Bosco, Tandil",
 "Versatilidad de espacios para marcas y actividades monetizables",
 "Detalles que construyen una experiencia única: aroma propio de desarrollo local, sistema de recolección de agua de lluvia, diseño de espacios comunes orientados al - bienestar, recorrido 100% accesible.",
 "Gestión profesional del desarrollo detrás de cada decisión",
 "Transparencia en la información financiera",
 "Potencial de valorización a largo plazo"];

export function AboutSection() {
  return (
    <section id="proyecto" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
              El Proyecto
            </p>
            <h2 className="mb-6 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl text-balance">
              Un desarrollo único y de infinitas posibilidades.
            </h2>
            <p className="mb-8 font-sans text-lg leading-relaxed text-muted-foreground text-pretty">
              Paseo de la Rotonda es un proyecto que viene a transformar la experiencia comercial y social de Tandil. Su diseño arquitectónico respeta el equilibrio con el entorno natural y ofrece una atmósfera atractiva para locales y turistas. Es un punto de encuentro para conectarse y disfrutar de compras, naturaleza y actividades sociales.
            </p>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground text-pretty">
              El desarrollo cuenta con locales comerciales, un fitness center 
              de última generación, restaurante con terraza panorámica, y 
              cafetería/heladería, generando múltiples fuentes de ingreso 
              para los inversores.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-6 font-serif text-xl font-medium text-foreground">
             Características diferenciales
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="font-sans text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
