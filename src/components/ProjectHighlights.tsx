"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Nuwaco RO Plant",
    tag: "Water · Engineering",
    description: "The largest water treatment facility in the region, providing municipal-scale purification.",
    image: "/images/nuwaco_ro_plant.png",
  },
  {
    title: "300 kWp Solar Power",
    tag: "Energy · Engineering",
    description: "Hybrid energy coordination with automated load management.",
    image: "/images/solar_power_system.png",
  },
  {
    title: "Industrial Hybrid",
    tag: "Energy · Engineering",
    description: "Complex power orchestration with remote monitoring.",
    image: "/images/energy_intelligent_controller.png",
  },
  {
    title: "Aqua Safi Bottling",
    tag: "Water · Engineering",
    description: "Advanced bottling facility with robotic packaging lines.",
    image: "/images/packaged_bottled_water_1769372456350.png",
  }
];

export default function ProjectHighlights() {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-8 font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Project <span className="text-blue-500 italic">Highlights.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-400 font-light"
            >
              Flagship projects that define Alnaciim Group’s integrated capability across multi-sector infrastructure.
            </motion.p>
          </div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <Link href="/work" className="group flex items-center gap-3 text-[13px] font-bold text-white/60 hover:text-white uppercase tracking-widest transition-all">
              Full Portfolio <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-blue-500" />
            </Link>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {highlights.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex flex-col group cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-500 bg-white/5"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img 
                   src={project.image} 
                   alt={project.title} 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* ID Tag */}
                <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2">
                  {project.tag}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                  {project.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-10 flex-1">
                  {project.description}
                </p>
                
                <div className="mt-auto flex items-center gap-3 text-[13px] font-bold text-blue-500 uppercase tracking-widest transition-all">
                  Detail <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversion Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border border-white/10 bg-white/5 p-12 md:p-20 relative overflow-hidden"
        >
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
                <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                        Built for <span className="text-blue-500 italic">Permanence.</span>
                    </h3>
                    <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                        Alnaciim Group delivers the technical foundation for East Africa's future through integrated infrastructure solutions.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 font-bold transition-all text-center uppercase tracking-widest text-[13px]">
                        Start Project
                    </Link>
                    <Link href="/catalog" className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-10 py-5 font-bold transition-all text-center uppercase tracking-widest text-[13px]">
                        Catalog
                    </Link>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
