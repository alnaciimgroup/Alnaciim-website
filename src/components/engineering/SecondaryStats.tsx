"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "MW Managed", value: "2.4k" },
  { label: "Core Engineers", value: "180+" },
  { label: "M3 Purified", value: "12.5m" },
  { label: "Global Hubs", value: "04" }
];

export default function SecondaryStats() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 border-t border-slate-900 pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-[48px] md:text-[64px] font-[900] text-slate-900 tracking-tighter leading-none mb-4">
                {stat.value}
              </div>
              <div className="text-[12px] md:text-[13px] font-[700] text-slate-400 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
