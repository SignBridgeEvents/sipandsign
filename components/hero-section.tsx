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

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-24 pt-28 text-center sm:pt-32">
        <span className="mb-8 rounded-full border border-gold/40 bg-cream/5 px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
          {"\u2726 Exclusive Bay of Quinte Pop-Up Series"}
        </span>

        <h1 className="font-serif text-3xl font-medium leading-tight text-cream sm:text-4xl">
          {"A Fun, Casual Night Out\u2014With ASL!"}
        </h1>
        <p className="mt-3 font-serif text-4xl font-semibold italic text-gold sm:text-6xl">
          Bay of Quinte Sip &amp; Sign Series
        </p>

        <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-cream/75">
          Intimate pop-ups blending cozy social hours, regional pairings, and interactive visual sign language.
          Attendance is strictly capped per session to guarantee a premium, meaningful experience. Join our priority
          list today to be the first to know about upcoming dates and increase your chances of securing a spot!
        </p>

        <div className="mt-10 w-full max-w-xl">
          <SignupForm id="hero-email" buttonLabel="< Request Priority Access >" />
          <p className="mt-4 font-sans text-xs text-cream/50">
            Priority subscribers get first access 48 hours before public release.
          </p>
        </div>
      </div>
    </section>
  )
}
