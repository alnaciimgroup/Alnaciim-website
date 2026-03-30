import { Droplets, Filter, GlassWater, CloudSnow, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";
import WaterHero from "@/components/WaterHero";

export default function WaterHome() {
  const { stats, pillars } = CONTENT.water;

  return (
    <div className="bg-white">
      <WaterHero />

      {/* Stats Bar */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-[32px] md:text-[42px] font-[800] text-[#0066FF] leading-none mb-2">{stat.value}</div>
                <div className="text-[12px] font-[600] text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-[42px] md:text-[56px] font-[800] leading-[1.1] tracking-tight text-slate-900 mb-6">
                Pure infrastructure.<br />Built for the region.
              </h2>
              <p className="text-[18px] text-slate-600 leading-relaxed">
                ALNM Water integrates deep regional expertise with advanced purification technology. From the source to the bottle, we manage the entire water value chain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#0066FF] shadow-sm mb-6 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-500">
                  {i === 0 && <Droplets size={24} />}
                  {i === 1 && <Filter size={24} />}
                  {i === 2 && <GlassWater size={24} />}
                  {i === 3 && <CloudSnow size={24} />}
                </div>
                <h3 className="text-[20px] font-[700] text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[#0066FF]/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-[11px] font-[700] tracking-[0.2em] text-blue-400 uppercase">Case Study</span>
              </div>
              <h2 className="text-[42px] md:text-[56px] font-[800] leading-[1.1] tracking-tight mb-8">
                The Nuwaco RO Plant.
              </h2>
              <p className="text-[18px] text-slate-400 leading-relaxed mb-10">
                The largest water treatment facility delivered by ALNM Group. A full-scale reverse osmosis plant providing 2,400 m³ of safe drinking water daily. Custom commissioned for the Garowe municipal grid.
              </p>
              <Link href="/work" className="inline-flex items-center gap-2 text-white font-[600] group hover:text-blue-400 transition-colors">
                Read technical documentation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border border-white/5">
                <img 
                  src="/images/water_purification_industrial_1774886325880.png" 
                  alt="Nuwaco RO Plant Installation" 
                  className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-[1s]"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] z-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
