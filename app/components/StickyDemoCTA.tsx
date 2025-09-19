// /app/components/StickyDemoCTA.tsx
'use client'
import { useEffect, useState } from 'react'

export default function StickyDemoCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={[
        'fixed z-50 right-3 sm:right-5 bottom-20 sm:bottom-24 transition-all',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',
      ].join(' ')}
    >
      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-white/80 backdrop-blur-sm
                   px-4 py-2 text-sm font-medium text-blue-700 shadow-sm
                   hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="6" width="18" height="15" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
        Book demo
      </a>
    </div>
  )
}
