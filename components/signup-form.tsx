"use client"

import { useState, type FormEvent } from "react"

interface SignupFormProps {
  buttonLabel: string
  id: string
}

export function SignupForm({ buttonLabel, id }: SignupFormProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="text-center font-sans text-sm text-gold sm:text-left" role="status">
        {"You're on the list. We'll be in touch soon with priority access details."}
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
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
        placeholder="Email"
        className="flex-1 rounded-full border border-gold/40 bg-cream/5 px-6 py-3.5 font-sans text-sm text-cream placeholder:text-cream/40 outline-none transition-colors focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/30"
      />
      <button
        type="submit"
        className="whitespace-nowrap rounded-full border border-gold bg-gold/10 px-7 py-3.5 font-sans text-sm font-semibold tracking-wide text-gold transition-colors duration-300 hover:bg-gold hover:text-wine-deep"
      >
        {buttonLabel}
      </button>
    </form>
  )
}
