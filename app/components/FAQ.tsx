// /app/components/FAQ.tsx
'use client'
import { useId, useState } from 'react'

type QA = { q: string; a: string }

const FAQ_ITEMS: QA[] = [
  { q: 'Do you help with migration?', a: 'Yes. We import patients, schedules, and templates with QA checks and a dry-run before go-live.' },
  { q: 'Where is data hosted?', a: 'In Canada with encryption at rest and in transit, regular backups, and documented restore procedures.' },
  { q: 'Can we use SSO?', a: 'Yes. We support SAML-based SSO with MFA and granular role-based access controls.' },
  { q: 'How long does a typical switch take?', a: 'Most clinics go live in 2–3 weeks depending on size, data quality, and training availability.' },
  { q: 'What integrations are available?', a: 'HL7/FHIR for labs and external systems, eFax, and APIs for select third-party tools.' },
  { q: 'Can we export our data?', a: 'Yes. We provide structured exports on request, and you can schedule regular data extracts.' },
  { q: 'How is support handled?', a: 'Email and in-app support with typical responses in minutes during business hours.' },
]

function Plus({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 transition-transform ${open ? 'rotate-45 text-blue-600' : 'text-gray-400'}`}
      aria-hidden
    >
      <path fill="currentColor" d="M9 3a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H3a1 1 0 1 1 0-2h6V3z" />
    </svg>
  )
}

function Item({
  i, qa, open, onToggle,
}: { i: number; qa: QA; open: boolean; onToggle: (i: number) => void }) {
  const uid = useId()
  const panelId = `${uid}-panel`
  const btnId = `${uid}-button`

  return (
    <article
      className={[
        'w-full rounded-lg border bg-white shadow-sm',
        'p-4',                      // compact padding
        open ? 'border-blue-200 border-l-4 border-l-blue-600' : 'border-gray-200',
      ].join(' ')}
    >
      <button
        id={btnId}
        type="button"
        onClick={() => onToggle(i)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-medium text-gray-900">{qa.q}</span>
        <Plus open={open} />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`mt-2 text-sm text-gray-600 ${open ? 'block' : 'hidden'}`}
      >
        {qa.a}
      </div>
    </article>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i))

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently asked questions</h2>
          <p className="mt-1 text-gray-600 text-sm">Answers to common questions from clinics.</p>
        </div>

        {/* Single column, full container width; tighter gaps */}
        <div className="mt-8 flex flex-col gap-3">
          {FAQ_ITEMS.map((qa, i) => (
            <Item key={qa.q} i={i} qa={qa} open={open === i} onToggle={toggle} />
          ))}
        </div>
      </div>
    </section>
  )
}
