"use client";
import { motion } from "framer-motion";

export default function TrustedLeaders() {
  const logos = [
    { name: "Puntland Gov.", label: "State Protocol" },
    { name: "UNICEF", label: "Global Dev" },
    { name: "WHO Standard", label: "Health Audit" },
    { name: "Garowe General", label: "Medical Hub" },
    { name: "Galkayo Hub", label: "Logistics Node" }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 relative border-t border-slate-200">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
        
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px bg-slate-300 w-12" />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-500 text-[13px] font-bold uppercase tracking-widest"
          >
            Trusted by 850+ major regional operations
          </motion.p>
          <div className="h-px bg-slate-300 w-12" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((logo, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
               className="flex flex-col items-center group cursor-default"
             >
               <span className="text-xl md:text-2xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors duration-500 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                 {logo.name}
               </span>
               <span className="text-[11px] font-bold text-slate-400/70 tracking-widest mt-1 group-hover:text-blue-600 transition-colors duration-500 uppercase">
                 {logo.label}
               </span>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
