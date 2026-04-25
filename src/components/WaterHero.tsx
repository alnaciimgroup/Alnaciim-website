"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function WaterHero() {
  const { hero } = CONTENT.water;

  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      
      {/* Subtle Dot Grid background matching site-wide architectural theme */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0066FF 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        
        {/* Expansive Hero Imagery - NOW FIRST */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
           className="w-full mb-20 relative z-20"
        >
          <div className="w-full aspect-[21/9] bg-slate-100 rounded-[3rem] overflow-hidden relative group border border-slate-200 shadow-2xl">
             <img 
               src="/images/nuwaco_ro_plant.png" 
               alt="Industrial RO Plant Infrastructure" 
               className="absolute inset-0 w-full h-full object-cover object-bottom block group-hover:scale-105 transition-transform duration-[2s] ease-out" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
             
             {/* Architectural Overlay Tag */}
             <div className="absolute bottom-10 left-10 flex items-center gap-4">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl">
                   <span className="text-white text-[12px] font-bold tracking-widest uppercase">Municipal Scale RO Facility — Garowe</span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Eyebrow Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 text-[#0066FF] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm"
        >
          {hero.eyebrow}
        </motion.div>

        {/* Headline with Structural Horizontal Lines */}
        <div className="relative w-full mb-8 flex items-center justify-center gap-10">
          {/* Left Structural Line */}
          <div className="hidden lg:block h-[1px] flex-grow bg-[#0066FF]/20 max-w-[400px]" />
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[40px] md:text-[52px] lg:text-[60px] font-[900] tracking-[0.12em] text-slate-900 leading-[1.05] text-center uppercase"
          >
            {hero.headline}
          </motion.h1>
          
          {/* Right Structural Line */}
          <div className="hidden lg:block h-[1px] flex-grow bg-[#0066FF]/20 max-w-[400px]" />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[15px] md:text-[16px] text-slate-500 font-[450] max-w-xl text-center mb-10 leading-relaxed"
        >
          {hero.description}
        </motion.p>

        {/* Precise CTA Pair */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0066FF] text-white rounded-xl font-bold text-[13px] hover:bg-blue-700 transition-all uppercase tracking-widest shadow-lg shadow-blue-500/20">
            Enquire for Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/work" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-[13px] hover:bg-slate-50 transition-all uppercase tracking-widest">
            Portfolio View
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
