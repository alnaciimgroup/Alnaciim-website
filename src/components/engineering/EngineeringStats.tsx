"use client";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function EngineeringStats() {
  const { stats } = CONTENT.engineering;

  return (
    <section className="w-full py-16 bg-white border-b border-slate-100 relative z-30">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start px-4"
            >
              <div className="text-[32px] md:text-[42px] font-[900] text-[#0F172A] tracking-tighter mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-[11px] font-[700] text-slate-400 uppercase tracking-widest leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
