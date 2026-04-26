"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Zap, Settings } from "lucide-react";
import Link from "next/link";

const divisions = [
  {
    title: "Water Infrastructure",
    description: "Municipal-scale reverse osmosis, clean water distribution, and the Aqua Safi bottled water range.",
    link: "/water",
    icon: <Droplets size={24} />,
    glowColor: "rgba(59, 130, 246, 0.5)",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20"
  },
  {
    title: "Energy & Solar",
    description: "Tier-1 solar supply, hybrid microgrid systems, and large-scale battery storage integration.",
    link: "/energy",
    icon: <Zap size={24} />,
    glowColor: "rgba(249, 115, 22, 0.5)",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20"
  },
  {
    title: "Precision Engineering",
    description: "The technical backbone. Water well drilling, infrastructure installation, SCADA and automation.",
    link: "/engineering",
    icon: <Settings size={24} />,
    glowColor: "rgba(99, 102, 241, 0.5)",
    iconColor: "text-indigo-400",
    borderColor: "border-indigo-500/20"
  }
];

export default function DivisionsGrid() {
  return (
    <section className="py-32 bg-[#050505] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-[11px] font-bold text-white/40 tracking-[0.3em] uppercase">Core Infrastructure</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-10 font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Three Divisions.<br /><span className="text-zinc-600 italic">One Standard.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl"
          >
            Alnaciim Group integrates deep regional expertise with advanced technology. We manage the entire infrastructure value chain.
          </motion.p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-white/10">
          {divisions.map((division, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`border-r border-b border-white/10 p-12 flex flex-col min-h-[480px] group hover:bg-white/[0.02] transition-all duration-300 relative`}
            >
              <div className="mb-12">
                <div className={`text-blue-500 mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                  {division.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight font-serif uppercase group-hover:text-blue-500 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                  {division.title}
                </h3>
                <p className="text-[15px] text-zinc-500 leading-relaxed font-light">
                  {division.description}
                </p>
              </div>

              <div className="mt-auto pt-10 flex items-center justify-between group/link">
                <Link
                  href={division.link}
                  className="text-[11px] font-bold text-white/40 group-hover:text-white uppercase tracking-[0.2em] transition-all duration-300"
                >
                  Explore Division
                </Link>
                <ArrowRight size={18} className="text-white/20 group-hover/link:translate-x-3 group-hover/link:text-blue-500 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
