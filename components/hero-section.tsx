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
        className="absolute inset-0 -z-10 bg-gradient-to-b from-wine-deep/90 via-wine/90 to-wine"
      />

      <div className="mx-auto flex max-w-6xl flex-col px-6 pb-24 pt-24 sm:pt-28">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-gold/90">
          Bay of Quinte Sip &amp; Sign Series
        </span>

        <h1 className="mt-8 max-w-3xl text-balance font-serif text-5xl font-medium leading-[1.05] text-cream sm:text-7xl">
          {"A Fun, Casual Night Out\u2014With ASL!"}
        </h1>
        <p className="mt-6 font-serif text-2xl font-medium italic tracking-wide text-gold sm:text-3xl">
          Sip &amp; Sign Series
        </p>

        <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-cream/75">
          Intimate pop-ups blending cozy social hours, regional pairings, and interactive visual sign language.
          Attendance is strictly capped per session to guarantee a premium, meaningful experience. Join our priority
          list today to be the first to know about upcoming dates and increase your chances of securing a spot at these
          exclusive events!
        </p>

        <div className="mt-10 w-full max-w-xl">
          <SignupForm id="hero-email" buttonLabel="< Request Your Invite >" />
          <p className="mt-4 font-sans text-xs text-cream/50">
            Priority subscribers get first access 48 hours before public release.
          </p>
        </div>
      </div>
    </section>
  )
}
