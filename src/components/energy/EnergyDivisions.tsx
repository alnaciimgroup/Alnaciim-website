"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, Zap, Battery, Factory, Lightbulb } from "lucide-react";
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
    <section id="solutions" className="py-16 md:py-20 bg-[#f8fafc] relative z-20">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-12 max-w-2xl"
        >
          <div className="text-[#FF5A00] font-[700] text-[11px] tracking-widest uppercase mb-4">Core Methodologies</div>
          <h2 className="text-[32px] md:text-[42px] font-[900] tracking-tight text-slate-900 leading-[1.1] mb-5">
            Architectural permanence.<br />In energy design.
          </h2>
          <p className="text-[17px] text-slate-500 leading-[1.6] font-[450]">
            We design, procure, and install end-to-end power delivery systems. By unifying generation and storage, we drastically reduce operating expenses for East African industrials.
          </p>
        </motion.div>

       {/* Floating SaaS Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image Thumbnail */}
              <div className="w-full h-44 bg-slate-100 relative overflow-hidden">
                  <img src={card.img} alt={card.title} className={`absolute inset-0 w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700 ${card.title.includes('Solar') ? 'object-bottom' : ''}`} />
                 <div className="absolute inset-0 bg-[#FF5A00]/10 mix-blend-multiply"></div>
                 {/* Floating Icon overlapping the image */}
                 <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#FF5A00] border border-slate-100 group-hover:scale-110 group-hover:bg-[#FF5A00] group-hover:text-white transition-all duration-300">
                   {React.cloneElement(card.icon as React.ReactElement<{ size?: number }>, { size: 20 })}
                 </div>
              </div>

              <div className="p-6 lg:p-7 pt-10 flex-1 flex flex-col">
                <h3 className="text-[18px] font-[800] text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-500 leading-[1.6] text-[14px] mb-6 font-[400] flex-1">
                  {card.desc}
                </p>
                
                <Link href="#contact" className="inline-flex items-center gap-2 text-[#FF5A00] font-[700] text-[13px] mt-auto">
                  Request Detail <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
