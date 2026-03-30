import { Sun, Battery, Zap, Fuel, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function EnergySolutions() {
  const { hero, pillars } = CONTENT.energy;

  const solutions = [
    {
      title: "Utility-Scale Solar PV",
      description: "High-yield commercial and utility-scale solar arrays. We coordinate full EPC services from site assessment and PVSyst modeling to final commissioning and grid integration.",
      features: [
        "Tier 1 Bifacial Modules for maximum yield",
        "Anti-PID Technology & PID Recovery",
        "Structural Wind Loading Design for regional conditions",
        "String and Central Inverter Architecture",
        "Automated Panel Cleaning & Maintenance Programs"
      ],
      image: "/images/power_systems_generators_1774871854169.png",
      icon: <Sun className="text-[#FF5A00]" size={24} />
    },
    {
      title: "Battery Energy Storage (BESS)",
      description: "Scalable Lithium Iron Phosphate (LiFePO4) battery solutions. From home-scale kWh modular units to 20ft containerized industrial-scale MWh systems.",
      features: [
        "Peak Shaving & Load Shifting optimization",
        "Intelligent BMS with remote monitoring",
        "High cycle life (>6000 cycles at 80% DoD)",
        "Seamless transition for 24/7 continuous operation",
        "Fire suppression & thermal management systems"
      ],
      image: "/images/power_systems_generators_1774871854169.png",
      icon: <Battery className="text-[#FF5A00]" size={24} />
    },
    {
      title: "Hybrid Microgrid Integration",
      description: "Intelligent coordination of solar, battery storage, and diesel generation for 24/7 reliability in off-grid or weak-grid environments.",
      features: [
        "DEIF & DSE central energy management controllers",
        "Automated generator start/stop logic",
        "Optimal solar-priority dispatch algorithms",
        "Grid-forming and grid-following capabilities",
        "Site-wide energy auditing and demand management"
      ],
      image: "/images/industrial_automation_control_room_1774871867828.png",
      icon: <Zap className="text-[#FF5A00]" size={24} />
    }
  ];

  return (
    <div className="bg-white pt-32">
      {/* Page Header */}
      <section className="py-20 lg:py-32 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF5A00]/5 blur-[100px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-[56px] md:text-[72px] font-[800] text-slate-900 leading-[1] tracking-tight mb-8">
              Energy solutions for business and industry.
            </h1>
            <p className="text-[20px] text-slate-600 leading-relaxed">
              ALNM Energy provides the technical infrastructure required for energy independence. We design for the specific environmental and operational challenges of East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-32">
            {solutions.map((sol, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                    <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF5F0] flex items-center justify-center mb-8">
                    {sol.icon}
                  </div>
                  <h2 className="text-[36px] md:text-[48px] font-[800] text-slate-900 leading-[1.1] tracking-tight mb-6">
                    {sol.title}
                  </h2>
                  <p className="text-[18px] text-slate-600 leading-relaxed mb-8">
                    {sol.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {sol.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-4 text-slate-700 font-[500]">
                        <CheckCircle2 size={20} className="text-[#FF5A00] shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-slate-900 font-[700] hover:text-[#FF5A00] transition-colors group">
                    Request a technical proposal
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[42px] md:text-[56px] font-[800] mb-8">Ready to stabilize your power?</h2>
          <p className="text-[18px] text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Every ALNM Energy project starts with a detailed energy audit and load analysis. Talk to our engineers today about your facility's requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-[#FF5A00] hover:bg-[#FF8C00] text-white rounded-full font-[700] transition-all shadow-xl shadow-orange-500/20">
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
