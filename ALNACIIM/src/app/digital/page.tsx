import { Globe, Radio, LayoutDashboard, ArrowRight, CheckCircle2, Server, Database, Code, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";
import DigitalHero from "@/components/digital/DigitalHero";

export default function DigitalHome() {
  const { pillars } = CONTENT.digital;

  const stats = [
    { label: "IoT Endpoints", value: "250+" },
    { label: "Active SCADA", value: "12 Sites" },
    { label: "Data Ingestion", value: "1M/day" },
    { label: "Uptime", value: "99.9%" }
  ];

  return (
    <div className="bg-white">
      <DigitalHero />

      {/* Stats Bar */}

      {/* Stats Bar */}
      <section className="py-8 border-y border-slate-900 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-[28px] md:text-[36px] font-[800] text-blue-400 leading-none mb-1.5">{stat.value}</div>
                <div className="text-[11px] font-[600] text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[800] leading-[1.1] tracking-tight text-slate-900 mb-6 border-l-4 border-blue-600 pl-6">
                The connection layer between hardware and intelligence.
              </h2>
              <p className="text-[17px] text-slate-600 leading-relaxed mb-6 font-[450]">
                ALNM Digital works directly alongside ALNM Engineering. The same group that installs the physical infrastructure builds the logic that reads it.
              </p>
              <div className="space-y-4">
                {[
                  "SCADA built by industrial instrumentation experts",
                  "Automated energy & fuel consumption reports",
                  "End-to-end data security from sensor to cloud",
                  "Remote monitoring in zero-connectivity environments"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-[600]">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative p-4">
              <div className="bg-slate-100 rounded-3xl p-3 shadow-inner relative z-10">
                 <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-video">
                   <img 
                      src="/images/industrial_automation_control_room_1774871867828.png" 
                      alt="SCADA Monitoring Interface" 
                      className="w-full h-full object-cover grayscale opacity-80"
                   />
                 </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-[32px] md:text-[42px] font-[800] text-slate-900 mb-5">Industrial Grade Software.</h2>
          <p className="text-[17px] text-slate-600 max-w-2xl mx-auto font-[450]">
            From company websites to live SCADA monitoring dashboards that connect a network of remote sites—ALNM Digital delivers.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {i === 0 && <Globe size={24} />}
                  {i === 1 && <Radio size={24} />}
                  {i === 2 && <LayoutDashboard size={24} />}
                </div>
                <h3 className="text-[20px] font-[800] text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed font-[450]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
