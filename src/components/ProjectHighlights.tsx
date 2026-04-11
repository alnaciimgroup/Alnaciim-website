"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Factory, Zap, Droplets, Gauge, ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Nuwaco RO Plant",
    tag: "Water · Engineering",
    scale: "2,400 m³/day",
    delivery: "Full EPC Delivery",
    description: "The largest water treatment facility in the region, providing municipal-scale purification.",
    image: "/images/water_purification_industrial_1774886325880.png",
    colSpan: "lg:col-span-6",
    rowSpan: "lg:row-span-1",
    icon: <Droplets size={16} />,
    status: "Operational"
  },
  {
    title: "300 kWp Solar Power",
    tag: "Energy · Engineering",
    scale: "300 kW Priority",
    delivery: "In-house Controls",
    description: "Hybrid energy coordination with automated load management.",
    image: "/images/power_systems_generators_1774871854169.png",
    colSpan: "lg:col-span-6",
    rowSpan: "lg:row-span-1",
    icon: <Zap size={16} />,
    status: "Active"
  },
  {
    title: "Industrial Hybrid",
    tag: "Energy · Engineering",
    scale: "Multi-Fuel BESS",
    delivery: "SCADA Sync",
    description: "Complex power orchestration with remote monitoring.",
    image: "/images/industrial_automation_control_room_1774871867828.png",
    colSpan: "lg:col-span-6",
    rowSpan: "lg:row-span-1",
    icon: <Gauge size={16} />,
    status: "Live Sync"
  },
  {
    title: "Aqua Safi Bottling",
    tag: "Water · Engineering",
    scale: "10k BPH Automation",
    delivery: "High-Speed Procurement",
    description: "Advanced bottling facility with robotic packaging lines.",
    image: "/images/packaged_bottled_water_1769372456350.png",
    colSpan: "lg:col-span-6",
    rowSpan: "lg:row-span-1",
    icon: <Factory size={16} />,
    status: "Verified"
  }
];

export default function ProjectHighlights() {
  return (
    <section className="py-16 bg-[#FAFBFF] relative overflow-hidden">
      {/* Background Industrial Accents */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0066FF 0.5px, transparent 0.5px)`, backgroundSize: '16px 16px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Strategy */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-primary/5 border border-primary/10 text-primary text-[9px] font-bold tracking-[0.2em] uppercase mb-4"
            >
              Systematic Excellence
            </motion.div>
            <h2 className="text-[32px] md:text-[38px] font-[900] leading-[1.1] tracking-tighter text-ink mb-4">
              Project Highlights.
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed font-[450]">
              Key flagship projects that define Alnaciim Group's integrated capability across multi-sector engineering and infrastructure.
            </p>
          </div>
          <Link href="/work" className="group hidden md:flex items-center gap-3 text-[12px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-[0.2em] mb-3">
            Portfolio <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid Implementation - Compact Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[250px] md:auto-rows-[300px] gap-5">
          {highlights.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden border border-slate-200/50 shadow-sm bg-white ${project.colSpan} ${project.rowSpan}`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />
              </div>

              {/* Top Bar Glass Overlay */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-20">
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl flex items-center gap-2.5 text-white">
                  <span className="text-primary">{project.icon}</span>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase leading-none">{project.tag}</span>
                </div>
                <div className="hidden sm:flex px-3 py-1.5 rounded-lg bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-[8px] font-bold uppercase tracking-widest items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                  {project.status}
                </div>
              </div>

              {/* Bottom Content Strategy */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="max-w-xl">
                  <h3 className="text-[22px] md:text-[28px] font-[900] text-white tracking-tighter leading-none mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-[13px] leading-relaxed line-clamp-2 md:line-clamp-1 mb-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {project.description}
                  </p>
                </div>

                {/* Technical Spec Glass Bar */}
                <div className="flex items-center gap-5 pt-4 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-primary uppercase tracking-[0.15em] mb-0.5">Scale</span>
                    <span className="text-[13px] font-[700] text-white font-mono tracking-tight">{project.scale}</span>
                  </div>
                  <div className="h-6 w-[1px] bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-primary uppercase tracking-[0.15em] mb-0.5">Scope</span>
                    <span className="text-[13px] font-[700] text-white font-mono tracking-tight">{project.delivery}</span>
                  </div>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-6 right-6">
                 <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white translate-y-16 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                    <ArrowUpRight size={20} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Conversion Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 overflow-hidden relative group"
        >
            <div className="absolute inset-0 bg-blue-600/10 pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-[28px] md:text-[36px] font-[900] leading-[1.1] tracking-tighter mb-4 text-white">
                        Built for <span className="text-secondary italic">Permanence.</span>
                    </h3>
                    <p className="text-[15px] text-slate-400 font-[450] leading-relaxed">
                        Alnaciim Group delivers the technical foundation for East Africa's future.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                    <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-[14px] font-bold shadow-xl transition-all hover:-translate-y-1">
                        Start Project
                    </Link>
                    <Link href="/catalog" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-xl text-[14px] font-bold transition-all">
                        Catalog
                    </Link>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
