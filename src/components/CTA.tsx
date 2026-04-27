"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-white relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-[#0a192f] rounded-[40px] p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Content Area */}
          <div className="max-w-3xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Built for <span className="text-blue-400 italic">Permanence.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-slate-400 font-light max-w-xl"
              >
                Alnaciim Group delivers the technical foundation for East Africa's future.
              </motion.p>
          </div>

          {/* Buttons Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-blue-500 hover:bg-blue-600 text-white font-bold transition-all rounded-2xl flex items-center justify-center text-[13px] uppercase tracking-widest"
            >
              Start Project
            </Link>
            <Link 
              href="/catalog" 
              className="w-full sm:w-auto px-10 py-5 bg-[#1a2b4a] hover:bg-[#25395d] text-white border border-white/10 font-bold transition-all rounded-2xl flex items-center justify-center text-[13px] uppercase tracking-widest"
            >
              Catalog
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
