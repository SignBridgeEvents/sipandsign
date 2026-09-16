import { Hand, Handshake, MapPin } from "lucide-react"

const values = [
  {
    icon: Hand,
    eyebrow: "Deaf-Led Excellence",
    title: "100% Deaf-Led Instruction",
    description:
      "Every session is taught directly by qualified, native Deaf instructors who are fairly compensated at professional rates for their expertise.",
  },
  {
    icon: Handshake,
    eyebrow: "Cultural Allyship",
    title: "Building Real Allies",
    description:
      "Our socials spark cultural appreciation and curiosity, fostering genuine allyship and broader ASL learning.",
  },
  {
    icon: MapPin,
    eyebrow: "Local Champions",
    title: "Supporting Local",
    description:
      "We partner exclusively with local businesses and venues right here in the Bay of Quinte, creating inclusive, vibrant communal spaces.",
  },
]

export function CommitmentSection() {
  return (
    <section className="bg-wine-deep px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3 sm:gap-8">
        {values.map(({ icon: Icon, eyebrow, title, description }) => (
          <article key={eyebrow} className="flex flex-col items-center text-center">
            <p className="font-serif text-lg font-medium uppercase tracking-[0.18em] text-cream">{eyebrow}</p>
            <div
              className="mt-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 text-gold"
              aria-hidden="true"
            >
              <Icon className="h-9 w-9" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 font-sans text-sm font-semibold uppercase tracking-wide text-cream">{title}</h3>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-cream/65">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
