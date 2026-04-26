"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function EnergyStatsGrid() {
  const { stats } = CONTENT.energy;

  return (
    <section className="bg-[#FF5C00] py-12 relative overflow-hidden">
      {/* Subtle grid pattern for the orange bar */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, '')) || 0;
            const suffix = stat.value.replace(/[0-9.]/g, '');

            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#001B3D]">
                    <CountUp enableScrollSpy scrollSpyOnce end={numericValue} decimals={stat.value.includes('.') ? 1 : 0} duration={2} separator="," />
                  </span>
                  <span className="text-sm font-bold text-[#FF5C00] uppercase">{suffix}</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
