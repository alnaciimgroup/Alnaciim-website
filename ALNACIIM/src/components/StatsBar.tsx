"use client";

export default function StatsBar() {
  const stats = [
    { label: "Years delivering infrastructure", value: "28+" },
    { label: "Litres water purified daily", value: "600,000+" },
    { label: "Solar capacity installed", value: "500+ kW" },
    { label: "Projects commissioned to date", value: "60+" }
  ];

  return (
    <section className="py-12 border-y border-slate-100 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[32px] md:text-[42px] font-[900] text-primary tracking-tighter leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-[11px] font-[800] text-slate-400 uppercase tracking-widest leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
