// /app/components/Workflow.tsx
type Step = { title: string; desc: string }

const STEPS: Step[] = [
  { title: '1. Assess',  desc: 'Map current flows & data.' },
  { title: '2. Import',  desc: 'Migrate patients, schedules, templates.' },
  { title: '3. Train',   desc: 'Role-based sessions & office hours.' },
  { title: '4. Go live', desc: 'On-site/remote support, QA follow-ups.' },
]

// Single professional accent (blue)
const CARD_BG = 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-100'
const LABEL   = 'text-blue-700'
const LINE_START = '#60a5fa' // blue-400
const LINE_END   = '#2563eb' // blue-600
const ARROW_FILL = LINE_END

export default function Workflow() {
  return (
    <section id="workflow" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Switching is simple</h2>
          <p className="mt-2 text-gray-600">We guide your team from kickoff to go-live.</p>
        </div>

        {/* Desktop: horizontal timeline with single-color arrows */}
        <ol className="mt-12 hidden md:grid grid-cols-4 gap-8">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <div className={`h-44 rounded-2xl border ${CARD_BG} p-5 shadow-sm flex flex-col`}>
                <div className={`text-xs font-semibold ${LABEL}`}>STEP {i + 1}</div>
                <div className="mt-1 font-medium">{s.title}</div>
                <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
              </div>

              {i < STEPS.length - 1 && (
                <div aria-hidden className="absolute -right-9 top-1/2 -translate-y-1/2">
                  <svg width="72" height="18" viewBox="0 0 72 18">
                    <defs>
                      <linearGradient id={`wf-line-${i}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%"  stopColor={LINE_START} />
                        <stop offset="100%" stopColor={LINE_END} />
                      </linearGradient>
                      <marker id={`wf-arrow-${i}`} markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 Z" fill={ARROW_FILL} />
                      </marker>
                    </defs>
                    <path
                      d="M0,9 C22,9 42,9 58,9"
                      fill="none"
                      stroke={`url(#wf-line-${i})`}
                      strokeWidth="2"
                      markerEnd={`url(#wf-arrow-${i})`}
                    />
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* Mobile: vertical timeline with single-color arrows */}
        <ol className="mt-12 md:hidden grid grid-cols-1 gap-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <div className={`h-36 rounded-2xl border ${CARD_BG} p-5 shadow-sm flex flex-col`}>
                <div className={`text-xs font-semibold ${LABEL}`}>STEP {i + 1}</div>
                <div className="mt-1 font-medium">{s.title}</div>
                <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
              </div>

              {i < STEPS.length - 1 && (
                <div aria-hidden className="absolute left-1/2 -translate-x-1/2 -bottom-10">
                  <svg width="18" height="72" viewBox="0 0 18 72">
                    <defs>
                      <linearGradient id={`wf-line-v-${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%"  stopColor={LINE_START} />
                        <stop offset="100%" stopColor={LINE_END} />
                      </linearGradient>
                      <marker id={`wf-arrow-v-${i}`} markerWidth="10" markerHeight="10" refX="5" refY="8" orient="auto">
                        <path d="M0,0 L10,0 L5,10 Z" fill={ARROW_FILL} />
                      </marker>
                    </defs>
                    <path
                      d="M9,0 C9,22 9,42 9,58"
                      fill="none"
                      stroke={`url(#wf-line-v-${i})`}
                      strokeWidth="2"
                      markerEnd={`url(#wf-arrow-v-${i})`}
                    />
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ol>

        <p className="mt-6 text-center text-xs text-gray-500">
          Typical migration: 2–3 weeks with guided training and on-call support.
        </p>
      </div>
    </section>
  )
}
