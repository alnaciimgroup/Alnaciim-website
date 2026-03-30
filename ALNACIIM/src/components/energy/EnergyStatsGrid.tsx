"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function EnergyStatsGrid() {
  const stats = [
    { value: 500, suffix: "kW+", label: "Solar Installed" },
    { value: 2, suffix: "MWh+", label: "BESS Capacity" },
    { value: 28, suffix: "Yrs", label: "Expertise" },
    { value: 78, suffix: "%", label: "Diesel Reduction" }
  ];

  return (
    <section className="relative w-full py-32 mt-20 z-10">
      
      {/* Stripe-Style Slanted Background Element */}
      <div className="absolute inset-0 bg-[#FF5A00] transform -skew-y-3 origin-top-left z-0 overflow-hidden">
        <img src="/images/alnaciim_hero_full_1771787383245.png" alt="Solar Array" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-overlay scale-110" />
      </div>
      {/* Secondary accent slanted layer */}
      <div className="absolute inset-0 bg-[#FF8C00]/10 transform -skew-y-2 origin-top-right z-0"></div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Floating White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[48px] lg:text-[56px] font-[800] tracking-tight text-slate-900 leading-none">
                  <CountUp enableScrollSpy scrollSpyOnce end={stat.value} duration={2} separator="," />
                </span>
                <span className="text-[20px] font-[800] text-[#FF5A00]">{stat.suffix}</span>
              </div>
              <p className="text-slate-500 font-[600] text-[14px]">{stat.label}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
