// /app/components/ScrollToTop.tsx
'use client'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Back to top"
      className={[
        'fixed z-50 right-3 sm:right-5 bottom-5 sm:bottom-6',
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700',
        'shadow-sm hover:bg-gray-50 hover:border-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600',
        'transition-all', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',
      ].join(' ')}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
      </svg>
      <span className="sr-only">Back to top</span>
    </button>
  )
}
