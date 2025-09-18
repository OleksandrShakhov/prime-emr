// /app/components/Footer.tsx
export default function Footer() {
  return (
    <footer id="contact" className="relative border-t bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="font-semibold">Prime EMR</div>
          <p className="mt-2 text-sm text-gray-600 max-w-sm">
            Secure, modern EMR built in Canada. Simpler workflows, happier teams.
          </p>
        </div>

        <div>
          <div className="font-medium">Product</div>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li><a href="#features" className="hover:text-blue-700">Features</a></li>
            <li><a href="#workflow" className="hover:text-blue-700">Workflow</a></li>
            <li><a href="#security" className="hover:text-blue-700">Security</a></li>
          </ul>
        </div>

        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li><a href="#" className="hover:text-blue-700">Privacy</a></li>
            <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-100 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Prime EMR</span>
          <span>Made in Canada</span>
        </div>
      </div>
    </footer>
  )
}
