"use client";

import { Droplets, Filter, GlassWater, CheckCircle2, ArrowRight, Wrench, ShieldCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WaterHome() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
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
              className="text-5xl md:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[1.1] mb-8 font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              CLEAN WATER <br /> INFRASTRUCTURE. <br /><span className="text-blue-600 italic">BUILT TO LAST.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12"
            >
              From massive industrial RO plants to Aqua Safi bottle manufacturing – the region’s most trusted water brand. We deliver clean water infrastructure from design to final commissioning.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-3 group text-[15px]">
                Enquire for Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#capabilities" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-50 text-slate-900 border border-slate-300 font-medium transition-colors flex items-center justify-center text-[15px]">
                Portfolio View
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full overflow-hidden bg-slate-100">
          <img 
            src="/images/nuwaco_ro_plant.png" 
            alt="MUNICIPAL SCALE RO FACILITY" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
          
          <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl max-w-sm hidden md:block">
            <div className="text-3xl font-bold text-white mb-3 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>2.4M Liters</div>
            <p className="text-sm text-white/70 font-medium uppercase tracking-widest leading-relaxed">DAILY YIELD AT OUR <br />NUWACO MUNICIPAL FACILITY.</p>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l border-t border-slate-100">
            {[
              { label: "Daily capacity", value: "600,000L+" },
              { label: "Boreholes", value: "50+" },
              { label: "Automation", value: "10kBPH" },
              { label: "Years Exp.", value: "28+" }
            ].map((stat, i) => (
              <div key={i} className="p-12 border-r border-b border-slate-100 text-center hover:bg-slate-50 transition-colors">
                <div className="text-4xl font-bold text-slate-900 mb-2 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES */}
      <section className="py-40 relative bg-white overflow-hidden" id="capabilities">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-32">
            <div className="flex items-center gap-3 mb-10">
               <div className="w-8 h-px bg-blue-600" />
               <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Division Framework</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-10 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              PURE INFRASTRUCTURE. <br /><span className="text-blue-600 italic">BUILT FOR SOMALIA.</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Alnaciim Water integrates deep regional expertise with advanced purification technology. From the source to the bottle, we manage the entire water value chain through technical hydrometry and industrial purification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-slate-200">
            {[
              { title: "AQUA SAFI BOTTLING", icon: <GlassWater size={24} />, desc: "The region's highest-capacity production of premium bottled water (250ml to 19L)." },
              { title: "WATER WELLS & SUPPLY", icon: <Droplets size={24} />, desc: "Alnaciim Water has drilled and equipped over 30 boreholes across the region." },
              { title: "RO WATER TREATMENT", icon: <Filter size={24} />, desc: "We design and supply RO systems from compact commercial units to large 2,400 m³/day municipal plants." },
              { title: "MAINTENANCE & SUPPORT", icon: <Wrench size={24} />, desc: "Ongoing support for all Alnaciim installations and third-party systems including membrane cleaning and spare parts." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white border-r border-b border-slate-200 p-12 group hover:bg-slate-50 transition-all flex flex-col min-h-[400px]">
                <div className="text-blue-600 mb-10 transition-transform group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif uppercase tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>{pillar.title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed font-light mb-10 flex-grow">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL PORTFOLIO */}
      <section className="py-40 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-48">
          
          {/* WATER WELLS */}
          <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-center">
            <div className="w-full lg:w-1/2 group relative">
              <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                 <img src="/images/water_wells_drilling.png" alt="WELL DRILLING" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Water Infrastructure</span>
               </div>
               <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>WATER WELLS & <br /><span className="text-blue-600 italic">COMMUNITY SUPPLY</span></h3>
               <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">Alnaciim Water has drilled and equipped over 30 boreholes across the region. Each well is professionally drilled, steel-cased, and equipped with solar-priority pumping systems.</p>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-16 border-l border-slate-200 pl-10">
                 {[
                   "Hydro-geological Surveying",
                   "Rotary & Percussion Drilling",
                   "Steel Well Casing & Screens",
                   "Pumping Test & Yield Analysis",
                   "Solar Pumping Installation",
                   "Distribution Networks"
                 ].map((item, i) => (
                   <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                     <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* REVERSE OSMOSIS */}
          <div className="flex flex-col lg:flex-row-reverse gap-24 lg:gap-40 items-center">
            <div className="w-full lg:w-1/2 group relative">
              <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                 <img src="/images/nuwaco_ro_plant.png" alt="RO TREATMENT" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Purification Technology</span>
               </div>
               <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>REVERSE OSMOSIS <br /><span className="text-blue-600 italic">WATER TREATMENT</span></h3>
               <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">We design and supply RO systems from compact commercial units to large 2,400 m³/day municipal plants. Every plant is designed against actual feed water chemistry.</p>
               <ul className="grid sm:grid-cols-1 gap-y-6 mb-16 border-l border-slate-200 pl-10">
                 {[
                   "Nuwaco RO Plant — 2,400 m³/day facility",
                   "Martisoor RO Plant — 300 m³/day system",
                   "Garacad (Maxjar) — 360 m³/day installation",
                   "Budunbuto Village — 360 m³/day solution",
                   "Custom industrial RO design & build"
                 ].map((item, i) => (
                   <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                     <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* INDUSTRIAL ICE - FIXED TO CORRECT ICE IMAGE */}
          <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-center">
            <div className="w-full lg:w-1/2 group relative">
              <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                 {/* Fixed: Using the actual ice image from the reference site */}
                 <img src="/images/commercial_ice_cubes_1769372486661.png" alt="ICE PRODUCTION" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Cold Chain Supply</span>
               </div>
               <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>INDUSTRIAL ICE <br /><span className="text-blue-600 italic">PRODUCTION</span></h3>
               <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">Large-scale block and tube ice production exceeding 10,000 kg per day. Serving the regional food supply chain and commercial distributors.</p>
               <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-12 mb-16 border-l border-slate-200 pl-10">
                 {[
                   "Standard commercial block ice",
                   "Packaged food-grade tube ice",
                   "Industrial cold room storage",
                   "Bulk delivery logistics"
                 ].map((item, i) => (
                   <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                     <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* MAINTENANCE & SPARE PARTS */}
          <div className="flex flex-col lg:flex-row-reverse gap-24 lg:gap-40 items-center">
            <div className="w-full lg:w-1/2 group relative">
              <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                 <img src="/images/water_maintenance_parts.png" alt="MAINTENANCE" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Asset Management</span>
               </div>
               <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>MAINTENANCE & <br /><span className="text-blue-600 italic">SPARE PARTS</span></h3>
               <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">Ongoing support for all Alnaciim installations and third-party systems. We ensure operational continuity for all regional water assets.</p>
               <ul className="grid sm:grid-cols-1 gap-y-6 mb-16 border-l border-slate-200 pl-10">
                 {[
                   "RO membrane cleaning & chemical cleaning (CIP)",
                   "Pump inspection & mechanical seal repair",
                   "Chemical supply: Antiscalant, Biocide, Sodium Bisulfite",
                   "Replacement filters (String wound, Melt blown, Pleated)",
                   "SCADA & Automation system health checks"
                 ].map((item, i) => (
                   <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                     <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AQUA SAFI INDUSTRIES */}
      <section className="py-48 bg-white overflow-hidden border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-32 items-center">
            <div className="w-full lg:w-3/5">
               <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase tracking-[0.3em]">Branding Spotlight</span>
               </div>
               <h2 className="text-5xl md:text-[90px] font-bold text-slate-900 leading-[0.9] mb-12 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                 AQUA SAFI <br /><span className="text-blue-600 italic">INDUSTRIES.</span>
               </h2>
               <p className="text-2xl text-slate-600 font-light leading-relaxed mb-16 uppercase font-bold tracking-tight">
                 ONE OF THE LARGEST BOTTLED WATER OPERATIONS IN THE HORN OF AFRICA, UTILIZING MULTI-STAGE RO AND AUTOMATED FILLING UNDER STERILE CONDITIONS.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-20 border-t border-slate-200 pt-16 mb-16">
                  <div className="space-y-6">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Product Range Matrix</h4>
                    {[
                      "250 ML & 400 ML",
                      "500 ML & 800 ML",
                      "1 L & 1.5 L & 5 L",
                      "10 L & 19L/20 L"
                    ].map((size, k) => (
                      <div key={k} className="text-sm font-bold text-slate-900 uppercase tracking-widest flex justify-between border-b border-slate-100 pb-4">
                        <span>{size}</span> 
                        <CheckCircle2 size={16} className="text-blue-600" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-end">
                    <div className="text-8xl font-bold text-slate-900 mb-6 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>10,000+</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-loose">BOTTLES PER HOUR<br />MANUFACTURING EXCELLENCE</div>
                  </div>
               </div>
            </div>
            
            <div className="w-full lg:w-2/5 group">
               <div className="aspect-[3/4] border border-slate-200 overflow-hidden relative p-4 bg-slate-50 shadow-2xl">
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

      {/* CASE STUDY: THE NUWACO RO PLANT */}
      <section className="py-48 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-200 shadow-2xl">
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden group">
               <img src="/images/nuwaco_ro_plant.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110" />
               <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
               <div className="absolute top-12 left-12 bg-white border border-slate-200 px-8 py-4 font-bold text-[11px] tracking-[0.4em] text-slate-900 uppercase">MUNICIPAL SCALE ASSET</div>
            </div>
            <div className="p-16 lg:p-32 bg-white flex flex-col justify-center relative">
               <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
               <div className="flex items-center gap-3 mb-12">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Infrastructure Spotlight</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-bold mb-12 font-serif leading-[1] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                 THE NUWACO <br /><span className="text-blue-600 italic">RO PLANT.</span>
               </h2>
               <p className="text-xl text-slate-500 font-light leading-relaxed mb-16 uppercase font-bold tracking-tight">
                 THE LARGEST WATER TREATMENT FACILITY DELIVERED BY ALNACIIM GROUP. A FULL-SCALE REVERSE OSMOSIS PLANT PROVIDING 2,400 M³ OF SAFE DRINKING WATER DAILY.
               </p>
               <div className="grid grid-cols-2 gap-16 border-t border-slate-100 pt-16 mb-16">
                  <div>
                    <div className="text-6xl font-bold text-slate-900 mb-3 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>2.4M</div>
                    <div className="text-[11px] text-slate-500 uppercase font-bold tracking-widest">LITERS DAILY YIELD</div>
                  </div>
                  <div>
                    <div className="text-6xl font-bold text-slate-900 mb-3 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>100%</div>
                    <div className="text-[11px] text-slate-500 uppercase font-bold tracking-widest">SCADA INTEGRATED</div>
                  </div>
               </div>
               <Link href="/contact" className="w-fit bg-slate-900 hover:bg-blue-600 text-white px-10 py-5 font-medium transition-colors flex items-center gap-3">
                 Enquire More <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
