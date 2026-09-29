const blocks = [
  {
    number: "01",
    title: "Wine & Charcuterie",
    place: "At local regional wineries",
  },
  {
    number: "02",
    title: "Coffee & Pastries",
    place: "At cozy Belleville cafes",
  },
  {
    number: "03",
    title: "Craft Brews & Bites",
    place: "At neighborhood taprooms",
  },
]

export function AboutSection() {
  return (
    <section className="bg-sand px-6 py-24 text-wine-deep sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-wine/60">
          01 &mdash; The Experience
        </p>

        <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">
          A Better Way to Start Your ASL Journey
        </h2>

        <p className="mt-8 max-w-3xl font-sans text-base leading-relaxed text-wine-deep/75">
          If you&apos;ve ever said, “I&apos;d love to learn ASL,” your opportunity is here. We get it! So many people want to
          learn American Sign Language, but fitting an entire course into a busy schedule isn&apos;t always realistic. The Bay
          of Quinte Sip &amp; Sign Series turns beginner learning into a relaxed, interactive social experience. Instead of
          sitting in a traditional classroom, you get to drop in for engaging social sessions paired with local flavours:
        </p>

        <div className="mt-12 grid gap-x-8 sm:grid-cols-3">
          {blocks.map((block) => (
            <article key={block.number} className="border-t border-wine/25 py-6 sm:py-8">
              <p className="font-sans text-xs font-semibold tracking-[0.2em] text-wine/70">{block.number}</p>
              <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-wine-deep">
                {block.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-wine-deep/65">{block.place}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-gold py-1 pl-6 sm:mt-12 sm:pl-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-wine/65">
            What you&apos;ll take away
          </p>
          <p className="mt-4 max-w-4xl font-serif text-2xl font-medium leading-snug text-wine sm:text-3xl">
            Whether you join us for a single session or attend every month, every gathering delivers tangible, real-world
            value. You&apos;ll master foundational vocabulary, basic fingerspelling, and essential social signs, from
            introducing yourself and greeting friends to ordering food and drinks. You&apos;ll walk away with usable visual
            communication skills, elevated confidence, and genuine local connections every time.
          </p>
        </div>
      </div>
    </section>
  )
}
