import { Droplets, Filter, GlassWater, CloudSnow, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";
import WaterHero from "@/components/WaterHero";

export default function WaterHome() {
  const { stats, pillars } = CONTENT.water;

  return (
    <div className="bg-white">
      <WaterHero />

      {/* Stats Bar - Widened 1600px */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[24px] md:text-[28px] font-[900] text-[#0066FF] tracking-tighter leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] font-[800] text-slate-400 uppercase tracking-widest leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section - Centered Architectural Layout */}
      <section className="py-32 bg-slate-50/30 relative overflow-hidden">
        {/* Subtle Dot Grid Mask */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#0066FF 0.5px, transparent 0.5px)`, backgroundSize: '16px 16px' }} />

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 text-[#0066FF] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Core Capabilities
            </div>
            
            <div className="relative w-full flex items-center justify-center gap-10 mb-8">
              {/* Left Structural Line */}
              <div className="hidden lg:block h-[1px] flex-grow bg-[#0066FF]/20 max-w-[400px]" />
              
              <h2 className="text-[28px] md:text-[36px] font-[900] leading-[1.1] tracking-[0.12em] text-slate-900 uppercase">
                Pure infrastructure.<br />Built for Somalia.
              </h2>
              
              {/* Right Structural Line */}
              <div className="hidden lg:block h-[1px] flex-grow bg-[#0066FF]/20 max-w-[400px]" />
            </div>
            
            <p className="text-[16px] text-slate-500 leading-relaxed font-[450] max-w-2xl mx-auto text-center">
              Alnaciim Water integrates deep regional expertise with advanced purification technology. From the source to the bottle, we manage the entire water value chain through technical hydrometry and industrial purification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0066FF] mb-6 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-500 shadow-sm">
                  {i === 0 && <Droplets size={22} />}
                  {i === 1 && <Filter size={22} />}
                  {i === 2 && <GlassWater size={22} />}
                  {i === 3 && <CheckCircle2 size={22} />}
                </div>
                <h3 className="text-[18px] font-[900] text-slate-900 mb-4 tracking-tight uppercase tracking-widest">{pillar.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed group-hover:text-slate-900 transition-colors">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions Grid - Widened 1600px Centered */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 text-[#0066FF] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Engineering Excellence
            </div>
            
            <div className="relative w-full flex items-center justify-center gap-10 mb-8">
              {/* Left Structural Line */}
              <div className="hidden lg:block h-[1px] flex-grow bg-[#0066FF]/20 max-w-[400px]" />
              
              <h2 className="text-[28px] md:text-[42px] font-[900] text-slate-900 leading-[1] tracking-[0.12em] uppercase">
                Technical Specifications.
              </h2>
              
              {/* Right Structural Line */}
              <div className="hidden lg:block h-[1px] flex-grow bg-[#0066FF]/20 max-w-[400px]" />
            </div>
            
            <p className="text-[16px] text-slate-600 font-[450] leading-relaxed max-w-2xl mx-auto">
              Core hydrology and infrastructure services delivered by Alnaciim Engineering.
            </p>
          </div>
          
          <div className="flex flex-col gap-24 lg:gap-32">
            {[
              {
                title: "Water Wells & Community Supply",
                description: "Alnaciim Water has drilled and equipped over 30 boreholes across the region. Each well is professionally drilled, steel-cased, and equipped with solar-priority pumping systems.",
                details: [
                  "Borehole drilling and steel casing installation",
                  "Submersible pump sizing & installation",
                  "Solar panel and generator power supply",
                  "Storage tank installation and distribution"
                ],
                image: "/images/water_wells_30plus_boreholes.png",
                icon: <Droplets size={24} className="text-[#0066FF]" />
              },
              {
                title: "Reverse Osmosis Water Treatment",
                description: "We design and supply RO systems from compact commercial units to large 2,400 m³/day municipal plants. Every plant is designed against actual feed water chemistry.",
                details: [
                  "Nuwaco RO Plant — 2,400 m³/day facility",
                  "Martisoor RO Plant — 300 m³/day system",
                  "Garacad (Maxjar) — 360 m³/day installation",
                  "Budunbuto Village — 360 m³/day solution",
                  "Custom commercial RO system."
                ],
                image: "/images/nuwaco_ro_plant.png",
                icon: <Filter size={24} className="text-[#0066FF]" />
              },
               {
                title: "Industrial Ice Production",
                description: "Large-scale block and tube ice production exceeding 10,000 kg per day. Serving the regional food supply chain and commercial distributors.",
                details: [
                  "Standard commercial block ice formats",
                  "Packaged tube ice for retail and catering",
                  "Cold room storage for consolidation",
                  "Bulk delivery logistics across the region"
                ],
                image: "/images/commercial_ice_cubes_1769372486661.png",
                icon: <CloudSnow size={24} className="text-[#0066FF]" />
              },
              {
                title: "Maintenance & Spare Parts",
                description: "Ongoing support for all Alnaciim installations and third-party systems.",
                details: [
                  "RO membrane cleaning & replacement",
                  "Pump inspection & mechanical seal repair",
                  "Chemical supply: Antiscalant, Biocide, CIP",
                  "Replacement filters and components"
                ],
                image: "/images/commercial_ro_systems_and_maintenance.png",
                icon: <CheckCircle2 size={24} className="text-[#0066FF]" />
              }
            ].map((section, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-200 group">
                    <img src={section.image} alt={section.title} className="absolute inset-0 w-full h-full object-cover object-bottom block group-hover:scale-110 transition-transform duration-[2s] ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-[#0066FF] shadow-sm">
                    {section.icon}
                  </div>
                  <h3 className="text-[28px] md:text-[36px] font-[900] text-slate-900 leading-[1] tracking-tight mb-6 uppercase">
                    {section.title}
                  </h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-8 font-[450]">
                    {section.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                    {section.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-4 text-slate-700 font-[600] text-[14px]">
                        <CheckCircle2 size={16} className="text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aqua Safi Manufacturing Section - Widened & Centered */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border border-white bg-white">
                <img src="/images/aqua_safi_industries_final.png" alt="" className="absolute inset-0 w-full h-full object-cover block scale-[1.2] origin-bottom transition-transform duration-700" />
              </div>
              {/* Floating Spec Pill */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-slate-100 hidden md:block">
                <div className="text-[32px] font-[900] text-[#0066FF] mb-0.5 leading-none">10,000+</div>
                <div className="text-[11px] font-[800] text-slate-400 uppercase tracking-widest">Bottles per hour</div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 text-[#0066FF] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                Manufacturing Excellence
              </div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-slate-900 leading-[1.05] tracking-tight mb-6 uppercase">
                Aqua Safi Industries.
              </h2>
              <p className="text-[17px] text-slate-500 leading-relaxed mb-10 font-[450] italic border-l-4 border-blue-500 pl-8">
                "One of the largest bottled water operations in the Horn of Africa, utilizing multi-stage RO and automated filling under sterile conditions."
              </p>
              
              <div className="grid sm:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-[11px] font-[800] text-slate-400 uppercase tracking-widest mb-5">Product Range</h4>
                  <ul className="space-y-3">
                    {["250 ml & 400 ml", "500 ml & 800 ml", "1 L & 1.5 L & 5 L", "10 L & 19L/20 L"].map((item, id) => (
                      <li key={id} className="flex items-center gap-3 text-slate-700 font-[700] text-[15px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] font-[800] text-slate-400 uppercase tracking-widest mb-5">Quality Standards</h4>
                  <ul className="space-y-3">
                    {["UV Sterilization", "In-line Quality Control", "Automated Packaging"].map((item, id) => (
                      <li key={id} className="flex items-center gap-3 text-slate-700 font-[700] text-[15px]">
                        <CheckCircle2 size={18} className="text-[#0066FF]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Link href="/contact?subject=Aqua Safi Enquiry" className="inline-flex items-center gap-3 text-slate-900 font-[900] group hover:text-[#0066FF] transition-all uppercase tracking-widest text-[14px]">
                Enquire about supply
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Widened & Centered */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[#0066FF]/5 pointer-events-none" />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-8 text-blue-400 text-[10px] font-[800] tracking-[0.2em] uppercase">
                Case Study
              </div>
              <h2 className="text-[36px] md:text-[52px] font-[900] leading-[1.05] tracking-tight mb-8 uppercase">
                Case Study - <br/>The Nuwaco RO Plant.
              </h2>
              <p className="text-[17px] text-slate-400 leading-relaxed font-[450] mb-10">
                The largest water treatment facility delivered by Alnaciim Group. A full-scale reverse osmosis plant providing 2,400 m³ of safe drinking water daily. Custom commissioned for the Garowe municipal grid.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-white font-[900] group hover:text-blue-400 transition-all uppercase tracking-widest text-[14px]">
                Enquire more
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border border-white/10 group">
                <img 
                  src="/images/nuwaco_ro_plant.png" 
                  alt="Nuwaco RO Plant Installation" 
                  className="absolute inset-0 w-full h-full object-cover object-bottom block transition-all duration-[2s] ease-out"
                />
              </div>
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] z-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
