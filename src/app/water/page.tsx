"use client";

import { Droplets, Filter, GlassWater, CheckCircle2, ArrowRight, Wrench, ShieldCheck, Activity, Box, Settings, Factory } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WaterHome() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* 1. HERO SECTION - REDUCED FONT SIZE */}
      <section className="relative w-full min-h-[90vh] bg-white flex flex-col lg:flex-row border-b border-slate-200">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-20 pt-32 pb-24 lg:py-0 relative z-10 bg-white">
          <div className="max-w-xl w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
                Alnaciim Water Division
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-bold text-slate-900 leading-[1.1] mb-8 font-serif uppercase"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              CLEAN WATER <br /> INFRASTRUCTURE. <br /><span className="text-blue-600 italic">DESIGNED, BUILT AND MAINTAINED.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12"
            >
              From massive industrial RO plants to Aqua Safi bottle manufacturing the region's most trusted water brand. We deliver clean water infrastructure from design to final commissioning.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-3 group text-[15px]">
                Enquire for Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/work" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-50 text-slate-900 border border-slate-300 font-medium transition-colors flex items-center justify-center text-[15px]">
                Technical Archive
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-full overflow-hidden bg-slate-100">
          <img 
            src="/images/water_hero_new.png" 
            alt="MUNICIPAL SCALE RO FACILITY" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
          
          <div className="absolute bottom-6 right-6 left-6 sm:left-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 shadow-2xl max-w-sm">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>10K BPH</div>
            <p className="text-[10px] sm:text-sm text-white/70 font-medium uppercase tracking-widest leading-relaxed">Automated 10k BPH BOTTLE <br className="hidden sm:block" />Production Capacity.</p>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP - ENGINEERING DESIGN */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-0 divide-x-0 md:divide-x divide-slate-100">
            {[
              { value: "600,000L+", label: "Daily capacity" },
              { value: "30+", label: "Boreholes" },
              { value: "10kBPH", label: "Automation" },
              { value: "28+", label: "Years Exp." }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start md:px-12 first:pl-0">
                <span className="text-5xl font-bold text-slate-900 mb-2">{stat.value}</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID - ENGINEERING DESIGN */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-32">
             <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-blue-600" />
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Division Framework</span>
             </div>
             <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 font-serif leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>Infrastructure Excellence.</h2>
             <p className="text-xl text-slate-500 font-light leading-relaxed">
                Alnaciim Water integrates deep regional expertise with advanced purification technology to manage the entire water value chain.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "AQUA SAFI BOTTLING",
                desc: "10K+ per hour capacity production of premium bottled water (250ml to 19L).",
                icon: <GlassWater className="text-blue-600" size={32} />
              },
              {
                title: "WATER WELLS & SUPPLY",
                desc: "Drilled and equipped over 30 boreholes across the region with solar-priority systems.",
                icon: <Droplets className="text-blue-600" size={32} />
              },
              {
                title: "RO WATER TREATMENT",
                desc: "From compact commercial units to large 2,400 m³/day municipal plants designed against chemistry.",
                icon: <Filter className="text-blue-600" size={32} />
              }
            ].map((pillar, i) => (
              <div key={i} className="space-y-8 group">
                <div className="mb-10">{pillar.icon}</div>
                <h3 className="text-3xl font-bold font-serif text-slate-900" style={{ fontFamily: "var(--font-playfair)" }}>{pillar.title}</h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                   {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AQUA SAFI BOTTLING - Z-PATTERN */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-white p-4">
                <img src="/images/aqua_safi_bottling_facility.png" alt="Aqua Safi Bottling" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </div>
             <div className="space-y-10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-px bg-blue-600" />
                   <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Automation Excellence</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Aqua Safi Bottling</h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                   10K+ per hour capacity production of premium bottled water (250ml to 19L). Somalia's highest-capacity production facility.
                </p>
                <div className="pt-6">
                   <Link href="/contact" className="px-10 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest text-[12px] hover:bg-blue-700 transition-colors">
                      View Capability
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. WATER WELLS & COMMUNITY SUPPLY - Z-PATTERN (REVERSE) */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 space-y-10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-px bg-blue-600" />
                   <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Water Infrastructure</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Water Wells & <br /><span className="text-blue-600 italic text-4xl">Community Supply</span></h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                   Alnaciim Water has drilled and equipped over 30 boreholes across the region. Each well is professionally drilled, steel-cased, and equipped with solar-priority pumping systems.
                </p>
                <ul className="grid grid-cols-1 gap-4 pt-6 border-l border-slate-200 pl-8">
                  {[
                    "Borehole drilling and steel casing installation",
                    "Submersible pump sizing & installation",
                    "Solar panel and generator power supply",
                    "Storage tank installation and distribution"
                  ].map((item, i) => (
                    <li key={i} className="text-[13px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="order-1 lg:order-2 relative aspect-[4/3] overflow-hidden shadow-2xl bg-slate-50 p-4">
                <img src="/images/water_wells_drilling.png" alt="Water Wells" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. REVERSE OSMOSIS WATER TREATMENT - Z-PATTERN */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-white p-4">
                <img src="/images/water_ro_plant_new.png.png" alt="Reverse Osmosis" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </div>
             <div className="space-y-10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-px bg-blue-600" />
                   <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Purification Technology</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Reverse Osmosis <br /><span className="text-blue-600 italic text-4xl">Water Treatment</span></h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                   We design and supply RO systems from compact commercial units to large 2,400 m³/day municipal plants. Every plant is designed against actual feed water chemistry.
                </p>
                <ul className="grid grid-cols-1 gap-4 pt-6 border-l border-slate-200 pl-8">
                  {[
                    "Nuwaco RO Plant — 2,400 m³/day facility",
                    "Martisoor RO Plant — 300 m³/day system",
                    "Garacad (Maxjar) — 360 m³/day installation",
                    "Budunbuto Village — 360 m³/day solution",
                    "Custom commercial RO system."
                  ].map((item, i) => (
                    <li key={i} className="text-[13px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIAL ICE PRODUCTION - Z-PATTERN (REVERSE) */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 space-y-10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-px bg-blue-600" />
                   <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Cold Chain Supply</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Industrial Ice <br /><span className="text-blue-600 italic text-4xl">Production</span></h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                   Large-scale block and tube ice production exceeding 10,000 kg per day. Serving the regional food supply chain and commercial distributors.
                </p>
                <ul className="grid grid-cols-1 gap-4 pt-6 border-l border-slate-200 pl-8">
                  {[
                    "Standard commercial block ice formats",
                    "Packaged tube ice for retail and catering",
                    "Cold room storage for consolidation",
                    "Bulk delivery logistics across the region"
                  ].map((item, i) => (
                    <li key={i} className="text-[13px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="order-1 lg:order-2 relative aspect-[4/3] overflow-hidden shadow-2xl bg-slate-50 p-4">
                <img src="/images/commercial_ice_cubes_1769372486661.png" alt="Industrial Ice" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </div>
          </div>
        </div>
      </section>

      {/* 8. AQUA SAFI INDUSTRIES - BRAND SPOTLIGHT */}
      <section className="py-48 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-32 items-center">
            <div className="w-full lg:w-3/5">
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-8 h-px bg-blue-600" />
                   <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Manufacturing Excellence</span>
                </div>
                <h2 className="text-5xl md:text-[90px] font-bold text-white leading-[0.9] mb-12 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                  AQUA SAFI <br /><span className="text-blue-400 italic">INDUSTRIES.</span>
                </h2>
               <p className="text-2xl text-slate-400 font-light leading-relaxed mb-16 uppercase font-bold tracking-tight">
                 ONE OF THE LARGEST BOTTLED WATER OPERATIONS IN THE HORN OF AFRICA, UTILIZING MULTI-STAGE RO AND AUTOMATED FILLING UNDER STERILE CONDITIONS.
               </p>
               <div className="grid sm:grid-cols-2 gap-20 border-t border-slate-800 pt-16">
                   <div className="space-y-6">
                     <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">Product Range</h4>
                     {[
                       "250 ml & 400 ml",
                       "500 ml & 800 ml",
                       "1 L & 1.5 L & 5 L",
                       "10 L & 19L/20 L"
                     ].map((size, k) => (
                       <div key={k} className="text-sm font-bold text-white uppercase tracking-widest flex justify-between border-b border-slate-800 pb-4">
                         <span>{size}</span> 
                         <CheckCircle2 size={16} className="text-blue-400" />
                       </div>
                     ))}
                   </div>
                   <div className="space-y-6">
                     <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">Specifications</h4>
                     {[
                       "UV Sterilization",
                       "In-line Quality Control",
                       "Automated Packaging"
                     ].map((spec, k) => (
                       <div key={k} className="text-sm font-bold text-white uppercase tracking-widest flex justify-between border-b border-slate-800 pb-4">
                         <span>{spec}</span> 
                         <ShieldCheck size={16} className="text-blue-400" />
                       </div>
                     ))}
                   </div>
                </div>
            </div>
            <div className="w-full lg:w-2/5 group">
               <div className="aspect-[3/4] border border-white/10 overflow-hidden relative p-4 bg-white/5 shadow-2xl backdrop-blur-sm">
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      src="/images/aqua_safi_industries_final.png" 
                      className="w-full h-full object-cover scale-150 group-hover:scale-[1.6] transition-transform duration-[4s] ease-out" 
                    />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MAINTENANCE & SPARE PARTS - Z-PATTERN */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-slate-50 p-4">
                <img src="/images/water_maintenance_parts.png" alt="Maintenance" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </div>
             <div className="space-y-10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-px bg-blue-600" />
                   <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Ongoing Support</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Maintenance & <br /><span className="text-blue-600 italic text-4xl">Spare Parts</span></h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                   Ongoing support for all Alnaciim installations and third-party systems. We ensure operational continuity for all regional water assets.
                </p>
                <ul className="grid grid-cols-1 gap-4 pt-6 border-l border-slate-200 pl-8">
                  {[
                    "RO membrane cleaning & replacement",
                    "Pump inspection & mechanical seal repair",
                    "Chemical supply: Antiscalant, Biocide, CIP"
                  ].map((item, i) => (
                    <li key={i} className="text-[13px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 10. TECHNICAL ARCHIVE STRIP (ENGINEERING STYLE) */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
               <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Access the Technical Archive.</h2>
               <p className="text-lg text-slate-500 font-light">Explore our complete history of water infrastructure projects across the region.</p>
            </div>
            <Link href="/work?filter=Water" className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-[0.2em] text-[12px] transition-all group">
              View Water Portfolio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
