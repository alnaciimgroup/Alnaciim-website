"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Zap, Cpu, Settings, Wrench, Activity } from "lucide-react";
import Link from "next/link";

export default function EngineeringSolutionsPage() {
  const solutions = [
    {
      id: "01",
      title: "Water Infrastructure Engineering",
      subtext: "From borehole drilling to operational water treatment, Alnaciim Engineering handles the complete water project scope.",
      image: "/images/eng_water_infrastructure_new.png",
      bullets: [
        "Borehole drilling & steel casing",
        "RO system design & treatment train",
        "Projects: Nuwaco (2.4k m³/day), Martisoor, Garacad",
        "MCC panels & VFD motor starters",
        "SCADA remote monitoring integration"
      ]
    },
    {
      id: "02",
      title: "Power Systems — Full EPC",
      subtext: "Complete electrical and mechanical delivery of solar, hybrid and generator power systems, from the design calculation to the commissioned and tested installation.",
      image: "/images/eng_power_systems_new.png",
      bullets: [
        "Electrical load analysis & demand calculation",
        "Solar PV mounting & DC string wiring",
        "Generator set installation",
        "ATS design & fabrication",
        "Hybrid system integration (Solar/BESS/Genset)",
        "Load bank testing to rated capacity"
      ]
    },
    {
      id: "03",
      title: "SCADA & Industrial Automation",
      subtext: "Alnaciim Engineering designs and commissions monitoring and control systems for the infrastructure it builds and maintains.",
      image: "/images/eng_automation_new.png",
      bullets: [
        "Water treatment plants monitoring",
        "Solar and hybrid power system monitoring",
        "Industrial process control and automation",
        "HMI touchscreen operator interfaces",
        "Historian data & alarm management",
        "Integration: CAN, Modbus, Profibus"
      ]
    },
    {
      id: "04",
      title: "Custom Industrial Works",
      subtext: "Alnaciim Engineering takes on custom design and build projects from the ground up, facilities, power plants and industrial systems built to the client's specific requirements.",
      image: "/images/solutions_custom.png",
      bullets: [
        "Custom factory design and build",
        "Custom power plant builds",
        "Custom hybrid microgrid systems",
        "Industrial control panels",
        "Custom water treatment facilities",
        "Automatic Transfer Switch (ATS) builds"
      ]
    },
    {
      id: "05",
      title: "Maintenance & Repair",
      subtext: "Alnaciim Engineering maintains what it builds. and takes on maintenance contracts for systems installed by others.",
      image: "/images/eng_maintenance_new.png",
      bullets: [
        "RO membrane cleaning & performance test",
        "Pump mechanical seals & impeller service",
        "Solar array cleaning & inverter service",
        "Control panels and monitoring systems",
        "Spare parts supply"
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* Page Header - MATCHING ENERGY SOLUTIONS DESIGN */}
      <section className="pt-48 pb-32 lg:pt-64 lg:pb-40 bg-white relative">
        {/* Technical Watermark */}
        <div className="absolute top-20 right-0 text-[20vw] font-bold text-slate-50 select-none pointer-events-none font-serif leading-none opacity-50 uppercase">
          ENG
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl">
            {/* The Blueprint Line Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6 mb-16"
            >
              <div className="w-16 h-px bg-blue-600" />
              <span className="text-[12px] font-bold text-blue-600 uppercase tracking-[0.5em]">
                Engineering Solutions Portfolio
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="text-6xl md:text-7xl lg:text-[90px] font-bold text-[#001B3D] leading-[1] mb-20 font-serif tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Architectural <br />
              <span className="text-[#0047AB] italic font-bold relative inline-block tracking-normal">
                Precision.
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '100%' }}
                   transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                   className="absolute -bottom-4 left-0 h-[1px] bg-[#0047AB]/20"
                />
              </span>
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-slate-100">
               <div className="lg:col-span-8">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-4xl"
                  >
                    Alnaciim Engineering delivers the technical work behind every project the group undertakes, and takes direct commissions from external clients. Water infrastructure, power systems, automation and custom industrial builds.
                  </motion.p>
               </div>
               <div className="lg:col-span-4 hidden lg:block">
                  <div className="flex flex-col gap-6">
                     <div className="flex items-center justify-between py-4 border-b border-slate-50">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Commissioning</span>
                        <span className="text-[11px] font-bold text-[#0047AB]">Active</span>
                     </div>
                     <div className="flex items-center justify-between py-4 border-b border-slate-50">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Asset Mgmt</span>
                        <span className="text-[11px] font-bold text-[#0047AB]">Integrated</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid - MATCHING ENERGY SOLUTIONS DESIGN */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-40">
            {solutions.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className={`relative aspect-[16/11] overflow-hidden border border-slate-200 group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-105" 
                />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2">
                    {sol.id}
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-px bg-blue-600" />
                    <span className="text-[11px] font-bold text-blue-600 tracking-widest uppercase">
                      Technical Pillar
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                    {sol.title}
                  </h3>
                  
                  <p className="text-xl text-slate-500 font-light mb-12 leading-relaxed">
                    {sol.subtext}
                  </p>

                  <ul className="space-y-6 mb-12 border-l border-slate-100 pl-8">
                    {sol.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex flex-col gap-1">
                        <span className="text-[13px] font-bold text-slate-900 uppercase tracking-tight">
                          {bullet.includes(' — ') ? bullet.split(' — ')[0] : bullet.includes(' - ') ? bullet.split(' - ')[0] : bullet.includes(': ') ? bullet.split(': ')[0] : bullet}
                        </span>
                        {(bullet.includes(' — ') || bullet.includes(' - ') || bullet.includes(': ')) && (
                          <span className="text-[13px] text-slate-500 font-light">
                            {bullet.includes(' — ') ? bullet.split(' — ')[1] : bullet.includes(' - ') ? bullet.split(' - ')[1] : bullet.split(': ')[1]}
                          </span>
                        )}
                        {!bullet.includes(' — ') && !bullet.includes(' - ') && !bullet.includes(': ') && (
                           <span className="text-[13px] text-slate-500 font-light">{bullet}</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-4 w-fit transition-all"
                  >
                    Technical Proposal <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Assessment CTA - MATCHING ENERGY SOLUTIONS DESIGN */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <Activity className="text-blue-500 mx-auto mb-10" size={48} />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
            Engineered for <span className="text-blue-400 italic">High-Stakes Projects.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
            Our engineers conduct detailed site audits and load profiling to design systems optimized for long-term industrial reliability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[13px] transition-all w-full sm:w-auto"
            >
              Request Survey <ArrowRight className="inline ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
