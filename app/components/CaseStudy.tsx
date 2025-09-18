// /app/components/CaseStudy.tsx
import Image from "next/image";

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-gray-50 p-5">
      <div className="text-gray-500 text-sm">{label}</div>
      <div className="mt-1 text-3xl font-bold">{value}</div>
    </div>
  );
}

export default function CaseStudy() {
  return (
    <section id="case-study" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: narrative + metrics + bullets */}
        <div>
          <header className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Case study — Maple Grove Clinic
            </h2>
            <p className="mt-2 text-gray-600">
              A mid-size family clinic streamlined operations after switching to Prime.
            </p>
          </header>

          {/* Outcome metrics */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <Metric label="Charting time" value="−30%" />
            <Metric label="Claim resubmits" value="−22%" />
            <Metric label="Go-live time" value="3 weeks" />
          </div>

          {/* What changed */}
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-400" />
              <span><span className="font-semibold">Faster notes</span> using templates & favourites.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-400" />
              <span><span className="font-semibold">Improved flow</span> with online scheduling & reminders.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-400" />
              <span><span className="font-semibold">Cleaner billing</span> via built-in validation before submission.</span>
            </li>
          </ul>

          {/* Credible quote */}
          <figure className="mt-6 border-l-4 border-blue-600 pl-4">
            <blockquote className="text-gray-800 italic">
              “Prime feels effortless compared to our old system. Our clinicians finish notes earlier and admin has reliable reporting.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-gray-500">
              — Clinic Manager, Maple Grove Clinic
            </figcaption>
          </figure>
        </div>

        {/* Right: screenshot card with caption + quick facts */}
        <div>
          <div className="rounded-2xl border bg-white p-2 shadow-sm">
            <figure className="rounded-xl overflow-hidden border bg-gray-50">
              <Image
                src="/assets/demo.png" // <- replace with your actual screenshot file
                alt="Prime EMR — Scheduling and charting workflow used at Maple Grove Clinic"
                width={1280}
                height={800}
                className="w-full h-auto"
                priority
              />
            </figure>
            <figcaption className="px-4 pt-3">
              <div className="text-sm text-gray-600">
                Scheduling & charting view used during the rollout.
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="rounded-full border bg-white px-3 py-1">9 providers</span>
                <span className="rounded-full border bg-white px-3 py-1">Family practice</span>
                <span className="rounded-full border bg-white px-3 py-1">Canada-hosted</span>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
