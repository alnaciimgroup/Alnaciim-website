"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function DigitalHero() {
  const { hero } = CONTENT.digital;

  return (
    <section className="relative w-full pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-[#FAFBFF]">
      
      {/* Stripe-style Mesh Gradients (Blue Mapped) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[140px] opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[450px] bg-secondary rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
       {/* Center Text Block */}
       <div className="flex flex-col items-center justify-center text-center z-20 relative mt-6">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-fluid bg-white/80 backdrop-blur-md border border-primary-light text-primary text-[11px] font-[700] tracking-widest uppercase mb-6 shadow-sm"
         >
           <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
           {hero.eyebrow}
         </motion.div>
         
         <motion.h1 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="text-[48px] md:text-[64px] lg:text-[72px] font-[900] tracking-tight text-ink leading-[1.05] max-w-[850px] mb-6 whitespace-pre-line"
         >
           {hero.headline}
         </motion.h1>

         <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-[17px] md:text-[18px] text-slate-600 font-[400] max-w-[650px] mb-10 leading-[1.6]"
         >
           {hero.description}
         </motion.p>

         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.3 }}
           className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
         >
           <Link href="/digital/solutions" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-fluid font-[600] text-[14px] hover:bg-primary-dark transition-all shadow-fluid hover:-translate-y-0.5">
             Digital Infrastructure <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </Link>
           <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white text-ink border border-primary-light rounded-fluid font-[600] text-[14px] hover:bg-primary-light hover:text-primary transition-all shadow-sm">
             Talk to Digital Expert
           </Link>
         </motion.div>
       </div> 

        {/* Floating Dashboard Element pushing out of the section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
           className="w-full mt-12 relative lg:-mb-32 z-20"
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
             
             {/* Image Underlay */}
             <img src="/images/industrial_automation_control_room_1774871867828.png" alt="Digital Infrastructure" className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700" />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
