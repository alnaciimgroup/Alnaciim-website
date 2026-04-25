"use client";
import { ArrowRight, Waves } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFBFF]">
      
      {/* Stripe-style Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[600px] bg-[#0066FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[600px] bg-[#00D2FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[600px] bg-[#E5F0FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

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
           East Africa's Infrastructure Group
         </motion.div>
         
         <motion.h1 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="text-[64px] md:text-[88px] lg:text-[100px] font-[900] tracking-tighter text-slate-900 leading-[0.95] max-w-[1000px] mb-8"
         >
           Water. Energy.<br />
           Engineering.<br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#0066FF]">Delivered.</span>
         </motion.h1>

         <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-[18px] md:text-[20px] text-slate-600 font-[400] max-w-[600px] mb-12 leading-[1.6]"
         >
           Somalia's integrated infrastructure group. From water treatment and energy systems to precision engineering, Alnaciim Group delivers water infrastructure, energy and engineering projects from design through commissioning and beyond.
         </motion.p>

         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.3 }}
           className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
         >
           <Link href="/work" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-[600] text-[15px] hover:bg-black transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
             Browse Our Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </Link>
           <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-[600] text-[15px] hover:bg-slate-50 transition-all shadow-sm">
             Talk to an Engineer
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
          <div className="w-full aspect-[21/9] bg-white rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgb(0,0,0,0.1)] overflow-hidden relative group">
             {/* Image Underlay */}
             <img src="/images/nuwaco_ro_plant.png" alt="PureAlnaciim Water's Production" className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-110 transition-transform duration-[2s] ease-out" />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
