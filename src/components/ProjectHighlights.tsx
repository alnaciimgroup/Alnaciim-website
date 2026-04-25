"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6"
            >
              Systematic Excellence
            </motion.div>
            <h2 className="text-[40px] md:text-[56px] font-[800] leading-[1.1] tracking-[-0.03em] text-ink mb-6 font-heading uppercase">
              Project Highlights
            </h2>
            <p className="text-[18px] text-slate-500 leading-relaxed font-[450] max-w-xl">
              Flagship projects that define Alnaciim Group’s integrated capability across multi-sector infrastructure.
            </p>
          </div>
          <Link href="/work" className="group flex items-center gap-2 text-[14px] font-[700] text-primary hover:text-primary-dark transition-all tracking-wider uppercase font-heading">
            Full Portfolio <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[600px] rounded-[32px] overflow-hidden border border-slate-100 shadow-sm bg-slate-50"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                   src={project.image} 
                   alt={project.title} 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
                    {project.tag}
                  </div>
                  <h3 className="text-[28px] font-[800] text-white tracking-tight leading-tight mb-4 font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-white/70 leading-relaxed line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {project.description}
                  </p>
                </div>
                
                <Link href="/work" className="inline-flex items-center gap-2 text-white font-[700] text-[13px] uppercase tracking-widest transition-all hover:gap-3">
                  Detail <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversion Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 md:p-20 rounded-[40px] bg-ink relative overflow-hidden group shadow-premium"
        >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
                <div className="max-w-2xl">
                    <h3 className="text-[40px] md:text-[56px] font-[800] leading-[1.1] tracking-[-0.03em] mb-6 text-white font-heading uppercase">
                        Built for <span className="text-primary italic">Permanence.</span>
                    </h3>
                    <p className="text-[18px] text-slate-400 font-[450] leading-relaxed">
                        Alnaciim Group delivers the technical foundation for East Africa's future through integrated infrastructure solutions.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
                    <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl text-[16px] font-[700] uppercase tracking-wider shadow-premium transition-all hover:-translate-y-1 text-center font-heading">
                        Start Project
                    </Link>
                    <Link href="/catalog" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl text-[16px] font-[700] uppercase tracking-wider transition-all text-center font-heading">
                        Catalog
                    </Link>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
