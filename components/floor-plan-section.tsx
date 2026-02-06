"use client"

import { useState } from "react"

type Floor = "planta-baja" | "subsuelo"

interface Space {
  id: number
  name: string
  size: string
  status: "alquilado" | "disponible"
}

const floors: Record<Floor, { label: string; image: string; spaces: Space[] }> = {
  "planta-baja": {
    label: "Planta de Ingreso",
    image: "https://proyecto.paseodelarotonda.com.ar/wp-content/uploads/2026/01/Recurso-1.png",
    spaces: [
      { id: 1, name: "Local 1", size: "38m\u00B2", status: "alquilado" },
      { id: 2, name: "Local 2", size: "33m\u00B2", status: "alquilado" },
      { id: 3, name: "Local 3", size: "38m\u00B2", status: "alquilado" },
      { id: 4, name: "Local 4", size: "33m\u00B2", status: "alquilado" },
      { id: 5, name: "Local 5", size: "33m\u00B2", status: "alquilado" },
      { id: 6, name: "Local 6", size: "33m\u00B2", status: "alquilado" },
      { id: 7, name: "Local 7", size: "33m\u00B2", status: "alquilado" },
      { id: 8, name: "Local 8", size: "30m\u00B2", status: "alquilado" },
      { id: 9, name: "Local 9", size: "30m\u00B2", status: "alquilado" },
      { id: 10, name: "Local 10", size: "87m\u00B2", status: "alquilado" },
      { id: 11, name: "Local 11", size: "34m\u00B2", status: "alquilado" },
      { id: 12, name: "Restaurante PB", size: "109m\u00B2", status: "disponible" },
      { id: 13, name: "Cafeteria", size: "104m\u00B2", status: "disponible" },
    ],
  },
  subsuelo: {
    label: "Subsuelo",
    image: "https://proyecto.paseodelarotonda.com.ar/wp-content/uploads/2026/01/Recurso-2.png",
    spaces: [
      { id: 14, name: "Local 14", size: "34m\u00B2", status: "disponible" },
      { id: 15, name: "Local 15", size: "38m\u00B2", status: "disponible" },
      { id: 16, name: "Local 16", size: "38m\u00B2", status: "disponible" },
      { id: 17, name: "Local 17", size: "33m\u00B2", status: "disponible" },
      { id: 18, name: "Local 18", size: "33m\u00B2", status: "disponible" },
      { id: 19, name: "Local 19", size: "33m\u00B2", status: "disponible" },
      { id: 20, name: "Local 20", size: "33m\u00B2", status: "disponible" },
      { id: 21, name: "Local 21", size: "33m\u00B2", status: "disponible" },
      { id: 22, name: "Local 22", size: "33m\u00B2", status: "disponible" },
      { id: 23, name: "Local 23", size: "33m\u00B2", status: "disponible" },
      { id: 24, name: "Local 24", size: "33m\u00B2", status: "disponible" },
      { id: 25, name: "Local 25", size: "33m\u00B2", status: "disponible" },
      { id: 26, name: "Local 26", size: "33m\u00B2", status: "disponible" },
      { id: 27, name: "Fitness Center", size: "145m\u00B2", status: "disponible" },
    ],
  },
}

export function FloorPlanSection() {
  const [activeFloor, setActiveFloor] = useState<Floor>("planta-baja")

  const currentFloor = floors[activeFloor]
  const rentedSpaces = currentFloor.spaces.filter((s) => s.status === "alquilado")
  const availableSpaces = currentFloor.spaces.filter((s) => s.status === "disponible")

  return (
    <section id="espacios" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Locales
          </p>
          <h2 className="mb-4 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            Distribución por Plantas
          </h2>
        </div>

        {/* Floor tabs */}
        <div className="mb-10 flex justify-center gap-4">
          {(Object.keys(floors) as Floor[]).map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`rounded-full px-6 py-2.5 font-sans text-sm transition-all ${
                activeFloor === floor
                  ? "bg-[#1F3023] text-white"
                  : "bg-white text-foreground hover:bg-white/80"
              }`}
            >
              {floors[floor].label}
            </button>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Floor Plan Image */}
          <div className="overflow-hidden rounded-lg bg-white p-6">
            <img 
              src={currentFloor.image || "/placeholder.svg"}
              alt={`Plano ${currentFloor.label}`}
              className="mx-auto h-auto w-full"
            />
          </div>

          {/* Spaces List */}
          <div className="flex flex-col justify-center">
            {/* Alquilados */}
            {rentedSpaces.length > 0 && (
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#C4956A]" />
                  <span className="font-sans text-sm font-medium uppercase tracking-wider text-foreground">
                    Alquilado ({rentedSpaces.length})
                  </span>
                </div>
                <div className="space-y-2">
                  {rentedSpaces.map((space) => (
                    <div
                      key={space.id}
                      className="flex items-center justify-between border-b border-border/50 py-2"
                    >
                      <span className="font-sans text-sm text-muted-foreground">
                        {space.name}
                      </span>
                      <span className="font-sans text-sm font-medium text-foreground">
                        {space.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disponibles */}
            {availableSpaces.length > 0 && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-[#1F3023]" />
                  <span className="font-sans text-sm font-medium uppercase tracking-wider text-foreground">
                    Disponible ({availableSpaces.length})
                  </span>
                </div>
                <div className="space-y-2">
                  {availableSpaces.map((space) => (
                    <div
                      key={space.id}
                      className="flex items-center justify-between border-b border-border/50 py-2"
                    >
                      <span className="font-sans text-sm text-muted-foreground">
                        {space.name}
                      </span>
                      <span className="font-sans text-sm font-medium text-foreground">
                        {space.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Restaurant note */}
            {activeFloor === "planta-baja" && (
              <div className="mt-8 rounded-lg bg-[#1F3023]/5 p-4">
                <p className="font-sans text-sm text-muted-foreground">
                  <strong className="text-foreground">Nota:</strong> El restaurante 
                  cuenta con una planta superior de 100m{"²"} adicionales y una terraza 
                  de 42m{"²"} con vistas panor{"á"}micas.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
