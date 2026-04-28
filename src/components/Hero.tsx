"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
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
              INFRASTRUCTURE — WATER — ENERGY — ENGINEERING
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[1.1] mb-8 font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            POWERING <span className="text-blue-600 italic">LIFE.</span><br />
            PURIFYING <br /> TOMORROW.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12"
          >
            Somalia's integrated infrastructure group. From water treatment and energy systems to precision engineering, Alnaciim Group delivers water infrastructure, energy and engineering projects from design through commissioning and beyond.
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
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/images/home_hero_new.png" 
            alt="Alnaciim Facility" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
        
      </div>

    </section>
  );
}
