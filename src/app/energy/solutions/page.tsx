"use client";

import { ArrowRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function EnergySolutions() {
  const { items, hero } = CONTENT.energy_solutions;

  return (
    <main className="bg-white min-h-screen selection:bg-blue-600 selection:text-white pb-32">
      
      {/* 1. DARK TOP BAR - FROM SCREENSHOT 1 */}
      <div className="pt-24 lg:pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="bg-[#1A1A14] py-12 px-12 rounded-sm mb-20 flex items-center justify-center lg:justify-start">
           <span className="text-white text-xl md:text-2xl font-medium tracking-tight">
             ALNACIIM Energy — solutions Page
           </span>
        </div>
      </div>

      {/* 2. HERO SECTION - FROM SCREENSHOT 1 */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-40">
        <div className="max-w-4xl">
           <div className="text-[11px] font-bold text-[#FF5C00] uppercase tracking-[0.4em] mb-10">
              {hero.eyebrow}
           </div>
           <h1 
             className="text-6xl md:text-8xl lg:text-[100px] font-bold text-[#001B3D] leading-[0.95] mb-12 font-serif"
             style={{ fontFamily: "var(--font-playfair)" }}
           >
             {hero.headline}
           </h1>
           <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
             {hero.description}
           </p>
        </div>
      </section>

      {/* 3. SOLUTIONS MATRIX - FROM SCREENSHOTS 2, 3, & 4 */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="space-y-48">
          {items.map((item, idx) => (
            <div key={idx} className="max-w-5xl">
              {/* Large Navy ID Number - if provided in screenshot */}
              {item.id && (
                <div className="text-[120px] lg:text-[160px] font-bold text-[#001B3D] leading-none mb-12 select-none">
                  {item.id}
                </div>
              )}

              <div className="space-y-12">
                {/* Title: Orange for numbered sections, Navy for others */}
                <h2 
                  className={`text-5xl md:text-7xl font-bold font-serif leading-tight ${item.id ? 'text-[#FF5C00]' : 'text-[#001B3D]'}`}
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h2>
                
                <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
                  {item.subtext}
                </p>

                <div className="pt-8 border-t border-slate-100">
                  <ul className="space-y-4">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-lg md:text-xl text-slate-500 font-light flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-3 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FINAL CTA - FOR BRAND CONSISTENCY */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mt-64">
        <div className="relative bg-[#001B3D] rounded-[3rem] overflow-hidden p-12 md:p-24 shadow-2xl">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full mb-8">
                <Plus size={14} className="text-[#FF5C00]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">TECHNICAL SURVEYS</span>
              </div>
              <h2 className="text-4xl md:text-[70px] font-bold text-white mb-6 font-serif leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Start your technical <br /> configuration.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-5 bg-[#FF5C00] hover:bg-[#E65200] text-white font-bold uppercase tracking-widest text-[13px] transition-all flex items-center justify-center gap-3 group"
              >
                REQUEST AUDIT <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
