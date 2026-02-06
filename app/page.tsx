import { Navigation } from "@/components/navigation"
import { FixedCtaBar } from "@/components/fixed-cta-bar"
import { HeroSection } from "@/components/hero-section"
import { InvestmentHighlights } from "@/components/investment-highlights"
import { KeyBenefitsSection } from "@/components/key-benefits-section"
import { AboutSection } from "@/components/about-section"
import { SurveySection } from "@/components/survey-section"
import { FloorPlanSection } from "@/components/floor-plan-section"
import { BackingSection } from "@/components/backing-section"
import { SpacesBreakdown } from "@/components/spaces-breakdown"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <FixedCtaBar />
      <HeroSection 
        videoSrc="https://proyecto.paseodelarotonda.com.ar/wp-content/uploads/2026/01/0120.mp4"
      />
      <InvestmentHighlights />
      <KeyBenefitsSection />
      <AboutSection />
      <SurveySection />
      <FloorPlanSection />
      <BackingSection />
      <SpacesBreakdown />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
