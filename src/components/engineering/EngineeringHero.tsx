"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function EngineeringHero() {
  const { hero } = CONTENT.engineering;

  return (
    <section className="relative w-full pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-[#FAFBFF]">
      
      {/* Stripe-style Mesh Gradients (Blue Mapped) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[140px] opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[450px] bg-secondary rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Dashboard Element - NOW FIRST */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
           className="w-full mb-16 relative z-20"
        >
          <div className="w-full aspect-[21/9] bg-white rounded-[2rem] border border-primary-light shadow-fluid overflow-hidden relative group">
             {/* Mock Dashboard UI Top Bar */}
             <div className="h-12 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               <div className="mx-auto w-48 h-6 bg-white rounded border border-slate-200 flex items-center justify-center">
                 <div className="w-24 h-2 bg-slate-100 rounded-full"></div>
               </div>
             </div>
             
             {/* SECTION: Engineering Hero */}
             <img src="/images/water_ro_treatment.png" alt="Engineering Capacity" className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700" />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center text-center z-20 relative mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-blue-500 text-[11px] font-[800] tracking-[0.25em] uppercase mb-8"
          >
            {hero.eyebrow}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[42px] md:text-[64px] lg:text-[88px] font-[900] tracking-tighter text-[#0F172A] leading-[1] max-w-[1200px] mb-8"
          >
            {hero.headline}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[17px] md:text-[19px] text-slate-500 font-[450] max-w-[850px] mb-12 leading-[1.6]"
          >
            {hero.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link href="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0F172A] text-white rounded-2xl font-[700] text-[12px] hover:bg-[#1E293B] transition-all shadow-xl hover:-translate-y-1 uppercase tracking-widest">
              Send a Project Brief <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div> 

      </div>
    </section>
  );
}
