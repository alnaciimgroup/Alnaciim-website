"use client";

import { ArrowRight, Zap, ShieldCheck, Sun, Battery, Settings, Filter, Plus, Activity } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import EnergyStatsGrid from "@/components/energy/EnergyStatsGrid";
import EnergyCTA from "@/components/energy/EnergyCTA";

export default function EnergyHome() {
  return (
    <div className="bg-white selection:bg-blue-600 selection:text-white">
      
      {/* 1. HERO SECTION - PRESERVED AS REQUESTED */}
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

      {/* 2. STATS GRID - ORANGE BAR */}
      <EnergyStatsGrid />

      {/* 3. CENTERED TYPOGRAPHY SECTION */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-[#001B3D] leading-tight mb-12 font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Engineered for <br /> the long term. <br /> <span className="text-blue-600">Sized for your load.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed"
          >
            We design, procure, and install end-to-end power delivery systems. By unifying generation and storage, we drastically reduce operating expenses for our region's industrials.
          </motion.p>
        </div>
      </section>

      {/* 4. SYSTEMATIC EXCELLENCE - REPLACES PREVIOUS GRID */}
      <section className="py-40 bg-white border-t border-slate-100" id="solutions">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
            <div className="max-w-2xl">
              <div className="text-[11px] font-bold text-[#FF5C00] uppercase tracking-[0.3em] mb-6">Core Competencies</div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#001B3D] font-serif" style={{ fontFamily: "var(--font-playfair)" }}>Systematic Excellence.</h2>
            </div>
            <div className="max-w-md text-slate-500 font-light leading-relaxed pt-8">
              We deploy a comprehensive engineering framework across three critical pillars to ensure architectural permanence.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              {
                id: "01",
                title: "SOLAR ARRAYS",
                desc: "Commercial and industrial solar installations from rooftop arrays to large ground-mount systems. We handle site assessment, system design, supply and full installation.",
                color: "text-slate-900"
              },
              {
                id: "02",
                title: "HYBRID MICROGRIDS",
                desc: "Intelligent coordination of solar, battery storage, and diesel generation for 24/7 reliability and peak fuel efficiency.",
                color: "text-[#FF5C00]"
              },
              {
                id: "03",
                title: "GENERATOR SETS",
                desc: "Heavy-duty diesel generation optimized for base load power, synchronized with solar through advanced DSE controllers.",
                color: "text-slate-900",
                highlight: true
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-7xl md:text-8xl font-bold text-slate-100 mb-6 leading-none select-none">
                  {pillar.id}
                </div>
                <h3 className={`text-xl font-bold mb-6 tracking-widest uppercase ${pillar.color}`}>
                  {pillar.title}
                </h3>
                <div className={`p-8 ${pillar.highlight ? 'bg-slate-200' : 'bg-slate-50'} rounded-lg`}>
                  <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOM CONFIGURATION CTA - SLIDE 12 */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-40">
        <div className="relative bg-[#001B3D] rounded-[2rem] overflow-hidden p-12 md:p-24 shadow-2xl">
          {/* Subtle industrial pattern background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }} />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
                <Plus size={14} className="text-[#FF5C00]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">High Voltage Capacity</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Require a custom <br /> configuration?
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-5 bg-[#FF5C00] hover:bg-[#E65200] text-white font-bold uppercase tracking-widest text-[13px] transition-all flex items-center justify-center gap-3 group"
              >
                Contact Engineering <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/" 
                className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:bg-white/5 text-white font-bold uppercase tracking-widest text-[13px] transition-all flex items-center justify-center"
              >
                Return to Main Site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXTENDED TECHNICAL PILLARS - PRESERVED */}
      <section className="py-40 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-10 font-serif uppercase tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Inverters</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Alnaciim Energy supplies string inverters for grid-connected commercial arrays, hybrid inverters for systems combining solar with battery storage and generator backup, and off-grid inverters for remote sites with no grid connection.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-10 font-serif uppercase tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>System Controllers</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Alnaciim Energy supplies and programmes controllers, solar MPPT charge controllers, automatic mains failure controllers that start and transfer the generator when solar drops, and hybrid energy management systems that coordinate solar, battery and generator sources automatically.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-10 font-serif uppercase tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Generator Sets</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Alnaciim Energy supplies Reliable backup and prime power diesel generator sets and integrates them into the wider power system with in-house automatic transfer switch panels and programmed controllers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <EnergyCTA />

    </div>
  );
}
