"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function EnergyHero() {
  const { hero } = CONTENT.energy;

  return (
    <section className="relative w-full pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-[#FAFBFF]">
      
      {/* Stripe-style Mesh Gradients (Orange Mapped) - Old Design Restored */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[450px] bg-[#FF5A00] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[450px] bg-[#FF8C00] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[500px] bg-[#FFF5F0] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Dashboard Element - NOW FIRST */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
           className="w-full mb-20 relative z-20"
        >
          <div className="w-full aspect-[21/9] bg-white rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgb(0,0,0,0.1)] overflow-hidden relative group">
             {/* Mock Dashboard UI Top Bar */}
             <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
               <div className="flex gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
               </div>
               <div className="mx-auto w-48 h-5 bg-white rounded-md border border-slate-200 flex items-center justify-center">
                 <div className="w-24 h-1.5 bg-slate-100 rounded-full"></div>
               </div>
             </div>
             
             {/* Image Underlay */}
             <img src="/images/solar_power_system.png" alt="Industrial Energy Infrastructure" className="absolute inset-0 w-full h-full object-cover object-bottom block filter brightness-[0.98] group-hover:scale-105 transition-transform duration-700" />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
          </div>
        </motion.div>

       {/* Center Text Block */}
       <div className="flex flex-col items-center justify-center text-center z-20 relative mb-12">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-[#FF5A00] text-[10px] font-[700] tracking-[0.2em] uppercase mb-8 shadow-sm"
         >
           <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] animate-pulse"></span>
           {hero.eyebrow}
         </motion.div>
         
         <motion.h1 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-[40px] md:text-[52px] lg:text-[60px] font-[900] tracking-tighter text-slate-900 leading-[1.05] max-w-[850px] mb-8 whitespace-pre-line uppercase"
         >
           {hero.headline}
         </motion.h1>

         <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="text-[15px] md:text-[16px] text-slate-600 font-[400] max-w-[600px] mb-10 leading-relaxed"
         >
           {hero.description}
         </motion.p>

         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.6 }}
           className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
         >
           <Link href="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF5A00] text-white rounded-xl font-bold text-[13px] hover:bg-[#e65100] transition-all uppercase tracking-widest shadow-lg shadow-orange-500/10">
             Enquire for Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </Link>
           <Link href="/work" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-[13px] hover:bg-slate-50 transition-all uppercase tracking-widest">
             Portfolio View
           </Link>
         </motion.div>
       </div> 

      </div>
    </section>
  );
}
