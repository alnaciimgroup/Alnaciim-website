"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function StatsGrid() {
  const stats = [
    { value: 450, suffix: "+", label: "Active Projects" },
    { value: 12.5, suffix: "MW", label: "Solar Capacity Installed" },
    { value: 5000000, suffix: "L", label: "Daily Water Purified" },
    { value: 120, suffix: "+", label: "Technical Engineering Staff" }
  ];

  return (
    <section className="bg-slate-900 text-white border-y border-slate-800 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-16 md:py-20 lg:px-12 flex flex-col items-start justify-center group"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                  <CountUp enableScrollSpy scrollSpyOnce end={stat.value} duration={2.5} separator="," />
                </span>
                <span className="text-3xl font-light text-blue-400">{stat.suffix}</span>
              </div>
              <p className="text-slate-400 font-medium text-sm tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
