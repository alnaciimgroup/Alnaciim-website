"use client";

import { Sun, Battery, Zap, Fuel, ArrowRight, Activity } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function EnergySolutions() {
  const { items } = CONTENT.energy_solutions;
  const { hero } = CONTENT.energy;

  return (
    <main className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Page Header */}
      <section className="pt-48 pb-24 lg:pt-64 lg:pb-32 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">System Architecture</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[90px] font-bold text-slate-900 leading-[1] mb-12 font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              INDUSTRIAL <br /><span className="text-blue-600 italic">ENERGY</span> SOLUTIONS.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl"
            >
              {hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-40">
            {items.map((sol, idx) => (
              <motion.div 
                key={sol.id}
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
                          {bullet.split(' — ')[0].split(' - ')[0]}
                        </span>
                        {(bullet.includes(' — ') || bullet.includes(' - ')) && (
                          <span className="text-[13px] text-slate-500 font-light">
                            {bullet.includes(' — ') ? bullet.split(' — ')[1] : bullet.split(' - ')[1]}
                          </span>
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
            <Link 
              href="/contact" 
              className="px-10 py-5 border border-white/20 hover:border-white/40 text-white font-bold uppercase tracking-widest text-[13px] transition-all w-full sm:w-auto"
            >
              Project Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
