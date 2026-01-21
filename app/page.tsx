import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { InvestmentHighlights } from "@/components/investment-highlights"
import { AboutSection } from "@/components/about-section"
import { FloorPlanSection } from "@/components/floor-plan-section"
import { SpacesBreakdown } from "@/components/spaces-breakdown"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection 
        videoSrc="https://proyecto.paseodelarotonda.com.ar/wp-content/uploads/2026/01/0120.mp4"
      />
      <InvestmentHighlights />
      <AboutSection />
      <FloorPlanSection />
      <SpacesBreakdown />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
