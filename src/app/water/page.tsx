import { Droplets, Filter, GlassWater, CloudSnow, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";
import WaterHero from "@/components/WaterHero";

export default function WaterHome() {
  const { stats, pillars } = CONTENT.water;

  return (
    <div className="bg-white">
      <WaterHero />

      {/* Stats Bar */}
      <section className="py-8 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-[28px] md:text-[36px] font-[800] text-[#00a8ff] leading-none mb-1.5">{stat.value}</div>
                <div className="text-[11px] font-[600] text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div className="max-w-xl">
              <h2 className="text-[32px] md:text-[42px] font-[900] leading-[1.1] tracking-tighter text-slate-900 mb-4">
                Pure infrastructure.<br />Built for the region.
              </h2>
              <p className="text-[17px] text-slate-600 leading-relaxed font-[450]">
                Alnaciim Water integrates deep regional expertise with advanced purification technology. From the source to the bottle, we manage the entire water value chain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-7 rounded-[1.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00a8ff] shadow-sm mb-5 group-hover:scale-110 group-hover:bg-[#00a8ff] group-hover:text-white transition-all duration-500">
                  {i === 0 && <Droplets size={24} />}
                  {i === 1 && <Filter size={24} />}
                  {i === 2 && <GlassWater size={24} />}
                  {i === 3 && <CloudSnow size={24} />}
                </div>
                <h3 className="text-[20px] font-[800] text-slate-900 mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions Grid (Merged from /solutions) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-[32px] md:text-[42px] font-[900] text-slate-900 leading-[1.1] tracking-tighter mb-4">
              Engineering Excellence.
            </h2>
            <p className="text-[17px] text-slate-600 font-[450]">
              Technical specifications for our core hydrology and infrastructure services.
            </p>
          </div>
          
          <div className="flex flex-col gap-20 lg:gap-24">
            {[
              {
                title: "Water Wells & Community Supply",
                description: "Alnaciim Water has drilled and equipped over 50 boreholes across Puntland. Each well is professionally drilled, steel-cased, and equipped with solar-priority pumping systems.",
                details: [
                  "Borehole drilling and steel casing installation",
                  "Gravel pack, development and yield testing",
                  "Submersible pump sizing & installation",
                  "Solar panel and generator power supply",
                  "Storage tank installation and distribution"
                ],
                image: "/images/water_infrastructure_ro_plant_1774871836361.png",
                icon: <Droplets size={24} className="text-[#00a8ff]" />
              },
              {
                title: "Reverse Osmosis Water Treatment",
                description: "We design and supply RO systems from compact commercial units to large 2,400 m³/day municipal plants. Every plant is designed against actual feed water chemistry.",
                details: [
                  "Nuwaco RO Plant — 2,400 m³/day facility",
                  "Martisoor RO Plant — 300 m³/day system",
                  "Garacad (Maxjar) — 360 m³/day installation",
                  "Budunbuto Village — 360 m³/day solution",
                  "Commercial RO systems for hospitality"
                ],
                image: "/images/water_purification_industrial_1774886325880.png",
                icon: <Filter size={24} className="text-[#00a8ff]" />
              },
               {
                title: "Industrial Ice Production",
                description: "Large-scale block and tube ice production exceeding 10,000 kg per day. Serving the regional food supply chain and commercial distributors.",
                details: [
                  "Standard commercial block ice formats",
                  "Packaged tube ice for retail and catering",
                  "Cold room storage for consolidation",
                  "Bulk delivery logistics across Puntland",
                  "Integrated water purification for all ice"
                ],
                image: "/images/commercial_ice_cubes_1769372486661.png",
                icon: <CloudSnow size={24} className="text-[#00a8ff]" />
              },
              {
                title: "Maintenance & Spare Parts",
                description: "Ongoing support for all Alnaciim installations and third-party systems. Centrally stocked spare parts at our Garowe warehouse ensure same-day response.",
                details: [
                  "RO membrane cleaning & replacement",
                  "Pump inspection & mechanical seal repair",
                  "Chemical supply: Antiscalant, Biocide, CIP",
                  "UV lamp replacement & sterilizer service",
                  "Quarterly & annual service contracts"
                ],
                image: "/images/eng_pm.png",
                icon: <Droplets size={24} className="text-[#00a8ff]" />
              }
            ].map((section, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video rounded-[1.5rem] overflow-hidden shadow-xl relative border border-slate-100 group">
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center mb-6 text-[#00a8ff]">
                    {section.icon}
                  </div>
                  <h2 className="text-[28px] md:text-[36px] font-[900] text-slate-900 leading-[1.1] tracking-tighter mb-4">
                    {section.title}
                  </h2>
                  <p className="text-[17px] text-slate-600 leading-relaxed mb-6 font-[450]">
                    {section.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                    {section.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-4 text-slate-700 font-[500] text-[15px]">
                        <CheckCircle2 size={18} className="text-[#00a8ff] shrink-0 mt-1" />
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

      {/* Aqua Safi Manufacturing Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl relative z-10 border border-white">
                <img src="/images/packaged_bottled_water_1769372456350.png" alt="Aqua Safi Manufacturing" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
              </div>
              {/* Floating Spec Pill */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block">
                <div className="text-[28px] font-[900] text-[#00a8ff] mb-0.5">10,000+</div>
                <div className="text-[10px] font-[700] text-slate-400 uppercase tracking-widest">Bottles per hour</div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a8ff]/10 border border-[#00a8ff]/20 mb-5 font-[700] text-[10px] text-[#00a8ff] tracking-[0.2em] uppercase">
                Manufacturing Excellence
              </div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-slate-900 leading-[1.1] tracking-tighter mb-6">
                Aqua Safi Industries.
              </h2>
              <p className="text-[18px] text-slate-600 leading-relaxed mb-10 italic">
                "One of the largest bottled water operations in the Horn of Africa, utilizing multi-stage RO and automated filling under sterile conditions."
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-[13px] font-[800] text-slate-400 uppercase tracking-widest mb-4">Product Range</h4>
                  <ul className="space-y-3">
                    {["250 ml & 500 ml", "1.5 L Household", "5 L Family Size", "10 L & 19L/20 L"].map((item, id) => (
                      <li key={id} className="flex items-center gap-3 text-slate-700 font-[500] text-[14px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00a8ff]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[13px] font-[800] text-slate-400 uppercase tracking-widest mb-4">Specifications</h4>
                  <ul className="space-y-3">
                    {["UV Sterilization", "In-line Quality Control", "Automated Packaging", "HACCP Compliance"].map((item, id) => (
                      <li key={id} className="flex items-center gap-3 text-slate-700 font-[500] text-[14px]">
                        <CheckCircle2 size={16} className="text-[#00a8ff]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Link href="/contact" className="inline-flex items-center gap-2 text-slate-900 font-[800] group hover:text-[#00a8ff] transition-colors">
                Enquire about supply agreements
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[#0066FF]/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
                <span className="text-[10px] font-[700] tracking-[0.2em] text-blue-400 uppercase">Case Study</span>
              </div>
              <h2 className="text-[32px] md:text-[42px] font-[800] leading-[1.1] tracking-tight mb-6">
                The Nuwaco RO Plant.
              </h2>
              <p className="text-[17px] text-slate-400 leading-relaxed mb-8">
                The largest water treatment facility delivered by Alnaciim Group. A full-scale reverse osmosis plant providing 2,400 m³ of safe drinking water daily. Custom commissioned for the Garowe municipal grid.
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
