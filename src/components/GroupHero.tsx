"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function GroupHero() {
  const { hero } = CONTENT.group;

  return (
    <section className="relative w-full pt-40 pb-32 bg-[#050505] overflow-hidden">
      
      {/* Hyper-Modern Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-transparent rounded-full blur-[120px]" />
      </div>
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-white/10 text-white/70 text-[12px] font-bold tracking-widest uppercase mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 max-w-5xl leading-[1.05]"
        >
          Powering East Africa's <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Infrastructure.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-24"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-[#0070FF] hover:bg-blue-600 text-white px-10 py-4 rounded-full text-[14px] font-bold shadow-[0_0_20px_rgba(0,112,255,0.3)] hover:shadow-[0_0_35px_rgba(0,112,255,0.5)] transition-all flex items-center justify-center gap-2 group uppercase tracking-wider"
          >
            Initiate Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto glass-panel hover:bg-white/5 text-white border border-white/10 px-10 py-4 rounded-full text-[14px] font-bold shadow-xl transition-all flex items-center justify-center uppercase tracking-wider"
          >
            Explore Solutions
          </Link>
        </motion.div>

        {/* Hyper-Modern Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-4xl relative group"
        >
           {/* Ambient Glow behind the container */}
           <div className="absolute inset-0 bg-blue-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           
           <div className="relative rounded-[2.5rem] border border-white/10 glass-card p-16 md:p-24 overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
              <img 
                src="/images/alnaciim_logo_final.png?v=3" 
                alt="Alnaciim Group Logo" 
                className="h-32 md:h-56 w-auto object-contain relative z-20 brightness-0 invert" 
              />
           </div>
        </motion.div>

      </div>
    </section>
  );
}
