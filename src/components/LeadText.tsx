"use client";
import { motion } from "framer-motion";

export default function LeadText() {
  return (
    <section className="py-32 bg-white relative overflow-hidden text-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-8"
          >
            Integrated Capability
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[40px] md:text-[64px] lg:text-[72px] font-[800] leading-[1.1] tracking-[-0.04em] text-ink mb-10 font-heading uppercase max-w-4xl"
          >
            Water. Energy.<br />
            Engineering. <span className="text-primary">Delivered.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] md:text-[20px] text-slate-500 font-[450] leading-relaxed max-w-3xl mx-auto"
          >
            Somalia's leading integrated infrastructure group. We combine technical precision with local expertise to deliver large-scale water treatment, renewable energy, and precision engineering projects that build a sustainable future.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
