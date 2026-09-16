import { SignupForm } from "@/components/signup-form"

export function WaitlistFooter() {
  return (
    <section className="bg-wine px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-gold/90">
          03 &mdash; Priority Access
        </p>

        <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.1] text-cream sm:text-5xl">
          Strictly Capped Exclusive Seats
        </h2>

        <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-cream/70">
          To maintain clear sightlines and an authentic, intimate atmosphere, each session has a limited number of seats
          available. Join the priority waitlist to secure your chance to attend our ASL Sip &amp; Sign events across
          Belleville and the Bay of Quinte!
        </p>

        <div className="mx-auto mt-10 max-w-xl">
          <SignupForm id="footer-email" buttonLabel="< Join the Priority Waitlist >" />
          <p className="mt-4 font-sans text-xs text-cream/50">
            Be the first to know when the next event dates are announced.
          </p>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-gold/15 pt-8">
        <p className="text-center font-sans text-xs tracking-wide text-cream/50">
          {"\u00A9 2026 Bay of Quinte Sip & Sign. Belleville, Ontario, Canada."}
        </p>
      </footer>
    </section>
  )
}
