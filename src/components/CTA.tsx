"use client";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-blue-600 p-12 md:p-20 lg:p-32 overflow-hidden shadow-2xl flex flex-col items-center text-center"
        >
          {/* Subtle Technical Pattern Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-10 relative z-10"
          >
            <div className="w-8 h-px bg-white/40" />
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              Strategic Deployment
            </span>
            <div className="w-8 h-px bg-white/40" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white mb-10 relative z-10 leading-[1.1] max-w-4xl font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to build your <span className="italic">infrastructure?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-16 leading-relaxed relative z-10 font-light"
          >
            Connect with our engineering team for a technical consultation. We deliver end-to-end solutions from design to commissioning.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 w-full sm:w-auto"
          >
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 font-bold transition-all hover:bg-slate-50 flex items-center justify-center gap-3 group text-[15px] uppercase tracking-widest"
            >
              Inquire Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border border-white/30 font-bold transition-all hover:bg-white/10 flex items-center justify-center gap-3 text-[15px] uppercase tracking-widest"
            >
              Contact Sales
              <Mail size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
