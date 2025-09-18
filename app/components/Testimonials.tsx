// /app/components/Testimonials.tsx
'use client'
import { useEffect, useRef, useState } from 'react'

type T = { q: string; a: string }

const TESTIMONIALS: T[] = [
  { q: 'Prime cut charting time in our first month.', a: 'Dr. Lee, Family Medicine' },
  { q: 'Migration was smooth and the team is responsive.', a: 'J. Patel, Clinic Manager' },
  { q: 'It feels modern without being complicated.', a: 'Dr. Nguyen, Pediatrics' },
  { q: 'Scheduling and reminders reduced no-shows noticeably.', a: 'Operations Lead, Evergreen Health' },
  { q: 'Billing validation paid for itself in our first quarter.', a: 'R. Clarke, Clinic Administrator' },
  { q: 'The UI is clean and our new staff ramp fast.', a: 'Dr. S. Morgan, Internal Medicine' },
  { q: 'Audit logs and SSO made our IT review simple.', a: 'IT Director, Lakeside Medical' },
  { q: 'Support answers in minutes, not days.', a: 'Office Manager, Westview Clinic' },
]

function QuoteCard({ q, a }: T) {
  return (
    <figure
      data-card
      className="snap-start shrink-0 basis-full sm:basis-2/3 md:basis-1/2
                 lg:basis-[calc((100%_-_48px)/3)]  /* three cards on lg with gap-6 = 24px */
                 rounded-xl border bg-white p-6 shadow-sm"
    >
      <blockquote className="text-gray-800">“{q}”</blockquote>
      <figcaption className="mt-3 text-sm text-gray-600">— {a}</figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateArrows = () => {
    const el = scroller.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth - 1 // epsilon
    setCanLeft(el.scrollLeft > 0)
    setCanRight(el.scrollLeft < max)
  }

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    const onResize = () => updateArrows()
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  function scroll(dir: 'left' | 'right') {
    const el = scroller.current
    if (!el) return
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches // lg breakpoint
    const amount = isDesktop ? el.clientWidth : Math.max(el.clientWidth * 0.9, 300)
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Loved by busy clinics</h2>
        <p className="mt-2 text-gray-600">Consistent speed, clear UI, and helpful support.</p>
      </div>

      <div className="relative mt-10">
        {/* edge fades */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

        {/* controls */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canLeft}
            className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow hover:bg-gray-50
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
                       disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canRight}
            className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow hover:bg-gray-50
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
                       disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
          >
            ›
          </button>
        </div>

        {/* horizontal scroller (scrollbar hidden) */}
        <div
          ref={scroller}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0
                     [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Customer testimonials"
        >
          {TESTIMONIALS.map((t, i) => (
            <QuoteCard key={i} {...t} />
          ))}
        </div>
      </div>

      {/* neutral footer note */}
      <p className="mt-4 text-center text-xs text-gray-500">Testimonials from real clinics.</p>
    </section>
  )
}
