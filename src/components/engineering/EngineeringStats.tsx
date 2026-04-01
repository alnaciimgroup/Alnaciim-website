"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of Heritage", value: "28+" },
  { label: "Global Products", value: "60+" },
  { label: "Strategic Offices", value: "03" },
  { label: "Lifecycle Support", value: "100%" }
];

export default function EngineeringStats() {
  return (
    <section className="w-full py-12 bg-white border-b border-slate-100 relative z-30">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="text-[28px] md:text-[36px] font-[900] text-slate-900 tracking-tighter mb-0.5">
                {stat.value}
              </div>
              <div className="text-[11px] md:text-[12px] font-[600] text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
