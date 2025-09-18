// /app/components/Pricing.tsx
function Check() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className="h-5 w-5 text-blue-600">
      <path
        fill="currentColor"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.424.01L3.3 9.53a1 1 0 1 1 1.4-1.43l3.066 3.004 6.494-6.59a1 1 0 0 1 1.444-.224Z"
      />
    </svg>
  );
}

type TierProps = {
  name: string;
  price: string;
  items: string[];
  highlight?: boolean;
};

function Tier({ name, price, items, highlight = false }: TierProps) {
  return (
    <div className="h-full">
      <div
        className={[
          "relative rounded-2xl border bg-white shadow-sm transition hover:shadow-md",
          highlight ? "ring-2 ring-blue-600 border-blue-200" : "",
          "h-full", // ensure the outer card stretches
        ].join(" ")}
      >
        {highlight && (
          <div className="absolute -top-3 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
            Most popular
          </div>
        )}

        {/* Grid rows: title/price | spacer (features grow) | CTA fixed at bottom */}
        <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-0 p-6">
          <div className="text-sm font-semibold text-blue-700">{name}</div>

          <div className="mt-1 text-4xl font-bold tracking-tight">
            {price}
            <span className="text-base font-normal text-gray-500">/user/mo</span>
          </div>

          {/* features column grows to push CTA to bottom */}
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {items.map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check />
                <span>{i}</span>
              </li>
            ))}
          </ul>

          {/* Outline CTA (no bg color), aligned at exact bottom */}
          <a
            href="#demo"
            className="mt-6 inline-flex justify-center rounded-full border border-blue-600 px-5 py-2.5 text-blue-700 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-2 text-gray-600">Volume discounts available.</p>
        </div>

        {/* items-stretch + child h-full keep all cards identical height */}
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          <Tier name="Basic" price="$79" items={["Charting & scheduling", "Email support"]} />
          <Tier
            name="Standard"
            price="$119"
            items={["eFax & eRx", "Billing & claims", "Priority support"]}
            highlight
          />
          <Tier
            name="Plus"
            price="$159"
            items={["Analytics", "SSO & audit export", "Dedicated success manager"]}
          />
        </div>

        <p className="mt-3 text-center text-xs text-gray-500">Canadian pricing. Taxes extra.</p>
      </div>
    </section>
  );
}
