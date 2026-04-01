"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function GroupHero() {
  const { hero } = CONTENT.group;

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[35%] h-[500px] bg-slate-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 text-slate-400 text-[11px] font-bold tracking-widest uppercase mb-10 border border-slate-100 shadow-sm"
            >
              {hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[48px] md:text-[68px] lg:text-[76px] font-[900] leading-[1.02] tracking-[-0.03em] text-slate-900 mb-8 whitespace-pre-line"
            >
              Powering Life.<br />
              <span className="text-primary italic">Purifying Tomorrow.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[17px] md:text-[18px] text-slate-500 leading-relaxed mb-12 max-w-[620px] font-[450]"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-9 py-4.5 rounded-2xl text-[15px] font-[700] transition-all flex items-center justify-center gap-2 group shadow-[0_15px_30px_-5px_rgba(0,168,255,0.35)] hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-9 py-4.5 rounded-2xl text-[15px] font-[700] transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                Browse Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right Mockup Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 perspective-1000"
            >
              {/* Main Dashboard Mockup */}
              <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] bg-white group">
                {/* Mock Browser Header */}
                <div className="h-11 bg-slate-50/50 border-b border-slate-100 flex items-center px-5 gap-2.5">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                   </div>
                   <div className="mx-auto w-40 h-5 bg-white rounded-md border border-slate-100" />
                </div>

                <div className="relative aspect-[4/5] lg:aspect-[3.6/4.5] overflow-hidden">
                   <img 
                      src="/images/alnaciim_hero_glass_1771788106112.png" 
                      alt="Water Dashboard" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                   />
                </div>
              </div>

              {/* Stats Overlay Pill (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -left-8 bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-5 shadow-2xl z-20 flex items-center gap-4 hidden md:flex"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <div className="w-6 h-6 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Live Output</div>
                  <div className="text-xl font-black text-slate-900 tracking-tight">600k L / day</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Element Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
