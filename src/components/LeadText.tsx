"use client";
import { motion } from "framer-motion";

export default function LeadText() {
  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/10 text-white/50 text-[11px] font-bold tracking-[0.25em] uppercase mb-10"
          >
            Integrated Capability
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-10 max-w-5xl uppercase"
          >
            Water. Energy.<br />
            Engineering. <span className="text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]">Delivered.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-zinc-500 font-medium leading-relaxed max-w-4xl mx-auto"
          >
            Somalia's leading integrated infrastructure group. We combine technical precision with local expertise to deliver large-scale water treatment, renewable energy, and precision engineering projects that build a sustainable future.
          </motion.p>
        </div>
      </div>
      
      {/* Structural Decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />
    </section>
  );
}
