"use client"

import { Building2, Dumbbell, UtensilsCrossed, Coffee, Bath, Wrench } from "lucide-react"

const spaces = [
  {
    icon: Building2,
    name: "Locales Comerciales",
    area: "998 m²",
    percentage: 51,
    status: "Mayoría alquilados",
    color: "bg-accent",
  },
  {
    icon: Dumbbell,
    name: "Fitness Center",
    area: "135 m²",
    percentage: 7,
    status: "Con vestuarios",
    color: "bg-primary",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurante",
    area: "333 m²",
    percentage: 17,
    status: "Incluye terraza 42m²",
    color: "bg-accent/80",
  },
  {
    icon: Coffee,
    name: "Cafetería / Heladería",
    area: "104 m²",
    percentage: 5,
    status: "Disponible",
    color: "bg-primary/80",
  },
  {
    icon: Bath,
    name: "Baños",
    area: "85 m²",
    percentage: 4,
    status: "Comunes",
    color: "bg-muted-foreground/60",
  },
  {
    icon: Wrench,
    name: "Servicios y Operación",
    area: "321 m²",
    percentage: 16,
    status: "Áreas técnicas",
    color: "bg-muted-foreground/40",
  },
]

export function SpacesBreakdown() {
  return (
    <section id="espacios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Distribución
          </p>
          <h2 className="mb-4 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl text-balance">
            Espacios del Desarrollo
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg text-muted-foreground text-pretty">
            Un total de 1.976 m² cubiertos más 1.065 m² semicubiertos, 
            distribuidos estratégicamente para maximizar la rentabilidad.
          </p>
        </div>

        {/* Visual bar */}
        <div className="mb-12 overflow-hidden rounded-lg">
          <div className="flex h-8">
            {spaces.map((space, index) => (
              <div
                key={index}
                className={`${space.color} transition-all hover:opacity-80`}
                style={{ width: `${space.percentage}%` }}
                title={`${space.name}: ${space.percentage}%`}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-md"
            >
              <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${space.color} text-background`}>
                <space.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="font-sans font-medium text-foreground">
                    {space.name}
                  </h3>
                  <span className="font-sans text-sm font-medium text-accent">
                    {space.percentage}%
                  </span>
                </div>
                <p className="mb-1 font-serif text-2xl font-medium text-foreground">
                  {space.area}
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  {space.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
              Total m² Cubiertos
            </div>
            <div className="mt-2 font-serif text-4xl font-medium text-foreground">
              1.976 m²
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
              Total m² Semicubiertos
            </div>
            <div className="mt-2 font-serif text-4xl font-medium text-foreground">
              1.065 m²
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
