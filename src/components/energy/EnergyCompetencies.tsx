"use client";

import { motion } from "framer-motion";

const competencies = [
  {
    number: "01",
    title: "Utility-Scale Solar",
    desc: "From small commercial rooftop installations to large industrial ground-mount arrays, we design, supply, and install solar PV systems sized for exact load profiles.",
  },
  {
    number: "02",
    title: "Advanced Inverters",
    desc: "We supply string inverters for grid-connected arrays, hybrid inverters for battery storage combinations, and off-grid inverters for remote sites without grid access.",
  },
  {
    number: "03",
    title: "System Controllers",
    desc: "We deploy and program intelligent MPPT charge controllers, automatic mains failure controllers, and comprehensive hybrid energy management systems.",
  },
  {
    number: "04",
    title: "Generator Sets",
    desc: "We supply reliable backup and prime power diesel generators, seamlessly integrating them with solar systems via automatic transfer switch panels.",
  }
];

export default function EnergyCompetencies() {
  return (
    <section className="w-full py-32 bg-white relative overflow-hidden" id="capabilities">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-200/60 text-blue-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm"
            >
              Infrastructure Divisions
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
            >
              Integrated <span className="text-blue-600 font-light italic pr-2">Power Units.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl"
            >
              We design, procure, and install end-to-end power delivery systems. By unifying generation and storage, we drastically reduce operating expenses for the region's industrials.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-50 border border-slate-200/60 rounded-[2.5rem] p-10 flex flex-col group hover:shadow-2xl hover:shadow-blue-900/5 hover:bg-white transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-[120px] font-black text-slate-100/50 leading-none pointer-events-none group-hover:text-blue-50 transition-colors duration-500 -mt-10 -mr-6">
                {comp.number}
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-sm tracking-widest mb-10 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {comp.number}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors">
                  {comp.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {comp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
