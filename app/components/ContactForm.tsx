// /app/components/ContactForm.tsx
'use client'
import { useState } from 'react'

type Errors = Partial<Record<'name' | 'email', string>>

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const next: Errors = {}
    if (!name) next.name = 'Please enter your full name.'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid work email.'
    return next
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return

    setSubmitting(true)
    try {
      // TODO: POST to /api/contact
      await new Promise((r) => setTimeout(r, 600))
      setSent(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <section id="contact" className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight">Thanks — we’ll be in touch</h2>
          <p className="mt-2 text-gray-600">A team member will reach out to schedule your demo.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Book a demo</h2>
          <p className="mt-2 text-gray-600">Tell us a bit about your clinic and we’ll reach out.</p>
        </header>

        <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">Full name</label>
              <input
                id="name" name="name" autoComplete="name"
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Work email</label>
              <input
                id="email" name="email" type="email" autoComplete="email"
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="clinic" className="block text-sm font-medium text-gray-900">Clinic / Organization</label>
              <input id="clinic" name="clinic" autoComplete="organization" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900">What are you hoping to improve?</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600" />
          </div>

          {/* CTA row */}
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">By submitting, you agree to be contacted about Prime EMR.</p>

            {/* New professional outline button */}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-11 items-center justify-center rounded-full border border-blue-600 px-6 text-sm font-medium text-blue-700
                         hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" fill="none" />
                    <path d="M4 12a8 8 0 0 1 8-8" className="opacity-75" fill="currentColor" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Request demo
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" aria-hidden>
                    <path fill="currentColor" d="M12.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L14.586 11H4a1 1 0 1 1 0-2h10.586l-2.293-2.293a1 1 0 0 1 0-1.414z"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
