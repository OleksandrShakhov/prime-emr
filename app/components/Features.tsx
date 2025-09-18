// /app/components/Features.tsx
type Accent =
  | 'blue' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan' | 'teal';

const CARD_BG: Record<Accent, string> = {
  blue:    'from-blue-50    to-blue-100    border-blue-100    hover:from-blue-100    hover:to-blue-200',
  indigo:  'from-indigo-50  to-indigo-100  border-indigo-100  hover:from-indigo-100  hover:to-indigo-200',
  emerald: 'from-emerald-50 to-emerald-100 border-emerald-100 hover:from-emerald-100 hover:to-emerald-200',
  amber:   'from-amber-50   to-amber-100   border-amber-100   hover:from-amber-100   hover:to-amber-200',
  rose:    'from-rose-50    to-rose-100    border-rose-100    hover:from-rose-100    hover:to-rose-200',
  violet:  'from-violet-50  to-violet-100  border-violet-100  hover:from-violet-100  hover:to-violet-200',
  cyan:    'from-cyan-50    to-cyan-100    border-cyan-100    hover:from-cyan-100    hover:to-cyan-200',
  teal:    'from-teal-50    to-teal-100    border-teal-100    hover:from-teal-100    hover:to-teal-200',
};

function Card(
  { title, desc, icon, accent = 'blue' }:
  { title: string; desc: string; icon: string; accent?: Accent }
) {
  return (
    <div
      className={
        `group rounded-xl border bg-gradient-to-br p-6 shadow-sm
         transition duration-200 hover:-translate-y-0.5 hover:shadow-md
         ${CARD_BG[accent]}`
      }
    >
      <div className="h-10 w-10 rounded-lg bg-white/70 grid place-items-center text-lg mb-3 shadow-sm ring-1 ring-black/5">
        {icon}
      </div>
      <div className="font-semibold text-gray-900">{title}</div>
      <p className="mt-1 text-sm text-gray-700">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Everything you need—without the clutter
        </h2>
        <p className="mt-2 text-gray-600">
          Designed to keep providers in flow and admins in control.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        <Card accent="blue"    icon="⌨️" title="Fast charting"    desc="Templates, favourites, and smart text in fewer clicks." />
        <Card accent="indigo"  icon="📅" title="Scheduling"       desc="Day/week views, rooms, waitlists, online booking." />
        <Card accent="amber"   icon="💳" title="Billing"          desc="Provincial fee schedules, claim scrubbing, batch submission." />
        {/* Row 2 */}
        <Card accent="emerald" icon="💊" title="eRx & Labs"       desc="CSA-compliant eRx and integrated lab results." />
        <Card accent="rose"    icon="✉️" title="Messaging"        desc="Secure inbox, patient reminders, two-way updates." />
        <Card accent="violet"  icon="🔐" title="Security"         desc="RBAC, audit logs, SSO, encryption at rest & transit." />
        {/* Row 3 (new) */}
        <Card accent="cyan"    icon="🔗" title="Interoperability" desc="HL7/FHIR, eFax, and open APIs to connect your tools." />
        <Card accent="teal"    icon="👤" title="Patient portal"   desc="Forms, results, and secure messages in one place." />
        <Card accent="indigo"  icon="📈" title="Analytics"        desc="Operational and provider dashboards with export." />
      </div>
    </section>
  );
}
