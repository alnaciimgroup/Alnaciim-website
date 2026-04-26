"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function EngineeringCoreCompetencies() {
  const { pillars, pillars_intro } = CONTENT.engineering;

  return (
    <section className="w-full py-32 bg-white border-b border-slate-200" id="capabilities">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col mb-24 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-[11px] font-bold text-blue-600 tracking-widest uppercase">Core Competencies</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Systematic <span className="text-blue-600 italic">Excellence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl"
          >
            {pillars_intro}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-slate-100">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border-r border-b border-slate-100 p-12 flex flex-col group hover:bg-slate-50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="text-[11px] font-bold text-blue-600 mb-8 tracking-widest uppercase">
                  Technical Pillar // 0{idx + 1}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                  {pillar.title}
                </h3>
                <p className="text-[15px] text-slate-500 font-light leading-relaxed flex-1">
                  {pillar.description}
                </p>
                
                <div className="mt-12 h-1 w-12 bg-slate-100 group-hover:w-24 group-hover:bg-blue-600 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
