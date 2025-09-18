// /app/components/Security.tsx
export default function Security() {
  return (
    <section id="security" className="relative overflow-hidden">
      {/* Subtle neutral pattern, no blue */}
      <div
        className="absolute inset-0 -z-10 opacity-40
                   [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]
                   bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 32 32%22><path fill=%22%23e5e7eb%22 d=%22M0 31h32v1H0zM31 0v32h1V0z%22/></svg>')]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-start">
        {/* Left: Copy + checklist */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Privacy & Security by design
          </h2>
          <p className="mt-2 text-gray-600">
            Canada-based hosting, least-privilege roles, exhaustive audit logs, and encryption everywhere.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            {[
              'PIPEDA, PHIPA alignment',
              'SSO / SAML, MFA',
              'Data residency in Canada',
              'IP allowlists and device checks',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-700 ring-1 ring-green-200 text-xs">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Small trust chips */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-600">
            <span className="rounded-full border bg-white px-3 py-1">Canada-hosted</span>
            <span className="rounded-full border bg-white px-3 py-1">Encryption at rest & transit</span>
            <span className="rounded-full border bg-white px-3 py-1">Role-based access</span>
            <span className="rounded-full border bg-white px-3 py-1">Comprehensive audit</span>
          </div>
        </div>

        {/* Right: Metric cards + badges */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border bg-gray-50 p-4">
              <div className="text-gray-500">Audit events</div>
              <div className="mt-1 text-2xl font-semibold">10k+/day</div>
            </div>
            <div className="rounded-lg border bg-gray-50 p-4">
              <div className="text-gray-500">Backups</div>
              <div className="mt-1 text-2xl font-semibold">24×7</div>
            </div>
            <div className="rounded-lg border bg-gray-50 p-4">
              <div className="text-gray-500">Encryption</div>
              <div className="mt-1 text-2xl font-semibold">At rest & transit</div>
            </div>
            <div className="rounded-lg border bg-gray-50 p-4">
              <div className="text-gray-500">Access</div>
              <div className="mt-1 text-2xl font-semibold">RBAC + MFA</div>
            </div>
          </div>

          {/* Neutral “certs/claims” strip (placeholders) */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg border bg-white p-4 text-xs text-gray-600">SOC-ready</div>
            <div className="rounded-lg border bg-white p-4 text-xs text-gray-600">SSO / SAML</div>
            <div className="rounded-lg border bg-white p-4 text-xs text-gray-600">PHIPA / PIPEDA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
