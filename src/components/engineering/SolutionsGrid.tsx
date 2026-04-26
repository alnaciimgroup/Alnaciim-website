"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function SolutionsGrid() {
  const { items } = CONTENT.engineering_solutions;

  return (
    <section className="w-full py-40 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col gap-40">
          {items.map((sol, idx) => (
            <motion.div 
              key={sol.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative aspect-[16/11] overflow-hidden border border-slate-200 group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-105" 
                />
              </motion.div>

              {/* Text Side */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-[11px] font-bold text-blue-600 tracking-widest uppercase">
                    Architecture // {sol.id}
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                  {sol.title}
                </h3>
                
                <p className="text-xl text-slate-500 font-light mb-12 leading-relaxed max-w-xl">
                  {sol.subtext}
                </p>

                <ul className="space-y-6 mb-12 border-l border-slate-100 pl-8">
                  {sol.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex flex-col gap-1">
                      <span className="text-[13px] font-bold text-slate-900 uppercase tracking-tight">
                        {bullet.split(':')[0]}
                      </span>
                      {bullet.includes(':') && (
                        <span className="text-[13px] text-slate-500 font-light">
                          {bullet.split(':')[1]}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-4 w-fit transition-all"
                >
                  Request Technical Proposal 
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
