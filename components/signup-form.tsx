"use client"

import { useState, type FormEvent } from "react"

interface SignupFormProps {
  buttonLabel: string
  id: string
  variant?: "dark" | "light"
}

export function SignupForm({ buttonLabel, id, variant = "dark" }: SignupFormProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  const isLight = variant === "light"

  if (submitted) {
    return (
      <p
        className={`text-center font-sans text-sm ${isLight ? "text-wine" : "text-gold"}`}
        role="status"
      >
        {"You're on the list. We'll be in touch soon with priority access details."}
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full items-center gap-2 rounded-full border p-1.5 transition-colors focus-within:ring-2 ${
        isLight
          ? "border-wine/35 bg-white/75 focus-within:border-wine focus-within:ring-wine/15"
          : "border-gold/40 bg-wine-deep/45 focus-within:border-gold/75 focus-within:ring-gold/20"
      }`}
    >
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        id={id}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className={`min-w-0 flex-1 bg-transparent px-4 py-3 font-sans text-sm outline-none placeholder:opacity-65 sm:px-5 ${
          isLight ? "text-wine-deep placeholder:text-wine-deep" : "text-cream placeholder:text-cream"
        }`}
      />
      <button
        type="submit"
        className={`shrink-0 whitespace-nowrap rounded-full px-4 py-3 font-sans text-xs font-semibold transition-colors duration-300 sm:px-6 sm:text-sm ${
          isLight
            ? "bg-wine text-cream hover:bg-wine-deep"
            : "bg-gold text-wine-deep hover:bg-sand"
        }`}
      >
        {buttonLabel}
      </button>
    </form>
  )
}
