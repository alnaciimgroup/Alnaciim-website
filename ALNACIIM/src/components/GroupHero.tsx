"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function GroupHero() {
  const { hero } = CONTENT.group;

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Aesthetics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm border border-slate-200"
          >
            {hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[48px] md:text-[82px] font-[900] leading-[1] tracking-[-0.04em] text-ink mb-8"
          >
            {hero.headline.split('\n')[0]}<br />
            <span className="text-primary">{hero.headline.split('\n')[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] md:text-[21px] text-slate-500 leading-relaxed mb-12 max-w-2xl font-[450]"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl text-[15px] font-[700] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-ink border border-slate-200 px-10 py-5 rounded-2xl text-[15px] font-[700] transition-all flex items-center justify-center gap-2"
            >
              Browse Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Visual Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute right-[-5%] top-[20%] w-[45%] aspect-square hidden xl:block"
      >
        <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[4rem] rotate-12 blur-3xl" />
            <img 
              src="/images/hero_section_1769362975488.png" 
              alt="Infrastructure Excellence" 
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
            />
        </div>
      </motion.div>
    </section>
  );
}
