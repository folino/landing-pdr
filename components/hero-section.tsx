"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Pause, Volume2, VolumeX } from "lucide-react"

interface HeroSectionProps {
  videoSrc?: string
}

export function HeroSection({ videoSrc }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const scrollToContent = () => {
    const element = document.getElementById("investment-highlight")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {videoSrc ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          loop
          muted={isMuted}
          playsInline
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80" />
      )}
      
      {/* Overlay - Green #1F3023 with transparency */}
      <div className="absolute inset-0 bg-[#1F3023]/60" />

      {/* Video Controls */}
      {videoSrc && (
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          <button
            onClick={togglePlay}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur-sm transition-colors hover:bg-background/30"
            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur-sm transition-colors hover:bg-background/30"
            aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Logo */}
        <img 
          src="/images/pdlr-logos-0.png" 
          alt="Paseo de la Rotonda - Tandil" 
          className="mb-8 h-auto w-48 md:w-56 lg:w-64"
        />
        <h1 className="mb-6 max-w-4xl font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl text-balance">
          Invierta en una obra <span className="font-bold text-[#C4956A]">trascendente</span>
        </h1>
        <p className="mb-10 max-w-2xl font-sans text-lg text-white/90 md:text-xl text-pretty">
          Una oportunidad exclusiva de inversión inmobiliaria en el corazón de Tandil
        </p>
        <Button 
          size="lg" 
          className="bg-white text-neutral-900 hover:bg-white/90 font-sans text-sm uppercase tracking-wider px-8 py-6"
          onClick={scrollToContent}
        >
          Conocer más
        </Button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-background/80 transition-colors hover:text-background"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
