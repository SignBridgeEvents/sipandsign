import Image from "next/image"
import { Plus } from "lucide-react"

const blocks = [
  {
    src: "/images/wine.png",
    alt: "Wine and charcuterie board at a local winery",
    title: "Wine & Charcuterie",
    place: "at local regional wineries",
  },
  {
    src: "/images/coffee.png",
    alt: "Coffee and pastries at a cozy Belleville cafe",
    title: "Coffee & Pastries",
    place: "at cozy Belleville cafes",
  },
  {
    src: "/images/taproom.png",
    alt: "Craft beer flight and bites at a neighborhood taproom",
    title: "Craft Brews & Bites",
    place: "at neighborhood taprooms",
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
          {
            "If you\u2019ve ever said, \u201CI\u2019d love to learn ASL,\u201D your opportunity is here. We get it! So many people want to learn American Sign Language, but fitting an entire course into a busy schedule isn\u2019t always realistic. The Bay of Quinte Sip & Sign Series turns beginner learning into a relaxed, interactive social experience. Instead of sitting in a traditional classroom, you get to drop in for engaging social sessions paired with local flavours:"
          }
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src={block.src || "/placeholder.svg"}
                alt={block.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-wine-deep/90 via-wine-deep/40 to-wine-deep/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <Plus className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-xl font-medium leading-snug text-cream">{block.title}</h3>
                  <p className="mt-1 font-sans text-sm text-cream/70">{block.place}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-3xl font-serif text-2xl font-medium leading-snug text-wine sm:text-3xl">
          {
            "Whether you pop in just once or join us every month, you\u2019ll master practical conversational signs. From ordering your favourite drink and introducing yourself, to essential everyday phrases. You\u2019ll walk away with real visual communication skills, new local connections, and a fantastic night out!"
          }
        </p>
      </div>
    </section>
  )
}
