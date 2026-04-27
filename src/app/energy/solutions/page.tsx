"use client";

import { Sun, Battery, Zap, Fuel, ArrowRight, Activity } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function EnergySolutions() {
  const { items, hero } = CONTENT.energy_solutions;

  return (
    <main className="bg-white min-h-screen selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Page Header - REFINED ARCHITECTURAL DESIGN */}
      <section className="pt-48 pb-32 lg:pt-64 lg:pb-40 bg-white relative">
        {/* Technical Watermark */}
        <div className="absolute top-20 right-0 text-[20vw] font-bold text-slate-50 select-none pointer-events-none font-serif leading-none opacity-50">
          SOL
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
                {hero.eyebrow}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="text-6xl md:text-7xl lg:text-[90px] font-bold text-[#001B3D] leading-[1] mb-20 font-serif tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Energy solutions for <br /> 
              homes, <br />
              <span className="text-[#0047AB] italic font-bold relative inline-block tracking-normal">
                business and <br /> industry.
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
                    {hero.description}
                  </motion.p>
               </div>
               <div className="lg:col-span-4 hidden lg:block">
                  <div className="flex flex-col gap-6">
                     <div className="flex items-center justify-between py-4 border-b border-slate-50">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Reliability</span>
                        <span className="text-[11px] font-bold text-[#0047AB]">99.9%</span>
                     </div>
                     <div className="flex items-center justify-between py-4 border-b border-slate-50">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Grid Stability</span>
                        <span className="text-[11px] font-bold text-[#0047AB]">Optimized</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid - PRESERVED ALTERNATING DESIGN */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-40">
            {items.map((sol, idx) => (
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
                  {sol.id && (
                    <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2">
                      {sol.id}
                    </div>
                  )}
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
                          {bullet.split(' — ')[0].split(' - ')[0]}
                        </span>
                        {(bullet.includes(' — ') || bullet.includes(' - ')) && (
                          <span className="text-[13px] text-slate-500 font-light">
                            {bullet.includes(' — ') ? bullet.split(' — ')[1] : bullet.split(' - ')[1]}
                          </span>
                        )}
                        {!bullet.includes(' — ') && !bullet.includes(' - ') && (
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

      {/* Site Assessment CTA */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <Activity className="text-blue-500 mx-auto mb-10" size={48} />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready for <span className="text-blue-400 italic">Energy Independence?</span>
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
