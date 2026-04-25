"use client";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function GroupHero() {
  const { hero } = CONTENT.group;

  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-accent-teal/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-8 border border-primary/10"
            >
              <Zap size={14} fill="currentColor" className="opacity-80" />
              {hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-[800] leading-[1.05] tracking-[-0.04em] text-ink mb-8 font-heading uppercase"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[18px] md:text-[20px] text-slate-500 leading-relaxed mb-12 max-w-[640px] font-[450]"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl text-[16px] font-[700] transition-all flex items-center justify-center gap-2 group shadow-premium hover:-translate-y-1 font-heading"
              >
                Start a Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-ink border border-slate-200 px-10 py-5 rounded-2xl text-[16px] font-[700] transition-all flex items-center justify-center gap-2 hover:-translate-y-1 shadow-sm font-heading"
              >
                Browse Our Work
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="mt-16 flex items-center gap-8 border-t border-slate-100 pt-8"
            >
               <div className="flex items-center gap-2 text-[12px] font-[600] text-slate-400 uppercase tracking-wider">
                  <Shield size={16} />
                  ISO Certified
               </div>
               <div className="flex items-center gap-2 text-[12px] font-[600] text-slate-400 uppercase tracking-wider">
                  <Globe size={16} />
                  Nationwide Presence
               </div>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 perspective-2000"
            >
              {/* Main Visual Container */}
               <div className="relative rounded-[40px] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,102,255,0.05)] bg-white group transform transition-all duration-700 hover:-translate-y-2">
                <div className="relative aspect-[4/5] lg:aspect-[3.8/4.8] flex items-center justify-center p-12">
                   <img 
                      src="/images/alnaciim_logo_final.png?v=3" 
                      alt="Alnaciim Group Logo" 
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
              </div>


            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
