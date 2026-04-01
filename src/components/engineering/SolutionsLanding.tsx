"use client";
import { motion } from "framer-motion";

export default function SolutionsLanding() {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden bg-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-[#ffc100]"></div>
          <span className="text-[12px] font-[700] tracking-[0.3em] uppercase text-slate-400">Engineering Solutions Portfolio</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[64px] md:text-[88px] lg:text-[100px] font-[900] tracking-tighter text-slate-900 leading-[0.9] max-w-[1000px] mb-12"
        >
          Architectural<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Precision.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[18px] md:text-[22px] text-slate-500 font-[450] max-w-3xl leading-[1.6]"
        >
          ALNM Engineering delivers high-complexity systems across critical infrastructure sectors. Our technical archive documents a legacy of permanence through rigorous standards and innovative methodology.
        </motion.p>
      </div>

      {/* Decorative large number in background */}
      <div className="absolute right-[-5%] bottom-0 text-[300px] lg:text-[500px] font-[900] text-slate-50 opacity-[0.03] leading-none pointer-events-none select-none">
        02
      </div>
    </section>
  );
}
