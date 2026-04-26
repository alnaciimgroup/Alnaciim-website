"use client";

import { ArrowRight, Zap, ShieldCheck, Sun, Battery, Settings, Filter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import EnergyStatsGrid from "@/components/energy/EnergyStatsGrid";
import EnergyMethodology from "@/components/energy/EnergyMethodology";
import EnergyCompetencies from "@/components/energy/EnergyCompetencies";
import EnergyCTA from "@/components/energy/EnergyCTA";

export default function EnergyHome() {
  return (
    <div className="bg-white selection:bg-blue-600 selection:text-white">
      
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
                ALNACIIM ENERGY · SOLAR · HYBRID
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[1.1] mb-8 font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Solar. Storage. <br /> Generation. <br /><span className="text-blue-600 italic">Sized for your site.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12"
            >
              We design and install solar arrays, hybrid microgrids, and battery storage systems that stabilize regional power grids for homes, businesses and critical infrastructure.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-3 group text-[15px]">
                Enquire for Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#solutions" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-50 text-slate-900 border border-slate-300 font-medium transition-colors flex items-center justify-center text-[15px]">
                Portfolio View
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full overflow-hidden bg-slate-100">
          {/* Fixed: Exact match for Hero visual */}
          <img 
            src="/images/energy_intelligent_controller.png" 
            alt="Energy Infrastructure" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
          
          <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl max-w-sm hidden md:block">
            <div className="text-3xl font-bold text-white mb-3 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>12.5 MW</div>
            <p className="text-sm text-white/70 font-medium uppercase tracking-widest leading-relaxed">INSTALLED SOLAR CAPACITY <br />ACROSS REGIONAL NODES.</p>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <EnergyStatsGrid />

      {/* 3. CORE SOLUTIONS - 100% CONTENT & IMAGE SYNC */}
      <section className="py-40 bg-white overflow-hidden" id="solutions">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-32">
            <div className="flex items-center gap-3 mb-10">
               <div className="w-8 h-px bg-blue-600" />
               <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Technological Precision</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-10 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              Engineered for the long term. <br /><span className="text-blue-600 italic">Sized for your load.</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              We design, procure, and install end-to-end power delivery systems. By unifying generation and storage, we drastically reduce operating expenses for our region's industrials.
            </p>
          </div>

          <div className="space-y-48">
            
            {/* UTILITY SOLAR - SUNSET FIELD */}
            <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-center">
              <div className="w-full lg:w-1/2 group relative">
                <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                   <img src="/images/energy_utility_solar.png" alt="UTILITY SOLAR" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Utility-Scale <br /><span className="text-blue-600 italic">Solar PV</span></h3>
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-12"><strong>Solar PV Systems</strong> From small commercial rooftop installations to large industrial ground-mount arrays, Alnaciim Energy designs, supplies and installs solar photovoltaic systems sized for the actual load and site conditions.</p>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 border-l border-slate-200 pl-10">
                   {[
                     "Residential rooftop — 2 kW to 30 kW",
                     "Commercial compounds — 30 kW to 500 kW",
                     "Industrial ground-mount — 100 kW+",
                     "On-grid, off-grid & solar pumping",
                     "In-house technical installation & support"
                   ].map((item, i) => (
                     <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                       <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

            {/* HYBRID MICROGRIDS - CONTROL ROOM */}
            <div className="flex flex-col lg:flex-row-reverse gap-24 lg:gap-40 items-center">
              <div className="w-full lg:w-1/2 group relative">
                <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                   <img src="/images/energy_intelligent_controller.png" alt="HYBRID SYSTEMS" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Hybrid <br /><span className="text-blue-600 italic">Microgrid Systems</span></h3>
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">Intelligent stabilization of unreliable grid infrastructure. Our systems seamlessly route energy between Solar PV, BESS, and Generators.</p>
                 <ul className="grid grid-cols-1 gap-y-6 border-l border-slate-200 pl-10">
                   {[
                     "Intelligent stabilization of unreliable grids",
                     "Seamless source selection (Solar/BESS/Grid/Gen)",
                     "Peak shaving and continuous load management",
                     "Independent power for remote infrastructure",
                     "High-cycle life LiFePO4 battery integration"
                   ].map((item, i) => (
                     <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                       <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

            {/* BESS STORAGE - GREY CABINET RACKS */}
            <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-center">
              <div className="w-full lg:w-1/2 group relative">
                <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                   {/* Fixed: Exact match for BESS industrial rack visual */}
                   <img src="/images/battery_energy_storage_bess.png" alt="BESS STORAGE" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>BESS <br /><span className="text-blue-600 italic">Battery Storage</span></h3>
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">Peak shaving and load shifting utilizing high-cycle life LiFePO4 chemistry. Essential for energy arbitrage and 24/7 continuous operation.</p>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 border-l border-slate-200 pl-10">
                   {[
                     "Modular 5kWh to 1MWh+ solutions",
                     "Lithium Iron Phosphate (LFP) technology",
                     "Integrated Battery Management Systems (BMS)",
                     "High-cycle life (6000+ cycles)",
                     "Remote monitoring and state-of-health tracking"
                   ].map((item, i) => (
                     <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                       <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

            {/* PRIME GENERATORS - YELLOW GENERATOR */}
            <div className="flex flex-col lg:flex-row-reverse gap-24 lg:gap-40 items-center">
              <div className="w-full lg:w-1/2 group relative">
                <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                   {/* Fixed: Exact match for Yellow Industrial Generator visual */}
                   <img src="/images/catalog_generator_1774889998709.png" alt="GENERATORS" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Prime <br /><span className="text-blue-600 italic">Generator Sets</span></h3>
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">Heavy-duty diesel generation optimized for base load power in remote locations. Engineered with DSE controllers to synchronize with solar.</p>
                 <ul className="grid grid-cols-1 gap-y-6 border-l border-slate-200 pl-10">
                   {[
                     "Standby, prime and continuous ratings",
                     "AMF and parallel load-sharing controllers",
                     "Solar-to-generator integration, automatic switching",
                     "Weatherproof and sound-attenuated enclosures",
                     "Full load-bank testing before handover"
                   ].map((item, i) => (
                     <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                       <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. EXTENDED TECHNICAL PILLARS - FROM SLIDE 5 */}
      <section className="py-40 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif uppercase tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Inverters</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Alnaciim Energy supplies string inverters for grid-connected commercial arrays, hybrid inverters for systems combining solar with battery storage and generator backup, and off-grid inverters for remote sites with no grid connection.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif uppercase tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>System Controllers</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Alnaciim Energy supplies and programmes controllers, solar MPPT charge controllers, automatic mains failure controllers that start and transfer the generator when solar drops, and hybrid energy management systems that coordinate solar, battery and generator sources automatically.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif uppercase tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Generator Sets</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Alnaciim Energy supplies Reliable backup and prime power diesel generator sets and integrates them into the wider power system with in-house automatic transfer switch panels and programmed controllers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL COMPETENCIES */}
      <EnergyCompetencies />

      {/* 5. CTA */}
      <EnergyCTA />

    </div>
  );
}
