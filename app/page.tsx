export const metadata = {
  title: "BodyOS",
  description: "Run your body like a system.",
  icons: {
    icon: "/bodyos-icon.png",
  },
};
export default function BodyOSLandingPage() {
  
  const features = [
    {
      title: "Daily Check-In",
      text: "Log weight, sleep, habits, discipline, and how your body is actually responding — in under a minute.",
    },
    {
      title: "Nutrition Control",
      text: "Track meals, calories, protein, and phase targets for cut, bulk, or maintenance without spreadsheet chaos.",
    },
    {
      title: "Training & Recovery",
      text: "Keep your lifting, CrossFit, cardio, sleep, and recovery data in one place so decisions stop being guesswork.",
    },
    {
      title: "Progress That Compounds",
      text: "See trends over time with photos, analytics, habit consistency, and a clear system for long-term body transformation.",
    },
  ];

  const stats = [
    { label: "Check-in time", value: "< 60 sec" },
    { label: "Core areas", value: "8" },
    { label: "Designed for", value: "Consistency" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(229,231,235,0.12),_transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
  <img
    src="/bodyos-icon.png"
    alt="BodyOS Icon"
    className="h-10 w-10 rounded-xl object-contain"
  />

  <div className="flex flex-col leading-none">
    <img
      src="/bodyos-logo.png"
      alt="BodyOS"
      className="h-7 w-auto object-contain"
    />
    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#E5E7EB]/65">
      Personal Body Operating System
    </p>
  </div>
</div>

            <div className="hidden items-center gap-3 sm:flex">
              <a
                href="#features"
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#E5E7EB] transition hover:bg-white/10"
              >
                Features
              </a>
              <a
                href="#waitlist"
                className="rounded-full bg-[#3B82F6] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#3B82F6]/30 transition hover:scale-[1.02]"
              >
                Get Early Access
              </a>
            </div>
          </header>

          <div className="grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[#3B82F6]/30 bg-[#142E54]/80 px-4 py-2 text-sm text-[#E5E7EB] backdrop-blur">
                Built for busy people who still want a serious physique
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Stop guessing.
                <span className="block text-[#3B82F6]">Run your body like a system.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E5E7EB]/80 sm:text-xl">
                BodyOS brings together weight, nutrition, training, sleep, habits, progress photos, and discipline into one clean operating system.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#3B82F6] px-6 py-4 text-base font-semibold text-white shadow-2xl shadow-[#3B82F6]/30 transition hover:-translate-y-0.5"
                >
                  Join the Waitlist
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-[#E5E7EB] transition hover:bg-white/10"
                >
                  See what it tracks
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-[#E5E7EB]/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[#3B82F6]/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[#142E54]/85 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0B1F3A] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#E5E7EB]/60">Today</p>
                      <h3 className="text-xl font-semibold">Body Dashboard</h3>
                    </div>
                    <div className="rounded-full bg-[#3B82F6]/15 px-3 py-1 text-sm text-[#3B82F6]">
                      Phase: Cut
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Card title="Weight" value="84.6 kg" sub="-0.4 this week" />
                      <Card title="Sleep" value="7h 42m" sub="Recovery improving" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Card title="Protein" value="176 g" sub="On target" />
                      <Card title="Training" value="CrossFit" sub="21:00 session" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-[#E5E7EB]/60">Discipline Score</p>
                          <p className="text-3xl font-semibold">91%</p>
                        </div>
                        <div className="relative h-16 w-16">
                          <div className="absolute inset-0 rounded-full border-[6px] border-white/10" />
                          <div className="absolute inset-0 rounded-full border-[6px] border-[#3B82F6] border-b-transparent border-l-transparent rotate-45" />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="font-medium">This week</p>
                        <p className="text-sm text-[#E5E7EB]/60">Trend view</p>
                      </div>
                      <div className="flex h-28 items-end gap-2">
                        {[44, 56, 48, 72, 68, 80, 92].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-xl bg-gradient-to-t from-[#3B82F6] to-white/80" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white text-[#0B1F3A]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3B82F6]">Core System</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Everything that matters. Nothing bloated.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#142E54]/80">
              Built for people who want visible progress, cleaner decisions, and a body transformation system they can actually stick to.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#142E54] text-lg font-semibold text-white">
                  O
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#142E54]/75">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E5E7EB] text-[#0B1F3A]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3B82F6]">Why BodyOS</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Your physique changes when your system stops leaking.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#142E54]/80">
              Most people fail because their food, workouts, sleep, and consistency live in different apps — or nowhere. BodyOS turns that mess into one tight feedback loop.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <div className="space-y-5">
              {[
                "Clear daily actions",
                "Fast mobile-first logging",
                "Visual progress and analytics",
                "Simple enough to use every day",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] text-sm font-bold text-white">
                    ✓
                  </div>
                  <p className="text-lg text-[#142E54]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-[#0B1F3A]">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-[#142E54] p-8 shadow-2xl shadow-black/25 sm:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3B82F6]">Early Access</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Build your body with structure, not motivation.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#E5E7EB]/80">
                Join the waitlist to get early access to BodyOS and be first in line when the product launches.
              </p>
            </div>
        
            <form action="https://formspree.io/f/xaqlpynq"  method="POST" className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="h-14 rounded-2xl border border-white/10 bg-white px-5 text-[#0B1F3A] outline-none ring-0 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="h-14 rounded-2xl bg-[#3B82F6] px-6 text-base font-semibold text-white shadow-lg shadow-[#3B82F6]/30 transition hover:-translate-y-0.5"
              >
                Join Waitlist
              </button>
            </form>
            

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#E5E7EB]/70">
              <span className="rounded-full border border-white/10 px-3 py-1">Weight</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Nutrition</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Training</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Sleep</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Habits</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Analytics</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type CardProps = {
  title: string;
  value: string;
  sub: string;
};

function Card({ title, value, sub }: CardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-[#E5E7EB]/60">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-[#E5E7EB]/70">{sub}</p>
    </div>
  );
}
