"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function StatsBar() {
  const { stats } = CONTENT.group;

  return (
    <section className="py-20 bg-white border-y border-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-[32px] md:text-[44px] font-[800] text-ink tracking-[-0.03em] leading-none mb-3 font-heading">
                {stat.value}
              </div>
              <div className="text-[12px] font-[700] text-slate-400 uppercase tracking-[0.2em] leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
