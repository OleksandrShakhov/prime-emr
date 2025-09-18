import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Security from './components/Security'
import CaseStudy from './components/CaseStudy'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import StickyActions from './components/StickyActions'


export default function Page() {
return (
<main>
<Navbar />
<Hero />
<Features />
<Workflow />
<Security />
<CTA />
<CaseStudy />
<Pricing />
<FAQ />
<Testimonials />
<ContactForm />
<Footer />
<StickyActions />
</main>
)
}