// /app/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { href: '#features', label: 'Features' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#security', label: 'Security' },
  { href: '#pricing',  label: 'Pricing'  },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/80 backdrop-blur border-b border-gray-200' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo: plain <img>, responsive height via clamp; width auto */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Prime EMR home">
          {/* Use SVG if possible: /assets/prime-logo.svg; PNG also works */}
          <img
            src="/assets/prime-logo.svg"
            alt="Prime EMR"
            className="block w-auto shrink-0"
            style={{
              // Easily tweak these bounds if you want it bigger/smaller
              height: 'clamp(40px, 7vw, 130px)',
            }}
          />
          <span className="sr-only">Prime EMR</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-sm">
          {NAV_ITEMS.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-blue-700 transition-colors">
              {label}
            </a>
          ))}
          <a
            href="#demo"
            className="inline-flex items-center rounded-full border border-blue-600 px-4 py-2 text-blue-700 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Book demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white/70 backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <div className="relative h-4 w-4">
            <span className={`absolute inset-x-0 top-0 h-0.5 bg-gray-800 transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-gray-800 transition ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute inset-x-0 top-3 h-0.5 bg-gray-800 transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile panel */}
      <div className={`md:hidden transition-[max-height,opacity] overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
          <div className="rounded-xl border bg-white shadow-sm p-4">
            <div className="flex flex-col gap-3 text-sm">
              {NAV_ITEMS.map(({ href, label }) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="py-2 hover:text-blue-700">
                  {label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-full border border-blue-600 px-4 py-2 text-blue-700 hover:bg-blue-50"
              >
                Book demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
