// /app/components/Navbar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
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
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`sticky top-0 z-50 transition-colors ${scrolled ? 'bg-white/85 backdrop-blur border-b border-gray-200 shadow-sm' : 'bg-white/70 backdrop-blur'}`}>
      {/* Fixed header height so the layout never jumps */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 md:h-24 grid grid-cols-[auto_1fr_auto] items-center">
        {/* LEFT: Logo in a fixed-height box (prevents “way down” look even if image has whitespace) */}
        <Link href="/" aria-label="Prime EMR home" className="flex items-center gap-3 shrink-0">
          <div className="relative h-12 md:h-14 lg:h-16 w-[180px] md:w-[220px] lg:w-[260px]">
            <Image
              src="/assets/prime-logo-1.png"   // or .svg if you have it
              alt="Prime EMR"
              fill
              priority
              sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 180px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* CENTER: Desktop menu (truly centered) */}
        <div className="hidden md:flex justify-center items-center text-md">
          <div className="flex items-center gap-12 lg:gap-16 xl:gap-20">
            {NAV_ITEMS.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-blue-700 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: CTA + mobile toggle */}
        <div className="flex items-center justify-end gap-3">
          <a
            href="#demo"
            className="hidden md:inline-flex items-center rounded-full border border-blue-600 px-5 py-2.5 text-blue-700 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Book demo
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(v => !v)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 bg-white/80 backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <div className="relative h-4 w-5">
              <span className={`absolute inset-x-0 top-0 h-0.5 bg-gray-900 transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-gray-900 transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute inset-x-0 top-3 h-0.5 bg-gray-900 transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE PANEL */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out
                    ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-4">
          <div className="rounded-xl border bg-white shadow-sm p-4">
            <div className="flex flex-col gap-1 text-sm text-center">
              {NAV_ITEMS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="py-2 hover:text-blue-700"
                  onClick={() => setOpen(false)}
                >
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
