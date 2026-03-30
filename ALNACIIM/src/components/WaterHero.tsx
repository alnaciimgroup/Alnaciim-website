"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function WaterHero() {
  const { hero } = CONTENT.water;

  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFBFF]">
      
      {/* Stripe-style Mesh Gradients (Blue Mapped) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[600px] bg-[#0066FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[600px] bg-[#00D2FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[600px] bg-[#F0F7FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
       {/* Center Text Block */}
       <div className="flex flex-col items-center justify-center text-center z-20 relative mt-10">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-[#0066FF] text-[12px] font-[700] tracking-widest uppercase mb-8 shadow-sm"
         >
           <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse"></span>
           {hero.eyebrow}
         </motion.div>
         
         <motion.h1 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="text-[64px] md:text-[88px] lg:text-[100px] font-[900] tracking-tighter text-slate-900 leading-[0.95] max-w-[1000px] mb-8 whitespace-pre-line"
         >
           {hero.headline}
         </motion.h1>

         <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-[18px] md:text-[20px] text-slate-600 font-[400] max-w-[700px] mb-12 leading-[1.6]"
         >
           {hero.description}
         </motion.p>

         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.3 }}
           className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
         >
           <Link href="/work" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-[600] text-[15px] hover:bg-black transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
             Show Infrastructure <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </Link>
           <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-[600] text-[15px] hover:bg-slate-50 transition-all shadow-sm">
             Talk to Water Expert
           </Link>
         </motion.div>
       </div> 

        {/* Floating Dashboard Element pushing out of the section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
           className="w-full mt-20 relative lg:-mb-40 z-20"
        >
          <div className="w-full aspect-[21/9] bg-white rounded-2xl border border-slate-200 shadow-[0_20px_50px_rgb(0,0,0,0.1)] overflow-hidden relative group">
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
             
             {/* Image Underlay */}
             <img src="/images/water_purification_industrial_1774886325880.png" alt="Industrial RO Plant" className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700" />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
