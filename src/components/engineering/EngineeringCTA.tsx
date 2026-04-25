"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function EngineeringCTA() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Structural Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-blue-500/20"
          >
            Get Started
          </motion.div>
          
          <h2 className="text-[36px] md:text-[56px] font-[900] text-white tracking-tight mb-8 uppercase leading-[1.1] max-w-4xl">
            Have a project that needs engineering?
          </h2>
          
          <p className="text-[16px] md:text-[18px] text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-[450]">
            ALNM Engineering takes the brief from design through to a commissioned, maintained system. Tell us what needs to be built — water, power, automation or custom works — and we will tell you how we deliver it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-[700] transition-all shadow-xl shadow-blue-900/40 group uppercase tracking-[0.2em] text-[12px]"
            >
              Send a Project Brief
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-[700] transition-all uppercase tracking-[0.2em] text-[12px]"
            >
              Contact an Engineer
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
