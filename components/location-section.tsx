import { MapPin, Mountain, Building, Users } from "lucide-react"

const locationFeatures = [
  {
    icon: MapPin,
    title: "Ubicación Premium",
    description: "Av. Don Bosco, una de las arterias principales de Tandil",
  },
  {
    icon: Mountain,
    title: "Ciudad Turística",
    description: "Tandil atrae visitantes durante todo el año por sus sierras y gastronomía",
  },
  {
    icon: Building,
    title: "Centro Comercial",
    description: "Zona de alto tránsito peatonal y vehicular",
  },
  {
    icon: Users,
    title: "Población Creciente",
    description: "Ciudad con crecimiento demográfico sostenido",
  },
]

export function LocationSection() {
  return (
    <section id="ubicacion" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Ubicación
            </p>
            <h2 className="mb-6 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl text-balance">
              En el corazón de Tandil
            </h2>
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <p className="font-sans text-lg text-foreground">
                Av. Don Bosco, B7000
              </p>
              <p className="font-sans text-lg text-muted-foreground">
                Tandil, Provincia de Buenos Aires
              </p>
              <p className="font-sans text-lg text-muted-foreground">
                Argentina
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative overflow-hidden rounded-lg bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5!2d-59.1333!3d-37.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9c9c9c9c9c%3A0x9c9c9c9c9c9c9c9c!2sAv.%20Don%20Bosco%2C%20Tandil%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              className="h-full min-h-[400px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Paseo de la Rotonda"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
