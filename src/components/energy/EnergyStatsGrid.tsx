"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function EnergyStatsGrid() {
  const { stats } = CONTENT.energy;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            // Helper to extract number and non-number parts
            const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, '')) || 0;
            const suffix = stat.value.replace(/[0-9.]/g, '');

            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center text-center bg-slate-50 rounded-[2rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors duration-500">
                    <CountUp enableScrollSpy scrollSpyOnce end={numericValue} decimals={stat.value.includes('.') ? 1 : 0} duration={2} separator="," />
                  </span>
                  <span className="text-2xl font-bold text-blue-600 italic">{suffix}</span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-800 transition-colors">
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
