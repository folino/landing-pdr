"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

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
        <h1 className="mb-6 max-w-4xl font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl text-balance">
          Forme parte de una obra <span className="font-bold text-[#C4956A]">trascendente</span>
        </h1>
        <p className="mb-12 max-w-2xl font-sans text-lg text-white/90 md:text-xl text-pretty">
          Una oportunidad de inversión única, un paso firme hacia el futuro de Tandil
        </p>

        {/* Hero CTAs */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => {
              const el = document.querySelector("#contacto")
              el?.scrollIntoView({ behavior: "smooth" })
            }}
            className="rounded bg-[#C4956A] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#B3845A] md:px-12"
          >
            Invierta
          </button>
          <div className="h-8 w-px bg-white/30" />
          <button
            onClick={() => {
              const el = document.querySelector("#espacios")
              el?.scrollIntoView({ behavior: "smooth" })
            }}
            className="rounded border border-white/40 bg-transparent px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:border-white/70 hover:bg-white/10 md:px-12"
          >
            Alquile
          </button>
        </div>
      </div>
    </section>
  )
}
