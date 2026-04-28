"use client";

import { motion } from "framer-motion";
import { Sun, Zap, Battery, Fuel, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function EnergyMethodology() {
  const { pillars } = CONTENT.energy;
  
  const icons = [<Sun size={24} />, <Zap size={24} />, <Battery size={24} />, <Fuel size={24} />];
  const images = [
    "/images/solar_power_system.png",
    "/images/energy_intelligent_controller.png",
    "/images/battery_energy_storage_bess.png",
    "/images/catalog_generator_1774889998709.png"
  ];

  const methods = pillars.map((pillar, idx) => ({
    ...pillar,
    icon: icons[idx],
    image: images[idx],
    id: `TECH-0${idx + 1}`
  }));

  return (
    <section className="w-full bg-white py-32 border-b border-slate-200" id="methodologies">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col mb-24 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">System Excellence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Technological <span className="text-blue-600 italic">Precision.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl"
          >
            Our energy systems are engineered for the regional climate, utilizing industrial-grade hardware and intelligent smart-sync software architectures.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {methods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border-r border-b border-slate-100 p-8 flex flex-col group cursor-pointer hover:bg-slate-50 transition-all duration-300"
            >
              <div className="text-[10px] font-bold text-blue-600 mb-6 tracking-widest uppercase">{method.id}</div>
              
              <div className="mb-8 text-slate-400 group-hover:text-blue-600 transition-colors">
              
                {method.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                {method.title}
              </h3>
              <p className="text-[15px] text-slate-500 font-light leading-relaxed mb-10 flex-1">
                {method.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 group">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Dossier</span>
                <ArrowRight size={16} className="text-slate-300 group-hover:translate-x-2 group-hover:text-blue-600 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
