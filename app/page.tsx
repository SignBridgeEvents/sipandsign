import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CommitmentSection } from "@/components/commitment-section"
import { WaitlistFooter } from "@/components/waitlist-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-wine font-sans text-cream">
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <WaitlistFooter />
    </main>
  )
}
