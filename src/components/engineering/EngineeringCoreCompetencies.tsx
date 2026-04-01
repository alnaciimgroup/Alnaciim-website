"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const competencies = [
  {
    number: "01",
    title: "System Design",
    desc: "Advanced computational modeling and structural design for complex utility systems and industrial frameworks.",
    link: "Technical Specs"
  },
  {
    number: "02",
    title: "Procurement",
    desc: "Global supply chain logistics ensuring high-integrity components and materials sourced to exact technical tolerances.",
    link: "Supply Network"
  },
  {
    number: "03",
    title: "Commissioning",
    desc: "Rigorous field testing and final system validation to guarantee peak operational performance and site safety.",
    link: "Quality Control"
  }
];

export default function EngineeringCoreCompetencies() {
  return (
    <section className="w-full py-16 md:py-20 bg-[#FAFBFF]" id="capabilities">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="text-[#ffc100] font-[700] text-[11px] tracking-widest uppercase mb-4">Core Competencies</div>
            <h2 className="text-[32px] md:text-[42px] font-[900] tracking-tight text-slate-900 leading-[1.05]">
              Systematic Excellence.
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-[17px] leading-[1.6] font-[450]">
            We deploy a comprehensive engineering framework across three critical pillars to ensure architectural permanence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {competencies.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              <div className="text-[48px] lg:text-[64px] font-[900] text-slate-100 leading-none mb-5 group-hover:text-[#ffc100]/20 transition-colors duration-500">
                {comp.number}
              </div>
              <h3 className="text-[18px] font-[800] text-slate-900 mb-3 tracking-tight group-hover:text-[#ffc100] transition-colors">
                {comp.title}
              </h3>
              <p className="text-slate-500 leading-[1.6] text-[14px]">
                {comp.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
