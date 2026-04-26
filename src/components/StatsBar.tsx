"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function StatsBar() {
  const { stats } = CONTENT.group;

  return (
    <section className="py-24 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center text-center px-8 lg:border-r border-white/5 last:border-r-0`}
            >
              <div className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none mb-4">
                {stat.value}
              </div>
              <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.25em] leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
