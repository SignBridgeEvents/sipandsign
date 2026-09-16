import { SignupForm } from "@/components/signup-form"

export function WaitlistFooter() {
  return (
    <section className="bg-wine px-6 pb-16 pt-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-gold/50 bg-wine-deep/70 px-8 py-14 text-center backdrop-blur-sm sm:px-14">
          <span
            aria-hidden="true"
            className="mx-auto mb-6 block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
          <h2 className="text-balance font-serif text-3xl font-medium text-cream sm:text-4xl">
            Strictly Capped at 16 Exclusive Seats
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-cream/70">
            To maintain clear sightlines and an authentic, intimate atmosphere, each session is strictly limited. Join
            the priority waitlist to secure your chance to attend our Launch Pop-Ups across Belleville and the Bay of
            Quinte!
          </p>

          <div className="mx-auto mt-9 max-w-xl">
            <SignupForm id="footer-email" buttonLabel="< Join the Priority Waitlist >" />
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-16 max-w-6xl border-t border-gold/15 pt-8">
        <p className="text-center font-sans text-xs tracking-wide text-cream/50">
          {"\u00A9 2026 Bay of Quinte Sip & Sign. Belleville, Ontario, Canada."}
        </p>
      </footer>
    </section>
  )
}
