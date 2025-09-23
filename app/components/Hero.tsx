// /app/components/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft neutral background with subtle grid */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#f1f5f9_0%,_transparent_45%),linear-gradient(to_bottom,_#f8fafc,_#ffffff)]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'32\\' height=\\'32\\' viewBox=\\'0 0 32 32\\'><path fill=\\'%23e5e7eb\\' d=\\'M0 31h32v1H0zM31 0v32h1V0z\\'/></svg>')] opacity-30"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            The clear, modern EMR built for focus
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Faster charting, cleaner scheduling, and effortless billing—without extra clicks.
          </p>

          <div className="mt-6">
            <Link
              href="#demo"
              className="inline-flex rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* Right frame with screenshot */}
        <div className="relative">
          <div className="rounded-2xl border bg-white p-2 shadow-xl">
            {/* Optional simple browser chrome */}
            <div className="flex items-center gap-1 px-3 pt-2 pb-1">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
              <span className="ml-3 text-xs text-gray-500">Prime EMR</span>
            </div>

            <div className="rounded-xl overflow-hidden border">
              {/* Place your file at /public/assets/demo.png */}
              <Image
                src="/assets/demo.png"
                alt="Prime EMR interface"
                width={1440}
                height={900}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
            </div>
          </div>

          {/* soft glows */}
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-blue-200/50 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-indigo-200/50 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
