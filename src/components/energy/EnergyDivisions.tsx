"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Battery, Factory, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function EnergyDivisions() {
  const cards = [
    {
      icon: <Lightbulb size={24} />,
      title: "Utility-Scale Solar",
      desc: "High-yield commercial solar arrays. We coordinate full EPC services from site assessment to final commissioning and grid integration.",
      img: "/images/solar_power_system.png"
    },
    {
       icon: <Zap size={24} />,
       title: "Hybrid Microgrids",
       desc: "Intelligent stabilization of unreliable grid infrastructure. Our systems seamlessly route energy between Solar PV, BESS, and Generators.",
       img: "/images/energy_intelligent_controller.png"
    },
    {
       icon: <Battery size={24} />,
       title: "BESS Storage",
       desc: "Peak shaving and load shifting utilizing high-cycle life LiFePO4 chemistry. Essential for energy arbitrage and 24/7 continuous operation.",
       img: "/images/battery_energy_storage_bess.png"
    },
    {
       icon: <Factory size={24} />,
       title: "Prime Generators",
       desc: "Heavy-duty diesel generation optimized for base load power in remote locations. Engineered with DSE controllers to synchronize with solar.",
       img: "/images/catalog_generator_1774889998709.png"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            Core Methodologies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            Architectural permanence.<br />In energy design.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            We design, procure, and install end-to-end power delivery systems. By unifying generation and storage, we drastically reduce operating expenses for East African industrials.
          </p>
        </motion.div>

       {/* Floating SaaS Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image Thumbnail */}
              <div className="w-full aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  <img src={card.img} alt={card.title} className={`absolute inset-0 w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700 ${card.title.includes('Solar') ? 'object-bottom' : ''}`} />
                 <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
                 {/* Floating Icon overlapping the image */}
                 <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center text-blue-600 border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                   {React.cloneElement(card.icon as React.ReactElement<{ size?: number }>, { size: 20 })}
                 </div>
              </div>

              <div className="p-8 pt-12 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-8 font-medium flex-1">
                  {card.desc}
                </p>
                
                <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-auto group/link">
                  Request Detail <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
