"use client";
import { motion } from "framer-motion";

const competencies = [
  {
    number: "01",
    title: "Solar Arrays",
    desc: "Utility and industrial solar installations with Tier-1 bifacial modules, anti-PID technology, and intelligent monitoring.",
  },
  {
    number: "02",
    title: "Hybrid Microgrids",
    desc: "Intelligent coordination of solar, battery storage, and diesel generation for 24/7 reliability and peak fuel efficiency.",
  },
  {
    number: "03",
    title: "Prime Generators",
    desc: "Heavy-duty diesel generation optimized for base load power, synchronized with solar through advanced DSE controllers.",
  }
];

export default function EnergyCompetencies() {
  return (
    <section className="w-full py-20 bg-slate-50/50" id="capabilities">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-[#ffc100] font-[700] text-[11px] tracking-widest uppercase mb-4">Core Competencies</div>
            <h2 className="text-[36px] md:text-[48px] font-[900] tracking-tight text-slate-900 leading-[1.05]">
              Systematic Excellence.
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-[18px] leading-[1.6] font-[450]">
            We deploy a comprehensive engineering framework across three critical pillars to ensure architectural permanence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {competencies.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group relative"
            >
              <div className="text-[64px] lg:text-[88px] font-[900] text-slate-200/50 leading-none mb-6 group-hover:text-[#ffc100]/20 transition-colors duration-500">
                {comp.number}
              </div>
              <h3 className="text-[20px] font-[800] text-slate-900 mb-4 tracking-tight group-hover:text-[#ffc100] transition-colors uppercase">
                {comp.title}
              </h3>
              <p className="text-slate-600 leading-[1.7] text-[15px] font-[450]">
                {comp.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
