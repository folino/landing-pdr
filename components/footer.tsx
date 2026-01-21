export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <img 
              src="/images/pdlr-logos-0.png" 
              alt="Paseo de la Rotonda - Tandil" 
              className="mb-4 h-auto w-40"
            />
            <p className="font-sans text-sm text-white/70">
              Av. Don Bosco, B7000<br />
              Tandil, Provincia de Buenos Aires<br />
              Argentina
            </p>
          </div>

          <div>
            <div className="mb-4 font-sans text-sm uppercase tracking-wider text-white/50">
              Navegación
            </div>
            <nav className="flex flex-col gap-2">
              <a href="#proyecto" className="font-sans text-sm text-white/70 hover:text-white">
                Proyecto
              </a>
              <a href="#inversion" className="font-sans text-sm text-white/70 hover:text-white">
                Inversión
              </a>
              <a href="#espacios" className="font-sans text-sm text-white/70 hover:text-white">
                Espacios
              </a>
              <a href="#ubicacion" className="font-sans text-sm text-white/70 hover:text-white">
                Ubicación
              </a>
              <a href="#contacto" className="font-sans text-sm text-white/70 hover:text-white">
                Contacto
              </a>
            </nav>
          </div>

          <div>
            <div className="mb-4 font-sans text-sm uppercase tracking-wider text-white/50">
              Legal
            </div>
            <nav className="flex flex-col gap-2">
              <a href="#" className="font-sans text-sm text-white/70 hover:text-white">
                Términos y Condiciones
              </a>
              <a href="#" className="font-sans text-sm text-white/70 hover:text-white">
                Política de Privacidad
              </a>
              <a href="#" className="font-sans text-sm text-white/70 hover:text-white">
                Información para Inversores
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-sans text-xs text-white/50">
              © {currentYear} Paseo de la Rotonda S.A. Todos los derechos reservados.
            </p>
            <p className="font-sans text-xs text-white/50">
              La información presentada es de carácter informativo. Consulte con su asesor financiero.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
