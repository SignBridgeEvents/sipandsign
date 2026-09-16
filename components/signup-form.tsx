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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        id={id}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={`flex-1 rounded-full border px-6 py-3.5 font-sans text-sm outline-none transition-colors focus-visible:ring-2 ${
          isLight
            ? "border-wine/30 bg-white/70 text-wine-deep placeholder:text-wine-deep/40 focus-visible:border-wine focus-visible:ring-wine/20"
            : "border-gold/40 bg-cream/5 text-cream placeholder:text-cream/40 focus-visible:border-gold focus-visible:ring-gold/30"
        }`}
      />
      <button
        type="submit"
        className={`whitespace-nowrap rounded-full border px-7 py-3.5 font-sans text-sm font-semibold tracking-wide transition-colors duration-300 ${
          isLight
            ? "border-wine bg-wine text-cream hover:bg-wine-deep"
            : "border-gold bg-gold/10 text-gold hover:bg-gold hover:text-wine-deep"
        }`}
      >
        {buttonLabel}
      </button>
    </form>
  )
}
