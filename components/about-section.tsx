import Image from "next/image"

const bullets = [
  "Wine & Charcuterie at local regional wineries",
  "Coffee & Pastries at cozy Belleville cafes",
  "Craft Brews & Bites at neighborhood taprooms",
]

const cards = [
  { src: "/images/wine.png", alt: "Wine and charcuterie board at a local winery" },
  { src: "/images/coffee.png", alt: "Coffee and pastries at a cozy Belleville cafe" },
  { src: "/images/taproom.png", alt: "Craft beer flight and bites at a neighborhood taproom" },
]

export function AboutSection() {
  return (
    <section className="bg-wine px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-balance text-center font-serif text-3xl font-medium leading-tight text-cream sm:text-4xl">
          No Classrooms. Just Good Drinks and Great Conversation.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 font-sans text-base leading-relaxed text-cream/75">
            <p>
              {
                "If you\u2019ve ever said, \u2018I\u2019d love to learn ASL,\u2019 your opportunity is finally here. We get it\u2014so many people are curious about American Sign Language, but committing to a rigid, multi-week course isn\u2019t always realistic. The Bay of Quinte Sip & Sign Series trades traditional desks for relaxed social pop-ups at the region\u2019s best local spots:"
              }
            </p>

            <ul className="space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-gold"
                  />
                  <span className="text-cream/90">{bullet}</span>
                </li>
              ))}
            </ul>

            <p>
              {
                "Whether you pop in just once or join us every month, you\u2019ll master practical conversational signs\u2014from ordering your favorite drink and introducing yourself to essential everyday phrases. You\u2019ll walk away with real visual communication skills, genuine local connections, and a fantastic night out."
              }
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl border border-gold/20">
              <Image
                src={cards[0].src || "/placeholder.svg"}
                alt={cards[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-wine-deep/20" />
            </div>
            {cards.slice(1).map((card) => (
              <div
                key={card.src}
                className="relative aspect-square overflow-hidden rounded-2xl border border-gold/20"
              >
                <Image
                  src={card.src || "/placeholder.svg"}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-wine-deep/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
