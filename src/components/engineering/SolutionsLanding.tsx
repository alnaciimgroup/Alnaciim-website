"use client";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function SolutionsLanding() {
  const { hero } = CONTENT.engineering_solutions;

  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-16 h-[2px] bg-blue-600"></div>
          <span className="text-[12px] font-[800] tracking-[0.3em] uppercase text-blue-600">{hero.eyebrow}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[64px] md:text-[96px] lg:text-[120px] font-[900] tracking-tighter text-[#0F172A] leading-[0.85] max-w-[1200px] mb-12"
        >
          Architectural<br />
          Precision.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[20px] md:text-[24px] text-slate-500 font-[450] max-w-4xl leading-[1.5] tracking-tight"
        >
          {hero.description}
        </motion.p>
      </div>

      {/* Subtle architectural grid pattern in background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </section>
  );
}
