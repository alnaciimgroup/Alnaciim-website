"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function SolutionsLanding() {
  const { hero } = CONTENT.engineering_solutions;

  return (
    <section className="relative w-full pt-48 pb-24 lg:pt-64 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-[11px] font-bold text-blue-600 tracking-widest uppercase">Engineering Portfolio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[90px] font-bold tracking-tight text-slate-900 leading-[1] mb-12 font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ARCHITECTURAL<br />
            <span className="text-blue-600 italic">PRECISION.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl leading-relaxed"
          >
            Alnaciim Engineering delivers the technical work behind every project the group undertakes. Water infrastructure, power systems, and custom industrial builds.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
