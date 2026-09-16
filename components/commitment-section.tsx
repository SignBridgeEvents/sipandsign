import { HandMetal, HeartHandshake, MapPin } from "lucide-react"

const values = [
  {
    icon: HandMetal,
    title: "100% Deaf-Led Instruction",
    description:
      "Every session is taught directly by qualified, native Deaf instructors who are fairly compensated at top professional rates for their expertise.",
  },
  {
    icon: HeartHandshake,
    title: "Building Real Allies & Continuous Learning",
    description:
      "Our casual socials are designed as fun, non-intimidating entry points\u2014sparking local interest, building awareness, and connecting attendees directly with local community resources, Deaf-led organizations, and formal courses to further their ASL journey.",
  },
  {
    icon: MapPin,
    title: "Supporting Local Community",
    description:
      "We partner directly with local businesses, wineries, and cafes right here in the Bay of Quinte region to create inclusive, vibrant spaces for everyone.",
  },
]

export function CommitmentSection() {
  return (
    <section className="bg-wine-deep px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-cream sm:text-4xl">
            Deaf-Led, Community-Centered
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-cream/70">
            We believe language learning and cultural respect go hand-in-hand. We operate under clear ethical values to
            celebrate, elevate, and respect Deaf culture:
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-gold/40 bg-cream/[0.03] p-8 backdrop-blur-sm"
            >
              <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-medium leading-snug text-cream">{title}</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-cream/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
