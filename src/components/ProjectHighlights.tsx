"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Zap, Activity, GlassWater } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Nuwaco RO Plant",
    description: "The largest water treatment facility in the region, providing municipal-scale purification.",
    scale: "2,400 m³/day",
    scope: "Full EPC Delivery",
    icon: <Droplets size={20} className="text-blue-600" />,
    image: "/images/nuwaco_ro_plant.png",
  },
  {
    title: "300 kWp Solar Power",
    description: "Hybrid energy coordination with automated load management.",
    scale: "300 kW Priority",
    scope: "In-house Controls",
    icon: <Zap size={20} className="text-orange-500" />,
    image: "/images/solar_power_system.png",
  },
  {
    title: "Industrial Hybrid",
    description: "Complex power orchestration with remote monitoring.",
    scale: "Multi-Fuel BESS",
    scope: "SCADA Sync",
    icon: <Activity size={20} className="text-emerald-500" />,
    image: "/images/energy_intelligent_controller.png",
  },
  {
    title: "Aqua Safi Bottling",
    description: "Advanced bottling facility with robotic packaging lines.",
    scale: "10K BPH Automation",
    scope: "High-Speed Procurement",
    icon: <GlassWater size={20} className="text-blue-400" />,
    image: "/images/aqua_safi_production.png",
  }
];

export default function ProjectHighlights() {
  return (
    <section className="py-40 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 font-serif leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Project Highlights.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-3xl"
            >
              Key flagship projects that define Alnaciim Group's integrated capability across multi-sector engineering and infrastructure.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1
              }}
              className="bg-white border border-slate-100 rounded-[40px] overflow-hidden flex flex-col hover:border-blue-600 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
                <motion.img 
                   src={project.image} 
                   alt={project.title} 
                   className="absolute inset-0 w-full h-full object-cover"
                   whileHover={{ y: -10 }}
                   transition={{ duration: 0.4 }}
                />
                <div className="absolute top-8 left-8">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {project.icon}
                   </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: "var(--font-playfair)" }}>
                  {project.title}
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed font-light mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8 mb-10">
                    <div>
                        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Scale</div>
                        <div className="text-[13px] font-bold text-slate-900">{project.scale}</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Scope</div>
                        <div className="text-[13px] font-bold text-slate-900">{project.scope}</div>
                    </div>
                </div>

                <div className="inline-flex items-center gap-3 text-[11px] font-bold text-blue-600 uppercase tracking-widest group/btn relative">
                  <span className="relative">
                    REQUEST DETAIL
                    <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
