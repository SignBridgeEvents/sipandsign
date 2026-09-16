import { SignupForm } from "@/components/signup-form"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.png)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-wine-deep/85 via-wine/85 to-wine"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <p className="font-serif text-xl italic text-gold sm:text-2xl">
          {"A Fun, Casual Night Out\u2014With ASL!"}
        </p>

        <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-[1.08] text-cream sm:text-6xl">
          Bay of Quinte Sip &amp; Sign Series
        </h1>

        <p className="mt-7 max-w-xl text-pretty font-sans text-base leading-relaxed text-cream/75">
          Cozy socials, local pairings, and interactive sign language. Our intimate pop-ups in Belleville and the Bay of
          Quinte are strictly capped to ensure a premium, meaningful experience. Join our invite-only launch list to
          request access.
        </p>

        <div className="mt-10 w-full max-w-xl">
          <SignupForm id="hero-email" buttonLabel="< Request Your Exclusive Invite >" />
        </div>
      </div>
    </section>
  )
}
