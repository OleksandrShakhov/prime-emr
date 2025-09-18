'use client'
import { useEffect, useState } from 'react'


export default function StickyActions() {
const [show, setShow] = useState(false)
useEffect(() => {
const onScroll = () => setShow(window.scrollY > 400)
onScroll();
window.addEventListener('scroll', onScroll)
return () => window.removeEventListener('scroll', onScroll)
}, [])


function scrollTop() {
window.scrollTo({ top: 0, behavior: 'smooth' })
}


return (
<div className={`fixed right-4 bottom-4 z-50 transition-opacity ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
<div className="flex flex-col gap-3">
<a href="#contact" className="rounded-full bg-blue-600 text-white px-5 py-3 shadow hover:bg-blue-700">Book demo</a>
<button onClick={scrollTop} aria-label="Scroll to top" className="rounded-full border bg-white px-4 py-3 shadow hover:border-blue-300">↑</button>
</div>
</div>
)
}