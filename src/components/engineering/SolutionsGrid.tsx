"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CONTENT } from "@/data/content";

export default function SolutionsGrid() {
  const { items } = CONTENT.engineering_solutions;

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col gap-32">
          {items.map((sol, idx) => (
            <motion.div 
              key={sol.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className={`relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* SECTION: Engineering Solutions Grid */}
                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              {/* Text Side */}
              <div className="flex flex-col">
                <span className="text-[14px] font-[900] text-blue-600 mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-600"></span>
                  {sol.id}
                </span>
                
                <h3 className="text-[36px] md:text-[48px] font-[900] tracking-tighter text-[#0F172A] mb-8 leading-[1]">
                  {sol.title}
                </h3>
                
                <p className="text-[17px] md:text-[19px] text-slate-500 font-[450] mb-10 leading-[1.6]">
                  {sol.subtext}
                </p>

                <ul className="grid grid-cols-1 gap-5 mb-12">
                  {sol.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-4">
                      <div className="mt-1.5 w-4 h-4 rounded-full border-2 border-orange-400 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                      </div>
                      <span className="text-[16px] font-[600] text-[#0F172A] tracking-tight">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button 
                  whileHover={{ x: 8 }}
                  className="inline-flex items-center gap-3 text-blue-600 font-[800] text-[13px] uppercase tracking-[0.2em] group"
                >
                  Request a Technical Proposal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
