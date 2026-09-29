import { Handshake, MapPin } from "lucide-react"

function IlyHandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 60v-9c0-5-1-9-4-14L6 23c-2-4-1-7 2-9s6 0 8 3l9 13c2 3 6 4 9 1l8-25c1-4 4-6 7-5s4 4 3 8l-6 25m-4-3c2-4 6-5 9-3 3 2 3 6 1 9l-5 7c-3 4-8 5-12 2-3-2-4-6-2-10l3-5m9-1 8-16c2-4 5-5 8-3s3 5 1 9L53 43c-2 5-4 9-4 14v3"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const values = [
  {
    icon: IlyHandIcon,
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
