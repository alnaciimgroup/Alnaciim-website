"use client";

import { ArrowRight, Droplets, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function WaterHero() {
  const { hero } = CONTENT.water;

  return (
    <section className="relative w-full min-h-[90vh] bg-white flex flex-col lg:flex-row border-b border-slate-200">
      
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-20 pt-32 pb-24 lg:py-0 relative z-10 bg-white">
        <div className="max-w-xl w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
              {hero.eyebrow}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[1.1] mb-8 font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            PURIFYING <br /> THE <span className="text-blue-600 italic">FUTURE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12"
          >
            {hero.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-3 group text-[15px]"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/work" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-50 text-slate-900 border border-slate-300 font-medium transition-colors flex items-center justify-center text-[15px]"
            >
              Browse Our Work
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full overflow-hidden bg-slate-100">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="/images/water_wells_30plus_boreholes.png" 
            alt="Water Infrastructure" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
        </motion.div>
        
        {/* Metric Overlay */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-10 right-10 bg-white p-6 shadow-xl max-w-sm hidden md:block"
        >
          <div className="text-3xl font-bold text-slate-900 mb-2 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>Hydraulic Asset</div>
          <p className="text-sm text-slate-500 font-medium">Delivering 2,400 m³ daily output across municipal municipal facilities with ISO-certified standards.</p>
        </motion.div>
      </div>

    </section>
  );
}
