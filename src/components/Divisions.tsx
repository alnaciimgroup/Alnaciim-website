"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Database, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Divisions() {
  const cards = [
    {
      id: "DIV-01",
      icon: <Database size={24} />,
      title: "ALNACIIM Water",
      desc: "Clean water supply, large-scale reverse osmosis purification and the Aqua Safi bottled water range — Somalia's most recognised water brand.",
      img: "/images/nuwaco_ro_plant.png",
      href: "/water"
    },
    {
       id: "DIV-02",
       icon: <Zap size={24} />,
       title: "ALNACIIM Energy",
       desc: "Tier-1 solar supply, hybrid microgrid systems, battery storage and generator integration — from residential to industrial scale.",
       img: "/images/solar_power_system.png",
       href: "/energy"
    },
    {
       id: "DIV-03",
       icon: <ShieldCheck size={24} />,
       title: "ALNACIIM Engineering",
       desc: "The engineering backbone of the group. Water well drilling, RO plant installation, power system commissioning, SCADA and automation.",
       img: "/images/custom_panel_fabrication_and_industrial_electrical_works.png",
       href: "/engineering"
    },
  ];

  return (
    <section id="divisions" className="py-32 bg-slate-50 relative border-t border-slate-200">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Infrastructure Pillars</span>
            <div className="w-8 h-px bg-blue-600" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 mb-8 leading-[1.1] font-serif" style={{ fontFamily: "var(--font-playfair)" }}
          >
            Three Divisions. <span className="text-blue-600 italic">One Infrastructure</span> Group.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed font-light"
          >
            Alnaciim Group integrates deep regional expertise with advanced technology. We manage the entire infrastructure value chain through three specialized divisions.
          </motion.p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="group bg-white border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              <Link href={card.href} className="block h-full flex flex-col relative">
                
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" 
                  />
                  <div className="absolute inset-0 bg-slate-900/10 transition-opacity duration-700 group-hover:opacity-0" />
                  
                  {/* Division ID */}
                  <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2">
                    {card.id}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1 relative bg-white">
                  
                  <div className="mb-6 text-blue-600">
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light mb-8 flex-1">
                    {card.desc}
                  </p>
                  
                  <div className="inline-flex items-center gap-3 text-slate-900 font-semibold text-sm uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                    Explore Division 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
