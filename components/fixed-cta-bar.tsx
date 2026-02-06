"use client"

import { useState, useEffect } from "react"

export function FixedCtaBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly one viewport height)
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-white/10 bg-[#1F3023]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-6 py-3 md:gap-6 md:py-4">
          <button
            onClick={() => scrollToSection("#contacto")}
            className="flex-1 rounded bg-[#C4956A] px-6 py-3 text-center font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#B3845A] md:flex-none md:px-12"
          >
            Invierta
          </button>
          <div className="h-8 w-px bg-white/20" />
          <button
            onClick={() => scrollToSection("#espacios")}
            className="flex-1 rounded border border-white/30 bg-transparent px-6 py-3 text-center font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:border-white/60 hover:bg-white/10 md:flex-none md:px-12"
          >
            Alquile
          </button>
        </div>
      </div>
    </div>
  )
}
