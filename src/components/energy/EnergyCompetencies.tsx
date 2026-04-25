"use client";
import { motion } from "framer-motion";

const competencies = [
  {
    number: "01",
    title: "Utility-Scale Solar",
    desc: "Solar PV Systems From small commercial rooftop installations to large industrial ground-mount arrays, Alnaciim Energy designs, supplies and installs solar photovoltaic systems sized for the actual load and site conditions.",
  },
  {
    number: "02",
    title: "Inverters",
    desc: "Alnaciim Energy supplies string inverters for grid-connected commercial arrays, hybrid inverters for systems combining solar with battery storage and generator backup, and off-grid inverters for remote sites with no grid connection.",
  },
  {
    number: "03",
    title: "System Controllers",
    desc: "Alnaciim Energy supplies and programmes controllers, solar MPPT charge controllers, automatic mains failure controllers that start and transfer the generator when solar drops, and hybrid energy management systems.",
  },
  {
    number: "04",
    title: "Generator Sets",
    desc: "Alnaciim Energy supplies Reliable backup and prime power diesel generator sets and integrates them into the wider power system with in-house automatic transfer switch panels and programmed controllers.",
  }
];

export default function EnergyCompetencies() {
  return (
    <section className="w-full py-32 bg-slate-50/50" id="capabilities">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-50 border border-orange-100 text-[#FF5A00] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              Industrial Engineering
            </div>
            <h2 className="text-[28px] md:text-[42px] font-[900] tracking-[0.12em] text-slate-900 leading-[1.05] uppercase">
              Infrastructure Divisions.
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-[16px] leading-relaxed font-[450]">
            We design, procure, and install end-to-end power delivery systems. By unifying generation and storage, we drastically reduce operating expenses for the region's industrials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {competencies.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-[56px] lg:text-[72px] font-[900] text-slate-100 leading-none mb-8 group-hover:text-[#FF5A00]/10 transition-colors duration-500">
                {comp.number}
              </div>
              <h3 className="text-[22px] font-[900] text-slate-900 mb-6 tracking-tight group-hover:text-[#FF5A00] transition-colors uppercase leading-tight">
                {comp.title}
              </h3>
              <p className="text-slate-600 leading-[1.7] text-[16px] font-[450]">
                {comp.desc}
              </p>
              
              <div className="mt-auto pt-8">
                 <div className="w-12 h-1.5 bg-slate-100 group-hover:bg-[#FF5A00] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
