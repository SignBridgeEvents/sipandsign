const values = [
  {
    number: "01",
    title: "100% Deaf-Led Instruction",
    description:
      "Every session is taught directly by qualified, native Deaf instructors who are fairly compensated at top professional rates for their expertise.",
  },
  {
    number: "02",
    title: "Building Real Allies & Continuous Learning",
    description:
      "Our casual socials are designed as fun, non-intimidating entry points\u2014sparking local interest, building awareness, and connecting attendees directly with local community resources to further their ASL journey.",
  },
  {
    number: "03",
    title: "Supporting Local Community",
    description:
      "We partner directly with local businesses, wineries, and cafes right here in the Bay of Quinte region to create inclusive, vibrant spaces for everyone.",
  },
]

export function CommitmentSection() {
  return (
    <section className="bg-ink px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-gold/80">
          02 &mdash; Our Commitment
        </p>

        <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.1] text-cream sm:text-5xl">
          Deaf-Led, Community-Centered
        </h2>

        <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-cream/70">
          We believe language learning and cultural respect go hand-in-hand. The Bay of Quinte Sip &amp; Sign Series was
          created to act as a welcoming bridge between the hearing and Deaf communities. We operate under clear ethical
          values to celebrate, elevate, and respect Deaf culture:
        </p>

        <div className="mt-14 grid border-t border-gold/20 sm:grid-cols-3">
          {values.map(({ number, title, description }) => (
            <article
              key={number}
              className="flex flex-col border-b border-gold/20 px-0 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:py-10 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <span className="font-serif text-4xl font-medium text-gold">{number}</span>
              <h3 className="mt-6 font-serif text-xl font-medium leading-snug text-cream">{title}</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-cream/65">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
