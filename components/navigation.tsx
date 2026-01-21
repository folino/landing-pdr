"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#proyecto", label: "Proyecto" },
  { href: "#inversion", label: "Inversión" },
  { href: "#espacios", label: "Espacios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="block">
            <img 
              src={isScrolled 
                ? "/images/pdlr-logos-02.jpg" 
                : "/images/pdlr-logos-0.png"
              }
              alt="Paseo de la Rotonda"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-sans text-sm uppercase tracking-wider transition-colors hover:opacity-70 ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <Button
            className={`hidden md:inline-flex font-sans text-xs uppercase tracking-wider ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-background text-foreground hover:bg-background/90"
            }`}
            onClick={() => scrollToSection("#contacto")}
          >
            Invertir Ahora
          </Button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-background"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-background/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-sans text-sm uppercase tracking-wider text-foreground text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-4 w-full bg-primary text-primary-foreground font-sans text-xs uppercase tracking-wider"
                onClick={() => scrollToSection("#contacto")}
              >
                Invertir Ahora
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
