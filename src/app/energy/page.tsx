"use client";

import { ArrowRight, Plus, Sun, Zap, Battery, Settings } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import EnergyStatsGrid from "@/components/energy/EnergyStatsGrid";
import EnergyCompetencies from "@/components/energy/EnergyCompetencies";

export default function EnergyHome() {
  return (
    <div className="bg-white selection:bg-blue-600 selection:text-white">
      
      {/* 1. HERO SECTION - PRESERVED */}
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

      {/* 4. CORE SOLUTIONS GRID - RESTORED FROM SLIDE 10 */}
      <section className="py-24 bg-white border-t border-slate-100" id="solutions">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Utility-Scale Solar",
                desc: "High-yield commercial solar arrays. We coordinate full EPC services from site assessment to final commissioning and grid integration.",
                img: "/images/energy_utility_solar.png",
                icon: <Sun size={20} />
              },
              {
                title: "Hybrid Microgrids",
                desc: "Intelligent stabilization of unreliable grid infrastructure. Our systems seamlessly route energy between Solar PV, BESS, and Generators.",
                img: "/images/energy_intelligent_controller.png",
                icon: <Zap size={20} />
              },
              {
                title: "BESS Storage",
                desc: "Peak shaving and load shifting utilizing high-cycle life LiFePO4 chemistry. Essential for energy arbitrage and 24/7 continuous operation.",
                img: "/images/battery_energy_storage_bess.png",
                icon: <Battery size={20} />
              },
              {
                title: "Prime Generators",
                desc: "Heavy-duty diesel generation optimized for base load power in remote locations. Engineered with DSE controllers to synchronize with solar.",
                img: "/images/catalog_generator_1774889998709.png",
                icon: <Settings size={20} />
              }
            ].map((sol, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FF5C00] shadow-lg">
                    {sol.icon}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>{sol.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-10 flex-grow">
                    {sol.desc}
                  </p>
                  <Link href="/contact" className="text-[11px] font-bold text-[#FF5C00] uppercase tracking-[0.2em] flex items-center gap-2 group/link">
                    Request Detail <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Utility-Scale Solar Detailed Text - RESTORED FROM SLIDE 10 */}
          <div className="mt-32 max-w-4xl mx-auto text-left border-t border-slate-100 pt-20">
             <h3 className="text-4xl font-bold text-[#001B3D] mb-6 font-serif tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Utility-Scale Solar</h3>
             <p className="text-xl text-slate-600 font-light leading-relaxed">
               <strong>Solar PV Systems</strong> From small commercial rooftop installations to large industrial ground-mount arrays, Alnaciim Energy designs, supplies and installs solar photovoltaic systems sized for the actual load and site conditions.
             </p>
          </div>
        </div>
      </section>

      {/* 5. SYSTEMATIC EXCELLENCE - SLIDE 12 DESIGN */}
      <section className="py-40 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-40">
            <div className="max-w-2xl">
              <div className="text-[10px] font-bold text-[#E65200] uppercase tracking-[0.4em] mb-4">CORE COMPETENCIES</div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#001B3D] font-serif" style={{ fontFamily: "var(--font-playfair)" }}>Systematic Excellence.</h2>
            </div>
            <div className="max-w-md text-slate-500 font-light text-lg leading-relaxed pt-10">
              We deploy a comprehensive engineering framework across three critical pillars to ensure architectural permanence.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-[120px] font-bold text-slate-50 mb-4 leading-none select-none absolute -top-16 left-0 -z-10">01</div>
              <h3 className="text-xl font-bold mb-6 tracking-widest text-slate-900 uppercase">SOLAR ARRAYS</h3>
              <div className="bg-slate-100 p-8">
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                  Commercial and industrial solar installations from rooftop arrays to large ground-mount systems. We handle site assessment, system design, supply and full installation.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="text-[120px] font-bold text-slate-50 mb-4 leading-none select-none absolute -top-16 left-0 -z-10">02</div>
              <h3 className="text-xl font-bold mb-6 tracking-widest text-[#E65200] uppercase">HYBRID MICROGRIDS</h3>
              <div className="p-8">
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                  Intelligent coordination of solar, battery storage, and diesel generation for 24/7 reliability and peak fuel efficiency.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="text-[120px] font-bold text-slate-50 mb-4 leading-none select-none absolute -top-16 left-0 -z-10">03</div>
              <div className="bg-slate-300 inline-block px-6 py-2 mb-6">
                <h3 className="text-xl font-bold tracking-widest text-slate-900 uppercase">GENERATOR SETS</h3>
              </div>
              <div className="p-8">
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                  Heavy-duty diesel generation optimized for base load power, synchronized with solar through advanced DSE controllers.
                </p>
              </div>
            </motion.div>
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

      {/* 7. CUSTOM CONFIGURATION CTA - THE ONLY FINAL CTA */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-40">
        <div className="relative bg-[#001B3D] rounded-[2.5rem] overflow-hidden p-12 md:p-24 shadow-2xl">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full mb-8">
                <Plus size={14} className="text-[#FF5C00]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">HIGH VOLTAGE CAPACITY</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Require a custom <br /> configuration?
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-5 bg-[#FF5C00] hover:bg-[#E65200] text-white font-bold uppercase tracking-widest text-[13px] transition-all flex items-center justify-center gap-3 group"
              >
                CONTACT ENGINEERING <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/" 
                className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:bg-white/5 text-white font-bold uppercase tracking-widest text-[13px] transition-all flex items-center justify-center"
              >
                RETURN TO MAIN SITE
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
