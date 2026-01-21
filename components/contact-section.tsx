"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-primary-foreground/70">
              Contáctenos
            </p>
            <h2 className="mb-6 font-serif text-3xl font-medium text-primary-foreground md:text-4xl lg:text-5xl text-balance">
              Comience su inversión hoy
            </h2>
            <p className="mb-10 font-sans text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Nuestro equipo de asesores está listo para responder todas sus 
              preguntas y guiarlo en el proceso de inversión. Complete el 
              formulario y nos pondremos en contacto a la brevedad.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-sans text-sm text-primary-foreground/70">
                    Email
                  </div>
                  <a
                    href="mailto:inversiones@paseorotonda.com"
                    className="font-sans text-lg text-primary-foreground hover:underline"
                  >
                    inversiones@paseorotonda.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-sans text-sm text-primary-foreground/70">
                    Teléfono
                  </div>
                  <a
                    href="tel:+5492494000000"
                    className="font-sans text-lg text-primary-foreground hover:underline"
                  >
                    +54 9 249 400-0000
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-background p-8">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mb-2 font-serif text-2xl font-medium text-foreground">
                  ¡Gracias por su interés!
                </h3>
                <p className="font-sans text-muted-foreground">
                  Nos pondremos en contacto con usted a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                      Nombre
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      required
                      className="bg-secondary border-border"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido" className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                      Apellido
                    </Label>
                    <Input
                      id="apellido"
                      name="apellido"
                      required
                      className="bg-secondary border-border"
                      placeholder="Su apellido"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-secondary border-border"
                    placeholder="su@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    className="bg-secondary border-border"
                    placeholder="+54 9 11 0000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monto" className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                    Monto estimado de inversión
                  </Label>
                  <Input
                    id="monto"
                    name="monto"
                    className="bg-secondary border-border"
                    placeholder="U$S 150.000 - 500.000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className="bg-secondary border-border resize-none"
                    placeholder="Cuéntenos sobre su interés en el proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans uppercase tracking-wider"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Solicitar Información
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-center font-sans text-xs text-muted-foreground">
                  Al enviar este formulario, acepta nuestra política de privacidad.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
