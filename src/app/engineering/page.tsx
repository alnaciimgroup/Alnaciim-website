"use client";

import EngineeringHero from "@/components/engineering/EngineeringHero";
import EngineeringStats from "@/components/engineering/EngineeringStats";
import EngineeringCoreCompetencies from "@/components/engineering/EngineeringCoreCompetencies";
import EngineeringIndustries from "@/components/engineering/EngineeringIndustries";
import TechnicalArchive from "@/components/engineering/TechnicalArchive";
import EngineeringCTA from "@/components/engineering/EngineeringCTA";
import { motion } from "framer-motion";
import { ArrowRight, Settings, ShieldCheck, Activity, Droplets, Zap, Filter } from "lucide-react";
import Link from "next/link";

export default function EngineeringPage() {
  return (
    <main className="relative bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* 1. HERO SECTION - 100% CONTENT SYNC */}
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
                Alnaciim Engineering
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[1.1] mb-8 font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The engineering <br /> behind every <br /><span className="text-blue-600 italic">Alnaciim project.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12"
            >
              The technical backbone of Alnaciim. Precision panel fabrication, industrial wiring, and full mechanical-electrical plant commissioning.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-3 group text-[15px]">
                Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-50 text-slate-900 border border-slate-300 font-medium transition-colors flex items-center justify-center text-[15px]">
                Technical Archive
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full overflow-hidden bg-slate-100">
          {/* Hero Image: Massive RO plant with horizontal housings */}
          <img 
            src="/images/nuwaco_ro_plant.png" 
            alt="Engineering Infrastructure" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
          
          <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl max-w-sm hidden md:block">
            <div className="text-3xl font-bold text-white mb-3 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>Precision Systems</div>
            <p className="text-sm text-white/70 font-medium uppercase tracking-widest leading-relaxed">Delivering complex technical <br />solutions and asset management.</p>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION - SYNCED TO REFERENCE */}
      <EngineeringStats />

      {/* 3. CORE COMPETENCIES */}
      <EngineeringCoreCompetencies />

      {/* 4. TECHNICAL PORTFOLIO - 100% CONTENT & IMAGE SYNC */}
      <section className="py-40 bg-white overflow-hidden" id="portfolio">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-32">
            <div className="flex items-center gap-3 mb-10">
               <div className="w-8 h-px bg-blue-600" />
               <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Industrial Specialization</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-10 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              Technical Expertise. <br /><span className="text-blue-600 italic">Built for Reliability.</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              We provide the calculations, the designs and the direct labor for every major deployment across the Horn of Africa.
            </p>
          </div>

          <div className="space-y-48">
            
            {/* WATER INFRASTRUCTURE */}
            <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-center">
              <div className="w-full lg:w-1/2 group relative">
                <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                   <img src="/images/water_ro_treatment.png" alt="WATER ENGINEERING" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                 <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Water Infrastructure <br /><span className="text-blue-600 italic">Engineering</span></h3>
                 <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">Handles complete water project scope from borehole drilling to operational water treatment. We manage everything from hydrology to automation.</p>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 border-l border-slate-200 pl-10">
                   {[
                     "Borehole drilling & steel casing",
                     "RO system design & treatment train",
                     "Nuwaco, Martisoor, Garacad Projects",
                     "MCC panels & VFD motor starters",
                     "SCADA remote monitoring integration"
                   ].map((item, i) => (
                     <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                       <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

            {/* POWER SYSTEMS */}
            <div className="flex flex-col lg:flex-row-reverse gap-24 lg:gap-40 items-center">
              <div className="w-full lg:w-1/2 group relative">
                <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                   <img src="/images/energy_inverters.png" alt="POWER SYSTEMS" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                 <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>Power Systems <br /><span className="text-blue-600 italic">Engineering</span></h3>
                 <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">Precision electrical engineering for industrial and utility-scale energy projects. We deliver from design calculation to commissioned array.</p>
                 <ul className="grid grid-cols-1 gap-y-6 border-l border-slate-200 pl-10">
                   {[
                     "Electrical load analysis & demand calculation",
                     "Solar PV mounting & DC string wiring",
                     "Generator set installation",
                     "ATS design & fabrication",
                     "Hybrid system integration (Solar/BESS/Genset)",
                     "Load bank testing to rated capacity"
                   ].map((item, i) => (
                     <li key={i} className="text-[12px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-4">
                       <div className="w-1.5 h-1.5 bg-blue-600" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

            {/* SCADA & AUTOMATION */}
            <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-center">
              <div className="w-full lg:w-1/2 group relative">
                <div className="aspect-[4/3] bg-white border border-slate-200 overflow-hidden relative p-4 shadow-2xl">
                   <img src="/images/energy_intelligent_controller.png" alt="SCADA AUTOMATION" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                 <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight uppercase" style={{ fontFamily: "var(--font-playfair)" }}>SCADA & Industrial <br /><span className="text-blue-600 italic">Automation</span></h3>
                 <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">Advanced monitoring and control systems for industrial processes. We design logic layers that ensure operational safety and telemetry.</p>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 border-l border-slate-200 pl-10">
                   {[
                     "Water treatment plants monitoring",
                     "Solar and hybrid power system monitoring",
                     "Industrial process control and automation",
                     "HMI touchscreen operator interfaces",
                     "Historian data & alarm management",
                     "Integration protocols: CAN, Modbus, Profibus"
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

      {/* 5. INDUSTRIAL ARCHIVE */}
      <TechnicalArchive />

      {/* 6. CTA */}
      <EngineeringCTA />

    </main>
  );
}
